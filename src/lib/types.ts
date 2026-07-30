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
  unit: string;
  category?: string;
  note?: string;
  active: boolean;
  priceLabel?: string;
  timeRange?: string;
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
  bookingUrl?: string;
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
  bookingUrl?: string;
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
  categoryName?: string;
  publishedAt: string;
  fileType: "PDF" | "DOCX" | "XLSX";
  size?: string;
  year: number;
  url?: string;
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

export interface ContactFormState {
  name: string;
  email: string;
  phone: string;
  subject: string;
  venue: string;
  date: string;
  time: string;
  inquiryType: string;
  message: string;
  gdpr: boolean;
}

export type ContactFormStatus =
  | "idle"
  | "sending"
  | "sent"
  | "error";

export type ContactFormErrors = Partial<
  Record<keyof ContactFormState, string>
>;

export const CONTACT_INQUIRY_TYPES = [
  "Upit za termin",
  "Najam objekta",
  "Sportsko događanje",
  "Grupni trening",
  "Ostalo",
] as const;