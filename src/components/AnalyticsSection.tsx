import { Card } from "@/components/ui/card";
import { EyeOff } from "lucide-react";

export const AnalyticsSection = () => {
  return (
    <div className="section-card">
      <div className="flex items-center gap-2 mb-4">
        <h2 className="text-lg font-semibold">Analytics</h2>
        <span className="flex items-center gap-1 text-sm text-gray-400">
          <EyeOff size={14} />
          Private to you
        </span>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 hover:bg-white/5 rounded-lg cursor-pointer transition-colors">
          <div className="flex items-center gap-2 text-gray-400">
            <span>👁️</span>
            <span>Profile views</span>
          </div>
          <p className="text-2xl font-semibold mt-2">147</p>
          <p className="text-sm text-gray-400">Discover who's viewed your profile</p>
        </div>
        
        <div className="p-4 hover:bg-white/5 rounded-lg cursor-pointer transition-colors">
          <div className="flex items-center gap-2 text-gray-400">
            <span>📊</span>
            <span>Post impressions</span>
          </div>
          <p className="text-2xl font-semibold mt-2">2,047</p>
          <p className="text-sm text-gray-400">Check out who's engaging with your posts</p>
        </div>
        
        <div className="p-4 hover:bg-white/5 rounded-lg cursor-pointer transition-colors">
          <div className="flex items-center gap-2 text-gray-400">
            <span>🔍</span>
            <span>Search appearances</span>
          </div>
          <p className="text-2xl font-semibold mt-2">76</p>
          <p className="text-sm text-gray-400">See how often you appear in search results</p>
        </div>
      </div>
    </div>
  );
};