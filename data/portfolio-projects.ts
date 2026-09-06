import type { Locale } from "@/i18n/routing";
import type { ProjectCategory } from "@/data/projects";

export interface PortfolioProjectContent {
  title: string;
  categoryLabel: string;
  shortDescription: string;
  description: string;
  result: string;
  problem: string;
  solution: string;
  features: string[];
  process: string[];
  results: string[];
}

export interface PortfolioProjectDefinition {
  slug: string;
  number: string;
  category: ProjectCategory;
  year: string;
  color: string;
  image: string;
  liveUrl: string;
  technologies: string[];
  i18n: Record<Locale, PortfolioProjectContent>;
}

const processSteps: Record<Locale, string[]> = {
  uz: [
    "Talablarni va biznes jarayonlarini tahlil qildik",
    "UI/UX dizayn va tizim arxitekturasini yaratdik",
    "Frontend va backend ishlab chiqdik",
    "Test, integratsiya va xavfsizlik tekshiruvi",
    "Ishga tushirish va qo'llab-quvvatlash",
  ],
  en: [
    "Analyzed requirements and business workflows",
    "Designed UI/UX and system architecture",
    "Built frontend and backend",
    "Testing, integration, and security review",
    "Launch and ongoing support",
  ],
  ru: [
    "Проанализировали требования и бизнес-процессы",
    "Спроектировали UI/UX и архитектуру системы",
    "Разработали frontend и backend",
    "Тестирование, интеграция и проверка безопасности",
    "Запуск и сопровождение",
  ],
};

