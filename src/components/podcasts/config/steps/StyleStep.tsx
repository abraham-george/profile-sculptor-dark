import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";

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
      {/* Episode Structure Section */}
      <section className="space-y-6">
        <h2 className="text-xl font-semibold">Episode Structure</h2>
        
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Format</h3>
          <RadioGroup 
            value={style.tone} 
            onValueChange={(tone) => onStyleChange({ ...style, tone })}
            className="grid grid-cols-3 gap-4"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="interview" id="interview" />
              <Label htmlFor="interview">Interview Style</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="solo" id="solo" />
              <Label htmlFor="solo">Solo Episode</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="panel" id="panel" />
              <Label htmlFor="panel">Panel Discussion</Label>
            </div>
          </RadioGroup>
        </div>

        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-medium">Length</h3>
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
      </section>

      {/* Frequency & Schedule Section */}
      <section className="space-y-6">
        <h2 className="text-xl font-semibold">Frequency & Schedule</h2>
        
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Release Schedule</h3>
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
      </section>

      {/* Personalization Section */}
      <section className="space-y-6">
        <h2 className="text-xl font-semibold">Personalization</h2>
        
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Voice and Tone</h3>
          <RadioGroup 
            value={style.music}
            onValueChange={(music) => onStyleChange({ ...style, music })}
            className="grid grid-cols-2 gap-4"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="formal" id="formal" />
              <Label htmlFor="formal">Formal</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="casual" id="casual" />
              <Label htmlFor="casual">Casual</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="inspirational" id="inspirational" />
              <Label htmlFor="inspirational">Inspirational</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="educational" id="educational" />
              <Label htmlFor="educational">Educational</Label>
            </div>
          </RadioGroup>
        </div>
      </section>
    </div>
  );
};