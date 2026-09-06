import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md";
}

export function Logo({ className, size = "md" }: LogoProps) {
  const mark = size === "sm" ? "h-7 w-7" : "h-8 w-8";

  return (
    <Link
      href="/"
      className={cn("site-logo group inline-flex shrink-0 items-center gap-2.5", className)}
      aria-label="VITASoft"
    >
      <span
        className={cn(
          "inline-flex items-center justify-center rounded-[10px] bg-gradient-to-br from-accent to-cyan text-sm font-semibold text-white",
          mark
        )}
      >
        V
      </span>
      <span className="site-logo-text normal-case tracking-tight">
        VITA<span className="site-logo-accent">Soft</span>
      </span>
    </Link>
  );
}
