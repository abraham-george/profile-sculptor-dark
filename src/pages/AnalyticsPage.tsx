import { Navigation } from "@/components/Navigation";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AnalyticsPage = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-linkedin-dark pt-20">
        <div className="max-w-7xl mx-auto px-6">
          <button 
            onClick={handleBack}
            className="mb-6 flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Back to Profile</span>
          </button>

          <div className="glass-card p-6">
            <div className="flex items-center gap-4 mb-6">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
                alt="Profile"
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h1 className="text-xl font-semibold text-white">Analytics & tools</h1>
                <p className="text-gray-400">Friday, January 17</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="glass-card p-6">
                <div className="text-4xl font-bold text-white mb-2">16</div>
                <div className="text-gray-200">Post impressions</div>
                <div className="text-green-500 text-sm">↑ 59% past 7 days</div>
              </div>
              
              <div className="glass-card p-6">
                <div className="text-4xl font-bold text-white mb-2">762</div>
                <div className="text-gray-200">Followers</div>
                <div className="text-red-500 text-sm">↓ 0.2% past 7 days</div>
              </div>
              
              <div className="glass-card p-6">
                <div className="text-4xl font-bold text-white mb-2">54</div>
                <div className="text-gray-200">Profile viewers</div>
                <div className="text-gray-400 text-sm">Past 90 days</div>
              </div>
              
              <div className="glass-card p-6">
                <div className="text-4xl font-bold text-white mb-2">37</div>
                <div className="text-gray-200">Search appearances</div>
                <div className="text-gray-400 text-sm">Previous week</div>
              </div>
            </div>

            <div className="glass-card p-6 mb-6">
              <h2 className="text-xl font-semibold text-white mb-4">Weekly sharing tracker</h2>
              <p className="text-gray-300 mb-6">
                Increase your visibility by posting, commenting, or contributing to collaborative articles. 
                We suggest taking 3 actions every week.
              </p>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center">
                  <span className="text-gray-300">0/3</span>
                </div>
                <div>
                  <div className="text-gray-200">Jan 13-Jan 19</div>
                  <div className="text-gray-400">No actions yet. Take 3 actions to achieve the weekly sharing goal.</div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="glass-card p-4">
                  <div className="text-xl font-semibold text-white mb-2">0 posts</div>
                  <button className="text-linkedin-blue hover:underline">Start a post</button>
                </div>
                
                <div className="glass-card p-4">
                  <div className="text-xl font-semibold text-white mb-2">0 comments</div>
                  <button className="text-linkedin-blue hover:underline">Comment on feed</button>
                </div>
                
                <div className="glass-card p-4">
                  <div className="text-xl font-semibold text-white mb-2">0 contributions</div>
                  <button className="text-linkedin-blue hover:underline">Add contribution</button>
                </div>
              </div>
            </div>

            <div className="glass-card p-6">
              <h2 className="text-xl font-semibold text-white mb-4">Creator tools</h2>
              <p className="text-gray-300 mb-2">
                Creator mode gives you more ways to engage with your audience by enabling access to select tools.{" "}
                <button className="text-linkedin-blue hover:underline">Learn more</button>
                {" "}about creator tool access.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AnalyticsPage;