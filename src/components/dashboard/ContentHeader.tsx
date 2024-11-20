import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

interface ContentHeaderProps {
  title: string;
  onAdd?: () => void;
  addButtonText?: string;
}

export const ContentHeader = ({ title, onAdd, addButtonText }: ContentHeaderProps) => {
  return (
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-2xl font-bold">{title}</h1>
      {onAdd && (
        <Button onClick={onAdd} variant="outline" size="sm">
          <Plus className="h-4 w-4 mr-2" />
          {addButtonText}
        </Button>
      )}
    </div>
  );
};