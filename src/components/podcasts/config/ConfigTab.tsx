import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ConfigProgress } from "./ConfigProgress";
import { ConfigContent } from "./ConfigContent";
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
      // Generate a simple UUID for the podcast
      const newPodcastId = crypto.randomUUID();
      
      // Update the podcasts data in the JSON file
      const podcastData = {
        id: newPodcastId,
        name: podcastConfig.industry || 'My Podcast',
        description: `A podcast about ${podcastConfig.skills.join(', ')}`,
        cover_image: podcastConfig.coverImage?.url,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      };

      // In a real app, we would save this to the JSON file
      console.log('Saving podcast data:', podcastData);

      setSavedPodcastId(newPodcastId);
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
      // Update the existing podcast data in the JSON file
      const updatedPodcastData = {
        id: savedPodcastId,
        name: podcastConfig.industry || 'My Podcast',
        description: `A podcast about ${podcastConfig.skills.join(', ')}`,
        cover_image: podcastConfig.coverImage?.url,
        updated_at: new Date().toISOString()
      };

      // In a real app, we would update this in the JSON file
      console.log('Updating podcast data:', updatedPodcastData);

      setIsEditing(false);
      toast.success("Podcast configuration updated successfully!");
    } catch (error) {
      console.error('Error updating podcast config:', error);
      toast.error("Failed to update podcast configuration. Please try again.");
    }
  };

  const handleDelete = async () => {
    try {
      // In a real app, we would delete this from the JSON file
      console.log('Deleting podcast:', savedPodcastId);

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