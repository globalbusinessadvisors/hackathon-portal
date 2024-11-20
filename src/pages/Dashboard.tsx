import Navbar from "@/components/Navbar";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { ContentHeader } from "@/components/dashboard/ContentHeader";
import { SessionContent } from "@/components/dashboard/SessionContent";
import { ParticipantsList } from "@/components/dashboard/ParticipantsList";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Code, Award } from "lucide-react";

const Dashboard = () => {
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
                  AI Hackerspace Sessions
                </h1>
              </div>
            </div>
          
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card className="hover-scale glass-card border-primary/10">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-2">
                    <Brain className="h-5 w-5 text-primary" />
                    <p className="text-sm font-medium text-neutral">
                      Weekly interactive sessions on AI/ML topics
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="hover-scale glass-card border-primary/10">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-2">
                    <Code className="h-5 w-5 text-primary" />
                    <p className="text-sm font-medium text-neutral">
                      Live coding and discussions
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="hover-scale glass-card border-primary/10">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-2">
                    <Award className="h-5 w-5 text-primary" />
                    <p className="text-sm font-medium text-neutral">
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
    </div>
  );
};

export default Dashboard;