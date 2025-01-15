import { useState } from "react";
import { ConfigProgress } from "./ConfigProgress";
import { ConfigContent } from "./ConfigContent";

export const ConfigTab = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 5;

  return (
    <div className="space-y-8">
      <div>
        <ConfigProgress currentStep={currentStep} totalSteps={totalSteps} />
        <div className="mt-8">
          <ConfigContent currentStep={currentStep} />
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