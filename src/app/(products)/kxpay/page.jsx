import { notFound } from "next/navigation";
import { products } from "@/data/products";
import ProductStub from "@/components/products/ProductStub";

export const metadata = {
  title: "KxPay — In development",
  description:
    "KxPay connects payments with sales and invoices. In development.",
  alternates: { canonical: "/kxpay" },
};

export default function Page() {
  const product = products.find((p) => p.slug === "kxpay");
  if (!product) notFound();
  return <ProductStub product={product} />;
}