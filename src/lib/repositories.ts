
import {
  contactDepartments,
  documentCategories,
  documents,
  managementTeam,
  news,
  siteSettings,
  venueCategories,
  venues,
} from "./data";

export const VenueRepo = {
  all: () => venues,
  featured: () => venues.filter((v) => v.featured),
  bySlug: (slug: string) => venues.find((v) => v.slug === slug),
  byCategory: (categorySlug: string) => venues.filter((v) => v.category === categorySlug),
  categories: () => venueCategories,
  category: (slug: string) => venueCategories.find((c) => c.slug === slug),
};

export const DocumentRepo = {
  all: () => documents,
  byCategory: (slug: string) => documents.filter((d) => d.category === slug),
  categories: () => documentCategories,
  category: (slug: string) => documentCategories.find((c) => c.slug === slug),
  years: () => Array.from(new Set(documents.map((d) => d.year))).sort((a, b) => b - a),
};

export const NewsRepo = {
  all: () =>
    [...news]
      .filter((n) => (n.status ?? "published") === "published")
      .sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1)),
  latest: (n = 5) => NewsRepo.all().slice(0, n),
  bySlug: (slug: string) => news.find((n) => n.slug === slug),
  categories: () => Array.from(new Set(news.map((n) => n.category))).sort(),
};

export const TeamRepo = {
  management: () => managementTeam,
};

export const SiteRepo = {
  settings: () => siteSettings,
  departments: () => contactDepartments,
};
