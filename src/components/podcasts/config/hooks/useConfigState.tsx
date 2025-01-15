import { useState, useEffect } from "react";
import { useQuery } from '@tanstack/react-query';
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { PodcastConfig } from "../types";

export const useConfigState = (existingConfig?: any) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isPreview, setIsPreview] = useState(false);
  const [savedPodcastId, setSavedPodcastId] = useState<string | null>(null);

  const { data: fetchedConfig } = useQuery({
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

  const [podcastConfig, setPodcastConfig] = useState<PodcastConfig>({
    industry: undefined,
    skills: [],
    sources: [],
    additionalContent: [],
    style: {
      tone: 'professional',
      length: 30,
      frequency: 'weekly',
      music: 'upbeat'
    }
  });

  useEffect(() => {
    if (fetchedConfig) {
      setPodcastConfig({
        industry: fetchedConfig.name,
        skills: fetchedConfig.skills || [],
        sources: fetchedConfig.sources || [],
        additionalContent: fetchedConfig.additional_content || [],
        style: {
          tone: fetchedConfig.style_tone || 'professional',
          length: fetchedConfig.style_length || 30,
          frequency: fetchedConfig.style_frequency || 'weekly',
          music: fetchedConfig.style_music || 'upbeat'
        },
        coverImage: fetchedConfig.cover_image ? {
          type: 'existing',
          url: fetchedConfig.cover_image
        } : undefined
      });
      setSavedPodcastId(fetchedConfig.id);
      setIsPreview(true);
    }
  }, [fetchedConfig]);

  return {
    currentStep,
    setCurrentStep,
    isPreview,
    setIsPreview,
    podcastConfig,
    setPodcastConfig,
    savedPodcastId,
    setSavedPodcastId
  };
};