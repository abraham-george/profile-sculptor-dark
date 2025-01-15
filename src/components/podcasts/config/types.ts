export interface PodcastConfig {
  industry?: string;
  skills: string[];
  sources: string[];
  additionalContent: string[];
  style: {
    tone: string;
    length: number;
    frequency: string;
    music: string;
  };
  coverImage?: {
    type: 'existing' | 'generated';
    url: string;
  };
}

export interface ConfigStepProps {
  config: PodcastConfig;
  onConfigUpdate: (updates: Partial<PodcastConfig>) => void;
  readOnly?: boolean;
}