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
}

// Temporary mock data - this would typically come from your backend
const members: Member[] = [
  {
    id: "1",
    name: "Dr. Sarah Chen",
    role: "AI Researcher",
    avatar: "/placeholder.svg",
    expertise: ["Machine Learning", "Neural Networks", "Computer Vision"],
    location: "Toronto, ON"
  },
  {
    id: "2",
    name: "Michael Rodriguez",
    role: "ML Engineer",
    avatar: "/placeholder.svg",
    expertise: ["Deep Learning", "NLP", "Python"],
    location: "Vancouver, BC"
  },
  {
    id: "3",
    name: "Dr. James Wilson",
    role: "Data Scientist",
    avatar: "/placeholder.svg",
    expertise: ["Statistical Analysis", "Big Data", "R"],
    location: "Montreal, QC"
  }
];

export default function Members() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container py-8">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl font-bold">Community Members</h1>
            <p className="text-muted-foreground">
              Connect with AI enthusiasts and experts from our community
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search members..."
                className="pl-10"
              />
            </div>
          </div>

          {/* Members Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {members.map((member) => (
              <Card key={member.id} className="overflow-hidden hover:shadow-lg transition-shadow">
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
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}