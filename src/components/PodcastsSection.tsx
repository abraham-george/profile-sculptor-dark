import { EyeOff, Mic, Play, Bookmark } from "lucide-react";

export const PodcastsSection = () => {
  return (
    <div className="section-card">
      <div className="flex flex-col gap-2 mb-6">
        <h2 className="text-2xl font-semibold">Podcasts</h2>
        <span className="flex items-center gap-1 text-sm text-gray-400">
          <EyeOff size={14} />
          Private to you
        </span>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 text-gray-200">
            <Mic size={20} className="text-gray-400" />
            <span className="text-xl font-semibold">12 episodes created</span>
          </div>
          <p className="text-gray-400">Share your thoughts through podcasting.</p>
        </div>
        
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 text-gray-200">
            <Play size={20} className="text-gray-400" />
            <span className="text-xl font-semibold">156 total plays</span>
          </div>
          <p className="text-gray-400">Track your podcast engagement.</p>
        </div>
        
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 text-gray-200">
            <Bookmark size={20} className="text-gray-400" />
            <span className="text-xl font-semibold">8 saved episodes</span>
          </div>
          <p className="text-gray-400">Access your saved content anytime.</p>
        </div>
      </div>

      <div className="mt-8 pt-4 border-t border-white/10 flex justify-center">
        <button className="text-gray-400 hover:text-white flex items-center gap-1">
          Show all podcasts
          <span className="text-lg">→</span>
        </button>
      </div>
    </div>
  );
};