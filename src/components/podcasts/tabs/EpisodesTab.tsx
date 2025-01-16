import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { RefreshCw, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

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
              <button
                onClick={() => handleEpisodeClick(episode.id)}
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
                <div className="flex-1 text-left">
                  <h4 className="font-medium text-white">{episode.name}</h4>
                  <p className="text-sm text-gray-400">{episode.description}</p>
                  {episode.duration && (
                    <p className="text-xs text-gray-500 mt-1">{episode.duration}</p>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};