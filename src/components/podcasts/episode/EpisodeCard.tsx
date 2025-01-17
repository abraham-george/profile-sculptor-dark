import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";

interface EpisodeCardProps {
  id: string;
  name: string;
  description: string;
  duration?: string;
  onPlay?: () => void;
  onLearnMore?: () => void;
}

export const EpisodeCard = ({
  id,
  name,
  description,
  duration,
  onPlay,
  onLearnMore,
}: EpisodeCardProps) => {
  return (
    <div className="flex items-center gap-4 p-4 bg-linkedin-card rounded-lg hover:bg-linkedin-card/90 transition-colors group">
      <div className="flex-1">
        <div className="flex justify-between items-start">
          <div>
            <h4 className="font-medium text-white">{name}</h4>
            <p className="text-sm text-gray-400">{description}</p>
            {duration && (
              <p className="text-xs text-gray-500 mt-1">{duration}</p>
            )}
          </div>
          
          <div className="flex items-center gap-3">
            <Button
              size="icon"
              className="rounded-full bg-linkedin-blue hover:bg-linkedin-blue/90 shadow-lg transition-opacity"
              onClick={onPlay}
            >
              <Play className="h-4 w-4" />
            </Button>
            
            <Button
              variant="outline"
              className="text-sm border-linkedin-blue text-white hover:bg-linkedin-blue/10"
              onClick={onLearnMore}
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};