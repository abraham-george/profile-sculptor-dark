import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import podcastData from '../data/podcasts.json';
import { PodcastStats } from './podcasts/PodcastStats';
import { PodcastHeader } from './podcasts/PodcastHeader';

export const PodcastsSection = () => {
  const navigate = useNavigate();
  const [isConfigured] = useState(podcastData.podcastsConfigured);
  const [episodeCount] = useState(podcastData.episodes.length);

  const handleConfigure = () => {
    navigate("/podcast-config");
  };

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