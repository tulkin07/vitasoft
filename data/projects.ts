export type ProjectCategory =
  | "all"
  | "web"
  | "crm"
  | "ecommerce"
  | "mobile"
  | "design"
  | "automation";

export interface Project {
  slug: string;
  number: string;
  title: string;
  category: ProjectCategory;
  categoryLabel: string;
  year: string;
  shortDescription: string;
  description: string;
  technologies: string[];
  result: string;
  problem: string;
  solution: string;
  features: string[];
  process: string[];
  results: string[];
  color: string;
}

export const projects: Project[] = [
  {
    slug: "payno",
    number: "01",
    title: "Payno",
    category: "web",
    categoryLabel: "FinTech / Dashboard",
    year: "2025",
    shortDescription:
      "Premium personal finance dashboard with sleek charts, financial cards, and glass panels.",
    description:
      "Payno is a premium personal finance dashboard that helps users track spending, savings, and investments through an elegant glassmorphic interface.",
    technologies: ["React", "Next.js", "UI/UX", "Dashboard", "TypeScript"],
    result: "User engagement increased by 60%",
    problem:
      "Users struggled to visualize finances across fragmented banking apps with outdated, cluttered interfaces.",
    solution:
      "We designed and built a unified finance dashboard with real-time charts, smart categorization, and glass UI components.",
    features: [
      "Interactive spending charts",
      "Glassmorphic financial cards",
      "Budget tracking & alerts",
      "Multi-account aggregation",
      "Dark & light themes",
      "Mobile-responsive dashboard",
    ],
    process: [
      "User research & finance workflows",
      "Glass UI design system",
      "Dashboard architecture",
      "Chart & data visualization",
      "Beta testing with real users",
      "Production launch",
    ],
    results: [
      "60% increase in daily active users",
      "Average session time doubled",
      "4.9★ app store rating",
      "Featured in design community showcases",
    ],
    color: "#2563EB",
  },
  {
    slug: "edusmart",
    number: "02",
    title: "EduSmart",
    category: "web",
    categoryLabel: "EdTech / Platform",
    year: "2025",
    shortDescription:
      "Automated education ecosystem with dynamic quiz results, data views, and student progress tracking.",
    description:
      "EduSmart is an automated education platform connecting teachers, students, and administrators through quizzes, analytics, and progress dashboards.",
    technologies: ["React", "Next.js", "UI/UX", "Dashboard", "Node.js"],
    result: "5000+ students onboarded",
    problem:
      "Educational institutions lacked a unified platform for quizzes, grading, and progress analytics across online and offline learning.",
    solution:
      "We built an end-to-end EdTech ecosystem with automated quiz grading, student dashboards, and real-time performance tracking.",
    features: [
      "Dynamic quiz engine",
      "Student progress dashboards",
      "Automated grading system",
      "Teacher admin panel",
      "Analytics & reporting",
      "Certificate generation",
    ],
    process: [
      "Learning workflow analysis",
      "Platform architecture design",
      "UI/UX for students & teachers",
      "Quiz engine development",
      "Pilot with 3 institutions",
      "Full-scale rollout",
    ],
    results: [
      "5000+ active students",
      "Grading time reduced by 70%",
      "Teacher satisfaction score: 96%",
      "Tripled course completion rates",
    ],
    color: "#7C3AED",
  },
  {
    slug: "vita-crm",
    number: "01",
    title: "VITA CRM",
    category: "crm",
    categoryLabel: "CRM / SaaS",
    year: "2025",
    shortDescription:
      "Biznes jarayonlarini markazlashtirish orqali boshqaruv samaradorligini oshiruvchi CRM platforma.",
    description:
      "VITA CRM — kichik va o‘rta bizneslar uchun mo‘ljallangan to‘liq funksional mijozlar boshqaruvi tizimi. Mijozlar, buyurtmalar, vazifalar va hisobotlar yagona platformada.",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Redis", "Tailwind CSS"],
    result: "Boshqaruv samaradorligi 45% ga oshdi",
    problem:
      "Buyurtmalar, mijozlar va xodimlar haqidagi ma'lumotlar turli tizimlarda (Excel, Telegram, qog‘oz) saqlanar edi. Ma'lumotlarni topish va tahlil qilish soatlab vaqt olardi.",
    solution:
      "Markazlashtirilgan CRM platforma ishlab chiqildi. Barcha biznes jarayonlari — mijozlar, buyurtmalar, vazifalar va hisobotlar — yagona tizimga birlashtirildi.",
    features: [
      "Mijozlar bazasi va segmentatsiya",
      "Buyurtmalar va invoicelar boshqaruvi",
      "Vazifalar va loyihalar tracking",
      "Real-time dashboard va hisobotlar",
      "Rol-based access control",
      "Mobil responsive interfeys",
    ],
    process: [
      "Biznes jarayonlarini tahlil qildik",
      "CRM arxitekturasini loyihaladik",
      "UI/UX dizayn va prototip yaratdik",
      "Backend API va frontend ishlab chiqdik",
      "Mavjud ma'lumotlarni migratsiya qildik",
      "Xodimlar uchun trening o‘tkazdik",
    ],
    results: [
      "Ma'lumotlarni qidirish vaqti 80% qisqardi",
      "Buyurtma jarayoni avtomatlashtirildi",
      "Hisobotlar real vaqtda generatsiya qilinadi",
      "Jamoa samaradorligi sezilarli oshdi",
    ],
    color: "#C9A45C",
  },
  {
    slug: "vita-academy",
    number: "02",
    title: "VITA Academy",
    category: "web",
    categoryLabel: "EdTech",
    year: "2025",
    shortDescription:
      "Onlayn ta'lim platformasi — kurslar, testlar va sertifikatlar bilan to‘liq o‘quv ekotizimi.",
    description:
      "VITA Academy — zamonaviy onlayn ta'lim platformasi. Video darslar, interaktiv testlar, progress tracking va sertifikat berish tizimi.",
    technologies: ["Next.js", "React", "Node.js", "MongoDB", "AWS S3"],
    result: "5000+ faol o‘quvchi ro‘yxatdan o‘tdi",
    problem:
      "Ta'lim markazi offline darslar bilan cheklangan edi. COVID davrida onlayn o‘tish zarurati paydo bo‘ldi, lekin tayyor yechim yo‘q edi.",
    solution:
      "To‘liq funksional EdTech platforma yaratildi — video streaming, test tizimi, o‘qituvchi paneli va o‘quvchi dashboard.",
    features: [
      "Video darslar va materiallar",
      "Interaktiv testlar va quizlar",
      "Progress tracking",
      "Sertifikat generatsiyasi",
      "O‘qituvchi admin paneli",
      "To‘lov integratsiyasi",
    ],
    process: [
      "Ta'lim jarayonini tahlil qildik",
      "Platforma arxitekturasini loyihaladik",
      "UI/UX dizayn yaratdik",
      "Video streaming tizimini integratsiya qildik",
      "Beta test o‘tkazdik",
      "Production ga chiqardik",
    ],
    results: [
      "5000+ ro‘yxatdan o‘tgan o‘quvchi",
      "Geografik cheklov yo‘q — butun O‘zbekiston",
      "Darslar soni 3 baravar oshdi",
      "O‘qituvchilar vaqti 60% tejaldi",
    ],
    color: "#8E6E32",
  },
  {
    slug: "stomatologiya-crm",
    number: "03",
    title: "Stomatologiya CRM",
    category: "crm",
    categoryLabel: "Healthcare",
    year: "2024",
    shortDescription:
      "Stomatologiya klinikalari uchun maxsus CRM — bemorlar, uchrashuvlar va davolash tarixi boshqaruvi.",
    description:
      "Stomatologiya sohasiga ixtisoslashtirilgan CRM tizimi. Bemorlar kartasi, uchrashuvlar jadvali, davolash rejasi va moliyaviy hisobotlar.",
    technologies: ["React", "Node.js", "PostgreSQL", "Telegram Bot"],
    result: "Uchrashuvlar soni 30% ga oshdi",
    problem:
      "Klinika bemorlar ma'lumotlarini qog‘ozda saqlar, uchrashuvlar telefon orqali bron qilinardi. No-show holatlari ko‘p edi.",
    solution:
      "Maxsus stomatologiya CRM yaratildi — onlayn bron, avtomatik eslatmalar va to‘liq bemor tarixi.",
    features: [
      "Bemorlar kartasi va tarixi",
      "Onlayn uchrashuv bron qilish",
      "Telegram eslatmalar",
      "Davolash rejasi va reseptlar",
      "Moliyaviy hisobotlar",
      "Shifokorlar jadvali",
    ],
    process: [
      "Klinika jarayonlarini kuzatdik",
      "Maxsus CRM talablarini aniqladik",
      "Dizayn va prototip yaratdik",
      "Tizimni ishlab chiqdik",
      "Telegram bot integratsiya qildik",
      "Xodimlarni o‘qitdik",
    ],
    results: [
      "No-show holatlari 50% kamaydi",
      "Uchrashuvlar soni 30% oshdi",
      "Qog‘oz hujjatlarsiz ishlash",
      "Bemorlar qoniqishi yaxshilandi",
    ],
    color: "#E2C98B",
  },
  {
    slug: "connecta-crm",
    number: "04",
    title: "Connecta CRM",
    category: "crm",
    categoryLabel: "Business",
    year: "2024",
    shortDescription:
      "Savdo va xizmat ko‘rsatish kompaniyalari uchun CRM — leadlar, bitimlar va jamoa boshqaruvi.",
    description:
      "Connecta CRM — B2B savdo kompaniyalari uchun mo‘ljallangan. Lead tracking, sales pipeline, jamoa KPI va integratsiyalar.",
    technologies: ["Next.js", "NestJS", "PostgreSQL", "Redis"],
    result: "Savdo konversiyasi 25% ga oshdi",
    problem:
      "Savdo jamoasi leadlarni Excel da kuzatar, bitimlar holati noaniq edi. Menejerlar real vaqtda progress ko‘ra olmasdi.",
    solution:
      "Sales-focused CRM platforma yaratildi — pipeline visualization, avtomatik lead assignment va KPI dashboard.",
    features: [
      "Lead va contact boshqaruvi",
      "Sales pipeline (Kanban)",
      "Avtomatik lead assignment",
      "Email integratsiyasi",
      "KPI dashboard",
      "Hisobot va eksport",
    ],
    process: [
      "Savdo jarayonini o‘rganish",
      "CRM funksional talablar",
      "UI/UX va pipeline dizayn",
      "Backend va frontend development",
      "Email integratsiya",
      "Jamoa treningi",
    ],
    results: [
      "Lead response vaqti 70% qisqardi",
      "Savdo konversiyasi 25% oshdi",
      "Jamoa samaradorligi oshdi",
      "Menejerlar real vaqt ko‘radi",
    ],
    color: "#C9A45C",
  },
  {
    slug: "ecommerce-platform",
    number: "05",
    title: "E-commerce Platform",
    category: "ecommerce",
    categoryLabel: "E-commerce",
    year: "2024",
    shortDescription:
      "To‘liq funksional onlayn do‘kon — mahsulot katalogi, to‘lov va yetkazib berish integratsiyasi.",
    description:
      "Zamonaviy e-commerce platforma — 1000+ mahsulot, ko‘p to‘lov usullari, admin panel va analytics dashboard.",
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Click", "Payme"],
    result: "Oylik savdo 200% ga oshdi",
    problem:
      "Biznes faqat offline savdo qilar, onlayn kanali yo‘q edi. Raqobatchilar onlayn bozor egallagan edi.",
    solution:
      "To‘liq funksional onlayn do‘kon yaratildi — O‘zbekiston to‘lov tizimlari bilan integratsiya, yetkazib berish tracking.",
    features: [
      "Mahsulot katalogi va filtrlash",
      "Savat va checkout",
      "Click, Payme, Uzcard to‘lov",
      "Buyurtma tracking",
      "Admin panel",
      "SEO optimizatsiya",
    ],
    process: [
      "Biznes modelini tahlil qildik",
      "Platforma arxitekturasi",
      "UI/UX dizayn",
      "Development va integratsiyalar",
      "To‘lov tizimlari ulash",
      "Launch va marketing",
    ],
    results: [
      "Oylik onlayn savdo 200% oshdi",
      "Yangi mijozlar segmenti ochildi",
      "24/7 savdo imkoniyati",
      "Geografik qamrov kengaydi",
    ],
    color: "#8E6E32",
  },
  {
    slug: "telegram-booking",
    number: "06",
    title: "Telegram Booking System",
    category: "automation",
    categoryLabel: "Automation",
    year: "2025",
    shortDescription:
      "Telegram orqali xizmat bron qilish tizimi — avtomatik eslatmalar va to‘lov integratsiyasi.",
    description:
      "Telegram Mini App va bot orqali xizmat bron qilish. Restoran, salon va xizmat ko‘rsatish bizneslari uchun.",
    technologies: ["Telegram Bot API", "React", "Node.js", "PostgreSQL"],
    result: "Bron jarayoni 90% avtomatlashtirildi",
    problem:
      "Mijozlar telefon orqali bron qilar, operatorlar vaqt sarflar edi. No-show va double booking muammolari bor edi.",
    solution:
      "Telegram Mini App yaratildi — onlayn bron, avtomatik tasdiqlash, eslatmalar va to‘lov imkoniyati.",
    features: [
      "Telegram Mini App interfeys",
      "Real-time bron kalendari",
      "Avtomatik eslatmalar",
      "To‘lov integratsiyasi",
      "Admin panel",
      "Statistika va hisobotlar",
    ],
    process: [
      "Bron jarayonini tahlil qildik",
      "Telegram Mini App dizayn",
      "Bot va web app development",
      "To‘lov integratsiyasi",
      "Beta test",
      "Production launch",
    ],
    results: [
      "Operator yuklamasi 90% kamaydi",
      "No-show 40% ga tushdi",
      "Mijozlar qoniqishi oshdi",
      "24/7 bron imkoniyati",
    ],
    color: "#E2C98B",
  },
  {
    slug: "logistics-dashboard",
    number: "07",
    title: "Logistics Dashboard",
    category: "web",
    categoryLabel: "Web App",
    year: "2024",
    shortDescription:
      "Logistika kompaniyasi uchun real-time tracking dashboard — yetkazib berish va transport boshqaruvi.",
    description:
      "Logistika operatsiyalarini real vaqtda kuzatish platformasi. Transport, marshrutlar, yetkazib berish holati va analytics.",
    technologies: ["React", "Node.js", "MongoDB", "WebSocket", "Mapbox"],
    result: "Yetkazib berish vaqti 20% qisqardi",
    problem:
      "Logistika operatsiyalari telefon va radio orqali boshqarilar, real vaqt ma'lumot yo‘q edi.",
    solution:
      "Real-time tracking dashboard yaratildi — GPS integratsiya, marshrut optimizatsiya va avtomatik bildirishnomalar.",
    features: [
      "Real-time GPS tracking",
      "Marshrut optimizatsiya",
      "Yetkazib berish holati",
      "Haydovchi mobil ilova",
      "Analytics dashboard",
      "Mijoz tracking sahifasi",
    ],
    process: [
      "Logistika jarayonini o‘rganish",
      "Dashboard arxitektura",
      "UI/UX dizayn",
      "Backend va WebSocket",
      "GPS integratsiya",
      "Pilot test va launch",
    ],
    results: [
      "Yetkazib berish vaqti 20% qisqardi",
      "Yoqilg‘i xarajati 15% kamaydi",
      "Mijozlar real vaqt kuzatadi",
      "Operatsion samaradorlik oshdi",
    ],
    color: "#C9A45C",
  },
  {
    slug: "fintech-mobile",
    number: "08",
    title: "FinTech Mobile App",
    category: "mobile",
    categoryLabel: "Mobile",
    year: "2025",
    shortDescription:
      "Moliyaviy xizmatlar mobil ilovasi — to‘lovlar, balans va tranzaksiyalar boshqaruvi.",
    description:
      "Zamonaviy FinTech mobil ilova — xavfsiz to‘lovlar, balans monitoring, tranzaksiya tarixi va push bildirishnomalar.",
    technologies: ["React Native", "Node.js", "PostgreSQL", "Biometrics"],
    result: "10000+ faol foydalanuvchi",
    problem:
      "Mijozlar moliyaviy operatsiyalarni faqat ofisda yoki veb-saytda bajarar edi. Mobil qulaylik talab qilinardi.",
    solution:
      "Xavfsiz va tez mobil ilova yaratildi — biometrik autentifikatsiya, real-time balans va to‘lov imkoniyatlari.",
    features: [
      "Biometrik autentifikatsiya",
      "Real-time balans",
      "To‘lov va o‘tkazmalar",
      "Tranzaksiya tarixi",
      "Push bildirishnomalar",
      "QR to‘lov",
    ],
    process: [
      "Foydalanuvchi tadqiqoti",
      "Mobil UX dizayn",
      "React Native development",
      "Xavfsizlik audit",
      "App Store va Play Store publish",
      "Marketing launch",
    ],
    results: [
      "10000+ faol foydalanuvchi",
      "Mobil tranzaksiyalar 80% ga oshdi",
      "Mijozlar qoniqishi 4.8/5",
      "Operatsion xarajat kamaydi",
    ],
    color: "#8E6E32",
  },
];

export const categoryFilters: { value: ProjectCategory; label: string }[] = [
  { value: "all", label: "Barchasi" },
  { value: "web", label: "Web" },
  { value: "crm", label: "CRM" },
  { value: "ecommerce", label: "E-commerce" },
  { value: "mobile", label: "Mobile" },
  { value: "design", label: "Design" },
  { value: "automation", label: "Automation" },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
