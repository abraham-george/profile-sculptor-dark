import { useNavigate, useParams } from "react-router-dom";
import { PodcastHeader } from "../layout/PodcastHeader";
import { TranscriptPanel } from "./TranscriptPanel";
import { SourcesPanel } from "./SourcesPanel";
import { AudioPlayer } from "./AudioPlayer";
import { NextStepsSection } from "./next-steps/NextStepsSection";

export const EpisodeDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="h-full flex flex-col">
      <PodcastHeader onBack={handleBack} />
      
      <div className="flex-1 overflow-auto">
        <div className="container mx-auto px-4 py-6 space-y-6">
          <AudioPlayer />
          
          {/* Fixed height container with independent scrollable panels */}
          <div className="h-[600px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-full">
              <div className="h-full overflow-hidden">
                <TranscriptPanel />
              </div>
              <div className="h-full overflow-hidden">
                <SourcesPanel />
              </div>
            </div>
          </div>

          {/* Next Steps Section */}
          <NextStepsSection />
        </div>
      </div>
    </div>
  );
};