import { useEffect, useRef, useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Timestamp {
  time: string;
  text: string;
}

export const TranscriptPanel = () => {
  const [activeTimestamp, setActiveTimestamp] = useState<string | null>(null);
  const timestampRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const timestamps: Timestamp[] = [
    { time: "0:00", text: "Welcome to this episode where we'll discuss the latest trends in technology." },
    { time: "0:30", text: "First, let's talk about artificial intelligence and its impact on various industries." },
    { time: "1:15", text: "Machine learning algorithms are becoming increasingly sophisticated." },
    { time: "2:00", text: "Companies are leveraging AI to improve customer experience." },
    { time: "2:45", text: "The future of AI looks promising with new developments in natural language processing." },
    { time: "3:30", text: "Let's move on to discuss the challenges and ethical considerations." },
  ];

  useEffect(() => {
    if (activeTimestamp) {
      window.dispatchEvent(new CustomEvent('timestampHover', { detail: activeTimestamp }));
    }
  }, [activeTimestamp]);

  return (
    <div className="glass-card h-full">
      <div className="p-4 border-b border-white/10">
        <h2 className="text-lg font-semibold">Transcript</h2>
      </div>
      
      <ScrollArea className="h-[calc(100%-60px)]">
        <div className="p-4 space-y-4">
          {timestamps.map(({ time, text }) => (
            <div
              key={time}
              ref={el => timestampRefs.current[time] = el}
              className="flex gap-4 group hover:bg-white/5 p-2 rounded-lg transition-colors"
              onMouseEnter={() => setActiveTimestamp(time)}
              onMouseLeave={() => setActiveTimestamp(null)}
            >
              <span className="text-sm text-linkedin-text font-mono whitespace-nowrap">
                {time}
              </span>
              <p className="text-sm text-slate-200">{text}</p>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};