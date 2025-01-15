import { useState } from 'react';
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface ConfigContentProps {
  currentStep: number;
}

export const ConfigContent = ({ currentStep }: ConfigContentProps) => {
  const [selectedIndustry, setSelectedIndustry] = useState<string>('');
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [selectedSources, setSelectedSources] = useState<string[]>([]);

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

  const sources = {
    inNetwork: {
      trustedVoices: [
        { name: 'Sarah Chen', image: 'https://images.unsplash.com/photo-1485833077593-4278bba3f11f' },
        { name: 'Mike Ross', image: 'https://images.unsplash.com/photo-1438565434616-3ef039228b15' },
        { name: 'Emily Wang', image: 'https://images.unsplash.com/photo-1501286353178-1ec881214838' },
        { name: 'David Kim', image: 'https://images.unsplash.com/photo-1469041797191-50ace28483c3' }
      ],
      companies: [
        { name: 'TechCorp', image: 'https://images.unsplash.com/photo-1452378174528-3090a4bba7b2' },
        { name: 'FinanceHub', image: 'https://images.unsplash.com/photo-1487252665478-49b61b47f302' },
        { name: 'HealthTech', image: 'https://images.unsplash.com/photo-1485833077593-4278bba3f11f' },
        { name: 'EduLearn', image: 'https://images.unsplash.com/photo-1438565434616-3ef039228b15' }
      ],
      newsletters: [
        { name: 'Tech Weekly', image: 'https://images.unsplash.com/photo-1501286353178-1ec881214838' },
        { name: 'Finance Daily', image: 'https://images.unsplash.com/photo-1469041797191-50ace28483c3' },
        { name: 'Health Digest', image: 'https://images.unsplash.com/photo-1452378174528-3090a4bba7b2' },
        { name: 'EdTech News', image: 'https://images.unsplash.com/photo-1487252665478-49b61b47f302' }
      ]
    },
    recommended: {
      trustedVoices: [
        { name: 'John Doe', image: 'https://images.unsplash.com/photo-1485833077593-4278bba3f11f' },
        { name: 'Jane Smith', image: 'https://images.unsplash.com/photo-1438565434616-3ef039228b15' },
        { name: 'Alex Brown', image: 'https://images.unsplash.com/photo-1501286353178-1ec881214838' },
        { name: 'Lisa Park', image: 'https://images.unsplash.com/photo-1469041797191-50ace28483c3' }
      ],
      companies: [
        { name: 'InnovateCo', image: 'https://images.unsplash.com/photo-1452378174528-3090a4bba7b2' },
        { name: 'DataCorp', image: 'https://images.unsplash.com/photo-1487252665478-49b61b47f302' },
        { name: 'AITech', image: 'https://images.unsplash.com/photo-1485833077593-4278bba3f11f' },
        { name: 'CloudSys', image: 'https://images.unsplash.com/photo-1438565434616-3ef039228b15' }
      ],
      newsletters: [
        { name: 'Innovation Weekly', image: 'https://images.unsplash.com/photo-1501286353178-1ec881214838' },
        { name: 'AI Digest', image: 'https://images.unsplash.com/photo-1469041797191-50ace28483c3' },
        { name: 'Cloud News', image: 'https://images.unsplash.com/photo-1452378174528-3090a4bba7b2' },
        { name: 'Tech Trends', image: 'https://images.unsplash.com/photo-1487252665478-49b61b47f302' }
      ]
    }
  };

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

  const renderSourceSection = (title: string, items: Array<{ name: string, image: string }>) => (
    <div className="space-y-2">
      <h4 className="text-sm font-medium text-gray-400">{title}</h4>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <button
            key={item.name}
            onClick={() => handleSourceSelect(item.name)}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-full border transition-colors
              ${selectedSources.includes(item.name)
                ? 'border-linkedin-blue bg-linkedin-blue/10 text-linkedin-blue'
                : 'border-white/10 hover:border-linkedin-blue'
              }`}
          >
            <Avatar className="w-6 h-6">
              <AvatarImage src={item.image} alt={item.name} />
              <AvatarFallback>{item.name[0]}</AvatarFallback>
            </Avatar>
            <span className="text-sm">{item.name}</span>
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <div className="animate-fadeIn space-y-8">
      {currentStep === 1 && (
        <div className="space-y-8">
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Industry</h3>
            <div className="flex flex-wrap gap-2">
              {industries.map((industry) => (
                <button
                  key={industry}
                  onClick={() => setSelectedIndustry(industry)}
                  className={`px-4 py-2 rounded-full border transition-colors
                    ${selectedIndustry === industry
                      ? 'border-linkedin-blue bg-linkedin-blue/10 text-linkedin-blue'
                      : 'border-white/10 hover:border-linkedin-blue'
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
                    onClick={() => handleSkillSelect(skill)}
                    className={`px-4 py-2 rounded-full border transition-colors
                      ${selectedSkills.includes(skill)
                        ? 'border-linkedin-blue bg-linkedin-blue/10 text-linkedin-blue'
                        : 'border-white/10 hover:border-linkedin-blue'
                      }`}
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
      )}

      {currentStep === 2 && (
        <div className="space-y-8">
          <div className="space-y-6">
            <h3 className="text-lg font-medium">In Network</h3>
            {renderSourceSection('Trusted Voices', sources.inNetwork.trustedVoices)}
            {renderSourceSection('Companies', sources.inNetwork.companies)}
            {renderSourceSection('Newsletters', sources.inNetwork.newsletters)}
            
            <div className="flex items-center gap-8 pt-4">
              <div className="flex items-center gap-2">
                <Checkbox id="linkedin-learning-1" />
                <label htmlFor="linkedin-learning-1" className="text-sm">LinkedIn Learning</label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="events-1" />
                <label htmlFor="events-1" className="text-sm">Events</label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="jobs-1" />
                <label htmlFor="jobs-1" className="text-sm">Jobs</label>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-lg font-medium">Recommended</h3>
            {renderSourceSection('Trusted Voices', sources.recommended.trustedVoices)}
            {renderSourceSection('Companies', sources.recommended.companies)}
            {renderSourceSection('Newsletters', sources.recommended.newsletters)}
            
            <div className="flex items-center gap-8 pt-4">
              <div className="flex items-center gap-2">
                <Checkbox id="linkedin-learning-2" />
                <label htmlFor="linkedin-learning-2" className="text-sm">LinkedIn Learning</label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="events-2" />
                <label htmlFor="events-2" className="text-sm">Events</label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="jobs-2" />
                <label htmlFor="jobs-2" className="text-sm">Jobs</label>
              </div>
            </div>
          </div>
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