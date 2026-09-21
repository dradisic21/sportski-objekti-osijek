import { useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

type VenueGalleryProps = {
  name: string;
  images: string[];
  variant?: "default" | "section";
};

export function VenueGallery({
  name,
  images,
  variant = "default",
}: VenueGalleryProps) {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToSlide = (index: number) => {
    const slider = sliderRef.current;

    if (!slider) {
      return;
    }

    const slides = Array.from(slider.children) as HTMLElement[];
    const slide = slides[index];

    if (!slide) {
      return;
    }

    slider.scrollTo({
      left: slide.offsetLeft,
      behavior: "smooth",
    });

    setActiveIndex(index);
  };

  const handlePrevious = () => {
    const previousIndex =
      activeIndex === 0 ? images.length - 1 : activeIndex - 1;

    scrollToSlide(previousIndex);
  };

  const handleNext = () => {
    const nextIndex = activeIndex === images.length - 1 ? 0 : activeIndex + 1;

    scrollToSlide(nextIndex);
  };

  const handleScroll = () => {
    const slider = sliderRef.current;

    if (!slider) {
      return;
    }

    const slides = Array.from(slider.children) as HTMLElement[];

    if (slides.length === 0) {
      return;
    }

    let closestIndex = 0;
    let closestDistance = Infinity;

    slides.forEach((slide, index) => {
      const distance = Math.abs(slide.offsetLeft - slider.scrollLeft);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    setActiveIndex(closestIndex);
  };

  const desktopControls =
    images.length > 1 ? (
      <div className="hidden shrink-0 items-center gap-2 md:flex">
        <button
          type="button"
          onClick={handlePrevious}
          aria-label={`Prethodna fotografija — ${name}`}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-ink hover:bg-ink hover:text-background"
        >
          <ArrowLeft size={18} strokeWidth={1.5} />
        </button>

        <button
          type="button"
          onClick={handleNext}
          aria-label={`Sljedeća fotografija — ${name}`}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-ink hover:bg-ink hover:text-background"
        >
          <ArrowRight size={18} strokeWidth={1.5} />
        </button>
      </div>
    ) : null;

  return (
    <section
      className={
        variant === "default"
          ? "w-full overflow-hidden border-b border-line py-16 md:py-24"
          : "w-full min-w-0 overflow-hidden"
      }
    >
      <div
        className={
          variant === "default"
            ? "container-editorial min-w-0"
            : "w-full min-w-0"
        }
      >
        {variant === "default" && (
          <div className="mb-8 flex items-end justify-between gap-4 md:mb-10 md:gap-8">
            <div className="min-w-0">
              <p className="text-eyebrow text-ink-muted">Galerija</p>

              <h2 className="text-display mt-4 text-4xl text-ink md:text-5xl">
                Fotografije objekta
              </h2>
            </div>

            {desktopControls}
          </div>
        )}

        {variant === "section" && images.length > 1 && (
          <div className="mb-5 hidden w-full items-center justify-end md:flex">
            {desktopControls}
          </div>
        )}

        <div className="w-full min-w-0 overflow-hidden">
          <div
            ref={sliderRef}
            onScroll={handleScroll}
            className="flex w-full snap-x snap-mandatory items-start gap-4 overflow-x-auto scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {images.map((image, index) => (
              <figure
                key={`${image}-${index}`}
                className="group relative min-w-full max-w-full shrink-0 snap-start self-start overflow-hidden rounded lg:min-w-[68%] lg:max-w-[68%]"
              >
                <img
                  src={image}
                  alt={`${name} — fotografija ${index + 1}`}
                  loading={index === 0 ? "eager" : "lazy"}
                  className="block h-auto w-full"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

                <div className="absolute bottom-4 left-4 md:bottom-5 md:left-5">
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/80">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
              </figure>
            ))}
          </div>
        </div>

        {images.length > 1 && (
          <div className="mt-5 w-full min-w-0 md:mt-6">
            {/* MOBILE */}
            <div className="flex w-full flex-col gap-4 md:hidden">
              <div className="flex w-full min-w-0 items-center gap-3">
                <div className="flex shrink-0 items-center gap-2">
                  <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-muted">
                    {String(activeIndex + 1).padStart(2, "0")}
                  </span>

                  <span className="h-px w-4 bg-line" />

                  <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-muted">
                    {String(images.length).padStart(2, "0")}
                  </span>
                </div>

                <div className="flex min-w-0 flex-1 items-center justify-end gap-1.5 overflow-hidden">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => scrollToSlide(index)}
                      aria-label={`Prikaži fotografiju ${index + 1}`}
                      className={[
                        "h-px shrink transition-all duration-300",
                        activeIndex === index ? "w-6 bg-ink" : "w-3 bg-line",
                      ].join(" ")}
                    />
                  ))}
                </div>
              </div>

              <div className="flex w-full items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={handlePrevious}
                  aria-label={`Prethodna fotografija — ${name}`}
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-ink hover:bg-ink hover:text-background"
                >
                  <ArrowLeft size={17} strokeWidth={1.5} />
                </button>

                <button
                  type="button"
                  onClick={handleNext}
                  aria-label={`Sljedeća fotografija — ${name}`}
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-ink hover:bg-ink hover:text-background"
                >
                  <ArrowRight size={17} strokeWidth={1.5} />
                </button>
              </div>
            </div>

            {/* TABLET + DESKTOP */}
            <div className="hidden w-full min-w-0 items-center gap-5 md:grid md:grid-cols-[auto_minmax(0,1fr)]">
              <div className="flex shrink-0 items-center gap-3">
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-muted">
                  {String(activeIndex + 1).padStart(2, "0")}
                </span>

                <span className="h-px w-6 bg-line" />

                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-muted">
                  {String(images.length).padStart(2, "0")}
                </span>
              </div>

              <div className="flex min-w-0 items-center justify-center gap-2 overflow-hidden">
                {images.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => scrollToSlide(index)}
                    aria-label={`Prikaži fotografiju ${index + 1}`}
                    className={[
                      "h-px transition-all duration-300",
                      activeIndex === index
                        ? "w-8 bg-ink"
                        : "w-4 bg-line hover:bg-ink-muted",
                    ].join(" ")}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
