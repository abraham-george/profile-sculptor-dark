import { useState } from "react";
import { ConfigProgress } from "./ConfigProgress";
import { ConfigContent } from "./ConfigContent";
import { PreviewMode } from "./preview/PreviewMode";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export interface PodcastConfig {
  industry?: string;
  skills: string[];
  sources: string[];
  additionalContent: string[];
  style: {
    tone: string;
    length: number;
    frequency: string;
    music: string;
  };
  coverImage?: {
    type: 'existing' | 'generated';
    url: string;
  };
}

export const ConfigTab = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 5;
  const [isPreview, setIsPreview] = useState(false);
  const [savedPodcastId, setSavedPodcastId] = useState<string | null>(null);

  const [podcastConfig, setPodcastConfig] = useState<PodcastConfig>({
    skills: [],
    sources: [],
    additionalContent: [],
    style: {
      tone: 'professional',
      length: 30,
      frequency: 'weekly',
      music: 'upbeat'
    }
  });

  const handleStepClick = (step: number) => {
    if (!isPreview) {
      setCurrentStep(step);
    }
  };

  const updateConfig = (updates: Partial<PodcastConfig>) => {
    setPodcastConfig(prev => ({
      ...prev,
      ...updates
    }));
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return podcastConfig.skills.length > 0;
      default:
        return true;
    }
  };

  const handleFinish = async () => {
    try {
      const { data: userData } = await supabase.auth.getUser();
      
      const { data, error } = await supabase
        .from('podcasts')
        .insert({
          name: podcastConfig.industry || 'My Podcast',
          description: `A podcast about ${podcastConfig.skills.join(', ')}`,
          cover_image: podcastConfig.coverImage?.url,
          user_id: userData.user.id
        })
        .select()
        .single();

      if (error) throw error;

      setSavedPodcastId(data.id);
      setIsPreview(true);
      toast.success("Podcast configuration saved successfully!");
    } catch (error) {
      console.error('Error saving podcast config:', error);
      toast.error("Failed to save podcast configuration. Please try again.");
    }
  };

  const handleNext = () => {
    if (currentStep === totalSteps) {
      handleFinish();
    } else {
      setCurrentStep(prev => Math.min(totalSteps, prev + 1));
    }
  };

  return (
    <div className="space-y-8">
      <div>
        {!isPreview ? (
          <>
            <ConfigProgress 
              currentStep={currentStep} 
              totalSteps={totalSteps} 
              onStepClick={handleStepClick}
            />
            <div className="mt-8">
              <ConfigContent 
                currentStep={currentStep} 
                config={podcastConfig}
                onConfigUpdate={updateConfig}
              />
            </div>
            
            <div className="flex justify-between mt-8">
              <button
                onClick={() => setCurrentStep(prev => Math.max(1, prev - 1))}
                className="profile-button profile-button-outline"
                disabled={currentStep === 1}
              >
                Previous
              </button>
              <button
                onClick={handleNext}
                className={`profile-button ${canProceed() ? 'profile-button-primary' : 'profile-button-disabled bg-gray-400 cursor-not-allowed'}`}
                disabled={!canProceed()}
              >
                {currentStep === totalSteps ? 'Finish' : 'Next'}
              </button>
            </div>
          </>
        ) : (
          <PreviewMode 
            config={podcastConfig}
            podcastId={savedPodcastId!}
            onConfigUpdate={updateConfig}
          />
        )}
      </div>
    </div>
  );
};