import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface EpisodeStructureSectionProps {
  style: {
    tone: string;
    length: number;
    frequency: string;
    music: string;
  };
  onStyleChange: (style: EpisodeStructureSectionProps['style']) => void;
}

export const EpisodeStructureSection = ({ style, onStyleChange }: EpisodeStructureSectionProps) => {
  return (
    <section className="space-y-6">
      <h2 className="text-xl font-semibold">Episode Structure</h2>
      
      <div className="space-y-8">
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Style</h3>
          <TooltipProvider>
            <RadioGroup 
              value={style.tone} 
              onValueChange={(tone) => onStyleChange({ ...style, tone })}
              className="grid grid-cols-4 gap-4"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="summary" id="summary" />
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
                <RadioGroupItem value="simplified" id="simplified" />
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
                <RadioGroupItem value="indepth" id="indepth" />
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
                <RadioGroupItem value="interactive" id="interactive" />
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

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Length</h3>
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
      </div>
    </section>
  );
};