import { X } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { PodcastConfig } from "../ConfigTab";

interface ReviewItemProps {
  title: string;
  items: Array<{ name: string; image?: string }>;
  onRemove: (item: string) => void;
}

const ReviewItem = ({ title, items, onRemove }: ReviewItemProps) => (
  <div className="space-y-2">
    <h4 className="text-sm font-medium text-gray-400">{title}</h4>
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <button
          key={item.name}
          onClick={() => onRemove(item.name)}
          className="flex items-center gap-2 rounded-full border border-linkedin-blue px-4 py-2 bg-linkedin-blue text-white"
        >
          {item.image && (
            <Avatar className="w-6 h-6">
              <AvatarImage src={item.image} alt={item.name} />
              <AvatarFallback>{item.name[0]}</AvatarFallback>
            </Avatar>
          )}
          <span className="text-sm">{item.name}</span>
          <X className="w-4 h-4" />
        </button>
      ))}
    </div>
  </div>
);

interface ReviewStepProps {
  config: PodcastConfig;
  onConfigUpdate: (updates: Partial<PodcastConfig>) => void;
}

export const ReviewStep = ({ config, onConfigUpdate }: ReviewStepProps) => {
  const handleRemoveSkill = (skill: string) => {
    onConfigUpdate({
      skills: config.skills.filter(s => s !== skill)
    });
  };

  const handleRemoveSource = (source: string) => {
    onConfigUpdate({
      sources: config.sources.filter(s => s !== source)
    });
  };

  const handleRemoveAdditionalContent = (content: string) => {
    onConfigUpdate({
      additionalContent: config.additionalContent.filter(c => c !== content)
    });
  };

  // Map sources to include their images using the same URLs as in SourcesStep
  const sourcesWithImages = config.sources.map(source => {
    // This matches the image URLs defined in SourcesStep
    const sourceImageMap: { [key: string]: string } = {
      'Sarah Chen': 'https://images.unsplash.com/photo-1485833077593-4278bba3f11f',
      'Mike Ross': 'https://images.unsplash.com/photo-1438565434616-3ef039228b15',
      'Emily Wang': 'https://images.unsplash.com/photo-1501286353178-1ec881214838',
      'David Kim': 'https://images.unsplash.com/photo-1469041797191-50ace28483c3',
      'TechCorp': 'https://images.unsplash.com/photo-1452378174528-3090a4bba7b2',
      'FinanceHub': 'https://images.unsplash.com/photo-1487252665478-49b61b47f302',
      'HealthTech': 'https://images.unsplash.com/photo-1485833077593-4278bba3f11f',
      'EduLearn': 'https://images.unsplash.com/photo-1438565434616-3ef039228b15',
      'Tech Weekly': 'https://images.unsplash.com/photo-1501286353178-1ec881214838',
      'Finance Daily': 'https://images.unsplash.com/photo-1469041797191-50ace28483c3',
      'Health Digest': 'https://images.unsplash.com/photo-1452378174528-3090a4bba7b2',
      'EdTech News': 'https://images.unsplash.com/photo-1487252665478-49b61b47f302',
      'John Doe': 'https://images.unsplash.com/photo-1485833077593-4278bba3f11f',
      'Jane Smith': 'https://images.unsplash.com/photo-1438565434616-3ef039228b15',
      'Alex Brown': 'https://images.unsplash.com/photo-1501286353178-1ec881214838',
      'Lisa Park': 'https://images.unsplash.com/photo-1469041797191-50ace28483c3',
      'InnovateCo': 'https://images.unsplash.com/photo-1452378174528-3090a4bba7b2',
      'DataCorp': 'https://images.unsplash.com/photo-1487252665478-49b61b47f302',
      'AITech': 'https://images.unsplash.com/photo-1485833077593-4278bba3f11f',
      'CloudSys': 'https://images.unsplash.com/photo-1438565434616-3ef039228b15',
      'Innovation Weekly': 'https://images.unsplash.com/photo-1501286353178-1ec881214838',
      'AI Digest': 'https://images.unsplash.com/photo-1469041797191-50ace28483c3',
      'Cloud News': 'https://images.unsplash.com/photo-1452378174528-3090a4bba7b2',
      'Tech Trends': 'https://images.unsplash.com/photo-1487252665478-49b61b47f302'
    };

    return {
      name: source,
      image: sourceImageMap[source]
    };
  });

  return (
    <div className="space-y-8">
      <h3 className="text-xl mb-4">Review Your Choices</h3>
      
      {config.industry && (
        <div className="space-y-2">
          <h4 className="text-sm font-medium text-gray-400">Industry</h4>
          <div className="flex flex-wrap gap-2">
            <div className="rounded-full border border-linkedin-blue px-4 py-2 bg-linkedin-blue text-white">
              <span className="text-sm">{config.industry}</span>
            </div>
          </div>
        </div>
      )}

      {config.skills.length > 0 && (
        <ReviewItem
          title="Selected Skills"
          items={config.skills.map(skill => ({ name: skill }))}
          onRemove={handleRemoveSkill}
        />
      )}

      {config.sources.length > 0 && (
        <ReviewItem
          title="Selected Sources"
          items={sourcesWithImages}
          onRemove={handleRemoveSource}
        />
      )}

      {config.additionalContent.length > 0 && (
        <ReviewItem
          title="Additional Content"
          items={config.additionalContent.map(content => ({ name: content }))}
          onRemove={handleRemoveAdditionalContent}
        />
      )}

      <div className="space-y-2">
        <h4 className="text-sm font-medium text-gray-400">Style Preferences</h4>
        <div className="flex flex-wrap gap-2">
          {Object.entries(config.style).map(([key, value]) => (
            <div
              key={key}
              className="rounded-full border border-linkedin-blue px-4 py-2 bg-linkedin-blue text-white"
            >
              <span className="text-sm capitalize">{key}: {value}</span>
            </div>
          ))}
        </div>
      </div>

      {config.coverImage && (
        <div className="space-y-2">
          <h4 className="text-sm font-medium text-gray-400">Cover Image</h4>
          <div className="w-32 h-32 rounded-lg overflow-hidden border-2 border-linkedin-blue">
            <img
              src={config.coverImage.url}
              alt="Podcast cover"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      )}
    </div>
  );
};