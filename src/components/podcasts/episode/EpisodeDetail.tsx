import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { TranscriptPanel } from './TranscriptPanel';
import { SourcesPanel } from './SourcesPanel';
import { NextStepsSection } from './next-steps/NextStepsSection';

const managementConsultingTranscript = {
  "mapping": [
    {
      "person": "McKinsey Senior Partner",
      "transcript": [
        "Digital transformation is reshaping how we approach management consulting.",
        "Modern P&L strategies need to account for rapid technological changes.",
        "Leaders must balance innovation with operational excellence.",
        "We're seeing a shift towards more agile organizational structures.",
        "Data-driven decision making is becoming increasingly crucial."
      ]
    },
    {
      "person": "BCG Managing Director",
      "transcript": [
        "The future of consulting lies in integrating AI with traditional methodologies.",
        "Change management is more critical than ever in digital transformations.",
        "Leadership development needs to evolve with technological advancement.",
        "Strategic planning must incorporate both short-term wins and long-term sustainability.",
        "Client relationships are being transformed by digital tools and platforms."
      ]
    },
    {
      "person": "Bain & Company Partner",
      "transcript": [
        "ESG considerations are becoming central to P&L strategies.",
        "Modern leadership requires a deep understanding of digital capabilities.",
        "We're helping clients navigate complex regulatory environments.",
        "The pace of change demands more flexible consulting approaches.",
        "Success metrics are evolving beyond traditional financial indicators."
      ]
    }
  ]
};

const consultingSources = [
  {
    name: "McKinsey & Company",
    role: "Global Management Consulting Firm",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab"
  },
  {
    name: "Boston Consulting Group",
    role: "Strategy Consulting Leader",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c"
  },
  {
    name: "Bain & Company",
    role: "Management Consulting Expert",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40"
  }
];

export const EpisodeDetail = () => {
  const [activeTab, setActiveTab] = useState('transcript');

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Leadership & Management in the Digital Age</h1>
        <span className="text-sm text-gray-400">25:00</span>
      </div>

      <p className="text-gray-400">
        A deep dive into modern management consulting, P&L strategies, and leadership principles for the digital transformation era.
      </p>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="transcript">Transcript</TabsTrigger>
          <TabsTrigger value="sources">Sources</TabsTrigger>
        </TabsList>
        <TabsContent value="transcript">
          <TranscriptPanel mapping={managementConsultingTranscript.mapping} />
        </TabsContent>
        <TabsContent value="sources">
          <SourcesPanel sources={consultingSources} />
        </TabsContent>
      </Tabs>

      <NextStepsSection />
    </div>
  );
};