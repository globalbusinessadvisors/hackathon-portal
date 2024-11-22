import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { MapPin, Briefcase } from "lucide-react";
import { Member } from "./types";

export const MemberCard = ({ member }: { member: Member }) => (
  <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-[1.02] glass-card group">
    <CardContent className="p-4 sm:p-6">
      <div className="flex flex-col gap-4">
        <div className="flex items-start gap-4">
          <Avatar className="h-12 w-12 sm:h-16 sm:w-16 ring-2 ring-primary/20 ring-offset-2 ring-offset-background shrink-0">
            <AvatarImage src={member.avatar} alt={member.name} />
            <AvatarFallback className="bg-primary-light text-primary">
              {member.name.charAt(0)}
            </AvatarFallback>
          </Avatar>
          <div className="space-y-1 min-w-0">
            <h3 className="font-semibold text-base sm:text-lg text-primary group-hover:text-primary-hover transition-colors truncate">
              {member.name}
            </h3>
            <p className="text-xs sm:text-sm text-neutral flex items-center gap-2">
              <Briefcase className="h-3 w-3 sm:h-4 sm:w-4 text-primary shrink-0" />
              <span className="truncate">{member.role}</span>
            </p>
            <p className="text-xs sm:text-sm text-neutral flex items-center gap-2">
              <MapPin className="h-3 w-3 sm:h-4 sm:w-4 text-primary shrink-0" />
              <span className="truncate">{member.location}</span>
            </p>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          {member.expertise.map((skill) => (
            <Badge 
              key={skill} 
              variant="secondary" 
              className="text-xs sm:text-sm bg-secondary/10 hover:bg-secondary/20 text-secondary-dark"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </CardContent>
  </Card>
);