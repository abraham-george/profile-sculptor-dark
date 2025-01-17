import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { EpisodeCard } from "../episode/EpisodeCard";

export const EpisodesTab = () => {
  const navigate = useNavigate();
  const [isGenerating, setIsGenerating] = useState(false);

  const { data: episodes, isLoading, refetch } = useQuery({
    queryKey: ['episodes'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('podcasts')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return data;
    },
  });

  const handleGenerateEpisode = async () => {
    setIsGenerating(true);
    try {
      const { error: insertError } = await supabase
        .from('podcasts')
        .insert([{
          name: "New Episode",
          description: "This is a new episode",
          duration: "30 minutes"
        }]);

      if (insertError) throw insertError;

      toast.success("Episode created successfully!");
      refetch();
    } catch (error) {
      console.error('Error creating episode:', error);
      toast.error("Failed to create episode. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  const handleEpisodeClick = (episodeId: string) => {
    navigate(`/episodes/${episodeId}`);
  };

  if (isLoading) {
    return (
      <div className="text-center py-8">
        <RefreshCw className="animate-spin mx-auto text-linkedin-blue" size={32} />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {!episodes || episodes.length === 0 ? (
        <div className="flex flex-col items-center gap-4 py-8">
          <p className="text-gray-400">No episodes found. Click refresh to create one.</p>
          <Button
            onClick={handleGenerateEpisode}
            disabled={isGenerating}
            className="rounded-full px-6 bg-linkedin-blue hover:bg-linkedin-blue/90"
          >
            {isGenerating ? (
              <>
                <RefreshCw className="animate-spin mr-2" />
                <span>Creating...</span>
              </>
            ) : (
              <>
                <RefreshCw className="mr-2" />
                <span>Refresh</span>
              </>
            )}
          </Button>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-semibold text-white">Episodes</h3>
            <Button
              onClick={handleGenerateEpisode}
              disabled={isGenerating}
              className="rounded-full px-6 bg-linkedin-blue hover:bg-linkedin-blue/90"
            >
              {isGenerating ? (
                <>
                  <RefreshCw className="animate-spin mr-2" />
                  <span>Creating...</span>
                </>
              ) : (
                <>
                  <RefreshCw className="mr-2" />
                  <span>Refresh</span>
                </>
              )}
            </Button>
          </div>

          <div className="space-y-4">
            {episodes.map((episode) => (
              <EpisodeCard
                key={episode.id}
                id={episode.id}
                name={episode.name}
                description={episode.description || ""}
                duration={episode.duration}
                coverImage={episode.cover_image}
                onPlay={() => handleEpisodeClick(episode.id)}
                onLearnMore={() => handleEpisodeClick(episode.id)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};