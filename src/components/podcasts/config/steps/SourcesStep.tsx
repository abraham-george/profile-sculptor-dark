import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox"; 
import { SourceSection } from "./components/SourceSection";
import { PodcastConfig } from "../types";

const sources = {
  inNetwork: {
    trustedVoices: [
      { id: "1", name: "Andrew Ng", role: "AI Researcher & Educator", image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" },
      { id: "2", name: "Yann LeCun", role: "Chief AI Scientist at Meta", image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" },
      { id: "3", name: "Fei-Fei Li", role: "Professor at Stanford", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" },
      { id: "4", name: "Geoffrey Hinton", role: "Professor Emeritus at UofT", image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7" },
      { id: "5", name: "Demis Hassabis", role: "CEO at DeepMind", image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085" }
    ],
    companies: [
      { id: "6", name: "OpenAI", role: "AI Research & Development", image: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9" },
      { id: "7", name: "DeepMind", role: "AI Research & Applications", image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952" },
      { id: "8", name: "Anthropic", role: "AI Safety & Development", image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334" },
      { id: "9", name: "Scale AI", role: "AI Infrastructure & Data", image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" },
      { id: "10", name: "Cohere", role: "Enterprise AI Solutions", image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" }
    ],
    newsletters: [
      { id: "11", name: "The Algorithm", role: "MIT Technology Review", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" },
      { id: "12", name: "Import AI", role: "Weekly AI News & Analysis", image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7" },
      { id: "13", name: "The Batch", role: "DeepLearning.AI Newsletter", image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085" },
      { id: "14", name: "AI Weekly", role: "Curated AI News & Research", image: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9" },
      { id: "15", name: "The Gradient", role: "AI Research & Perspectives", image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952" }
    ]
  },
  recommended: {
    trustedVoices: [
      { id: "16", name: "Yoshua Bengio", role: "Pioneer in Deep Learning", image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334" },
      { id: "17", name: "Ian Goodfellow", role: "AI Researcher & Author", image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" },
      { id: "18", name: "Kate Crawford", role: "AI Ethics Researcher", image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" },
      { id: "19", name: "Kai-Fu Lee", role: "CEO at Sinovation Ventures", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" },
      { id: "20", name: "Stuart Russell", role: "Professor at UC Berkeley", image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7" }
    ],
    companies: [
      { id: "21", name: "Google AI", role: "AI Research & Products", image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085" },
      { id: "22", name: "Microsoft Research", role: "AI & Computing Research", image: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9" },
      { id: "23", name: "IBM Research", role: "Enterprise AI Solutions", image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952" },
      { id: "24", name: "Meta AI", role: "AI Research & Development", image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334" },
      { id: "25", name: "NVIDIA AI", role: "AI Hardware & Software", image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" }
    ],
    newsletters: [
      { id: "26", name: "AI Ethics Brief", role: "Ethics in AI", image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" },
      { id: "27", name: "Machine Learning Monthly", role: "Research Digest", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" },
      { id: "28", name: "Deep Learning Weekly", role: "Industry Updates", image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7" },
      { id: "29", name: "AI Business", role: "Enterprise AI News", image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085" },
      { id: "30", name: "Papers with Code", role: "Latest AI Research", image: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9" }
    ]
  }
};

interface SourcesStepProps {
  config: PodcastConfig;
  onUpdateConfig: (config: Partial<PodcastConfig>) => void;
}

export const SourcesStep = ({ config, onUpdateConfig }: SourcesStepProps) => {
  const [selectedSources, setSelectedSources] = useState<string[]>(config.sources || []);
  const [selectedContent, setSelectedContent] = useState<string[]>(config.additionalContent || []);

  const onSourceSelect = (sourceId: string) => {
    setSelectedSources((prev) => {
      const newSources = prev.includes(sourceId)
        ? prev.filter((id) => id !== sourceId)
        : [...prev, sourceId];
      onUpdateConfig({ sources: newSources });
      return newSources;
    });
  };

  const onContentSelect = (content: string) => {
    setSelectedContent((prev) => {
      const newContent = prev.includes(content)
        ? prev.filter((c) => c !== content)
        : [...prev, content];
      onUpdateConfig({ additionalContent: newContent });
      return newContent;
    });
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-4">Choose your sources</h2>
        <p className="text-gray-400">
          Select the voices and organizations you'd like to include in your podcast content.
        </p>
      </div>

      <div className="space-y-6">
        <h3 className="text-lg font-medium">From your network</h3>
        <SourceSection 
          title="Top Voices" 
          items={sources.inNetwork.trustedVoices}
          selectedSources={selectedSources}
          onSourceSelect={onSourceSelect}
        />
        <SourceSection 
          title="Companies" 
          items={sources.inNetwork.companies}
          selectedSources={selectedSources}
          onSourceSelect={onSourceSelect}
        />
        <SourceSection 
          title="Newsletters" 
          items={sources.inNetwork.newsletters}
          selectedSources={selectedSources}
          onSourceSelect={onSourceSelect}
        />
      </div>

      <div className="space-y-6">
        <h3 className="text-lg font-medium">Recommended</h3>
        <SourceSection 
          title="Top Voices" 
          items={sources.recommended.trustedVoices}
          selectedSources={selectedSources}
          onSourceSelect={onSourceSelect}
        />
        <SourceSection 
          title="Companies" 
          items={sources.recommended.companies}
          selectedSources={selectedSources}
          onSourceSelect={onSourceSelect}
        />
        <SourceSection 
          title="Newsletters" 
          items={sources.recommended.newsletters}
          selectedSources={selectedSources}
          onSourceSelect={onSourceSelect}
        />
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium">Additional Content</h3>
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="linkedin-learning"
              checked={selectedContent.includes('linkedin-learning')}
              onCheckedChange={() => onContentSelect('linkedin-learning')}
            />
            <label 
              htmlFor="linkedin-learning"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              LinkedIn Learning
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="events"
              checked={selectedContent.includes('events')}
              onCheckedChange={() => onContentSelect('events')}
            />
            <label 
              htmlFor="events"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Events
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="jobs"
              checked={selectedContent.includes('jobs')}
              onCheckedChange={() => onContentSelect('jobs')}
            />
            <label 
              htmlFor="jobs"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Jobs
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};