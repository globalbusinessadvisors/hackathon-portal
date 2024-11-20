import { ContentHeader } from "@/components/dashboard/ContentHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Calendar, Clock, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import { Sidebar } from "@/components/dashboard/Sidebar";

const recentSessions = [
  {
    id: 1,
    title: "Advanced AI Development Workshop",
    date: "2024-03-15",
    time: "14:00",
    participants: 24,
    status: "Completed"
  },
  {
    id: 2,
    title: "Machine Learning Deep Dive",
    date: "2024-03-08",
    time: "15:30",
    participants: 18,
    status: "Completed"
  },
  {
    id: 3,
    title: "Neural Networks Fundamentals",
    date: "2024-03-01",
    time: "13:00",
    participants: 32,
    status: "Completed"
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
            <div className="flex items-center justify-center mb-8">
              <div className="bg-white/50 backdrop-blur-sm px-6 py-3 rounded-full border border-primary/10">
                <h1 className="text-2xl font-semibold bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent">
                  Recent Sessions
                </h1>
              </div>
            </div>

            <Card className="glass-card border-primary/10">
              <CardContent className="pt-6">
                <ContentHeader 
                  title="Session History" 
                />
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Session</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Time</TableHead>
                      <TableHead>Participants</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {recentSessions.map((session) => (
                      <TableRow key={session.id} className="hover:bg-primary/5">
                        <TableCell className="font-medium">{session.title}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-primary" />
                            {session.date}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-primary" />
                            {session.time}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Users className="h-4 w-4 text-primary" />
                            {session.participants}
                          </div>
                        </TableCell>
                        <TableCell>
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                            {session.status}
                          </span>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentSessions;