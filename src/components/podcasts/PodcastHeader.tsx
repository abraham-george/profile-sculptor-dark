import { EyeOff, ArrowLeft } from "lucide-react";

interface PodcastHeaderProps {
  isConfigured: boolean;
  onConfigure: () => void;
  onBack?: () => void;
}

export const PodcastHeader = ({ isConfigured, onConfigure, onBack }: PodcastHeaderProps) => {
  return (
    <div className="flex flex-col gap-4 mb-6">
      {onBack && (
        <button 
          onClick={onBack}
          className="text-gray-400 hover:text-white flex items-center gap-2 w-fit"
        >
          <ArrowLeft size={20} />
          <span>Profile</span>
        </button>
      )}
      <div className="flex justify-between items-start">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-semibold">Podcasts</h2>
          <span className="flex items-center gap-1 text-sm text-gray-400">
            <EyeOff size={14} />
            Private to you
          </span>
        </div>
        {!isConfigured && (
          <button
            onClick={onConfigure}
            className="profile-button profile-button-outline"
          >
            Configure
          </button>
        )}
      </div>
    </div>
  );
};