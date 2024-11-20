import { Event } from "@/components/events/types";

export interface BlogPost {
  id: number;
  title: string;
  date: string;
  summary: string;
  content: string;
  author: string;
  readTime: string;
}

export function generateBlogPostFromEvent(event: Event): BlogPost {
  return {
    id: event.id,
    title: `${event.title} - Event Recap`,
    date: event.date,
    summary: event.description,
    content: `Join us for an in-depth exploration of ${event.title.toLowerCase()}. This session covers essential concepts, practical applications, and real-world examples. Our expert presenter will guide you through the latest developments and best practices in this exciting field.`,
    author: "AI Hackerspace Team",
    readTime: "5 min read"
  };
}