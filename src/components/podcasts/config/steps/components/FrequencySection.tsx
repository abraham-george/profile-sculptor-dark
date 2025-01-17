import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

interface FrequencySectionProps {
  style: {
    tone: string;
    length: number;
    frequency: string;
    music: string;
  };
  onStyleChange: (style: FrequencySectionProps['style']) => void;
}

export const FrequencySection = ({ style, onStyleChange }: FrequencySectionProps) => {
  return (
    <section className="space-y-6">
      <h2 className="text-xl font-semibold">Frequency & Schedule</h2>
      
      <div className="space-y-6">
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

        <div className="flex items-center space-x-2 mt-8 pb-4">
          <Checkbox id="notifications" />
          <Label htmlFor="notifications" className="text-sm text-gray-600">
            Set alerts for new episode releases
          </Label>
        </div>
      </div>
    </section>
  );
};