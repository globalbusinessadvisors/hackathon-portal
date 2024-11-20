import Navbar from "@/components/Navbar";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { ContentHeader } from "@/components/dashboard/ContentHeader";
import { SessionContent } from "@/components/dashboard/SessionContent";
import { ParticipantsList } from "@/components/dashboard/ParticipantsList";
import { Card, CardContent } from "@/components/ui/card";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="flex-1 p-6">
          <ContentHeader 
            title="AI Hackerspace Sessions" 
          />
          
          <div className="grid grid-cols-3 gap-4 mb-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-2">
                  <p className="text-sm text-muted-foreground">
                    Weekly interactive sessions on AI/ML topics
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-2">
                  <p className="text-sm text-muted-foreground">
                    Live coding and discussions
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-2">
                  <p className="text-sm text-muted-foreground">
                    Earn participation certificates
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-3 gap-6">
            <div className="col-span-2">
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