import Navbar from "@/components/Navbar";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, ThumbsUp } from "lucide-react";

// Mock data - to be replaced with real data later
const discussions = [
  {
    id: 1,
    title: "Best practices for implementing GPT-4 in production",
    author: "Sarah Chen",
    avatar: "/placeholder.svg",
    date: "2 hours ago",
    replies: 12,
    likes: 34,
    category: "Best Practices",
    preview: "I've been working on implementing GPT-4 in production and wanted to share some insights..."
  },
  {
    id: 2,
    title: "How do you handle AI model versioning?",
    author: "Mike Johnson",
    avatar: "/placeholder.svg",
    date: "5 hours ago",
    replies: 8,
    likes: 21,
    category: "DevOps",
    preview: "We're struggling with managing different versions of our AI models in production..."
  },
  {
    id: 3,
    title: "Ethical considerations in AI development",
    author: "Elena Rodriguez",
    avatar: "/placeholder.svg",
    date: "1 day ago",
    replies: 25,
    likes: 56,
    category: "Ethics",
    preview: "Let's discuss the ethical implications of AI development and how we can ensure responsible innovation..."
  }
];

const CommunityDiscussions = () => {
  return (
    <div className="min-h-screen bg-primary-light/30">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="flex-1 p-8">
          <div className="max-w-[980px] mx-auto">
            <div className="mb-8">
              <h1 className="text-2xl font-semibold text-primary">Community Discussions</h1>
              <p className="text-neutral-muted mt-2">Join the conversation with fellow AI enthusiasts</p>
            </div>
            
            <div className="space-y-4">
              {discussions.map((discussion) => (
                <Card key={discussion.id} className="hover-scale glass-card border-primary/10">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg font-semibold hover:text-primary cursor-pointer">
                          {discussion.title}
                        </CardTitle>
                        <CardDescription className="mt-2">{discussion.preview}</CardDescription>
                      </div>
                      <Badge variant="secondary">{discussion.category}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={discussion.avatar} alt={discussion.author} />
                          <AvatarFallback>{discussion.author[0]}</AvatarFallback>
                        </Avatar>
                        <div className="space-y-1">
                          <p className="text-sm font-medium leading-none">{discussion.author}</p>
                          <p className="text-sm text-neutral-muted">{discussion.date}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4 text-neutral-muted">
                        <div className="flex items-center space-x-1">
                          <MessageSquare className="h-4 w-4" />
                          <span className="text-sm">{discussion.replies}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <ThumbsUp className="h-4 w-4" />
                          <span className="text-sm">{discussion.likes}</span>
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
    </div>
  );
};

export default CommunityDiscussions;