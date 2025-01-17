import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface PersonalizationSectionProps {
  style: {
    tone: string;
    length: number;
    frequency: string;
    music: string;
  };
  onStyleChange: (style: PersonalizationSectionProps['style']) => void;
}

export const PersonalizationSection = ({ style, onStyleChange }: PersonalizationSectionProps) => {
  return (
    <section className="space-y-6">
      <h2 className="text-xl font-semibold">Personalization</h2>
      
      <div className="space-y-8">
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Tone</h3>
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

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Language</h3>
          <div className="max-w-xs">
            <Select defaultValue="en">
              <SelectTrigger>
                <SelectValue placeholder="Select a language" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="es">Spanish</SelectItem>
                <SelectItem value="fr">French</SelectItem>
                <SelectItem value="de">German</SelectItem>
                <SelectItem value="it">Italian</SelectItem>
                <SelectItem value="pt">Portuguese</SelectItem>
                <SelectItem value="nl">Dutch</SelectItem>
                <SelectItem value="pl">Polish</SelectItem>
                <SelectItem value="ru">Russian</SelectItem>
                <SelectItem value="ja">Japanese</SelectItem>
                <SelectItem value="ko">Korean</SelectItem>
                <SelectItem value="zh">Chinese (Mandarin)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Checkbox id="customIntros" />
            <Label htmlFor="customIntros" className="text-sm text-gray-600">
              Custom Intros/Outros: Personalize the introduction and closing segments
            </Label>
          </div>
          
          <div className="flex items-center space-x-2">
            <Checkbox id="audioEnhancements" />
            <Label htmlFor="audioEnhancements" className="text-sm text-gray-600">
              Audio Enhancements: Enable/disable background music
            </Label>
          </div>
        </div>
      </div>
    </section>
  );
};