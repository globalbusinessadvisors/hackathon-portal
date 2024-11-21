import Navbar from "@/components/Navbar";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Calendar, Clock, Users, Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

// Mock data - to be replaced with real data later
const archives = [
  {
    id: 1,
    title: "Deep Learning Fundamentals Workshop",
    date: "2024-01-15",
    duration: "2 hours",
    participants: 45,
    recording: "https://example.com/recording1",
    materials: "https://example.com/materials1",
    category: "Deep Learning",
    status: "archived"
  },
  {
    id: 2,
    title: "Natural Language Processing in Practice",
    date: "2024-01-08",
    duration: "1.5 hours",
    participants: 38,
    recording: "https://example.com/recording2",
    materials: "https://example.com/materials2",
    category: "NLP",
    status: "archived"
  },
  {
    id: 3,
    title: "Computer Vision Applications",
    date: "2024-01-01",
    duration: "2.5 hours",
    participants: 52,
    recording: "https://example.com/recording3",
    materials: "https://example.com/materials3",
    category: "Computer Vision",
    status: "archived"
  }
];

const SessionArchives = () => {
  return (
    <div className="min-h-screen bg-primary-light/30">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="flex-1 p-8">
          <div className="max-w-[980px] mx-auto">
            <div className="mb-8">
              <h1 className="text-2xl font-semibold text-primary">Session Archives</h1>
              <p className="text-neutral-muted mt-2">Access recordings and materials from past AI Hackerspace sessions</p>
            </div>
            
            <ScrollArea className="h-[calc(100vh-12rem)]">
              <div className="space-y-4">
                {archives.map((session) => (
                  <Card key={session.id} className="hover-scale glass-card border-primary/10">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-lg font-semibold">{session.title}</CardTitle>
                        <Badge variant="secondary">{session.category}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-neutral-muted">
                            <Calendar className="h-4 w-4" />
                            <span>{session.date}</span>
                          </div>
                          <div className="flex items-center gap-2 text-neutral-muted">
                            <Clock className="h-4 w-4" />
                            <span>{session.duration}</span>
                          </div>
                          <div className="flex items-center gap-2 text-neutral-muted">
                            <Users className="h-4 w-4" />
                            <span>{session.participants} participants</span>
                          </div>
                        </div>
                        <div className="flex flex-col md:flex-row gap-2 justify-end">
                          <Button variant="outline" size="sm" className="flex items-center gap-2">
                            <Download className="h-4 w-4" />
                            Recording
                          </Button>
                          <Button variant="outline" size="sm" className="flex items-center gap-2">
                            <ExternalLink className="h-4 w-4" />
                            Materials
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </ScrollArea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SessionArchives;