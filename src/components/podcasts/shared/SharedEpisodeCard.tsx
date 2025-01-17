import { Play, User, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SharedEpisodeCardProps {
  id: string;
  name: string;
  description: string;
  duration?: string;
  coverImage?: string;
  sharedBy?: string;
  role?: string;
  company?: string;
  onPlay?: () => void;
  onLearnMore?: () => void;
}

export const SharedEpisodeCard = ({
  id,
  name,
  description,
  duration,
  coverImage = "/lovable-uploads/1a7f5330-e3a6-4053-a6c1-9c0954485d59.png",
  sharedBy,
  role,
  company,
  onPlay,
  onLearnMore,
}: SharedEpisodeCardProps) => {
  return (
    <div className="flex items-center gap-4 p-4 bg-linkedin-card rounded-lg hover:bg-linkedin-card/90 transition-colors group">
      <img 
        src={coverImage} 
        alt={name}
        className="w-16 h-16 rounded object-cover"
      />
      <div className="flex-1">
        <div className="flex justify-between items-start">
          <div>
            <h4 className="font-medium text-white">{name}</h4>
            <p className="text-sm text-gray-400">{description}</p>
            {sharedBy && (
              <div className="flex items-center gap-2 mt-2">
                <User className="w-4 h-4 text-linkedin-blue" />
                <span className="text-sm text-linkedin-blue">Shared by {sharedBy}</span>
                {role && company && (
                  <div className="flex items-center gap-1 text-xs text-gray-400">
                    <Briefcase className="w-3 h-3" />
                    <span>{role} at {company}</span>
                  </div>
                )}
              </div>
            )}
            {duration && (
              <p className="text-xs text-gray-500 mt-1">{duration}</p>
            )}
          </div>
          
          <div className="flex items-center gap-3">
            <Button
              size="icon"
              className="rounded-full bg-linkedin-blue hover:bg-linkedin-blue/90 shadow-lg"
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