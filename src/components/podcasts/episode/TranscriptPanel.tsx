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
      // Extract the start time from the time range (e.g., "1:00 - 1:30" -> "1:00")
      const startTime = timeRange.split(' - ')[0];
      console.log('Hovering timestamp:', startTime); // Debug log
      
      // Dispatch custom event for source synchronization
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
      timeRange: "1:00 - 1:30",
      sections: [
        {
          text: "Satya has been quite active, highlighting Microsoft's intensified focus on AI."
        },
        {
          text: "One of his notable posts discussed the formation of a new AI engineering group called CoreAI - Platform and Tools."
        },
        {
          text: "This division, led by Jay Parikh, a former Meta executive, aims to integrate Microsoft's developer division with its AI platform teams."
        },
        {
          text: "Nadella emphasized that this reorganization is about 'entering the next innings of this AI platform shift' and believes it will 'reshape all application categories.'"
        },
        {
          text: "He also highlighted the introduction of pay-as-you-go agents for Microsoft's revamped Copilot Chat for businesses."
        },
        {
          text: "Additionally, AI Office features have been bundled into Microsoft 365 for consumers, accompanied by a subscription price increase."
        },
        {
          text: "These initiatives underscore Microsoft's commitment to making AI accessible and valuable to both businesses and individual users."
        }
      ]
    },
    {
      speaker: "Ryan Roslansky",
      timeRange: "2:00 - 2:30",
      sections: [
        {
          text: "Ryan has been focusing on leveraging AI to enhance LinkedIn's platform."
        },
        {
          text: "In a recent post, he discussed how LinkedIn is integrating AI to improve job matching algorithms."
        },
        {
          text: "This helps users find more relevant opportunities and aids recruiters in identifying suitable candidates more efficiently."
        },
        {
          text: "By incorporating AI, LinkedIn aims to create a more personalized and efficient experience."
        },
        {
          text: "Users can expect more accurate job recommendations, while recruiters can streamline their hiring processes, ultimately leading to better connections and opportunities on the platform."
        }
      ]
    },
    {
      speaker: "Harrison Chase",
      timeRange: "3:00 - 3:30",
      sections: [
        {
          text: "Harrison has been actively sharing updates about LangChain's latest projects."
        },
        {
          text: "One notable initiative is their work on enhancing natural language processing capabilities."
        },
        {
          text: "This enables developers to build more sophisticated AI applications."
        },
        {
          text: "For developers, these improvements mean they can create more intuitive and responsive AI applications with less effort."
        },
        {
          text: "End-users will experience more natural and effective interactions with AI-powered tools, leading to increased adoption and satisfaction."
        }
      ]
    },
    {
      speaker: "Jim Fang",
      timeRange: "4:00 - 4:30",
      sections: [
        {
          text: "Jim has been sharing insights into the ethical implications of AI development."
        },
        {
          text: "He emphasizes the importance of responsible AI practices, advocating for transparency and fairness in AI algorithms."
        },
        {
          text: "This is to prevent biases and ensure equitable outcomes."
        },
        {
          text: "Many organizations are establishing ethical guidelines and review boards to oversee AI projects."
        },
        {
          text: "By prioritizing ethical considerations, they aim to build trust with users and avoid potential pitfalls associated with biased or unfair AI systems."
        }
      ]
    },
    {
      speaker: "Jensen Huang",
      timeRange: "5:00 - 5:30",
      sections: [
        {
          text: "Jensen has been highlighting NVIDIA's advancements in AI hardware."
        },
        {
          text: "In his recent posts, he discussed the launch of their latest GPUs designed specifically for AI workloads."
        },
        {
          text: "These GPUs offer unprecedented performance and efficiency for training and deploying AI models."
        },
        {
          text: "With more powerful and efficient hardware, researchers and developers can accelerate their AI projects."
        },
        {
          text: "This leads to faster innovation cycles and the development of more advanced AI applications across various sectors."
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