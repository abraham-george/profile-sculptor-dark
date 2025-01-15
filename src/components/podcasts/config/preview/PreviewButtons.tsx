import { Button } from "@/components/ui/button";

interface PreviewButtonsProps {
  isEditing: boolean;
  onEdit: () => void;
  onDelete: () => void;
  onSave: () => void;
  onCancel: () => void;
}

export const PreviewButtons = ({ 
  isEditing, 
  onEdit, 
  onDelete, 
  onSave, 
  onCancel 
}: PreviewButtonsProps) => {
  return (
    <div className="flex justify-end gap-4 mt-8">
      {!isEditing ? (
        <>
          <Button
            onClick={onEdit}
            className="bg-linkedin-blue hover:bg-linkedin-blue/90"
          >
            Edit
          </Button>
          <Button
            onClick={onDelete}
            variant="destructive"
          >
            Delete
          </Button>
        </>
      ) : (
        <>
          <Button
            onClick={onSave}
            className="bg-linkedin-blue hover:bg-linkedin-blue/90"
          >
            Save
          </Button>
          <Button
            onClick={onCancel}
            variant="outline"
          >
            Cancel
          </Button>
        </>
      )}
    </div>
  );
};