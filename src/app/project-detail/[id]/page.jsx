// src/app/project-detail/[id]/page.jsx
import ProjectDetail from "@/pages/ProjectDetail";
import { projectsData } from "@/data/projectsData";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const project = projectsData.find((p) => p.id === parseInt(id));

  if (!project) {
    return { title: "Project Not Found | KXBYTE" };
  }

  return {
    title: `${project.title} | KXBYTE Case Study`,
    description:
      project.solution ||
      project.problem ||
      `${project.title} — a case study by KXBYTE.`,
    alternates: { canonical: `https://kxbyte.co.ke/project-detail/${id}` },
    openGraph: {
      title: `${project.title} | KXBYTE`,
      description: project.solution || project.problem || "",
      url: `https://kxbyte.co.ke/project-detail/${id}`,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | KXBYTE`,
      description: project.solution || project.problem || "",
    },
  };
}

export default async function Page({ params }) {
  const { id } = await params;
  return <ProjectDetail id={id} />;
}