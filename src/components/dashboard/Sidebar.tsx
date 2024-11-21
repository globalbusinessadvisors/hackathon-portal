import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { BookOpen, Users, Archive, MessageSquare, Brain, Rocket } from "lucide-react";

const menuItems = {
  learning: [
    { name: "Recent Sessions", href: "/recent-sessions", icon: BookOpen },
    { name: "Community Discussions", href: "/community-discussions", icon: MessageSquare },
    { name: "Learning Resources", href: "#resources", icon: Brain },
    { name: "Session Archives", href: "#archives", icon: Archive }
  ],
  projects: [
    { name: "AI Projects", href: "#ai-projects", icon: Rocket },
    { name: "Hackathon Ideas", href: "#hackathon", icon: Users }
  ]
};

export const Sidebar = () => {
  return (
    <div className="w-64 min-h-screen bg-white/50 backdrop-blur-sm border-r border-primary/10">
      <div className="p-6">
        <h2 className="text-lg font-semibold mb-6 text-neutral">Learning Content</h2>
        <nav className="space-y-1">
          {menuItems.learning.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={cn(
                "flex items-center gap-3 text-sm p-3 text-neutral-muted hover:bg-primary/5 rounded-md",
                "transition-colors duration-200"
              )}
            >
              <item.icon className="h-4 w-4 text-primary" />
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="mt-8">
          <h3 className="text-sm font-medium mb-4 text-neutral">Projects</h3>
          <nav className="space-y-1">
            {menuItems.projects.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "flex items-center gap-3 text-sm p-3 text-neutral-muted hover:bg-primary/5 rounded-md",
                  "transition-colors duration-200"
                )}
              >
                <item.icon className="h-4 w-4 text-primary" />
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};