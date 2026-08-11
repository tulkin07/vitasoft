import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md";
}

export function Logo({ className, size = "md" }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        "site-logo group inline-flex shrink-0",
        size === "sm" ? "site-logo-sm" : "site-logo-md",
        className
      )}
      aria-label="VITA SOFT"
    >
      <span className="site-logo-text">
        VITA<span className="site-logo-accent">SOFT</span>
      </span>
    </Link>
  );
}
