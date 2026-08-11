import { getMessages, getLocale } from "next-intl/server";
import type { Messages } from "@/messages";
import type { Locale } from "@/i18n/routing";
import {
  getAllPortfolioProjects,
  getAllPortfolioSlugs,
  getPortfolioProject,
} from "@/data/portfolio-projects";

export async function getServerMessages(): Promise<Messages> {
  return (await getMessages()) as Messages;
}

export async function getProjectBySlug(slug: string, locale?: Locale) {
  const resolvedLocale = locale ?? ((await getLocale()) as Locale);
  return getPortfolioProject(slug, resolvedLocale);
}

export async function getAllProjectSlugs() {
  return getAllPortfolioSlugs();
}

export async function getAllProjects(locale?: Locale) {
  const resolvedLocale = locale ?? ((await getLocale()) as Locale);
  return getAllPortfolioProjects(resolvedLocale);
}

export async function generatePageMetadata(page: keyof Messages["meta"]["pages"]) {
  const messages = await getServerMessages();
  const pageMeta = messages.meta.pages[page];
  return {
    title: pageMeta.title,
    description: pageMeta.description,
  };
}
