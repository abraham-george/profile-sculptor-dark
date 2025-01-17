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
      title: "The Future of Management Consulting",
      url: "https://hbr.org/consulting",
      timestamp: "1:00",
      description: "Insights on how digital transformation is reshaping the consulting industry and driving value for clients.",
      author: {
        name: "Archith Mohan",
        role: "Senior Management Consultant",
        company: "Global Consulting Partners",
        avatar: "/lovable-uploads/1a7f5330-e3a6-4053-a6c1-9c0954485d59.png",
        followers: "34,567",
        isFollowing: true
      }
    },
    {
      id: "2",
      title: "Leadership in Digital Age",
      url: "https://mckinsey.com/insights",
      timestamp: "2:00",
      description: "Exploring how successful leaders navigate digital transformation while maintaining strong P&L performance.",
      author: {
        name: "Sarah Chen",
        role: "Managing Director",
        company: "McKinsey & Company",
        avatar: "/lovable-uploads/1a7f5330-e3a6-4053-a6c1-9c0954485d59.png",
        followers: "28,123",
        isFollowing: true
      }
    },
    {
      id: "3",
      title: "Data-Driven Consulting",
      url: "https://bcg.com/perspectives",
      timestamp: "3:00",
      description: "How data analytics is transforming management consulting and decision-making processes.",
      author: {
        name: "Michael Rodriguez",
        role: "Partner",
        company: "BCG",
        avatar: "/lovable-uploads/1a7f5330-e3a6-4053-a6c1-9c0954485d59.png",
        followers: "15,432",
        isFollowing: true
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