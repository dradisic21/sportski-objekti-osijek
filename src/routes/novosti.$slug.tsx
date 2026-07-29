import {
  createFileRoute,
  notFound,
  Link,
  useRouter,
} from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, Calendar, Clock } from "lucide-react";

import { Reveal, SplitWords } from "@/components/ui-custom/Reveal";
import { NewsNotFound } from "@/components/errors/NewsNotFound";
import {
  getPublicNewsBySlug,
  listRelatedPublicNews,
  type PublicNewsPost,
} from "@/lib/repositories/publicNewsRepository";

export const Route = createFileRoute("/novosti/$slug")({
  loader: async ({ params }) => {
    const post = await getPublicNewsBySlug(params.slug);

    if (!post) {
      throw notFound();
    }

    let related: PublicNewsPost[] = [];

    try {
      related = await listRelatedPublicNews(post, 3);
    } catch (error) {
      console.error(
        `Učitavanje povezanih novosti za "${post.slug}" nije uspjelo:`,
        error
      );
    }

    return {
      post,
      related,
    };
  },

  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          {
            title: "Novost nije pronađena — Športski objekti Osijek",
          },
          {
            name: "robots",
            content: "noindex",
          },
        ],
      };
    }

    const post = loaderData.post;
    const url = `/novosti/${post.slug}`;
    const image = post.featuredImageUrl;

    return {
      meta: [
        {
          title: `${post.title} — Novosti · Športski objekti Osijek`,
        },
        {
          name: "description",
          content: post.excerpt,
        },
        {
          property: "og:title",
          content: post.title,
        },
        {
          property: "og:description",
          content: post.excerpt,
        },
        {
          property: "og:type",
          content: "article",
        },
        {
          property: "og:url",
          content: url,
        },

        ...(image
          ? [
              {
                property: "og:image",
                content: image,
              },
              {
                name: "twitter:image",
                content: image,
              },
            ]
          : []),

        {
          name: "twitter:card",
          content: image ? "summary_large_image" : "summary",
        },
        {
          property: "article:published_time",
          content: post.publishedAt,
        },
        {
          property: "article:modified_time",
          content: post.updatedAt,
        },
        {
          property: "article:section",
          content: post.category,
        },
      ],

      links: [
        {
          rel: "canonical",
          href: url,
        },
      ],
    };
  },

  component: NewsDetail,

  errorComponent: ({ error, reset }) => {
    const router = useRouter();

    const handleRetry = async () => {
      await router.invalidate();
      reset();
    };

    return (
      <div className="container-editorial py-40 text-center">
        <p className="text-eyebrow text-ink-muted">Greška</p>

        <h1 className="text-display mt-6 text-4xl text-ink">
          Nešto je pošlo po zlu.
        </h1>

        <p className="mt-3 text-sm text-ink-soft">{error.message}</p>

        <button
          type="button"
          onClick={handleRetry}
          className="mt-8 rounded-full border border-line px-6 py-2 text-sm text-ink transition-colors hover:border-ink"
        >
          Pokušaj ponovno
        </button>
      </div>
    );
  },

  notFoundComponent: NewsNotFound,
});

