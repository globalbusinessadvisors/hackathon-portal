import Navbar from "@/components/Navbar";
import { RecordingCard } from "@/components/recordings/RecordingCard";
import { recordings } from "@/components/recordings/RecordingsData";

const Recordings = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container py-12 animate-fade-up">
        <div className="space-y-12">
          {/* Hero Section */}
          <section className="text-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tight">AI Hackerspace Recordings</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Watch recordings of our past sessions to learn from industry experts and stay updated with the latest in AI technology.
            </p>
          </section>

          {/* Recordings Grid */}
          <section className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {recordings.map((recording) => (
                <RecordingCard key={recording.id} recording={recording} />
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Recordings;