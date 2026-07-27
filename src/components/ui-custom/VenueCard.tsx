import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import type { Venue } from "@/lib/types";
import { VenueRepo } from "@/lib/repositories";

interface VenueCardProps {
  venue: Venue;
  index?: number;
}

export function VenueCard({
  venue,
  index = 0,
}: VenueCardProps) {
  const cat = VenueRepo.category(venue.category);

  const hasHeroImage =
    Boolean(venue.heroImage) &&
    (venue.heroImage.startsWith("/") ||
      venue.heroImage.startsWith("http"));

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.7,
        delay: (index % 3) * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <Link
        to="/objekti/$slug"
        params={{ slug: venue.slug }}
        className="group block"
      >
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm bg-secondary">
          {hasHeroImage ? (
            <img
              src={venue.heroImage}
              alt={venue.name}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-[oklch(0.42_0.055_255)] via-[oklch(0.28_0.04_255)] to-[oklch(0.16_0.025_255)]" />
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

          <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/20" />

          <div className="absolute inset-x-0 top-0 flex items-start justify-between p-5">
            <span className="font-mono text-[10px] uppercase tracking-widest text-white/80">
              {cat?.name ?? venue.category}
            </span>

            <span className="grid h-9 w-9 place-items-center rounded-full bg-white/10 text-white backdrop-blur-md transition-transform duration-500 group-hover:rotate-45">
              <ArrowUpRight
                size={14}
                strokeWidth={1.5}
              />
            </span>
          </div>

          <div className="absolute inset-x-0 bottom-0 p-5">
            <h3 className="text-display text-2xl text-white md:text-3xl">
              {venue.name}
            </h3>

            {venue.location && (
              <p className="mt-2 text-xs text-white/70">
                {venue.location?.name}
              </p>
            )}
          </div>
        </div>

        <p className="mt-4 max-w-md text-sm text-ink-soft">
          {venue.shortDescription}
        </p>
      </Link>
    </motion.div>
  );
}