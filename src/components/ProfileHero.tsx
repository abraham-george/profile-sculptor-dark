import { Button } from "@/components/ui/button";
import { PencilIcon, CheckCircle } from "lucide-react";

export const ProfileHero = () => {
  return (
    <div className="section-card relative">
      <div className="h-48 rounded-t-lg bg-gradient-to-r from-gray-700 to-gray-900 relative">
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4 bg-black/20 hover:bg-black/40"
        >
          <PencilIcon className="h-4 w-4" />
        </Button>
      </div>
      
      <div className="px-6 pb-6">
        <div className="relative">
          <div className="absolute -top-16">
            <div className="relative">
              <img
                src="/lovable-uploads/b931e2f8-5c59-4255-8d10-4c0f2ba2ce0d.png"
                alt="Profile"
                className="w-32 h-32 rounded-full border-4 border-linkedin-card"
              />
              <CheckCircle className="absolute bottom-0 right-0 text-linkedin-blue bg-white rounded-full" />
            </div>
          </div>
        </div>

        <div className="mt-20">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-2xl font-bold flex items-center gap-2">
                John Doe
                <CheckCircle className="text-linkedin-blue" size={20} />
              </h1>
              <p className="text-lg text-gray-300">Software Engineer</p>
              <p className="text-sm text-gray-400 mt-1">
                Omaha, Nebraska, United States · <span className="text-linkedin-blue hover:underline cursor-pointer">Contact info</span>
              </p>
              <p className="text-sm text-gray-400 mt-1">
                <span className="text-linkedin-blue hover:underline cursor-pointer">500+ connections</span>
              </p>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-400 hover:text-white"
            >
              <PencilIcon className="h-4 w-4" />
            </Button>
          </div>

          <div className="flex gap-2 mt-4">
            <div className="flex gap-2">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
                alt="LinkedIn"
                className="w-8 h-8 rounded"
              />
              <div className="text-sm">
                <p className="font-semibold">LinkedIn</p>
                <p className="text-gray-400">Company</p>
              </div>
            </div>
            <div className="flex gap-2 ml-6">
              <img
                src="https://upload.wikimedia.org/wikipedia/en/1/1b/Texas_Longhorns_logo.svg"
                alt="University"
                className="w-8 h-8"
              />
              <div className="text-sm">
                <p className="font-semibold">The University of Texas at Austin</p>
                <p className="text-gray-400">Education</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};