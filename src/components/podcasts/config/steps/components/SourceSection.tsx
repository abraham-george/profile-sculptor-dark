import { PillButton } from "@/components/ui/pill-button";

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

export const SourceSection = ({ title, items, selectedSources, onSourceSelect }: SourceSectionProps) => (
  <div className="space-y-2">
    <h4 className="text-sm font-medium text-gray-400">{title}</h4>
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <PillButton
          key={item.name}
          name={item.name}
          image={item.image}
          isSelected={selectedSources.includes(item.name)}
          onSelect={() => onSourceSelect(item.name)}
        />
      ))}
    </div>
  </div>
);