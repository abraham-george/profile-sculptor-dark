export const PodcastSidebar = () => {
  return (
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
  );
};