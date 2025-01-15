import { Navigation } from "@/components/Navigation";
import { PodcastLayout } from "@/components/podcasts/PodcastLayout";
import { useNavigate } from "react-router-dom";

const PodcastConfigPage = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-linkedin-dark pt-16">
        <PodcastLayout onBack={handleBack} />
      </div>
    </>
  );
};

export default PodcastConfigPage;