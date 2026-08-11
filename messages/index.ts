import type { Locale } from "@/i18n/routing";
import uz from "./uz.json";
import ru from "./ru.json";
import en from "./en.json";

const messages: Record<Locale, typeof uz> = { uz, ru, en };

export function getMessages(locale: Locale) {
  return messages[locale] ?? messages.uz;
}

export type Messages = typeof uz;
