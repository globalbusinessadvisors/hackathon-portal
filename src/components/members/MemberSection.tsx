import { MemberCard } from "./MemberCard";
import { Member } from "./types";

interface MemberSectionProps {
  title: string;
  description: string;
  members: Member[];
}

export const MemberSection = ({ title, description, members }: MemberSectionProps) => (
  <section className="space-y-6">
    <div>
      <h2 className="text-2xl font-semibold text-primary">{title}</h2>
      <p className="text-neutral-muted mt-1">{description}</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {members.map((member) => (
        <MemberCard key={member.id} member={member} />
      ))}
    </div>
  </section>
);