import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/Navbar";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container py-6">
        <div className="mb-4">
          <h1 className="text-3xl font-bold">Learning Content</h1>
        </div>
        <Tabs defaultValue="details" className="w-full">
          <TabsList>
            <TabsTrigger value="details">Details Content</TabsTrigger>
            <TabsTrigger value="report">Report Issue</TabsTrigger>
            <TabsTrigger value="discussion">Discussion</TabsTrigger>
          </TabsList>
          <TabsContent value="details" className="space-y-4">
            <div className="grid gap-4">
              <div className="p-4 border rounded-lg">
                <h3 className="font-medium mb-2">Course Information</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>3 sections • 4 Chapters</p>
                  <p>3 Hours Estimation</p>
                  <p>Certificate of Completion</p>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="report">Report issue content here</TabsContent>
          <TabsContent value="discussion">Discussion content here</TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;