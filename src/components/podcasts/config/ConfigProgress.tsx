import { BookOpen, Star, Palette, Image, ClipboardCheck } from "lucide-react";
import { Progress } from "@/components/ui/progress";

interface ConfigProgressProps {
  currentStep: number;
  totalSteps: number;
}

export const ConfigProgress = ({ currentStep, totalSteps }: ConfigProgressProps) => {
  const progress = (currentStep / totalSteps) * 100;
  
  const configSteps = [
    { name: 'Skill', icon: BookOpen },
    { name: 'Source', icon: Star },
    { name: 'Style', icon: Palette },
    { name: 'Cover', icon: Image },
    { name: 'Review', icon: ClipboardCheck }
  ];

  return (
    <div className="space-y-8">
      <Progress 
        value={progress} 
        className="h-2 bg-linkedin-dark border border-white/10"
        indicatorClassName="bg-linkedin-blue"
      />
      
      <div className="flex items-center justify-between px-2">
        {configSteps.map((step, index) => {
          const Icon = step.icon;
          const isActive = index + 1 <= currentStep;
          const isCurrentStep = index + 1 === currentStep;
          
          return (
            <div key={step.name} className="flex flex-col items-center gap-2">
              <div 
                className={`rounded-full p-3 border-2 transition-colors
                  ${isActive ? 'border-linkedin-blue bg-linkedin-blue/10' : 'border-white/10 bg-linkedin-dark'}
                  ${isCurrentStep ? 'ring-2 ring-linkedin-blue ring-offset-2 ring-offset-linkedin-dark' : ''}
                `}
              >
                <Icon 
                  className={`w-5 h-5 transition-colors
                    ${isActive ? 'text-linkedin-blue' : 'text-white/40'}
                  `} 
                />
              </div>
              <span 
                className={`text-sm font-medium transition-colors
                  ${isActive ? 'text-linkedin-blue' : 'text-white/40'}
                `}
              >
                {step.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};