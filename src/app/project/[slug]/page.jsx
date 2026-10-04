// src/app/project/[slug]/page.jsx
import ProjectPage from "@/pages/ProjectPage";
import { getProjectBySlug } from "@/data/projectsData";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Project Not Found | KXBYTE" };
  }

  return {
    title: `${project.title} | KXBYTE Projects`,
    description:
      project.intro?.summary ||
      project.solution ||
      `${project.title} — a project by KXBYTE.`,
    alternates: { canonical: `https://kxbyte.co.ke/project/${slug}` },
    openGraph: {
      title: `${project.title} | KXBYTE`,
      description: project.intro?.summary || project.solution || "",
      url: `https://kxbyte.co.ke/project/${slug}`,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | KXBYTE`,
      description: project.intro?.summary || project.solution || "",
    },
  };
}

export default async function Page({ params }) {
  const { slug } = await params;
  return <ProjectPage slug={slug} />;
}