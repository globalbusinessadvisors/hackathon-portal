import { Hero } from "@/components/Hero";
import { FeaturedContent } from "@/components/FeaturedContent";
import { Newsletter } from "@/components/Newsletter";
import { Footer } from "@/components/Footer";
import Navbar from "@/components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <FeaturedContent />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;