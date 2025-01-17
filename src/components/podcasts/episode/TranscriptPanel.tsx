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
    text: string;
  }[];
  timeRange: string;
}

export const TranscriptPanel = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  // Helper function to calculate reading time
  const calculateReadingTime = (text: string, startMinute: number): number => {
    const words = text.split(' ').length;
    return startMinute + (words / 150); // 150 words per minute
  };

  // Format time to MM:SS
  const formatTime = (minutes: number): string => {
    const mins = Math.floor(minutes);
    const secs = Math.floor((minutes % 1) * 60);
    return `${mins}:${String(secs).padStart(2, '0')}`;
  };

  // Calculate time range for a group of sections
  const calculateTimeRange = (sections: { text: string }[], startTime: number): string => {
    let currentTime = startTime;
    sections.forEach(section => {
      currentTime = calculateReadingTime(section.text, currentTime);
    });
    return `${formatTime(startTime)} - ${formatTime(currentTime)}`;
  };

  // Group transcripts by speaker and calculate timestamps
  const transcriptGroups: TranscriptGroup[] = [
    {
      speaker: "Satya Nadella",
      timeRange: "0:00 - 1:00",
      sections: [
        {
          text: "CEO Satya Nadella recently announced a $3 billion investment over the next two years to bolster AI and cloud services in India."
        },
        {
          text: "This initiative also aims to train 10 million individuals in AI skills by 2030."
        },
        {
          text: "Nadella emphasized the transformative potential of AI, aiming for an AI-first app stack to automate various tasks."
        },
        {
          text: "Microsoft is also integrating AI features into Microsoft 365, which will increase subscription prices."
        }
      ]
    },
    {
      speaker: "Ryan Roslansky",
      timeRange: "1:00 - 1:30",
      sections: [
        {
          text: "LinkedIn's CEO, Ryan Roslansky, shared insights on how AI is reshaping the hiring landscape."
        },
        {
          text: "He believes that AI can significantly reduce bias in hiring processes, leading to more equitable opportunities."
        }
      ]
    },
    {
      speaker: "Tomer Cohen",
      timeRange: "1:30 - 2:00",
      sections: [
        {
          text: "Tomer Cohen, LinkedIn's Chief Product Officer, discussed the platform's growth to over a billion users, attributing much of this success to AI-driven features that enhance user experience."
        }
      ]
    },
    {
      speaker: "Jim Fan",
      timeRange: "2:00 - 2:30",
      sections: [
        {
          text: "NVIDIA's senior research manager, Jim Fan, highlighted the potential of AI-powered robots in disaster recovery, specifically in combating wildfires."
        },
        {
          text: "While the technology is still developing, the prospects are encouraging."
        }
      ]
    },
    {
      speaker: "Jensen Huang",
      timeRange: "2:30 - 3:00",
      sections: [
        {
          text: "NVIDIA's CEO, Jensen Huang, also mentioned that AI agents could become a multitrillion-dollar industry, indicating the vast economic potential of AI advancements."
        }
      ]
    },
    {
      speaker: "LangChain",
      timeRange: "3:00 - 3:30",
      sections: [
        {
          text: "LangChain. They've been instrumental in providing AI developers with tools to connect language models with external data sources, simplifying the development of AI applications."
        }
      ]
    },
    {
      speaker: "Andrew Ng",
      timeRange: "3:30 - 4:00",
      sections: [
        {
          text: "Andrew Ng continues to be a leading voice in AI education, offering resources to help individuals build careers in AI through platforms like DeepLearning.AI."
        }
      ]
    },
    {
      speaker: "Allie K. Miller",
      timeRange: "4:00 - 4:30",
      sections: [
        {
          text: "Allie K. Miller remains a prominent figure in the AI community, advising startups and contributing to the growth of AI technologies."
        }
      ]
    }
  ];

  useEffect(() => {
    if (activeSection) {
      const event = new CustomEvent('timestampHover', { 
        detail: { timestamp: activeSection },
        bubbles: true 
      });
      window.dispatchEvent(event);
    }
  }, [activeSection]);

  return (
    <div className="glass-card h-full">
      <div className="p-4 border-b border-white/10">
        <h2 className="text-lg font-semibold">Transcript</h2>
      </div>
      
      <ScrollArea className="h-[calc(100%-60px)] px-4">
        <div className="py-4 space-y-6">
          {transcriptGroups.map((group) => (
            <div 
              key={group.timeRange} 
              className="space-y-4"
              ref={el => sectionRefs.current[group.timeRange] = el}
              onMouseEnter={() => setActiveSection(group.timeRange)}
              onMouseLeave={() => setActiveSection(null)}
            >
              <div className="text-sm font-medium text-linkedin-blue flex justify-between items-center">
                <span className="font-mono">{group.timeRange}</span>
                <span>{group.speaker}</span>
              </div>
              <div 
                className={`p-4 rounded-lg transition-all duration-200 border border-transparent space-y-4
                  ${activeSection === group.timeRange ? 'bg-white/5 border-linkedin-blue' : 'hover:bg-white/5'}`}
              >
                {group.sections.map((section, index) => (
                  <p key={index} className="text-sm text-slate-200 leading-relaxed">
                    {section.text}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};