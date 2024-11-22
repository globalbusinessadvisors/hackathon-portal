import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Member } from "./types";

export const MemberCard = ({ member }: { member: Member }) => (
  <Card className="overflow-hidden hover:shadow-lg transition-shadow glass-card">
    <CardContent className="p-6">
      <div className="flex items-start gap-4">
        <Avatar className="h-16 w-16">
          <AvatarImage src={member.avatar} alt={member.name} />
          <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className="flex-1 space-y-2">
          <h3 className="font-semibold text-lg text-primary">{member.name}</h3>
          <p className="text-sm text-neutral-muted">{member.role}</p>
          <p className="text-sm text-neutral-muted">{member.location}</p>
          <div className="flex flex-wrap gap-2">
            {member.expertise.map((skill) => (
              <Badge 
                key={skill} 
                variant="secondary" 
                className="text-xs bg-secondary text-white hover:bg-secondary/80"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
);