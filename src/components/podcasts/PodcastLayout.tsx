import { BookOpen, Share, Settings, ArrowLeft } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PodcastHeader } from "./PodcastHeader";
import { PodcastSidebar } from "./layout/PodcastSidebar";
import { EpisodesTab } from "./tabs/EpisodesTab";
import { SharedTab } from "./tabs/SharedTab";
import { ConfigTab } from "./config/ConfigTab";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

interface PodcastLayoutProps {
  onBack?: () => void;
}

export const PodcastLayout = ({ onBack }: PodcastLayoutProps) => {
  const navigate = useNavigate();

  const { data: podcastConfig } = useQuery({
    queryKey: ['podcast-config'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('podcast_config')
        .select('*')
        .maybeSingle();
      
      if (error) throw error;
      return data;
    },
  });

  const handleBack = () => {
    if (onBack) {
      onBack();
    } else {
      navigate('/');
    }
  };

  return (
    <div className="fixed inset-0 bg-linkedin-dark">
      <div className="pt-20 px-6 h-full"> {/* Changed p-6 to pt-20 px-6 to add top spacing */}
        <button 
          onClick={handleBack}
          className="mb-6 flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
        >
          <ArrowLeft size={20} />
          <span>Back to Profile</span>
        </button>
        
        <div className="grid grid-cols-[400px,1fr] gap-6 h-[calc(100%-4rem)]">
          <div className="glass-card overflow-y-auto">
            <PodcastSidebar />
          </div>

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
                  <ConfigTab existingConfig={podcastConfig} />
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};