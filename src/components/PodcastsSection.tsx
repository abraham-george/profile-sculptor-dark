import { useState, useEffect } from 'react';
import { EyeOff, Mic, Play, Bookmark } from "lucide-react";
import podcastData from '../data/podcasts.json';

export const PodcastsSection = () => {
  const [isConfigured, setIsConfigured] = useState(podcastData.podcastsConfigured);
  const [episodeCount, setEpisodeCount] = useState(podcastData.episodes.length);

  const handleConfigure = () => {
    // In a real application, this would navigate to a configuration page
    // For demo purposes, we'll just simulate configuration
    const updatedData = {
      ...podcastData,
      podcastsConfigured: true,
      episodes: [
        { id: 1, title: "First Episode" },
        { id: 2, title: "Second Episode" }
      ],
      totalPlays: 156,
      savedEpisodes: [
        { id: 1, title: "First Episode" }
      ]
    };

    // In a real application, this would be an API call
    console.log("Updating podcast configuration:", updatedData);
    setIsConfigured(true);
    setEpisodeCount(updatedData.episodes.length);
  };

  return (
    <div className="section-card">
      <div className="flex justify-between items-start mb-6">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-semibold">Podcasts</h2>
          <span className="flex items-center gap-1 text-sm text-gray-400">
            <EyeOff size={14} />
            Private to you
          </span>
        </div>
        {!isConfigured && (
          <button
            onClick={handleConfigure}
            className="text-linkedin-blue border border-linkedin-blue px-4 py-2 rounded-full hover:bg-linkedin-blue/10 transition-colors"
          >
            Configure
          </button>
        )}
      </div>
      
      {isConfigured ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-gray-200">
                <Mic size={20} className="text-gray-400" />
                <span className="text-xl font-semibold">{episodeCount} episodes created</span>
              </div>
              <p className="text-gray-400">Share your thoughts through podcasting.</p>
            </div>
            
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-gray-200">
                <Play size={20} className="text-gray-400" />
                <span className="text-xl font-semibold">156 total plays</span>
              </div>
              <p className="text-gray-400">Track your podcast engagement.</p>
            </div>
            
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-gray-200">
                <Bookmark size={20} className="text-gray-400" />
                <span className="text-xl font-semibold">8 saved episodes</span>
              </div>
              <p className="text-gray-400">Access your saved content anytime.</p>
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-white/10 flex justify-center">
            <button className="text-gray-400 hover:text-white flex items-center gap-1">
              Show all podcasts
              <span className="text-lg">→</span>
            </button>
          </div>
        </>
      ) : (
        <div className="text-center py-8 text-gray-400">
          <p>Configure your podcast settings to get started</p>
        </div>
      )}
    </div>
  );
};