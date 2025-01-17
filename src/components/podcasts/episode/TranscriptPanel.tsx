import { useEffect, useRef, useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";

interface TranscriptSection {
  startTime: string;
  text: string;
  speaker: string;
}

export const TranscriptPanel = () => {
  const [activeTimestamp, setActiveTimestamp] = useState<string | null>(null);
  const timestampRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const transcriptSections: TranscriptSection[] = [
    { 
      startTime: "0:00",
      speaker: "Satya Nadella",
      text: "CEO Satya Nadella recently announced a $3 billion investment over the next two years to bolster AI and cloud services in India." 
    },
    { 
      startTime: "3:00",
      speaker: "Satya Nadella",
      text: "This initiative also aims to train 10 million individuals in AI skills by 2030." 
    },
    { 
      startTime: "6:00",
      speaker: "Satya Nadella",
      text: "Nadella emphasized the transformative potential of AI, aiming for an AI-first app stack to automate various tasks." 
    },
    { 
      startTime: "9:00",
      speaker: "Satya Nadella",
      text: "Microsoft is also integrating AI features into Microsoft 365, which will increase subscription prices." 
    },
    { 
      startTime: "12:00",
      speaker: "Ryan Roslansky",
      text: "LinkedIn's CEO, Ryan Roslansky, shared insights on how AI is reshaping the hiring landscape." 
    },
    { 
      startTime: "15:00",
      speaker: "Ryan Roslansky",
      text: "He believes that AI can significantly reduce bias in hiring processes, leading to more equitable opportunities." 
    },
    { 
      startTime: "18:00",
      speaker: "Tomer Cohen",
      text: "Tomer Cohen, LinkedIn's Chief Product Officer, discussed the platform's growth to over a billion users, attributing much of this success to AI-driven features that enhance user experience." 
    },
    { 
      startTime: "21:00",
      speaker: "Jim Fan",
      text: "NVIDIA's senior research manager, Jim Fan, highlighted the potential of AI-powered robots in disaster recovery, specifically in combating wildfires." 
    },
    { 
      startTime: "24:00",
      speaker: "Jim Fan",
      text: "While the technology is still developing, the prospects are encouraging." 
    },
    { 
      startTime: "27:00",
      speaker: "Jensen Huang",
      text: "NVIDIA's CEO, Jensen Huang, also mentioned that AI agents could become a multitrillion-dollar industry, indicating the vast economic potential of AI advancements." 
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
        <div className="py-4 space-y-4">
          {transcriptSections.map((section) => (
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
                <span className="text-xs text-linkedin-blue">
                  {section.speaker}
                </span>
              </div>
              <p className="text-sm text-slate-200 leading-relaxed">{section.text}</p>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};