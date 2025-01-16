import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { RefreshCw, Play, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

export const EpisodesTab = () => {
  const navigate = useNavigate();
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
      
      if (!data || data.length === 0) {
        const { data: podcastConfig } = await supabase
          .from('podcast_config')
          .select('*')
          .maybeSingle();

        if (podcastConfig) {
          const { error: insertError } = await supabase
            .from('podcasts')
            .insert([
              {
                name: `${podcastConfig.name} - Episode 1`,
                description: 'First episode of your podcast',
                duration: '30 mins',
                cover_image: podcastConfig.cover_image
              }
            ]);

          if (insertError) {
            console.error('Error creating sample episode:', insertError);
            return [];
          }

          const { data: newData } = await supabase
            .from('podcasts')
            .select('*');
          return newData || [];
        }
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
    
    setTimeout(async () => {
      await refetch();
      setIsRefreshing(false);
      toast.success("Episodes refreshed successfully!");
    }, 5000);
  };

  const handleSeeMore = (episodeId: string) => {
    navigate(`/episodes/${episodeId}`);
  };

  const handleBack = () => {
    navigate('/');
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
      <button 
        onClick={handleBack}
        className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-6"
      >
        <ArrowLeft size={20} />
        <span>Back to Profile</span>
      </button>

      {!episodes || episodes.length === 0 ? (
        <div className="flex flex-col items-center gap-4 py-8">
          <p className="text-gray-400">No episodes found. Configure to get started.</p>
          <Button
            variant="outline"
            size="sm"
            onClick={handleRefresh}
            disabled={isRefreshing}
            className="pill-button"
          >
            <RefreshCw className={`w-4 h-4 mr-2 ${isRefreshing ? 'animate-spin' : ''}`} />
            {isRefreshing ? 'Refreshing...' : 'Refresh Episodes'}
          </Button>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="flex justify-end">
            <Button
              variant="outline"
              size="sm"
              onClick={handleRefresh}
              disabled={isRefreshing}
              className="pill-button"
            >
              <RefreshCw className={`w-4 h-4 mr-2 ${isRefreshing ? 'animate-spin' : ''}`} />
              {isRefreshing ? 'Refreshing...' : 'Refresh'}
            </Button>
          </div>

          {episodes.map((episode) => (
            <div 
              key={episode.id} 
              className="flex items-center gap-4 p-4 bg-linkedin-card rounded-lg hover:bg-linkedin-card/90 transition-colors"
            >
              <div className="w-16 h-16 rounded overflow-hidden flex-shrink-0">
                <img 
                  src="/lovable-uploads/44c0a106-9e87-4470-8466-b042960698c7.png"
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
                  onClick={() => handleSeeMore(episode.id)}
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