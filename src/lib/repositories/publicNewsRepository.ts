import { supabase } from "@/lib/supabase";

export interface PublicNewsPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  featuredImageUrl?: string;
  featured: boolean;
  publishedAt: string;
  createdAt: string;
  updatedAt: string;
  readingMinutes: number;
}

type NewsRow = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  featured_image_url: string | null;
  featured: boolean;
  published_at: string | null;
  created_at: string;
  updated_at: string;
};

const PUBLIC_NEWS_SELECT = `
  id,
  title,
  slug,
  excerpt,
  content,
  category,
  featured_image_url,
  featured,
  published_at,
  created_at,
  updated_at
`;

function calculateReadingMinutes(content: string): number {
  const plainText = content
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  if (!plainText) {
    return 1;
  }

  const wordCount = plainText.split(/\s+/).filter(Boolean).length;

  return Math.max(1, Math.ceil(wordCount / 200));
}

function mapPublicNewsPost(row: NewsRow): PublicNewsPost {
  return {
    id: row.id,
    title: row.title,
    slug: row.slug,
    excerpt: row.excerpt,
    content: row.content,
    category: row.category,
    featuredImageUrl: row.featured_image_url?.trim() || undefined,
    featured: row.featured,
    publishedAt: row.published_at ?? row.created_at,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
    readingMinutes: calculateReadingMinutes(row.content),
  };
}

export async function listPublicNews(): Promise<PublicNewsPost[]> {
  const now = new Date().toISOString();

  const { data, error } = await supabase
    .from("news")
    .select(PUBLIC_NEWS_SELECT)
    .eq("status", "Objavljeno")
    .not("published_at", "is", null)
    .lte("published_at", now)
    .order("published_at", {
      ascending: false,
      nullsFirst: false,
    });

  if (error) {
    throw new Error(
      `Učitavanje javnih novosti nije uspjelo: ${error.message}`,
    );
  }

  return ((data ?? []) as NewsRow[]).map(mapPublicNewsPost);
}

export async function getPublicNewsBySlug(
  slug: string,
): Promise<PublicNewsPost | null> {
  const normalizedSlug = slug.trim();
  const now = new Date().toISOString();

  if (!normalizedSlug) {
    return null;
  }

  const { data, error } = await supabase
    .from("news")
    .select(PUBLIC_NEWS_SELECT)
    .eq("slug", normalizedSlug)
    .eq("status", "Objavljeno")
    .not("published_at", "is", null)
    .lte("published_at", now)
    .maybeSingle();

  if (error) {
    throw new Error(
      `Učitavanje novosti nije uspjelo: ${error.message}`,
    );
  }

  if (!data) {
    return null;
  }

  return mapPublicNewsPost(data as NewsRow);
}

export async function listRelatedPublicNews(
  post: Pick<PublicNewsPost, "slug" | "category">,
  limit = 3,
): Promise<PublicNewsPost[]> {
  const now = new Date().toISOString();

  const { data, error } = await supabase
    .from("news")
    .select(PUBLIC_NEWS_SELECT)
    .eq("status", "Objavljeno")
    .eq("category", post.category)
    .neq("slug", post.slug)
    .not("published_at", "is", null)
    .lte("published_at", now)
    .order("published_at", {
      ascending: false,
      nullsFirst: false,
    })
    .limit(limit);

  if (error) {
    throw new Error(
      `Učitavanje povezanih novosti nije uspjelo: ${error.message}`,
    );
  }

  return ((data ?? []) as NewsRow[]).map(mapPublicNewsPost);
}