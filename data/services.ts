import {
  Bot,
  Code2,
  Database,
  Globe,
  Layers,
  Layout,
  LineChart,
  MonitorSmartphone,
  Palette,
  Server,
  Settings,
  ShoppingCart,
  Smartphone,
  Wrench,
  Zap,
  type LucideIcon,
} from "lucide-react";

export interface Service {
  id: string;
  number: string;
  slug: string;
  icon: LucideIcon;
  title: string;
  shortDescription: string;
  description: string;
  whoNeedsIt: string;
  whatWeBuild: string[];
  features: string[];
  technologies: string[];
  benefits: string[];
  period: string;
  category: "web" | "crm" | "mobile" | "design" | "automation" | "backend" | "seo" | "support";
}

export const homeServices = [
  {
    number: "01",
    icon: Globe,
    title: "Web dasturlash",
    description:
      "Korporativ saytlar, landing page va murakkab web-platformalar — biznesingiz uchun zamonaviy raqamli yuz.",
    technologies: ["Next.js", "React", "TypeScript"],
    slug: "web-development",
  },
  {
    number: "02",
    icon: Database,
    title: "CRM / ERP tizimlar",
    description:
      "Mijozlar, buyurtmalar va biznes jarayonlarini boshqarish uchun markazlashtirilgan tizimlar.",
    technologies: ["Node.js", "PostgreSQL", "React"],
    slug: "crm-erp",
  },
  {
    number: "03",
    icon: ShoppingCart,
    title: "E-commerce",
    description:
      "Onlayn do‘konlar, to‘lov integratsiyasi va mahsulot boshqaruvi bilan to‘liq savdo platformalari.",
    technologies: ["Next.js", "Stripe", "Redis"],
    slug: "e-commerce",
  },
  {
    number: "04",
    icon: Palette,
    title: "UI/UX dizayn",
    description:
      "Foydalanuvchi tajribasiga asoslangan interfeyslar — estetik va funksional mukammal uyg‘unlik.",
    technologies: ["Figma", "Prototyping", "Design System"],
    slug: "ui-ux-design",
  },
  {
    number: "05",
    icon: Smartphone,
    title: "Mobil ilovalar",
    description:
      "iOS va Android uchun tez, xavfsiz va zamonaviy mobil ilovalar — native va cross-platform.",
    technologies: ["React Native", "Flutter", "Expo"],
    slug: "mobile-apps",
  },
  {
    number: "06",
    icon: Bot,
    title: "Telegram Mini Apps",
    description:
      "Telegram ichida ishlaydigan mini ilovalar — buyurtma, to‘lov va mijozlar bilan aloqa.",
    technologies: ["Telegram API", "React", "Node.js"],
    slug: "telegram-mini-apps",
  },
  {
    number: "07",
    icon: Zap,
    title: "Avtomatlashtirish",
    description:
      "Takroriy jarayonlarni avtomatlashtirish — vaqt tejash va xatolarni kamaytirish.",
    technologies: ["n8n", "Webhooks", "API"],
    slug: "automation",
  },
  {
    number: "08",
    icon: Wrench,
    title: "Texnik qo‘llab-quvvatlash",
    description:
      "24/7 texnik yordam, yangilanishlar, xavfsizlik va performance monitoring.",
    technologies: ["DevOps", "Monitoring", "CI/CD"],
    slug: "support",
  },
] as const;

