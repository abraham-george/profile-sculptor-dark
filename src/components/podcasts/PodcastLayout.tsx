import { BookOpen, Share, Settings } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PodcastHeader } from "./PodcastHeader";
import { PodcastSidebar } from "./layout/PodcastSidebar";
import { EpisodesTab } from "./tabs/EpisodesTab";
import { SharedTab } from "./tabs/SharedTab";
import { ConfigTab } from "./config/ConfigTab";

interface PodcastLayoutProps {
  onBack: () => void;
}

export const PodcastLayout = ({ onBack }: PodcastLayoutProps) => {
  return (
    <div className="fixed inset-0 bg-linkedin-dark">
      <div className="p-6">
        <button 
          onClick={onBack}
          className="text-gray-400 hover:text-white flex items-center gap-2 mb-6"
        >
          <ArrowLeft size={20} />
          <span>Profile</span>
        </button>
        
        <div className="grid grid-cols-[400px,1fr] gap-6">
          <PodcastSidebar />

          <div className="glass-card h-full overflow-y-auto">
            <div className="p-4">
              <Tabs defaultValue="episodes" className="w-full">
                <TabsList className="w-full justify-start border-b border-white/10 pb-4 mb-4 bg-transparent">
                  <TabsTrigger 
                    value="episodes"
                    className="flex items-center gap-2 text-gray-400 data-[state=active]:border-b data-[state=active]:border-linkedin-blue hover:text-linkedin-blue transition-colors"
                  >
                    <BookOpen className="w-4 h-4" />
                    <span>John's episodes</span>
                  </TabsTrigger>
                  <TabsTrigger 
                    value="shared"
                    className="flex items-center gap-2 text-gray-400 data-[state=active]:border-b data-[state=active]:border-linkedin-blue hover:text-linkedin-blue transition-colors"
                  >
                    <Share className="w-4 h-4" />
                    <span>Shared with John</span>
                  </TabsTrigger>
                  <TabsTrigger 
                    value="configure"
                    className="flex items-center gap-2 text-gray-400 data-[state=active]:border-b data-[state=active]:border-linkedin-blue hover:text-linkedin-blue transition-colors"
                  >
                    <Settings className="w-4 h-4" />
                    <span>Configure</span>
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="episodes">
                  <EpisodesTab />
                </TabsContent>

                <TabsContent value="shared">
                  <SharedTab />
                </TabsContent>

                <TabsContent value="configure">
                  <ConfigTab />
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};