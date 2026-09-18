import type { Localized, Project } from "@/lib/content/projectTypes";

const L = (en: string, ar: string): Localized => ({ en, ar });
const asset = (file: string) => `/assets/projects/smart-student/${file}`;

export const smartStudentProject: Project = {
  slug: "smart-student",
  category: "lms",
  service: "engineering",
  industry: "education",
  stack: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "next-intl",
    "Swiper",
    "Firebase",
    "PHP 8.2 REST API",
    "MyFatoorah",
    "GTM / GA4",
  ],
  tags: [
    L("Courses", "دورات"),
    L("Teachers", "معلمون"),
    L("Exams", "اختبارات"),
    L("Notes & Packages", "ملازم وباقات"),
    L("MyFatoorah", "ماي فاتورة"),
  ],
  cover: asset("cover.png"),
  logo: asset("logo.png"),
  logoTone: "light",
  links: [
    {
      label: L("Live website", "الموقع المباشر"),
      href: "https://www.smartstudent.live/en",
    },
  ],
  gallery: [
    {
      src: asset("desktop-home.png"),
      alt: L("Smart Student education homepage", "الصفحة الرئيسية لسمارت ستيودنت"),
      device: "desktop",
    },
    {
      src: asset("desktop-stages.png"),
      alt: L("Academic-stage discovery", "اكتشاف المراحل الدراسية"),
      device: "desktop",
    },
    {
      src: asset("desktop-teachers.png"),
      alt: L("Teacher directory and profiles", "دليل المعلمين والملفات"),
      device: "desktop",
    },
    {
      src: asset("desktop-subjects.png"),
      alt: L("Subject browsing by stage and class", "تصفح المواد حسب المرحلة والصف"),
      device: "desktop",
    },
    {
      src: asset("desktop-exams.png"),
      alt: L("Exams and question banks", "الاختبارات وبنوك الأسئلة"),
      device: "desktop",
    },
    {
      src: asset("desktop-app.png"),
      alt: L("Mobile-application promotion", "الترويج لتطبيق الجوال"),
      device: "desktop",
    },
    {
      src: asset("mobile-home.png"),
      alt: L("Mobile homepage", "الصفحة الرئيسية على الجوال"),
      device: "mobile",
    },
    {
      src: asset("mobile-teachers.png"),
      alt: L("Mobile teacher directory", "دليل المعلمين على الجوال"),
      device: "mobile",
    },
    {
      src: asset("mobile-subjects.png"),
      alt: L("Mobile subject browsing", "تصفح المواد على الجوال"),
      device: "mobile",
    },
    {
      src: asset("mobile-exams.png"),
      alt: L("Mobile exams and question banks", "الاختبارات وبنوك الأسئلة على الجوال"),
      device: "mobile",
    },
  ],
  name: {
    en: "Smart Student",
    ar: "سمارت ستيودنت",
  },
  tagline: {
    en: "A bilingual learning platform combining courses, teachers, notes, exams, packages, and MyFatoorah checkout.",
    ar: "منصة تعلم ثنائية اللغة تجمع الدورات والمعلمين والملازم والاختبارات والباقات ودفع ماي فاتورة.",
  },
  cta: {
    en: "Building a content-rich school or tutoring commerce platform?",
    ar: "تبنون منصة تعليم غنية بالمحتوى أو تجارة دروس خصوصية؟",
  },
  sections: [
    {
      kicker: L("Overview", "نظرة عامة"),
      title: L(
        "From academic stage to checkout in one student journey.",
        "من المرحلة الدراسية إلى الدفع في رحلة طالب واحدة.",
      ),
      intro: L(
        "Smart Student brings recorded courses, live teaching, private tutors, printed notes, exams, question banks, and educational packages together without overwhelming the student. Learners move from choosing a stage to discovering subjects, teachers, materials, and paid courses.",
        "سمارت ستيودنت يجمع الدورات المسجلة والتدريس المباشر والمعلمين الخصوصيين والملازم المطبوعة والاختبارات وبنوك الأسئلة والباقات التعليمية دون إرهاق الطالب. ينتقل المتعلم من اختيار المرحلة إلى اكتشاف المواد والمعلمين والمحتوى والدورات المدفوعة.",
      ),
    },
    {
      kicker: L("What it offers", "ما تقدّمه"),
      title: L(
        "Digital learning and physical educational products in one store.",
        "تعلم رقمي ومنتجات تعليمية مطبوعة في متجر واحد.",
      ),
      cards: [
        {
          title: L("Courses and teachers", "دورات ومعلمون"),
          body: L(
            "Recorded curricula, online and attendance teaching, teacher profiles, ratings, and private-tutor discovery.",
            "مناهج مسجلة وتدريس أونلاين وحضوري وملفات معلمين وتقييمات واكتشاف مدرسين خصوصيين.",
          ),
        },
        {
          title: L("Notes, exams, packages", "ملازم واختبارات وباقات"),
          body: L(
            "Printed and downloadable notes, exams, question banks, and bundled course or book packages.",
            "ملازم مطبوعة وقابلة للتنزيل واختبارات وبنوك أسئلة وباقات دورات وكتب.",
          ),
        },
        {
          title: L("MyFatoorah checkout", "دفع ماي فاتورة"),
          body: L(
            "Kuwait payment gateway for cart checkout on courses, books, and packages, with a confirmation return to the platform.",
            "بوابة دفع كويتية لسلة الدورات والكتب والباقات، مع العودة إلى المنصة بعد التأكيد.",
          ),
        },
        {
          title: L("Growth analytics", "تحليلات النمو"),
          body: L(
            "Google Tag Manager, GA4, Meta Pixel, and Snapchat Pixel support paid acquisition campaigns.",
            "Google Tag Manager وGA4 وMeta Pixel وSnapchat Pixel تدعم حملات الاستحواذ المدفوعة.",
          ),
        },
      ],
    },
    {
      kicker: L("Highlights", "أبرز الملامح"),
      title: L(
        "Friendly illustration, bilingual UI, and a product family across desktop, mobile web, and app promotion.",
        "رسوم ودية وواجهة ثنائية اللغة وعائلة منتج عبر سطح المكتب والويب الجوال والترويج للتطبيق.",
      ),
      notes: [
        {
          title: L("Built to grow content", "مبنية لنمو المحتوى"),
          body: L(
            "Teachers, subjects, classes, and packages can expand without changing the overall structure.",
            "يمكن أن ينمو المعلمون والمواد والصفوف والباقات دون تغيير البنية العامة.",
          ),
        },
      ],
    },
  ],
};
