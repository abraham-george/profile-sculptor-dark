import { Clock } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface CourseCardProps {
  title: string;
  instructor: string;
  duration: string;
  thumbnail: string;
}

export const CourseCard = ({ title, instructor, duration, thumbnail }: CourseCardProps) => {
  return (
    <Card className="p-0 overflow-hidden bg-linkedin-card hover:bg-linkedin-card/80 transition-colors">
      <div className="relative">
        <img 
          src={thumbnail} 
          alt={title} 
          className="w-full h-40 object-cover"
        />
        <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded-md flex items-center gap-1">
          <Clock className="w-3 h-3" />
          {duration}
        </div>
      </div>
      <div className="p-4">
        <h4 className="font-semibold text-white">{title}</h4>
        <p className="text-sm text-linkedin-text mb-3">{instructor}</p>
        <Button 
          className="w-full bg-linkedin-blue text-white hover:bg-linkedin-blue/90"
        >
          Enroll
        </Button>
      </div>
    </Card>
  );
};