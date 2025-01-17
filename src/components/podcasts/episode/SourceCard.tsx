import { ExternalLink } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Source } from "./types";

interface SourceCardProps {
  source: Source;
  isActive: boolean;
  onFollow: (sourceId: string) => void;
}

export const SourceCard = ({ source, isActive, onFollow }: SourceCardProps) => {
  return (
    <div className="px-1">
      <div
        className={`glass-card p-4 transition-all duration-200 rounded-lg w-[98%] mx-auto
          ${isActive ? 'ring-2 ring-linkedin-blue' : 'hover:bg-white/5'}`}
      >
        <div className="flex items-start gap-3">
          <Avatar className="h-12 w-12">
            <AvatarImage src={source.author.avatar} alt={source.author.name} />
            <AvatarFallback>{source.author.name[0]}</AvatarFallback>
          </Avatar>
          
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2">
              <div>
                <h3 className="font-medium text-sm flex items-center gap-1">
                  {source.author.name}
                  <span className="text-linkedin-blue">•</span>
                  <span className="text-linkedin-text">{source.author.connectionDegree || '1st'}</span>
                </h3>
                <p className="text-xs text-linkedin-text line-clamp-1">
                  {source.author.role} at {source.author.company}
                </p>
                <p className="text-xs text-linkedin-text mt-0.5">
                  {source.author.followers} followers
                </p>
              </div>
              
              <Button
                variant="outline"
                size="sm"
                className={`profile-button-outline whitespace-nowrap ${source.author.isFollowing ? 'bg-linkedin-blue text-white hover:bg-linkedin-blue/90' : ''}`}
                onClick={() => onFollow(source.id)}
              >
                {source.author.isFollowing ? 'Following' : '+ Follow'}
              </Button>
            </div>
            
            <div className="mt-3 space-y-2">
              <p className="text-sm">{source.description}</p>
              
              <div className="flex items-center justify-between text-xs text-linkedin-text mt-2">
                <span>Referenced at: {source.timestamp}</span>
                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-linkedin-blue hover:underline"
                >
                  <ExternalLink className="h-3 w-3" />
                  View Source
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};