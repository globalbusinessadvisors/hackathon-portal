import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, User } from "lucide-react";
import { Recording } from "./types";
import { format, parseISO } from "date-fns";

interface RecordingCardProps {
  recording: Recording;
}

export const RecordingCard = ({ recording }: RecordingCardProps) => {
  const recordingDate = parseISO(recording.date);

  return (
    <Card className="glass-card hover-scale overflow-hidden">
      <div className="aspect-video w-full">
        <iframe
          src={recording.videoUrl}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        />
      </div>
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl">{recording.title}</CardTitle>
          <Badge variant="secondary">
            {recording.duration}
          </Badge>
        </div>
        <CardDescription className="space-y-2 mt-2">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-primary" />
            <span>{format(recordingDate, 'MMMM d, yyyy')}</span>
          </div>
          <div className="flex items-center gap-2">
            <User className="h-4 w-4 text-primary" />
            <span>{recording.presenter}</span>
          </div>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{recording.description}</p>
      </CardContent>
    </Card>
  );
};