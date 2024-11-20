import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { events } from "@/components/events/EventsData";
import { generateBlogPostFromEvent } from "@/utils/blogUtils";
import { Calendar, User, Clock } from "lucide-react";
import { format, parseISO } from "date-fns";

const BlogPost = () => {
  const { id } = useParams();
  const event = events.find(e => e.id === Number(id));
  
  if (!event) {
    return (
      <div className="min-h-screen bg-primary-light/30">
        <Navbar />
        <main className="container py-8">
          <h1 className="text-2xl font-bold text-primary">Post not found</h1>
        </main>
      </div>
    );
  }

  const post = generateBlogPostFromEvent(event);
  const postDate = parseISO(post.date);

  return (
    <div className="min-h-screen bg-primary-light/30">
      <Navbar />
      <main className="container py-8">
        <article className="max-w-3xl mx-auto space-y-8">
          <header className="space-y-4">
            <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm mb-4">
              <p className="text-sm font-medium text-primary">Blog Post</p>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-primary">{post.title}</h1>
            <div className="flex flex-wrap gap-4 text-neutral">
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4 text-primary" />
                {format(postDate, 'MMMM d, yyyy')}
              </span>
              <span className="flex items-center gap-1">
                <User className="h-4 w-4 text-primary" />
                {post.author}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4 text-primary" />
                {post.readTime}
              </span>
            </div>
          </header>
          
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="lead text-neutral">{post.summary}</p>
            <p className="text-neutral">{post.content}</p>
          </div>
        </article>
      </main>
    </div>
  );
};

export default BlogPost;