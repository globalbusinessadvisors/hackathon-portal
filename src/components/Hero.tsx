import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 bg-primary-light/30 text-neutral">
      <div className="space-y-8 text-center animate-fade-up">
        <div className="logo-container">
          <img 
            src="/lovable-uploads/3e6da3d8-c2eb-4fd0-ba21-01d867dce377.png" 
            alt="AI Hackerspace Logo" 
            className="w-full h-full object-contain drop-shadow-xl"
          />
        </div>
        <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm">
          <p className="text-sm font-medium text-primary">
            Welcome to AI Hackerspace
          </p>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-primary">
          Where Innovation Meets
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary ml-2">
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
          >
            Join Next Event
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-primary text-primary hover:bg-primary/10 hover-scale"
          >
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
};