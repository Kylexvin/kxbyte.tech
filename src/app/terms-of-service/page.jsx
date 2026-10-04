// src/app/terms-of-service/page.jsx
import TermsOfService from "@/pages/TermsOfService";

export const metadata = {
  title: "Terms of Service | KXBYTE",
  description:
    "Read the KXBYTE Terms of Service covering project engagement, payments, intellectual property, confidentiality, liability, and client responsibilities.",
  alternates: { canonical: "https://kxbyte.co.ke/terms-of-service" },
  openGraph: {
    title: "Terms of Service | KXBYTE",
    description:
      "Read the KXBYTE Terms of Service covering project engagement, payments, intellectual property, confidentiality, liability, and client responsibilities.",
    url: "https://kxbyte.co.ke/terms-of-service",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Terms of Service | KXBYTE",
    description:
      "Read the KXBYTE Terms of Service covering project engagement, payments, intellectual property, confidentiality, liability, and client responsibilities.",
  },
  robots: { index: true, follow: true },
};

export default function Page() {
  return <TermsOfService />;
}