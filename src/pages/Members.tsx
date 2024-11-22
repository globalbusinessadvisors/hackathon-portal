import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Search } from "lucide-react";
import Navbar from "@/components/Navbar";

interface Member {
  id: string;
  name: string;
  role: string;
  avatar: string;
  expertise: string[];
  location: string;
  type: 'host' | 'presenter' | 'participant';
}

// Temporary mock data - this would typically come from your backend
const members: Member[] = [
  {
    id: "1",
    name: "Dr. Sarah Chen",
    role: "AI Researcher",
    avatar: "/placeholder.svg",
    expertise: ["Machine Learning", "Neural Networks", "Computer Vision"],
    location: "Toronto, ON",
    type: "host"
  },
  {
    id: "2",
    name: "Michael Rodriguez",
    role: "ML Engineer",
    avatar: "/placeholder.svg",
    expertise: ["Deep Learning", "NLP", "Python"],
    location: "Vancouver, BC",
    type: "presenter"
  },
  {
    id: "3",
    name: "Dr. James Wilson",
    role: "Data Scientist",
    avatar: "/placeholder.svg",
    expertise: ["Statistical Analysis", "Big Data", "R"],
    location: "Montreal, QC",
    type: "participant"
  },
  {
    id: "4",
    name: "Emma Thompson",
    role: "AI Ethics Specialist",
    avatar: "/placeholder.svg",
    expertise: ["AI Ethics", "Policy", "Governance"],
    location: "Ottawa, ON",
    type: "host"
  },
  {
    id: "5",
    name: "David Lee",
    role: "Research Engineer",
    avatar: "/placeholder.svg",
    expertise: ["Reinforcement Learning", "PyTorch", "TensorFlow"],
    location: "Calgary, AB",
    type: "presenter"
  }
];

const MemberCard = ({ member }: { member: Member }) => (
  <Card className="overflow-hidden hover:shadow-lg transition-shadow">
    <CardContent className="p-6">
      <div className="flex items-start gap-4">
        <Avatar className="h-16 w-16">
          <AvatarImage src={member.avatar} alt={member.name} />
          <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className="flex-1 space-y-2">
          <h3 className="font-semibold text-lg">{member.name}</h3>
          <p className="text-sm text-muted-foreground">{member.role}</p>
          <p className="text-sm text-muted-foreground">{member.location}</p>
          <div className="flex flex-wrap gap-2">
            {member.expertise.map((skill) => (
              <Badge key={skill} variant="secondary" className="text-xs">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
);

const MemberSection = ({ title, description, members }: { 
  title: string; 
  description: string;
  members: Member[];
}) => (
  <section className="space-y-6">
    <div>
      <h2 className="text-2xl font-semibold">{title}</h2>
      <p className="text-muted-foreground mt-1">{description}</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {members.map((member) => (
        <MemberCard key={member.id} member={member} />
      ))}
    </div>
  </section>
);

export default function Members() {
  const hosts = members.filter(m => m.type === 'host');
  const presenters = members.filter(m => m.type === 'presenter');
  const participants = members.filter(m => m.type === 'participant');

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container py-8">
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl font-bold">Community Members</h1>
            <p className="text-muted-foreground">
              Connect with AI enthusiasts and experts from our community
            </p>
            
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search members..."
                className="pl-10"
              />
            </div>
          </div>

          <MemberSection 
            title="Hosts" 
            description="Our dedicated community leaders and organizers"
            members={hosts}
          />

          <MemberSection 
            title="Presenters" 
            description="Expert speakers sharing their knowledge and insights"
            members={presenters}
          />

          <MemberSection 
            title="Participants" 
            description="Active members of our growing community"
            members={participants}
          />
        </div>
      </div>
    </div>
  );
}