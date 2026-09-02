import type { Localized, Project } from "@/lib/content/projectTypes";

const L = (en: string, ar: string): Localized => ({ en, ar });

export const schoolProject: Project = {
  slug: "ai-school-platform",
  service: "ai",
  industry: "education",
  stack: [
    "Multi-tenant SaaS",
    "Syllabus Knowledge Model",
    "Analytics Pipelines",
    "LLM Integration",
    "Recommendation Engine",
    "Assessment Engine",
    "RBAC",
    "Real-time Notifications",
    "Live-event Scheduling",
    "Content & File Management",
    "Secure APIs",
    "Cloud-ready Architecture",
  ],
  tags: [
    L("Student Learning", "تعلم الطالب"),
    L("Teacher Intelligence", "ذكاء المعلم"),
    L("Parent Updates", "تحديثات ولي الأمر"),
    L("Syllabus Mapping", "ربط المنهج"),
    L("Adaptive Learning", "تعلم تكيّفي"),
    L("AI Assessment Generation", "توليد تقييمات بالذكاء الاصطناعي"),
  ],
  cover: "/assets/projects/school-cover.jpg",
  gallery: [
    {
      src: "/assets/projects/school-cover.jpg",
      alt: L("AI learning profile for a student", "ملف التعلم الذكي للطالب"),
    },
    {
      src: "/assets/projects/school-1.jpg",
      alt: L("Student dashboard and next-study guidance", "لوحة الطالب وإرشاد ماذا تدرس بعد ذلك"),
    },
    {
      src: "/assets/projects/school-2.jpg",
      alt: L("Teacher class intelligence view", "عرض ذكاء الصف للمعلم"),
    },
    {
      src: "/assets/projects/school-3.jpg",
      alt: L("Parent academic update", "تحديث أكاديمي لولي الأمر"),
    },
    {
      src: "/assets/projects/school-4.jpg",
      alt: L("AI assessment generator", "مولّد التقييمات بالذكاء الاصطناعي"),
    },
  ],
  name: {
    en: "AI-Powered School Learning & Academic Intelligence Platform",
    ar: "منصة التعلم المدرسي والذكاء الأكاديمي بالذكاء الاصطناعي",
  },
  tagline: {
    en: "A unified digital learning environment where AI continuously interprets how every student is learning—connecting exams, quizzes, homework, practice, courses and engagement directly to the syllabus.",
    ar: "بيئة تعلم رقمية موحّدة يفسّر فيها الذكاء الاصطناعي باستمرار كيف يتعلم كل طالب — ويربط الامتحانات والاختبارات والواجبات والتدريب والدورات والتفاعل بالمنهج مباشرة.",
  },
  cta: {
    en: "Turning school activity into understandable, actionable academic intelligence.",
    ar: "تحويل نشاط المدرسة إلى ذكاء أكاديمي مفهوم وقابل للتنفيذ.",
  },
  sections: [
    {
      kicker: L("The Core Differentiator", "الفرق الجوهري"),
      title: L("Beyond grades. Toward academic understanding.", "أبعد من الدرجات. نحو الفهم الأكاديمي."),
      intro: L(
        "The platform does not simply report scores. Its Academic Intelligence Engine identifies mastery, learning gaps, recurring misconceptions, improvement trends and recommended next actions.",
        "المنصة لا تكتفي بالإبلاغ عن الدرجات. يحدّد محرك الذكاء الأكاديمي الإتقان وفجوات التعلم والمفاهيم الخاطئة المتكررة واتجاهات التحسن والإجراءات التالية الموصى بها.",
      ),
      cards: [
        {
          title: L("Understand mastery", "افهم الإتقان"),
          body: L(
            "Connect academic evidence to specific syllabus units and learning objectives instead of treating a grade as the final signal.",
            "اربط الدليل الأكاديمي بوحدات المنهج وأهداف التعلم بدل التعامل مع الدرجة كإشارة نهائية.",
          ),
        },
        {
          title: L("Detect difficulty early", "اكتشف الصعوبة مبكراً"),
          body: L(
            "Combine recent scores, repeated errors, incomplete work and engagement changes to surface emerging learning risks.",
            "اجمع الدرجات الحديثة والأخطاء المتكررة والعمل الناقص وتغيّر التفاعل لإظهار مخاطر التعلم الناشئة.",
          ),
        },
        {
          title: L("Recommend the next action", "وصِّ بالإجراء التالي"),
          body: L(
            "Turn analysis into targeted exercises, revision material, teacher interventions and understandable parent updates.",
            "حوّل التحليل إلى تمارين مستهدفة ومادة مراجعة وتدخلات معلم وتحديثات مفهومة لولي الأمر.",
          ),
        },
      ],
    },
    {
      kicker: L("Complete Digital Learning Environment", "بيئة تعلم رقمية كاملة"),
      title: L("One platform. Four connected experiences.", "منصة واحدة. أربع تجارب متصلة."),
      cards: [
        {
          title: L("Students", "الطلاب"),
          body: L(
            "Online courses, syllabus tracking, homework, practice, quizzes, exams, live classes, resources, grades and personal progress.",
            "دورات عبر الإنترنت وتتبع المنهج والواجبات والتدريب والاختبارات والامتحانات والحصص المباشرة والموارد والدرجات والتقدم الشخصي.",
          ),
        },
        {
          title: L("Teachers", "المعلمون"),
          body: L(
            "Class and student management, course publishing, question banks, assessments, grading, feedback, attendance and analytics.",
            "إدارة الصف والطالب ونشر الدورات وبنوك الأسئلة والتقييمات والتصحيح والملاحظات والحضور والتحليلات.",
          ),
        },
        {
          title: L("Parents", "أولياء الأمور"),
          body: L(
            "Attendance, assignments, results, learning activity, upcoming assessments and AI-generated academic updates.",
            "الحضور والواجبات والنتائج ونشاط التعلم والتقييمات القادمة وتحديثات أكاديمية مولَّدة بالذكاء الاصطناعي.",
          ),
        },
        {
          title: L("Administrators", "الإداريون"),
          body: L(
            "Academic years, grades, classes, subjects, syllabus structures, enrollment, users, permissions, calendars and school-wide reporting.",
            "الأعوام الأكاديمية والصفوف والفصول والمواد وهياكل المنهج والتسجيل والمستخدمون والصلاحيات والتقويمات وتقارير على مستوى المدرسة.",
          ),
        },
      ],
      notes: [
        {
          title: L("Syllabus as the intelligence backbone", "المنهج عمود الذكاء الفقري"),
          body: L(
            "Every learning signal maps back to what the student is expected to know. Questions, assignments, lessons and assessments are mapped to syllabus units and learning objectives, allowing the platform to distinguish strong, developing and persistently difficult concepts.",
            "كل إشارة تعلم تعود إلى ما يُفترض أن يعرفه الطالب. تُربط الأسئلة والواجبات والدروس والتقييمات بوحدات المنهج وأهداف التعلم، فتفرّق المنصة بين المفاهيم القوية والنامية والصعبة باستمرار.",
          ),
        },
      ],
      steps: [
        {
          title: L("Learning Activity", "نشاط التعلم"),
          body: L("Courses, homework & practice", "دورات وواجبات وتدريب"),
        },
        {
          title: L("Academic Evidence", "دليل أكاديمي"),
          body: L("Results, attempts & mistakes", "نتائج ومحاولات وأخطاء"),
        },
        {
          title: L("Syllabus Mapping", "ربط المنهج"),
          body: L("Units & objectives", "وحدات وأهداف"),
        },
        {
          title: L("AI Analysis", "تحليل ذكي"),
          body: L("Patterns & trends", "أنماط واتجاهات"),
        },
        {
          title: L("Mastery & Risk", "إتقان ومخاطر"),
          body: L("Strengths & gaps", "نقاط قوة وفجوات"),
        },
        {
          title: L("Personalized Action", "إجراء مخصص"),
          body: L("What happens next", "ماذا يحدث بعد ذلك"),
        },
      ],
    },
    {
      kicker: L("Explore the Platform", "استكشف المنصة"),
      title: L(
        "Product experiences built around each academic role.",
        "تجارب منتج مبنية حول كل دور أكاديمي.",
      ),
      intro: L(
        "These screens are the primary visual proof points for the case study: student learning, teacher intelligence, parent communication, and assessment generation.",
        "هذه الشاشات هي الإثبات البصري الأساسي لدراسة الحالة: تعلم الطالب وذكاء المعلم وتواصل ولي الأمر وتوليد التقييمات.",
      ),
      cards: [
        {
          title: L("Student Dashboard", "لوحة الطالب"),
          body: L(
            "Daily learning, assignments, exams, subject progress and AI-generated “What to study next.”",
            "التعلم اليومي والواجبات والامتحانات وتقدم المواد و«ماذا تدرس بعد ذلك» المولَّد بالذكاء الاصطناعي.",
          ),
        },
        {
          title: L("Student AI Learning Profile", "ملف تعلم الطالب الذكي"),
          body: L(
            "Syllabus mastery, strengths, developing concepts, persistent gaps, trends and personalized recommendations.",
            "إتقان المنهج ونقاط القوة والمفاهيم النامية والفجوات المستمرة والاتجاهات والتوصيات المخصصة.",
          ),
        },
        {
          title: L("Teacher Class Intelligence", "ذكاء صف المعلم"),
          body: L(
            "Students requiring attention, difficult objectives, class patterns, assessment performance and intervention opportunities.",
            "طلاب يحتاجون انتباهاً وأهداف صعبة وأنماط الصف وأداء التقييم وفرص التدخل.",
          ),
        },
        {
          title: L("Student Detail — Teacher View", "تفاصيل الطالب — عرض المعلم"),
          body: L(
            "Explainable evidence behind a learning difficulty flag, including affected objectives, repeated errors and recommended intervention.",
            "دليل قابل للشرح خلف إشارة صعوبة التعلم، بما فيه الأهداف المتأثرة والأخطاء المتكررة والتدخل الموصى به.",
          ),
        },
        {
          title: L("Parent Academic Update", "تحديث أكاديمي لولي الأمر"),
          body: L(
            "A clear AI-generated summary of progress, strengths, difficulties, missing work and recommended support.",
            "ملخص واضح مولَّد بالذكاء الاصطناعي عن التقدم ونقاط القوة والصعوبات والعمل الناقص والدعم الموصى به.",
          ),
        },
        {
          title: L("AI Assessment Generator", "مولّد التقييمات"),
          body: L(
            "Syllabus-aligned quiz, homework, practice and revision generation by grade, topic, objective and difficulty.",
            "توليد اختبارات وواجبات وتدريب ومراجعة متوافقة مع المنهج حسب الصف والموضوع والهدف والصعوبة.",
          ),
        },
      ],
    },
    {
      kicker: L("AI-First Student Performance Intelligence", "ذكاء أداء الطالب أولاً"),
      title: L(
        "From raw academic data to actionable intelligence.",
        "من البيانات الأكاديمية الخام إلى ذكاء قابل للتنفيذ.",
      ),
      cards: [
        {
          title: L("AI Parent Intelligence", "ذكاء ولي الأمر"),
          body: L(
            "Weekly or monthly updates explaining progress, improvements, missing work, strengths, persistent difficulties and recommended support.",
            "تحديثات أسبوعية أو شهرية تشرح التقدم والتحسينات والعمل الناقص ونقاط القوة والصعوبات المستمرة والدعم الموصى به.",
          ),
        },
        {
          title: L("AI Teacher Copilot", "مساعد المعلم"),
          body: L(
            "Surfaces students requiring attention, recurring misconceptions, difficult syllabus objectives, class-wide patterns and intervention opportunities.",
            "يُظهر الطلاب الذين يحتاجون انتباهاً والمفاهيم الخاطئة المتكررة وأهداف المنهج الصعبة وأنماط الصف وفرص التدخل.",
          ),
        },
        {
          title: L("Early Difficulty Detection", "اكتشاف مبكر للصعوبة"),
          body: L(
            "Combines recent scores, repeated errors, incomplete work and engagement changes to detect emerging difficulty before final exam failure.",
            "يجمع الدرجات الحديثة والأخطاء المتكررة والعمل الناقص وتغيّر التفاعل لاكتشاف الصعوبة الناشئة قبل رسوب الامتحان النهائي.",
          ),
        },
        {
          title: L("Adaptive Learning", "تعلم تكيّفي"),
          body: L(
            "Recommends targeted exercises, lessons, revision material and practice sets based on specific syllabus gaps, mastery and previous mistakes.",
            "يوصي بتمارين ودروس ومادة مراجعة ومجموعات تدريب مستهدفة بناءً على فجوات منهج محددة والإتقان والأخطاء السابقة.",
          ),
        },
        {
          title: L("AI Assessment & Content Generation", "توليد تقييم ومحتوى"),
          body: L(
            "Assists teachers in drafting syllabus-aligned quizzes, homework, question variants, revision material and lesson summaries.",
            "يساعد المعلمين على صياغة اختبارات وواجبات ومتغيرات أسئلة ومادة مراجعة وملخصات دروس متوافقة مع المنهج.",
          ),
        },
        {
          title: L("Class & School Intelligence", "ذكاء الصف والمدرسة"),
          body: L(
            "Aggregates learning signals to expose objectives where a class or grade is struggling and support curriculum-level intervention.",
            "يجمع إشارات التعلم لكشف الأهداف التي يعاني فيها صف أو مرحلة ودعم التدخل على مستوى المنهج.",
          ),
        },
      ],
      notes: [
        {
          title: L("Student", "الطالب"),
          body: L(
            "What do I understand, where am I struggling, and what should I study next?",
            "ماذا أفهم، وأين أعاني، وماذا يجب أن أدرس بعد ذلك؟",
          ),
        },
        {
          title: L("Teacher", "المعلم"),
          body: L(
            "Who needs help, why are they struggling, and what intervention should I make?",
            "من يحتاج مساعدة، ولماذا يعاني، وأي تدخل يجب أن أقوم به؟",
          ),
        },
        {
          title: L("Parent", "ولي الأمر"),
          body: L(
            "How is my child progressing, where do they excel, and where do they need support?",
            "كيف يتقدم ابني، وأين يتميز، وأين يحتاج دعماً؟",
          ),
        },
        {
          title: L("Explainable AI, not a black box", "ذكاء قابل للشرح لا صندوق أسود"),
          body: L(
            "Every recommendation traces back to academic evidence. A difficulty flag can reference affected syllabus objectives, recent assessment results, repeated error patterns, incomplete practice and changes over time—giving teachers and parents context for why the AI reached its conclusion.",
            "كل توصية تعود إلى دليل أكاديمي. يمكن لإشارة الصعوبة أن تشير إلى أهداف المنهج المتأثرة ونتائج التقييم الحديثة وأنماط الخطأ المتكررة والتدريب الناقص والتغيّر عبر الزمن — فتعطي المعلمين وأولياء الأمور سياقاً لسبب استنتاج الذكاء الاصطناعي.",
          ),
        },
      ],
    },
    {
      kicker: L("AI Impact", "أثر الذكاء الاصطناعي"),
      title: L(
        "Designed to improve the academic decision loop.",
        "مصممة لتحسين حلقة القرار الأكاديمي.",
      ),
      cards: [
        {
          title: L("Personalization", "التخصيص"),
          body: L(
            "Learning recommendations are based on actual knowledge gaps rather than generic grade-level content.",
            "توصيات التعلم مبنية على فجوات معرفة حقيقية لا على محتوى عام لمستوى الصف.",
          ),
        },
        {
          title: L("Earlier Intervention", "تدخل أبكر"),
          body: L(
            "Teachers can identify emerging difficulty before poor performance becomes a final outcome.",
            "يمكن للمعلمين رصد الصعوبة الناشئة قبل أن يصبح الأداء الضعيف نتيجة نهائية.",
          ),
        },
        {
          title: L("Better Communication", "تواصل أفضل"),
          body: L(
            "Parents receive understandable, evidence-based explanations of academic progress instead of raw scores alone.",
            "يتلقى أولياء الأمور شروحاً مفهومة مبنية على الدليل عن التقدم الأكاديمي بدل الدرجات الخام وحدها.",
          ),
        },
      ],
    },
    {
      kicker: L("Engineering Highlights", "أبرز الهندسة"),
      title: L(
        "Built as a connected academic intelligence platform.",
        "مبنية كمنصة ذكاء أكاديمي متصلة.",
      ),
      intro: L(
        "A case study in combining digital learning workflows, syllabus-aware data modeling and explainable AI.",
        "دراسة حالة في الجمع بين مسارات التعلم الرقمي ونمذجة بيانات واعية بالمنهج وذكاء اصطناعي قابل للشرح.",
      ),
      layers: [
        L("Multi-tenant SaaS", "ساس متعدد المستأجرين"),
        L("Syllabus Knowledge Model", "نموذج معرفة المنهج"),
        L("Analytics Pipelines", "أنابيب تحليلات"),
        L("LLM Integration", "تكامل نماذج اللغة"),
        L("Recommendation Engine", "محرك توصيات"),
        L("Assessment Engine", "محرك تقييم"),
        L("RBAC", "صلاحيات الأدوار"),
        L("Real-time Notifications", "إشعارات فورية"),
        L("Live-event Scheduling", "جدولة أحداث مباشرة"),
        L("Content & File Management", "إدارة المحتوى والملفات"),
        L("Secure APIs", "واجهات آمنة"),
        L("Cloud-ready Architecture", "بنية جاهزة للسحابة"),
      ],
    },
  ],
};
