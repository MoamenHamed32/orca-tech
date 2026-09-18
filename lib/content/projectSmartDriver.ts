import type { Localized, Project } from "@/lib/content/projectTypes";

const L = (en: string, ar: string): Localized => ({ en, ar });
const asset = (file: string) => `/assets/projects/smart-driver/${file}`;

export const smartDriverProject: Project = {
  slug: "smart-driver",
  category: "lms",
  service: "ecommerce",
  industry: "retail",
  stack: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "next-intl",
    "Swiper",
    "Iconify",
    "PHP 8.2 REST API",
    "Vercel",
    "Hostinger",
  ],
  tags: [
    L("Driving Instructors", "مدربو القيادة"),
    L("Insurance Brokers", "وسطاء التأمين"),
    L("Car Marketplace", "سوق السيارات"),
    L("Premium Plates", "أرقام مميزة"),
    L("Driving Tests", "اختبارات القيادة"),
  ],
  cover: asset("cover.png"),
  logo: asset("logo.png"),
  logoTone: "light",
  links: [
    {
      label: L("Live website", "الموقع المباشر"),
      href: "https://www.smartdriver.ae/en",
    },
  ],
  gallery: [
    {
      src: asset("desktop-home.png"),
      alt: L("Smart Driver automotive homepage", "الصفحة الرئيسية لسمارت درايفر"),
      device: "desktop",
    },
    {
      src: asset("desktop-cars.png"),
      alt: L("Car buying and selling marketplace", "سوق بيع وشراء السيارات"),
      device: "desktop",
    },
    {
      src: asset("desktop-insurance.png"),
      alt: L("Insurance-broker directory", "دليل وسطاء التأمين"),
      device: "desktop",
    },
    {
      src: asset("desktop-plates.png"),
      alt: L("Premium number-plate marketplace", "سوق الأرقام المميزة"),
      device: "desktop",
    },
    {
      src: asset("desktop-test.png"),
      alt: L("Smart driving-test practice tools", "أدوات التدرب على اختبار القيادة"),
      device: "desktop",
    },
    {
      src: asset("desktop-about.png"),
      alt: L("About Smart Driver", "عن سمارت درايفر"),
      device: "desktop",
    },
    {
      src: asset("mobile-home.png"),
      alt: L("Mobile automotive homepage", "الصفحة الرئيسية على الجوال"),
      device: "mobile",
    },
    {
      src: asset("mobile-cars.png"),
      alt: L("Mobile car marketplace", "سوق السيارات على الجوال"),
      device: "mobile",
    },
    {
      src: asset("mobile-insurance.png"),
      alt: L("Mobile insurance brokers", "وسطاء التأمين على الجوال"),
      device: "mobile",
    },
    {
      src: asset("mobile-plates.png"),
      alt: L("Mobile premium plates", "الأرقام المميزة على الجوال"),
      device: "mobile",
    },
    {
      src: asset("mobile-test.png"),
      alt: L("Mobile driving-test tools", "أدوات اختبار القيادة على الجوال"),
      device: "mobile",
    },
  ],
  name: {
    en: "Smart Driver",
    ar: "سمارت درايفر",
  },
  tagline: {
    en: "A bilingual UAE automotive marketplace connecting instructors, insurance brokers, car listings, premium plates, and driving-test tools.",
    ar: "سوق سيارات ثنائي اللغة في الإمارات يربط المدربين ووسطاء التأمين وعروض السيارات والأرقام المميزة وأدوات اختبار القيادة.",
  },
  cta: {
    en: "Need a multi-service marketplace with roles, listings, and payments?",
    ar: "تحتاجون سوق خدمات متعددة مع أدوار وقوائم ومدفوعات؟",
  },
  sections: [
    {
      kicker: L("Overview", "نظرة عامة"),
      title: L(
        "Several automotive services, one bilingual product.",
        "عدة خدمات سيارات في منتج ثنائي اللغة.",
      ),
      intro: L(
        "Smart Driver brings driving instructors, insurance brokers, traffic-test preparation, car listings, and premium number plates into one connected experience for drivers and vehicle owners in the UAE.",
        "سمارت درايفر يجمع مدربي القيادة ووسطاء التأمين والتحضير لاختبار المرور وعروض السيارات والأرقام المميزة في تجربة واحدة للسائقين وملاك المركبات في الإمارات.",
      ),
    },
    {
      kicker: L("What it offers", "ما تقدّمه"),
      title: L(
        "Discovery, bookings, listings, and paid packages.",
        "اكتشاف وحجوزات وقوائم وباقات مدفوعة.",
      ),
      cards: [
        {
          title: L("Instructors and tests", "مدربون واختبارات"),
          body: L(
            "Trainer discovery, profiles, ratings, booking journeys, and practice questions for driving and traffic tests.",
            "اكتشاف المدربين والملفات والتقييمات ومسارات الحجز وأسئلة تدريبية لاختبارات القيادة والمرور.",
          ),
        },
        {
          title: L("Insurance brokers", "وسطاء التأمين"),
          body: L(
            "A broker directory and registration flow so providers can reach customers inside the same platform.",
            "دليل وسطاء ومسار تسجيل حتى يصل مقدمو الخدمة للعملاء داخل المنصة نفسها.",
          ),
        },
        {
          title: L("Cars and plates", "سيارات وأرقام"),
          body: L(
            "Car buying and selling plus a premium number-plate marketplace.",
            "بيع وشراء السيارات إضافة إلى سوق الأرقام المميزة.",
          ),
        },
        {
          title: L("Paid packages", "باقات مدفوعة"),
          body: L(
            "Subscriptions and listing packages complete on a hosted payment or invoice page.",
            "اشتراكات وباقات إدراج تكتمل عبر صفحة دفع أو فاتورة مستضافة.",
          ),
        },
      ],
    },
    {
      kicker: L("Highlights", "أبرز الملامح"),
      title: L(
        "Customer, trainer, and broker roles in one consistent interface.",
        "أدوار العميل والمدرب والوسيط في واجهة متسقة.",
      ),
      notes: [
        {
          title: L("Ready to grow categories", "جاهزة لنمو التصنيفات"),
          body: L(
            "The architecture can add automotive categories and providers without splitting the product into separate sites.",
            "يمكن للبنية إضافة تصنيفات ومزودين دون تقسيم المنتج إلى مواقع منفصلة.",
          ),
        },
      ],
    },
  ],
};
