import { notFound } from "next/navigation";
import { products } from "@/data/products";
import ProductStub from "@/components/products/ProductStub";

export const metadata = {
  title: "KxCRM — In development",
  description:
    "KxCRM keeps customer information, interactions, and follow-ups organized in one place. In development.",
  alternates: { canonical: "/kxcrm" },
};

export default function Page() {
  const product = products.find((p) => p.slug === "kxcrm");
  if (!product) notFound();
  return <ProductStub product={product} />;
}