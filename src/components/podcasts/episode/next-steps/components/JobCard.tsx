import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface JobCardProps {
  title: string;
  company: string;
  location: string;
  logo: string;
}

export const JobCard = ({ title, company, location, logo }: JobCardProps) => {
  return (
    <Card className="p-4 bg-linkedin-card hover:bg-linkedin-card/80 transition-colors">
      <div className="flex gap-4">
        <img 
          src={logo} 
          alt={`${company} logo`} 
          className="w-12 h-12 rounded object-cover"
        />
        <div className="flex-1 space-y-2">
          <h4 className="font-semibold text-white">{title}</h4>
          <p className="text-sm text-linkedin-text">{company}</p>
          <p className="text-sm text-linkedin-text">{location}</p>
          <Button 
            className="w-full mt-2 bg-linkedin-blue text-white hover:bg-linkedin-blue/90"
          >
            Easy Apply
          </Button>
        </div>
      </div>
    </Card>
  );
};