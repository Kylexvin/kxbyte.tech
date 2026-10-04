// src/app/about/page.jsx
import AboutPage from "@/pages/AboutPage";

export const metadata = {
  title: "KXBYTE | Software Development Company in Kenya",
  description:
    "KXBYTE is a Kenyan software development company specializing in website development, mobile apps, AI solutions, branding, SEO, and custom business software. Based in Nairobi, serving clients locally and globally.",
  keywords: [
    "software company Kenya",
    "software development Kenya",
    "custom software development Kenya",
    "web development Kenya",
    "website design Kenya",
    "mobile app development Kenya",
    "AI solutions Kenya",
    "business automation Kenya",
    "branding Kenya",
    "SEO Kenya",
    "ERP systems Kenya",
    "inventory management Kenya",
    "POS systems Kenya",
    "Nairobi software company",
  ],
  alternates: { canonical: "https://kxbyte.co.ke/about" },
  openGraph: {
    title: "KXBYTE | Software Development Company in Kenya",
    description:
      "KXBYTE is a software development company based in Nairobi, Kenya, specializing in custom software development, website design, mobile app development, AI solutions, branding, and business automation.",
    url: "https://kxbyte.co.ke/about",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KXBYTE | Software Development Company in Kenya",
    description:
      "KXBYTE is a software development company based in Nairobi, Kenya, specializing in custom software development, website design, mobile app development, AI solutions, branding, and business automation.",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://kxbyte.co.ke/#organization",
      name: "KXBYTE",
      url: "https://kxbyte.co.ke",
      logo: "https://kxbyte.co.ke/logo.png",
      image: "https://kxbyte.co.ke/logo.png",
      description:
        "KXBYTE is a Kenyan software development company specializing in custom software development, website design, mobile application development, AI solutions, branding, SEO, and business automation.",
      foundingDate: "2025-08",
      founder: { "@id": "https://kxbyte.co.ke/#founder" },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Nairobi",
        addressCountry: "KE",
      },
      areaServed: [
        { "@type": "Country", name: "Kenya" },
        { "@type": "Place", name: "Worldwide" },
      ],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "Sales",
        telephone: "+2547XXXXXXXX",
        email: "hello@kxbyte.co.ke",
        availableLanguage: ["English"],
      },
      sameAs: [
        "https://linkedin.com/company/kxbyte",
        "https://github.com/kxbyte",
        "https://x.com/kxbyte",
        "https://facebook.com/kxbyte",
        "https://instagram.com/kxbyte",
      ],
      knowsAbout: [
        "Software Development",
        "Custom Software Development",
        "Website Development",
        "Web Design",
        "Mobile Application Development",
        "Artificial Intelligence",
        "Business Automation",
        "UI/UX Design",
        "Brand Identity",
        "Search Engine Optimization",
        "Cloud Computing",
        "API Development",
        "Enterprise Software",
        "ERP Systems",
        "POS Systems",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "KXBYTE Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Custom Software Development",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Website Design & Development",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Mobile Application Development",
            },
          },
          {
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: "AI Solutions" },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Branding & Graphic Design",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "SEO & Digital Marketing",
            },
          },
        ],
      },
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://kxbyte.co.ke/#localbusiness",
      name: "KXBYTE",
      url: "https://kxbyte.co.ke",
      image: "https://kxbyte.co.ke/logo.png",
      description:
        "Custom software development company based in Nairobi, Kenya.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Nairobi",
        addressCountry: "KE",
      },
      telephone: "+2547XXXXXXXX",
      email: "hello@kxbyte.co.ke",
      priceRange: "$$",
    },
    {
      "@type": "Person",
      "@id": "https://kxbyte.co.ke/#founder",
      name: "Kylex Vinny",
      jobTitle: "Founder & CEO",
      worksFor: { "@id": "https://kxbyte.co.ke/#organization" },
    },
    {
      "@type": "WebSite",
      "@id": "https://kxbyte.co.ke/#website",
      url: "https://kxbyte.co.ke",
      name: "KXBYTE",
      description:
        "Software development company in Kenya providing websites, mobile apps, AI solutions, branding, SEO, and custom business software.",
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://kxbyte.co.ke/#breadcrumb",
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
          name: "About",
          item: "https://kxbyte.co.ke/about",
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
      <AboutPage />
    </>
  );
}