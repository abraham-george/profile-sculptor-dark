import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

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
    <div className="space-y-8">
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Tone</h3>
        <RadioGroup 
          value={style.tone} 
          onValueChange={(tone) => onStyleChange({ ...style, tone })}
          className="grid grid-cols-2 gap-4"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="professional" id="professional" />
            <Label htmlFor="professional">Professional</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="casual" id="casual" />
            <Label htmlFor="casual">Casual</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="conversational" id="conversational" />
            <Label htmlFor="conversational">Conversational</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="educational" id="educational" />
            <Label htmlFor="educational">Educational</Label>
          </div>
        </RadioGroup>
      </div>

      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-medium">Length (minutes)</h3>
          <span className="text-sm text-gray-400">15-45 minutes</span>
        </div>
        <Slider 
          value={[style.length]} 
          onValueChange={([length]) => onStyleChange({ ...style, length })}
          max={45} 
          min={15} 
          step={5} 
        />
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium">Frequency</h3>
        <RadioGroup 
          value={style.frequency}
          onValueChange={(frequency) => onStyleChange({ ...style, frequency })}
          className="grid grid-cols-2 gap-4"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="daily" id="daily" />
            <Label htmlFor="daily">Daily</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="weekly" id="weekly" />
            <Label htmlFor="weekly">Weekly</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="biweekly" id="biweekly" />
            <Label htmlFor="biweekly">Bi-weekly</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="monthly" id="monthly" />
            <Label htmlFor="monthly">Monthly</Label>
          </div>
        </RadioGroup>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium">Background Music</h3>
        <RadioGroup 
          value={style.music}
          onValueChange={(music) => onStyleChange({ ...style, music })}
          className="grid grid-cols-2 gap-4"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="upbeat" id="upbeat" />
            <Label htmlFor="upbeat">Upbeat</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="calm" id="calm" />
            <Label htmlFor="calm">Calm</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="professional" id="professional-music" />
            <Label htmlFor="professional-music">Professional</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="none" id="none" />
            <Label htmlFor="none">No Music</Label>
          </div>
        </RadioGroup>
      </div>
    </div>
  );
};