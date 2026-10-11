// src/components/blog/PostCard.jsx
import { formatDate, getCategory } from "@/lib/blog";
import "./PostCard.css";

export default function PostCard({ post, featured = false }) {
  const category = getCategory(post.category);

  const cardImage = featured
    ? (post.cover ?? post.thumbnail)
    : (post.thumbnail ?? post.cover);

  return (
    <article className={`post-card${featured ? " post-card--featured" : ""}`}>
      <a href={`/blog/${post.slug}`} className="post-card__link">
        <div className="post-card__media">
          {cardImage?.src ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={cardImage.src}
              alt={cardImage.alt ?? post.title}
              loading="lazy"
            />
          ) : (
            <div className="post-card__placeholder" aria-hidden>
              <span>{category?.name ?? "KXBYTE"}</span>
            </div>
          )}
        </div>

        <div className="post-card__body">
          {category && <p className="post-card__kicker">{category.name}</p>}

          <h2 className="post-card__title">{post.title}</h2>

          <p className="post-card__excerpt">{post.excerpt}</p>

          <p className="post-card__meta">
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            {post.readTime && (
              <>
                <span aria-hidden> · </span>
                <span>{post.readTime} min read</span>
              </>
            )}
          </p>
        </div>
      </a>
    </article>
  );
}