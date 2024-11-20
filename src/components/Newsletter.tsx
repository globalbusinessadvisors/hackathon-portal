import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

export const Newsletter = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thanks for subscribing!",
      description: "We'll keep you updated with the latest news.",
    });
    setEmail("");
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-primary/5">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold tracking-tight mb-4">
          Stay Updated
        </h2>
        <p className="text-lg text-muted-foreground mb-8">
          Subscribe to our newsletter for weekly updates and insights.
        </p>
        <form onSubmit={handleSubmit} className="flex gap-4 max-w-md mx-auto">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="glass-card"
            required
          />
          <Button type="submit" className="hover-scale">
            Subscribe
          </Button>
        </form>
      </div>
    </section>
  );
};