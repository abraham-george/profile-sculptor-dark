import { useEffect, useRef, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Source {
  id: string;
  title: string;
  url: string;
  timestamp: string;
  description: string;
}

export const SourcesPanel = () => {
  const [activeSource, setActiveSource] = useState<string | null>(null);
  const sourceRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  
  const sources: Source[] = [
    {
      id: "1",
      title: "The Future of AI in Business",
      url: "https://example.com/ai-business",
      timestamp: "0:00",
      description: "Comprehensive analysis of AI adoption in various industries"
    },
    {
      id: "2",
      title: "Machine Learning Trends 2024",
      url: "https://example.com/ml-trends",
      timestamp: "0:30",
      description: "Latest developments in machine learning algorithms"
    },
    {
      id: "3",
      title: "AI Customer Experience Study",
      url: "https://example.com/ai-cx",
      timestamp: "1:15",
      description: "How AI is transforming customer interactions"
    },
    {
      id: "4",
      title: "Natural Language Processing Advances",
      url: "https://example.com/nlp",
      timestamp: "2:00",
      description: "Recent breakthroughs in NLP technology"
    },
    {
      id: "5",
      title: "Ethics in AI Development",
      url: "https://example.com/ai-ethics",
      timestamp: "2:45",
      description: "Exploring ethical considerations in AI"
    },
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

  return (
    <div className="glass-card h-full overflow-hidden">
      <div className="p-4 border-b border-white/10">
        <h2 className="text-lg font-semibold">Sources</h2>
      </div>
      
      <ScrollArea className="h-[calc(100%-60px)]">
        <div className="p-4 space-y-4">
          {sources.map((source) => (
            <div
              key={source.id}
              ref={el => sourceRefs.current[source.id] = el}
              className="transition-all duration-200"
            >
              <Card 
                className={`glass-card transition-all duration-200 
                  ${activeSource === source.id ? 'ring-2 ring-linkedin-blue' : ''}`}
              >
                <CardHeader>
                  <CardTitle className="text-base">
                    {source.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-linkedin-text mb-2">
                    {source.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-linkedin-text">
                      Referenced at: {source.timestamp}
                    </span>
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-linkedin-blue hover:underline text-sm"
                    >
                      View Source
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};