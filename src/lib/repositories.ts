import {
  contactDepartments,
  managementTeam,
  siteSettings,
  venueCategories,
  venues,
} from "./data";
export const VenueRepo = {
  all: () => venues,
  featured: () => venues.filter((v) => v.featured),
  bySlug: (slug: string) => venues.find((v) => v.slug === slug),
  byCategory: (categorySlug: string) =>
    venues.filter((v) => v.category === categorySlug),
  categories: () => venueCategories,
  category: (slug: string) => venueCategories.find((c) => c.slug === slug),
};

export const TeamRepo = {
  management: () => managementTeam,
};

export const SiteRepo = {
  settings: () => siteSettings,
  departments: () => contactDepartments,
};
