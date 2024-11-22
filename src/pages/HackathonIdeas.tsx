import Navbar from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Calendar, Trophy, Lightbulb } from "lucide-react";

const HackathonIdeas = () => {
  return (
    <div className="min-h-screen bg-primary-light/30">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-neutral">Hackathon Ideas</h1>
          <p className="mt-4 text-lg text-neutral-muted">
            Explore and contribute to exciting AI hackathon project ideas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="hover:shadow-lg transition-shadow duration-200">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="h-6 w-6 text-primary" />
                <h3 className="text-lg font-semibold">Upcoming Hackathons</h3>
              </div>
              <p className="text-neutral-muted">
                Check out our schedule of upcoming AI hackathon events
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-200">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-4">
                <Lightbulb className="h-6 w-6 text-primary" />
                <h3 className="text-lg font-semibold">Project Ideas</h3>
              </div>
              <p className="text-neutral-muted">
                Browse through innovative AI project ideas for your next hackathon
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-200">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-4">
                <Users className="h-6 w-6 text-primary" />
                <h3 className="text-lg font-semibold">Team Formation</h3>
              </div>
              <p className="text-neutral-muted">
                Find teammates and form groups for upcoming hackathons
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-200">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-4">
                <Trophy className="h-6 w-6 text-primary" />
                <h3 className="text-lg font-semibold">Past Winners</h3>
              </div>
              <p className="text-neutral-muted">
                Get inspired by previous hackathon winning projects
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default HackathonIdeas;