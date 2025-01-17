import { SourceSection } from "./SourceSection";

interface Source {
  id: string;
  name: string;
  role: string;
  image: string;
}

interface SourceCategoryProps {
  title: string;
  sources: {
    trustedVoices: Source[];
    companies: Source[];
    newsletters: Source[];
  };
  selectedSources: string[];
  onSourceSelect: (sourceId: string) => void;
}

export const SourceCategory = ({
  title,
  sources,
  selectedSources,
  onSourceSelect,
}: SourceCategoryProps) => {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-medium">{title}</h3>
      <SourceSection 
        title="Top Voices" 
        items={sources.trustedVoices}
        selectedSources={selectedSources}
        onSourceSelect={onSourceSelect}
      />
      <SourceSection 
        title="Companies" 
        items={sources.companies}
        selectedSources={selectedSources}
        onSourceSelect={onSourceSelect}
      />
      <SourceSection 
        title="Newsletters" 
        items={sources.newsletters}
        selectedSources={selectedSources}
        onSourceSelect={onSourceSelect}
      />
    </div>
  );
};