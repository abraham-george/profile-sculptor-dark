import { Button } from "@/components/ui/button";
import { PencilIcon, CheckCircle } from "lucide-react";
import { ProfileActions } from "./ProfileActions";

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
        <div className="relative -mt-16">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952"
              alt="Profile"
              className="w-32 h-32 rounded-full border-4 border-linkedin-card object-cover"
            />
          </div>
        </div>

        <div className="mt-4">
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
          </div>

          <div className="mt-4">
            <ProfileActions />
          </div>
        </div>
      </div>
    </div>
  );
};