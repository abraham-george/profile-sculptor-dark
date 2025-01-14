import { Card } from "@/components/ui/card";
import { EyeOff, X } from "lucide-react";

export const SuggestedSection = () => {
  return (
    <div className="section-card">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <h2 className="text-lg font-semibold">Suggested for you</h2>
          <span className="flex items-center gap-1 text-sm text-gray-400">
            <EyeOff size={14} />
            Private to you
          </span>
        </div>
        <button className="text-gray-400 hover:text-white">
          <X size={20} />
        </button>
      </div>
      
      <div className="p-4 bg-white/5 rounded-lg">
        <div className="flex items-center gap-4">
          <div className="flex-shrink-0">
            <div className="w-10 h-10 rounded-full bg-linkedin-blue/20 flex items-center justify-center">
              🌍
            </div>
          </div>
          <div className="flex-grow">
            <h3 className="font-medium">Let's improve equal access to opportunity</h3>
            <p className="text-sm text-gray-400 mt-1">
              Help promote fairness and diversity on LinkedIn by answering a few demographic questions.
              We'll keep your responses confidential and secure.
            </p>
          </div>
          <button className="text-gray-400 hover:text-white">
            <X size={20} />
          </button>
        </div>
        <Button className="mt-4 profile-button border border-white/20">
          Continue
        </Button>
      </div>
    </div>
  );
};