import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Clock, Award, Plus, ChevronDown, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";

const Dashboard = () => {
  const assignees = [
    { name: "Adit Irawan", role: "Jr UX/UI Designer", avatar: "https://github.com/shadcn.png" },
    { name: "Arif Ariyanto", role: "Jr UX/UI Designer", avatar: "https://github.com/shadcn.png" },
    { name: "Ardhi Mubarak", role: "Jr UX/UI Designer", avatar: "https://github.com/shadcn.png" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 min-h-screen border-r bg-background">
          <div className="p-4">
            <h2 className="text-lg font-semibold mb-4">Learning Content</h2>
            <nav className="space-y-2">
              <a href="#" className="flex items-center text-sm p-2 hover:bg-accent rounded-md">
                Recent
              </a>
              <a href="#" className="flex items-center text-sm p-2 hover:bg-accent rounded-md">
                Shared Content
              </a>
              <a href="#" className="flex items-center text-sm p-2 hover:bg-accent rounded-md">
                Archived
              </a>
              <a href="#" className="flex items-center text-sm p-2 hover:bg-accent rounded-md">
                Templates
              </a>
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">General Knowledge & Methodology</h1>
          </div>

          <Tabs defaultValue="details" className="w-full">
            <TabsList>
              <TabsTrigger value="details">Details Content</TabsTrigger>
              <TabsTrigger value="report">Report Issue</TabsTrigger>
              <TabsTrigger value="discussion">Discussion</TabsTrigger>
            </TabsList>

            <TabsContent value="details" className="space-y-6">
              <div className="grid grid-cols-3 gap-6">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Sections & Chapters</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">3 sections • 4 Chapters</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Time Estimation</CardTitle>
                    <Clock className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">3 Hours</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Certificate</CardTitle>
                    <Award className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">Available</div>
                  </CardContent>
                </Card>
              </div>

              <div className="grid grid-cols-3 gap-6">
                <div className="col-span-2">
                  <Card>
                    <CardHeader>
                      <div className="flex justify-between items-center">
                        <CardTitle>Page Content</CardTitle>
                        <Button variant="outline" size="sm">
                          <Plus className="h-4 w-4 mr-2" />
                          Add section
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between p-2 bg-accent/50 rounded-lg">
                          <div className="flex items-center gap-2">
                            <ChevronDown className="h-4 w-4" />
                            <span>Design Introduction</span>
                          </div>
                          <span className="text-sm text-muted-foreground">2 chapters</span>
                        </div>
                        <div className="flex items-center justify-between p-2 hover:bg-accent/50 rounded-lg">
                          <div className="flex items-center gap-2">
                            <ChevronRight className="h-4 w-4" />
                            <span>Component of Design</span>
                          </div>
                          <span className="text-sm text-muted-foreground">3 chapters</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <CardTitle>Assignees</CardTitle>
                      <Button variant="outline" size="sm">
                        Assign
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {assignees.map((assignee, index) => (
                        <div key={index} className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <img
                              src={assignee.avatar}
                              alt={assignee.name}
                              className="h-8 w-8 rounded-full"
                            />
                            <div>
                              <div className="font-medium">{assignee.name}</div>
                              <div className="text-sm text-muted-foreground">{assignee.role}</div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="report">Report issue content here</TabsContent>
            <TabsContent value="discussion">Discussion content here</TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;