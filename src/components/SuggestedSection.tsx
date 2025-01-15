import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { EyeOff, X } from "lucide-react";

export const SuggestedSection = () => {
  return (
    <div className="section-card">
      <div className="flex flex-col gap-2 mb-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Suggested for you</h2>
          <button className="text-gray-400 hover:text-white">
            <X size={20} />
          </button>
        </div>
        <span className="flex items-center gap-1 text-sm text-gray-400">
          <EyeOff size={14} />
          Private to you
        </span>
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
        <Button className="mt-4 profile-button profile-button-outline">
          Continue
        </Button>
      </div>
    </div>
  );
};