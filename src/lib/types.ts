export type Slug = string;

export interface VenueCategory {
  id: string;
  slug: Slug;
  name: string;
  description?: string;
}

export interface PriceItem {
  id: string;
  name: string;
  description?: string;
  price: number;
  unit: string; // osoba | sat | termin | mjesec...
  category?: string;
  note?: string;
  active: boolean;
}

export interface OpeningHour {
  day: string;
  hours: string;
}

export interface VenueSection {
  id: string;
  slug?: Slug;
  name: string;
  shortDescription?: string;
  description: string;

  activities?: string[];
  facilities?: string[];
  accessibility?: string[];

  gallery?: string[];

  openingHours?: OpeningHour[];

  prices?: PriceItem[];
}

export interface VenueLocation {
  name: string;
  googleMaps: string;
}

export interface Venue {
  id: string;
  slug: Slug;

  name: string;
  category: string;

  shortDescription: string;
  description: string;

  address: string;
  phone?: string;
  email?: string;

  indoor: boolean;

  activities: string[];
  facilities: string[];
  accessibility?: string[];

  heroImage: string;

  gallery?: string[];

  openingHours?: OpeningHour[];

  prices: PriceItem[];

  sections?: VenueSection[];

  featured?: boolean;

  location?: VenueLocation;
}

export interface DocumentCategory {
  id: string;
  slug: Slug;
  name: string;
  description?: string;
}

export interface DocumentItem {
  id: string;
  title: string;
  category: string;
  publishedAt: string;
  fileType: "PDF" | "DOCX" | "XLSX";
  size?: string;
  year: number;
  url?: string;
}

export interface NewsPost {
  id: string;
  slug: Slug;

  title: string;
  excerpt: string;
  content?: string;

  category: string;
  categorySlug?: string;

  publishedAt: string;
  updatedAt?: string;

  image?: string;
  featuredImageUrl?: string | null;

  author?: string | null;
  venueName?: string | null;

  status?: "draft" | "published" | "archived";

  featured?: boolean;

  externalId?: string;
  syncStatus?: "synced" | "pending" | "error" | "local";
  cityAppSync?: boolean;

  readingMinutes?: number;
}

export interface TeamMember {
  id: string;
  name: string;
  position: string;
  bio?: string;
  image?: string;
  email?: string;
}

export interface ContactDepartment {
  id: string;
  name: string;
  email: string;
  phone?: string;
  person?: string;
}

export interface SiteSettings {
  companyName: string;
  legalName: string;
  address: string;
  phone: string;
  email: string;
  oib: string;
  officeHours: string;
}