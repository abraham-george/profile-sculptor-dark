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

export const SharedTranscriptPanel = () => {
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

  const handleSectionHover = (timeRange: string | null) => {
    setActiveSection(timeRange);
    if (timeRange) {
      const startTime = timeRange.split(' - ')[0];
      console.log('Hovering timestamp:', startTime);
      
      const event = new CustomEvent('timestampHover', {
        detail: { timestamp: startTime },
        bubbles: true
      });
      window.dispatchEvent(event);
    }
  };

  const transcriptGroups = [
    {
      speaker: "Archith Mohan",
      timeRange: "1:00 - 1:30",
      sections: [
        {
          text: "The consulting industry is experiencing a significant transformation with the rise of AI and digital solutions."
        },
        {
          text: "According to recent McKinsey research, over 75% of consulting engagements now include some form of digital or AI component."
        },
        {
          text: "This shift requires consultants to develop new capabilities while maintaining core strategic advisory skills."
        }
      ]
    },
    {
      speaker: "Sarah Chen",
      timeRange: "2:00 - 2:30",
      sections: [
        {
          text: "ESG and sustainability consulting has seen a 42% growth in demand over the past year."
        },
        {
          text: "Leading firms are integrating sustainability metrics into traditional P&L and performance frameworks."
        },
        {
          text: "We're seeing a convergence of strategy, technology, and sustainability in modern consulting engagements."
        }
      ]
    },
    {
      speaker: "Michael Rodriguez",
      timeRange: "3:00 - 3:30",
      sections: [
        {
          text: "The future of consulting lies in data-driven decision making and predictive analytics."
        },
        {
          text: "Our research shows that firms leveraging advanced analytics see 30% higher client satisfaction rates."
        },
        {
          text: "The key is balancing technological innovation with human expertise and relationship management."
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
          {transcriptGroups.map((group, index) => (
            <div 
              key={group.timeRange}
              ref={el => sectionRefs.current[group.timeRange] = el}
              onMouseEnter={() => handleSectionHover(group.timeRange)}
              onMouseLeave={() => handleSectionHover(null)}
              className={`space-y-4 transition-all duration-200
                ${activeSection === group.timeRange ? 'bg-white/5 rounded-lg p-4 border border-linkedin-blue' : 'hover:bg-white/5 hover:rounded-lg hover:p-4'}`}
            >
              <div className="text-sm font-medium text-linkedin-blue">
                Chapter {index + 1}
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