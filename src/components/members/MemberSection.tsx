import { MemberCard } from "./MemberCard";
import { Member } from "./types";

interface MemberSectionProps {
  title: string;
  description: string;
  members: Member[];
}

export const MemberSection = ({ title, description, members }: MemberSectionProps) => (
  <section className="relative animate-fade-up">
    <div className="mb-8">
      <h2 className="text-3xl font-bold text-primary mb-2">{title}</h2>
      <p className="text-neutral-muted text-lg">{description}</p>
    </div>
    {members.length > 0 ? (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {members.map((member) => (
          <MemberCard key={member.id} member={member} />
        ))}
      </div>
    ) : (
      <div className="text-center py-8 bg-white/50 backdrop-blur-sm rounded-lg border border-primary/10">
        <p className="text-neutral-muted">No members found matching your search criteria.</p>
      </div>
    )}
  </section>
);