import { notFound } from "next/navigation";
import { products } from "@/data/products";
import ProductStub from "@/components/products/ProductStub";

export const metadata = {
  title: "KxWork — In development",
  description:
    "KxWork helps businesses assign work, track progress, and give management visibility across teams and branches. In development.",
  alternates: { canonical: "/kxwork" },
};

export default function Page() {
  const product = products.find((p) => p.slug === "kxwork");
  if (!product) notFound();
  return <ProductStub product={product} />;
}