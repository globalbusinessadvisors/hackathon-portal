import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, MapPin } from "lucide-react";
import { Event } from "./types";

interface EventCardProps {
  event: Event;
}

export const EventCard = ({ event }: EventCardProps) => {
  const isPast = event.status === "past";
  
  return (
    <Card className={`glass-card ${!isPast ? 'hover-scale' : ''}`}>
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle>{event.title}</CardTitle>
          <Badge variant={isPast ? "outline" : "secondary"}>
            {isPast ? "Past Event" : "Upcoming"}
          </Badge>
        </div>
        <CardDescription className="space-y-2 mt-2">
          <div className="flex items-center gap-2">
            <Calendar className={`h-4 w-4 ${isPast ? 'text-muted-foreground' : 'text-primary'}`} />
            <span>{new Date(event.date).toLocaleDateString()}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className={`h-4 w-4 ${isPast ? 'text-muted-foreground' : 'text-primary'}`} />
            <span>{event.time}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className={`h-4 w-4 ${isPast ? 'text-muted-foreground' : 'text-primary'}`} />
            <span>{event.location}</span>
          </div>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4">{event.description}</p>
        <Button 
          variant={isPast ? "outline" : "default"} 
          className="w-full"
        >
          {isPast ? "View Recording" : "Register Now"}
        </Button>
      </CardContent>
    </Card>
  );
};