import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Dashboard from "./pages/Dashboard";
import Events from "./pages/Events";
import Recordings from "./pages/Recordings";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import RecentSessions from "./pages/RecentSessions";
import CommunityDiscussions from "./pages/CommunityDiscussions";
import LearningResources from "./pages/LearningResources";
import SessionArchives from "./pages/SessionArchives";
import AIProjects from "./pages/AIProjects";
import HackathonIdeas from "./pages/HackathonIdeas";
import LearnMore from "./pages/LearnMore";
import Members from "./pages/Members";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/events" element={<Events />} />
          <Route path="/recordings" element={<Recordings />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/recent-sessions" element={<RecentSessions />} />
          <Route path="/community-discussions" element={<CommunityDiscussions />} />
          <Route path="/learning-resources" element={<LearningResources />} />
          <Route path="/session-archives" element={<SessionArchives />} />
          <Route path="/ai-projects" element={<AIProjects />} />
          <Route path="/hackathon-ideas" element={<HackathonIdeas />} />
          <Route path="/learn-more" element={<LearnMore />} />
          <Route path="/members" element={<Members />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;