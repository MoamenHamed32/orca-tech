import type { Localized, Project } from "@/lib/content/projectTypes";

const L = (en: string, ar: string): Localized => ({ en, ar });
const asset = (file: string) => `/assets/projects/ehsanuna/${file}`;

export const ehsanunaProject: Project = {
  slug: "ehsanuna",
  category: "charity",
  service: "engineering",
  industry: "charity",
  stack: [
    "Laravel",
    "PHP 8.3",
    "Responsive CSS",
    "RTL Arabic UI",
    "Hostinger CDN",
    "Apple Pay",
    "Bank cards",
    "Bank transfer",
  ],
  tags: [
    L("Humanitarian Cases", "حالات إنسانية"),
    L("Donations", "تبرعات"),
    L("Volunteering", "تطوع"),
    L("In-kind Giving", "تبرع عيني"),
    L("Arabic-first", "عربي أولاً"),
  ],
  cover: asset("cover.png"),
  logo: asset("logo.png"),
  logoTone: "light",
  links: [
    {
      label: L("Live website", "الموقع المباشر"),
      href: "https://ehsanuna.org/",
    },
  ],
  gallery: [
    {
      src: asset("desktop-home.png"),
      alt: L("Ehsanuna landing page with impact statistics", "الصفحة الرئيسية لإحساننا مع إحصاءات الأثر"),
      device: "desktop",
    },
    {
      src: asset("desktop-cases.png"),
      alt: L("Humanitarian cases with contribution progress", "الحالات الإنسانية مع تقدم المساهمة"),
      device: "desktop",
    },
    {
      src: asset("desktop-programs.png"),
      alt: L("Community programs and charitable projects", "البرامج المجتمعية والمشروعات الخيرية"),
      device: "desktop",
    },
    {
      src: asset("desktop-donations.png"),
      alt: L("Cash and in-kind donation journey", "مسار التبرع النقدي والعيني"),
      device: "desktop",
    },
    {
      src: asset("desktop-volunteer.png"),
      alt: L("Volunteer application experience", "تجربة طلب التطوع"),
      device: "desktop",
    },
    {
      src: asset("desktop-about.png"),
      alt: L("About the foundation", "عن المؤسسة"),
      device: "desktop",
    },
    {
      src: asset("mobile-home.png"),
      alt: L("Mobile charity homepage", "الصفحة الرئيسية للعمل الخيري على الجوال"),
      device: "mobile",
    },
    {
      src: asset("mobile-cases.png"),
      alt: L("Mobile humanitarian cases", "الحالات الإنسانية على الجوال"),
      device: "mobile",
    },
    {
      src: asset("mobile-donations.png"),
      alt: L("Mobile donation flow", "مسار التبرع على الجوال"),
      device: "mobile",
    },
    {
      src: asset("mobile-help.png"),
      alt: L("Mobile assistance request", "طلب المساعدة على الجوال"),
      device: "mobile",
    },
    {
      src: asset("mobile-volunteer.png"),
      alt: L("Mobile volunteer application", "طلب التطوع على الجوال"),
      device: "mobile",
    },
  ],
  name: {
    en: "Ehsanuna Foundation",
    ar: "مؤسسة إحساننا",
  },
  tagline: {
    en: "An Arabic-first charity platform that brings humanitarian cases, programs, donations, volunteering, and assistance requests into one trusted experience.",
    ar: "منصة خيرية عربية أولاً تجمع الحالات الإنسانية والبرامج والتبرعات والتطوع وطلبات المساعدة في تجربة موثوقة واحدة.",
  },
  cta: {
    en: "Need a donation, volunteering, or community-support platform?",
    ar: "تحتاجون منصة تبرع أو تطوع أو دعم مجتمعي؟",
  },
  sections: [
    {
      kicker: L("Overview", "نظرة عامة"),
      title: L(
        "From discovering a cause to contributing, volunteering, or asking for help.",
        "من اكتشاف الحالة إلى المساهمة أو التطوع أو طلب المساعدة.",
      ),
      intro: L(
        "Ehsanuna connects people who want to help with verified humanitarian cases, community programs, and active projects. Donors, volunteers, families in need, and foundation staff share one Arabic-first digital journey instead of scattered offline processes.",
        "إحساننا تربط من يريد المساعدة بحالات إنسانية موثّقة وبرامج مجتمعية ومشروعات قائمة. المتبرعون والمتطوعون والأسر المحتاجة وفريق المؤسسة يتشاركون رحلة رقمية عربية واحدة بدل عمليات متفرقة دون اتصال.",
      ),
    },
    {
      kicker: L("What it offers", "ما تقدّمه"),
      title: L(
        "Cases, programs, cash and in-kind giving, and assistance intake.",
        "حالات وبرامج وتبرع نقدي وعيني واستقبال طلبات المساعدة.",
      ),
      cards: [
        {
          title: L("Transparent cases and projects", "حالات ومشروعات شفافة"),
          body: L(
            "Humanitarian cases and long-term programs show purpose, funding targets, and visible contribution progress.",
            "الحالات الإنسانية والبرامج طويلة الأمد تعرض الغرض وأهداف التمويل وتقدم المساهمة بشكل واضح.",
          ),
        },
        {
          title: L("Cash, Apple Pay, and transfer", "نقد وApple Pay وتحويل"),
          body: L(
            "Donors attach a contribution to a program, case, or project, then pay by card, Apple Pay, or bank transfer.",
            "يربط المتبرع مساهمته ببرنامج أو حالة أو مشروع، ثم يدفع بالبطاقة أو Apple Pay أو التحويل البنكي.",
          ),
        },
        {
          title: L("In-kind donations", "تبرعات عينية"),
          body: L(
            "Describe items, upload an image, set quantities, and choose collection from the address or delivery to a branch.",
            "صف الأصناف وارفع صورة وحدد الكميات واختر الاستلام من العنوان أو التسليم لفرع.",
          ),
        },
        {
          title: L("Volunteers and assistance", "متطوعون ومساعدة"),
          body: L(
            "Volunteer applications capture availability and preferred fields. Private requests cover food, housing, healthcare, education, and other needs.",
            "طلبات التطوع تسجّل التوفر والمجالات المفضلة. والطلبات الخاصة تغطي الغذاء والسكن والرعاية والتعليم واحتياجات أخرى.",
          ),
        },
      ],
    },
    {
      kicker: L("Highlights", "أبرز الملامح"),
      title: L(
        "Trust, clarity, and conversion for a sensitive multi-audience product.",
        "ثقة ووضوح وتحويل لمنتج حسّاس متعدد الجمهور.",
      ),
      notes: [
        {
          title: L("Built to grow programs", "مبنية لنمو البرامج"),
          body: L(
            "Structured categories, news, and reports let the foundation scale its work without making the site harder to navigate.",
            "التصنيفات المنظمة والأخبار والتقارير تتيح للمؤسسة توسيع عملها دون تصعيب التنقل في الموقع.",
          ),
        },
      ],
    },
  ],
};
