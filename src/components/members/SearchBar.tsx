import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export const SearchBar = ({ onSearch }: { onSearch: (query: string) => void }) => (
  <div className="relative w-full max-w-lg mx-auto">
    <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
      <Search className="h-4 w-4 text-muted-foreground" />
    </div>
    <Input
      type="text"
      placeholder="Search members by name, role, or expertise..."
      className="pl-10 pr-4 h-12 bg-white/80 backdrop-blur-sm border-primary/20 focus:border-primary"
      onChange={(e) => onSearch(e.target.value)}
    />
  </div>
);