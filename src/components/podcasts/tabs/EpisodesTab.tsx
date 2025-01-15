import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export const EpisodesTab = () => {
  const { data: episodes, isLoading } = useQuery({
    queryKey: ['episodes'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('podcasts')
        .select('*')
      
      if (error) {
        console.error('Error fetching episodes:', error);
        return [];
      }
      
      return data || [];
    }
  });

  if (isLoading) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-400">Loading episodes...</p>
      </div>
    );
  }

  if (!episodes || episodes.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-400">No episodes found. Configure to get started.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {episodes.map((episode) => (
        <div 
          key={episode.id} 
          className="p-4 border border-white/10 rounded-lg"
        >
          <h3 className="text-lg font-medium">{episode.name}</h3>
          <p className="text-gray-400">{episode.description}</p>
        </div>
      ))}
    </div>
  );
};