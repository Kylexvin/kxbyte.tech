// src/app/layout.jsx
import { Orbitron, DM_Sans } from "next/font/google";
import "../styles/index.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  variable: "--font-orbitron",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

const SITE_URL = "https://kxbyte.co.ke";
const LOGO_URL =
  "https://res.cloudinary.com/dkahrnjrn/image/upload/v1788695499/logo.png";
const OG_IMAGE =
  "https://res.cloudinary.com/dlyfxympd/image/upload/v1782850061/WhatsApp_Image_2026-06-30_at_23.05.26_ci33jn.jpg";
const EMAIL = "info@kxbyte.co.ke";
const PHONE = "+254768610613";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "KXBYTE — Business software for how companies actually operate",
    template: "%s | KXBYTE",
  },
  description:
    "KXBYTE builds connected software for modern businesses. KxTill for retail point of sale, plus KxWork, KxCRM, KxInvoice, and KxPay — connected through KXBYTE Suite.",
  keywords: [
    "KXBYTE",
    "KxTill",
    "point of sale Kenya",
    "POS system Kenya",
    "retail software",
    "inventory management software",
    "business software Kenya",
    "offline POS",
    "KXBYTE Suite",
  ],
  authors: [{ name: "KXBYTE", url: SITE_URL }],
  creator: "KXBYTE",
  publisher: "KXBYTE",
  applicationName: "KXBYTE",
  category: "Business Software",
  alternates: { canonical: SITE_URL },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: "KXBYTE — Business software for how companies actually operate",
    description:
      "Connected software for modern businesses. Sales, inventory, invoicing, customers, workforce — in one platform.",
    siteName: "KXBYTE",
    locale: "en_KE",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "KXBYTE — Business software",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KXBYTE — Business software for how companies actually operate",
    description:
      "Connected software for modern businesses. Sales, inventory, invoicing, customers, workforce — in one platform.",
    images: [OG_IMAGE],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#ff5c1a",
};

/* ── Organization ─────────────────────────────────────────── */
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "KXBYTE",
  legalName: "KXBYTE",
  url: SITE_URL,
  logo: LOGO_URL,
  image: LOGO_URL,
  description:
    "KXBYTE builds connected software products for modern businesses — point of sale, invoicing, customer management, workforce, and business operations, connected through KXBYTE Suite.",
  foundingDate: "2025",
  areaServed: {
    "@type": "Country",
    name: "Kenya",
  },
  knowsAbout: [
    "Point of sale systems",
    "Retail software",
    "Business operations software",
    "Invoicing software",
    "Customer relationship management",
    "Workforce management",
    "Offline-first software",
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: EMAIL,
      telephone: PHONE,
      availableLanguage: ["English", "Swahili"],
      areaServed: "KE",
    },
  ],
  sameAs: [
    "https://suite.kxbyte.co.ke",
    "https://kxtill.kxbyte.co.ke",
    "https://instagram.com/kxbyte",
    "https://www.linkedin.com/company/kxbyte",
    "https://github.com/theKxbyte",
    "https://www.tiktok.com/@kxbyte.tech",
  ],
};

/* ── WebSite ──────────────────────────────────────────────── */
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: "KXBYTE",
  url: SITE_URL,
  publisher: { "@id": `${SITE_URL}/#organization` },
  inLanguage: "en",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${orbitron.variable} ${dmSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body>
        <noscript>
          <strong>KXBYTE</strong>
          <br />
          Business software for how companies actually operate. KxTill for
          retail point of sale, plus invoicing, customer management, and
          workforce tools connected through KXBYTE Suite.
        </noscript>
        <div className="App">
          <Navbar />
          {children}
          <Footer />
          <WhatsAppFab />
        </div>
      </body>
    </html>
  );
}