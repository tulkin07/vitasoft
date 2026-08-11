interface PageHeroProps {
  children: React.ReactNode;
}

export function PageHero({ children }: PageHeroProps) {
  return (
    <section className="relative pt-28 sm:pt-32 lg:pt-36">
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-40" />
      <div className="container-main relative pb-4">{children}</div>
    </section>
  );
}
