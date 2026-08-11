import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";
import { Onest, Roboto } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { ScrollProgress } from "@/components/animations/ScrollProgress";
import { AtmosphericBackground } from "@/components/layout/AtmosphericBackground";
import { routing, type Locale } from "@/i18n/routing";
import { isTheme, resolveServerTheme } from "@/lib/theme";
import "../globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "700"],
});

const onest = Onest({
  variable: "--font-logo",
  subsets: ["latin", "cyrillic"],
  weight: ["700", "800"],
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });

  return {
    title: {
      default: t("siteTitle"),
      template: t("siteTitleTemplate"),
    },
    description: t("siteDescription"),
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();
  const cookieStore = await cookies();
  const themeCookie = cookieStore.get("theme")?.value;
  const initialTheme = isTheme(themeCookie) ? themeCookie : "light";
  const resolvedTheme = resolveServerTheme(initialTheme);

  return (
    <html
      lang={locale}
      className={`${roboto.variable} ${onest.variable} h-full ${resolvedTheme}`}
      style={{ colorScheme: resolvedTheme }}
      suppressHydrationWarning
    >
      <body className="relative flex min-h-full flex-col bg-bg-primary font-body text-text-primary antialiased transition-colors duration-300">
        <AtmosphericBackground />
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider initialTheme={initialTheme}>
            <ScrollProgress />
            <Navbar />
            <main className="relative z-[1] flex-1">{children}</main>
            <Footer />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
