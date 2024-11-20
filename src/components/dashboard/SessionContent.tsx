import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageSquare, Plus } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

interface Chapter {
  title: string;
  discussions: number;
}

interface Section {
  title: string;
  chapters: Chapter[];
  isExpanded?: boolean;
}

const initialSections: Section[] = [
  {
    title: "Introduction to AI Ethics",
    chapters: [
      { title: "Understanding AI Impact", discussions: 5 },
      { title: "Ethical Frameworks", discussions: 3 }
    ]
  },
  {
    title: "Machine Learning Fundamentals",
    chapters: [
      { title: "Supervised Learning", discussions: 8 },
      { title: "Neural Networks", discussions: 12 }
    ]
  }
];

export const SessionContent = () => {
  const [sections, setSections] = useState(initialSections);
  const { toast } = useToast();

  const toggleSection = (index: number) => {
    setSections(sections.map((section, i) => ({
      ...section,
      isExpanded: i === index ? !section.isExpanded : section.isExpanded
    })));
  };

  const handleDiscussion = (sectionTitle: string, chapterTitle: string) => {
    toast({
      title: "Discussion Started",
      description: `Joining discussion for ${chapterTitle} in ${sectionTitle}`,
    });
  };

  return (
    <Card>
      <CardContent className="pt-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Session Content</h2>
          <Button variant="outline" size="sm">
            <Plus className="h-4 w-4 mr-2" />
            Add section
          </Button>
        </div>
        <div className="space-y-4">
          {sections.map((section, index) => (
            <div key={index} className="space-y-2">
              <button
                onClick={() => toggleSection(index)}
                className="flex items-center justify-between w-full p-2 hover:bg-accent/50 rounded-lg"
              >
                <span>{section.title}</span>
                <span className="text-sm text-muted-foreground">
                  {section.chapters.length} chapters
                </span>
              </button>
              {section.isExpanded && (
                <div className="ml-4 space-y-2">
                  {section.chapters.map((chapter, chapterIndex) => (
                    <div
                      key={chapterIndex}
                      className="flex items-center justify-between p-2 hover:bg-accent/30 rounded-lg"
                    >
                      <span>{chapter.title}</span>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleDiscussion(section.title, chapter.title)}
                      >
                        <MessageSquare className="h-4 w-4 mr-2" />
                        {chapter.discussions}
                      </Button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};