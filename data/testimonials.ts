export interface Testimonial {
  id: string;
  name: string;
  company: string;
  position: string;
  content: string;
  rating: number;
  initials: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Aziz Rahimov",
    company: "Connecta Group",
    position: "Bosh direktor",
    content:
      "VITA SOFT jamoasi bizning CRM tizimimizni ajoyib darajada yaratdi. Savdo jarayonlarimiz to‘liq avtomatlashtirildi va jamoa samaradorligi sezilarli oshdi. Professional yondashuv va vaqtida yetkazish — aynan shu sababli ularni tavsiya qilaman.",
    rating: 5,
    initials: "AR",
  },
  {
    id: "2",
    name: "Dilnoza Karimova",
    company: "Smile Dental Clinic",
    position: "Bosh shifokor",
    content:
      "Stomatologiya CRM tizimi klinikamiz ishini butunlay o‘zgartirdi. Bemorlar onlayn bron qiladi, eslatmalar avtomatik keladi. Qog‘oz hujjatlarsiz ishlash — bu haqiqiy zamonaviylik. VITA SOFT ga minnatdormiz.",
    rating: 5,
    initials: "DK",
  },
  {
    id: "3",
    name: "Javohir Toshmatov",
    company: "TechStore UZ",
    position: "Marketing direktori",
    content:
      "E-commerce platformamiz ishga tushgandan keyin onlayn savdomiz 200% ga oshdi. Sayt tez, chiroyli va foydalanish uchun qulay. Click va Payme integratsiyasi mukammal ishlaydi. Eng yaxshi IT hamkorimiz.",
    rating: 5,
    initials: "JT",
  },
  {
    id: "4",
    name: "Malika Yusupova",
    company: "VITA Academy",
    position: "Ta'lim direktori",
    content:
      "Onlayn ta'lim platformasi orqali 5000 dan ortiq o‘quvchi bilan ishlayapmiz. Video darslar, testlar va sertifikatlar — hammasi bir joyda. VITA SOFT jamoasi bizning vizyonimizni aynan shunday amalga oshirdi.",
    rating: 5,
    initials: "MY",
  },
];
