import { Github, X, Linkedin } from "lucide-react";

export const Footer = () => {
  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { 
      icon: X, 
      href: "#", 
      label: "X",
      className: "font-bold text-neutral" 
    },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <h3 className="font-bold text-lg text-primary">AI Hackerspace</h3>
          <p className="text-neutral-muted">
            Exploring the frontiers of artificial intelligence
          </p>
        </div>
        <div className="flex gap-6">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              className={`text-neutral hover:text-primary transition-colors ${social.className || ''}`}
              aria-label={social.label}
            >
              <social.icon className={`h-6 w-6 ${social.label === 'X' ? 'scale-90' : ''}`} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};