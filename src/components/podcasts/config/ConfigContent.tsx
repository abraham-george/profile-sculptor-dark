import { IndustrySkillsStep } from './steps/IndustrySkillsStep';
import { SourcesStep } from './steps/SourcesStep';
import { StyleStep } from './steps/StyleStep';
import { CoverStep } from './steps/CoverStep';
import { ReviewStep } from './steps/ReviewStep';
import { PodcastConfig } from './types';

interface ConfigContentProps {
  currentStep: number;
  config: PodcastConfig;
  onConfigUpdate: (updates: Partial<PodcastConfig>) => void;
  readOnly?: boolean;
}

export const ConfigContent = ({ currentStep, config, onConfigUpdate, readOnly = false }: ConfigContentProps) => {
  const handleConfigUpdate = (updates: Partial<PodcastConfig>) => {
    if (!readOnly) {
      onConfigUpdate({
        ...config,
        ...updates
      });
    }
  };

  return (
    <div className="animate-fadeIn space-y-8">
      {currentStep === 1 && (
        <IndustrySkillsStep
          selectedIndustry={config.industry}
          selectedSkills={config.skills}
          onIndustrySelect={(industry) => !readOnly && handleConfigUpdate({ industry })}
          onSkillSelect={(skill) => {
            if (readOnly) return;
            const skills = config.skills.includes(skill)
              ? config.skills.filter(s => s !== skill)
              : [...config.skills, skill];
            handleConfigUpdate({ skills });
          }}
        />
      )}

      {currentStep === 2 && (
        <SourcesStep
          config={config}
          onUpdateConfig={handleConfigUpdate}
        />
      )}

      {currentStep === 3 && (
        <StyleStep
          style={config.style}
          onStyleChange={(style) => !readOnly && handleConfigUpdate({ style })}
        />
      )}

      {currentStep === 4 && (
        <CoverStep
          coverImage={config.coverImage}
          onCoverImageSelect={(coverImage) => !readOnly && handleConfigUpdate({ coverImage })}
          config={config}
          onConfigUpdate={handleConfigUpdate}
        />
      )}

      {currentStep === 5 && (
        <ReviewStep
          config={config}
          onConfigUpdate={readOnly ? () => {} : handleConfigUpdate}
          readOnly={readOnly}
        />
      )}
    </div>
  );
};