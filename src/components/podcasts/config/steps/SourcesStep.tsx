import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Checkbox } from "@/components/ui/checkbox";

interface Source {
  name: string;
  image: string;
}

interface SourceSectionProps {
  title: string;
  items: Source[];
  selectedSources: string[];
  onSourceSelect: (source: string) => void;
}

interface SourcesStepProps {
  selectedSources: string[];
  selectedAdditionalContent: string[];
  onSourceSelect: (source: string) => void;
  onAdditionalContentSelect: (content: string) => void;
}

const SourceSection = ({ title, items, selectedSources, onSourceSelect }: SourceSectionProps) => (
  <div className="space-y-2">
    <h4 className="text-sm font-medium text-gray-400">{title}</h4>
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <button
          key={item.name}
          onClick={() => onSourceSelect(item.name)}
          className={`flex items-center gap-4 rounded-full border border-linkedin-blue px-6 py-3 ${
            selectedSources.includes(item.name)
              ? 'bg-linkedin-blue text-white'
              : ''
          }`}
        >
          <Avatar className="w-10 h-10">
            <AvatarImage src={item.image} alt={item.name} className="object-cover" />
            <AvatarFallback>{item.name[0]}</AvatarFallback>
          </Avatar>
          <span className="text-sm">{item.name}</span>
        </button>
      ))}
    </div>
  </div>
);

export const SourcesStep = ({ 
  selectedSources, 
  selectedAdditionalContent, 
  onSourceSelect,
  onAdditionalContentSelect 
}: SourcesStepProps) => {
  const sources = {
    inNetwork: {
      trustedVoices: [
        { name: 'Sarah Chen', image: 'https://images.unsplash.com/photo-1485833077593-4278bba3f11f' },
        { name: 'Mike Ross', image: 'https://media.licdn.com/dms/image/v2/D4E03AQE1V9qLzblwvQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1694348650057?e=1742428800&v=beta&t=F-2MaRkg9qiLwjgGhxqLWPjP3NvFJySdxJcVwpwkMjg' },
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

  return (
    <div className="space-y-8">
      <div className="space-y-6">
        <h3 className="text-lg font-medium">In Network</h3>
        <SourceSection 
          title="Trusted Voices" 
          items={sources.inNetwork.trustedVoices}
          selectedSources={selectedSources}
          onSourceSelect={onSourceSelect}
        />
        <SourceSection 
          title="Companies" 
          items={sources.inNetwork.companies}
          selectedSources={selectedSources}
          onSourceSelect={onSourceSelect}
        />
        <SourceSection 
          title="Newsletters" 
          items={sources.inNetwork.newsletters}
          selectedSources={selectedSources}
          onSourceSelect={onSourceSelect}
        />
      </div>

      <div className="space-y-6">
        <h3 className="text-lg font-medium">Recommended</h3>
        <SourceSection 
          title="Trusted Voices" 
          items={sources.recommended.trustedVoices}
          selectedSources={selectedSources}
          onSourceSelect={onSourceSelect}
        />
        <SourceSection 
          title="Companies" 
          items={sources.recommended.companies}
          selectedSources={selectedSources}
          onSourceSelect={onSourceSelect}
        />
        <SourceSection 
          title="Newsletters" 
          items={sources.recommended.newsletters}
          selectedSources={selectedSources}
          onSourceSelect={onSourceSelect}
        />
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium">Additional Content</h3>
        <div className="flex items-center gap-8">
          {['LinkedIn Learning', 'Events', 'Jobs'].map((content) => (
            <div key={content} className="flex items-center gap-2">
              <Checkbox 
                id={content.toLowerCase()}
                checked={selectedAdditionalContent.includes(content)}
                onCheckedChange={() => onAdditionalContentSelect(content)}
              />
              <label htmlFor={content.toLowerCase()} className="text-sm">{content}</label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};