import { Checkbox } from "@/components/ui/checkbox";

interface AdditionalContentProps {
  selectedContent: string[];
  onContentSelect: (content: string) => void;
}

export const AdditionalContent = ({
  selectedContent,
  onContentSelect,
}: AdditionalContentProps) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">Additional Content</h3>
      <div className="flex space-x-6">
        <div className="flex items-center space-x-2">
          <Checkbox 
            id="linkedin-learning"
            checked={selectedContent.includes('linkedin-learning')}
            onCheckedChange={() => onContentSelect('linkedin-learning')}
          />
          <label 
            htmlFor="linkedin-learning"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            LinkedIn Learning
          </label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox 
            id="events"
            checked={selectedContent.includes('events')}
            onCheckedChange={() => onContentSelect('events')}
          />
          <label 
            htmlFor="events"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Events
          </label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox 
            id="jobs"
            checked={selectedContent.includes('jobs')}
            onCheckedChange={() => onContentSelect('jobs')}
          />
          <label 
            htmlFor="jobs"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Jobs
          </label>
        </div>
      </div>
    </div>
  );
};