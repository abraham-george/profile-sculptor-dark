import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ProfileHero } from "@/components/ProfileHero";
import { SuggestedSection } from "@/components/SuggestedSection";
import { AnalyticsSection } from "@/components/AnalyticsSection";
import { PodcastsSection } from "@/components/PodcastsSection";
import { ProfileSidebar } from "@/components/ProfileSidebar";
import { Navigation } from "@/components/Navigation";

const Index = () => {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-linkedin-dark pt-16">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <ProfileHero />
              <SuggestedSection />
              <AnalyticsSection />
              <PodcastsSection />
            </div>
            <div className="lg:col-span-1">
              <ProfileSidebar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;