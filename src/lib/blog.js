// src/lib/blog.js
import fs from "node:fs";
import path from "node:path";

export const SITE_URL = "https://kxbyte.co.ke";
export const SITE_NAME = "KXBYTE";

const POSTS_DIR = path.join(process.cwd(), "src", "content", "blog");

/* ── Shared data ─────────────────────────────────────────── */

export const categories = [
  { slug: "business-technology", name: "Business Technology" },
  { slug: "business-growth", name: "Business Growth" },
  { slug: "product-updates", name: "Product updates" },
  { slug: "retail", name: "Retail" },
  { slug: "pharmacy", name: "Pharmacy" },
  { slug: "engineering", name: "Engineering" },
  { slug: "guides", name: "Guides" },
];

export const authors = {
  kxbyte: {
    name: "KXBYTE Team",
    role: "Product and engineering",
    bio: "We build connected software for businesses in Kenya.",
    url: `${SITE_URL}/about`,
    avatar: "blog/authors/kxbyte.png",
    sameAs: [      
      "https://www.linkedin.com/company/kxbyte",
      "https://instagram.com/kxbyte",
    ],
  },
};

/*
  post.json shape:

  Required:
  {
    "title":       "",
    "excerpt":     "",
    "date":        "YYYY-MM-DD",
    "category":    "pharmacy",      // must match a slug above
    "author":      "kxbyte",        // must match a key above
    "readTime":    4,               // minutes
    "draft":       false
  }

  Recommended for SEO / AI crawling:
  {
    "updated":     "YYYY-MM-DD",    // dateModified in schema
    "tags":        ["FEFO", "Expiry"],
    "keywords":    ["fefo pharmacy", "expiry tracking kenya"],
    "cover":       { "src": "/blog/<slug>/cover.jpg", "alt": "..." },
    "featured":    false,
    "product":     "kxtill",
    "toc":         [ { "id": "", "text": "", "level": 2 } ],
    "faq":         [ { "q": "", "a": "" } ]   // only if visible on page
  }
*/

/* ── Reading posts ───────────────────────────────────────── */

export const getAllPosts = () => {
  if (!fs.existsSync(POSTS_DIR)) return [];

  const posts = fs
    .readdirSync(POSTS_DIR, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => {
      const file = path.join(POSTS_DIR, entry.name, "post.json");
      if (!fs.existsSync(file)) return null;

      try {
        const data = JSON.parse(fs.readFileSync(file, "utf8"));
        return normalizePost(data, entry.name);
      } catch (err) {
        console.error(`Invalid post.json in "${entry.name}":`, err.message);
        return null;
      }
    })
    .filter((post) => post && !post.draft);

  return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
};

export const getPost = (slug) => getAllPosts().find((p) => p.slug === slug);

export const getSlugs = () => getAllPosts().map((p) => p.slug);

export const getFeatured = () => {
  const all = getAllPosts();
  return all.find((p) => p.featured) || all[0] || null;
};

export const getByCategory = (slug) =>
  slug ? getAllPosts().filter((p) => p.category === slug) : getAllPosts();

export const getByTag = (tag) =>
  tag ? getAllPosts().filter((p) => (p.tags || []).includes(tag)) : [];

export const getRelated = (post, n = 3) => {
  const others = getAllPosts().filter((p) => p.slug !== post.slug);
  const sameCategory = others.filter((p) => p.category === post.category);
  const sharedTag = others.filter(
    (p) =>
      p.category !== post.category &&
      (p.tags || []).some((t) => (post.tags || []).includes(t))
  );
  const rest = others.filter(
    (p) => !sameCategory.includes(p) && !sharedTag.includes(p)
  );
  return [...sameCategory, ...sharedTag, ...rest].slice(0, n);
};

/* ── Lookups and formatting ──────────────────────────────── */

export const getCategory = (slug) => categories.find((c) => c.slug === slug);

export const getAuthor = (key) => authors[key] || authors.kxbyte;

export const formatDate = (iso) =>
  new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });

export const toIso = (iso) => new Date(iso).toISOString();

export const postUrl = (slug) => `${SITE_URL}/blog/${slug}`;

/* ── Internal: normalize a post ──────────────────────────── */

function normalizePost(data, slug) {
  const url = postUrl(slug);
  return {
    // identity
    slug,
    url,

    // core
    title: data.title ?? "Untitled",
    excerpt: data.excerpt ?? "",
    date: data.date ?? new Date().toISOString().slice(0, 10),
    updated: data.updated ?? data.date ?? null,

    // taxonomy
    category: data.category ?? null,
    tags: Array.isArray(data.tags) ? data.tags : [],
    keywords: Array.isArray(data.keywords) ? data.keywords : [],

    // authorship
    author: data.author ?? "kxbyte",

    // presentation
    readTime: typeof data.readTime === "number" ? data.readTime : null,
    cover: data.cover ?? null,
    featured: Boolean(data.featured),
    product: data.product ?? null,
    toc: Array.isArray(data.toc) ? data.toc : [],
    faq: Array.isArray(data.faq) ? data.faq : [],

    // control
    draft: Boolean(data.draft),

    // passthrough for anything else you add later
    ...data,
  };
}