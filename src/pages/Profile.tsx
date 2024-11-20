import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  UserRound,
  Mail,
  Link as LinkIcon,
  Github,
  Linkedin,
  Trophy,
  Star,
  Calendar,
  MapPin,
  Briefcase,
} from "lucide-react";
import Navbar from "@/components/Navbar";

export default function Profile() {
  // This would typically come from your auth/user context
  const user = {
    name: "John Doe",
    email: "john@example.com",
    role: "AI Developer",
    location: "San Francisco, CA",
    joinDate: "January 2024",
    avatar: "/placeholder.svg",
    company: "AI Solutions Inc.",
    bio: "Passionate about AI and technology. Contributing to the future of artificial intelligence through innovative projects and collaborative development.",
    skills: ["Machine Learning", "Neural Networks", "Python", "TensorFlow", "Computer Vision"],
    achievements: [
      { title: "Top Contributor", description: "Recognized for outstanding contributions", icon: Trophy },
      { title: "AI Expert", description: "Certified in advanced AI technologies", icon: Star },
    ],
    socialLinks: {
      linkedin: "https://linkedin.com/in/johndoe",
      github: "https://github.com/johndoe",
    },
    recentActivity: [
      { type: "Project", name: "AI Image Recognition", date: "2 days ago" },
      { type: "Session", name: "Deep Learning Workshop", date: "1 week ago" },
      { type: "Achievement", name: "Completed Advanced AI Course", date: "2 weeks ago" },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-light/10 via-background to-background">
      <Navbar />
      
      {/* Hero Section */}
      <div className="w-full bg-gradient-to-r from-primary/5 to-secondary/5 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <Avatar className="h-32 w-32 border-4 border-white shadow-xl">
              <AvatarImage src={user.avatar} alt={user.name} />
              <AvatarFallback className="text-4xl">
                {user.name.charAt(0)}
              </AvatarFallback>
            </Avatar>
            
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-3xl font-bold text-neutral">{user.name}</h1>
              <p className="text-neutral-muted mt-2 text-lg">{user.role}</p>
              
              <div className="flex flex-wrap gap-4 mt-4 justify-center md:justify-start">
                <div className="flex items-center gap-2 text-neutral-muted">
                  <Briefcase className="h-4 w-4" />
                  <span>{user.company}</span>
                </div>
                <div className="flex items-center gap-2 text-neutral-muted">
                  <MapPin className="h-4 w-4" />
                  <span>{user.location}</span>
                </div>
                <div className="flex items-center gap-2 text-neutral-muted">
                  <Calendar className="h-4 w-4" />
                  <span>Joined {user.joinDate}</span>
                </div>
              </div>
              
              <div className="flex gap-4 mt-6 justify-center md:justify-start">
                <Button variant="outline" className="gap-2">
                  <Mail className="h-4 w-4" />
                  Contact
                </Button>
                <Button variant="outline" className="gap-2">
                  <UserRound className="h-4 w-4" />
                  Edit Profile
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="space-y-8">
            {/* About Card */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-xl">About</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-muted">{user.bio}</p>
              </CardContent>
            </Card>

            {/* Skills Card */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-xl">Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {user.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="hover-scale">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-xl">Connect</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <a
                  href={user.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-neutral-muted hover:text-primary transition-colors"
                >
                  <Github className="h-5 w-5" />
                  <span>GitHub</span>
                </a>
                <a
                  href={user.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-neutral-muted hover:text-primary transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                  <span>LinkedIn</span>
                </a>
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="md:col-span-2 space-y-8">
            {/* Achievements Card */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-xl">Achievements</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {user.achievements.map((achievement, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <achievement.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-neutral">{achievement.title}</h3>
                        <p className="text-sm text-neutral-muted">{achievement.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity Card */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-xl">Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {user.recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-center justify-between group hover:bg-primary/5 p-3 rounded-lg transition-colors">
                      <div>
                        <span className="text-sm text-neutral-muted">{activity.type}</span>
                        <h4 className="font-medium text-neutral">{activity.name}</h4>
                      </div>
                      <span className="text-sm text-neutral-muted">{activity.date}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}