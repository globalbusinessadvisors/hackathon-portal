import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Participant {
  name: string;
  role: string;
  avatar?: string;
}

const participants: Participant[] = [
  { name: "Alex Chen", role: "AI Researcher" },
  { name: "Sarah Johnson", role: "ML Engineer" },
  { name: "David Kim", role: "Data Scientist" },
  { name: "Maria Garcia", role: "AI Ethics Specialist" }
];

export const ParticipantsList = () => {
  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg">Session Participants</CardTitle>
          <Button variant="outline" size="sm">
            Join Session
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {participants.map((participant, index) => (
            <div key={index} className="flex items-center justify-between">
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
            </div>
          ))}
          <Button className="w-full" variant="outline">
            View All Participants
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};