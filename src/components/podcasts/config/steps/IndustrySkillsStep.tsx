import { useState } from 'react';

interface IndustrySkillsStepProps {
  selectedIndustry: string;
  selectedSkills: string[];
  onIndustrySelect: (industry: string) => void;
  onSkillSelect: (skill: string) => void;
}

export const IndustrySkillsStep = ({
  selectedIndustry,
  selectedSkills,
  onIndustrySelect,
  onSkillSelect,
}: IndustrySkillsStepProps) => {
  const industries = [
    'Technology', 'Finance', 'Healthcare', 'Education', 'Marketing'
  ];

  const skillsByIndustry: Record<string, string[]> = {
    'Technology': ['Software Development', 'Cloud Computing', 'AI/ML', 'Cybersecurity', 'DevOps'],
    'Finance': ['Investment Banking', 'Financial Analysis', 'Risk Management', 'Trading', 'Fintech'],
    'Healthcare': ['Medical Research', 'Healthcare Management', 'Biotechnology', 'Public Health', 'Telemedicine'],
    'Education': ['E-Learning', 'Curriculum Development', 'Educational Technology', 'Teaching', 'Assessment'],
    'Marketing': ['Digital Marketing', 'Brand Management', 'Content Strategy', 'Social Media', 'Market Research']
  };

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Industry</h3>
        <div className="flex flex-wrap gap-2">
          {industries.map((industry) => (
            <button
              key={industry}
              onClick={() => onIndustrySelect(industry)}
              className={selectedIndustry === industry ? 'bg-linkedin-blue text-white' : 'text-white'}
            >
              {industry}
            </button>
          ))}
        </div>
      </div>

      {selectedIndustry && (
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Skills</h3>
          <div className="flex flex-wrap gap-2">
            {skillsByIndustry[selectedIndustry].map((skill) => (
              <button
                key={skill}
                onClick={() => onSkillSelect(skill)}
                className={selectedSkills.includes(skill) ? 'bg-linkedin-blue text-white' : 'text-white'}
              >
                {skill}
              </button>
            ))}
          </div>
          {selectedSkills.length >= 3 && (
            <p className="text-sm text-linkedin-blue">Maximum 3 skills selected</p>
          )}
        </div>
      )}
    </div>
  );
};