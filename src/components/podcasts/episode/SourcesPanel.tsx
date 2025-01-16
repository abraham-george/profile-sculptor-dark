import { useEffect, useRef, useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

interface Source {
  id: string;
  title: string;
  url: string;
  timestamp: string;
  description: string;
  author: {
    name: string;
    role: string;
    company: string;
    avatar: string;
    followers: string;
    isFollowing: boolean;
  };
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
      description: "Detailed analysis of Claude 3's capabilities and benchmarks in reasoning and analysis tasks.",
      author: {
        name: "Dario Amodei",
        role: "CEO",
        company: "Anthropic",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
        followers: "12,453",
        isFollowing: false
      }
    },
    {
      id: "2",
      title: "Google Gemini's Multimodal Advances",
      url: "https://blog.google/technology/ai/gemini-update-march-2024",
      timestamp: "3:00",
      description: "Latest updates on Gemini's enhanced capabilities in processing multiple types of data simultaneously.",
      author: {
        name: "Sundar Pichai",
        role: "CEO",
        company: "Google",
        avatar: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
        followers: "15,678",
        isFollowing: false
      }
    },
    {
      id: "3",
      title: "AI in Medical Imaging Research",
      url: "https://nature.com/articles/ai-medical-imaging-2024",
      timestamp: "6:00",
      description: "Study comparing AI and human expert performance in early cancer detection through medical imaging.",
      author: {
        name: "Jane Doe",
        role: "Researcher",
        company: "Nature",
        avatar: "https://images.unsplash.com/photo-1502685104226-1c4b1c1c1c1c",
        followers: "8,123",
        isFollowing: false
      }
    },
    {
      id: "4",
      title: "Tesla FSD Beta Progress Report",
      url: "https://tesla.com/blog/fsd-beta-march-2024",
      timestamp: "9:00",
      description: "Latest developments in Tesla's Full Self-Driving technology and urban navigation capabilities.",
      author: {
        name: "Elon Musk",
        role: "CEO",
        company: "Tesla",
        avatar: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
        followers: "30,456",
        isFollowing: false
      }
    },
    {
      id: "5",
      title: "LLM Hallucination Reduction Study",
      url: "https://arxiv.org/abs/2403.llm-accuracy",
      timestamp: "12:00",
      description: "Research paper on new methodologies for improving factual accuracy in language models.",
      author: {
        name: "Alice Smith",
        role: "AI Researcher",
        company: "OpenAI",
        avatar: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
        followers: "5,678",
        isFollowing: false
      }
    },
    {
      id: "6",
      title: "AI in Climate Research",
      url: "https://science.org/ai-climate-2024",
      timestamp: "15:00",
      description: "Analysis of AI applications in weather prediction and renewable energy optimization.",
      author: {
        name: "Bob Johnson",
        role: "Climate Scientist",
        company: "Climate Research Institute",
        avatar: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
        followers: "9,234",
        isFollowing: false
      }
    },
    {
      id: "7",
      title: "AI in Education Report 2024",
      url: "https://edu.ai/report-2024",
      timestamp: "18:00",
      description: "Comprehensive study on the impact of AI-powered personalized learning platforms.",
      author: {
        name: "Emily White",
        role: "Education Specialist",
        company: "EdTech",
        avatar: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
        followers: "7,890",
        isFollowing: false
      }
    },
    {
      id: "8",
      title: "Gaming AI Revolution",
      url: "https://gamedeveloper.com/ai-npc-2024",
      timestamp: "21:00",
      description: "Overview of advances in AI-powered NPCs and their impact on gaming experiences.",
      author: {
        name: "Charlie Brown",
        role: "Game Developer",
        company: "GameDev Co.",
        avatar: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
        followers: "3,456",
        isFollowing: false
      }
    },
    {
      id: "9",
      title: "Protein Folding Breakthroughs",
      url: "https://science.org/protein-ai-2024",
      timestamp: "24:00",
      description: "Latest developments in AI-powered protein structure prediction and drug discovery.",
      author: {
        name: "Dr. Lisa Ray",
        role: "Biochemist",
        company: "BioTech",
        avatar: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
        followers: "4,321",
        isFollowing: false
      }
    },
    {
      id: "10",
      title: "AI Ethics Framework 2024",
      url: "https://ai-ethics.org/framework-2024",
      timestamp: "27:00",
      description: "Updated guidelines and frameworks for responsible AI deployment and governance.",
      author: {
        name: "Mark Green",
        role: "Ethics Researcher",
        company: "Ethics Institute",
        avatar: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
        followers: "2,345",
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
    // Implement follow functionality
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
              className={`glass-card p-4 transition-all duration-200 rounded-lg
                ${activeSource === source.id ? 'ring-2 ring-linkedin-blue' : 'hover:bg-white/5'}`}
            >
              <div className="flex items-start gap-3">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={source.author.avatar} alt={source.author.name} />
                  <AvatarFallback>{source.author.name[0]}</AvatarFallback>
                </Avatar>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="font-medium text-sm flex items-center gap-1">
                        {source.author.name}
                        <span className="text-linkedin-blue">•</span>
                        <span className="text-linkedin-text">1st</span>
                      </h3>
                      <p className="text-xs text-linkedin-text line-clamp-1">
                        {source.author.role} at {source.author.company}
                      </p>
                      <p className="text-xs text-linkedin-text mt-0.5">
                        {source.author.followers} followers
                      </p>
                    </div>
                    
                    <Button
                      variant="outline"
                      size="sm"
                      className="profile-button-outline whitespace-nowrap"
                      onClick={() => handleFollow(source.id)}
                    >
                      + Follow
                    </Button>
                  </div>
                  
                  <div className="mt-3 space-y-2">
                    <p className="text-sm">{source.description}</p>
                    
                    <div className="flex items-center justify-between text-xs text-linkedin-text mt-2">
                      <span>Referenced at: {source.timestamp}</span>
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-linkedin-blue hover:underline"
                      >
                        <ExternalLink className="h-3 w-3" />
                        View Source
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};
