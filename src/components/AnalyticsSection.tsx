import { Card } from "@/components/ui/card";
import { EyeOff, Users, BarChart2, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const AnalyticsSection = () => {
  const navigate = useNavigate();

  return (
    <div className="section-card">
      <div className="flex flex-col gap-2 mb-6">
        <h2 className="text-2xl font-semibold">Analytics</h2>
        <span className="flex items-center gap-1 text-sm text-gray-400">
          <EyeOff size={14} />
          Private to you
        </span>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 text-gray-200">
            <Users size={20} className="text-gray-400" />
            <span className="text-xl font-semibold">55 profile views</span>
          </div>
          <p className="text-gray-400">Discover who's viewed your profile.</p>
        </div>
        
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 text-gray-200">
            <BarChart2 size={20} className="text-gray-400" />
            <span className="text-xl font-semibold">42 post impressions</span>
          </div>
          <p className="text-gray-400">Check out who's engaging with your posts.</p>
          <span className="text-sm text-gray-500">Past 7 days</span>
        </div>
        
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 text-gray-200">
            <Search size={20} className="text-gray-400" />
            <span className="text-xl font-semibold">32 search appearances</span>
          </div>
          <p className="text-gray-400">See how often you appear in search results.</p>
        </div>
      </div>

      <div className="mt-8 pt-4 border-t border-white/10 flex justify-center">
        <button 
          onClick={() => navigate("/analytics")}
          className="text-gray-400 hover:text-white flex items-center gap-1"
        >
          Show all analytics
          <span className="text-lg">→</span>
        </button>
      </div>
    </div>
  );
};