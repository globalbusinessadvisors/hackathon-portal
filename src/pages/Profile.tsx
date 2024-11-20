import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UserRound, Mail, Link as LinkIcon } from "lucide-react";

export default function Profile() {
  // This would typically come from your auth/user context
  const user = {
    name: "John Doe",
    email: "john@example.com",
    role: "AI Developer",
    avatar: "/placeholder.svg",
    bio: "Passionate about AI and technology. Contributing to the future of artificial intelligence through innovative projects and collaborative development.",
    socialLinks: {
      linkedin: "https://linkedin.com/in/johndoe",
      github: "https://github.com/johndoe",
    },
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto space-y-8">
        <Card className="w-full">
          <CardHeader className="flex flex-row items-center gap-4">
            <Avatar className="h-20 w-20">
              <AvatarImage src={user.avatar} alt={user.name} />
              <AvatarFallback>
                <UserRound className="h-10 w-10" />
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <CardTitle className="text-2xl">{user.name}</CardTitle>
              <p className="text-muted-foreground">{user.role}</p>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="font-semibold mb-2">About</h3>
              <p className="text-muted-foreground">{user.bio}</p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Contact Information</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Mail className="h-4 w-4" />
                  <span>{user.email}</span>
                </div>
                {Object.entries(user.socialLinks).map(([platform, url]) => (
                  <div key={platform} className="flex items-center gap-2">
                    <LinkIcon className="h-4 w-4 text-muted-foreground" />
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      {platform.charAt(0).toUpperCase() + platform.slice(1)}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4">
              <Button variant="outline" className="w-full sm:w-auto">
                Edit Profile
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}