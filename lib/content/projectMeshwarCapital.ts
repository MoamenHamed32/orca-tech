import type { Localized, Project } from "@/lib/content/projectTypes";

const L = (en: string, ar: string): Localized => ({ en, ar });
const asset = (file: string) => `/assets/projects/meshwar-capital/${file}`;

export const meshwarCapitalProject: Project = {
  slug: "meshwar-capital",
  category: "logistics",
  service: "engineering",
  industry: "logistics",
  stack: [
    "Android",
    "iOS",
    "REST APIs",
    "Role-based access",
    "Real-time GPS",
    "Push notifications",
    "Wallet & subscriptions",
    "Live map tracking",
  ],
  tags: [
    L("Passenger App", "تطبيق الراكب"),
    L("Supervisor Ops", "تشغيل المشرف"),
    L("Driver Workflow", "مسار السائق"),
    L("Live Tracking", "تتبع مباشر"),
    L("Seat Booking", "حجز مقاعد"),
  ],
  cover: asset("cover.png"),
  logo: asset("logo.webp"),
  logoTone: "dark",
  links: [
    {
      label: L("Passenger app", "تطبيق الراكب"),
      href: "https://play.google.com/store/apps/details?id=tech.brmja.meshwarapp",
    },
    {
      label: L("Supervisor & driver app", "تطبيق المشرف والسائق"),
      href: "https://play.google.com/store/apps/details?id=tech.brmja.meshwar.driver",
    },
  ],
  gallery: [
    {
      src: asset("desktop-store-passenger.png"),
      alt: L("Passenger app listing on Google Play", "صفحة تطبيق الراكب على جوجل بلاي"),
      device: "desktop",
    },
    {
      src: asset("desktop-store-ops.png"),
      alt: L("Supervisor and driver app listing on Google Play", "صفحة تطبيق المشرف والسائق على جوجل بلاي"),
      device: "desktop",
    },
    {
      src: asset("mobile-passenger-1.webp"),
      alt: L("Passenger browse and booking screens", "شاشات تصفح وحجز الراكب"),
      device: "mobile",
    },
    {
      src: asset("mobile-passenger-2.webp"),
      alt: L("Passenger trip dashboard with bus tracking", "لوحة رحلة الراكب مع تتبع الباص"),
      device: "mobile",
    },
    {
      src: asset("mobile-passenger-3.webp"),
      alt: L("Passenger account and booking history", "حساب الراكب وسجل الحجوزات"),
      device: "mobile",
    },
    {
      src: asset("mobile-passenger-4.webp"),
      alt: L("Passenger profile and trip extras", "ملف الراكب وإضافات الرحلة"),
      device: "mobile",
    },
    {
      src: asset("mobile-ops-1.webp"),
      alt: L("Supervisor and driver operational home", "الشاشة الرئيسية لتشغيل المشرف والسائق"),
      device: "mobile",
    },
    {
      src: asset("mobile-ops-2.webp"),
      alt: L("Supervisor operations center", "مركز عمليات المشرف"),
      device: "mobile",
    },
    {
      src: asset("mobile-ops-3.webp"),
      alt: L("Seat occupancy and passenger manifest", "إشغال المقاعد وكشف الركاب"),
      device: "mobile",
    },
    {
      src: asset("mobile-ops-4.webp"),
      alt: L("Route and bus management", "إدارة الخطوط والحافلات"),
      device: "mobile",
    },
  ],
  name: {
    en: "Meshwar Al Assema",
    ar: "مشوار العاصمة",
  },
  tagline: {
    en: "A role-based employee-transport ecosystem for Egypt’s New Administrative Capital — passenger bookings, supervisor control, and live bus tracking.",
    ar: "منظومة نقل موظفين قائمة على الأدوار للعاصمة الإدارية — حجز الركاب وسيطرة المشرف وتتبع الباص مباشرة.",
  },
  cta: {
    en: "Need a multi-role booking, fleet, or live-tracking product?",
    ar: "تحتاجون منتج حجز متعدد الأدوار أو أسطول أو تتبع مباشر؟",
  },
  sections: [
    {
      kicker: L("Overview", "نظرة عامة"),
      title: L(
        "Three mobile experiences on one live operations system.",
        "ثلاث تجارب جوال على نظام تشغيل مباشر واحد.",
      ),
      intro: L(
        "Meshwar Al Assema coordinates passengers, trip supervisors, and drivers for commutes to and from Egypt’s New Administrative Capital. Passengers reserve journeys and follow the bus. Supervisors manage reservations, seats, routes, and alerts. Drivers start and finish trips while sharing live GPS.",
        "مشوار العاصمة ينسّق الركاب ومشرفي الرحلات والسائقين للتنقل من العاصمة الإدارية وإليها. يحجز الركاب الرحلات ويتابعون الباص. يدير المشرفون الحجوزات والمقاعد والخطوط والتنبيهات. ويبدأ السائقون الرحلات وينهونها مع مشاركة الموقع مباشرة.",
      ),
    },
    {
      kicker: L("What it offers", "ما تقدّمه"),
      title: L(
        "Passenger booking, operational control, and a simple driver workflow.",
        "حجز الراكب وسيطرة التشغيل ومسار سائق مبسّط.",
      ),
      cards: [
        {
          title: L("Passenger application", "تطبيق الراكب"),
          body: L(
            "Reserve outbound and return trips, choose times, stations, and seats, manage bookings, follow the bus on a live map, and pay fares or subscriptions.",
            "احجز الذهاب والعودة واختر المواعيد والمحطات والمقاعد وأدر الحجوزات وتابع الباص على خريطة مباشرة وادفع الأجرة أو الاشتراك.",
          ),
        },
        {
          title: L("Supervisor application", "تطبيق المشرف"),
          body: L(
            "Confirm or reject reservations, see seat occupancy, adjust routes and timings, send group alerts, and monitor live bus movement.",
            "أكّد الحجوزات أو ارفضها، واطلع على إشغال المقاعد، وعدّل الخطوط والمواعيد، وأرسل تنبيهات جماعية، وراقب حركة الباص مباشرة.",
          ),
        },
        {
          title: L("Driver application", "تطبيق السائق"),
          body: L(
            "A short field workflow: view the assigned journey, start it, share GPS, and end it on arrival — without extra operational noise.",
            "مسار ميداني مختصر: اعرض الرحلة المعيّنة وابدأها وشارك الموقع وأنهِها عند الوصول — دون ضوضاء تشغيل إضافية.",
          ),
        },
        {
          title: L("Shared operations core", "نواة تشغيل مشتركة"),
          body: L(
            "One API platform keeps routes, seats, trip state, wallets, and live location in sync across every role.",
            "منصة واجهات واحدة تُبقي الخطوط والمقاعد وحالة الرحلة والمحافظ والموقع المباشر متزامنة عبر كل دور.",
          ),
        },
      ],
    },
    {
      kicker: L("Highlights", "أبرز الملامح"),
      title: L(
        "An end-to-end transport product, not only a passenger booking screen.",
        "منتج نقل من الطرف إلى الطرف لا شاشة حجز راكب فقط.",
      ),
      notes: [
        {
          title: L("Real-time across roles", "وقت حقيقي عبر الأدوار"),
          body: L(
            "A driver’s location becomes a live map for passengers and an oversight tool for supervisors, cutting phone calls and spreadsheets.",
            "موقع السائق يصبح خريطة مباشرة للركاب وأداة رقابة للمشرفين، فيقلل المكالمات والجداول اليدوية.",
          ),
        },
      ],
    },
  ],
};
