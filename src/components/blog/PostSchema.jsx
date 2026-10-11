// src/components/blog/PostSchema.jsx
import {
  SITE_URL,
  SITE_NAME,
  getAuthor,
  getCategory,
  toIso,
  postUrl,
} from "@/lib/blog";

export default function PostSchema({ post }) {
  const author = getAuthor(post.author);
  const category = getCategory(post.category);
  const url = postUrl(post.slug);

  const articleId = `${url}#article`;
  const authorId = `${SITE_URL}/authors/${post.author}#person`;
  const orgId = `${SITE_URL}#organization`;

  const image = post.cover?.src
    ? `${SITE_URL}${post.cover.src}`
    : `${SITE_URL}/og-default.jpg`;

  const graph = [
    {
      "@type": "Organization",
      "@id": orgId,
      name: SITE_NAME,
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.png`,
      },
    },

    {
      "@type": "Person",
      "@id": authorId,
      name: author.name,
      description: author.bio,
      url: author.url ?? `${SITE_URL}/about`,
      worksFor: { "@id": orgId },
      ...(author.sameAs && author.sameAs.length
        ? { sameAs: author.sameAs }
        : {}),
    },

    {
      "@type": "BlogPosting",
      "@id": articleId,
      headline: post.title,
      description: post.excerpt,
      url,
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
      datePublished: toIso(post.date),
      dateModified: toIso(post.updated ?? post.date),
      inLanguage: "en",
      image: {
        "@type": "ImageObject",
        url: image,
        ...(post.cover?.alt ? { caption: post.cover.alt } : {}),
      },
      author: { "@id": authorId },
      publisher: { "@id": orgId },
      ...(category ? { articleSection: category.name } : {}),
      ...(post.tags?.length ? { keywords: post.tags.join(", ") } : {}),
      ...(post.keywords?.length ? { about: post.keywords } : {}),
      ...(post.readTime ? { timeRequired: `PT${post.readTime}M` } : {}),
      isPartOf: {
        "@type": "Blog",
        "@id": `${SITE_URL}/blog#blog`,
        name: `${SITE_NAME} Blog`,
        url: `${SITE_URL}/blog`,
      },
    },

    {
      "@type": "BreadcrumbList",
      "@id": `${url}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        {
          "@type": "ListItem",
          position: 2,
          name: "Blog",
          item: `${SITE_URL}/blog`,
        },
        ...(category
          ? [
              {
                "@type": "ListItem",
                position: 3,
                name: category.name,
                item: `${SITE_URL}/blog/category/${category.slug}`,
              },
              {
                "@type": "ListItem",
                position: 4,
                name: post.title,
                item: url,
              },
            ]
          : [
              {
                "@type": "ListItem",
                position: 3,
                name: post.title,
                item: url,
              },
            ]),
      ],
    },

    ...(post.faq?.length
      ? [
          {
            "@type": "FAQPage",
            "@id": `${url}#faq`,
            mainEntity: post.faq.map((item) => ({
              "@type": "Question",
              name: item.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: item.a,
              },
            })),
          },
        ]
      : []),
  ];

  const json = {
    "@context": "https://schema.org",
    "@graph": graph,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}