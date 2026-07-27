import { Link } from "@tanstack/react-router";

type LogoProps = {
  inverted?: boolean;
  className?: string;
};

export function Logo({
  inverted = false,
  className = "",
}: LogoProps) {
  return (
    <Link
      to="/"
      aria-label="Športski objekti Osijek – naslovnica"
      className={`inline-flex items-center ${className}`}
    >
      <img
        src={
          inverted
            ? "/images/logo/so-logo-dark.png"
            : "/images/logo/so-logo-light.png"
        }
        alt="Športski objekti Osijek"
        className="h-10 w-auto md:h-15"
      />
    </Link>
  );
}