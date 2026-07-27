import { useRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

interface Props {
  children: ReactNode;
  variant?: "primary" | "ghost" | "outline";
  to?: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  icon?: boolean;
  ariaLabel?: string;
}

const styles: Record<string, string> = {
  primary: "bg-brand text-brand-foreground hover:bg-[#1d4fd8]",
  ghost: "text-ink hover:text-brand",
  outline: "border border-line-strong text-ink hover:border-ink hover:bg-ink hover:text-background",
};

export function MagneticButton({
  children,
  variant = "primary",
  to,
  href,
  onClick,
  className = "",
  icon = true,
  ariaLabel,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 20 });
  const sy = useSpring(y, { stiffness: 200, damping: 20 });
  const tx = useTransform(sx, (v) => `${v}px`);
  const ty = useTransform(sy, (v) => `${v}px`);

  function onMove(e: React.MouseEvent) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const dx = e.clientX - (rect.left + rect.width / 2);
    const dy = e.clientY - (rect.top + rect.height / 2);
    x.set(dx * 0.25);
    y.set(dy * 0.35);
  }

  function onLeave() {
    x.set(0);
    y.set(0);
  }

  const inner = (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ x: tx, y: ty }}
      className={`magnetic-btn text-sm ${styles[variant]} ${className}`}
    >
      <span>{children}</span>
      {icon && <ArrowUpRight size={16} strokeWidth={1.5} />}
    </motion.div>
  );

  if (to) return <Link to={to} aria-label={ariaLabel}>{inner}</Link>;
  if (href) return <a href={href} aria-label={ariaLabel}>{inner}</a>;
  return (
    <button type="button" onClick={onClick} aria-label={ariaLabel}>
      {inner}
    </button>
  );
}
