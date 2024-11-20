import Navbar from "@/components/Navbar";
import { EventCard } from "@/components/events/EventCard";
import { events } from "@/components/events/EventsData";

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
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </section>

          {/* Past Events */}
          <section className="space-y-6">
            <h2 className="text-2xl font-semibold tracking-tight">Past Events</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {pastEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Events;