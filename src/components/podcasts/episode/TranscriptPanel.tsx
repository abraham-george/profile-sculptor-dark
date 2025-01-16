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
      endTime: "5:00",
      speaker: "Host",
      text: "Welcome to our deep dive into artificial intelligence and its impact on modern business. Today, we'll explore how AI is revolutionizing various industries, from healthcare to finance, and discuss the practical implications for businesses of all sizes. We'll be joined by several experts who will share their insights on the current state of AI technology and its future prospects." 
    },
    { 
      startTime: "5:00",
      endTime: "10:00",
      speaker: "Host",
      text: "Let's begin by examining the fundamental changes AI has brought to data analysis and decision-making processes. Companies are now able to process vast amounts of information in real-time, leading to more informed and faster business decisions. This transformation is particularly evident in the financial sector, where AI-powered algorithms are handling everything from risk assessment to fraud detection." 
    },
    { 
      startTime: "10:00",
      endTime: "15:00",
      speaker: "Expert",
      text: "The healthcare industry has seen some of the most promising applications of AI. Machine learning models are now capable of detecting diseases from medical imaging with accuracy that rivals, and in some cases exceeds, human experts. Additionally, AI is being used to accelerate drug discovery and development, potentially reducing the time and cost of bringing new treatments to market." 
    },
    { 
      startTime: "15:00",
      endTime: "20:00",
      speaker: "Host",
      text: "Another fascinating area is the integration of AI in customer service and experience. Natural Language Processing has evolved to the point where AI chatbots can handle complex customer interactions, understanding context and nuance in ways that weren't possible just a few years ago. This has led to significant improvements in customer satisfaction while reducing operational costs." 
    },
    { 
      startTime: "20:00",
      endTime: "25:00",
      speaker: "Expert",
      text: "The manufacturing sector is experiencing a transformation through AI-powered predictive maintenance and quality control systems. These systems can predict equipment failures before they occur, optimize production schedules, and identify defects in real-time. This has resulted in increased efficiency and reduced downtime across manufacturing operations." 
    },
    { 
      startTime: "25:00",
      endTime: "30:00",
      speaker: "Host",
      text: "As we conclude our discussion, it's important to address the ethical considerations and challenges that come with AI adoption. Issues like data privacy, algorithmic bias, and the impact on workforce dynamics need careful consideration. Organizations must develop robust frameworks to ensure responsible AI deployment while maximizing its benefits." 
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
              <p className="text-sm text-slate-200 leading-relaxed">{section.text}</p>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};