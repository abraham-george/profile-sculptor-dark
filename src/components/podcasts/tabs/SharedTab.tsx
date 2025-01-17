import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { EpisodeCard } from '../episode/EpisodeCard';

export const SharedTab = () => {
  const { data: sharedPodcasts, isLoading } = useQuery({
    queryKey: ['shared-podcasts'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('podcasts')
        .select('*')
        .not('shared_by', 'is', null);
      
      if (error) throw error;
      return data;
    },
  });

  if (isLoading) {
    return <div className="animate-pulse">Loading shared episodes...</div>;
  }

  if (!sharedPodcasts?.length) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-400">No episodes have been shared with you yet.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {sharedPodcasts.map((podcast) => (
        <div key={podcast.id} className="relative">
          <div className="absolute -top-2 -right-2 bg-linkedin-blue text-white text-xs px-2 py-1 rounded-full z-10">
            Shared by {podcast.shared_by}
          </div>
          <EpisodeCard
            id={podcast.id}
            name={podcast.name}
            description={podcast.description || ''}
            duration={podcast.duration}
            coverImage={podcast.cover_image}
          />
        </div>
      ))}
    </div>
  );
};