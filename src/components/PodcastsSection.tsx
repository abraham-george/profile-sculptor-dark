import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { PodcastStats } from './podcasts/PodcastStats';
import { PodcastHeader } from './podcasts/PodcastHeader';

export const PodcastsSection = () => {
  const navigate = useNavigate();

  const { data: podcastConfig, isLoading } = useQuery({
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

  const handleConfigure = () => {
    navigate("/podcast-config");
  };

  const handleSeeEpisodes = () => {
    navigate("/podcast-config");
  };

  if (isLoading) {
    return <div className="section-card animate-pulse">Loading...</div>;
  }

  return (
    <div className="section-card">
      <PodcastHeader 
        isConfigured={!!podcastConfig} 
        onConfigure={handleConfigure} 
      />
      {podcastConfig ? (
        <>
          <PodcastStats />
          <div className="border-t border-white/10 flex justify-center">
            <button 
              onClick={handleSeeEpisodes}
              className="text-gray-400 hover:text-white flex items-center gap-1 py-4"
            >
              See episodes
              <span className="text-lg">→</span>
            </button>
          </div>
        </>
      ) : (
        <div className="text-center text-gray-400">
          <p>Configure your podcast settings to start creating and sharing episodes</p>
        </div>
      )}
    </div>
  );
};