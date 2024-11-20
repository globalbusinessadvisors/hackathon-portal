import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

interface Participant {
  name: string;
  role: string;
  avatar?: string;
  status: "online" | "offline";
}

const participants: Participant[] = [
  { name: "Alex Chen", role: "AI Researcher", status: "online" },
  { name: "Sarah Johnson", role: "ML Engineer", status: "online" },
  { name: "David Kim", role: "Data Scientist", status: "offline" },
  { name: "Maria Garcia", role: "AI Ethics Specialist", status: "online" }
];

export const ParticipantsList = () => {
  return (
    <Card className="glass-card">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg font-semibold">Session Participants</CardTitle>
          <Button variant="outline" size="sm" className="hover-scale">
            Join Session
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {participants.map((participant, index) => (
            <div key={index} className="flex items-center justify-between hover:bg-accent/50 p-2 rounded-lg transition-colors">
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src={participant.avatar} />
                  <AvatarFallback>{participant.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">{participant.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {participant.role}
                  </div>
                </div>
              </div>
              <Badge variant={participant.status === "online" ? "default" : "secondary"}>
                {participant.status}
              </Badge>
            </div>
          ))}
          <Button className="w-full hover-scale" variant="outline">
            View All Participants
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};