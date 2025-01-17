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
      name: "Weekly AI TuneIn",
      description: "A comprehensive overview of recent AI developments from industry leaders",
      duration: "5 minutes",
    },
    {
      id: "shared-2",
      name: "Leadership & P&L Mastery",
      description: "Strategic insights on management consulting and business leadership",
      duration: "25 minutes",
      sharedBy: "Archith Mohan",
      role: "Senior Management Consultant",
      company: "Global Consulting Partners"
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