import type { Localized, Project } from "@/lib/content/projectTypes";

const L = (en: string, ar: string): Localized => ({ en, ar });
const asset = (file: string) => `/assets/projects/yelo-cash/${file}`;

export const yeloCashProject: Project = {
  slug: "yelo-cash",
  category: "fintech",
  service: "engineering",
  industry: "fintech",
  stack: [
    "PHP",
    "Blade",
    "Bootstrap",
    "Flutter",
    "Android",
    "USDT",
    "Binance Pay",
    "Alipay",
  ],
  tags: [
    L("Currency Exchange", "صرف عملات"),
    L("Digital Wallets", "محافظ رقمية"),
    L("Crypto Rails", "مسارات مشفرة"),
    L("Multi-language", "متعدد اللغات"),
  ],
  cover: asset("cover.png"),
  logo: asset("logo.png"),
  logoTone: "dark",
  links: [
    {
      label: L("Live website", "الموقع المباشر"),
      href: "https://yelocash.net",
    },
    {
      label: L("Android app", "تطبيق أندرويد"),
      href: "https://yelocash.en.uptodown.com/android",
    },
  ],
  gallery: [
    {
      src: asset("desktop-home.png"),
      alt: L("YeloCash exchange homepage", "الصفحة الرئيسية لصرف يلو كاش"),
      device: "desktop",
    },
    {
      src: asset("desktop-rates.png"),
      alt: L("Exchange rates and currency selection", "أسعار الصرف واختيار العملة"),
      device: "desktop",
    },
    {
      src: asset("desktop-exchange.png"),
      alt: L("Exchange request and tracking flow", "طلب الصرف وتتبع الحالة"),
      device: "desktop",
    },
    {
      src: asset("desktop-account.png"),
      alt: L("Account and transaction management", "الحساب وإدارة المعاملات"),
      device: "desktop",
    },
    {
      src: asset("mobile-1.png"),
      alt: L("Android exchange experience", "تجربة الصرف على أندرويد"),
      device: "mobile",
    },
    {
      src: asset("mobile-2.png"),
      alt: L("Mobile transaction tracking", "تتبع المعاملات على الجوال"),
      device: "mobile",
    },
  ],
  name: {
    en: "YeloCash",
    ar: "يلو كاش",
  },
  tagline: {
    en: "A currency-exchange and digital-payment platform spanning web and Android, with USDT, Binance Pay, Alipay, and regional wallets.",
    ar: "منصة صرف عملات ومدفوعات رقمية على الويب وأندرويد، مع USDT وBinance Pay وAlipay ومحافظ إقليمية.",
  },
  cta: {
    en: "Need a multi-rail exchange or wallet product?",
    ar: "تحتاجون منتج صرف متعدد المسارات أو محفظة رقمية؟",
  },
  sections: [
    {
      kicker: L("Overview", "نظرة عامة"),
      title: L(
        "One place to move between currencies, wallets, and crypto rails.",
        "مكان واحد للتنقل بين العملات والمحافظ والمسارات المشفرة.",
      ),
      intro: L(
        "YeloCash lets users choose a source currency or payment method, pick a destination, review exchange information, submit a request, and track status from a centralized interface. It is available as a responsive web platform and an Android application, with support for multiple languages.",
        "يلو كاش يتيح للمستخدم اختيار عملة أو طريقة دفع مصدر، وتحديد الوجهة، ومراجعة معلومات الصرف، وإرسال الطلب، وتتبع الحالة من واجهة مركزية. المنصة متاحة على الويب والجوال أندرويد، مع دعم لغات متعددة.",
      ),
    },
    {
      kicker: L("Features", "الميزات"),
      title: L(
        "Regional wallets and crypto channels in one exchange flow.",
        "محافظ إقليمية وقنوات مشفرة في مسار صرف واحد.",
      ),
      cards: [
        {
          title: L("Multi-currency exchange", "صرف متعدد العملات"),
          body: L(
            "Users exchange across supported currencies and payment methods through one product.",
            "يصرف المستخدمون بين العملات وطرق الدفع المدعومة عبر منتج واحد.",
          ),
        },
        {
          title: L("Payment channels", "قنوات الدفع"),
          body: L(
            "USDT, Binance Pay, Alipay, Vodafone Cash Egypt, Iraqi payment services, and other local rails.",
            "USDT وBinance Pay وAlipay وفودافون كاش مصر وخدمات دفع عراقية ومسارات محلية أخرى.",
          ),
        },
        {
          title: L("Transaction tracking", "تتبع المعاملات"),
          body: L(
            "Submit an exchange, follow status, and keep a history without leaving the platform.",
            "أرسل عملية صرف وتابع الحالة واحتفظ بسجل دون مغادرة المنصة.",
          ),
        },
        {
          title: L("Web + Android", "ويب وأندرويد"),
          body: L(
            "A Bootstrap web experience paired with a Flutter Android app for rates, requests, and secure access.",
            "تجربة ويب بـ Bootstrap مع تطبيق أندرويد بـ Flutter للأسعار والطلبات والوصول الآمن.",
          ),
        },
      ],
    },
    {
      kicker: L("Highlights", "أبرز الملامح"),
      title: L(
        "Built for operators who serve more than one payment culture.",
        "مبنية لمشغّلين يخدمون أكثر من ثقافة دفع.",
      ),
      intro: L(
        "The product connects traditional digital wallets and cryptocurrency rails so users can complete exchanges without switching between disconnected services.",
        "يربط المنتج المحافظ الرقمية التقليدية ومسارات العملات المشفرة حتى يكمل المستخدمون الصرف دون التنقل بين خدمات منفصلة.",
      ),
    },
  ],
};
