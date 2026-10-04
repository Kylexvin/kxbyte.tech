// src/app/team/[slug]/page.jsx
import TeamMemberPage from "@/pages/TeamMemberPage";
import { team } from "@/data/teamData";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const member = team.find((m) => m.slug === slug);

  if (!member) {
    return {
      title: "Team Member Not Found | KXBYTE",
    };
  }

  return {
    title: `${member.name} — ${member.role} | KXBYTE`,
    description: member.bio
      ? member.bio.slice(0, 155)
      : `${member.name} is ${member.role} at KXBYTE.`,
    alternates: { canonical: `https://kxbyte.co.ke/team/${member.slug}` },
    openGraph: {
      title: `${member.name} — ${member.role} | KXBYTE`,
      description: member.bio ? member.bio.slice(0, 155) : `${member.name} at KXBYTE.`,
      url: `https://kxbyte.co.ke/team/${member.slug}`,
      type: "profile",
    },
    twitter: {
      card: "summary",
      title: `${member.name} — ${member.role} | KXBYTE`,
      description: member.bio ? member.bio.slice(0, 155) : `${member.name} at KXBYTE.`,
    },
  };
}

export default async function Page({ params }) {
  const { slug } = await params;

  return <TeamMemberPage slug={slug} />;
}