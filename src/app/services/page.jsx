// src/app/services/page.jsx
import ServicesPage from "@/pages/ServicesPage";

export const metadata = {
  title: "Software Development Services | KXBYTE Kenya",
  description:
    "Custom software development, website design, mobile app development, AI solutions, branding, and business automation services in Kenya. Based in Nairobi, serving businesses locally and globally.",
  keywords: [
    "software development Kenya",
    "web development Kenya",
    "mobile app development Kenya",
    "custom software Kenya",
    "AI solutions Kenya",
    "business automation Kenya",
    "branding Kenya",
    "SEO Kenya",
    "website design Kenya",
    "Nairobi software company",
  ],
  alternates: { canonical: "https://kxbyte.co.ke/services" },
  openGraph: {
    title: "Software Development Services | KXBYTE Kenya",
    description:
      "Custom software development, website design, mobile app development, AI solutions, branding, and business automation services in Kenya.",
    url: "https://kxbyte.co.ke/services",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Software Development Services | KXBYTE Kenya",
    description:
      "Custom software development, website design, mobile app development, AI solutions, branding, and business automation services in Kenya.",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://kxbyte.co.ke/services",
      name: "Software Development Services | KXBYTE Kenya",
      description:
        "Custom software development, website design, mobile app development, AI solutions, branding, and business automation services in Kenya.",
      url: "https://kxbyte.co.ke/services",
    },
    {
      "@type": "ItemList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Web Development" },
        { "@type": "ListItem", position: 2, name: "Mobile App Development" },
        { "@type": "ListItem", position: 3, name: "Custom Software Development" },
        { "@type": "ListItem", position: 4, name: "AI Solutions" },
        { "@type": "ListItem", position: 5, name: "Branding" },
        { "@type": "ListItem", position: 6, name: "SEO & Digital Growth" },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://kxbyte.co.ke/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Services",
          item: "https://kxbyte.co.ke/services",
        },
      ],
    },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <ServicesPage />
    </>
  );
}