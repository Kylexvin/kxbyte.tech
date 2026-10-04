// src/app/privacy-policy/page.jsx
import PrivacyPolicy from "@/pages/PrivacyPolicy";

export const metadata = {
  title: "Privacy Policy | KXBYTE",
  description:
    "Learn how KXBYTE collects, uses, and protects your personal information. Read our Privacy Policy for full details on data handling, security, and your rights.",
  alternates: { canonical: "https://kxbyte.co.ke/privacy-policy" },
  openGraph: {
    title: "Privacy Policy | KXBYTE",
    description:
      "Learn how KXBYTE collects, uses, and protects your personal information.",
    url: "https://kxbyte.co.ke/privacy-policy",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Privacy Policy | KXBYTE",
    description:
      "Learn how KXBYTE collects, uses, and protects your personal information.",
  },
  robots: { index: true, follow: true },
};

export default function Page() {
  return <PrivacyPolicy />;
}