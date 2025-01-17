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

  // Calculate reading time (words per minute)
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

  const handleSectionHover = (timeRange: string | null) => {
    setActiveSection(timeRange);
    if (timeRange) {
      // Dispatch custom event for source synchronization
      const startTime = timeRange.split(' - ')[0];
      const event = new CustomEvent('timestampHover', {
        detail: { timestamp: startTime },
        bubbles: true
      });
      window.dispatchEvent(event);
    }
  };

  // Group transcripts by speaker and calculate timestamps
  const transcriptGroups = [
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
      timeRange: "12:00 - 12:30",
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
      timeRange: "18:00 - 18:30",
      sections: [
        {
          text: "Tomer Cohen, LinkedIn's Chief Product Officer, discussed the platform's growth to over a billion users, attributing much of this success to AI-driven features that enhance user experience."
        }
      ]
    },
    {
      speaker: "Jim Fan",
      timeRange: "21:00 - 21:30",
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
      timeRange: "27:00 - 27:30",
      sections: [
        {
          text: "NVIDIA's CEO, Jensen Huang, also mentioned that AI agents could become a multitrillion-dollar industry, indicating the vast economic potential of AI advancements."
        }
      ]
    }
  ];

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
              ref={el => sectionRefs.current[group.timeRange] = el}
              onMouseEnter={() => handleSectionHover(group.timeRange)}
              onMouseLeave={() => handleSectionHover(null)}
              className={`space-y-4 transition-all duration-200
                ${activeSection === group.timeRange ? 'bg-white/5 rounded-lg p-4 border border-linkedin-blue' : 'hover:bg-white/5 hover:rounded-lg hover:p-4'}`}
            >
              <div className="text-sm font-medium text-linkedin-blue">
                {group.timeRange}
              </div>
              <div className="space-y-4">
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