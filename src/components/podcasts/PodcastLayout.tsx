import { ArrowLeft, BookOpen, Share, Settings } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import podcastData from '@/data/podcasts.json';

interface PodcastLayoutProps {
  onBack: () => void;
}

export const PodcastLayout = ({ onBack }: PodcastLayoutProps) => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 5;
  const progress = (currentStep / totalSteps) * 100;
  const isConfigured = podcastData.podcastsConfigured;

  const { data: episodes, isLoading } = useQuery({
    queryKey: ['episodes'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('podcasts')
        .select('*')
      
      if (error) {
        console.error('Error fetching episodes:', error);
        return [];
      }
      
      return data || [];
    }
  });

  return (
    <div className="fixed inset-0 bg-linkedin-dark">
      <div className="border-b border-white/10 p-4">
        <button 
          onClick={onBack}
          className="text-gray-400 hover:text-white flex items-center gap-2"
        >
          <ArrowLeft size={20} />
          <span>Profile</span>
        </button>
      </div>
      
      <div className="grid grid-cols-[400px,1fr] gap-6 p-6">
        <div className="glass-card h-full overflow-y-auto">
          <div className="p-4">
            <div className="space-y-4">
              <div className="aspect-square relative rounded-lg overflow-hidden">
                <img 
                  src="/lovable-uploads/c150a2e5-6066-4990-8564-3bd42698220c.png" 
                  alt="Tune in Cover"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-sm text-gray-400 text-center">
                Discover and share your professional insights through LinkedIn's podcast platform
              </p>
            </div>
          </div>
        </div>

        <div className="glass-card h-full overflow-y-auto">
          <div className="p-4">
            <Tabs defaultValue="episodes" className="w-full">
              <TabsList className="w-full justify-start border-b border-white/10 pb-4 mb-4 bg-transparent">
                <TabsTrigger 
                  value="episodes"
                  className="flex items-center gap-2 text-gray-400 data-[state=active]:text-linkedin-blue data-[state=active]:border-b-2 data-[state=active]:border-linkedin-blue hover:text-linkedin-blue transition-colors"
                >
                  <BookOpen className="w-4 h-4" color="#0A66C2" />
                  <span>John's episodes</span>
                </TabsTrigger>
                <TabsTrigger 
                  value="shared"
                  className="flex items-center gap-2 text-gray-400 data-[state=active]:text-linkedin-blue data-[state=active]:border-b-2 data-[state=active]:border-linkedin-blue hover:text-linkedin-blue transition-colors"
                >
                  <Share className="w-4 h-4" color="#0A66C2" />
                  <span>Shared with John</span>
                </TabsTrigger>
                <TabsTrigger 
                  value="configure"
                  className="flex items-center gap-2 text-gray-400 data-[state=active]:text-linkedin-blue data-[state=active]:border-b-2 data-[state=active]:border-linkedin-blue hover:text-linkedin-blue transition-colors"
                >
                  <Settings className="w-4 h-4" color="#0A66C2" />
                  <span>Configure</span>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="episodes">
                {isLoading ? (
                  <div className="text-center py-8">
                    <p className="text-gray-400">Loading episodes...</p>
                  </div>
                ) : episodes && episodes.length > 0 ? (
                  <div className="space-y-4">
                    {episodes.map((episode) => (
                      <div 
                        key={episode.id} 
                        className="p-4 border border-white/10 rounded-lg"
                      >
                        <h3 className="text-lg font-medium">{episode.name}</h3>
                        <p className="text-gray-400">{episode.description}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <p className="text-gray-400">No episodes found. Start creating your podcast content!</p>
                  </div>
                )}
              </TabsContent>

              <TabsContent value="shared">
                <div className="text-center py-8">
                  <p className="text-gray-400">No episodes have been shared with you yet.</p>
                </div>
              </TabsContent>

              <TabsContent value="configure">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl mb-4">Step {currentStep} of {totalSteps}</h3>
                    <Progress value={progress} className="mb-8" />
                    
                    {currentStep === 1 && (
                      <div className="animate-fadeIn">
                        <h3 className="text-xl mb-4">Basic Information</h3>
                        <p className="text-gray-400">Configure your podcast details...</p>
                      </div>
                    )}
                    {currentStep === 2 && (
                      <div className="animate-fadeIn">
                        <h3 className="text-xl mb-4">Cover Art</h3>
                        <p className="text-gray-400">Upload your podcast cover art...</p>
                      </div>
                    )}
                    {currentStep === 3 && (
                      <div className="animate-fadeIn">
                        <h3 className="text-xl mb-4">Distribution</h3>
                        <p className="text-gray-400">Set up your distribution channels...</p>
                      </div>
                    )}
                    {currentStep === 4 && (
                      <div className="animate-fadeIn">
                        <h3 className="text-xl mb-4">Analytics</h3>
                        <p className="text-gray-400">Configure your analytics preferences...</p>
                      </div>
                    )}
                    {currentStep === 5 && (
                      <div className="animate-fadeIn">
                        <h3 className="text-xl mb-4">Review</h3>
                        <p className="text-gray-400">Review your podcast configuration...</p>
                      </div>
                    )}
                    
                    <div className="flex justify-between mt-8">
                      <button
                        onClick={() => setCurrentStep(prev => Math.max(1, prev - 1))}
                        className="profile-button profile-button-outline"
                        disabled={currentStep === 1}
                      >
                        Previous
                      </button>
                      <button
                        onClick={() => setCurrentStep(prev => Math.min(totalSteps, prev + 1))}
                        className="profile-button profile-button-primary"
                      >
                        {currentStep === totalSteps ? 'Finish' : 'Next'}
                      </button>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};