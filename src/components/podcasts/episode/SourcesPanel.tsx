import { useEffect, useRef, useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { SourceCard } from "./SourceCard";
import { Source } from "./types";

interface SourcesPanelProps {
  sources: {
    name: string;
    role: string;
    image: string;
  }[];
}

export const SourcesPanel = ({ sources }: SourcesPanelProps) => {
  const [activeSource, setActiveSource] = useState<string | null>(null);
  const sourceRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  
  // Transform the simplified sources into the format expected by SourceCard
  const transformedSources: Source[] = sources.map((source, index) => ({
    id: String(index + 1),
    title: `${source.name}'s Insights`,
    url: "#",
    timestamp: `${index + 1}:00`,
    description: `Professional insights and expertise from ${source.name} in ${source.role}`,
    author: {
      name: source.name,
      role: source.role,
      company: "Industry Leader",
      avatar: source.image,
      followers: "10,000+",
      isFollowing: false,
      connectionDegree: "2nd"
    }
  }));

  useEffect(() => {
    const handleTimestampHover = (event: CustomEvent<{ timestamp: string }>) => {
      const timestamp = event.detail.timestamp;
      const source = transformedSources.find(source => source.timestamp === timestamp);
      
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
  }, [transformedSources]);

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
          {transformedSources.map((source) => (
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