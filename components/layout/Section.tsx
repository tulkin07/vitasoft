import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  variant?: "default" | "secondary" | "bordered";
  grid?: boolean;
  contained?: boolean;
}

export function Section({
  children,
  className,
  id,
  variant = "default",
  grid = false,
  contained = true,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "section-y relative",
        variant === "secondary" && "bg-bg-secondary",
        variant === "bordered" && "border-y border-border bg-bg-secondary",
        className
      )}
    >
      {grid && <div className="grid-bg pointer-events-none absolute inset-0" />}
      {contained ? (
        <div className="container-main relative">{children}</div>
      ) : (
        children
      )}
    </section>
  );
}
