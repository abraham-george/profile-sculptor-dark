import { useEffect, useRef, useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { SharedSourceCard } from "./SharedSourceCard";
import { Source } from "../episode/types";

export const SharedSourcesPanel = () => {
  const [activeSource, setActiveSource] = useState<string | null>(null);
  const sourceRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  
  const sources: Source[] = [
    {
      id: "1",
      title: "Digital Transformation in Consulting",
      url: "https://bcg.com/insights",
      timestamp: "1:00",
      description: "Analysis of how AI and digital technologies are reshaping the consulting industry landscape.",
      author: {
        name: "Archith Mohan",
        role: "Partner",
        company: "BCG",
        avatar: "/lovable-uploads/1a7f5330-e3a6-4053-a6c1-9c0954485d59.png",
        followers: "34,567",
        isFollowing: true
      }
    },
    {
      id: "2",
      title: "ESG Consulting Trends 2024",
      url: "https://mckinsey.com/insights",
      timestamp: "2:00",
      description: "Latest insights on the growing importance of ESG consulting and its impact on business strategy.",
      author: {
        name: "Sarah Chen",
        role: "Managing Director",
        company: "McKinsey & Company",
        avatar: "/lovable-uploads/1a7f5330-e3a6-4053-a6c1-9c0954485d59.png",
        followers: "28,123",
        isFollowing: false,
        connectionDegree: "2nd"
      }
    },
    {
      id: "3",
      title: "Future of Strategic Advisory",
      url: "https://bain.com/insights",
      timestamp: "3:00",
      description: "Exploring the intersection of data analytics and traditional consulting methodologies.",
      author: {
        name: "Michael Rodriguez",
        role: "Senior Partner",
        company: "Bain & Company",
        avatar: "/lovable-uploads/1a7f5330-e3a6-4053-a6c1-9c0954485d59.png",
        followers: "15,432",
        isFollowing: false,
        connectionDegree: "2nd"
      }
    },
    {
      id: "4",
      title: "Digital Business Transformation",
      url: "https://deloitte.com/insights",
      timestamp: "4:00",
      description: "Insights on end-to-end business model transformation using cloud, AI, and automation.",
      author: {
        name: "David Kumar",
        role: "Principal",
        company: "Deloitte",
        avatar: "/lovable-uploads/1a7f5330-e3a6-4053-a6c1-9c0954485d59.png",
        followers: "22,789",
        isFollowing: false,
        connectionDegree: "2nd"
      }
    },
    {
      id: "5",
      title: "Future of Work in Consulting",
      url: "https://pwc.com/insights",
      timestamp: "5:00",
      description: "Analysis of hybrid working models and their impact on organizational consulting.",
      author: {
        name: "Emma Thompson",
        role: "Partner",
        company: "PwC",
        avatar: "/lovable-uploads/1a7f5330-e3a6-4053-a6c1-9c0954485d59.png",
        followers: "19,456",
        isFollowing: false,
        connectionDegree: "2nd"
      }
    }
  ];

  useEffect(() => {
    const handleTimestampHover = (event: CustomEvent<{ timestamp: string }>) => {
      const timestamp = event.detail.timestamp;
      console.log('Received timestamp:', timestamp);
      
      const source = sources.find(source => source.timestamp === timestamp);
      console.log('Found source:', source);
      
      if (source) {
        setActiveSource(source.id);
        const sourceElement = sourceRefs.current[source.id];
        
        if (sourceElement) {
          sourceElement.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest'
          });
        }
      } else {
        setActiveSource(null);
      }
    };

    window.addEventListener('timestampHover', handleTimestampHover as EventListener);
    return () => {
      window.removeEventListener('timestampHover', handleTimestampHover as EventListener);
    };
  }, [sources]);

  const handleFollow = (sourceId: string) => {
    console.log('Following source:', sourceId);
  };

  return (
    <div className="glass-card h-full">
      <div className="p-4 border-b border-white/10">
        <h2 className="text-lg font-semibold">Sources</h2>
      </div>
      
      <ScrollArea className="h-[calc(100%-60px)] px-4">
        <div className="py-4 space-y-4">
          {sources.map((source) => (
            <div
              key={source.id}
              ref={el => sourceRefs.current[source.id] = el}
            >
              <SharedSourceCard
                source={source}
                isActive={activeSource === source.id}
                onFollow={handleFollow}
              />
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};