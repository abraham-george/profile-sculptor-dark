import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import PodcastConfigPage from "./pages/PodcastConfigPage";
import { EpisodeDetail } from "./components/podcasts/episode/EpisodeDetail";
import { SharedEpisodeDetail } from "./components/podcasts/shared/SharedEpisodeDetail";
import AnalyticsPage from "./pages/AnalyticsPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/podcast-config" element={<PodcastConfigPage />} />
        <Route path="/episodes/:id" element={<EpisodeDetail />} />
        <Route path="/shared-episodes/:id" element={<SharedEpisodeDetail />} />
        <Route path="/analytics" element={<AnalyticsPage />} />
      </Routes>
    </Router>
  );
}

export default App;