export const portfolioProjects: PortfolioProjectDefinition[] = [
  {
    slug: "lx1",
    number: "01",
    category: "crm",
    year: "2025",
    color: "#2563EB",
    image: "/images/portfolio/lx1-dashboard.jpg",
    liveUrl: "https://eva.logistix.one",
    technologies: ["Next.js", "React", "TypeScript", "PostgreSQL", "CRM"],
    i18n: {
      uz: {
        title: "LX1",
        categoryLabel: "Logistics CRM",
        shortDescription:
          "Logistika kompaniyalari uchun yuk, bit, haydovchi va broker jarayonlarini boshqaruvchi CRM platforma.",
        description:
          "LX1 — logistika kompaniyalari uchun ishlab chiqilgan keng qamrovli CRM platformasi bo'lib, yuk tashish, jo'natmalarni boshqarish, transport resurslarini optimallashtirish va kompaniya ichki jarayonlarini soddalashtirish uchun mo'ljallangan. Dispatcherlar yuk topadi va bit yaratadi, HR xodimlar bilan shartnoma qiladi, driverlar yuk yetkazadi, brokerlar esa transport bozorini boshqaradi.",
        result: "Ish jarayonlari avtomatlashtirildi, aloqa yaxshilandi, vaqt va resurslar tejaldi.",
        problem:
          "Yuklarni boshqarish va nazorat qilish, Dispatcher, HR, Driver va Broker rollarini bir tizimda boshqarish, kompaniya ichki jarayonlarini avtomatlashtirish zarurati.",
        solution:
          "Barcha rollar uchun markazlashtirilgan CRM arxitekturasi yaratildi: bit va yuk boshqaruvi, haydovchilar va shartnomalar tizimi, role-based access bilan.",
        features: [
          "Role-based access",
          "Bit va load management",
          "Driver management va contract system",
          "Markazlashtirilgan CRM arxitekturasi",
        ],
        process: processSteps.uz,
        results: [
          "Ish jarayonlari avtomatlashtirildi",
          "Xodimlar o'rtasidagi aloqa yaxshilandi",
          "Vaqt va resurslar tejaldi",
          "Operatsion jarayonlar markazlashtirildi",
        ],
      },
      en: {
        title: "LX1",
        categoryLabel: "Logistics CRM",
        shortDescription:
          "CRM platform for logistics companies to manage loads, trips, drivers, and broker workflows.",
        description:
          "LX1 is a comprehensive CRM platform built for logistics companies to manage freight, shipments, transport resources, and internal operations. Dispatchers find loads and create trips, HR manages contracts, drivers deliver freight, and brokers manage the transport market.",
        result: "Workflows were automated, communication improved, and time and resources were saved.",
        problem:
          "Need to manage loads and operations, coordinate Dispatcher, HR, Driver, and Broker roles in one system, and automate internal company processes.",
        solution:
          "We built a centralized CRM architecture with trip and load management, driver and contract workflows, and role-based access.",
        features: [
          "Role-based access",
          "Trip and load management",
          "Driver management and contract system",
          "Centralized CRM architecture",
        ],
        process: processSteps.en,
        results: [
          "Operational workflows were automated",
          "Team communication improved",
          "Time and resources were saved",
          "Internal processes became centralized",
        ],
      },
      ru: {
        title: "LX1",
        categoryLabel: "Logistics CRM",
        shortDescription:
          "CRM-платформа для логистических компаний: управление грузами, рейсами, водителями и брокерами.",
        description:
          "LX1 — комплексная CRM-платформа для логистических компаний, предназначенная для управления перевозками, отправлениями, транспортными ресурсами и внутренними процессами. Диспетчеры находят грузы и создают рейсы, HR оформляет договоры, водители доставляют грузы, брокеры управляют рынком перевозок.",
        result: "Процессы автоматизированы, коммуникация улучшена, время и ресурсы сэкономлены.",
        problem:
          "Необходимо управлять грузами, координировать роли Dispatcher, HR, Driver и Broker в одной системе и автоматизировать внутренние процессы.",
        solution:
          "Создана централизованная CRM-архитектура с управлением рейсами и грузами, водителями, договорами и role-based access.",
        features: [
          "Role-based access",
          "Управление рейсами и грузами",
          "Управление водителями и договорами",
          "Централизованная CRM-архитектура",
        ],
        process: processSteps.ru,
        results: [
          "Рабочие процессы автоматизированы",
          "Коммуникация между сотрудниками улучшена",
          "Сэкономлены время и ресурсы",
          "Операционные процессы централизованы",
        ],
      },
    },
  },
  {
    slug: "stomatologiya-uz",
    number: "02",
    category: "crm",
    year: "2024",
    color: "#E2C98B",
    image: "/images/portfolio/stomatologiya-uz.jpg",
    liveUrl: "http://admin.stomatologiya.uz/",
    technologies: ["React", "Node.js", "PostgreSQL", "Admin Panel"],
    i18n: {
      uz: {
        title: "Stomatologiya.uz",
        categoryLabel: "Dental CRM",
        shortDescription:
          "Stomatologiya klinikalari uchun bemorlar, qabul va davolash tarixini boshqaruvchi maxsus CRM.",
        description:
          "Stomatologiya.uz — stomatologiya klinikalari uchun ishlab chiqilgan maxsus CRM tizimi bo'lib, bemorlarni ro'yxatdan o'tkazish, qabulni rejalashtirish, davolash tarixini saqlash va klinika xodimlarining ish jarayonlarini samarali boshqarishga imkon beradi.",
        result: "Qabul jarayoni tezlashtirildi, ma'lumotlar xavfsiz saqlandi, klinika samaradorligi oshdi.",
        problem:
          "Qabulni rejalashtirish, bemorlar bilan ishlash va klinika ichki jarayonlarini avtomatlashtirish zarurati.",
        solution:
          "Maxsus stomatologiya CRM yaratildi: onlayn qabul, bemorlar bazasi, davolash tarixi va admin panel bilan.",
        features: [
          "Appointment booking",
          "Client management",
          "Treatment history",
          "Admin panel",
        ],
        process: processSteps.uz,
        results: [
          "Qabul jarayoni tezlashtirildi",
          "Bemorlar ma'lumotlari xavfsiz saqlandi",
          "Klinika ish samaradorligi oshdi",
          "Ichki jarayonlar markazlashtirildi",
        ],
      },
      en: {
        title: "Stomatologiya.uz",
        categoryLabel: "Dental CRM",
        shortDescription:
          "Custom CRM for dental clinics to manage patients, appointments, and treatment history.",
        description:
          "Stomatologiya.uz is a specialized CRM system for dental clinics that supports patient registration, appointment scheduling, treatment history, and efficient staff workflow management.",
        result: "Appointment flow became faster, data is stored securely, and clinic efficiency improved.",
        problem:
          "Need to streamline appointment scheduling, patient management, and internal clinic automation.",
        solution:
          "We built a dental CRM with online booking, patient records, treatment history, and an admin panel.",
        features: [
          "Appointment booking",
          "Client management",
          "Treatment history",
          "Admin panel",
        ],
        process: processSteps.en,
        results: [
          "Appointment process became faster",
          "Patient data is stored securely",
          "Clinic efficiency improved",
          "Internal workflows were centralized",
        ],
      },
      ru: {
        title: "Stomatologiya.uz",
        categoryLabel: "Dental CRM",
        shortDescription:
          "Специализированная CRM для стоматологических клиник: пациенты, записи и история лечения.",
        description:
          "Stomatologiya.uz — специализированная CRM-система для стоматологических клиник, которая поддерживает регистрацию пациентов, планирование приемов, историю лечения и эффективное управление работой персонала.",
        result: "Процесс записи ускорился, данные хранятся безопасно, эффективность клиники выросла.",
        problem:
          "Необходимо упростить запись на прием, работу с пациентами и автоматизацию внутренних процессов клиники.",
        solution:
          "Разработана стоматологическая CRM с онлайн-записью, базой пациентов, историей лечения и admin panel.",
        features: [
          "Appointment booking",
          "Client management",
          "Treatment history",
          "Admin panel",
        ],
        process: processSteps.ru,
        results: [
          "Процесс записи ускорился",
          "Данные пациентов хранятся безопасно",
          "Эффективность клиники повысилась",
          "Внутренние процессы централизованы",
        ],
      },
    },
  },
  {
    slug: "cardiofergana",
    number: "03",
    category: "web",
    year: "2024",
    color: "#DC2626",
    image: "/images/portfolio/cardiofergana.jpg",
    liveUrl: "https://cardiofergana.uz/",
    technologies: ["Next.js", "React", "Tailwind CSS", "SEO"],
    i18n: {
      uz: {
        title: "CardioFergana.uz",
        categoryLabel: "Medical Website",
        shortDescription:
          "Yurak-qon tomir klinikasi uchun zamonaviy veb-sayt va onlayn qabulga yozilish tizimi.",
        description:
          "CardioFergana.uz — xususiy yurak-qon tomir klinikasi uchun ishlab chiqilgan zamonaviy veb-sayt. Klinika haqida ma'lumot, shifokorlar va xizmatlar, onlayn qabulga yozilish va qulay interfeys taqdim etiladi.",
        result: "Klinika onlayn taqdim etildi, qabulga yozilish optimallashtirildi, mijozlar soni oshdi.",
        problem:
          "Klinikani onlayn taqdim etish va qabulga yozilish jarayonini tezlashtirish zarurati.",
        solution:
          "Responsive veb-sayt yaratildi: shifokorlar va xizmatlar sahifalari, onlayn qabul formasi va SEO optimizatsiya bilan.",
        features: [
          "Online appointment booking",
          "Shifokorlar va xizmatlar sahifalari",
          "Responsive design",
          "SEO-friendly structure",
        ],
        process: processSteps.uz,
        results: [
          "Klinika onlayn taqdim etildi",
          "Qabulga yozilish jarayoni optimallashtirildi",
          "Mijozlar soni oshdi",
          "Ma'lumotlarga tez kirish imkoniyati yaratildi",
        ],
      },
      en: {
        title: "CardioFergana.uz",
        categoryLabel: "Medical Website",
        shortDescription:
          "Modern website and online appointment system for a private cardiology clinic.",
        description:
          "CardioFergana.uz is a modern website for a private cardiovascular clinic, providing clinic information, doctors and services, online appointment booking, and a user-friendly interface.",
        result: "The clinic went online, appointment booking was optimized, and client volume increased.",
        problem: "Need to present the clinic online and simplify the appointment booking process.",
        solution:
          "We built a responsive website with doctor and service pages, online booking, and SEO optimization.",
        features: [
          "Online appointment booking",
          "Doctors and services pages",
          "Responsive design",
          "SEO-friendly structure",
        ],
        process: processSteps.en,
        results: [
          "The clinic was presented online",
          "Appointment booking was optimized",
          "Client volume increased",
          "Patients can access information faster",
        ],
      },
      ru: {
        title: "CardioFergana.uz",
        categoryLabel: "Medical Website",
        shortDescription:
          "Современный сайт и онлайн-запись для частной кардиологической клиники.",
        description:
          "CardioFergana.uz — современный сайт для частной клиники сердечно-сосудистых заболеваний с информацией о клинике, врачах и услугах, онлайн-записью и удобным интерфейсом.",
        result: "Клиника представлена онлайн, запись оптимизирована, число клиентов выросло.",
        problem: "Необходимо представить клинику онлайн и ускорить процесс записи на прием.",
        solution:
          "Создан responsive сайт со страницами врачей и услуг, онлайн-записью и SEO-оптимизацией.",
        features: [
          "Online appointment booking",
          "Страницы врачей и услуг",
          "Responsive design",
          "SEO-friendly structure",
        ],
        process: processSteps.ru,
        results: [
          "Клиника представлена онлайн",
          "Процесс записи оптимизирован",
          "Число клиентов увеличилось",
          "Пациенты быстрее находят нужную информацию",
        ],
      },
    },
  },
  {
    slug: "my-1uz",
    number: "04",
    category: "crm",
    year: "2024",
    color: "#C9A45C",
    image: "/images/portfolio/my-1uz.jpg",
    liveUrl: "https://my.1uz.uz/",
    technologies: ["React", "Node.js", "PostgreSQL", "Dashboard"],
    i18n: {
      uz: {
        title: "my.1uz",
        categoryLabel: "Business Management",
        shortDescription:
          "Buxgalteriya, xodimlar, inventarizatsiya va biznes jarayonlarini boshqarish tizimi.",
        description:
          "My.1uz — buxgalteriya hisobi, xodimlar, inventarizatsiya va kompaniya biznes jarayonlarini boshqarish uchun ishlab chiqilgan kompleks tizim. Menejerlar hisobotlar, moliyaviy ma'lumotlar va ichki jarayonlarni yagona platformada kuzatadi.",
        result: "Ichki jarayonlar avtomatlashtirildi, xatolar kamaydi, boshqaruv qarorlari tezlashtirildi.",
        problem:
          "Buxgalteriya, xodimlar va inventarizatsiyani boshqarish, menejerlar uchun shaffof biznes nazorati zarurati.",
        solution:
          "Intuitiv platforma yaratildi: accounting tracking, employee management, inventory control va manager dashboards bilan.",
        features: [
          "Accounting tracking",
          "Employee management",
          "Inventory control",
          "Manager dashboards",
        ],
        process: processSteps.uz,
        results: [
          "Ichki jarayonlar avtomatlashtirildi",
          "Inson xatolari kamaydi",
          "Boshqaruv qarorlari tezlashtirildi",
          "Biznes jarayonlari raqamlashtirildi",
        ],
      },
      en: {
        title: "my.1uz",
        categoryLabel: "Business Management",
        shortDescription:
          "System for accounting, employees, inventory, and business process management.",
        description:
          "My.1uz is a comprehensive system for accounting, employee management, inventory, and internal business operations. Managers track reports, financial data, and workflows from one platform.",
        result: "Internal processes were automated, errors decreased, and management decisions became faster.",
        problem:
          "Need transparent management of accounting, employees, inventory, and business operations for managers.",
        solution:
          "We built an intuitive platform with accounting tracking, employee management, inventory control, and manager dashboards.",
        features: [
          "Accounting tracking",
          "Employee management",
          "Inventory control",
          "Manager dashboards",
        ],
        process: processSteps.en,
        results: [
          "Internal processes were automated",
          "Human errors decreased",
          "Management decisions became faster",
          "Business workflows were digitized",
        ],
      },
      ru: {
        title: "my.1uz",
        categoryLabel: "Business Management",
        shortDescription:
          "Система для бухгалтерии, сотрудников, инвентаризации и управления бизнес-процессами.",
        description:
          "My.1uz — комплексная система для бухгалтерского учета, управления сотрудниками, инвентаризацией и внутренними бизнес-процессами компании. Менеджеры отслеживают отчеты и финансовые данные в одной платформе.",
        result: "Внутренние процессы автоматизированы, ошибки сократились, решения принимаются быстрее.",
        problem:
          "Необходимо управлять бухгалтерией, сотрудниками и инвентаризацией с прозрачным контролем для менеджеров.",
        solution:
          "Создана интуитивная платформа с accounting tracking, employee management, inventory control и manager dashboards.",
        features: [
          "Accounting tracking",
          "Employee management",
          "Inventory control",
          "Manager dashboards",
        ],
        process: processSteps.ru,
        results: [
          "Внутренние процессы автоматизированы",
          "Количество ошибок сократилось",
          "Управленческие решения ускорились",
          "Бизнес-процессы оцифрованы",
        ],
      },
    },
  },
  {
    slug: "jobhunter",
    number: "05",
    category: "web",
    year: "2025",
    color: "#7C3AED",
    image: "/images/portfolio/jobhunter.jpg",
    liveUrl: "https://jobhunter.uz/",
    technologies: ["React", "Node.js", "PostgreSQL", "API Integration"],
    i18n: {
      uz: {
        title: "JOBHUNTER",
        categoryLabel: "Job Marketplace",
        shortDescription:
          "Ish qidiruvchilar va ish beruvchilarni bog'lovchi raqamli rekrutment platformasi.",
        description:
          "JOBHUNTER — ish qidiruvchilar va ish beruvchilarni bog'lovchi raqamli platforma. Vakansiyalar joylashtirish, qidiruv, filtrlash, professional profil va xavfsiz autentifikatsiya imkoniyatlari mavjud.",
        result: "Ish bozorida tezkor aloqa yaratildi, qidirish va ish berish jarayonlari qulaylashtirildi.",
        problem:
          "Ish qidiruvchilar va ish beruvchilarni tez va samarali bog'lash, rekrutment jarayonlarini raqamlashtirish.",
        solution:
          "Job seeker va employer accountlari, vakansiya boshqaruvi, filtrlash va qidiruv tizimi yaratildi.",
        features: [
          "Job seeker va Employer accounts",
          "Vakansiya joylashtirish va boshqarish",
          "Filtrlash va qidiruv",
          "Secure authentication",
        ],
        process: processSteps.uz,
        results: [
          "Ish bozorida tezkor aloqa yaratildi",
          "Ish qidirish jarayoni qulaylashtirildi",
          "Ish beruvchilar uchun boshqaruv yaxshilandi",
          "Rekrutment jarayoni raqamlashtirildi",
        ],
      },
      en: {
        title: "JOBHUNTER",
        categoryLabel: "Job Marketplace",
        shortDescription:
          "Digital recruitment platform connecting job seekers and employers.",
        description:
          "JOBHUNTER is a digital platform connecting job seekers and employers with vacancy publishing, search, filtering, professional profiles, and secure authentication.",
        result: "Faster connections in the job market and a smoother hiring experience.",
        problem: "Connect job seekers and employers quickly and digitize recruitment workflows.",
        solution:
          "We built job seeker and employer accounts with vacancy management, advanced filtering, and secure authentication.",
        features: [
          "Job seeker and employer accounts",
          "Vacancy publishing and management",
          "Filtering and search",
          "Secure authentication",
        ],
        process: processSteps.en,
        results: [
          "Faster communication in the job market",
          "Job search became more convenient",
          "Employer management improved",
          "Recruitment was digitized",
        ],
      },
      ru: {
        title: "JOBHUNTER",
        categoryLabel: "Job Marketplace",
        shortDescription:
          "Цифровая платформа для связи соискателей и работодателей.",
        description:
          "JOBHUNTER — цифровая платформа, связывающая соискателей и работодателей с размещением вакансий, поиском, фильтрацией, профилями и безопасной аутентификацией.",
        result: "Ускорена связь на рынке труда и упрощены процессы найма.",
        problem: "Быстро связывать соискателей и работодателей и оцифровать рекрутмент.",
        solution:
          "Созданы аккаунты соискателей и работодателей, управление вакансиями, фильтрация и безопасная аутентификация.",
        features: [
          "Job seeker и Employer accounts",
          "Размещение и управление вакансиями",
          "Фильтрация и поиск",
          "Secure authentication",
        ],
        process: processSteps.ru,
        results: [
          "Ускорена коммуникация на рынке труда",
          "Поиск работы стал удобнее",
          "Улучшено управление для работодателей",
          "Рекрутмент оцифрован",
        ],
      },
    },
  },
  {
    slug: "golden-tours",
    number: "06",
    category: "web",
    year: "2024",
    color: "#8E6E32",
    image: "/images/portfolio/golden-tours.jpg",
    liveUrl: "https://www.goldentoursuzbekistan.com",
    technologies: ["Next.js", "React", "SEO", "Tailwind CSS"],
    i18n: {
      uz: {
        title: "Golden Tours Uzbekistan",
        categoryLabel: "Travel Website",
        shortDescription:
          "O'zbekiston bo'ylab sayohatlarni rejalashtirish va tur paketlarini taqdim etuvchi veb-sayt.",
        description:
          "Golden Tours Uzbekistan — O'zbekiston bo'ylab sayohatlarni rejalashtirish va tashkil etish uchun ishlab chiqilgan interaktiv veb-sayt. Mijozlar tur paketlarini ko'rish, individual so'rov yuborish va sayohatlarni oson rejalashtirishlari mumkin.",
        result: "Mijozlar jalb qilindi, so'rovlar ko'paydi, kompaniya onlayn imij mustahkamlangan.",
        problem: "Sayohatlarni rejalashtirish, tur paketlarini namoyish qilish va mijozlarni jalb qilish.",
        solution:
          "Tur paketlari va marshrutlar, booking formlari va SEO-friendly responsive dizayn yaratildi.",
        features: [
          "Tur paketlari va marshrutlar",
          "Individual so'rov va booking forms",
          "Responsive va SEO-friendly design",
        ],
        process: processSteps.uz,
        results: [
          "Mijozlar jalb qilindi",
          "Tur paketlari bo'yicha so'rovlar ko'paydi",
          "Onlayn imij mustahkamlangan",
          "Sayohat rejalashtirish soddalashtirildi",
        ],
      },
      en: {
        title: "Golden Tours Uzbekistan",
        categoryLabel: "Travel Website",
        shortDescription:
          "Interactive website for planning trips and showcasing tour packages across Uzbekistan.",
        description:
          "Golden Tours Uzbekistan is an interactive website for planning and organizing trips across Uzbekistan. Clients can browse tour packages, submit custom requests, and plan travel easily.",
        result: "More clients, increased inquiries, and a stronger online brand presence.",
        problem: "Plan trips, showcase tour packages, and attract new clients online.",
        solution:
          "We built tour packages and routes, booking forms, and an SEO-friendly responsive website.",
        features: [
          "Tour packages and routes",
          "Custom request and booking forms",
          "Responsive and SEO-friendly design",
        ],
        process: processSteps.en,
        results: [
          "New clients were attracted",
          "Tour inquiries increased",
          "Online brand presence strengthened",
          "Trip planning became easier",
        ],
      },
      ru: {
        title: "Golden Tours Uzbekistan",
        categoryLabel: "Travel Website",
        shortDescription:
          "Интерактивный сайт для планирования путешествий и туров по Узбекистану.",
        description:
          "Golden Tours Uzbekistan — интерактивный сайт для планирования и организации путешествий по Узбекistan. Клиенты могут просматривать туры, отправлять индивидуальные запросы и легко планировать поездки.",
        result: "Привлечены клиенты, выросло число заявок, усилен онлайн-имидж компании.",
        problem: "Планировать путешествия, показывать туры и привлекать клиентов онлайн.",
        solution:
          "Созданы туры и маршруты, booking forms и SEO-friendly responsive дизайн.",
        features: [
          "Турпакеты и маршруты",
          "Individual request и booking forms",
          "Responsive и SEO-friendly design",
        ],
        process: processSteps.ru,
        results: [
          "Привлечены новые клиенты",
          "Увеличилось число заявок на туры",
          "Усилен онлайн-имидж",
          "Планирование поездок упростилось",
        ],
      },
    },
  },
  {
    slug: "sport-pr",
    number: "07",
    category: "web",
    year: "2024",
    color: "#059669",
    image: "/images/portfolio/sport-pr.jpg",
    liveUrl: "https://pr.sport.uz",
    technologies: ["Next.js", "React", "CMS", "Tailwind CSS"],
    i18n: {
      uz: {
        title: "SPORT PR",
        categoryLabel: "Sports PR Platform",
        shortDescription:
          "O'zbekiston sport sohasi uchun PR va axborot platformasi.",
        description:
          "SPORT PR — O'zbekiston sport sohasi uchun PR va axborot platformasi bo'lib, sport yangiliklarini tez yetkazish, tadbirlarni targ'ib qilish va sport vazirligi kommunikatsiyasini qo'llab-quvvatlaydi.",
        result: "Sport axboroti markazlashtirildi, sport kommunikatsiyasi mustahkamlangan.",
        problem:
          "Sport yangiliklarini tez yetkazish va sport vazirligi PR jarayonlarini qo'llab-quvvatlash.",
        solution:
          "Sport yangiliklari, press-relizlar va tadbir axborot markazini birlashtiruvchi platforma yaratildi.",
        features: [
          "Sport yangiliklari",
          "Press-relizlar",
          "Tadbir axborot markazi",
          "Responsive design",
        ],
        process: processSteps.uz,
        results: [
          "Sport axboroti markazlashtirildi",
          "PR jarayonlari tezlashtirildi",
          "Tadbirlar yoritilishi yaxshilandi",
          "Sport kommunikatsiyasi mustahkamlangan",
        ],
      },
      en: {
        title: "SPORT PR",
        categoryLabel: "Sports PR Platform",
        shortDescription: "PR and media platform for sports in Uzbekistan.",
        description:
          "SPORT PR is a PR and information platform for Uzbekistan's sports sector, delivering news quickly, promoting events, and supporting ministry communications.",
        result: "Sports information was centralized and communications strengthened.",
        problem: "Deliver sports news quickly and support ministry PR workflows.",
        solution:
          "We built a platform combining sports news, press releases, and an event information hub.",
        features: [
          "Sports news",
          "Press releases",
          "Event information hub",
          "Responsive design",
        ],
        process: processSteps.en,
        results: [
          "Sports information was centralized",
          "PR workflows became faster",
          "Event coverage improved",
          "Sports communications strengthened",
        ],
      },
      ru: {
        title: "SPORT PR",
        categoryLabel: "Sports PR Platform",
        shortDescription: "PR и информационная платформа для спорта Узбекистана.",
        description:
          "SPORT PR — PR и информационная платформа для спортивной отрасли Узбекистана, оперативно доставляющая новости, продвигающая события и поддерживающая коммуникации министерства.",
        result: "Спортивная информация централизована, коммуникации усилены.",
        problem: "Быстро доставлять спортивные новости и поддерживать PR-процессы министерства.",
        solution:
          "Создана платформа со спортивными новостями, пресс-релизами и центром информации о событиях.",
        features: [
          "Спортивные новости",
          "Пресс-релизы",
          "Центр информации о событиях",
          "Responsive design",
        ],
        process: processSteps.ru,
        results: [
          "Спортивная информация централизована",
          "PR-процессы ускорились",
          "Освещение событий улучшилось",
          "Спортивные коммуникации усилены",
        ],
      },
    },
  },
  {
    slug: "tashabbus",
    number: "08",
    category: "web",
    year: "2025",
    color: "#0891B2",
    image: "/images/portfolio/tashabbus.jpg",
    liveUrl: "https://tashabbus.sport.uz",
    technologies: ["React", "Node.js", "PostgreSQL", "Notifications"],
    i18n: {
      uz: {
        title: "Tashabbus",
        categoryLabel: "Sports Platform",
        shortDescription:
          "Yoshlar va sport ixlosmandlari uchun elektron sport tadbirlari platformasi.",
        description:
          "Tashabbus — yoshlar va sport ixlosmandlari uchun elektron sport platformasi bo'lib, tadbirlarni markazlashtirish, ro'yxatdan o'tishni soddalashtirish va yoshlarni faol sportga jalb qiladi.",
        result: "Sport tadbirlarida ishtirok raqamlashtirildi, yoshlar faol jalb qilindi.",
        problem:
          "Tadbirlar va musobaqalarni markazlashtirish, ro'yxatdan o'tishni soddalashtirish va yoshlarni sportga jalb qilish.",
        solution:
          "Online registration, event calendar, participant dashboard va notifications tizimi yaratildi.",
        features: [
          "Online registration",
          "Event calendar",
          "Participant dashboard",
          "Notifications va updates",
        ],
        process: processSteps.uz,
        results: [
          "Tadbirlarda ishtirok raqamlashtirildi",
          "Ro'yxatdan o'tish soddalashtirildi",
          "Yoshlar faol jalb qilindi",
          "Tadbir boshqaruvi markazlashtirildi",
        ],
      },
      en: {
        title: "Tashabbus",
        categoryLabel: "Sports Platform",
        shortDescription:
          "Digital sports events platform for youth and sports enthusiasts.",
        description:
          "Tashabbus is a digital sports platform for youth and enthusiasts that centralizes events, simplifies registration, and encourages active participation in sports.",
        result: "Event participation was digitized and youth engagement increased.",
        problem:
          "Centralize events and competitions, simplify registration, and engage youth in sports.",
        solution:
          "We built online registration, an event calendar, participant dashboards, and notifications.",
        features: [
          "Online registration",
          "Event calendar",
          "Participant dashboard",
          "Notifications and updates",
        ],
        process: processSteps.en,
        results: [
          "Event participation was digitized",
          "Registration became easier",
          "Youth engagement increased",
          "Event management was centralized",
        ],
      },
      ru: {
        title: "Tashabbus",
        categoryLabel: "Sports Platform",
        shortDescription:
          "Электронная спортивная платформа для молодежи и спортивных энтузиастов.",
        description:
          "Tashabbus — цифровая спортивная платформа для молодежи, которая централизует события, упрощает регистрацию и вовлекает молодежь в спорт.",
        result: "Участие в событиях оцифровано, молодежь активнее вовлечена.",
        problem:
          "Централизовать события и соревнования, упростить регистрацию и вовлечь молодежь в спорт.",
        solution:
          "Созданы online registration, event calendar, participant dashboard и notifications.",
        features: [
          "Online registration",
          "Event calendar",
          "Participant dashboard",
          "Notifications и updates",
        ],
        process: processSteps.ru,
        results: [
          "Участие в событиях оцифровано",
          "Регистрация упрощена",
          "Молодежь активнее вовлечена",
          "Управление событиями централизовано",
        ],
      },
    },
  },
  {
    slug: "connectacrm",
    number: "09",
    category: "crm",
    year: "2024",
    color: "#0284C7",
    image: "/images/portfolio/connectacrm.jpg",
    liveUrl: "https://oceanblue.connectacrm.com/",
    technologies: ["Next.js", "React", "PostgreSQL", "CRM", "Fleet Management"],
    i18n: {
      uz: {
        title: "ConnectACRM",
        categoryLabel: "Logistics & Fleet CRM",
        shortDescription:
          "Logistika va yuk tashish kompaniyalari uchun flot va mijozlar boshqaruvi CRM tizimi.",
        description:
          "ConnectACRM — logistika va yuk tashish kompaniyalari uchun maxsus ishlab chiqilgan CRM tizimi. Transport vositalari va yuk mashinalarini boshqarish, mijozlar bilan aloqalarni markazlashtirish va ichki operatsiyalarni optimallashtirishga yordam beradi.",
        result:
          "Operatsion jarayonlar markazlashtirildi, mijozlar bilan aloqa yaxshilandi, real-vaqt nazorat imkoniyati yaratildi.",
        problem:
          "Flot va transport boshqaruvi, mijozlar bilan aloqalarni markazlashtirish va operatsion samaradorlikni oshirish.",
        solution:
          "Mijozlar bazasi, flot boshqaruvi, avtomatlashtirilgan jarayonlar, tahlil va raportlar bilan CRM yaratildi.",
        features: [
          "Mijozlar va kontragentlar bazasi",
          "Flot va transport boshqaruvi",
          "Avtomatlashtirilgan jarayonlar",
          "Tahlil va raportlar",
          "Integratsiya va kengaytirilgan funksional",
        ],
        process: processSteps.uz,
        results: [
          "Operatsion jarayonlar markazlashtirildi",
          "Mijozlar bilan aloqa yaxshilandi",
          "Transport holati real-vaqt nazorat qilinadi",
          "Yetkazib berish jarayoni soddalashtirildi",
        ],
      },
      en: {
        title: "ConnectACRM",
        categoryLabel: "Logistics & Fleet CRM",
        shortDescription:
          "CRM for logistics and freight companies with fleet and client management.",
        description:
          "ConnectACRM is a custom CRM for logistics and freight companies that helps manage vehicles and trucks, centralize client communication, and optimize internal operations.",
        result:
          "Operations were centralized, client communication improved, and real-time control became available.",
        problem:
          "Manage fleet and transport, centralize client communication, and improve operational efficiency.",
        solution:
          "We built a CRM with client database, fleet management, automated workflows, analytics, and reporting.",
        features: [
          "Client and counterparty database",
          "Fleet and transport management",
          "Automated workflows",
          "Analytics and reports",
          "Integrations and extended functionality",
        ],
        process: processSteps.en,
        results: [
          "Operational processes were centralized",
          "Client communication improved",
          "Fleet status is monitored in real time",
          "Delivery workflows were simplified",
        ],
      },
      ru: {
        title: "ConnectACRM",
        categoryLabel: "Logistics & Fleet CRM",
        shortDescription:
          "CRM для логистики и грузоперевозок с управлением автопарком и клиентами.",
        description:
          "ConnectACRM — специализированная CRM для логистических и транспортных компаний, помогающая управлять транспортом, централизовать работу с клиентами и оптимизировать внутренние операции.",
        result:
          "Операции централизованы, коммуникация с клиентами улучшена, появился контроль в реальном времени.",
        problem:
          "Управлять автопарком, централизовать работу с клиентами и повысить операционную эффективность.",
        solution:
          "Создана CRM с базой клиентов, управлением автопарком, автоматизацией, аналитикой и отчетами.",
        features: [
          "База клиентов и контрагентов",
          "Управление автопарком",
          "Автоматизированные процессы",
          "Аналитика и отчеты",
          "Интеграции и расширенный функционал",
        ],
        process: processSteps.ru,
        results: [
          "Операционные процессы централизованы",
          "Коммуникация с клиентами улучшена",
          "Состояние транспорта контролируется в реальном времени",
          "Процесс доставки упрощен",
        ],
      },
    },
  },
];

export function getPortfolioProject(slug: string, locale: Locale) {
  const project = portfolioProjects.find((item) => item.slug === slug);
  if (!project) return undefined;

  const content = project.i18n[locale] ?? project.i18n.uz;

  return {
    slug: project.slug,
    number: project.number,
    category: project.category,
    year: project.year,
    color: project.color,
    image: project.image,
    liveUrl: project.liveUrl,
    technologies: project.technologies,
    ...content,
  };
}

export function getAllPortfolioProjects(locale: Locale) {
  return portfolioProjects.map((project) => getPortfolioProject(project.slug, locale)!);
}

export function getAllPortfolioSlugs() {
  return portfolioProjects.map((project) => project.slug);
}

export const projectMeta = Object.fromEntries(
  portfolioProjects.map((project) => [
    project.slug,
    {
      category: project.category,
      color: project.color,
      year: project.year,
      image: project.image,
      liveUrl: project.liveUrl,
    },
  ])
);
