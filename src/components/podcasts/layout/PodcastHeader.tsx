import { ArrowLeft } from "lucide-react";

interface PodcastHeaderProps {
  onBack: () => void;
}

export const PodcastHeader = ({ onBack }: PodcastHeaderProps) => {
  return (
    <div className="border-b border-white/10 p-4">
      <button 
        onClick={onBack}
        className="text-gray-400 hover:text-white flex items-center gap-2"
      >
        <ArrowLeft size={20} />
        <span>Profile</span>
      </button>
    </div>
  );
};