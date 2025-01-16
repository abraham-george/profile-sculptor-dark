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
      title: "Anthropic's Claude 3 Release",
      url: "https://www.anthropic.com/claude3",
      timestamp: "0:00",
      description: "Detailed analysis of Claude 3's capabilities and benchmarks in reasoning and analysis tasks."
    },
    {
      id: "2",
      title: "Google Gemini's Multimodal Advances",
      url: "https://blog.google/technology/ai/gemini-update-march-2024",
      timestamp: "3:00",
      description: "Latest updates on Gemini's enhanced capabilities in processing multiple types of data simultaneously."
    },
    {
      id: "3",
      title: "AI in Medical Imaging Research",
      url: "https://nature.com/articles/ai-medical-imaging-2024",
      timestamp: "6:00",
      description: "Study comparing AI and human expert performance in early cancer detection through medical imaging."
    },
    {
      id: "4",
      title: "Tesla FSD Beta Progress Report",
      url: "https://tesla.com/blog/fsd-beta-march-2024",
      timestamp: "9:00",
      description: "Latest developments in Tesla's Full Self-Driving technology and urban navigation capabilities."
    },
    {
      id: "5",
      title: "LLM Hallucination Reduction Study",
      url: "https://arxiv.org/abs/2403.llm-accuracy",
      timestamp: "12:00",
      description: "Research paper on new methodologies for improving factual accuracy in language models."
    },
    {
      id: "6",
      title: "AI in Climate Research",
      url: "https://science.org/ai-climate-2024",
      timestamp: "15:00",
      description: "Analysis of AI applications in weather prediction and renewable energy optimization."
    },
    {
      id: "7",
      title: "AI in Education Report 2024",
      url: "https://edu.ai/report-2024",
      timestamp: "18:00",
      description: "Comprehensive study on the impact of AI-powered personalized learning platforms."
    },
    {
      id: "8",
      title: "Gaming AI Revolution",
      url: "https://gamedeveloper.com/ai-npc-2024",
      timestamp: "21:00",
      description: "Overview of advances in AI-powered NPCs and their impact on gaming experiences."
    },
    {
      id: "9",
      title: "Protein Folding Breakthroughs",
      url: "https://science.org/protein-ai-2024",
      timestamp: "24:00",
      description: "Latest developments in AI-powered protein structure prediction and drug discovery."
    },
    {
      id: "10",
      title: "AI Ethics Framework 2024",
      url: "https://ai-ethics.org/framework-2024",
      timestamp: "27:00",
      description: "Updated guidelines and frameworks for responsible AI deployment and governance."
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