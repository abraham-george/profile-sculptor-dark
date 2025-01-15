import { useState } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Loader2, Image as ImageIcon } from "lucide-react";

export const CoverStep = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [selectedOption, setSelectedOption] = useState<"upload" | "generate">("upload");
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);

  const handleGenerateImage = async () => {
    setIsGenerating(true);
    try {
      const response = await fetch("/api/generate-cover", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: "A professional podcast cover with modern design",
        }),
      });
      const data = await response.json();
      setGeneratedImage(data.imageUrl);
    } catch (error) {
      console.error("Error generating image:", error);
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
          {selectedOption === "upload" && (
            <div className="ml-6">
              <div className="w-48 h-48 rounded-lg border-2 border-dashed border-gray-400 flex items-center justify-center">
                <ImageIcon className="w-8 h-8 text-gray-400" />
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
              <Button
                onClick={handleGenerateImage}
                disabled={isGenerating}
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
                <div className="w-48 h-48 rounded-lg overflow-hidden">
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