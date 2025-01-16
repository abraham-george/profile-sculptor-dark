import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { RefreshCw, Play } from "lucide-react";
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
      const { data: config } = await supabase
        .from('podcast_config')
        .select('*')
        .maybeSingle();

      if (!config) {
        toast.error("Please configure your podcast first");
        return;
      }

      const response = await fetch('/api/generate-episode', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          skills: config.skills,
          sources: config.sources,
          additionalContent: config.additional_content,
          style: {
            tone: config.style_tone,
            length: config.style_length,
            frequency: config.style_frequency,
            music: config.style_music,
          }
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to generate episode');
      }

      const episode = await response.json();

      const { error: insertError } = await supabase
        .from('podcasts')
        .insert([{
          name: episode.name,
          description: episode.description,
          cover_image: episode.coverImage,
          duration: episode.duration,
        }]);

      if (insertError) throw insertError;

      toast.success("Episode generated successfully!");
      refetch();
    } catch (error) {
      console.error('Error generating episode:', error);
      toast.error("Failed to generate episode. Please try again.");
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
          <p className="text-gray-400">No episodes found. Configure to get started.</p>
          <Button
            onClick={handleGenerateEpisode}
            disabled={isGenerating}
            className="bg-linkedin-blue hover:bg-linkedin-blue/90"
          >
            {isGenerating ? (
              <>
                <RefreshCw className="animate-spin" />
                <span>Generating...</span>
              </>
            ) : (
              <>
                <Play />
                <span>Generate Episode</span>
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
              className="bg-linkedin-blue hover:bg-linkedin-blue/90"
            >
              {isGenerating ? (
                <>
                  <RefreshCw className="animate-spin" />
                  <span>Generating...</span>
                </>
              ) : (
                <>
                  <Play />
                  <span>Generate Episode</span>
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
