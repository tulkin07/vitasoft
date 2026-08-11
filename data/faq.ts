export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const faqItems: FAQItem[] = [
  {
    id: "1",
    question: "Loyiha qancha vaqtda tayyor bo‘ladi?",
    answer:
      "Loyiha muddati murakkabligiga bog‘liq. Oddiy landing page — 2–4 hafta, korporativ sayt — 4–8 hafta, CRM yoki murakkab web-ilova — 8–16 hafta. Aniq muddatni loyiha talablarini muhokama qilgandan keyin belgilaymiz.",
  },
  {
    id: "2",
    question: "Sayt narxi qanday belgilanadi?",
    answer:
      "Narx loyiha hajmi, funksiyalar soni, dizayn murakkabligi va integratsiyalarga qarab belgilanadi. Bepul maslahat va aniq smeta beramiz. Yakuniy narx shartnoma imzolashdan oldin kelishiladi.",
  },
  {
    id: "3",
    question: "Saytga texnik xizmat ko‘rsatasizlarmi?",
    answer:
      "Ha, barcha loyihalarimiz uchun texnik qo‘llab-quvvatlash xizmati mavjud. Hosting monitoring, yangilanishlar, xavfsizlik patchlari va tezkor muammolarni hal qilish — 24/7 rejimda.",
  },
  {
    id: "4",
    question: "Mobil versiya ham ishlab chiqiladimi?",
    answer:
      "Albatta. Barcha web-saytlarimiz responsive dizayn bilan yaratiladi — telefon, planshet va desktop qurilmalarda mukammal ko‘rinadi. Alohida mobil ilova ham ishlab chiqishimiz mumkin.",
  },
  {
    id: "5",
    question: "CRM tizim yaratish mumkinmi?",
    answer:
      "Ha, CRM va ERP tizimlar bizning asosiy yo‘nalishlarimizdan biri. Mijozlar, buyurtmalar, xodimlar va hisobotlarni boshqarish uchun maxsus tizimlar yaratamiz. VITA CRM — o‘zimizning tayyor yechimimiz ham mavjud.",
  },
  {
    id: "6",
    question: "Keyinchalik yangi funksiyalar qo‘shish mumkinmi?",
    answer:
      "Ha, barcha loyihalar kengaytirish uchun mo‘ljallangan arxitektura bilan yaratiladi. Yangi funksiyalar, modullar va integratsiyalar qo‘shish oson va tez amalga oshiriladi.",
  },
  {
    id: "7",
    question: "To‘lov qanday amalga oshiriladi?",
    answer:
      "Standart to‘lov rejasi: 30% oldindan to‘lov (shartnoma imzolashda), 40% development jarayonida (o‘rtada), 30% loyiha topshirilganda. Bank o‘tkazmasi yoki naqd pul orqali to‘lash mumkin.",
  },
];
