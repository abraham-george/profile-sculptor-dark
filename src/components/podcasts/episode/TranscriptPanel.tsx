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
      endTime: "3:00",
      speaker: "Host",
      text: "Welcome to our latest episode on AI developments. This month has seen groundbreaking advancements in artificial intelligence, particularly with the release of Claude 3 and its remarkable capabilities in reasoning and analysis. The model has demonstrated unprecedented accuracy in complex tasks, setting new benchmarks in the AI industry." 
    },
    { 
      startTime: "3:00",
      endTime: "6:00",
      speaker: "Host",
      text: "Google's Gemini has made significant strides in multimodal understanding, now capable of processing and analyzing images, text, and code simultaneously with improved accuracy. Their latest update introduces enhanced capabilities in mathematical reasoning and scientific analysis." 
    },
    { 
      startTime: "6:00",
      endTime: "9:00",
      speaker: "Expert",
      text: "In healthcare, AI models are now achieving remarkable accuracy in early disease detection. Recent studies have shown AI systems outperforming human experts in identifying early-stage cancers through medical imaging, with particular success in lung and breast cancer detection." 
    },
    { 
      startTime: "9:00",
      endTime: "12:00",
      speaker: "Host",
      text: "The field of autonomous vehicles has seen remarkable progress with Tesla's latest FSD beta showing improved navigation in complex urban environments. Meanwhile, Waymo has expanded its robotaxi service to more cities, demonstrating the growing reliability of autonomous driving systems." 
    },
    { 
      startTime: "12:00",
      endTime: "15:00",
      speaker: "Expert",
      text: "In the realm of language models, researchers have made breakthrough discoveries in reducing hallucinations and improving factual accuracy. New training methodologies and architectural improvements have led to more reliable and trustworthy AI responses." 
    },
    { 
      startTime: "15:00",
      endTime: "18:00",
      speaker: "Host",
      text: "The impact of AI on climate research has been particularly noteworthy, with new models accurately predicting weather patterns and helping optimize renewable energy systems. These advancements are crucial for addressing climate change challenges." 
    },
    { 
      startTime: "18:00",
      endTime: "21:00",
      speaker: "Expert",
      text: "In education, AI-powered personalized learning platforms have shown remarkable results in improving student engagement and learning outcomes. Adaptive learning systems are now better at identifying and addressing individual student needs." 
    },
    { 
      startTime: "21:00",
      endTime: "24:00",
      speaker: "Host",
      text: "The gaming industry has seen revolutionary changes with AI-powered NPCs showing more realistic behaviors and interactions. This technology is creating more immersive and dynamic gaming experiences." 
    },
    { 
      startTime: "24:00",
      endTime: "27:00",
      speaker: "Expert",
      text: "Recent developments in AI-powered protein folding have led to breakthroughs in drug discovery. Scientists are now able to predict protein structures with unprecedented accuracy, accelerating the development of new medications." 
    },
    { 
      startTime: "27:00",
      endTime: "30:00",
      speaker: "Host",
      text: "Looking ahead, the ethical implications of these AI advancements remain a crucial topic of discussion. The development of robust frameworks for responsible AI deployment continues to be a priority in the industry." 
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