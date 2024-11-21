import Navbar from "@/components/Navbar";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Users } from "lucide-react";

// Mock data - will be replaced with real data later
const recentSessions = [
  {
    id: 1,
    title: "Introduction to AI Ethics",
    date: "2024-03-15",
    time: "14:00",
    duration: "60 min",
    participants: 15,
    status: "completed"
  },
  {
    id: 2,
    title: "Machine Learning Basics",
    date: "2024-03-14",
    time: "15:30",
    duration: "90 min",
    participants: 25,
    status: "completed"
  },
  {
    id: 3,
    title: "Neural Networks Deep Dive",
    date: "2024-03-13",
    time: "16:00",
    duration: "120 min",
    participants: 20,
    status: "completed"
  }
];

const RecentSessions = () => {
  return (
    <div className="min-h-screen bg-primary-light/30">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="flex-1 p-8">
          <div className="max-w-[980px] mx-auto">
            <div className="mb-8">
              <h1 className="text-2xl font-semibold text-primary">Recent Sessions</h1>
              <p className="text-neutral-muted mt-2">View your past AI Hackerspace sessions</p>
            </div>
            
            <div className="space-y-4">
              {recentSessions.map((session) => (
                <Card key={session.id} className="hover-scale glass-card border-primary/10">
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold">{session.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-4">
                      <div className="flex items-center gap-2 text-neutral-muted">
                        <Calendar className="h-4 w-4" />
                        <span>{session.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-neutral-muted">
                        <Clock className="h-4 w-4" />
                        <span>{session.time} ({session.duration})</span>
                      </div>
                      <div className="flex items-center gap-2 text-neutral-muted">
                        <Users className="h-4 w-4" />
                        <span>{session.participants} participants</span>
                      </div>
                      <Badge variant="secondary">{session.status}</Badge>
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

export default RecentSessions;