import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { ConfigContent } from "../ConfigContent";
import { PodcastConfig } from "../ConfigTab";
import { useNavigate } from "react-router-dom";

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
      const { error } = await supabase
        .from('podcasts')
        .update({
          name: config.industry || 'My Podcast',
          description: `A podcast about ${config.skills.join(', ')}`,
          cover_image: config.coverImage?.url,
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
        .from('podcasts')
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
      <h2 className="text-2xl font-bold text-white">Podcast Configuration Preview</h2>
      <ConfigContent 
        currentStep={5} 
        config={config}
        onConfigUpdate={onConfigUpdate}
        readOnly={!isEditing}
      />
      
      <div className="flex gap-4 mt-8">
        {!isEditing ? (
          <>
            <Button
              onClick={handleEdit}
              className="bg-linkedin-blue hover:bg-linkedin-blue/90"
            >
              Edit
            </Button>
            <Button
              onClick={handleDelete}
              variant="destructive"
            >
              Delete
            </Button>
          </>
        ) : (
          <>
            <Button
              onClick={handleSaveEdit}
              className="bg-linkedin-blue hover:bg-linkedin-blue/90"
            >
              Save
            </Button>
            <Button
              onClick={handleCancelEdit}
              variant="outline"
            >
              Cancel
            </Button>
          </>
        )}
      </div>
    </div>
  );
};