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
          text: "Today, we're diving deep into the world of management consulting and leadership excellence."
        },
        {
          text: "We'll explore how successful leaders navigate complex business landscapes while maintaining strong P&L performance."
        },
        {
          text: "The key to success in consulting lies in understanding both the strategic and operational aspects of business transformation."
        }
      ]
    },
    {
      speaker: "Sarah Chen",
      timeRange: "2:00 - 2:30",
      sections: [
        {
          text: "From my experience leading global consulting teams, effective leadership starts with clear communication and strategic thinking."
        },
        {
          text: "We've seen remarkable results when leaders focus on both financial metrics and team development."
        },
        {
          text: "The most successful transformations happen when leaders can balance short-term P&L goals with long-term strategic vision."
        }
      ]
    },
    {
      speaker: "Michael Rodriguez",
      timeRange: "3:00 - 3:30",
      sections: [
        {
          text: "In today's rapidly evolving business environment, consultants need to be more adaptable than ever."
        },
        {
          text: "Digital transformation has become a key driver of business success, and understanding its impact on P&L is crucial."
        },
        {
          text: "We're seeing a shift towards more data-driven decision making in management consulting."
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