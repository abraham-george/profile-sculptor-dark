import { Button } from "@/components/ui/button";
import { PodcastConfig } from "./types";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

interface ConfigActionsProps {
  currentStep: number;
  totalSteps: number;
  canProceed: boolean;
  onPrevious: () => void;
  onNext: () => void;
  config: PodcastConfig;
  onSuccess: (podcastId: string) => void;
}

export const ConfigActions = ({
  currentStep,
  totalSteps,
  canProceed,
  onPrevious,
  onNext,
  config,
  onSuccess
}: ConfigActionsProps) => {
  const handleFinish = async () => {
    try {
      const { data, error } = await supabase
        .from('podcast_config')
        .insert({
          name: config.industry || 'My Podcast',
          description: `A podcast about ${config.skills.join(', ')}`,
          cover_image: config.coverImage?.url,
          skills: config.skills,
          sources: config.sources,
          additional_content: config.additionalContent,
          style_tone: config.style.tone,
          style_length: config.style.length,
          style_frequency: config.style.frequency,
          style_music: config.style.music
        })
        .select()
        .single();

      if (error) throw error;

      onSuccess(data.id);
      toast.success("Podcast configuration saved successfully!");
    } catch (error) {
      console.error('Error saving podcast config:', error);
      toast.error("Failed to save podcast configuration. Please try again.");
    }
  };

  return (
    <div className="flex justify-between mt-8">
      <Button
        onClick={onPrevious}
        className="profile-button profile-button-outline w-32"
        disabled={currentStep === 1}
      >
        Previous
      </Button>
      <Button
        onClick={currentStep === totalSteps ? handleFinish : onNext}
        className={`profile-button w-32 ${canProceed ? 'profile-button-primary' : 'profile-button-disabled bg-gray-400 cursor-not-allowed'}`}
        disabled={!canProceed}
      >
        {currentStep === totalSteps ? 'Finish' : 'Next'}
      </Button>
    </div>
  );
};