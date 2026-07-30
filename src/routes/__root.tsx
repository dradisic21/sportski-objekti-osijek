import type { QueryClient } from "@tanstack/react-query";
import {
  HeadContent,
  Outlet,
  createRootRouteWithContext,
  useRouter,
} from "@tanstack/react-router";
import appCss from "../styles.css?url";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SmoothScroll } from "@/components/ui-custom/SmoothScroll";
import { CookieConsent } from "@/components/ui-custom/CookieConsent";
import { NotFoundPage } from "@/components/errors/NotFoundPage";
import { BackToTop } from "@/components/ui-custom/BackToTop";

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);

  const router = useRouter();

  const handleRetry = async () => {
    await router.invalidate();
    reset();
  };

  return (
    <div className="flex min-h-dvh items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-display text-3xl text-ink">
          Stranica se nije učitala.
        </h1>

        <p className="mt-2 text-sm text-ink-muted">
          Došlo je do greške. Pokušajte ponovno ili se vratite na naslovnicu.
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            type="button"
            onClick={handleRetry}
            className="rounded-full bg-ink px-6 py-3 text-sm text-background transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            Pokušaj ponovno
          </button>

          <a
            href="/"
            className="rounded-full border border-line px-6 py-3 text-sm text-ink transition-colors hover:bg-secondary"
          >
            Naslovnica
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient;
}>()({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "Športski objekti d.o.o. Osijek — Prostori u kojima Osijek živi",
      },
      {
        name: "description",
        content:
          "Sportske dvorane, bazeni, tereni i rekreacijski prostori Grada Osijeka. Cjenici, dokumenti, javna nabava i informacije o objektima.",
      },
      {
        name: "author",
        content: "Športski objekti d.o.o. Osijek",
      },
      {
        property: "og:title",
        content: "Športski objekti d.o.o. Osijek",
      },
      {
        property: "og:description",
        content:
          "Prostori u kojima Osijek trenira, natječe se, rekreira i susreće.",
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        property: "og:site_name",
        content: "Športski objekti Osijek",
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
    ],

    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      {
        rel: "icon",
        href: "/favicon.ico",
        type: "image/x-icon",
      },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "preconnect",
        href: "https://api.fontshare.com",
      },
      {
        rel: "stylesheet",
        href: "https://api.fontshare.com/v2/css?f[]=clash-display@400,500,600,700&f[]=general-sans@400,500,600&display=swap",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700&family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@400;500&display=swap",
      },
    ],
  }),

  component: RootComponent,
  notFoundComponent: NotFoundPage,
  errorComponent: ErrorComponent,
});

function RootComponent() {
  return (
    <>
      <HeadContent />
      <SmoothScroll />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-ink focus:px-4 focus:py-2 focus:text-background"
      >
        Preskoči na sadržaj
      </a>
      <Header />
      <main id="main" className="min-h-dvh">
        <Outlet />
      </main>
      <Footer />
      <CookieConsent />
      <BackToTop />
    </>
  );
}
