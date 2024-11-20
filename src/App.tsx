import Navbar from "@/components/Navbar";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { ContentHeader } from "@/components/dashboard/ContentHeader";
import { SessionContent } from "@/components/dashboard/SessionContent";
import { ParticipantsList } from "@/components/dashboard/ParticipantsList";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Code, Award } from "lucide-react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "@/pages/Index";
import Blog from "@/pages/Blog";
import BlogPost from "@/pages/BlogPost";
import Events from "@/pages/Events";
import Recordings from "@/pages/Recordings";
import Login from "@/pages/Login";
import Profile from "@/pages/Profile";
import Settings from "@/pages/Settings";
import RecentSessions from "@/pages/RecentSessions";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route path="/events" element={<Events />} />
        <Route path="/recordings" element={<Recordings />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/recent-sessions" element={<RecentSessions />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;
