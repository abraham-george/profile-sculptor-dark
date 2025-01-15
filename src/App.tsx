import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import PodcastConfigPage from "./pages/PodcastConfigPage";
import { EpisodeDetail } from "./components/podcasts/episode/EpisodeDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/podcast-config" element={<PodcastConfigPage />} />
        <Route path="/episodes/:id" element={<EpisodeDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
