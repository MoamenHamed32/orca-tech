import type { Localized, Project } from "@/lib/content/projectTypes";

const L = (en: string, ar: string): Localized => ({ en, ar });
const asset = (file: string) => `/assets/projects/yelo-gift/${file}`;

export const yeloGiftProject: Project = {
  slug: "yelo-gift",
  category: "ecommerce",
  service: "ecommerce",
  industry: "retail",
  stack: [
    "Laravel",
    "PHP",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Binance Pay",
    "Crypto payments",
    "Google Auth",
    "Facebook Auth",
  ],
  tags: [
    L("Gift Cards", "بطاقات هدايا"),
    L("Digital Commerce", "تجارة رقمية"),
    L("Crypto Payments", "مدفوعات مشفرة"),
    L("Admin Dashboard", "لوحة إدارة"),
  ],
  cover: asset("cover.png"),
  logo: asset("logo.png"),
  logoTone: "dark",
  links: [
    {
      label: L("Live website", "الموقع المباشر"),
      href: "https://yelogift.net",
    },
  ],
  gallery: [
    {
      src: asset("desktop-home.png"),
      alt: L("YeloGift storefront homepage", "الصفحة الرئيسية لمتجر يلو جيفت"),
      device: "desktop",
    },
    {
      src: asset("desktop-catalog.png"),
      alt: L("Gift-card catalog and product browsing", "كتالوج بطاقات الهدايا وتصفح المنتجات"),
      device: "desktop",
    },
    {
      src: asset("desktop-checkout.png"),
      alt: L("Checkout and payment experience", "تجربة الدفع والطلب"),
      device: "desktop",
    },
    {
      src: asset("desktop-account.png"),
      alt: L("Customer account and order management", "حساب العميل وإدارة الطلبات"),
      device: "desktop",
    },
    {
      src: asset("mobile-1.png"),
      alt: L("Mobile storefront", "واجهة المتجر على الجوال"),
      device: "mobile",
    },
    {
      src: asset("mobile-2.png"),
      alt: L("Mobile product browsing", "تصفح المنتجات على الجوال"),
      device: "mobile",
    },
    {
      src: asset("mobile-3.png"),
      alt: L("Mobile checkout", "الدفع على الجوال"),
      device: "mobile",
    },
    {
      src: asset("mobile-4.png"),
      alt: L("Mobile account experience", "تجربة الحساب على الجوال"),
      device: "mobile",
    },
  ],
  name: {
    en: "YeloGift",
    ar: "يلو جيفت",
  },
  tagline: {
    en: "A UK gaming gift-card storefront with crypto and Binance Pay, social login, and a full admin dashboard.",
    ar: "متجر بريطاني لبطاقات ألعاب الهدايا مع دفع مشفر وBinance Pay وتسجيل اجتماعي ولوحة إدارة كاملة.",
  },
  cta: {
    en: "Building a digital-product store or crypto-ready checkout?",
    ar: "تبنون متجراً رقمياً أو دفعاً جاهزاً للعملات المشفرة؟",
  },
  sections: [
    {
      kicker: L("Overview", "نظرة عامة"),
      title: L(
        "Gaming gift cards with modern payment rails.",
        "بطاقات ألعاب مع مسارات دفع حديثة.",
      ),
      intro: L(
        "YeloGift is an e-commerce platform for the digital gaming and gift-card market. Built for a London-based business, it lets customers browse cards, pay with cryptocurrency or Binance Pay, and sign in with Google, Facebook, or Binance.",
        "يلو جيفت منصة تجارة لسوق الألعاب الرقمية وبطاقات الهدايا. صُممت لعمل في لندن، وتتيح للعملاء تصفح البطاقات والدفع بالعملات المشفرة أو Binance Pay وتسجيل الدخول عبر Google أو Facebook أو Binance.",
      ),
    },
    {
      kicker: L("Features", "الميزات"),
      title: L(
        "A complete digital-commerce ecosystem, not a conventional store.",
        "منظومة تجارة رقمية كاملة لا متجراً تقليدياً.",
      ),
      cards: [
        {
          title: L("Gift-card marketplace", "سوق بطاقات الهدايا"),
          body: L(
            "Customers browse and buy digital gaming gift cards through a streamlined catalog and checkout.",
            "يتصفح العملاء بطاقات الألعاب الرقمية ويشترونها عبر كتالوج ودفع مبسّطين.",
          ),
        },
        {
          title: L("Crypto and Binance Pay", "كريبتو وBinance Pay"),
          body: L(
            "Alternative rails sit beside traditional checkout so international buyers can complete purchases in the payment method they already use.",
            "مسارات بديلة بجانب الدفع التقليدي حتى يكمل المشترون الدوليون الشراء بالطريقة التي يستخدمونها أصلاً.",
          ),
        },
        {
          title: L("Social authentication", "توثيق اجتماعي"),
          body: L(
            "Google, Facebook, and Binance login reduce friction during registration and checkout.",
            "تسجيل Google وFacebook وBinance يقلل الاحتكاك أثناء التسجيل والدفع.",
          ),
        },
        {
          title: L("Admin dashboard", "لوحة الإدارة"),
          body: L(
            "Operators manage products, orders, sales, customers, transactions, pricing, and site content from one console.",
            "يدير المشغّلون المنتجات والطلبات والمبيعات والعملاء والمعاملات والتسعير ومحتوى الموقع من وحدة واحدة.",
          ),
        },
      ],
    },
    {
      kicker: L("Highlights", "أبرز الملامح"),
      title: L(
        "React storefront, Laravel operations, and payment integrations that scale.",
        "واجهة React وتشغيل Laravel وتكاملات دفع قابلة للتوسع.",
      ),
      intro: L(
        "The customer experience is a modern React and TypeScript storefront. The Laravel backend gives the business centralized control as catalog size, orders, and payment methods grow.",
        "تجربة العميل واجهة React وTypeScript حديثة. ويعطي Laravel العمل سيطرة مركزية مع نمو الكتالوج والطلبات وطرق الدفع.",
      ),
    },
  ],
};
