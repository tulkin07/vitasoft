import Link from "next/link";
import { routing } from "@/i18n/routing";
import { getMessages } from "@/messages";

export default function NotFound() {
  const t = getMessages(routing.defaultLocale).notFound;

  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center px-4 pt-28 text-center">
      <span className="section-label">{t.label}</span>
      <h1 className="mt-4 font-display text-4xl font-bold text-text-primary">
        {t.title}
      </h1>
      <p className="mt-4 text-text-secondary">{t.description}</p>
      <Link
        href={`/${routing.defaultLocale}`}
        className="mt-8 rounded-sm border border-accent px-6 py-3 text-sm text-accent transition-colors hover:bg-accent/10"
      >
        {t.backHome}
      </Link>
    </section>
  );
}
