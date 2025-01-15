import { Mic, Play, Bookmark } from "lucide-react";

interface PodcastStatsProps {
  episodeCount: number;
}

export const PodcastStats = ({ episodeCount }: PodcastStatsProps) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2 text-gray-200">
            <Mic size={20} className="text-gray-400" />
            <span className="text-xl font-semibold">{episodeCount} episodes created</span>
          </div>
          <p className="text-gray-400">Share your thoughts through podcasting.</p>
        </div>
        
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2 text-gray-200">
            <Play size={20} className="text-gray-400" />
            <span className="text-xl font-semibold">156 total plays</span>
          </div>
          <p className="text-gray-400">Track your podcast engagement.</p>
        </div>
        
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2 text-gray-200">
            <Bookmark size={20} className="text-gray-400" />
            <span className="text-xl font-semibold">8 saved episodes</span>
          </div>
          <p className="text-gray-400">Access your saved content anytime.</p>
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-white/10 flex justify-center">
        <button className="text-gray-400 hover:text-white flex items-center gap-1">
          Show all podcasts
          <span className="text-lg">→</span>
        </button>
      </div>
    </>
  );
};