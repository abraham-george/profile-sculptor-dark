import { Mic, Play, Bookmark } from "lucide-react";
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

export const PodcastStats = () => {
  const { data: stats } = useQuery({
    queryKey: ['podcast-stats'],
    queryFn: async () => {
      // This is a placeholder for now - we'll implement actual stats later
      return {
        episodeCount: 0,
        totalPlays: 0,
        savedCount: 0
      };
    },
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2 text-gray-200">
          <Mic size={20} className="text-gray-400" />
          <span className="text-xl font-semibold">{stats?.episodeCount || 0} episodes created</span>
        </div>
        <p className="text-gray-400">Share your thoughts through podcasting.</p>
      </div>
      
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2 text-gray-200">
          <Play size={20} className="text-gray-400" />
          <span className="text-xl font-semibold">{stats?.totalPlays || 0} total plays</span>
        </div>
        <p className="text-gray-400">Track your podcast engagement.</p>
      </div>
      
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2 text-gray-200">
          <Bookmark size={20} className="text-gray-400" />
          <span className="text-xl font-semibold">{stats?.savedCount || 0} saved episodes</span>
        </div>
        <p className="text-gray-400">Access your saved content anytime.</p>
      </div>
    </div>
  );
};