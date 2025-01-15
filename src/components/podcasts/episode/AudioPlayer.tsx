import { Play, Pause, Volume2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export const AudioPlayer = () => {
  return (
    <div className="glass-card p-4 space-y-4">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="text-linkedin-blue">
          <Play className="h-6 w-6" />
        </Button>
        
        <div className="flex-1">
          <div className="h-1 bg-linkedin-blue/20 rounded-full">
            <div className="h-full w-1/3 bg-linkedin-blue rounded-full" />
          </div>
        </div>
        
        <span className="text-sm text-linkedin-text">2:30 / 7:15</span>
        
        <Button variant="ghost" size="icon" className="text-linkedin-text">
          <Volume2 className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};