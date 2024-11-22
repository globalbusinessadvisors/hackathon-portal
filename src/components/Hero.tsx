import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { events } from "./events/EventsData";
import { useToast } from "./ui/use-toast";

export const Hero = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const handleJoinEvent = () => {
    const upcomingEvent = events.find(event => event.status === "upcoming");
    
    if (upcomingEvent) {
      navigate("/events");
      toast({
        title: "Redirecting to events page",
        description: `Join ${upcomingEvent.title}`,
      });
    } else {
      toast({
        title: "No upcoming events",
        description: "Please check back later for new events",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 bg-primary-light/30 text-neutral">
      <div className="space-y-8 text-center animate-fade-up">
        <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm">
          <p className="text-sm font-medium text-primary">
            Welcome to AI Hackerspace
          </p>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-primary">
          Where Innovation Meets
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary ml-4">
            Intelligence
          </span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-neutral">
          Join our weekly events to explore the cutting edge of AI technology
          and connect with fellow innovators.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary-hover text-white hover:text-white hover-scale"
            onClick={handleJoinEvent}
          >
            Join Next Event
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-primary text-primary hover:bg-primary/10 hover-scale"
            onClick={() => navigate("/learn-more")}
          >
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
};