import { useState } from "react";
import { Button } from "@/components/ui/button";
import { SourceSection } from "./components/SourceSection";
import { PodcastConfig } from "../types";

const sources = {
  inNetwork: {
    trustedVoices: [
      { id: "1", name: "Andrew Ng", role: "AI Researcher & Educator", image: "/placeholder.svg" },
      { id: "2", name: "Yann LeCun", role: "Chief AI Scientist at Meta", image: "/placeholder.svg" },
      { id: "3", name: "Fei-Fei Li", role: "Professor at Stanford", image: "/placeholder.svg" },
      { id: "4", name: "Geoffrey Hinton", role: "Professor Emeritus at UofT", image: "/placeholder.svg" },
      { id: "5", name: "Demis Hassabis", role: "CEO at DeepMind", image: "/placeholder.svg" }
    ],
    companies: [
      { id: "6", name: "OpenAI", role: "AI Research & Development", image: "/placeholder.svg" },
      { id: "7", name: "DeepMind", role: "AI Research & Applications", image: "/placeholder.svg" },
      { id: "8", name: "Anthropic", role: "AI Safety & Development", image: "/placeholder.svg" },
      { id: "9", name: "Scale AI", role: "AI Infrastructure & Data", image: "/placeholder.svg" },
      { id: "10", name: "Cohere", role: "Enterprise AI Solutions", image: "/placeholder.svg" }
    ],
    newsletters: [
      { id: "11", name: "The Algorithm", role: "MIT Technology Review", image: "/placeholder.svg" },
      { id: "12", name: "Import AI", role: "Weekly AI News & Analysis", image: "/placeholder.svg" },
      { id: "13", name: "The Batch", role: "DeepLearning.AI Newsletter", image: "/placeholder.svg" },
      { id: "14", name: "AI Weekly", role: "Curated AI News & Research", image: "/placeholder.svg" },
      { id: "15", name: "The Gradient", role: "AI Research & Perspectives", image: "/placeholder.svg" }
    ]
  },
  recommended: {
    trustedVoices: [
      { id: "16", name: "Yoshua Bengio", role: "Pioneer in Deep Learning", image: "/placeholder.svg" },
      { id: "17", name: "Ian Goodfellow", role: "AI Researcher & Author", image: "/placeholder.svg" },
      { id: "18", name: "Kate Crawford", role: "AI Ethics Researcher", image: "/placeholder.svg" },
      { id: "19", name: "Kai-Fu Lee", role: "CEO at Sinovation Ventures", image: "/placeholder.svg" },
      { id: "20", name: "Stuart Russell", role: "Professor at UC Berkeley", image: "/placeholder.svg" }
    ],
    companies: [
      { id: "21", name: "Google AI", role: "AI Research & Products", image: "/placeholder.svg" },
      { id: "22", name: "Microsoft Research", role: "AI & Computing Research", image: "/placeholder.svg" },
      { id: "23", name: "IBM Research", role: "Enterprise AI Solutions", image: "/placeholder.svg" },
      { id: "24", name: "Meta AI", role: "AI Research & Development", image: "/placeholder.svg" },
      { id: "25", name: "NVIDIA AI", role: "AI Hardware & Software", image: "/placeholder.svg" }
    ],
    newsletters: [
      { id: "26", name: "AI Ethics Brief", role: "Ethics in AI", image: "/placeholder.svg" },
      { id: "27", name: "Machine Learning Monthly", role: "Research Digest", image: "/placeholder.svg" },
      { id: "28", name: "Deep Learning Weekly", role: "Industry Updates", image: "/placeholder.svg" },
      { id: "29", name: "AI Business", role: "Enterprise AI News", image: "/placeholder.svg" },
      { id: "30", name: "Papers with Code", role: "Latest AI Research", image: "/placeholder.svg" }
    ]
  }
};

interface SourcesStepProps {
  config: PodcastConfig;
  onUpdateConfig: (config: Partial<PodcastConfig>) => void;
  onNext: () => void;
  onBack: () => void;
}

export const SourcesStep = ({ config, onUpdateConfig, onNext, onBack }: SourcesStepProps) => {
  const [selectedSources, setSelectedSources] = useState<string[]>(config.sources || []);

  const onSourceSelect = (sourceId: string) => {
    setSelectedSources((prev) => {
      const newSources = prev.includes(sourceId)
        ? prev.filter((id) => id !== sourceId)
        : [...prev, sourceId];
      onUpdateConfig({ sources: newSources });
      return newSources;
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

      <div className="flex justify-between pt-6">
        <Button onClick={onBack} variant="outline">
          Back
        </Button>
        <Button onClick={onNext}>
          Next
        </Button>
      </div>
    </div>
  );
};