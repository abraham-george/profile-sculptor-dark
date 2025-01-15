import { X } from "lucide-react";
import { PodcastConfig } from "../ConfigTab";

interface ReviewItemProps {
  title: string;
  items: string[];
  onRemove: (item: string) => void;
}

const ReviewItem = ({ title, items, onRemove }: ReviewItemProps) => (
  <div className="space-y-2">
    <h4 className="text-sm font-medium text-gray-400">{title}</h4>
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <button
          key={item}
          onClick={() => onRemove(item)}
          className="flex items-center gap-2 rounded-full border border-linkedin-blue px-4 py-2 bg-linkedin-blue text-white"
        >
          <span className="text-sm">{item}</span>
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
          items={config.skills}
          onRemove={handleRemoveSkill}
        />
      )}

      {config.sources.length > 0 && (
        <ReviewItem
          title="Selected Sources"
          items={config.sources}
          onRemove={handleRemoveSource}
        />
      )}

      {config.additionalContent.length > 0 && (
        <ReviewItem
          title="Additional Content"
          items={config.additionalContent}
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
          <div className="w-64 h-64 rounded-lg overflow-hidden">
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