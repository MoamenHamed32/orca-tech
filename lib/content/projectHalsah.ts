import type { Localized, Project } from "@/lib/content/projectTypes";

const L = (en: string, ar: string): Localized => ({ en, ar });
const asset = (file: string) => `/assets/projects/halsah/${file}`;

export const halsahProject: Project = {
  slug: "halsah",
  category: "lms",
  service: "engineering",
  industry: "education",
  stack: [
    "Next.js",
    "Laravel",
    "React Native",
    "Firebase",
    "Paymob",
    "Vodafone Cash",
    "InstaPay",
  ],
  tags: [
    L("Exams", "اختبارات"),
    L("Live Lessons", "دروس مباشرة"),
    L("Student Forums", "منتديات طلابية"),
    L("Parent Access", "حساب ولي الأمر"),
    L("EdTech Egypt", "تعليم رقمي في مصر"),
  ],
  cover: asset("cover.png"),
  logo: asset("logo.png"),
  logoTone: "light",
  links: [
    {
      label: L("Live website", "الموقع المباشر"),
      href: "https://www.halsah.com",
    },
    {
      label: L("Google Play", "جوجل بلاي"),
      href: "https://play.google.com/store/apps/details?id=com.halsah.app",
    },
  ],
  gallery: [
    {
      src: asset("desktop-home.png"),
      alt: L("Hel Sah web platform homepage", "الصفحة الرئيسية لمنصة هل صح"),
      device: "desktop",
    },
    {
      src: asset("desktop-exams.png"),
      alt: L("Examination and practice experience", "تجربة الاختبارات والتدريب"),
      device: "desktop",
    },
    {
      src: asset("mobile-web.png"),
      alt: L("Responsive web experience on mobile", "تجربة الويب المتجاوبة على الجوال"),
      device: "mobile",
    },
    {
      src: asset("mobile-1.webp"),
      alt: L("Hel Sah mobile app home", "الشاشة الرئيسية لتطبيق هل صح"),
      device: "mobile",
    },
    {
      src: asset("mobile-2.webp"),
      alt: L("Mobile exams and lessons", "الاختبارات والدروس على التطبيق"),
      device: "mobile",
    },
    {
      src: asset("mobile-3.webp"),
      alt: L("Mobile progress and notifications", "التقدم والإشعارات على التطبيق"),
      device: "mobile",
    },
  ],
  name: {
    en: "Hel Sah",
    ar: "هل صح",
  },
  tagline: {
    en: "An Egyptian EdTech platform that combines exams, live lessons, forums, parent visibility, and Paymob wallet payments — on web and React Native.",
    ar: "منصة تعليم مصرية تجمع الاختبارات والدروس المباشرة والمنتديات ومتابعة ولي الأمر ومدفوعات Paymob والمحافظ — على الويب وReact Native.",
  },
  cta: {
    en: "Building an exam, lesson, or parent-connected learning product?",
    ar: "تبنون منتج اختبارات أو دروس أو تعلم مرتبط بولي الأمر؟",
  },
  sections: [
    {
      kicker: L("Overview", "نظرة عامة"),
      title: L(
        "Self-study, live teaching, and family visibility in one account.",
        "دراسة ذاتية وتدريس مباشر ورؤية أسرية في حساب واحد.",
      ),
      intro: L(
        "Hel Sah brings studying, practice exams, live lessons, teacher support, and progress tracking into one ecosystem for Egyptian students. Parents can follow results and activity, while teachers run lessons, forums, and explanations.",
        "هل صح تجمع الدراسة واختبارات التدريب والدروس المباشرة ودعم المعلمين وتتبع التقدم في منظومة واحدة للطلاب في مصر. يتابع أولياء الأمور النتائج والنشاط، ويدير المعلمون الدروس والمنتديات والشروحات.",
      ),
    },
    {
      kicker: L("Features", "الميزات"),
      title: L(
        "Exams, lessons, and community — not a course catalog alone.",
        "اختبارات ودروس ومجتمع — لا كتالوج دورات فقط.",
      ),
      cards: [
        {
          title: L("Smart examinations", "اختبارات ذكية"),
          body: L(
            "Timed sessions, pause and resume, review flags, score analysis, teacher comments, and video explanations.",
            "جلسات موقوتة وإيقاف واستئناف ووضع علامات للمراجعة وتحليل الدرجات وتعليقات المعلم وشروحات فيديو.",
          ),
        },
        {
          title: L("Online lessons", "دروس أونلاين"),
          body: L(
            "Browse by subject, review teacher details, capacity, and pricing, then book free samples or paid sessions.",
            "تصفح حسب المادة، وراجع بيانات المعلم والسعة والسعر، ثم احجز عيّنات مجانية أو حصصاً مدفوعة.",
          ),
        },
        {
          title: L("Forums and parents", "منتديات وأولياء أمور"),
          body: L(
            "Subject communities with teacher answers, plus a parent experience for results, reports, and updates.",
            "مجتمعات حسب المادة مع إجابات المعلمين، وتجربة ولي أمر للنتائج والتقارير والتحديثات.",
          ),
        },
        {
          title: L("Paymob and wallets", "Paymob والمحافظ"),
          body: L(
            "Cards, Vodafone Cash, Orange Cash, and InstaPay for exams, lessons, and premium forum access.",
            "بطاقات وفودافون كاش وأورنج كاش وإنستاباي للاختبارات والدروس والمنتديات المميزة.",
          ),
        },
      ],
    },
    {
      kicker: L("Highlights", "أبرز الملامح"),
      title: L(
        "Next.js web, Laravel APIs, Firebase, and a React Native app.",
        "ويب Next.js وواجهات Laravel وFirebase وتطبيق React Native.",
      ),
      intro: L(
        "Arabic and English with RTL, light and dark modes, in-app and push notifications, and purchase history keep the student journey connected across devices.",
        "العربية والإنجليزية مع RTL والوضع الفاتح والداكن والإشعارات داخل التطبيق والدفع والإشعارات الفورية وسجل المشتريات يبقيان رحلة الطالب متصلة عبر الأجهزة.",
      ),
    },
  ],
};
