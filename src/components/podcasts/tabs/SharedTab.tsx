import { useNavigate } from "react-router-dom";
import { SharedEpisodeCard } from "../shared/SharedEpisodeCard";

export const SharedTab = () => {
  const navigate = useNavigate();

  const handlePlay = (id: string) => {
    console.log('Playing shared episode:', id);
  };

  const handleLearnMore = (id: string) => {
    navigate(`/shared-episodes/${id}`);
  };

  // Example shared episode data - replace with actual data from your backend
  const sharedEpisodes = [
    {
      id: "shared-1",
      name: "AI Weekly Insights",
      description: "Latest developments in AI and machine learning",
      duration: "5 minutes",
    }
  ];

  return (
    <div className="space-y-4">
      {sharedEpisodes.map((episode) => (
        <SharedEpisodeCard
          key={episode.id}
          {...episode}
          onPlay={() => handlePlay(episode.id)}
          onLearnMore={() => handleLearnMore(episode.id)}
        />
      ))}
    </div>
  );
};