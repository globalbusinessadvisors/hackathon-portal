import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, User } from "lucide-react";
import { BlogPost } from "@/utils/blogUtils";
import { Link } from "react-router-dom";
import { format, parseISO } from "date-fns";

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  const postDate = parseISO(post.date);

  return (
    <Link to={`/blog/${post.id}`} className="block hover-scale">
      <Card className="h-full glass-card">
        <CardHeader>
          <CardTitle className="line-clamp-2 text-primary">{post.title}</CardTitle>
          <CardDescription className="flex flex-wrap gap-4">
            <span className="flex items-center gap-1 text-neutral">
              <Calendar className="h-4 w-4 text-primary" />
              {format(postDate, 'MMMM d, yyyy')}
            </span>
            <span className="flex items-center gap-1 text-neutral">
              <User className="h-4 w-4 text-primary" />
              {post.author}
            </span>
            <span className="flex items-center gap-1 text-neutral">
              <Clock className="h-4 w-4 text-primary" />
              {post.readTime}
            </span>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-neutral-muted line-clamp-3">{post.summary}</p>
        </CardContent>
      </Card>
    </Link>
  );
}