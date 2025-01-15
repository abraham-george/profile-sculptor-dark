import { EyeOff } from "lucide-react";

interface PodcastHeaderProps {
  isConfigured: boolean;
  onConfigure: () => void;
}

export const PodcastHeader = ({ isConfigured, onConfigure }: PodcastHeaderProps) => {
  return (
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
          onClick={onConfigure}
          className="profile-button profile-button-outline"
        >
          Configure
        </button>
      )}
    </div>
  );
};