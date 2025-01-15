import { useState } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

interface CoverStepProps {
  coverImage?: {
    type: 'existing' | 'generated';
    url: string;
  };
  onCoverImageSelect: (coverImage: CoverStepProps['coverImage']) => void;
}

export const CoverStep = ({ coverImage, onCoverImageSelect }: CoverStepProps) => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [selectedOption, setSelectedOption] = useState<"upload" | "generate">("upload");
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [prompt, setPrompt] = useState("");

  const handleGenerateImage = async () => {
    if (!prompt.trim()) return;
    
    setIsGenerating(true);
    try {
      const { data, error } = await supabase.functions.invoke('generate-cover', {
        body: { prompt }
      });

      if (error) throw error;
      
      setGeneratedImage(data.imageUrl);
      onCoverImageSelect({ type: 'generated', url: data.imageUrl });
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
      <h3 className="text-lg font-medium">Choose Cover Image</h3>
      
      <RadioGroup
        value={selectedOption}
        onValueChange={(value) => setSelectedOption(value as "upload" | "generate")}
        className="grid gap-8"
      >
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="upload" id="upload" />
            <Label htmlFor="upload">Use Existing Image</Label>
          </div>
          {selectedOption === "upload" && coverImage && coverImage.type === 'existing' && (
            <div className="ml-6">
              <div className="w-64 h-64 rounded-lg overflow-hidden">
                <img
                  src={coverImage.url}
                  alt="Podcast cover"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          )}
        </div>

        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="generate" id="generate" />
            <Label htmlFor="generate">Generate with AI</Label>
          </div>
          {selectedOption === "generate" && (
            <div className="ml-6 space-y-4">
              <div className="space-y-2">
                <Label htmlFor="prompt">Image Description</Label>
                <Input
                  id="prompt"
                  placeholder="Describe the cover image you want to generate..."
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                />
              </div>
              
              <Button
                onClick={handleGenerateImage}
                disabled={isGenerating || !prompt.trim()}
                className="w-full"
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
                <div className="w-64 h-64 rounded-lg overflow-hidden">
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
