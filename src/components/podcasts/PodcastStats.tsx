import { Mic, Play, Bookmark } from "lucide-react";
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

export const PodcastStats = () => {
  const { data: stats } = useQuery({
    queryKey: ['podcast-stats'],
    queryFn: async () => {
      const { data: podcasts, error } = await supabase
        .from('podcasts')
        .select('*');
      
      if (error) throw error;

      return {
        episodeCount: podcasts?.length || 0,
        // For now, we'll assume 1 minute per episode as placeholder
        totalPlays: podcasts?.length || 0,
        // For now, shared count is 0 as we haven't implemented sharing yet
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
          <span className="text-xl font-semibold">{stats?.totalPlays || 0} mins listened</span>
        </div>
        <p className="text-gray-400">Track your podcast engagement.</p>
      </div>
      
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2 text-gray-200">
          <Bookmark size={20} className="text-gray-400" />
          <span className="text-xl font-semibold">{stats?.savedCount || 0} episodes shared</span>
        </div>
        <p className="text-gray-400">Access your saved content anytime.</p>
      </div>
    </div>
  );
};