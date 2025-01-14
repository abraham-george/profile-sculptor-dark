import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ProfileHero } from "@/components/ProfileHero";
import { ProfileActions } from "@/components/ProfileActions";
import { SuggestedSection } from "@/components/SuggestedSection";
import { AnalyticsSection } from "@/components/AnalyticsSection";
import { ProfileSidebar } from "@/components/ProfileSidebar";

const Index = () => {
  return (
    <div className="min-h-screen bg-linkedin-dark">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <ProfileHero />
            <ProfileActions />
            <SuggestedSection />
            <AnalyticsSection />
          </div>
          <div className="lg:col-span-1">
            <ProfileSidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;