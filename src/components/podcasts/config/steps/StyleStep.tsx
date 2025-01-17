import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

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
        <h2 className="text-xl font-semibold">Style</h2>
        
        <div className="space-y-4">
          <TooltipProvider>
            <RadioGroup 
              value={String(style.length)} 
              onValueChange={(length) => onStyleChange({ ...style, length: parseInt(length) })}
              className="grid grid-cols-4 gap-4"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="10" id="summary" />
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Label htmlFor="summary" className="cursor-help">Summary</Label>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>A quick overview or condensed version of the content.</p>
                  </TooltipContent>
                </Tooltip>
              </div>
              
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="15" id="simplified" />
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Label htmlFor="simplified" className="cursor-help">Simplified Breakdown</Label>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>An easy-to-understand explanation with clear sections.</p>
                  </TooltipContent>
                </Tooltip>
              </div>

              <div className="flex items-center space-x-2">
                <RadioGroupItem value="30" id="indepth" />
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Label htmlFor="indepth" className="cursor-help">In-Depth Analysis</Label>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Detailed insights and comprehensive coverage.</p>
                  </TooltipContent>
                </Tooltip>
              </div>

              <div className="flex items-center space-x-2">
                <RadioGroupItem value="20" id="interactive" />
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Label htmlFor="interactive" className="cursor-help">Interactive Q&A</Label>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>A question-and-answer format for clarity and engagement.</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            </RadioGroup>
          </TooltipProvider>
        </div>
      </section>

      {/* Length Section */}
      <section className="space-y-6">
        <h2 className="text-xl font-semibold">Length</h2>
        
        <div className="space-y-4">
          <RadioGroup 
            value={String(style.length)}
            onValueChange={(length) => onStyleChange({ ...style, length: parseInt(length) })}
            className="grid grid-cols-2 gap-4"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="10" id="shortform" />
              <Label htmlFor="shortform">Shortform (5 - 10 mins)</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="30" id="longform" />
              <Label htmlFor="longform">Longform (20 - 30 mins)</Label>
            </div>
          </RadioGroup>
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