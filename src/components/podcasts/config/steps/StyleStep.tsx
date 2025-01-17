import { EpisodeStructureSection } from "./components/EpisodeStructureSection";
import { FrequencySection } from "./components/FrequencySection";
import { PersonalizationSection } from "./components/PersonalizationSection";

interface StyleStepProps {
  style: {
    tone: string;
    length: number;
    frequency: string;
    music: string;
  };
  onStyleChange: (style: StyleStepProps['style']) => void;
}

export const StyleStep = ({ style, onStyleChange }: StyleStepProps) => {
  return (
    <div className="space-y-12">
      <EpisodeStructureSection style={style} onStyleChange={onStyleChange} />
      <FrequencySection style={style} onStyleChange={onStyleChange} />
      <PersonalizationSection style={style} onStyleChange={onStyleChange} />
    </div>
  );
};