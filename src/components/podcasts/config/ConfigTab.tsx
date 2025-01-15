import { useState } from "react";
import { ConfigProgress } from "./ConfigProgress";
import { ConfigContent } from "./ConfigContent";

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
    setCurrentStep(step);
  };

  const updateConfig = (updates: Partial<PodcastConfig>) => {
    setPodcastConfig(prev => ({
      ...prev,
      ...updates
    }));
  };

  return (
    <div className="space-y-8">
      <div>
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
            onClick={() => setCurrentStep(prev => Math.min(totalSteps, prev + 1))}
            className="profile-button profile-button-primary"
          >
            {currentStep === totalSteps ? 'Finish' : 'Next'}
          </button>
        </div>
      </div>
    </div>
  );
};