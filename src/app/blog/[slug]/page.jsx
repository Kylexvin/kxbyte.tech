// src/app/blog/[slug]/page.jsx
import { notFound } from "next/navigation";
import {
  getPost,
  getSlugs,
  getAuthor,
  getCategory,
  formatDate,
  toIso,
  postUrl,
  SITE_URL,
  SITE_NAME,
} from "@/lib/blog";
import { getBody } from "@/content/blog/registry";
import PostSchema from "@/components/blog/PostSchema";
import "./shell.css";

export function generateStaticParams() {
  return getSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};

  const url = postUrl(slug);
  const ogImage = post.cover?.src
    ? `${SITE_URL}${post.cover.src}`
    : `${SITE_URL}/og-default.jpg`;

  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.keywords,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      url,
      siteName: SITE_NAME,
      publishedTime: toIso(post.date),
      modifiedTime: toIso(post.updated ?? post.date),
      authors: [getAuthor(post.author).name],
      tags: post.tags,
      images: [{ url: ogImage, alt: post.cover?.alt ?? post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [ogImage],
    },
  };
}

export default async function Page({ params }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const Body = getBody(slug);
  if (!Body) {
    console.warn(`No Post.jsx registered for slug "${slug}" in registry.js`);
  }

  const author = getAuthor(post.author);
  const category = getCategory(post.category);
  const initials = author.name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2);

  const hasCover = Boolean(post.cover?.src);
  const hasToc = (post.toc?.length ?? 0) > 0;
  const showUpdated = post.updated && post.updated !== post.date;

  /* Reused pieces ------------------------------------------------ */

  const breadcrumb = (onDark) => (
    <nav
      className={`post-breadcrumb${onDark ? " post-breadcrumb--on-dark" : ""}`}
      aria-label="Breadcrumb"
    >
      <a href="/">Home</a>
      <span aria-hidden="true">/</span>
      <a href="/blog">Blog</a>
      {category && (
        <>
          <span aria-hidden="true">/</span>
          <a href={`/blog?category=${category.slug}`}>{category.name}</a>
        </>
      )}
    </nav>
  );

  const categoryPill = category && (
    <a href={`/blog?category=${category.slug}`} className="post-category">
      {category.name}
    </a>
  );

  const meta = (
    <div className="post-meta">
      <div className="post-meta__author">
        <span className="post-avatar" aria-hidden="true">
          {initials}
        </span>
        <span className="post-meta__who">
          <span className="post-meta__name">{author.name}</span>
          {author.role && <span className="post-meta__role">{author.role}</span>}
        </span>
      </div>

      <dl className="post-meta__facts">
        <div>
          <dt>Published</dt>
          <dd>
            <time dateTime={toIso(post.date)}>{formatDate(post.date)}</time>
          </dd>
        </div>
        {showUpdated && (
          <div>
            <dt>Updated</dt>
            <dd>
              <time dateTime={toIso(post.updated)}>
                {formatDate(post.updated)}
              </time>
            </dd>
          </div>
        )}
        {post.readTime && (
          <div>
            <dt>Read time</dt>
            <dd>{post.readTime} min</dd>
          </div>
        )}
      </dl>
    </div>
  );

  return (
    <main className={`post-shell${hasCover ? " has-cover" : ""}`}>
      <PostSchema post={post} />

      {/* Reading progress (CSS scroll-driven; hidden where unsupported) */}
      <div className="post-progress" aria-hidden="true" />

      {hasCover ? (
        /* ── Image hero ── */
        <header className="post-hero">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="post-hero__img"
            src={post.cover.src}
            alt={post.cover.alt ?? ""}
            fetchPriority="high"
          />
          <div className="post-hero__shade" aria-hidden="true" />

          <div className="post-hero__inner post-wrap">
            {breadcrumb(true)}

            <div className="post-hero__text">
              {categoryPill}
              <h1 className="post-title post-title--hero">{post.title}</h1>
              <p className="post-excerpt post-excerpt--hero">{post.excerpt}</p>
            </div>
          </div>
        </header>
      ) : (
        /* ── Text-only header (no cover) ── */
        <header className="post-header post-wrap">
          {breadcrumb(false)}
          {categoryPill}
          <h1 className="post-title">{post.title}</h1>
          <p className="post-excerpt">{post.excerpt}</p>
        </header>
      )}

      <div className="post-wrap post-meta-wrap">{meta}</div>

      {/* Content: sticky contents list + article */}
      <div
        className={`post-wrap post-layout${hasToc ? "" : " post-layout--solo"}`}
      >
        {hasToc && (
          <aside className="post-toc">
            <nav aria-label="On this page">
              <p className="post-toc__title">On this page</p>
              <ol>
                {post.toc.map((item) => (
                  <li key={item.id}>
                    <a href={`#${item.id}`}>{item.text}</a>
                  </li>
                ))}
              </ol>
            </nav>
          </aside>
        )}

        <article className="post-article">
          <div className="post-body-host">
            {Body ? (
              <Body />
            ) : (
              <p>
                <em>Post body not registered.</em>
              </p>
            )}
          </div>

          {post.tags?.length > 0 && (
            <ul className="post-tags" aria-label="Tags">
              {post.tags.map((t) => (
                <li key={t}>
                  <a href={`/blog?tag=${encodeURIComponent(t)}`}>#{t}</a>
                </li>
              ))}
            </ul>
          )}

          {/* Author */}
          <footer className="post-footer">
            <span className="post-avatar post-avatar--lg" aria-hidden="true">
              {initials}
            </span>
            <div className="post-footer__body">
              <p className="post-footer__label">Written by</p>
              <p className="post-footer__name">{author.name}</p>
              {author.role && <p className="post-footer__role">{author.role}</p>}
              {author.bio && <p className="post-footer__bio">{author.bio}</p>}
            </div>
          </footer>

          <a href="/blog" className="post-back">
            Back to all posts
          </a>
        </article>
      </div>
    </main>
  );
}

/*
  Notes
  - <img> not next/image: deliberate for now. next/image needs width/height or
    fill config; revisit later for automatic optimization.
  - `await params` is required in Next.js 15. On Next 14 use
    `const { slug } = params;` in both functions.
  - postUrl is used for the canonical, consistent with sitemap and JSON-LD.
  - Category links point at /blog?category=slug to match the blog index filters.
*/