export const allServices: Service[] = [
  {
    id: "web-development",
    number: "01",
    slug: "web-development",
    icon: Globe,
    title: "Web dasturlash",
    shortDescription: "Korporativ saytlar, landing page va web-platformalar",
    description:
      "Web dasturlash — biznesingizning raqamli ko‘rinishini yaratishning asosi. VITA SOFT zamonaviy texnologiyalar yordamida tez, xavfsiz va SEO-optimallashtirilgan web-saytlar va platformalar ishlab chiqadi.",
    whoNeedsIt:
      "Korporativ identifikatsiya kerak bo‘lgan kompaniyalar, yangi mahsulotni bozorga chiqarayotgan startaplar, onlayn mavjudlikni kengaytirmoqchi bo‘lgan bizneslar.",
    whatWeBuild: [
      "Korporativ web-saytlar",
      "Landing page va marketing sahifalari",
      "Admin panel va boshqaruv tizimlari",
      "Murakkab web-ilovalar (SaaS)",
      "Multi-language platformalar",
    ],
    features: [
      "Responsive dizayn — barcha qurilmalarda mukammal ko‘rinish",
      "SEO-optimallashtirilgan struktura",
      "Tez yuklanish va yuqori performance",
      "Xavfsizlik standartlari (HTTPS, XSS himoya)",
      "CMS integratsiyasi",
      "Analytics va tracking",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL"],
    benefits: [
      "Professional raqamli ko‘rinish",
      "Mijozlar ishonchini oshirish",
      "Marketing samaradorligini oshirish",
      "Avtomatlashtirilgan biznes jarayonlari",
    ],
    period: "2–8 hafta",
    category: "web",
  },
  {
    id: "crm-erp",
    number: "02",
    slug: "crm-erp",
    icon: Database,
    title: "CRM / ERP tizimlar",
    shortDescription: "Biznes jarayonlarini markazlashtiruvchi tizimlar",
    description:
      "CRM va ERP tizimlar biznesingizning barcha jarayonlarini yagona platformada birlashtiradi. Mijozlar, buyurtmalar, xodimlar va moliyaviy ma'lumotlarni markazlashtirilgan boshqaruv.",
    whoNeedsIt:
      "Mijozlar bazasini tizimli boshqarish kerak bo‘lgan kompaniyalar, savdo va xizmat ko‘rsatish sohasidagi bizneslar, ko‘p filialli tashkilotlar.",
    whatWeBuild: [
      "Mijozlar boshqaruvi (CRM)",
      "Buyurtmalar va invoicelar tizimi",
      "Xodimlar va vazifalar boshqaruvi",
      "Hisobot va analytics dashboard",
      "ERP modullari (ombor, moliya, HR)",
    ],
    features: [
      "Rol-based access control",
      "Real-time bildirishnomalar",
      "Hisobot va eksport",
      "API integratsiyasi",
      "Mobil versiya",
      "Avtomatik zbackup",
    ],
    technologies: ["Node.js", "NestJS", "PostgreSQL", "Redis", "React", "Docker"],
    benefits: [
      "Jarayonlarni 40–60% tezlashtirish",
      "Ma'lumotlar markazlashtiriladi",
      "Xatolarni kamaytirish",
      "Qaror qabul qilish uchun real vaqt ma'lumotlari",
    ],
    period: "6–16 hafta",
    category: "crm",
  },
  {
    id: "e-commerce",
    number: "03",
    slug: "e-commerce",
    icon: ShoppingCart,
    title: "E-commerce",
    shortDescription: "Onlayn do‘kon va savdo platformalari",
    description:
      "To‘liq funksional onlayn do‘konlar — mahsulot katalogi, savat, to‘lov, yetkazib berish va admin panel bilan. O‘zbekiston va xalqaro bozorlar uchun moslashtirilgan.",
    whoNeedsIt:
      "Onlayn savdo boshlamoqchi bo‘lgan brendlar, mavjud do‘konni raqamlashtirmoqchi bo‘lgan bizneslar, marketplace yaratmoqchi bo‘lgan kompaniyalar.",
    whatWeBuild: [
      "B2C va B2B onlayn do‘konlar",
      "Marketplace platformalar",
      "Mahsulot va inventar boshqaruvi",
      "To‘lov tizimlari integratsiyasi",
      "Buyurtma tracking tizimi",
    ],
    features: [
      "Mahsulot filtrlash va qidiruv",
      "Ko‘p to‘lov usullari (Click, Payme, Uzcard)",
      "Buyurtma holati tracking",
      "Chegirma va promo kodlar",
      "SEO-optimallashtirilgan mahsulot sahifalari",
      "Analytics va savdo hisobotlari",
    ],
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Redis", "Stripe", "Click API"],
    benefits: [
      "24/7 onlayn savdo imkoniyati",
      "Geografik cheklovlarsiz mijozlar",
      "Avtomatlashtirilgan buyurtma jarayoni",
      "Savdo ma'lumotlarini tahlil qilish",
    ],
    period: "4–12 hafta",
    category: "web",
  },
  {
    id: "mobile-apps",
    number: "04",
    slug: "mobile-apps",
    icon: Smartphone,
    title: "Mobil ilovalar",
    shortDescription: "iOS va Android ilovalar",
    description:
      "Zamonaviy mobil ilovalar — foydalanuvchi tajribasi, tezlik va xavfsizlik ustuvor. Native va cross-platform yechimlar.",
    whoNeedsIt:
      "Mobil auditoriyaga xizmat ko‘rsatish kerak bo‘lgan bizneslar, delivery va xizmat ko‘rsatish platformalari, ichki korporativ ilovalar kerak bo‘lgan kompaniyalar.",
    whatWeBuild: [
      "iOS va Android ilovalar",
      "Cross-platform ilovalar (React Native)",
      "Push notification tizimi",
      "Offline rejim",
      "Mobil to‘lov integratsiyasi",
    ],
    features: [
      "Intuitiv UI/UX",
      "Tez yuklanish",
      "Biometrik autentifikatsiya",
      "Real-time yangilanishlar",
      "App Store va Google Play publish",
      "Analytics integratsiyasi",
    ],
    technologies: ["React Native", "Expo", "TypeScript", "Firebase", "Node.js"],
    benefits: [
      "Mijozlar bilan doimiy aloqa",
      "Brend sadoqatini oshirish",
      "Push orqali marketing",
      "Mobil trafik va konversiya o‘sishi",
    ],
    period: "6–14 hafta",
    category: "mobile",
  },
  {
    id: "ui-ux-design",
    number: "05",
    slug: "ui-ux-design",
    icon: Palette,
    title: "UI/UX dizayn",
    shortDescription: "Foydalanuvchi markazli interfeys dizayni",
    description:
      "UI/UX dizayn — mahsulotingizning foydalanuvchi bilan birinchi va eng muhim aloqasi. Biz tadqiqot, prototip va vizual dizayn orqali konversiyani oshiradigan interfeyslar yaratamiz.",
    whoNeedsIt:
      "Yangi mahsulot ishlab chiqayotgan startaplar, mavjud interfeysni yangilamoqchi bo‘lgan kompaniyalar, foydalanuvchi tajribasini yaxshilamoqchi bo‘lgan bizneslar.",
    whatWeBuild: [
      "User research va persona",
      "Wireframe va prototiplar",
      "UI dizayn va design system",
      "Usability testing",
      "Dizayn hujjatlari (handoff)",
    ],
    features: [
      "Foydalanuvchi tadqiqoti",
      "Interaktiv prototiplar",
      "Responsive dizayn",
      "Design system yaratish",
      "Accessibility standartlari",
      "Developer handoff",
    ],
    technologies: ["Figma", "FigJam", "Principle", "Maze"],
    benefits: [
      "Konversiya darajasini oshirish",
      "Foydalanuvchi qoniqishini yaxshilash",
      "Rivojlanish vaqtini qisqartirish",
      "Brend identifikatsiyasini mustahkamlash",
    ],
    period: "2–6 hafta",
    category: "design",
  },
  {
    id: "telegram-mini-apps",
    number: "06",
    slug: "telegram-mini-apps",
    icon: Bot,
    title: "Telegram Mini Apps",
    shortDescription: "Telegram ichida ishlaydigan mini ilovalar",
    description:
      "Telegram Mini Apps — O‘zbekistonda tez o‘sayotgan kanal. Buyurtma berish, to‘lov, bron qilish va mijozlar bilan aloqa — hammasi Telegram ichida.",
    whoNeedsIt:
      "Telegram auditoriyasiga xizmat ko‘rsatadigan bizneslar, restoran va xizmat ko‘rsatish sohasi, tez MVP chiqarish kerak bo‘lgan startaplar.",
    whatWeBuild: [
      "Buyurtma va bron tizimlari",
      "To‘lov integratsiyasi",
      "Katalog va mahsulot ko‘rsatish",
      "Mijozlar profili",
      "Admin bot va panel",
    ],
    features: [
      "Telegram autentifikatsiya",
      "Inline va reply keyboard",
      "To‘lov (Telegram Payments)",
      "Push xabarlar",
      "Analytics",
      "Tez ishga tushirish",
    ],
    technologies: ["Telegram Bot API", "React", "Node.js", "WebApp API"],
    benefits: [
      "Past rivojlanish narxi",
      "Telegram auditoriyasidan foydalanish",
      "Tez MVP va test",
      "O‘rnatish shart emas",
    ],
    period: "2–6 hafta",
    category: "automation",
  },
  {
    id: "automation",
    number: "07",
    slug: "automation",
    icon: Zap,
    title: "Avtomatlashtirish",
    shortDescription: "Biznes jarayonlarini avtomatlashtirish",
    description:
      "Takroriy vazifalarni avtomatlashtirish orqali jamoangiz vaqtini tejang. Integratsiyalar, webhooklar va workflow yechimlari.",
    whoNeedsIt:
      "Ko‘p manual jarayonlari bor kompaniyalar, turli tizimlarni birlashtirish kerak bo‘lgan bizneslar, operatsion xarajatlarni kamaytirmoqchi bo‘lgan tashkilotlar.",
    whatWeBuild: [
      "Workflow avtomatlashtirish",
      "Tizimlar integratsiyasi",
      "Email va SMS avtomatizatsiya",
      "Hisobot generatsiyasi",
      "Ma'lumotlar sinxronizatsiyasi",
    ],
    features: [
      "Zapier/n8n integratsiyasi",
      "Custom webhook yechimlari",
      "Scheduled tasks",
      "Error handling va monitoring",
      "Log va audit trail",
      "Scalable arxitektura",
    ],
    technologies: ["n8n", "Node.js", "Python", "Webhooks", "REST API"],
    benefits: [
      "80% gacha manual ishni kamaytirish",
      "Xatolarni minimallashtirish",
      "24/7 ishlash",
      "Operatsion xarajatlarni tejash",
    ],
    period: "2–8 hafta",
    category: "automation",
  },
  {
    id: "api-backend",
    number: "08",
    slug: "api-backend",
    icon: Server,
    title: "API / Backend",
    shortDescription: "Mustahkam backend va API yechimlari",
    description:
      "Scalable, xavfsiz va tez backend tizimlar. REST va GraphQL API, mikroservis arxitektura, real-time funksiyalar.",
    whoNeedsIt:
      "Mobil ilova backend kerak bo‘lgan kompaniyalar, uchinchi tomon integratsiyalari talab qiladigan bizneslar, yuqori yuklamaga tayyor tizim kerak bo‘lgan platformalar.",
    whatWeBuild: [
      "RESTful va GraphQL API",
      "Mikroservis arxitektura",
      "Real-time WebSocket",
      "Authentication va authorization",
      "Database dizayn va optimizatsiya",
    ],
    features: [
      "JWT va OAuth autentifikatsiya",
      "Rate limiting",
      "API dokumentatsiya (Swagger)",
      "Caching (Redis)",
      "Queue tizimlari",
      "Monitoring va logging",
    ],
    technologies: ["Node.js", "NestJS", "Express", "PostgreSQL", "MongoDB", "Redis", "Docker"],
    benefits: [
      "Scalable arxitektura",
      "Xavfsiz ma'lumotlar boshqaruvi",
      "Tez API javoblari",
      "Uson integratsiya",
    ],
    period: "4–12 hafta",
    category: "backend",
  },
  {
    id: "seo",
    number: "09",
    slug: "seo",
    icon: LineChart,
    title: "SEO optimizatsiya",
    shortDescription: "Qidiruv tizimlarida yuqori pozitsiya",
    description:
      "Texnik SEO, kontent strategiyasi va performance optimizatsiya — Google va Yandexda yuqori pozitsiyalar uchun kompleks yondashuv.",
    whoNeedsIt:
      "Organik trafik oshirmoqchi bo‘lgan bizneslar, yangi sayt ishga tushirayotgan kompaniyalar, raqobatbardosh sohalarda faoliyat yurituvchilar.",
    whatWeBuild: [
      "Texnik SEO audit",
      "On-page optimizatsiya",
      "Site speed optimizatsiya",
      "Structured data (Schema.org)",
      "SEO monitoring dashboard",
    ],
    features: [
      "Core Web Vitals optimizatsiya",
      "Meta tag va sitemap",
      "Mobile-first indexing",
      "Internal linking strategiya",
      "Analytics sozlash",
      "Monthly SEO hisobotlar",
    ],
    technologies: ["Google Search Console", "Lighthouse", "Next.js SEO", "Schema.org"],
    benefits: [
      "Organik trafik o‘sishi",
      "Brend ko‘rinishini oshirish",
      "Marketing xarajatlarini kamaytirish",
      "Uzoq muddatli natijalar",
    ],
    period: "Doimiy / 1–4 hafta audit",
    category: "seo",
  },
  {
    id: "support",
    number: "10",
    slug: "support",
    icon: Wrench,
    title: "Texnik qo‘llab-quvvatlash",
    shortDescription: "24/7 texnik xizmat va monitoring",
    description:
      "Ishga tushirilgan loyihalarni doimiy qo‘llab-quvvatlash — yangilanishlar, xavfsizlik patchlari, performance monitoring va tezkor muammolarni hal qilish.",
    whoNeedsIt:
      "Faol web-sayti yoki ilovasi bor barcha bizneslar, kritik tizimlarga ega kompaniyalar, ichki IT jamoasi yo‘q bo‘lgan tashkilotlar.",
    whatWeBuild: [
      "24/7 monitoring tizimi",
      "Backup va disaster recovery",
      "Security updates",
      "Performance optimization",
      "Feature updates va yangilanishlar",
    ],
    features: [
      "Uptime monitoring (99.9%)",
      "Tezkor javob vaqti (SLA)",
      "Oylik hisobotlar",
      "Priority support",
      "Security audit",
      "Database maintenance",
    ],
    technologies: ["Docker", "CI/CD", "Sentry", "Grafana", "GitHub Actions"],
    benefits: [
      "Biznes uzluksizligi",
      "Xavfsizlik kafolati",
      "Tezkor muammolarni hal qilish",
      "Doimiy rivojlanish",
    ],
    period: "Doimiy shartnoma",
    category: "support",
  },
];

export const technologies = {
  frontend: [
    { name: "React", icon: Code2 },
    { name: "Next.js", icon: Layers },
    { name: "TypeScript", icon: Code2 },
    { name: "Tailwind CSS", icon: Layout },
  ],
  backend: [
    { name: "Node.js", icon: Server },
    { name: "Express", icon: Server },
    { name: "NestJS", icon: Server },
  ],
  database: [
    { name: "PostgreSQL", icon: Database },
    { name: "MongoDB", icon: Database },
    { name: "Redis", icon: Database },
  ],
  devops: [
    { name: "Docker", icon: Settings },
    { name: "Git", icon: Code2 },
    { name: "CI/CD", icon: Zap },
  ],
};

export const processSteps = [
  {
    number: "01",
    title: "Tahlil",
    description:
      "Biznesingiz, maqsadlaringiz va auditoriyangizni chuqur o‘rganamiz. Raqobatchilarni tahlil qilamiz va texnik talablarni aniqlaymiz.",
  },
  {
    number: "02",
    title: "Strategiya",
    description:
      "Mahsulot strategiyasi, funksional talablar va loyiha yo‘l xaritasini tuzamiz. Muddat va byudjet rejalashtiramiz.",
  },
  {
    number: "03",
    title: "Dizayn",
    description:
      "Wireframe, prototip va UI dizayn yaratamiz. Foydalanuvchi tajribasini sinab ko‘ramiz va tasdiqlaymiz.",
  },
  {
    number: "04",
    title: "Dasturlash",
    description:
      "Agile metodologiya bo‘yicha iterativ rivojlanish. Har hafta progress ko‘rsatamiz va fikr-mulohazalarni qabul qilamiz.",
  },
  {
    number: "05",
    title: "Test",
    description:
      "Funksional, performance va xavfsizlik testlari. Turli qurilmalar va brauzerlarda sinovdan o‘tkazamiz.",
  },
  {
    number: "06",
    title: "Ishga tushirish",
    description:
      "Production muhitga deploy, DNS sozlash, SSL sertifikat va monitoring tizimlarini yoqamiz.",
  },
  {
    number: "07",
    title: "Qo‘llab-quvvatlash",
    description:
      "Ishga tushirgandan keyin ham yoningizdamiz — texnik yordam, yangilanishlar va doimiy yaxshilash.",
  },
];

export const trustItems = [
  {
    number: "01",
    icon: MonitorSmartphone,
    title: "Individual yondashuv",
    description:
      "Har bir loyiha noyob. Shablon yechimlar emas — biznesingizga mos maxsus arxitektura va dizayn yaratamiz.",
  },
  {
    number: "02",
    icon: Code2,
    title: "Zamonaviy texnologiyalar",
    description:
      "Next.js, React, TypeScript kabi eng so‘nggi va ishonchli texnologiyalar bilan ishlaymiz.",
  },
  {
    number: "03",
    icon: Zap,
    title: "Tezkor ishlab chiqish",
    description:
      "Agile metodologiya va tajribali jamoa — loyihangizni vaqtida va sifatli yetkazamiz.",
  },
  {
    number: "04",
    icon: Layers,
    title: "Shaffof jarayon",
    description:
      "Har bosqichda progress hisobotlari, ochiq aloqa va kutilmagan xarajatlarsiz ishlash.",
  },
  {
    number: "05",
    icon: LineChart,
    title: "Yuqori sifat",
    description:
      "Kod sifati, performance va xavfsizlik — har bir loyihada eng yuqori standartlarni qo‘llaymiz.",
  },
  {
    number: "06",
    icon: Wrench,
    title: "Texnik qo‘llab-quvvatlash",
    description:
      "Ishga tushirgandan keyin 24/7 texnik yordam, monitoring va doimiy yangilanishlar.",
  },
];
