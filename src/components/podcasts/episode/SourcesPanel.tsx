import { useEffect, useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Source {
  id: string;
  title: string;
  url: string;
  timestamp: string;
  description: string;
}

export const SourcesPanel = () => {
  const carouselApi = useRef<any>(null);
  
  const sources: Source[] = [
    {
      id: "1",
      title: "The Future of AI in Business",
      url: "https://example.com/ai-business",
      timestamp: "0:30",
      description: "Comprehensive analysis of AI adoption in various industries"
    },
    {
      id: "2",
      title: "Machine Learning Trends 2024",
      url: "https://example.com/ml-trends",
      timestamp: "1:15",
      description: "Latest developments in machine learning algorithms"
    },
    {
      id: "3",
      title: "AI Customer Experience Study",
      url: "https://example.com/ai-cx",
      timestamp: "2:00",
      description: "How AI is transforming customer interactions"
    },
    {
      id: "4",
      title: "Natural Language Processing Advances",
      url: "https://example.com/nlp",
      timestamp: "2:45",
      description: "Recent breakthroughs in NLP technology"
    },
    {
      id: "5",
      title: "Ethics in AI Development",
      url: "https://example.com/ai-ethics",
      timestamp: "3:30",
      description: "Exploring ethical considerations in AI"
    },
  ];

  useEffect(() => {
    const handleTimestampHover = (event: CustomEvent<string>) => {
      const timestamp = event.detail;
      const sourceIndex = sources.findIndex(source => source.timestamp === timestamp);
      if (sourceIndex !== -1 && carouselApi.current) {
        carouselApi.current.scrollTo(sourceIndex, {
          immediate: false,
          duration: 300
        });
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
      
      <div className="p-4 relative h-[calc(100%-60px)]">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          orientation="vertical"
          className="h-full"
          setApi={(api) => (carouselApi.current = api)}
        >
          <CarouselContent className="-mt-4">
            {sources.map((source) => (
              <CarouselItem key={source.id} className="pt-4">
                <Card className="glass-card">
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
                        Timestamp: {source.timestamp}
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
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};