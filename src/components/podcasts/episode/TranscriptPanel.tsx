import { useEffect, useRef, useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";

interface TranscriptSection {
  startTime: string;
  endTime: string;
  text: string;
  speaker: string;
}

export const TranscriptPanel = () => {
  const [activeTimestamp, setActiveTimestamp] = useState<string | null>(null);
  const timestampRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const transcriptSections: TranscriptSection[] = [
    { 
      startTime: "0:00",
      endTime: "0:30",
      speaker: "John Smith",
      text: "Welcome to this episode where we'll discuss the latest trends in technology." 
    },
    { 
      startTime: "0:30",
      endTime: "1:15",
      speaker: "John Smith",
      text: "First, let's talk about artificial intelligence and its impact on various industries." 
    },
    { 
      startTime: "1:15",
      endTime: "2:00",
      speaker: "Sarah Johnson",
      text: "Machine learning algorithms are becoming increasingly sophisticated." 
    },
    { 
      startTime: "2:00",
      endTime: "2:45",
      speaker: "John Smith",
      text: "Companies are leveraging AI to improve customer experience." 
    },
    { 
      startTime: "2:45",
      endTime: "3:30",
      speaker: "Sarah Johnson",
      text: "The future of AI looks promising with new developments in natural language processing." 
    },
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
      
      <ScrollArea className="h-[calc(100%-60px)]">
        <div className="p-4 space-y-4">
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
                  {section.startTime} - {section.endTime}
                </span>
              </div>
              <p className="text-sm text-slate-200">{section.text}</p>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};