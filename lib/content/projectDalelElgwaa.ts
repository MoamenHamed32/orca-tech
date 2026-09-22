import type { Localized, Project } from "@/lib/content/projectTypes";

const L = (en: string, ar: string): Localized => ({ en, ar });
const asset = (file: string) => `/assets/projects/dalel-elgwaa/${file}`;

export const dalelElgwaaProject: Project = {
  slug: "dalel-elgwaa",
  category: "realEstate",
  service: "engineering",
  industry: "realEstate",
  stack: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "Leaflet",
    "OpenStreetMap",
    "Swiper",
    "PHP 8.4 REST API",
    "Cloudflare",
  ],
  tags: [
    L("Real Estate", "عقارات"),
    L("Property Search", "بحث عقاري"),
    L("Interactive Maps", "خرائط تفاعلية"),
    L("Lead Generation", "توليد عملاء محتملين"),
    L("Arabic-first", "عربي أولاً"),
  ],
  cover: asset("cover.png"),
  logo: asset("logo.svg"),
  logoTone: "light",
  links: [
    {
      label: L("Live website", "الموقع المباشر"),
      href: "https://www.dalel-elgwaa.online/ar",
    },
  ],
  gallery: [
    {
      src: asset("desktop-home.png"),
      alt: L("Arabic-first property search homepage", "الصفحة الرئيسية للبحث العقاري بالعربية"),
      device: "desktop",
    },
    {
      src: asset("desktop-sale.png"),
      alt: L("Properties for sale listings", "قوائم العقارات المعروضة للبيع"),
      device: "desktop",
    },
    {
      src: asset("desktop-rent.png"),
      alt: L("Properties for rent listings", "قوائم العقارات المعروضة للإيجار"),
      device: "desktop",
    },
    {
      src: asset("desktop-detail.png"),
      alt: L("Property detail page with photography", "صفحة تفاصيل العقار مع الصور"),
      device: "desktop",
    },
    {
      src: asset("desktop-map.png"),
      alt: L("Interactive map-based property discovery", "اكتشاف العقارات عبر خريطة تفاعلية"),
      device: "desktop",
    },
    {
      src: asset("desktop-about.png"),
      alt: L("About the brokerage and marketing services", "عن المكتب وخدمات التسويق العقاري"),
      device: "desktop",
    },
    {
      src: asset("mobile-home.png"),
      alt: L("Mobile homepage with search in the hero", "الصفحة الرئيسية للجوال مع البحث في البانر"),
      device: "mobile",
    },
    {
      src: asset("mobile-sale.png"),
      alt: L("Mobile properties for sale", "عقارات للبيع على الجوال"),
      device: "mobile",
    },
    {
      src: asset("mobile-rent.png"),
      alt: L("Mobile properties for rent", "عقارات للإيجار على الجوال"),
      device: "mobile",
    },
    {
      src: asset("mobile-detail.png"),
      alt: L("Mobile property detail", "تفاصيل العقار على الجوال"),
      device: "mobile",
    },
  ],
  name: {
    en: "Dalel Elgwaa Real Estate",
    ar: "دليل الأجواء العقاري",
  },
  tagline: {
    en: "An Arabic-first real-estate platform with dynamic listings, advanced search, interactive maps, and lead-generation workflows.",
    ar: "منصة عقارية عربية أولاً تجمع قوائم ديناميكية وبحثاً متقدماً وخرائط تفاعلية ومسارات توليد عملاء محتملين.",
  },
  cta: {
    en: "Need a property marketplace or booking-style lead platform?",
    ar: "تحتاجون سوق عقارات أو منصة حجوزات لتوليد العملاء؟",
  },
  sections: [
    {
      kicker: L("Overview", "نظرة عامة"),
      title: L(
        "A professional digital inventory for a local brokerage.",
        "مخزون رقمي احترافي لمكتب عقاري محلي.",
      ),
      intro: L(
        "Dalel Elgwaa is an Arabic-first real-estate platform created to make property discovery easier across Saudi Arabia, with a strong local focus on the Qassim region. Visitors browse properties for sale or rent, filter results, explore locations on a map, open detailed listings, and contact the office directly.",
        "دليل الأجواء منصة عقارية عربية أولاً تسهّل اكتشاف العقارات في السعودية، مع تركيز محلي على منطقة القصيم. يصفّح الزائر عقارات البيع والإيجار، ويصفّي النتائج، ويستكشف المواقع على الخريطة، ويفتح التفاصيل، ويتواصل مع المكتب مباشرة.",
      ),
    },
    {
      kicker: L("What it offers", "ما تقدّمه"),
      title: L(
        "Search, maps, and conversion paths for seekers and owners.",
        "بحث وخرائط ومسارات تحويل للباحثين والملاك.",
      ),
      cards: [
        {
          title: L("Sale and rent listings", "قوائم البيع والإيجار"),
          body: L(
            "Dynamic inventory with photography, pricing, availability, views, and location context.",
            "مخزون ديناميكي مع صور وتسعير وتوفر ومشاهدات وسياق الموقع.",
          ),
        },
        {
          title: L("Advanced search", "بحث متقدم"),
          body: L(
            "Filter by city, property type, transaction type, and price — with search placed inside the visual hero.",
            "تصفية حسب المدينة ونوع العقار ونوع الصفقة والسعر — مع وضع البحث داخل البانر البصري.",
          ),
        },
        {
          title: L("Interactive maps", "خرائط تفاعلية"),
          body: L(
            "Leaflet and OpenStreetMap give listings geographic context instead of a flat catalog.",
            "Leaflet وOpenStreetMap يمنحان القوائم سياقاً جغرافياً بدل كتالوج مسطح.",
          ),
        },
        {
          title: L("Lead workflows", "مسارات العملاء المحتملين"),
          body: L(
            "Inspection, reservation, enquiry, and WhatsApp contact — no online checkout, because conversion happens with the brokerage.",
            "معاينة وحجز واستفسار وتواصل واتساب — دون دفع إلكتروني، لأن التحويل يتم مع المكتب.",
          ),
        },
      ],
    },
    {
      kicker: L("Highlights", "أبرز الملامح"),
      title: L(
        "Arabic and RTL are the primary experience, not an afterthought.",
        "العربية واتجاه RTL هما التجربة الأساسية لا إضافة لاحقة.",
      ),
      notes: [
        {
          title: L("Local expertise, digital inventory", "خبرة محلية ومخزون رقمي"),
          body: L(
            "The site supports inspection, photography, listing preparation, promotion, negotiation, and after-sale follow-up.",
            "يدعم الموقع المعاينة والتصوير وتجهيز العرض والترويج والتفاوض والمتابعة بعد البيع.",
          ),
        },
      ],
    },
  ],
};
