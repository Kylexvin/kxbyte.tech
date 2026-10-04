// src/app/service/[slug]/page.jsx
import ServicePage from "@/pages/ServicePage";

const serviceMeta = {
  "web-development": {
    title: "Web Development | KXBYTE",
    description:
      "Fast, SEO-optimized websites that actually bring you customers. Built by KXBYTE in Nairobi, Kenya.",
  },
  "mobile-apps": {
    title: "Mobile App Development | KXBYTE",
    description:
      "Put your business in your customers' pockets. Android & iOS apps built by KXBYTE, Nairobi Kenya.",
  },
  "systems-backends": {
    title: "Business Automation | KXBYTE",
    description:
      "Automate invoices, inventory, and reporting. Business systems built by KXBYTE, Nairobi Kenya.",
  },
  "ui-ux-design": {
    title: "UI & UX Design | KXBYTE",
    description:
      "Modern, trustworthy designs that turn visitors into customers. UI/UX by KXBYTE, Nairobi Kenya.",
  },
};

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const meta = serviceMeta[slug];

  if (!meta) {
    return { title: "Service Not Found | KXBYTE" };
  }

  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical: `https://kxbyte.co.ke/service/${slug}` },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `https://kxbyte.co.ke/service/${slug}`,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
    },
  };
}

export default async function Page({ params }) {
  const { slug } = await params;
  return <ServicePage slug={slug} />;
}