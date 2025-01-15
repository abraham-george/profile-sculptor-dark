import { Sparkles, Database, Palette, Image, ClipboardCheck } from "lucide-react";
import { Progress } from "@/components/ui/progress";

interface ConfigProgressProps {
  currentStep: number;
  totalSteps: number;
}

export const ConfigProgress = ({ currentStep, totalSteps }: ConfigProgressProps) => {
  const progress = (currentStep / totalSteps) * 100;
  
  const configSteps = [
    { name: 'Skills', icon: Sparkles },
    { name: 'Sources', icon: Database },
    { name: 'Style', icon: Palette },
    { name: 'Cover', icon: Image },
    { name: 'Review', icon: ClipboardCheck }
  ];

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl">Step {currentStep} of {totalSteps}: {configSteps[currentStep - 1].name}</h3>
        <div className="flex items-center gap-2">
          {configSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div 
                key={step.name}
                className={`rounded-full p-2 ${index + 1 === currentStep ? 'bg-linkedin-blue text-white' : 'text-gray-400'}`}
              >
                <Icon className="w-4 h-4" />
              </div>
            );
          })}
        </div>
      </div>
      <Progress value={progress} className="mb-8" />
    </div>
  );
};