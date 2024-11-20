import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const menuItems = {
  learning: [
    { name: "Recent Sessions", href: "#recent" },
    { name: "Community Discussions", href: "#discussions" },
    { name: "Learning Resources", href: "#resources" },
    { name: "Session Archives", href: "#archives" }
  ],
  projects: [
    { name: "AI Projects", href: "#ai-projects" },
    { name: "Hackathon Ideas", href: "#hackathon" }
  ]
};

export const Sidebar = () => {
  return (
    <div className="w-64 min-h-screen border-r bg-background">
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-4">Learning Content</h2>
        <nav className="space-y-2">
          {menuItems.learning.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={cn(
                "flex items-center text-sm p-2 hover:bg-accent rounded-md",
                "transition-colors duration-200"
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="mt-8">
          <h3 className="text-sm font-medium mb-2">Projects</h3>
          <nav className="space-y-2">
            {menuItems.projects.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "flex items-center text-sm p-2 hover:bg-accent rounded-md",
                  "transition-colors duration-200"
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};