import { notFound } from "next/navigation";
import { products } from "@/data/products";
import ProductStub from "@/components/products/ProductStub";

export const metadata = {
  title: "KxInvoice — In development",
  description:
    "KxInvoice creates invoices connected to the sales and work that created them. In development.",
  alternates: { canonical: "/kxinvoice" },
};

export default function Page() {
  const product = products.find((p) => p.slug === "kxinvoice");
  if (!product) notFound();
  return <ProductStub product={product} />;
}