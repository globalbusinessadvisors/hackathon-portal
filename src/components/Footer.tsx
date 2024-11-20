import { Github, Twitter, Linkedin } from "lucide-react";

export const Footer = () => {
  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { 
      icon: Twitter, 
      href: "#", 
      label: "X",
      className: "font-bold" // Added bold styling to match the image
    },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <h3 className="font-bold text-lg">AI Hackerspace</h3>
          <p className="text-muted-foreground">
            Exploring the frontiers of artificial intelligence
          </p>
        </div>
        <div className="flex gap-6">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              className={`text-muted-foreground hover:text-primary transition-colors ${social.className || ''}`}
              aria-label={social.label}
            >
              <social.icon className="h-6 w-6" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};