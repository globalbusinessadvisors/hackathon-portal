import { useState } from "react";
import Navbar from "@/components/Navbar";
import { MemberSection } from "@/components/members/MemberSection";
import { SearchBar } from "@/components/members/SearchBar";
import type { Member } from "@/components/members/types";

// Keep existing host data
const hosts: Member[] = [
  {
    id: "1",
    name: "Reuven Cohen",
    role: "Enterprise AI Leader",
    avatar: "/placeholder.svg",
    expertise: ["Enterprise AI", "Machine Learning", "AI Strategy"],
    location: "Greater Toronto Area, Ontario, Canada",
    type: "host"
  },
  {
    id: "4",
    name: "Robert Ranson",
    role: "Human AI Expert",
    avatar: "/placeholder.svg",
    expertise: ["Human AI", "AI Ethics", "AI Development"],
    location: "Toronto, Ontario, Canada",
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

export default function Members() {
  const [searchQuery, setSearchQuery] = useState("");
  const allMembers = [...hosts, ...presenters, ...participants];
  
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="relative">
        {/* Hero Section with gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-light/30 via-primary/20 to-secondary/10 pointer-events-none h-[500px]" />
        
        <div className="container relative py-12">
          <div className="flex flex-col gap-8 mb-16">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 animate-fade-in">
                Community Members
              </h1>
              <p className="text-lg text-neutral-muted mb-8 animate-fade-up">
                Connect with AI enthusiasts and experts from our vibrant community
              </p>
              <div className="max-w-md mx-auto">
                <SearchBar onSearch={setSearchQuery} />
              </div>
            </div>
          </div>

          <div className="space-y-16">
            <MemberSection 
              title="Hosts" 
              description="Our dedicated community leaders and organizers"
              members={hosts.filter(member => 
                member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                member.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
                member.expertise.some(skill => 
                  skill.toLowerCase().includes(searchQuery.toLowerCase())
                )
              )}
            />

            <MemberSection 
              title="Presenters" 
              description="Expert speakers sharing their knowledge and insights"
              members={presenters.filter(member =>
                member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                member.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
                member.expertise.some(skill => 
                  skill.toLowerCase().includes(searchQuery.toLowerCase())
                )
              )}
            />

            <MemberSection 
              title="Participants" 
              description="Active members of our growing community"
              members={participants.filter(member =>
                member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                member.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
                member.expertise.some(skill => 
                  skill.toLowerCase().includes(searchQuery.toLowerCase())
                )
              )}
            />
          </div>
        </div>
      </div>
    </div>
  );
}