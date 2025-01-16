import { useEffect, useRef, useState } from "react";
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
      title: "The State of AI in Business 2024",
      url: "https://example.com/ai-business-2024",
      timestamp: "0:00",
      description: "Comprehensive analysis of AI adoption trends across industries, featuring insights from leading technology executives and researchers."
    },
    {
      id: "2",
      title: "AI-Driven Decision Making in Finance",
      url: "https://example.com/ai-finance-decisions",
      timestamp: "5:00",
      description: "Research paper examining the impact of AI on financial decision-making processes and risk assessment methodologies."
    },
    {
      id: "3",
      title: "AI Applications in Healthcare",
      url: "https://example.com/ai-healthcare-innovations",
      timestamp: "10:00",
      description: "Study published in Nature Medicine showcasing breakthrough achievements in AI-powered medical diagnosis and drug discovery."
    },
    {
      id: "4",
      title: "Evolution of AI in Customer Service",
      url: "https://example.com/ai-customer-service",
      timestamp: "15:00",
      description: "Industry report on the transformation of customer service through AI, featuring case studies from leading companies."
    },
    {
      id: "5",
      title: "AI in Manufacturing: Industry 4.0",
      url: "https://example.com/ai-manufacturing",
      timestamp: "20:00",
      description: "Technical analysis of AI implementation in smart manufacturing, including predictive maintenance and quality control systems."
    },
    {
      id: "6",
      title: "Ethical AI Framework",
      url: "https://example.com/ethical-ai",
      timestamp: "25:00",
      description: "Guidelines and best practices for responsible AI deployment, addressing privacy concerns and algorithmic bias."
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