import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { MapPin, Briefcase } from "lucide-react";
import { Member } from "./types";

export const MemberCard = ({ member }: { member: Member }) => (
  <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-[1.02] glass-card group">
    <CardContent className="p-6">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <Avatar className="h-16 w-16 ring-2 ring-primary/20 ring-offset-2 ring-offset-background">
            <AvatarImage src={member.avatar} alt={member.name} />
            <AvatarFallback className="bg-primary-light text-primary">
              {member.name.charAt(0)}
            </AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h3 className="font-semibold text-lg text-primary group-hover:text-primary-hover transition-colors">
              {member.name}
            </h3>
            <p className="text-sm text-neutral flex items-center gap-2">
              <Briefcase className="h-4 w-4 text-primary" />
              {member.role}
            </p>
            <p className="text-sm text-neutral flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" />
              {member.location}
            </p>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {member.expertise.map((skill) => (
            <Badge 
              key={skill} 
              variant="secondary" 
              className="bg-secondary/10 hover:bg-secondary/20 text-secondary-dark"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </CardContent>
  </Card>
);