import { useState } from 'react';
import podcastData from '../data/podcasts.json';
import { PodcastLayout } from './podcasts/PodcastLayout';
import { PodcastStats } from './podcasts/PodcastStats';
import { PodcastHeader } from './podcasts/PodcastHeader';

export const PodcastsSection = () => {
  const [isConfigured, setIsConfigured] = useState(podcastData.podcastsConfigured);
  const [episodeCount, setEpisodeCount] = useState(podcastData.episodes.length);
  const [showPodcastLayout, setShowPodcastLayout] = useState(false);

  const handleConfigure = () => {
    setShowPodcastLayout(true);
  };

  if (showPodcastLayout) {
    return <PodcastLayout />;
  }

  return (
    <div className="section-card">
      <PodcastHeader 
        isConfigured={isConfigured} 
        onConfigure={handleConfigure} 
      />
      
      {isConfigured ? (
        <PodcastStats episodeCount={episodeCount} />
      ) : (
        <div className="text-center py-6 text-gray-400">
          <p>Configure your podcast settings to get started</p>
        </div>
      )}
    </div>
  );
};