function NewsDetail() {
  const { post, related } = Route.useLoaderData();

  const heroImage = post.featuredImageUrl ?? null;

  const paragraphs = createContentParagraphs(post.content || post.excerpt);

  return (
    <>
      <section className="relative pt-24">
        <div className="relative h-[62dvh] min-h-[520px] w-full overflow-hidden">
          {heroImage ? (
            <img
              src={heroImage}
              alt={post.title}
              fetchPriority="high"
              className="absolute inset-0 h-full w-full object-cover"
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-[oklch(0.35_0.08_240)] via-[oklch(0.22_0.05_240)] to-[oklch(0.14_0.02_240)]" />
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-black/10" />

          <div className="container-editorial relative flex h-full flex-col justify-end pb-16">
            <Reveal>
              <Link
                to="/novosti"
                className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-white/80 transition-colors hover:text-white"
              >
                <ArrowLeft size={12} strokeWidth={1.5} />
                Sve novosti
              </Link>
            </Reveal>

            <motion.p
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 0.25,
              }}
              className="mt-6 font-mono text-[11px] uppercase tracking-widest text-white/70"
            >
              {post.category}
            </motion.p>

            <h1 className="text-display mt-4 max-w-6xl text-[clamp(2.25rem,6.5vw,5.5rem)] leading-[0.98] text-white">
              <SplitWords text={post.title} />
            </h1>
          </div>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="container-editorial flex flex-wrap items-center gap-x-8 gap-y-3 py-6 font-mono text-[11px] uppercase tracking-widest text-ink-muted">
          <span className="flex items-center gap-1.5">
            <Calendar size={12} strokeWidth={1.5} />

            {formatPublishedDate(post.publishedAt)}
          </span>

          <span className="flex items-center gap-1.5">
            <Clock size={12} strokeWidth={1.5} />
            {post.readingMinutes} min čitanja
          </span>

          <span>{post.category}</span>
        </div>
      </section>

      <article className="py-20 md:py-28">
        <div className="container-editorial grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-8 md:col-start-3">
            {post.excerpt && (
              <p className="text-display text-2xl leading-snug text-ink md:text-3xl">
                {post.excerpt}
              </p>
            )}

            {paragraphs.length > 0 && (
              <div className="mt-12 space-y-6 text-lg leading-relaxed text-ink-soft">
                {paragraphs.map((paragraph, index) => (
                  <p key={`${post.id}-paragraph-${index}`}>{paragraph}</p>
                ))}
              </div>
            )}

            <div className="mt-16 border-t border-line pt-8">
              <Link
                to="/novosti"
                className="inline-flex items-center gap-2 text-sm text-ink transition-colors hover:text-accent"
              >
                <ArrowLeft size={14} strokeWidth={1.5} />
                Natrag na sve novosti
              </Link>
            </div>
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section className="border-t border-line bg-surface py-20 md:py-28">
          <div className="container-editorial">
            <p className="text-eyebrow text-ink-muted">Povezano</p>

            <h2 className="text-display mt-3 text-3xl text-ink md:text-4xl">
              Još iz kategorije {post.category}
            </h2>

            <ul className="mt-10 grid grid-cols-1 gap-x-10 gap-y-12 md:grid-cols-3">
              {related.map((newsPost) => (
                <li key={newsPost.id}>
                  <Link
                    to="/novosti/$slug"
                    params={{
                      slug: newsPost.slug,
                    }}
                    className="group block cursor-pointer"
                  >
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-gradient-to-br from-[oklch(0.55_0.12_240)] via-[oklch(0.35_0.08_240)] to-[oklch(0.2_0.04_240)]">
                      {newsPost.featuredImageUrl && (
                        <img
                          src={newsPost.featuredImageUrl}
                          alt={newsPost.title}
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                        />
                      )}

                      <div className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />
                    </div>

                    <div className="mt-4 font-mono text-[11px] uppercase tracking-widest text-ink-muted">
                      {formatRelatedDate(newsPost.publishedAt)}
                      <span aria-hidden> · </span>
                      {newsPost.category}
                    </div>

                    <h3 className="text-display mt-2 text-xl text-ink transition-colors group-hover:text-accent">
                      {newsPost.title}
                    </h3>

                    <span className="mt-3 inline-flex items-center gap-1.5 text-sm text-ink-soft">
                      Pročitaj više
                      <ArrowUpRight
                        size={14}
                        strokeWidth={1.5}
                        className="transition-transform group-hover:rotate-45"
                      />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </>
  );
}

function createContentParagraphs(content: string): string[] {
  const normalizedContent = content
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<\/p>/gi, "\n\n")
    .replace(/<[^>]*>/g, "")
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&quot;/gi, '"')
    .replace(/&#39;/gi, "'")
    .trim();

  if (!normalizedContent) {
    return [];
  }

  return normalizedContent
    .split(/\n{2,}/)
    .map((paragraph) => paragraph.replace(/\s+/g, " ").trim())
    .filter(Boolean);
}

function formatPublishedDate(value: string): string {
  return new Intl.DateTimeFormat("hr-HR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(new Date(value));
}

function formatRelatedDate(value: string): string {
  return new Intl.DateTimeFormat("hr-HR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(new Date(value));
}
