import { useState } from 'react';
import { EyeOff, Mic, Play, Bookmark } from "lucide-react";
import podcastData from '../data/podcasts.json';

export const PodcastsSection = () => {
  const [isConfigured, setIsConfigured] = useState(podcastData.podcastsConfigured);
  const [episodeCount, setEpisodeCount] = useState(podcastData.episodes.length);
  const [showPodcastLayout, setShowPodcastLayout] = useState(false);

  const handleConfigure = () => {
    setShowPodcastLayout(true);
  };

  if (showPodcastLayout) {
    return (
      <div className="fixed inset-0 bg-linkedin-dark pt-16">
        <div className="h-full grid grid-cols-[400px,1fr] gap-6">
          {/* Left Panel */}
          <div className="glass-card h-full overflow-y-auto">
            <div className="p-4">
              <h2 className="text-2xl font-semibold mb-4">Tune in</h2>
              <div className="space-y-4">
                <div className="aspect-square relative rounded-lg overflow-hidden">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" 
                    alt="Podcast Cover"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-semibold">Grow</h3>
                    <p className="text-sm text-gray-400">Latest Episode</p>
                  </div>
                  <button className="profile-button profile-button-primary">
                    Play
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Panel */}
          <div className="glass-card h-full overflow-y-auto">
            <div className="p-4">
              <div className="border-b border-white/10 pb-4 mb-4">
                <div className="flex gap-4">
                  <button className="text-linkedin-blue border-b-2 border-linkedin-blue pb-2">
                    Grow
                  </button>
                  <button className="text-gray-400 hover:text-white pb-2">
                    Catch up
                  </button>
                </div>
              </div>
              <div className="text-center py-12 text-gray-400">
                <p>No episodes available yet</p>
                <button className="profile-button profile-button-outline mt-4">
                  Create Episode
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="section-card">
      <div className="flex justify-between items-start mb-4">
        <div className="flex flex-col gap-1">
          <h2 className="text-2xl font-semibold">Podcasts</h2>
          <span className="flex items-center gap-1 text-sm text-gray-400">
            <EyeOff size={14} />
            Private to you
          </span>
        </div>
        {!isConfigured && (
          <button
            onClick={handleConfigure}
            className="profile-button profile-button-outline"
          >
            Configure
          </button>
        )}
      </div>
      
      {isConfigured ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2 text-gray-200">
                <Mic size={20} className="text-gray-400" />
                <span className="text-xl font-semibold">{episodeCount} episodes created</span>
              </div>
              <p className="text-gray-400">Share your thoughts through podcasting.</p>
            </div>
            
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2 text-gray-200">
                <Play size={20} className="text-gray-400" />
                <span className="text-xl font-semibold">156 total plays</span>
              </div>
              <p className="text-gray-400">Track your podcast engagement.</p>
            </div>
            
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2 text-gray-200">
                <Bookmark size={20} className="text-gray-400" />
                <span className="text-xl font-semibold">8 saved episodes</span>
              </div>
              <p className="text-gray-400">Access your saved content anytime.</p>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-white/10 flex justify-center">
            <button className="text-gray-400 hover:text-white flex items-center gap-1">
              Show all podcasts
              <span className="text-lg">→</span>
            </button>
          </div>
        </>
      ) : (
        <div className="text-center py-6 text-gray-400">
          <p>Configure your podcast settings to get started</p>
        </div>
      )}
    </div>
  );
};