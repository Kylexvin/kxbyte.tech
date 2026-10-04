// src/app/sitemap.js
import { products } from "@/data/products";
import { team } from "@/data/teamData";

export default function sitemap() {
  const base = "https://kxbyte.co.ke";
  const now = new Date();

  // ── Top-level pages ────────────────────────────────────────
  const staticRoutes = [
    {
      url: base,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${base}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/products`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${base}/services`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${base}/privacy-policy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${base}/terms-of-service`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  // ── Product index routes (top-level slugs) ─────────────────
  const productRoutes = products.map((p) => ({
    url: `${base}/${p.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: p.status === "live" ? 0.95 : 0.6,
  }));

  // ── KxTill sub-pages ───────────────────────────────────────
  const kxtillRoutes = [
    {
      url: `${base}/kxtill/pricing`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${base}/kxtill/faq`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    },
  ];

  // ── Team member pages ──────────────────────────────────────
  const teamRoutes = team.map((m) => ({
    url: `${base}/team/${m.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.4,
  }));

  return [
    ...staticRoutes,
    ...productRoutes,
    ...kxtillRoutes,
    ...teamRoutes,
  ];
}