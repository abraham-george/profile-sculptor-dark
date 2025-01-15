import { useState } from "react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { ConfigContent } from "../ConfigContent";
import { PodcastConfig } from "../ConfigTab";
import { useNavigate } from "react-router-dom";
import { PreviewButtons } from "./PreviewButtons";
import { PreviewHeader } from "./PreviewHeader";

interface PreviewModeProps {
  config: PodcastConfig;
  podcastId: string;
  onConfigUpdate: (updates: Partial<PodcastConfig>) => void;
}

export const PreviewMode = ({ config, podcastId, onConfigUpdate }: PreviewModeProps) => {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  const handleSaveEdit = async () => {
    try {
      let coverImageBase64 = config.coverImage?.url;
      
      if (config.coverImage?.url && !config.coverImage.url.startsWith('data:')) {
        const response = await fetch(config.coverImage.url);
        const blob = await response.blob();
        coverImageBase64 = await new Promise((resolve) => {
          const reader = new FileReader();
          reader.onloadend = () => resolve(reader.result as string);
          reader.readAsDataURL(blob);
        });
      }

      const { error } = await supabase
        .from('podcast_config')
        .update({
          name: config.industry || 'My Podcast',
          description: `A podcast about ${config.skills.join(', ')}`,
          cover_image: coverImageBase64,
          skills: config.skills,
          sources: config.sources,
          additional_content: config.additionalContent,
          style_tone: config.style.tone,
          style_length: config.style.length,
          style_frequency: config.style.frequency,
          style_music: config.style.music
        })
        .eq('id', podcastId);

      if (error) throw error;

      setIsEditing(false);
      toast.success("Podcast configuration updated successfully!");
    } catch (error) {
      console.error('Error updating podcast config:', error);
      toast.error("Failed to update podcast configuration. Please try again.");
    }
  };

  const handleDelete = async () => {
    try {
      const { error } = await supabase
        .from('podcast_config')
        .delete()
        .eq('id', podcastId);

      if (error) throw error;

      toast.success("Podcast deleted successfully!");
      navigate('/');
    } catch (error) {
      console.error('Error deleting podcast:', error);
      toast.error("Failed to delete podcast. Please try again.");
    }
  };

  return (
    <div className="space-y-6">
      <PreviewHeader title="Podcast Configuration Preview" />
      <ConfigContent 
        currentStep={5} 
        config={config}
        onConfigUpdate={onConfigUpdate}
        readOnly={!isEditing}
      />
      <PreviewButtons 
        isEditing={isEditing}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onSave={handleSaveEdit}
        onCancel={handleCancelEdit}
      />
    </div>
  );
};