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
  return (
    <div className="animate-fadeIn space-y-8">
      {currentStep === 1 && (
        <IndustrySkillsStep
          selectedIndustry={config.industry}
          selectedSkills={config.skills}
          onIndustrySelect={(industry) => !readOnly && onConfigUpdate({ industry })}
          onSkillSelect={(skill) => {
            if (readOnly) return;
            const skills = config.skills.includes(skill)
              ? config.skills.filter(s => s !== skill)
              : [...config.skills, skill];
            onConfigUpdate({ skills });
          }}
        />
      )}

      {currentStep === 2 && (
        <SourcesStep
          config={config}
          onUpdateConfig={onConfigUpdate}
        />
      )}

      {currentStep === 3 && (
        <StyleStep
          style={config.style}
          onStyleChange={(style) => !readOnly && onConfigUpdate({ style })}
        />
      )}

      {currentStep === 4 && (
        <CoverStep
          coverImage={config.coverImage}
          onCoverImageSelect={(coverImage) => !readOnly && onConfigUpdate({ coverImage })}
        />
      )}

      {currentStep === 5 && (
        <ReviewStep
          config={config}
          onConfigUpdate={readOnly ? () => {} : onConfigUpdate}
          readOnly={readOnly}
        />
      )}
    </div>
  );
};