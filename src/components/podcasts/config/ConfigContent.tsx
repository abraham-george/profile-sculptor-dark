interface ConfigContentProps {
  currentStep: number;
}

export const ConfigContent = ({ currentStep }: ConfigContentProps) => {
  return (
    <div className="animate-fadeIn">
      {currentStep === 1 && (
        <div>
          <h3 className="text-xl mb-4">Skills</h3>
          <p className="text-gray-400">Configure your podcast skills...</p>
        </div>
      )}
      {currentStep === 2 && (
        <div>
          <h3 className="text-xl mb-4">Sources</h3>
          <p className="text-gray-400">Set up your content sources...</p>
        </div>
      )}
      {currentStep === 3 && (
        <div>
          <h3 className="text-xl mb-4">Style</h3>
          <p className="text-gray-400">Customize your podcast style...</p>
        </div>
      )}
      {currentStep === 4 && (
        <div>
          <h3 className="text-xl mb-4">Cover</h3>
          <p className="text-gray-400">Upload your podcast cover art...</p>
        </div>
      )}
      {currentStep === 5 && (
        <div>
          <h3 className="text-xl mb-4">Review</h3>
          <p className="text-gray-400">Review your podcast configuration...</p>
        </div>
      )}
    </div>
  );
};