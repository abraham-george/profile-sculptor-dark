import { useNavigate, useParams } from "react-router-dom";
import { PodcastHeader } from "../layout/PodcastHeader";
import { TranscriptPanel } from "./TranscriptPanel";
import { SourcesPanel } from "./SourcesPanel";
import { AudioPlayer } from "./AudioPlayer";

export const EpisodeDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="h-full flex flex-col">
      <PodcastHeader onBack={handleBack} />
      
      <div className="flex-1 overflow-hidden">
        <div className="container mx-auto px-4 py-6 space-y-6">
          <AudioPlayer />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-[calc(100vh-300px)]">
            <TranscriptPanel />
            <SourcesPanel />
          </div>
        </div>
      </div>
    </div>
  );
};