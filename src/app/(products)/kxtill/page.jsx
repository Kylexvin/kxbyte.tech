// src/app/(products)/kxtill/page.jsx
import { kxtill as product } from "@/data/kxtill";

import Hero from "@/components/products/kxtill/Hero";
import Features from "@/components/products/kxtill/Features";
import OfflineNote from "@/components/products/kxtill/OfflineNote";
import SeeItInAction from "@/components/products/kxtill/SeeItInAction";
import HowItWorks from "@/components/products/kxtill/HowItWorks";
import SuiteNote from "@/components/products/kxtill/SuiteNote";
import FooterCta from "@/components/products/kxtill/FooterCta";

const SITE_URL = "https://kxbyte.co.ke";

export const metadata = {
  title: product.seo.title,
  description: product.seo.description,
  keywords: product.seo.keywords,
  alternates: { canonical: "/kxtill" },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/kxtill`,
    title: product.seo.title,
    description: product.seo.description,
    siteName: "KXBYTE",
    images: [
      {
        url: "https://res.cloudinary.com/dlyfxympd/image/upload/v1782850061/WhatsApp_Image_2026-06-30_at_23.05.26_ci33jn.jpg",
        width: 1200,
        height: 630,
        alt: "KxTill",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: product.seo.title,
    description: product.seo.description,
  },
};

export default function KxTillPage() {
  const productUrl = `${SITE_URL}/kxtill`;

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: product.name,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description: product.hero.description,
    url: productUrl,
    publisher: { "@id": `${SITE_URL}/#organization` },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "KES",
      availability: "https://schema.org/InStock",
      url: product.url,
    },
    featureList: product.featureGroups.map((g) => g.title),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "Products",
        item: `${SITE_URL}/products`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: product.name,
        item: productUrl,
      },
    ],
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Hero product={product} />
      <Features product={product} />
      <SeeItInAction product={product} />
      <OfflineNote product={product} />
      <HowItWorks product={product} />
      {/* <FooterCta product={product} /> */}
      <SuiteNote product={product} />
    </main>
  );
}