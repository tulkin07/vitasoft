interface ProjectMockupProps {
  title: string;
  variant?: "hero" | "card" | "wide";
  className?: string;
  image?: string;
  alt?: string;
}

export function ProjectMockup({
  title,
  variant = "card",
  className,
  image,
  alt,
}: ProjectMockupProps) {
  const aspect =
    variant === "hero"
      ? "aspect-[16/11]"
      : variant === "wide"
        ? "aspect-[21/9]"
        : "aspect-[16/10]";

  if (image) {
    return (
      <div
        className={`mockup-frame mockup-frame-image ${aspect} ${className ?? ""}`}
        style={{ backgroundImage: `url("${image}")` }}
        role="img"
        aria-label={alt ?? title}
      />
    );
  }

  return (
    <div className={`mockup-frame ${aspect} ${className ?? ""}`}>
      {/* Chrome bar */}
      <div className="flex items-center gap-3 border-b border-border px-4 py-2.5">
        <div className="flex gap-1.5">
          <span className="h-1.5 w-1.5 bg-border" />
          <span className="h-1.5 w-1.5 bg-border" />
          <span className="h-1.5 w-1.5 bg-accent/40" />
        </div>
        <span className="text-[0.625rem] tracking-wide text-text-muted">
          {title.toLowerCase().replace(/\s+/g, "-")}.vitasoft.uz
        </span>
      </div>

      {/* Dashboard content */}
      <div className="flex h-[calc(100%-2.25rem)] gap-px bg-border">
        {/* Sidebar */}
        <div className="hidden w-[22%] flex-col gap-2 bg-bg-card p-3 sm:flex">
          <div className="h-1 w-2/3 bg-accent/30" />
          <div className="mt-3 space-y-1.5">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className={`h-1 ${i === 1 ? "w-full bg-accent/20" : "w-4/5 bg-border"}`}
              />
            ))}
          </div>
        </div>

        {/* Main */}
        <div className="flex flex-1 flex-col gap-px bg-border">
          <div className="grid flex-1 grid-cols-3 gap-px bg-border">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-bg-card p-3">
                <div className="h-1 w-1/2 bg-border" />
                <div
                  className={`mt-3 h-5 ${i === 2 ? "w-3/4 bg-accent/25" : "w-1/2 bg-border"}`}
                />
              </div>
            ))}
          </div>
          <div className="bg-bg-card p-3">
            <div className="flex h-14 items-end gap-1 sm:h-20">
              {[35, 55, 42, 68, 48, 72, 58, 80, 45, 65].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 bg-border transition-colors group-hover:bg-accent/20"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
