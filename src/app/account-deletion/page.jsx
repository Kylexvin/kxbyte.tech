// src/app/account-deletion/page.jsx
import AccountDeletion from "@/pages/AccountDeletion";

export const metadata = {
  title: "Account Deletion Request | KXBYTE",
  description:
    "Request deletion of your KXBYTE account and associated personal data. Learn what is deleted, what is retained, and how to submit a request.",
  alternates: { canonical: "https://kxbyte.co.ke/account-deletion" },
  openGraph: {
    title: "Account Deletion Request | KXBYTE",
    description:
      "Request deletion of your KXBYTE account and associated personal data.",
    url: "https://kxbyte.co.ke/account-deletion",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Account Deletion Request | KXBYTE",
    description:
      "Request deletion of your KXBYTE account and associated personal data.",
  },
  robots: { index: true, follow: true },
};

export default function Page() {
  return <AccountDeletion />;
}