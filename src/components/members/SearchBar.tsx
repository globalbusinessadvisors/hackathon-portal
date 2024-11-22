import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface SearchBarProps {
  onSearch: (value: string) => void;
}

export const SearchBar = ({ onSearch }: SearchBarProps) => (
  <div className="relative max-w-md">
    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-muted" />
    <Input
      placeholder="Search members..."
      className="pl-10"
      onChange={(e) => onSearch(e.target.value)}
    />
  </div>
);