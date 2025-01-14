import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PencilIcon, MessageCircle } from "lucide-react";

export const ProfileSidebar = () => {
  return (
    <div className="space-y-4">
      <div className="section-card">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Profile language</h2>
          <Button variant="ghost" size="icon">
            <PencilIcon className="h-4 w-4" />
          </Button>
        </div>
        <p className="text-gray-400">English</p>
      </div>

      <div className="section-card">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Public profile & URL</h2>
          <Button variant="ghost" size="icon">
            <PencilIcon className="h-4 w-4" />
          </Button>
        </div>
        <p className="text-gray-400 break-all">www.linkedin.com/in/john-doe</p>
      </div>

      <div className="section-card">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-yellow-500">⭐</span>
          <h2 className="text-lg font-semibold">Premium</h2>
        </div>
        <h3 className="font-medium mb-2">Your viewers also viewed</h3>
        
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex items-center gap-4 py-3 border-t border-white/10">
            <img
              src={`https://i.pravatar.cc/40?img=${i}`}
              alt="Viewer"
              className="w-12 h-12 rounded-full"
            />
            <div className="flex-grow">
              <p className="font-medium">Jane Smith</p>
              <p className="text-sm text-gray-400">Senior Software Engineer at Tech Corp</p>
            </div>
            <Button variant="outline" size="sm" className="flex gap-1">
              <MessageCircle className="h-4 w-4" />
              Message
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};