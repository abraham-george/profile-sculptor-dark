import { X } from "lucide-react";

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

export const ReviewStep = () => {
  const handleRemove = (item: string) => {
    // Handle removal logic here
    console.log("Removing:", item);
  };

  // Example data - this should be replaced with actual selected preferences
  const selectedPreferences = {
    sources: ["Sarah Chen", "TechCorp", "Tech Weekly"],
    style: {
      tone: "Professional",
      length: "30 minutes",
      frequency: "Weekly",
      music: "Upbeat",
    },
    additionalContent: ["LinkedIn Learning", "Events"],
  };

  return (
    <div className="space-y-8">
      <h3 className="text-xl mb-4">Review Your Choices</h3>
      
      <ReviewItem
        title="Selected Sources"
        items={selectedPreferences.sources}
        onRemove={handleRemove}
      />

      <ReviewItem
        title="Style Preferences"
        items={[
          `Tone: ${selectedPreferences.style.tone}`,
          `Length: ${selectedPreferences.style.length}`,
          `Frequency: ${selectedPreferences.style.frequency}`,
          `Music: ${selectedPreferences.style.music}`,
        ]}
        onRemove={handleRemove}
      />

      <ReviewItem
        title="Additional Content"
        items={selectedPreferences.additionalContent}
        onRemove={handleRemove}
      />
    </div>
  );
};