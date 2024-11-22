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

// Keep existing host data
const hosts: Member[] = [
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
    id: "4",
    name: "Emma Thompson",
    role: "AI Ethics Specialist",
    avatar: "/placeholder.svg",
    expertise: ["AI Ethics", "Policy", "Governance"],
    location: "Ottawa, ON",
    type: "host"
  }
];

// Generate 10 presenters with diverse backgrounds
const presenters: Member[] = Array.from({ length: 10 }, (_, i) => ({
  id: `p${i + 1}`,
  name: [
    "Dr. Michael Zhang", "Prof. Lisa Kumar", "Dr. Robert Wilson", 
    "Dr. Maria Garcia", "Prof. James Anderson", "Dr. Emily Patel",
    "Prof. David Kim", "Dr. Rachel Cohen", "Prof. Thomas Brown",
    "Dr. Sofia Rodriguez"
  ][i],
  role: [
    "ML Research Lead", "NLP Specialist", "Robotics Engineer",
    "Computer Vision Expert", "Deep Learning Researcher", "AI Systems Architect",
    "Quantum Computing Lead", "Data Science Director", "AI Ethics Researcher",
    "Neural Networks Specialist"
  ][i],
  avatar: "/placeholder.svg",
  expertise: [
    ["Machine Learning", "Deep Learning", "PyTorch"],
    ["Natural Language Processing", "BERT", "Transformers"],
    ["Robotics", "Computer Vision", "ROS"],
    ["Computer Vision", "Deep Learning", "OpenCV"],
    ["Deep Learning", "TensorFlow", "Neural Networks"],
    ["System Design", "MLOps", "Kubernetes"],
    ["Quantum Computing", "Algorithms", "Python"],
    ["Data Science", "Statistics", "R"],
    ["AI Ethics", "Responsible AI", "Policy"],
    ["Neural Networks", "Deep Learning", "PyTorch"]
  ][i],
  location: [
    "Vancouver, BC", "Montreal, QC", "Calgary, AB",
    "Edmonton, AB", "Halifax, NS", "Winnipeg, MB",
    "Quebec City, QC", "Victoria, BC", "Regina, SK",
    "St. John's, NL"
  ][i],
  type: "presenter"
}));

// Generate 50 participants with diverse backgrounds
const participants: Member[] = Array.from({ length: 50 }, (_, i) => ({
  id: `part${i + 1}`,
  name: `${[
    "Alex", "Sam", "Jordan", "Taylor", "Morgan", "Casey", "Riley", "Quinn",
    "Avery", "Parker"
  ][i % 10]} ${[
    "Smith", "Johnson", "Williams", "Brown", "Jones",
    "Garcia", "Miller", "Davis", "Rodriguez", "Martinez"
  ][Math.floor(i / 5) % 10]}`,
  role: [
    "AI Developer", "Data Scientist", "ML Engineer",
    "Research Assistant", "Software Engineer", "Graduate Student",
    "AI Consultant", "Data Analyst", "Research Fellow", "AI Enthusiast"
  ][i % 10],
  avatar: "/placeholder.svg",
  expertise: [
    ["Python", "TensorFlow", "Data Analysis"],
    ["Data Science", "Machine Learning", "SQL"],
    ["Deep Learning", "Computer Vision", "PyTorch"],
    ["Research", "Mathematics", "Statistics"],
    ["Software Development", "AI Integration", "Cloud Computing"],
    ["Academic Research", "Mathematics", "Programming"],
    ["Business Analytics", "AI Strategy", "Consulting"],
    ["Data Analysis", "Visualization", "Python"],
    ["Research", "Publications", "AI Ethics"],
    ["AI Applications", "Web Development", "Cloud"]
  ][i % 10],
  location: [
    "Toronto, ON", "Vancouver, BC", "Montreal, QC",
    "Calgary, AB", "Ottawa, ON", "Edmonton, AB",
    "Winnipeg, MB", "Quebec City, QC", "Hamilton, ON",
    "Halifax, NS"
  ][i % 10],
  type: "participant"
}));

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
  const allMembers = [...hosts, ...presenters, ...participants];
  
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
