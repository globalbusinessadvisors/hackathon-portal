import Navbar from "@/components/Navbar";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { ContentHeader } from "@/components/dashboard/ContentHeader";
import { SessionContent } from "@/components/dashboard/SessionContent";
import { ParticipantsList } from "@/components/dashboard/ParticipantsList";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Code, Award } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="flex-1 p-8">
          <ContentHeader 
            title="AI Hackerspace Sessions" 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="hover-scale glass-card">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-2">
                  <Brain className="h-5 w-5 text-purple-500" />
                  <p className="text-sm font-medium">
                    Weekly interactive sessions on AI/ML topics
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="hover-scale glass-card">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-2">
                  <Code className="h-5 w-5 text-purple-500" />
                  <p className="text-sm font-medium">
                    Live coding and discussions
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="hover-scale glass-card">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-2">
                  <Award className="h-5 w-5 text-purple-500" />
                  <p className="text-sm font-medium">
                    Earn participation certificates
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <SessionContent />
            </div>
            <div>
              <ParticipantsList />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;