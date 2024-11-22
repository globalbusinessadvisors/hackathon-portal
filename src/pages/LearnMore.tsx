import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Calendar, Users, BookOpen, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const LearnMore = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center animate-fade-up">
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              About AI Hackerspace
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join our community of AI enthusiasts, developers, and researchers as we explore 
              the frontiers of artificial intelligence together.
            </p>
          </div>
          
          <ScrollArea className="h-[calc(100vh-24rem)]">
            <div className="space-y-8 pb-8">
              <Card className="overflow-hidden hover-scale">
                <CardHeader className="bg-primary/5">
                  <CardTitle className="flex items-center gap-2 text-primary">
                    Our Mission
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="text-muted-foreground leading-relaxed">
                    AI Hackerspace is dedicated to fostering innovation and collaboration in artificial intelligence. 
                    We provide a platform for developers, researchers, and enthusiasts to explore cutting-edge AI technology 
                    through weekly events, workshops, and community discussions.
                  </p>
                </CardContent>
              </Card>

              <div className="grid md:grid-cols-3 gap-6">
                <Card className="hover-scale">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Calendar className="h-5 w-5 text-primary" />
                      Weekly Events
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Join our regular sessions featuring expert speakers, hands-on workshops, 
                      and collaborative projects.
                    </CardDescription>
                  </CardContent>
                </Card>
                
                <Card className="hover-scale">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <BookOpen className="h-5 w-5 text-primary" />
                      Learning Resources
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Access our curated collection of AI learning materials, tutorials, 
                      and best practices.
                    </CardDescription>
                  </CardContent>
                </Card>
                
                <Card className="hover-scale">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Users className="h-5 w-5 text-primary" />
                      Community Support
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Connect with fellow AI enthusiasts, share knowledge, and collaborate 
                      on projects.
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>

              <Card className="overflow-hidden hover-scale">
                <CardHeader className="bg-secondary/5">
                  <CardTitle className="flex items-center gap-2 text-secondary">
                    Get Involved
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Whether you're a beginner or an experienced professional, there's a place for you 
                    in our community. Attend our events, participate in discussions, and contribute 
                    to the growing field of artificial intelligence.
                  </p>
                  <Button 
                    onClick={() => navigate("/events")}
                    className="group"
                  >
                    View Upcoming Events
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </ScrollArea>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LearnMore;