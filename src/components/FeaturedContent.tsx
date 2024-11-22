import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Calendar, Video, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const FeaturedContent = () => {
  const navigate = useNavigate();

  const features = [
    {
      title: "Weekly Events",
      description: "Join our live sessions every week with industry experts",
      icon: Calendar,
      path: "/events"
    },
    {
      title: "Video Archive",
      description: "Access recordings of past events and discussions",
      icon: Video,
      path: "/recordings"
    },
    {
      title: "Community",
      description: "Connect with fellow AI enthusiasts and innovators",
      icon: Users,
      path: "/community-discussions"
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="glass-card hover-scale">
              <CardHeader>
                <feature.icon className="h-8 w-8 mb-4 text-primary" />
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
                <button 
                  onClick={() => navigate(feature.path)}
                  className="mt-4 flex items-center text-primary hover:opacity-80 transition-opacity"
                >
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};