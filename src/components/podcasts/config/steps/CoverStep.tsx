import { useState, useEffect } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { PodcastConfig } from "../types";

interface CoverStepProps {
  coverImage?: {
    type: 'existing' | 'generated';
    url: string;
  };
  onCoverImageSelect: (coverImage: CoverStepProps['coverImage']) => void;
  config: PodcastConfig;
  onConfigUpdate: (updates: Partial<PodcastConfig>) => void;
}

export const CoverStep = ({ coverImage, onCoverImageSelect, config, onConfigUpdate }: CoverStepProps) => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [selectedOption, setSelectedOption] = useState<"upload" | "generate">("upload");
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [prompt, setPrompt] = useState("");
  const [podcastTitle, setPodcastTitle] = useState(config.industry || "");

  const linkedinTuneInImage = "/lovable-uploads/6bbb0605-4369-4c95-9a42-09949e5b1ed1.png";

  useEffect(() => {
    // Initialize with existing cover image if available
    if (config.coverImage) {
      setSelectedOption(config.coverImage.type);
      if (config.coverImage.type === 'generated') {
        setGeneratedImage(config.coverImage.url);
      }
    }
  }, [config.coverImage]);

  const handleOptionChange = (value: "upload" | "generate") => {
    setSelectedOption(value);
    if (value === "upload") {
      const coverImageUpdate = { type: 'existing' as const, url: linkedinTuneInImage };
      onCoverImageSelect(coverImageUpdate);
      onConfigUpdate({ 
        coverImage: coverImageUpdate,
        industry: podcastTitle 
      });
    }
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTitle = e.target.value;
    setPodcastTitle(newTitle);
    onConfigUpdate({ 
      industry: newTitle,
      coverImage: config.coverImage 
    });
  };

  const handleGenerateImage = async () => {
    if (!prompt.trim() && !podcastTitle.trim()) return;
    
    setIsGenerating(true);
    try {
      const { data, error } = await supabase.functions.invoke('generate-cover', {
        body: { prompt: podcastTitle || prompt }
      });

      if (error) throw error;
      
      const coverImageUpdate = { type: 'generated' as const, url: data.imageUrl };
      setGeneratedImage(data.imageUrl);
      onCoverImageSelect(coverImageUpdate);
      onConfigUpdate({ 
        coverImage: coverImageUpdate,
        industry: podcastTitle 
      });
      toast.success("Cover image generated successfully!");
    } catch (error) {
      console.error("Error generating image:", error);
      toast.error("Failed to generate cover image. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="space-y-8">      
      <div className="space-y-4">
        <Label htmlFor="podcastTitle">Enter your podcast title</Label>
        <Input
          id="podcastTitle"
          placeholder="Enter a title for your podcast..."
          value={podcastTitle}
          onChange={handleTitleChange}
          className="max-w-xl"
        />
      </div>
      
      <RadioGroup
        value={selectedOption}
        onValueChange={(value) => handleOptionChange(value as "upload" | "generate")}
        className="grid gap-8"
      >
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="upload" id="upload" />
            <Label htmlFor="upload">Use LinkedIn TuneIn Cover</Label>
          </div>
          <div className="ml-6">
            <div className="w-64 h-64 rounded-lg overflow-hidden border-2 border-linkedin-blue">
              <img
                src={linkedinTuneInImage}
                alt="LinkedIn TuneIn cover"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="generate" id="generate" />
            <Label htmlFor="generate">Generate with AI</Label>
          </div>
          {selectedOption === "generate" && (
            <div className="ml-6 space-y-4">
              <div className="space-y-2">
                <Label htmlFor="prompt">Image Description (Optional)</Label>
                <Input
                  id="prompt"
                  placeholder="Add additional details for the cover image..."
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  className="max-w-xl"
                />
              </div>
              
              <Button
                onClick={handleGenerateImage}
                disabled={isGenerating || (!prompt.trim() && !podcastTitle.trim())}
                className="w-full max-w-xl"
              >
                {isGenerating ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Generating...
                  </>
                ) : (
                  "Generate Cover Image"
                )}
              </Button>

              {generatedImage && (
                <div className="w-64 h-64 rounded-lg overflow-hidden border-2 border-linkedin-blue">
                  <img
                    src={generatedImage}
                    alt="Generated cover"
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
            </div>
          )}
        </div>
      </RadioGroup>
    </div>
  );
};