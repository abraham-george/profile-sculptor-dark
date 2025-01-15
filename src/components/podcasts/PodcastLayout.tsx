import { Mic } from "lucide-react";

export const PodcastLayout = () => {
  return (
    <div className="fixed inset-0 bg-linkedin-dark z-50" style={{ top: '64px' }}>
      <div className="h-full grid grid-cols-[400px,1fr] gap-6 p-6">
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
};