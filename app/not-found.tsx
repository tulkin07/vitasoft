import Link from "next/link";
import { routing } from "@/i18n/routing";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center px-4 pt-28 text-center">
      <h1 className="vs-h2">Sahifa topilmadi</h1>
      <Link href={`/${routing.defaultLocale}`} className="vs-btn vs-btn-primary mt-8">
        Bosh sahifa
      </Link>
    </section>
  );
}
