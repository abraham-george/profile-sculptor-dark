import { useEffect, useRef, useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { SourceCard } from "./SourceCard";
import { Source } from "./types";

export const SourcesPanel = () => {
  const [activeSource, setActiveSource] = useState<string | null>(null);
  const sourceRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  
  const sources: Source[] = [
    {
      id: "1",
      title: "Microsoft's AI Investment in India",
      url: "https://www.microsoft.com/press",
      timestamp: "1:00",
      description: "Microsoft's CEO announces major AI investments and initiatives in India, focusing on cloud services and AI skill development.",
      author: {
        name: "Satya Nadella",
        role: "CEO",
        company: "Microsoft",
        avatar: "/lovable-uploads/1a7f5330-e3a6-4053-a6c1-9c0954485d59.png",
        followers: "34,567",
        isFollowing: false
      }
    },
    {
      id: "2",
      title: "AI in LinkedIn Hiring",
      url: "https://linkedin.com/blog",
      timestamp: "2:00",
      description: "Insights on AI's role in transforming hiring processes and reducing bias in recruitment.",
      author: {
        name: "Ryan Roslansky",
        role: "CEO",
        company: "LinkedIn",
        avatar: "/lovable-uploads/1a7f5330-e3a6-4053-a6c1-9c0954485d59.png",
        followers: "28,123",
        isFollowing: false
      }
    },
    {
      id: "3",
      title: "LangChain's Vision for AI Development",
      url: "https://langchain.com/blog",
      timestamp: "3:00",
      description: "Harrison Chase discusses LangChain's mission to democratize AI development and make it more accessible to developers worldwide.",
      author: {
        name: "Harrison Chase",
        role: "CEO",
        company: "LangChain",
        avatar: "/lovable-uploads/1a7f5330-e3a6-4053-a6c1-9c0954485d59.png",
        followers: "15,432",
        isFollowing: false
      }
    },
    {
      id: "4",
      title: "AI in Disaster Recovery",
      url: "https://nvidia.com/research",
      timestamp: "4:00",
      description: "Research insights on AI-powered robots in disaster recovery and wildfire management.",
      author: {
        name: "Jim Fan",
        role: "Senior Research Manager",
        company: "NVIDIA",
        avatar: "/lovable-uploads/1a7f5330-e3a6-4053-a6c1-9c0954485d59.png",
        followers: "12,789",
        isFollowing: false
      }
    },
    {
      id: "5",
      title: "AI Agents Market Potential",
      url: "https://nvidia.com/blog",
      timestamp: "5:00",
      description: "NVIDIA CEO's perspective on the economic potential of AI agents and industry growth.",
      author: {
        name: "Jensen Huang",
        role: "CEO",
        company: "NVIDIA",
        avatar: "/lovable-uploads/1a7f5330-e3a6-4053-a6c1-9c0954485d59.png",
        followers: "45,678",
        isFollowing: false
      }
    }
  ];

  useEffect(() => {
    const handleTimestampHover = (event: CustomEvent<{ timestamp: string }>) => {
      const timestamp = event.detail.timestamp;
      const source = sources.find(source => source.timestamp === timestamp);
      
      if (source) {
        setActiveSource(source.id);
        const sourceElement = sourceRefs.current[source.id];
        
        if (sourceElement) {
          sourceElement.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest'
          });
        }
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
              <SourceCard
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