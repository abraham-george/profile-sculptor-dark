import { ArrowLeft } from "lucide-react";

interface PodcastLayoutProps {
  onBack: () => void;
}

export const PodcastLayout = ({ onBack }: PodcastLayoutProps) => {
  return (
    <div className="fixed inset-0 bg-linkedin-dark">
      <div className="border-b border-white/10 p-4">
        <button 
          onClick={onBack}
          className="text-gray-400 hover:text-white flex items-center gap-2"
        >
          <ArrowLeft size={20} />
          <span>Profile</span>
        </button>
      </div>
      <div className="grid grid-cols-[400px,1fr] gap-6 p-6">
        {/* Left Panel */}
        <div className="glass-card h-full overflow-y-auto">
          <div className="p-4">
            <div className="space-y-4">
              <div className="aspect-square relative rounded-lg overflow-hidden">
                <img 
                  src="/lovable-uploads/c150a2e5-6066-4990-8564-3bd42698220c.png" 
                  alt="Tune in Cover"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-sm text-gray-400 text-center">
                Discover and share your professional insights through LinkedIn's podcast platform
              </p>
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
};