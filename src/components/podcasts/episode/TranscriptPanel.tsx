import { useEffect, useRef, useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";

interface TranscriptSection {
  startTime: string;
  text: string;
  speaker: string;
}

interface TranscriptGroup {
  speaker: string;
  sections: {
    startTime: string;
    text: string;
  }[];
}

export const TranscriptPanel = () => {
  const [activeTimestamp, setActiveTimestamp] = useState<string | null>(null);
  const timestampRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  // Helper function to calculate reading time
  const calculateReadingTime = (text: string, startMinute: number): string => {
    const words = text.split(' ').length;
    const minutes = words / 150; // 150 words per minute
    const totalMinutes = startMinute + minutes;
    return `${Math.floor(totalMinutes)}:${String(Math.floor((totalMinutes % 1) * 60)).padStart(2, '0')}`;
  };

  // Group transcripts by speaker and calculate timestamps
  const transcriptGroups: TranscriptGroup[] = [
    {
      speaker: "Satya Nadella",
      sections: [
        {
          text: "CEO Satya Nadella recently announced a $3 billion investment over the next two years to bolster AI and cloud services in India.",
          startTime: "0:00"
        },
        {
          text: "This initiative also aims to train 10 million individuals in AI skills by 2030.",
          startTime: "0:15"
        },
        {
          text: "Nadella emphasized the transformative potential of AI, aiming for an AI-first app stack to automate various tasks.",
          startTime: "0:30"
        },
        {
          text: "Microsoft is also integrating AI features into Microsoft 365, which will increase subscription prices.",
          startTime: "0:45"
        }
      ]
    },
    {
      speaker: "Ryan Roslansky",
      sections: [
        {
          text: "LinkedIn's CEO, Ryan Roslansky, shared insights on how AI is reshaping the hiring landscape.",
          startTime: "1:00"
        },
        {
          text: "He believes that AI can significantly reduce bias in hiring processes, leading to more equitable opportunities.",
          startTime: "1:15"
        }
      ]
    },
    {
      speaker: "Tomer Cohen",
      sections: [
        {
          text: "Tomer Cohen, LinkedIn's Chief Product Officer, discussed the platform's growth to over a billion users, attributing much of this success to AI-driven features that enhance user experience.",
          startTime: "1:30"
        }
      ]
    },
    {
      speaker: "Jim Fan",
      sections: [
        {
          text: "NVIDIA's senior research manager, Jim Fan, highlighted the potential of AI-powered robots in disaster recovery, specifically in combating wildfires.",
          startTime: "1:45"
        },
        {
          text: "While the technology is still developing, the prospects are encouraging.",
          startTime: "2:00"
        }
      ]
    },
    {
      speaker: "Jensen Huang",
      sections: [
        {
          text: "NVIDIA's CEO, Jensen Huang, also mentioned that AI agents could become a multitrillion-dollar industry, indicating the vast economic potential of AI advancements.",
          startTime: "2:15"
        }
      ]
    },
    {
      speaker: "LangChain",
      sections: [
        {
          text: "LangChain. They've been instrumental in providing AI developers with tools to connect language models with external data sources, simplifying the development of AI applications.",
          startTime: "2:30"
        }
      ]
    },
    {
      speaker: "Andrew Ng",
      sections: [
        {
          text: "Andrew Ng continues to be a leading voice in AI education, offering resources to help individuals build careers in AI through platforms like DeepLearning.AI.",
          startTime: "2:45"
        }
      ]
    },
    {
      speaker: "Allie K. Miller",
      sections: [
        {
          text: "Allie K. Miller remains a prominent figure in the AI community, advising startups and contributing to the growth of AI technologies.",
          startTime: "3:00"
        }
      ]
    }
  ];

  useEffect(() => {
    if (activeTimestamp) {
      const event = new CustomEvent('timestampHover', { 
        detail: { timestamp: activeTimestamp },
        bubbles: true 
      });
      window.dispatchEvent(event);
    }
  }, [activeTimestamp]);

  return (
    <div className="glass-card h-full">
      <div className="p-4 border-b border-white/10">
        <h2 className="text-lg font-semibold">Transcript</h2>
      </div>
      
      <ScrollArea className="h-[calc(100%-60px)] px-4">
        <div className="py-4 space-y-6">
          {transcriptGroups.map((group) => (
            <div key={group.speaker} className="space-y-4">
              <div className="text-sm font-medium text-linkedin-blue">
                {group.speaker}
              </div>
              {group.sections.map((section) => (
                <div
                  key={section.startTime}
                  ref={el => timestampRefs.current[section.startTime] = el}
                  className={`group hover:bg-white/5 p-3 rounded-lg transition-all duration-200 border border-transparent
                    ${activeTimestamp === section.startTime ? 'border-linkedin-blue bg-white/5' : ''}`}
                  onMouseEnter={() => setActiveTimestamp(section.startTime)}
                  onMouseLeave={() => setActiveTimestamp(null)}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-linkedin-text font-mono">
                      {section.startTime}
                    </span>
                  </div>
                  <p className="text-sm text-slate-200 leading-relaxed">{section.text}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};