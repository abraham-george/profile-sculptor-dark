import { Checkbox } from "@/components/ui/checkbox";
import { SourceSection } from "./components/SourceSection";

interface Source {
  name: string;
  image: string;
}

interface SourcesStepProps {
  selectedSources: string[];
  selectedAdditionalContent: string[];
  onSourceSelect: (source: string) => void;
  onAdditionalContentSelect: (content: string) => void;
}

export const SourcesStep = ({ 
  selectedSources, 
  selectedAdditionalContent, 
  onSourceSelect,
  onAdditionalContentSelect 
}: SourcesStepProps) => {
  const sources = {
    inNetwork: {
      trustedVoices: [
        { name: 'Andrew Ng', image: 'https://images.unsplash.com/photo-1485833077593-4278bba3f11f' },
        { name: 'Yann LeCun', image: 'https://media.licdn.com/dms/image/v2/D4E03AQE1V9qLzblwvQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1694348650057?e=1742428800&v=beta&t=F-2MaRkg9qiLwjgGhxqLWPjP3NvFJySdxJcVwpwkMjg' },
        { name: 'Fei-Fei Li', image: 'https://images.unsplash.com/photo-1501286353178-1ec881214838' },
        { name: 'Geoffrey Hinton', image: 'https://images.unsplash.com/photo-1469041797191-50ace28483c3' }
      ],
      companies: [
        { name: 'OpenAI', image: 'https://images.unsplash.com/photo-1452378174528-3090a4bba7b2' },
        { name: 'DeepMind', image: 'https://images.unsplash.com/photo-1487252665478-49b61b47f302' },
        { name: 'Anthropic', image: 'https://images.unsplash.com/photo-1485833077593-4278bba3f11f' },
        { name: 'Scale AI', image: 'https://images.unsplash.com/photo-1438565434616-3ef039228b15' }
      ],
      newsletters: [
        { name: 'The Batch', image: 'https://images.unsplash.com/photo-1501286353178-1ec881214838' },
        { name: 'Import AI', image: 'https://images.unsplash.com/photo-1469041797191-50ace28483c3' },
        { name: 'ML Weekly', image: 'https://images.unsplash.com/photo-1452378174528-3090a4bba7b2' },
        { name: 'The Algorithm', image: 'https://images.unsplash.com/photo-1487252665478-49b61b47f302' }
      ]
    },
    recommended: {
      trustedVoices: [
        { name: 'Demis Hassabis', image: 'https://images.unsplash.com/photo-1485833077593-4278bba3f11f' },
        { name: 'Sam Altman', image: 'https://images.unsplash.com/photo-1438565434616-3ef039228b15' },
        { name: 'Daphne Koller', image: 'https://images.unsplash.com/photo-1501286353178-1ec881214838' },
        { name: 'Ian Goodfellow', image: 'https://images.unsplash.com/photo-1469041797191-50ace28483c3' }
      ],
      companies: [
        { name: 'Cohere', image: 'https://images.unsplash.com/photo-1452378174528-3090a4bba7b2' },
        { name: 'Stability AI', image: 'https://images.unsplash.com/photo-1487252665478-49b61b47f302' },
        { name: 'Hugging Face', image: 'https://images.unsplash.com/photo-1485833077593-4278bba3f11f' },
        { name: 'Midjourney', image: 'https://images.unsplash.com/photo-1438565434616-3ef039228b15' }
      ],
      newsletters: [
        { name: 'AI Alignment', image: 'https://images.unsplash.com/photo-1501286353178-1ec881214838' },
        { name: 'Last Week in AI', image: 'https://images.unsplash.com/photo-1469041797191-50ace28483c3' },
        { name: 'Ahead of AI', image: 'https://images.unsplash.com/photo-1452378174528-3090a4bba7b2' },
        { name: 'The AI Index', image: 'https://images.unsplash.com/photo-1487252665478-49b61b47f302' }
      ]
    }
  };

  return (
    <div className="space-y-8">
      <div className="space-y-6">
        <h3 className="text-lg font-medium">From your network</h3>
        <SourceSection 
          title="AI Thought Leaders" 
          items={sources.inNetwork.trustedVoices}
          selectedSources={selectedSources}
          onSourceSelect={onSourceSelect}
        />
        <SourceSection 
          title="Leading AI Companies" 
          items={sources.inNetwork.companies}
          selectedSources={selectedSources}
          onSourceSelect={onSourceSelect}
        />
        <SourceSection 
          title="AI Research & Updates" 
          items={sources.inNetwork.newsletters}
          selectedSources={selectedSources}
          onSourceSelect={onSourceSelect}
        />
      </div>

      <div className="space-y-6">
        <h3 className="text-lg font-medium">Recommended</h3>
        <SourceSection 
          title="AI Thought Leaders" 
          items={sources.recommended.trustedVoices}
          selectedSources={selectedSources}
          onSourceSelect={onSourceSelect}
        />
        <SourceSection 
          title="Leading AI Companies" 
          items={sources.recommended.companies}
          selectedSources={selectedSources}
          onSourceSelect={onSourceSelect}
        />
        <SourceSection 
          title="AI Research & Updates" 
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