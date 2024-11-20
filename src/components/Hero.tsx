import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="space-y-8 text-center animate-fade-up">
        <div className="inline-block px-4 py-1.5 rounded-full bg-primary/5 backdrop-blur-sm">
          <p className="text-sm font-medium text-primary">
            Welcome to AI Hackerspace
          </p>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
          Where Innovation Meets
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60 ml-2">
            Intelligence
          </span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-muted-foreground">
          Join our weekly events to explore the cutting edge of AI technology
          and connect with fellow innovators.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="hover-scale">
            Join Next Event
          </Button>
          <Button size="lg" variant="outline" className="hover-scale">
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
};