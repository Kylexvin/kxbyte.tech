// src/app/sitemap.js
import { products } from "@/data/products";
import { team } from "@/data/teamData";
import { getAllPosts, categories } from "@/lib/blog";

export default function sitemap() {
  const base = "https://kxbyte.co.ke";
  const now = new Date();

  // ── Top-level pages ────────────────────────────────────────
  const staticRoutes = [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/products`, lastModified: now, changeFrequency: "weekly", priority: 0.85 },
    { url: `${base}/services`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/privacy-policy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/terms-of-service`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];

  // ── Product index routes ───────────────────────────────────
  const productRoutes = products.map((p) => ({
    url: `${base}/${p.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: p.status === "live" ? 0.95 : 0.6,
  }));

  // ── KxTill sub-pages ───────────────────────────────────────
  const kxtillRoutes = [
    { url: `${base}/kxtill/pricing`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/kxtill/faq`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
  ];

  // ── Team member pages ──────────────────────────────────────
  const teamRoutes = team.map((m) => ({
    url: `${base}/team/${m.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.4,
  }));

  // ── Blog index ─────────────────────────────────────────────
  const blogIndex = {
    url: `${base}/blog`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.85,
  };

  // ── Blog posts (one entry per post.json) ───────────────────
  const blogPostRoutes = getAllPosts().map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: new Date(post.updated ?? post.date),
    changeFrequency: "monthly",
    priority: post.featured ? 0.9 : 0.75,
  }));

  // ── Blog category pages ────────────────────────────────────
  const blogCategoryRoutes = categories.map((c) => ({
    url: `${base}/blog?category=${c.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.5,
  }));

  return [
    ...staticRoutes,
    ...productRoutes,
    ...kxtillRoutes,
    ...teamRoutes,
    blogIndex,
    ...blogPostRoutes,
    ...blogCategoryRoutes,
  ];
}