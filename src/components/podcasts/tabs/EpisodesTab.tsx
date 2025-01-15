import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { RefreshCw, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export const EpisodesTab = () => {
  const [isRefreshing, setIsRefreshing] = useState(false);

  const { data: episodes, isLoading, refetch } = useQuery({
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

  const { data: podcastConfig } = useQuery({
    queryKey: ['podcast-config'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('podcast_config')
        .select('*')
        .maybeSingle();
      
      if (error) throw error;
      return data;
    },
  });

  const handleRefresh = async () => {
    setIsRefreshing(true);
    toast.info("Refreshing episodes...");
    
    // Simulate a delay for the refresh
    setTimeout(async () => {
      await refetch();
      setIsRefreshing(false);
      toast.success("Episodes refreshed successfully!");
    }, 5000);
  };

  if (isLoading) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-400">Loading episodes...</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-end">
        <Button
          variant="ghost"
          size="sm"
          onClick={handleRefresh}
          disabled={isRefreshing}
          className="text-linkedin-blue hover:text-linkedin-blue/80"
        >
          <RefreshCw className={`w-4 h-4 mr-2 ${isRefreshing ? 'animate-spin' : ''}`} />
          {isRefreshing ? 'Refreshing...' : 'Refresh'}
        </Button>
      </div>

      {!episodes || episodes.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-400">No episodes found. Configure to get started.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {episodes.map((episode) => (
            <div 
              key={episode.id} 
              className="flex items-center gap-4 p-4 bg-linkedin-card rounded-lg hover:bg-linkedin-card/90 transition-colors"
            >
              <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                <img 
                  src={podcastConfig?.cover_image || '/placeholder.svg'} 
                  alt={episode.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex-grow min-w-0">
                <h3 className="text-white font-medium truncate">{episode.name}</h3>
                <p className="text-linkedin-text text-sm">Duration: {episode.duration || '30 mins'}</p>
              </div>

              <div className="flex items-center gap-3">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-linkedin-blue hover:text-linkedin-blue/80"
                >
                  <Play className="w-5 h-5" />
                </Button>

                <Button
                  variant="ghost"
                  size="sm"
                  className="text-linkedin-text hover:text-white"
                >
                  See More
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};