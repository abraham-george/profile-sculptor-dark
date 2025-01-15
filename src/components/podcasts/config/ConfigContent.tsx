import { useState } from 'react';
import { IndustrySkillsStep } from './steps/IndustrySkillsStep';
import { SourcesStep } from './steps/SourcesStep';
import { StyleStep } from './steps/StyleStep';
import { CoverStep } from './steps/CoverStep';
import { ReviewStep } from './steps/ReviewStep';

interface ConfigContentProps {
  currentStep: number;
}

export const ConfigContent = ({ currentStep }: ConfigContentProps) => {
  const [selectedIndustry, setSelectedIndustry] = useState<string>('');
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [selectedSources, setSelectedSources] = useState<string[]>([]);

  const handleSkillSelect = (skill: string) => {
    setSelectedSkills(prev => {
      if (prev.includes(skill)) {
        return prev.filter(s => s !== skill);
      }
      if (prev.length >= 3) {
        return prev;
      }
      return [...prev, skill];
    });
  };

  const handleSourceSelect = (source: string) => {
    setSelectedSources(prev => {
      if (prev.includes(source)) {
        return prev.filter(s => s !== source);
      }
      return [...prev, source];
    });
  };

  return (
    <div className="animate-fadeIn space-y-8">
      {currentStep === 1 && (
        <IndustrySkillsStep
          selectedIndustry={selectedIndustry}
          selectedSkills={selectedSkills}
          onIndustrySelect={setSelectedIndustry}
          onSkillSelect={handleSkillSelect}
        />
      )}

      {currentStep === 2 && (
        <SourcesStep
          selectedSources={selectedSources}
          onSourceSelect={handleSourceSelect}
        />
      )}

      {currentStep === 3 && <StyleStep />}
      {currentStep === 4 && <CoverStep />}
      {currentStep === 5 && <ReviewStep />}
    </div>
  );
};