import Navbar from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Code, Rocket } from "lucide-react";

const AIProjects = () => {
  return (
    <div className="min-h-screen bg-primary-light/30">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-neutral">AI Projects Hub</h1>
          <p className="mt-4 text-lg text-neutral-muted">
            Explore and collaborate on cutting-edge AI projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="hover:shadow-lg transition-shadow duration-200">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-4">
                <Brain className="h-6 w-6 text-primary" />
                <h3 className="text-lg font-semibold">Machine Learning Models</h3>
              </div>
              <p className="text-neutral-muted">
                Build and experiment with various ML models and architectures
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-200">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-4">
                <Code className="h-6 w-6 text-primary" />
                <h3 className="text-lg font-semibold">NLP Applications</h3>
              </div>
              <p className="text-neutral-muted">
                Develop natural language processing applications and tools
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-200">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-4">
                <Rocket className="h-6 w-6 text-primary" />
                <h3 className="text-lg font-semibold">AI Innovations</h3>
              </div>
              <p className="text-neutral-muted">
                Explore innovative AI solutions and emerging technologies
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AIProjects;