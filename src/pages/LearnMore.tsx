import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Calendar, Users, BookOpen, ArrowRight, Brain, Rocket, Code, Target, Award, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

const LearnMore = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Brain,
      title: "AI Innovation Hub",
      description: "Explore cutting-edge AI technologies and stay ahead of industry trends through our weekly sessions."
    },
    {
      icon: Users,
      title: "Vibrant Community",
      description: "Connect with fellow AI enthusiasts, share knowledge, and build lasting professional relationships."
    },
    {
      icon: Rocket,
      title: "Hands-on Learning",
      description: "Gain practical experience through interactive workshops and real-world project collaborations."
    },
    {
      icon: Code,
      title: "Technical Excellence",
      description: "Deep dive into AI frameworks, tools, and best practices with expert guidance."
    },
    {
      icon: Target,
      title: "Career Growth",
      description: "Enhance your skills and open new career opportunities in the rapidly evolving AI landscape."
    },
    {
      icon: Award,
      title: "Expert Insights",
      description: "Learn from industry leaders and gain valuable insights into the future of AI technology."
    }
  ];

  const milestones = [
    { number: "500+", label: "Community Members" },
    { number: "100+", label: "Weekly Sessions" },
    { number: "50+", label: "Projects Launched" },
    { number: "25+", label: "Expert Speakers" }
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-primary/10 to-secondary/5 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-up">
              <h1 className="text-5xl font-bold bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent">
                Welcome to AI Hackerspace
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Join our thriving community of AI enthusiasts, developers, and researchers as we explore 
                the frontiers of artificial intelligence together.
              </p>
              <Sparkles className="h-8 w-8 mx-auto text-primary animate-pulse" />
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="hover-scale border-primary/10">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="p-2 rounded-lg bg-primary/5">
                        <feature.icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="text-center space-y-2 animate-fade-up" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="text-4xl font-bold text-primary">{milestone.number}</div>
                  <div className="text-muted-foreground">{milestone.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <Card className="max-w-4xl mx-auto overflow-hidden hover-scale">
              <div className="p-8 md:p-12 text-center space-y-6">
                <CardTitle className="text-3xl">Ready to Start Your AI Journey?</CardTitle>
                <CardDescription className="text-lg max-w-2xl mx-auto">
                  Join our next session and become part of a community that's shaping the future of AI technology.
                  Discover opportunities to learn, collaborate, and grow with fellow enthusiasts.
                </CardDescription>
                <Button 
                  onClick={() => navigate("/events")}
                  size="lg"
                  className="group"
                >
                  View Upcoming Events
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default LearnMore;