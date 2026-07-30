import { supabase } from "@/lib/supabase";
import type {
  DocumentCategory,
  DocumentItem,
} from "@/lib/types";

interface DocumentCategoryRow {
  id: string;
  slug: string;
  name: string;
  description: string | null;
  active: boolean;
  sort_order: number;
}

interface DocumentRow {
  id: string;
  title: string;
  slug: string;
  category_id: string;
  description: string | null;
  publication_year: number;
  published_at: string | null;
  file_url: string;
  file_path: string;
  file_name: string;
  file_size: number | string;
  file_mime_type: string;
  status: string;
  featured: boolean;
  created_at: string;
  updated_at: string;
  document_categories:
    | DocumentCategoryRow
    | DocumentCategoryRow[]
    | null;
}

function mapDocumentCategory(
  row: DocumentCategoryRow,
): DocumentCategory {
  return {
    id: row.id,
    slug: row.slug,
    name: row.name,
    description: row.description ?? undefined,
  };
}

function getCategory(
  value:
    | DocumentCategoryRow
    | DocumentCategoryRow[]
    | null,
): DocumentCategoryRow | null {
  if (!value) {
    return null;
  }

  return Array.isArray(value)
    ? (value[0] ?? null)
    : value;
}
// Dinamičko određivanje tipa (PDF, DOCX, XLSX...).
// function getFileType(
//   mimeType: string,
//   fileName: string,
// ): DocumentItem["fileType"] {
//   const normalizedMimeType =
//     mimeType.toLowerCase();

//   const normalizedFileName =
//     fileName.toLowerCase();

//   if (
//     normalizedMimeType.includes(
//       "spreadsheet",
//     ) ||
//     normalizedMimeType.includes("excel") ||
//     normalizedFileName.endsWith(".xlsx") ||
//     normalizedFileName.endsWith(".xls")
//   ) {
//     return "XLSX";
//   }

//   if (
//     normalizedMimeType.includes(
//       "wordprocessingml",
//     ) ||
//     normalizedMimeType.includes("msword") ||
//     normalizedFileName.endsWith(".docx") ||
//     normalizedFileName.endsWith(".doc")
//   ) {
//     return "DOCX";
//   }

//   return "PDF";
// }

function formatFileSize(
  fileSize: number | string,
): string | undefined {
  const bytes = Number(fileSize);

  if (!Number.isFinite(bytes) || bytes <= 0) {
    return undefined;
  }

  if (bytes < 1024) {
    return `${bytes} B`;
  }

  if (bytes < 1024 * 1024) {
    return `${(bytes / 1024).toFixed(1)} KB`;
  }

  return `${(
    bytes /
    (1024 * 1024)
  ).toFixed(1)} MB`;
}

function mapDocument(
  row: DocumentRow,
): DocumentItem {
  const category = getCategory(
    row.document_categories,
  );

  return {
    id: row.id,
    title: row.title,
    category: category?.slug ?? "",
    categoryName: category?.name ?? undefined,
    publishedAt:
      row.published_at ?? row.created_at,
    fileType: "PDF",
    size: formatFileSize(row.file_size),
    year: row.publication_year,
    url: row.file_url,
  };
}

const documentSelect = `
  id,
  title,
  slug,
  category_id,
  description,
  publication_year,
  published_at,
  file_url,
  file_path,
  file_name,
  file_size,
  file_mime_type,
  status,
  featured,
  created_at,
  updated_at,
  document_categories!documents_category_id_fkey (
    id,
    slug,
    name,
    description,
    active,
    sort_order
  )
`;

export async function listPublicDocumentCategories(): Promise<
  DocumentCategory[]
> {
  const { data, error } = await supabase
    .from("document_categories")
    .select(
      `
        id,
        slug,
        name,
        description,
        active,
        sort_order
      `,
    )
    .eq("active", true)
    .order("sort_order", {
      ascending: true,
    })
    .order("name", {
      ascending: true,
    });

  if (error) {
    throw new Error(
      `Učitavanje kategorija dokumenata nije uspjelo: ${error.message}`,
    );
  }

  return (
    (data ?? []) as DocumentCategoryRow[]
  ).map(mapDocumentCategory);
}

export async function getPublicDocumentCategoryBySlug(
  slug: string,
): Promise<DocumentCategory | null> {
  const { data, error } = await supabase
    .from("document_categories")
    .select(
      `
        id,
        slug,
        name,
        description,
        active,
        sort_order
      `,
    )
    .eq("slug", slug)
    .eq("active", true)
    .maybeSingle();

  if (error) {
    throw new Error(
      `Učitavanje kategorije dokumenata nije uspjelo: ${error.message}`,
    );
  }

  if (!data) {
    return null;
  }

  return mapDocumentCategory(
    data as DocumentCategoryRow,
  );
}

export async function listPublicDocuments(): Promise<
  DocumentItem[]
> {
  const now = new Date().toISOString();

  const { data, error } = await supabase
    .from("documents")
    .select(documentSelect)
    .eq("status", "Objavljeno")
    .not("published_at", "is", null)
    .lte("published_at", now)
    .order("publication_year", {
      ascending: false,
    })
    .order("published_at", {
      ascending: false,
    })
    .order("created_at", {
      ascending: false,
    });

  if (error) {
    throw new Error(
      `Učitavanje dokumenata nije uspjelo: ${error.message}`,
    );
  }

  return ((data ?? []) as DocumentRow[])
    .filter((row) => {
      const category = getCategory(
        row.document_categories,
      );

      return category?.active === true;
    })
    .map(mapDocument);
}

export async function listPublicDocumentsByCategorySlug(
  categorySlug: string,
): Promise<DocumentItem[]> {
  const category =
    await getPublicDocumentCategoryBySlug(
      categorySlug,
    );

  if (!category) {
    return [];
  }

  const now = new Date().toISOString();

  const { data, error } = await supabase
    .from("documents")
    .select(documentSelect)
    .eq("category_id", category.id)
    .eq("status", "Objavljeno")
    .not("published_at", "is", null)
    .lte("published_at", now)
    .order("publication_year", {
      ascending: false,
    })
    .order("published_at", {
      ascending: false,
    })
    .order("created_at", {
      ascending: false,
    });

  if (error) {
    throw new Error(
      `Učitavanje dokumenata kategorije "${category.name}" nije uspjelo: ${error.message}`,
    );
  }

  return ((data ?? []) as DocumentRow[]).map(
    mapDocument,
  );
}