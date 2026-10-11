// src/app/blog/page.jsx
import {
  getAllPosts,
  getFeatured,
  categories,
  SITE_URL,
  SITE_NAME,
} from "@/lib/blog";
import Link from "next/link";
import PostCard from "@/components/blog/PostCard";
import "./index.css";

export const metadata = {
  title: "Blog",
  description:
    "Product updates, practical guides, and engineering notes from the KXBYTE team.",
  alternates: { canonical: `${SITE_URL}/blog` },
  openGraph: {
    type: "website",
    title: `Blog · ${SITE_NAME}`,
    description:
      "Product updates, practical guides, and engineering notes from the KXBYTE team.",
    url: `${SITE_URL}/blog`,
    siteName: SITE_NAME,
  },
};

export default async function BlogIndex({ searchParams }) {
  const params = await searchParams;
  const activeCategory = params?.category ?? null;
  const activeTag = params?.tag ?? null;
  const isFiltered = Boolean(activeCategory || activeTag);

  const featured = getFeatured();
  const all = getAllPosts();

  // Apply filters
  let posts = all;
  if (activeCategory) posts = posts.filter((p) => p.category === activeCategory);
  if (activeTag) posts = posts.filter((p) => (p.tags || []).includes(activeTag));

  // Only show featured on the unfiltered view
  const showFeatured = !isFiltered && featured ? featured : null;
  const list = showFeatured
    ? posts.filter((p) => p.slug !== showFeatured.slug)
    : posts;

  // All tags across posts, for the tag filter row
  const allTags = Array.from(
    new Set(all.flatMap((p) => p.tags || []))
  ).sort();

  // Human-readable label for the active filter
  const activeCategoryName =
    categories.find((c) => c.slug === activeCategory)?.name ?? activeCategory;
  const filterLabel = activeCategory
    ? activeCategoryName
    : activeTag
      ? `#${activeTag}`
      : null;

  return (
    <main className="blog-index">
      {/* ── Header ── */}
      <header className="blog-index__header">
        <h1 className="blog-index__heading">
          The KXBYTE <span>Blog</span>
        </h1>
        <p className="blog-index__intro">
          Product updates, practical guides, and engineering notes for
          businesses running on KXBYTE.
        </p>
      </header>

      {/* ── Filters ── */}
      <nav className="blog-filters" aria-label="Filter posts">
        <ul className="blog-filters__cats">
          <li>
            <Link
              href="/blog" prefetch={false} scroll={false}
              className={`blog-filters__pill${!isFiltered ? " is-active" : ""}`}
              aria-current={!isFiltered ? "page" : undefined}
            >
              All
            </Link>
          </li>
          {categories.map((c) => (
            <li key={c.slug}>
              <Link
                href={`/blog?category=${c.slug}`} prefetch={false} scroll={false}
                className={`blog-filters__pill${activeCategory === c.slug ? " is-active" : ""}`}
                aria-current={activeCategory === c.slug ? "page" : undefined}
              >
                {c.name}
              </Link>
            </li>
          ))}
        </ul>

        {allTags.length > 0 && (
          <>
            <span className="blog-filters__divider" aria-hidden="true" />
            <ul className="blog-filters__tags">
              {allTags.map((t) => (
                <li key={t}>
                  <Link
                    href={`/blog?tag=${encodeURIComponent(t)}`} prefetch={false} scroll={false}
                    className={`blog-filters__tag${activeTag === t ? " is-active" : ""}`}
                    aria-current={activeTag === t ? "page" : undefined}
                  >
                    #{t}
                  </Link>
                </li>
              ))}
            </ul>
          </>
        )}
      </nav>

      {/* ── Result summary ── */}
      <p className="blog-summary" aria-live="polite">
        <span className="blog-summary__count">
          {posts.length} {posts.length === 1 ? "article" : "articles"}
        </span>
        {filterLabel && (
          <>
            <span className="blog-summary__in">in</span>
            <span className="blog-summary__filter">{filterLabel}</span>
            <Link href="/blog" prefetch={false} scroll={false} className="blog-summary__clear">
              Clear filter
            </Link>
          </>
        )}
      </p>

      {/* ── Featured ── */}
      {showFeatured && (
        <section className="blog-featured" aria-label="Featured post">
          <PostCard post={showFeatured} featured />
        </section>
      )}

      {/* ── Grid ── */}
      {list.length > 0 ? (
        <section className="blog-grid" aria-label="All posts">
          {list.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </section>
      ) : (
        !showFeatured && (
          <p className="blog-empty">
            No posts match this filter yet. <Link href="/blog" prefetch={false} scroll={false}>View all posts</Link>.
          </p>
        )
      )}
    </main>
  );
}