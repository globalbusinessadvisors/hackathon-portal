import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface SearchBarProps {
  onSearch: (value: string) => void;
}

export const SearchBar = ({ onSearch }: SearchBarProps) => (
  <div className="relative w-full">
    <div className="relative">
      <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-neutral-muted" />
      <Input
        placeholder="Search by name, role, or expertise..."
        className="pl-10 h-12 bg-white/80 backdrop-blur-sm border-primary/20 focus:border-primary/40 transition-colors"
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  </div>
);