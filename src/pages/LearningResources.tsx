import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Brain, Clock, Users } from "lucide-react";

interface Resource {
  id: number;
  title: string;
  description: string;
  category: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  duration: string;
  participants: number;
}

const resources: Resource[] = [
  {
    id: 1,
    title: "Introduction to Neural Networks",
    description: "Learn the fundamentals of neural networks and deep learning architectures.",
    category: "Deep Learning",
    difficulty: "Beginner",
    duration: "2 hours",
    participants: 156,
  },
  {
    id: 2,
    title: "Advanced Natural Language Processing",
    description: "Explore state-of-the-art NLP techniques and transformer architectures.",
    category: "NLP",
    difficulty: "Advanced",
    duration: "3 hours",
    participants: 89,
  },
  {
    id: 3,
    title: "Computer Vision Fundamentals",
    description: "Understanding image processing and object detection basics.",
    category: "Computer Vision",
    difficulty: "Intermediate",
    duration: "2.5 hours",
    participants: 124,
  },
  {
    id: 4,
    title: "Reinforcement Learning Workshop",
    description: "Hands-on practice with RL algorithms and environments.",
    category: "Reinforcement Learning",
    difficulty: "Advanced",
    duration: "4 hours",
    participants: 67,
  },
  {
    id: 5,
    title: "AI Ethics and Responsibility",
    description: "Understanding ethical considerations in AI development.",
    category: "Ethics",
    difficulty: "Beginner",
    duration: "1.5 hours",
    participants: 234,
  },
];

const getDifficultyColor = (difficulty: Resource["difficulty"]) => {
  switch (difficulty) {
    case "Beginner":
      return "bg-green-500/10 text-green-500";
    case "Intermediate":
      return "bg-yellow-500/10 text-yellow-500";
    case "Advanced":
      return "bg-red-500/10 text-red-500";
  }
};

const LearningResources = () => {
  return (
    <div className="flex h-screen bg-background">
      <main className="flex-1 overflow-hidden">
        <div className="container mx-auto py-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-neutral">Learning Resources</h1>
            <p className="text-neutral-muted mt-2">
              Explore our curated collection of AI learning materials and workshops
            </p>
          </div>

          <ScrollArea className="h-[calc(100vh-12rem)]">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {resources.map((resource) => (
                <Card key={resource.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <Badge variant="secondary">{resource.category}</Badge>
                      <Badge className={getDifficultyColor(resource.difficulty)}>
                        {resource.difficulty}
                      </Badge>
                    </div>
                    <CardTitle className="mt-4">{resource.title}</CardTitle>
                    <CardDescription>{resource.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-4 text-sm text-neutral-muted">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{resource.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        <span>{resource.participants} learners</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </ScrollArea>
        </div>
      </main>
    </div>
  );
};

export default LearningResources;