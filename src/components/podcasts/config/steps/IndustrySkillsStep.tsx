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
    'Technology',
    'Finance',
    'Healthcare',
    'Marketing',
    'Sales',
    'Human Resources',
    'Engineering',
    'Education',
    'Consulting',
    'Media & Communications'
  ];

  const skillsByIndustry: Record<string, string[]> = {
    'Technology': [
      'Software Development',
      'Cloud Computing',
      'Data Science',
      'Artificial Intelligence',
      'DevOps',
      'Cybersecurity',
      'Product Management',
      'UX/UI Design'
    ],
    'Finance': [
      'Financial Analysis',
      'Investment Banking',
      'Risk Management',
      'Corporate Finance',
      'Financial Planning',
      'Private Equity',
      'Venture Capital',
      'Blockchain'
    ],
    'Healthcare': [
      'Healthcare Management',
      'Clinical Research',
      'Patient Care',
      'Health Informatics',
      'Medical Devices',
      'Biotechnology',
      'Public Health',
      'Pharmaceutical'
    ],
    'Marketing': [
      'Digital Marketing',
      'Content Marketing',
      'Social Media Marketing',
      'Brand Management',
      'Marketing Analytics',
      'SEO/SEM',
      'Email Marketing',
      'Marketing Strategy'
    ],
    'Sales': [
      'B2B Sales',
      'Account Management',
      'Sales Operations',
      'Business Development',
      'Inside Sales',
      'Sales Strategy',
      'Customer Success',
      'Sales Leadership'
    ],
    'Human Resources': [
      'Talent Acquisition',
      'Employee Relations',
      'HR Analytics',
      'Compensation & Benefits',
      'Training & Development',
      'HR Strategy',
      'Performance Management',
      'Organizational Development'
    ],
    'Engineering': [
      'Mechanical Engineering',
      'Electrical Engineering',
      'Civil Engineering',
      'Chemical Engineering',
      'Systems Engineering',
      'Industrial Engineering',
      'Aerospace Engineering',
      'Robotics'
    ],
    'Education': [
      'Instructional Design',
      'E-Learning',
      'Curriculum Development',
      'Educational Technology',
      'Higher Education',
      'K-12 Education',
      'Special Education',
      'Educational Leadership'
    ],
    'Consulting': [
      'Management Consulting',
      'Strategy Consulting',
      'IT Consulting',
      'Business Analysis',
      'Change Management',
      'Process Improvement',
      'Project Management',
      'Digital Transformation'
    ],
    'Media & Communications': [
      'Content Creation',
      'Public Relations',
      'Journalism',
      'Video Production',
      'Corporate Communications',
      'Media Planning',
      'Broadcasting',
      'Social Media Management'
    ]
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
              className={`rounded-full border border-linkedin-blue px-4 py-2 ${
                selectedIndustry === industry ? 'bg-linkedin-blue text-white' : ''
              }`}
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
                className={`rounded-full border border-linkedin-blue px-4 py-2 ${
                  selectedSkills.includes(skill) ? 'bg-linkedin-blue text-white' : ''
                }`}
                disabled={selectedSkills.length >= 3 && !selectedSkills.includes(skill)}
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