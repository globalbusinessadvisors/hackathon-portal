import { Github, Linkedin, Twitter, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const FooterSection = ({ title, links }: { title: string; links: { label: string; href: string; }[] }) => (
  <div>
    <h3 className="font-bold text-lg text-primary mb-4">{title}</h3>
    <ul className="space-y-2">
      {links.map((link, index) => (
        <li key={index}>
          <Link
            to={link.href}
            className="text-muted-foreground hover:text-primary transition-colors text-sm"
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

const ContactItem = ({ icon: Icon, text, href }: { icon: any; text: string; href: string }) => (
  <a
    href={href}
    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
  >
    <Icon className="h-4 w-4" />
    <span>{text}</span>
  </a>
);

export const Footer = () => {
  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "Events", href: "/events" },
    { label: "Blog", href: "/blog" },
    { label: "Learn More", href: "/learn-more" },
  ];

  const resourceLinks = [
    { label: "Recordings", href: "/recordings" },
    { label: "Learning Resources", href: "/learning-resources" },
    { label: "Community Discussions", href: "/community-discussions" },
    { label: "AI Projects", href: "/ai-projects" },
  ];

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
  ];

  const contactInfo = [
    { icon: Mail, text: "support@aihackerspace.net", href: "mailto:support@aihackerspace.net" },
    { icon: MapPin, text: "Toronto, ON", href: "#" },
    { icon: Phone, text: "(888) 231-8822", href: "tel:+18882318822" },
  ];

  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg text-primary">AI Hackerspace</h3>
            <p className="text-muted-foreground text-sm">
              Exploring the frontiers of artificial intelligence through weekly sessions,
              community collaboration, and innovative projects.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <FooterSection title="Quick Links" links={quickLinks} />

          {/* Resources */}
          <FooterSection title="Resources" links={resourceLinks} />

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg text-primary mb-4">Contact Us</h3>
            <ul className="space-y-3">
              {contactInfo.map((item, index) => (
                <li key={index}>
                  <ContactItem {...item} />
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground text-center sm:text-left">
              © {new Date().getFullYear()} AI Hackerspace. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};