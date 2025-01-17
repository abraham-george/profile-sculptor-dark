import { ConfigProgress } from "./ConfigProgress";
import { ConfigContent } from "./ConfigContent";
import { PreviewMode } from "./preview/PreviewMode";
import { useConfigState } from "./hooks/useConfigState";
import { ConfigActions } from "./ConfigActions";
import { PodcastConfig } from "./types";

interface ConfigTabProps {
  existingConfig?: any;
}

export const ConfigTab = ({ existingConfig }: ConfigTabProps) => {
  const totalSteps = 5;
  const {
    currentStep,
    setCurrentStep,
    isPreview,
    setIsPreview,
    podcastConfig,
    setPodcastConfig,
    savedPodcastId,
    setSavedPodcastId
  } = useConfigState(existingConfig);

  const handleStepClick = (step: number) => {
    if (!isPreview) {
      setCurrentStep(step);
    }
  };

  const updateConfig = (updates: Partial<PodcastConfig>) => {
    setPodcastConfig(prev => ({
      ...prev,
      ...updates,
      style: {
        ...prev.style,
        ...(updates.style || {})
      }
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

  const handlePrevious = () => {
    setCurrentStep(prev => Math.max(1, prev - 1));
  };

  const handleNext = () => {
    setCurrentStep(prev => Math.min(totalSteps, prev + 1));
  };

  const handleSuccess = (podcastId: string) => {
    setSavedPodcastId(podcastId);
    setIsPreview(true);
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
            
            <ConfigActions 
              currentStep={currentStep}
              totalSteps={totalSteps}
              canProceed={canProceed()}
              onPrevious={handlePrevious}
              onNext={handleNext}
              config={podcastConfig}
              onSuccess={handleSuccess}
            />
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