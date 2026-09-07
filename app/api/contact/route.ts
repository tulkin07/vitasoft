import { NextResponse } from "next/server";

export const runtime = "nodejs";

type TelegramSendResult = {
  ok?: boolean;
  description?: string;
  parameters?: { migrate_to_chat_id?: number };
};

async function sendTelegramMessage(token: string, chatId: string, text: string) {
  const telegramRes = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: chatId,
      text,
      parse_mode: "HTML",
      disable_web_page_preview: true,
    }),
  });
  const telegramJson = (await telegramRes.json().catch(() => null)) as TelegramSendResult | null;
  return { telegramRes, telegramJson };
}

let migratedChatId: string | undefined;

type Channel = "phone" | "telegram" | "email";

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function isChannel(value: unknown): value is Channel {
  return value === "phone" || value === "telegram" || value === "email";
}

export async function POST(request: Request) {
  const token = process.env.TELEGRAM_BOT_TOKEN?.trim();
  const chatId = process.env.TELEGRAM_CHAT_ID?.trim();

  if (!token || !chatId) {
    return NextResponse.json({ ok: false, error: "not_configured" }, { status: 500 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  if (!body || typeof body !== "object") {
    return NextResponse.json({ ok: false, error: "invalid_body" }, { status: 400 });
  }

  const { name, service, channel, contact, message } = body as Record<string, unknown>;
  const fullName = typeof name === "string" ? name.trim() : "";
  const serviceName = typeof service === "string" ? service.trim() : "";
  const rawContact = typeof contact === "string" ? contact.trim() : "";
  const contactValue =
    channel === "phone" ? rawContact.replace(/\s+/g, "") : rawContact;
  const text = typeof message === "string" ? message.trim() : "";

  if (fullName.length < 2 || !serviceName || !isChannel(channel) || !contactValue || text.split(/\s+/).filter(Boolean).length < 8) {
    return NextResponse.json({ ok: false, error: "invalid_fields" }, { status: 400 });
  }

  const channelLabel = channel === "phone" ? "Telefon" : channel === "telegram" ? "Telegram" : "Email";
  const contactHtml = (() => {
    if (channel === "telegram") {
      const user = contactValue.replace(/^@/, "");
      return `<a href="https://t.me/${encodeURIComponent(user)}">@${escapeHtml(user)}</a>`;
    }
    if (channel === "email") {
      return `<code>${escapeHtml(contactValue)}</code>`;
    }
    return `<code>${escapeHtml(contactValue)}</code>`;
  })();

  const when = new Intl.DateTimeFormat("uz-UZ", {
    timeZone: "Asia/Tashkent",
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date());

  const payload = [
    "✨ <b>VITASOFT</b>  ·  Digital Solutions",
    "<i>Saytdan yangi so‘rov keldi</i>",
    "",
    "──────────────",
    "",
    "👤  <b>Mijoz</b>",
    escapeHtml(fullName),
    "",
    "💼  <b>Xizmat</b>",
    escapeHtml(serviceName),
    "",
    `📞  <b>${channelLabel}</b>`,
    contactHtml,
    "",
    "💬  <b>Xabar</b>",
    `<blockquote>${escapeHtml(text)}</blockquote>`,
    "",
    "──────────────",
    `🕐  ${escapeHtml(when)}  ·  Toshkent`,
  ].join("\n");

  let targetChatId = migratedChatId || chatId;
  let { telegramRes, telegramJson } = await sendTelegramMessage(token, targetChatId, payload);

  const newChatId = telegramJson?.parameters?.migrate_to_chat_id;
  if (newChatId) {
    migratedChatId = String(newChatId);
    targetChatId = migratedChatId;
    ({ telegramRes, telegramJson } = await sendTelegramMessage(token, targetChatId, payload));
  }

  if (!telegramRes.ok || !telegramJson?.ok) {
    const description = telegramJson?.description ?? "telegram_failed";
    return NextResponse.json({ ok: false, error: description }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
