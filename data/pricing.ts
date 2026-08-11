export interface PricingPackage {
  id: string;
  name: string;
  price: string;
  priceNote?: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  cta: string;
}

export const pricingPackages: PricingPackage[] = [
  {
    id: "starter",
    name: "STARTER",
    price: "3 000 000",
    priceNote: "so‘mdan boshlab",
    description: "Oddiy landing page va kichik biznes saytlari uchun ideal boshlang‘ich paket.",
    features: [
      "1–5 sahifali sayt",
      "Responsive dizayn",
      "Asosiy animatsiyalar",
      "Aloqa formasi",
      "SEO asoslari",
      "Deployment va sozlash",
    ],
    cta: "Boshlash",
  },
  {
    id: "business",
    name: "BUSINESS",
    price: "7 000 000",
    priceNote: "so‘mdan boshlab",
    description: "Kompaniyalar uchun to‘liq funksional korporativ web-sayt yechimi.",
    features: [
      "Korporativ web-sayt",
      "Maxsus UI/UX dizayn",
      "Admin panel",
      "API integratsiyasi",
      "Kengaytirilgan SEO",
      "Analytics sozlash",
      "Deployment va qo‘llab-quvvatlash",
    ],
    cta: "Tanlash",
  },
  {
    id: "premium",
    name: "PREMIUM",
    price: "15 000 000",
    priceNote: "so‘mdan boshlab",
    description: "Jiddiy bizneslar uchun murakkab web-ilovalar va tizimlar.",
    features: [
      "Maxsus web-ilova",
      "CRM / ERP modullar",
      "Kengaytirilgan dashboard",
      "Autentifikatsiya tizimi",
      "Rol boshqaruvi",
      "API va backend",
      "Ma'lumotlar bazasi",
      "Analytics va hisobotlar",
      "Performance optimizatsiya",
      "3 oy qo‘llab-quvvatlash",
    ],
    highlighted: true,
    cta: "Eng mashhur",
  },
  {
    id: "custom",
    name: "CUSTOM",
    price: "Individual narx",
    description: "Murakkab va noyob loyihalar uchun maxsus yechim va narx.",
    features: [
      "CRM tizimlar",
      "ERP tizimlar",
      "Marketplace platformalar",
      "SaaS mahsulotlar",
      "Mobil ilovalar",
      "Avtomatlashtirish tizimlari",
      "Individual arxitektura",
      "Cheksiz funksiyalar",
    ],
    cta: "Maslahat olish",
  },
];

export const pricingNote =
  "Yakuniy narx loyiha talablari, funksiyalar soni va texnik murakkabligiga qarab belgilanadi.";

export const pricingFAQ = [
  {
    question: "Narxga nimalar kiradi?",
    answer:
      "Narxga dizayn, dasturlash, testing, deployment va ko‘rsatilgan funksiyalar kiradi. Qo‘shimcha integratsiyalar alohida kelishiladi.",
  },
  {
    question: "To‘lov qanday amalga oshiriladi?",
    answer:
      "Odatda 30% oldindan to‘lov, 40% development davrida va 30% loyiha topshirilganda. Individual shartlar ham mumkin.",
  },
  {
    question: "Loyiha muddati qancha?",
    answer:
      "STARTER — 2–4 hafta, BUSINESS — 4–8 hafta, PREMIUM — 8–16 hafta. Murakkab loyihalar uchun individual jadval tuziladi.",
  },
  {
    question: "Keyinchalik kengaytirish mumkinmi?",
    answer:
      "Ha, barcha loyihalar kengaytirish uchun mo‘ljallangan arxitektura bilan yaratiladi. Yangi funksiyalar qo‘shish oson.",
  },
];
