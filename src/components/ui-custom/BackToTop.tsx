import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 500);
    };

    onScroll();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          aria-label="Povratak na vrh"
          onClick={scrollToTop}
          initial={{
            opacity: 0,
            scale: 0.8,
            y: 16,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            scale: 0.8,
            y: 16,
          }}
          transition={{
            duration: 0.25,
          }}
          className="
            group
            fixed
            bottom-6
            right-6
            z-50
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-full
            border
            border-line
            bg-surface/90
            text-ink
            shadow-lg
            backdrop-blur-xl
            transition-all
            duration-300
            hover:-translate-y-1
            hover:border-accent
            hover:bg-surface
            hover:text-accent
            md:bottom-8
            md:right-8
          "
        >
          <ArrowUp
            size={20}
            strokeWidth={1.8}
            className="transition-transform duration-300 group-hover:-translate-y-0.5"
          />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
