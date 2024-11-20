import Navbar from "@/components/Navbar";
import { RecordingCard } from "@/components/recordings/RecordingCard";
import { events } from "@/components/events/EventsData";

const Recordings = () => {
  // Filter past events
  const pastEvents = events.filter((event) => event.status === "past");

  return (
    <div className="min-h-screen bg-primary-light/30">
      <Navbar />
      
      <main className="container py-12 animate-fade-up">
        <div className="space-y-12">
          {/* Hero Section */}
          <section className="text-center space-y-4">
            <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm mb-4">
              <p className="text-sm font-medium text-primary">
                Past Events Archive
              </p>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-primary">Past Event Recordings</h1>
            <p className="text-neutral max-w-2xl mx-auto">
              Watch recordings of our past AI Hackerspace sessions and stay updated with the latest developments in AI technology.
            </p>
          </section>

          {/* Recordings Grid */}
          <section className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {pastEvents.map((event) => (
                <RecordingCard
                  key={event.id}
                  recording={{
                    id: event.id,
                    title: event.title,
                    date: event.date,
                    description: event.description,
                    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder
                    thumbnailUrl: "/placeholder.svg",
                    duration: "1:00:00",
                    presenter: "AI Expert"
                  }}
                />
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Recordings;