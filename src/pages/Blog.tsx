import Navbar from "@/components/Navbar";
import { BlogCard } from "@/components/blog/BlogCard";
import { events } from "@/components/events/EventsData";
import { generateBlogPostFromEvent } from "@/utils/blogUtils";

const Blog = () => {
  // Filter past events and generate blog posts
  const blogPosts = events
    .filter(event => event.status === "past")
    .map(generateBlogPostFromEvent)
    // Sort by date in descending order
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="min-h-screen bg-primary-light/30">
      <Navbar />
      <main className="container py-8">
        <div className="space-y-12">
          {/* Hero Section */}
          <section className="text-center space-y-4">
            <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm mb-4">
              <p className="text-sm font-medium text-primary">
                AI Hackerspace Blog
              </p>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-primary">Latest Blog Posts</h1>
            <p className="text-neutral max-w-2xl mx-auto">
              Stay updated with our latest events, insights, and developments in the world of AI technology.
            </p>
          </section>

          {/* Blog Posts Grid */}
          <section className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {blogPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Blog;