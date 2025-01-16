import { ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface EventCardProps {
  title: string;
  date: string;
  attendees: string;
  thumbnail: string;
}

export const EventCard = ({ title, date, attendees, thumbnail }: EventCardProps) => {
  return (
    <Card className="p-0 overflow-hidden bg-linkedin-card hover:bg-linkedin-card/80 transition-colors">
      <img 
        src={thumbnail} 
        alt={title} 
        className="w-full h-32 object-cover"
      />
      <div className="p-4">
        <h4 className="font-semibold text-white">{title}</h4>
        <p className="text-sm text-linkedin-text">{date}</p>
        <p className="text-sm text-linkedin-text mb-3">{attendees} attendees</p>
        <Button 
          variant="outline" 
          className="w-full bg-transparent border-linkedin-blue text-linkedin-blue hover:bg-linkedin-blue hover:text-white"
        >
          View
          <ExternalLink className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </Card>
  );
};