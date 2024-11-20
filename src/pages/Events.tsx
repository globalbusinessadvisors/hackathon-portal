import { Calendar, Clock, MapPin } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  status: "upcoming" | "past";
}

const events: Event[] = [
  {
    id: 1,
    title: "AI Development Best Practices",
    date: "2023-11-24",
    time: "12:00 PM EDT",
    location: "Virtual Meeting",
    description: "Join us for an interactive session on developing responsible and efficient AI systems. We'll cover best practices, ethical considerations, and practical implementation tips.",
    status: "upcoming",
  },
  {
    id: 2,
    title: "Machine Learning Workshop",
    date: "2023-12-01",
    time: "12:00 PM EDT",
    location: "Virtual Meeting",
    description: "A hands-on workshop focusing on practical machine learning applications. Bring your laptop and get ready to code!",
    status: "upcoming",
  },
  {
    id: 3,
    title: "Introduction to Large Language Models",
    date: "2023-11-17",
    time: "12:00 PM EDT",
    location: "Virtual Meeting",
    description: "An overview of LLMs, their capabilities, and how to effectively use them in your projects.",
    status: "past",
  },
];

const Events = () => {
  const upcomingEvents = events.filter((event) => event.status === "upcoming");
  const pastEvents = events.filter((event) => event.status === "past");

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container py-12 animate-fade-up">
        <div className="space-y-12">
          {/* Hero Section */}
          <section className="text-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tight">AI Hackerspace Events</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Join our weekly sessions to learn, collaborate, and explore the latest in AI technology. 
              Connect with fellow enthusiasts and industry experts.
            </p>
          </section>

          {/* Upcoming Events */}
          <section className="space-y-6">
            <h2 className="text-2xl font-semibold tracking-tight">Upcoming Events</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {upcomingEvents.map((event) => (
                <Card key={event.id} className="glass-card hover-scale">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle>{event.title}</CardTitle>
                      <Badge variant="secondary">Upcoming</Badge>
                    </div>
                    <CardDescription className="space-y-2 mt-2">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-primary" />
                        <span>{new Date(event.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-primary" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-primary" />
                        <span>{event.location}</span>
                      </div>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{event.description}</p>
                    <Button className="w-full">Register Now</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Past Events */}
          <section className="space-y-6">
            <h2 className="text-2xl font-semibold tracking-tight">Past Events</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {pastEvents.map((event) => (
                <Card key={event.id} className="glass-card">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle>{event.title}</CardTitle>
                      <Badge variant="outline">Past Event</Badge>
                    </div>
                    <CardDescription className="space-y-2 mt-2">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span>{new Date(event.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span>{event.location}</span>
                      </div>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{event.description}</p>
                    <Button variant="outline" className="w-full">View Recording</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Events;