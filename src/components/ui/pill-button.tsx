import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { X } from "lucide-react";

interface PillButtonProps {
  name: string;
  image?: string;
  isSelected?: boolean;
  onSelect?: () => void;
  onRemove?: () => void;
  readOnly?: boolean;
}

export const PillButton = ({ 
  name, 
  image, 
  isSelected, 
  onSelect, 
  onRemove,
  readOnly 
}: PillButtonProps) => {
  const handleClick = () => {
    if (readOnly) return;
    if (onRemove) onRemove();
    if (onSelect) onSelect();
  };

  return (
    <div
      onClick={handleClick}
      className={`flex items-center rounded-full border border-linkedin-blue h-12 ${
        isSelected || onRemove ? 'bg-linkedin-blue text-white' : ''
      } ${!readOnly && 'cursor-pointer hover:bg-linkedin-blue/90'}`}
    >
      {image && (
        <Avatar className="h-12 w-12 rounded-full">
          <AvatarImage src={image} alt={name} className="object-cover" />
          <AvatarFallback>{name[0]}</AvatarFallback>
        </Avatar>
      )}
      <span className="text-sm px-3">{name}</span>
      {!readOnly && onRemove && <X className="w-4 h-4 mr-3" />}
    </div>
  );
};