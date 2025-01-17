import { useState } from "react";
import { Button } from "@/components/ui/button";
import { SourceSection } from "./components/SourceSection";
import { PodcastConfig } from "../types";

const sources = {
  inNetwork: {
    trustedVoices: [
      { id: "1", name: "Andrew Ng", role: "AI Researcher & Educator" },
      { id: "2", name: "Yann LeCun", role: "Chief AI Scientist at Meta" },
      { id: "3", name: "Fei-Fei Li", role: "Professor at Stanford" },
      { id: "4", name: "Geoffrey Hinton", role: "Professor Emeritus at UofT" },
      { id: "5", name: "Demis Hassabis", role: "CEO at DeepMind" }
    ],
    companies: [
      { id: "6", name: "OpenAI", role: "AI Research & Development" },
      { id: "7", name: "DeepMind", role: "AI Research & Applications" },
      { id: "8", name: "Anthropic", role: "AI Safety & Development" },
      { id: "9", name: "Scale AI", role: "AI Infrastructure & Data" },
      { id: "10", name: "Cohere", role: "Enterprise AI Solutions" }
    ],
    newsletters: [
      { id: "11", name: "The Algorithm", role: "MIT Technology Review" },
      { id: "12", name: "Import AI", role: "Weekly AI News & Analysis" },
      { id: "13", name: "The Batch", role: "DeepLearning.AI Newsletter" },
      { id: "14", name: "AI Weekly", role: "Curated AI News & Research" },
      { id: "15", name: "The Gradient", role: "AI Research & Perspectives" }
    ]
  },
  recommended: {
    trustedVoices: [
      { id: "16", name: "Yoshua Bengio", role: "Pioneer in Deep Learning" },
      { id: "17", name: "Ian Goodfellow", role: "AI Researcher & Author" },
      { id: "18", name: "Kate Crawford", role: "AI Ethics Researcher" },
      { id: "19", name: "Kai-Fu Lee", role: "CEO at Sinovation Ventures" },
      { id: "20", name: "Stuart Russell", role: "Professor at UC Berkeley" }
    ],
    companies: [
      { id: "21", name: "Google AI", role: "AI Research & Products" },
      { id: "22", name: "Microsoft Research", role: "AI & Computing Research" },
      { id: "23", name: "IBM Research", role: "Enterprise AI Solutions" },
      { id: "24", name: "Meta AI", role: "AI Research & Development" },
      { id: "25", name: "NVIDIA AI", role: "AI Hardware & Software" }
    ],
    newsletters: [
      { id: "26", name: "AI Ethics Brief", role: "Ethics in AI" },
      { id: "27", name: "Machine Learning Monthly", role: "Research Digest" },
      { id: "28", name: "Deep Learning Weekly", role: "Industry Updates" },
      { id: "29", name: "AI Business", role: "Enterprise AI News" },
      { id: "30", name: "Papers with Code", role: "Latest AI Research" }
    ]
  }
};

interface SourcesStepProps {
  podcastConfig: PodcastConfig;
  onUpdateConfig: (config: Partial<PodcastConfig>) => void;
  onNext: () => void;
  onBack: () => void;
}

export const SourcesStep = ({ podcastConfig, onUpdateConfig, onNext, onBack }: SourcesStepProps) => {
  const [selectedSources, setSelectedSources] = useState<string[]>(podcastConfig.sources || []);

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