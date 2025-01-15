import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ConfigProgress } from "./ConfigProgress";
import { ConfigContent } from "./ConfigContent";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Alert, AlertDescription } from "@/components/ui/alert";

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
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 5;
  const [isPreview, setIsPreview] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [savedPodcastId, setSavedPodcastId] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authChecked, setAuthChecked] = useState(false);

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

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setIsAuthenticated(!!session);
      setAuthChecked(true);
    };

    checkAuth();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setIsAuthenticated(!!session);
    });

    return () => subscription.unsubscribe();
  }, []);

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
    if (!isAuthenticated) {
      toast.error("Please log in to save your podcast configuration");
      return;
    }

    try {
      const { data: userData } = await supabase.auth.getUser();
      if (!userData.user) {
        toast.error("You must be logged in to save a podcast");
        return;
      }

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

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  const handleSaveEdit = async () => {
    try {
      const { error } = await supabase
        .from('podcasts')
        .update({
          name: podcastConfig.industry || 'My Podcast',
          description: `A podcast about ${podcastConfig.skills.join(', ')}`,
          cover_image: podcastConfig.coverImage?.url,
        })
        .eq('id', savedPodcastId);

      if (error) throw error;

      setIsEditing(false);
      toast.success("Podcast configuration updated successfully!");
    } catch (error) {
      console.error('Error updating podcast config:', error);
      toast.error("Failed to update podcast configuration. Please try again.");
    }
  };

  const handleDelete = async () => {
    try {
      const { error } = await supabase
        .from('podcasts')
        .delete()
        .eq('id', savedPodcastId);

      if (error) throw error;

      toast.success("Podcast deleted successfully!");
      navigate('/');
    } catch (error) {
      console.error('Error deleting podcast:', error);
      toast.error("Failed to delete podcast. Please try again.");
    }
  };

  const handleNext = () => {
    if (currentStep === totalSteps) {
      handleFinish();
    } else {
      setCurrentStep(prev => Math.min(totalSteps, prev + 1));
    }
  };

  if (!authChecked) {
    return <div>Loading...</div>;
  }

  return (
    <div className="space-y-8">
      {!isAuthenticated && currentStep === totalSteps && (
        <Alert>
          <AlertDescription>
            Please log in to save your podcast configuration
          </AlertDescription>
        </Alert>
      )}
      
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
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white">Podcast Configuration Preview</h2>
            <ConfigContent 
              currentStep={5} 
              config={podcastConfig}
              onConfigUpdate={updateConfig}
              readOnly={!isEditing}
            />
            
            <div className="flex gap-4 mt-8">
              {!isEditing ? (
                <>
                  <button
                    onClick={handleEdit}
                    className="profile-button profile-button-primary"
                  >
                    Edit
                  </button>
                  <button
                    onClick={handleDelete}
                    className="profile-button profile-button-outline text-red-500 hover:bg-red-500 hover:text-white"
                  >
                    Delete
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={handleSaveEdit}
                    className="profile-button profile-button-primary"
                  >
                    Save
                  </button>
                  <button
                    onClick={handleCancelEdit}
                    className="profile-button profile-button-outline"
                  >
                    Cancel
                  </button>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
