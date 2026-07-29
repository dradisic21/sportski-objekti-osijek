import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  AlertCircle,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";

import { SplitWords } from "@/components/ui-custom/Reveal";
import {
  listPublicNews,
  type PublicNewsPost,
} from "@/lib/repositories/publicNewsRepository";

export function NewsSection() {
  const [newsList, setNewsList] = useState<PublicNewsPost[]>([]);

  useEffect(() => {
    let mounted = true;

    async function loadNews() {
      try {
        const news = await listPublicNews();

        if (mounted) {
          setNewsList(news.slice(0, 4));
        }
      } catch (error) {
        console.error("Učitavanje novosti nije uspjelo:", error);
      }
    }

    void loadNews();

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#0B1220] py-24 text-white md:py-40">
      <div
        aria-hidden
        className="pointer-events-none absolute right-[-10%] top-0 h-[500px] w-[500px] rounded-full bg-[#2563EB]/25 blur-[140px]"
      />

      <div className="container-editorial relative">
        <div className="grid grid-cols-12 items-end gap-6">
          <div className="col-span-12 md:col-span-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 px-3 py-1.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#60A5FA] opacity-75" />

                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#60A5FA]" />
              </span>

              <span className="font-mono text-[10px] uppercase tracking-widest text-white/70">
                Aktualno
              </span>
            </div>

            <h2 className="text-display mt-6 text-5xl md:text-7xl">
              <SplitWords text="Važne" />

              <br />

              <em className="text-serif text-white/70">
                <SplitWords
                  text="obavijesti."
                  delay={0.2}
                />
              </em>
            </h2>
          </div>

          <div className="col-span-12 md:col-span-4 md:text-right">
            <Link
              to="/novosti"
              className="inline-flex items-center gap-2 border-b border-white/30 pb-2 text-sm text-white transition-colors hover:border-[#60A5FA] hover:text-[#60A5FA]"
            >
              Prikaži sve obavijesti
              <ArrowRight size={14} strokeWidth={1.5} />
            </Link>
          </div>
        </div>

        <ul className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-2xl bg-white/10 md:grid-cols-2">
          {newsList.map((news, index) => (
            <li key={news.id} className="bg-[#0B1220]">
              <Link
                to="/novosti/$slug"
                params={{ slug: news.slug }}
                className="group block cursor-pointer"
              >
                <motion.article
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.06,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="flex h-full flex-col justify-between gap-6 p-8 transition-colors group-hover:bg-white/[0.04] md:p-10"
                >
                  <div>
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-white/50">
                        <AlertCircle
                          size={12}
                          strokeWidth={1.5}
                        />

                        {news.category}
                      </div>

                      <span className="font-mono text-[11px] uppercase tracking-widest text-white/40">
                        {new Date(
                          news.publishedAt,
                        ).toLocaleDateString("hr-HR", {
                          day: "2-digit",
                          month: "short",
                          year: "numeric",
                        })}
                      </span>
                    </div>

                    <h3 className="text-display mt-6 text-2xl leading-tight text-white transition-colors group-hover:text-[#60A5FA] md:text-3xl">
                      {news.title}
                    </h3>

                    <p className="mt-3 text-sm text-white/70">
                      {news.excerpt}
                    </p>
                  </div>

                  <span className="inline-flex items-center gap-2 text-sm text-white/80 transition-colors group-hover:text-white">
                    Pročitaj više

                    <ArrowUpRight
                      size={14}
                      strokeWidth={1.5}
                      className="transition-transform group-hover:rotate-45"
                    />
                  </span>
                </motion.article>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}