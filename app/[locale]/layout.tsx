import { Geist, Geist_Mono, Inter, Manrope, Syne } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { routing, type Locale } from "@/i18n/routing";
import { Navbar } from "@/components/site/Navbar";
import { ThemeProvider } from "@/components/site/ThemeProvider";
import { CustomCursor } from "@/components/site/CustomCursor";
import "../globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin", "cyrillic"] });
const geist = Geist({ variable: "--font-geist", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const syne = Syne({ variable: "--font-logo", subsets: ["latin"], weight: ["600", "700"] });
const manrope = Manrope({
  variable: "--font-display",
  subsets: ["latin", "latin-ext", "cyrillic"],
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
    title: t("siteTitle"),
    description: t("siteDescription"),
    icons: {
      icon: [
        { url: "/icon.svg", type: "image/svg+xml" },
        { url: "/favicon.ico", sizes: "48x48" },
      ],
      apple: "/apple-icon.png",
    },
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
  if (!routing.locales.includes(locale as Locale)) notFound();
  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`${inter.variable} ${geist.variable} ${geistMono.variable} ${syne.variable} ${manrope.variable} dark h-full`}
      suppressHydrationWarning
    >
      <body className="min-h-full bg-bg font-sans text-text antialiased">
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider>
            <CustomCursor />
            <Navbar />
            {children}
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
