import Navbar from "@/components/Navbar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

const LearnMore = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-primary">About AI Hackerspace</h1>
          
          <ScrollArea className="h-[calc(100vh-16rem)]">
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    AI Hackerspace is dedicated to fostering innovation and collaboration in artificial intelligence. 
                    We provide a platform for developers, researchers, and enthusiasts to explore cutting-edge AI technology 
                    through weekly events, workshops, and community discussions.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>What We Offer</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription>
                    <strong>Weekly Events</strong>
                    <p>Join our regular sessions featuring expert speakers, hands-on workshops, and collaborative projects.</p>
                  </CardDescription>
                  
                  <CardDescription>
                    <strong>Learning Resources</strong>
                    <p>Access our curated collection of AI learning materials, tutorials, and best practices.</p>
                  </CardDescription>
                  
                  <CardDescription>
                    <strong>Community Support</strong>
                    <p>Connect with fellow AI enthusiasts, share knowledge, and collaborate on projects.</p>
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Get Involved</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Whether you're a beginner or an experienced professional, there's a place for you in our community. 
                    Attend our events, participate in discussions, and contribute to the growing field of artificial intelligence.
                  </p>
                </CardContent>
              </Card>
            </div>
          </ScrollArea>
        </div>
      </main>
    </div>
  );
};

export default LearnMore;