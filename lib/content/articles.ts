import { articleBodies } from "./articleBodies";

export type ArticleCategory = "tech" | "ai" | "design" | "caseStudies";

export type ArticleBlock =
  | { type: "p"; en: string; ar: string }
  | { type: "h2"; en: string; ar: string };

export type ArticleLink = {
  kind: "linkedin" | "github" | "website";
  href: string;
  label: string;
};

export type ArticleImage = {
  src: string;
  alt: { en: string; ar: string };
};

export type ArticleListItem = {
  slug: string;
  category: ArticleCategory;
  date: string;
  readTime: number;
  author: string;
  cover: string;
  title: { en: string; ar: string };
  excerpt: { en: string; ar: string };
  links: ArticleLink[];
};

export type Article = ArticleListItem & {
  body: ArticleBlock[];
  gallery: ArticleImage[];
};

export const ARTICLES_COVER =
  "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=2000&q=80";

const img = (id: string, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

const shot = (id: string, en: string, ar: string): ArticleImage => ({
  src: img(id),
  alt: { en, ar },
});

export const articles: Article[] = [
  {
    slug: "shipping-headless-commerce",
    category: "tech",
    date: "2026-06-12",
    readTime: 6,
    author: "Omar Farouk",
    cover: img("1556742049-0cfed4f6a45d"),
    title: {
      en: "Shipping headless commerce without losing the checkout",
      ar: "إطلاق تجارة منفصلة دون فقدان عملية الدفع",
    },
    excerpt: {
      en: "A practical path from monolith storefront to headless — and the pitfalls that stall conversions.",
      ar: "مسار عملي من واجهة متجر أحادية إلى بنية منفصلة — والمزالق التي تعطل التحويل.",
    },
    links: [
      { kind: "website", href: "https://shopify.dev", label: "Shopify.dev" },
      { kind: "github", href: "https://github.com/Shopify/hydrogen", label: "Hydrogen" },
      { kind: "linkedin", href: "https://www.linkedin.com/company/shopify", label: "Shopify" },
    ],
    gallery: [
      shot("1556742049-0cfed4f6a45d", "Checkout counter", "منصة دفع"),
      shot("1441986300917-64674bd600d8", "Retail floor", "قاعة تجزئة"),
      shot("1460925895917-afdab827c52f", "Commerce analytics", "تحليلات تجارة"),
    ],
    body: articleBodies["shipping-headless-commerce"],
  },
  {
    slug: "eval-harness-for-llm-features",
    category: "ai",
    date: "2026-05-28",
    readTime: 6,
    author: "Layla Hassan",
    cover: img("1677442136019-21780ecad995"),
    title: {
      en: "An evaluation harness before you ship the chatbot",
      ar: "إطار تقييم قبل إطلاق روبوت المحادثة",
    },
    excerpt: {
      en: "Why golden sets and regression evals belong in the same pipeline as unit tests.",
      ar: "لماذا تنتمي المجموعات الذهبية وتقييمات الانحدار إلى نفس خط أنابيب اختبارات الوحدة.",
    },
    links: [
      { kind: "github", href: "https://github.com/openai/evals", label: "OpenAI Evals" },
      { kind: "website", href: "https://platform.openai.com/docs", label: "OpenAI Docs" },
      { kind: "linkedin", href: "https://www.linkedin.com/company/openai", label: "OpenAI" },
    ],
    gallery: [
      shot("1677442136019-21780ecad995", "AI workspace", "مساحة ذكاء اصطناعي"),
      shot("1485827404703-89b55fcc595e", "Automation lab", "مختبر أتمتة"),
      shot("1551288049-bebda4e38f71", "Eval dashboard", "لوحة تقييم"),
    ],
    body: articleBodies["eval-harness-for-llm-features"],
  },
  {
    slug: "design-systems-that-engineers-use",
    category: "design",
    date: "2026-04-19",
    readTime: 6,
    author: "Nina Alvarez",
    cover: img("1561070791-2526d30994b5"),
    title: {
      en: "Design systems that engineers actually use",
      ar: "أنظمة تصميم يستخدمها المهندسون فعلاً",
    },
    excerpt: {
      en: "Tokens, constraints, and the one Figma file you should delete.",
      ar: "الرموز والقيود وملف فيجما الذي ينبغي حذفه.",
    },
    links: [
      { kind: "website", href: "https://www.figma.com", label: "Figma" },
      { kind: "github", href: "https://github.com/tailwindlabs/tailwindcss", label: "Tailwind CSS" },
      { kind: "linkedin", href: "https://www.linkedin.com/company/figma", label: "Figma on LinkedIn" },
    ],
    gallery: [
      shot("1561070791-2526d30994b5", "Design tokens on a desk", "رموز تصميم على مكتب"),
      shot("1558655146-d09347e92766", "Interface sketches", "مسودات واجهة"),
      shot("1586717791821-3f44a563fa4c", "Color studies", "دراسات لون"),
    ],
    body: articleBodies["design-systems-that-engineers-use"],
  },
  {
    slug: "fintech-onboarding-rebuild",
    category: "caseStudies",
    date: "2026-03-08",
    readTime: 6,
    author: "Karim Nasser",
    cover: img("1563986768609-322da13575f3"),
    title: {
      en: "Rebuilding fintech onboarding without losing compliance",
      ar: "إعادة بناء تسجيل التقنية المالية دون فقدان الامتثال",
    },
    excerpt: {
      en: "How a regional payments team cut drop-off while keeping KYC intact.",
      ar: "كيف خفّض فريق مدفوعات إقليمي التسرب مع الإبقاء على اعرف عميلك.",
    },
    links: [
      { kind: "website", href: "https://stripe.com/docs", label: "Stripe Docs" },
      { kind: "github", href: "https://github.com/stripe/stripe-node", label: "stripe-node" },
      { kind: "linkedin", href: "https://www.linkedin.com/company/stripe", label: "Stripe" },
    ],
    gallery: [
      shot("1563986768609-322da13575f3", "Payments terminal", "جهاز مدفوعات"),
      shot("1554224155-6726b3ff858f", "Banking paperwork", "أوراق مصرفية"),
      shot("1551288049-bebda4e38f71", "Onboarding funnel chart", "مخطط قمع التسجيل"),
    ],
    body: articleBodies["fintech-onboarding-rebuild"],
  },
  {
    slug: "platform-observability-starter",
    category: "tech",
    date: "2026-02-14",
    readTime: 6,
    author: "Omar Farouk",
    cover: img("1551288049-bebda4e38f71"),
    title: {
      en: "The observability starter we install on day two",
      ar: "حزمة المراقبة التي نثبتها في اليوم الثاني",
    },
    excerpt: {
      en: "Logs, traces, and a single dashboard that answers: is the customer stuck?",
      ar: "سجلات وتتبعات ولوحة واحدة تجيب: هل علق العميل؟",
    },
    links: [
      { kind: "github", href: "https://github.com/open-telemetry/opentelemetry-js", label: "OpenTelemetry JS" },
      { kind: "website", href: "https://opentelemetry.io", label: "OpenTelemetry" },
      { kind: "linkedin", href: "https://www.linkedin.com/company/cloud-native-computing-foundation", label: "CNCF" },
    ],
    gallery: [
      shot("1551288049-bebda4e38f71", "Operations dashboard", "لوحة تشغيل"),
      shot("1504384308090-c894fdcc538d", "Night operations room", "غرفة تشغيل ليلية"),
      shot("1461749280684-dccba630e2f6", "Tracing in the editor", "تتبع في المحرر"),
    ],
    body: articleBodies["platform-observability-starter"],
  },
  {
    slug: "ai-in-operations",
    category: "ai",
    date: "2026-01-22",
    readTime: 6,
    author: "Layla Hassan",
    cover: img("1485827404703-89b55fcc595e"),
    title: {
      en: "AI in operations is a workflow problem",
      ar: "الذكاء الاصطناعي في التشغيل مشكلة مسار عمل",
    },
    excerpt: {
      en: "Agents fail when the SOP is unclear. Fix the process, then automate the edges.",
      ar: "تفشل الوكلاء عندما يكون الإجراء غير واضح. أصلح العملية ثم أتمت الأطراف.",
    },
    links: [
      { kind: "github", href: "https://github.com/langchain-ai/langchain", label: "LangChain" },
      { kind: "website", href: "https://python.langchain.com", label: "LangChain docs" },
      { kind: "linkedin", href: "https://www.linkedin.com/company/langchain", label: "LangChain" },
    ],
    gallery: [
      shot("1485827404703-89b55fcc595e", "Process automation", "أتمتة عمليات"),
      shot("1542744173-8e7e53415bb0", "Operations workshop", "ورشة تشغيل"),
      shot("1553877522-43269d4ea984", "Startup ops desk", "مكتب تشغيل ناشئ"),
    ],
    body: articleBodies["ai-in-operations"],
  },
  {
    slug: "nextjs-app-router-seams",
    category: "tech",
    date: "2025-12-11",
    readTime: 6,
    author: "Omar Farouk",
    cover: img("1461749280684-dccba630e2f6"),
    title: {
      en: "App Router seams that keep a Next.js app honest",
      ar: "وصلات App Router التي تُبقي تطبيق Next.js صادقاً",
    },
    excerpt: {
      en: "Server components, cached reads, and the boundaries we refuse to blur.",
      ar: "مكوّنات الخادم والقراءات المخبأة والحدود التي نرفض طمسها.",
    },
    links: [
      { kind: "website", href: "https://nextjs.org/docs", label: "Next.js docs" },
      { kind: "github", href: "https://github.com/vercel/next.js", label: "next.js" },
      { kind: "linkedin", href: "https://www.linkedin.com/company/vercel", label: "Vercel" },
    ],
    gallery: [
      shot("1461749280684-dccba630e2f6", "Code on a monitor", "شيفرة على شاشة"),
      shot("1498050108023-c5249f4df085", "Laptop on a desk", "حاسوب على مكتب"),
      shot("1517694712202-14dd9538aa97", "Keyboard close-up", "لوحة مفاتيح"),
    ],
    body: articleBodies["nextjs-app-router-seams"],
  },
  {
    slug: "github-actions-for-preview-apps",
    category: "tech",
    date: "2025-11-18",
    readTime: 6,
    author: "Karim Nasser",
    cover: img("1555949963-aa79dcee981c"),
    title: {
      en: "Preview apps that stakeholders actually click",
      ar: "تطبيقات معاينة يضغطها أصحاب المصلحة فعلاً",
    },
    excerpt: {
      en: "GitHub Actions, ephemeral URLs, and the review comment that replaces a meeting.",
      ar: "GitHub Actions وعناوين مؤقتة وتعليق مراجعة يغني عن اجتماع.",
    },
    links: [
      { kind: "github", href: "https://github.com/features/actions", label: "GitHub Actions" },
      { kind: "website", href: "https://docs.github.com/actions", label: "Actions docs" },
      { kind: "linkedin", href: "https://www.linkedin.com/company/github", label: "GitHub" },
    ],
    gallery: [
      shot("1555949963-aa79dcee981c", "Developer at a workstation", "مطوّر على محطة عمل"),
      shot("1516321318423-f06f85e504b3", "Team reviewing a board", "فريق يراجع لوحة"),
      shot("1522071820081-009f0129c71c", "Pairing session", "جلسة عمل مشترك"),
    ],
    body: articleBodies["github-actions-for-preview-apps"],
  },
  {
    slug: "react-native-bridge-discipline",
    category: "tech",
    date: "2025-10-09",
    readTime: 6,
    author: "Omar Farouk",
    cover: img("1512941937669-90a1b58e7e9c"),
    title: {
      en: "React Native without a leaky native bridge",
      ar: "React Native دون جسر أصلي يسرب",
    },
    excerpt: {
      en: "When we drop to native modules, and how we keep the JS side boring.",
      ar: "متى نهبط إلى وحدات أصلية وكيف نبقي جانب جافاسكربت مملاً.",
    },
    links: [
      { kind: "website", href: "https://reactnative.dev", label: "React Native" },
      { kind: "github", href: "https://github.com/facebook/react-native", label: "react-native" },
      { kind: "linkedin", href: "https://www.linkedin.com/company/meta", label: "Meta" },
    ],
    gallery: [
      shot("1512941937669-90a1b58e7e9c", "Phones on a desk", "هواتف على مكتب"),
      shot("1551650975-87deedd944c3", "Mobile screens", "شاشات جوال"),
      shot("1517694712202-14dd9538aa97", "Hardware close-up", "عتاد عن قرب"),
    ],
    body: articleBodies["react-native-bridge-discipline"],
  },
  {
    slug: "kubernetes-without-the-theatre",
    category: "tech",
    date: "2025-09-02",
    readTime: 6,
    author: "Karim Nasser",
    cover: img("1451187580459-43490279c0fa"),
    title: {
      en: "Kubernetes without the theatre",
      ar: "Kubernetes بلا مسرح",
    },
    excerpt: {
      en: "The smallest cluster that still gives us rollbacks, secrets, and sleep.",
      ar: "أصغر عنقود يمنحنا التراجع والأسرار والنوم.",
    },
    links: [
      { kind: "website", href: "https://kubernetes.io/docs/home/", label: "Kubernetes docs" },
      { kind: "github", href: "https://github.com/kubernetes/kubernetes", label: "kubernetes" },
      { kind: "linkedin", href: "https://www.linkedin.com/company/cloud-native-computing-foundation", label: "CNCF" },
    ],
    gallery: [
      shot("1451187580459-43490279c0fa", "Earth from orbit", "الأرض من المدار"),
      shot("1558494949-ef010cbdcc31", "Server racks", "رفوف خوادم"),
      shot("1518770660439-4636190af475", "Circuit board", "لوحة دوائر"),
    ],
    body: articleBodies["kubernetes-without-the-theatre"],
  },
  {
    slug: "rag-that-survives-production",
    category: "ai",
    date: "2025-08-21",
    readTime: 6,
    author: "Layla Hassan",
    cover: img("1526374965328-7f61d4dc18c5"),
    title: {
      en: "RAG that survives contact with real documents",
      ar: "توليد معزّز بالاسترجاع يصمد أمام وثائق حقيقية",
    },
    excerpt: {
      en: "Chunking, citations, and the retrieval bugs demos never show.",
      ar: "التجزئة والاستشهاد وأعطال الاسترجاع التي لا تظهرها العروض.",
    },
    links: [
      { kind: "github", href: "https://github.com/run-llama/llama_index", label: "LlamaIndex" },
      { kind: "website", href: "https://docs.llamaindex.ai", label: "LlamaIndex docs" },
      { kind: "linkedin", href: "https://www.linkedin.com/company/llamaindex", label: "LlamaIndex" },
    ],
    gallery: [
      shot("1526374965328-7f61d4dc18c5", "Terminal glow", "توهج طرفية"),
      shot("1456326753128-1c914941a810", "Document archive", "أرشيف وثائق"),
      shot("1454165804606-c3d57bc86b40", "Research desk", "مكتب بحث"),
    ],
    body: articleBodies["rag-that-survives-production"],
  },
  {
    slug: "prompt-evals-as-unit-tests",
    category: "ai",
    date: "2025-07-14",
    readTime: 6,
    author: "Layla Hassan",
    cover: img("1516321318423-f06f85e504b3"),
    title: {
      en: "Treat prompt changes like failing tests",
      ar: "عامل تغييرات التوجيه كاختبارات فاشلة",
    },
    excerpt: {
      en: "A golden set in CI so yesterday's answer cannot silently rot.",
      ar: "مجموعة ذهبية في التكامل المستمر حتى لا يتعفن جواب الأمس بهدوء.",
    },
    links: [
      { kind: "github", href: "https://github.com/openai/openai-python", label: "openai-python" },
      { kind: "website", href: "https://www.promptingguide.ai", label: "Prompting Guide" },
    ],
    gallery: [
      shot("1516321318423-f06f85e504b3", "Learning session", "جلسة تعلّم"),
      shot("1434030216411-0b793f4b4173", "Notes and laptop", "ملاحظات وحاسوب"),
      shot("1551288049-bebda4e38f71", "Score charts", "مخططات نتائج"),
    ],
    body: articleBodies["prompt-evals-as-unit-tests"],
  },
  {
    slug: "voice-agents-need-sops",
    category: "ai",
    date: "2025-06-03",
    readTime: 6,
    author: "Nina Alvarez",
    cover: img("1590602847861-39da3a5e1f1b"),
    title: {
      en: "Voice agents fail without a spoken SOP",
      ar: "وكلاء الصوت يفشلون بلا إجراء منطوق",
    },
    excerpt: {
      en: "Latency budgets, interruption policy, and the script behind the 'natural' call.",
      ar: "ميزانيات الكمون وسياسة المقاطعة والنص خلف المكالمة الطبيعية.",
    },
    links: [
      { kind: "website", href: "https://www.twilio.com/docs", label: "Twilio docs" },
      { kind: "github", href: "https://github.com/twilio/twilio-node", label: "twilio-node" },
      { kind: "linkedin", href: "https://www.linkedin.com/company/twilio-inc-", label: "Twilio" },
    ],
    gallery: [
      shot("1590602847861-39da3a5e1f1b", "Headset operator", "مشغّل بسماعة"),
      shot("1525182008055-f88b95ff7980", "Call center desks", "مكاتب مركز اتصال"),
      shot("1516321318423-f06f85e504b3", "Coaching a flow", "تدريب على تدفق"),
    ],
    body: articleBodies["voice-agents-need-sops"],
  },
  {
    slug: "tokens-before-components",
    category: "design",
    date: "2025-05-16",
    readTime: 6,
    author: "Nina Alvarez",
    cover: img("1507238691740-630f329fbb73"),
    title: {
      en: "Ship tokens before you ship a button",
      ar: "اشحن الرموز قبل أن تشحن زراً",
    },
    excerpt: {
      en: "Color, type, and space as code — so dark mode is not a weekend project.",
      ar: "اللون والنوع والمسافة كشيفرة — حتى لا يكون الوضع الداكن مشروع عطلة.",
    },
    links: [
      { kind: "website", href: "https://www.designtokens.org", label: "Design Tokens" },
      { kind: "github", href: "https://github.com/design-tokens/community-group", label: "Design Tokens CG" },
    ],
    gallery: [
      shot("1507238691740-630f329fbb73", "Palette studies", "دراسات لوحة ألوان"),
      shot("1561070791-2526d30994b5", "UI kit on screen", "طقم واجهة على الشاشة"),
      shot("1558655146-d09347e92766", "Composition board", "لوحة تكوين"),
    ],
    body: articleBodies["tokens-before-components"],
  },
  {
    slug: "motion-that-does-not-lie",
    category: "design",
    date: "2025-04-08",
    readTime: 6,
    author: "Nina Alvarez",
    cover: img("1550745165-9bc0b252726f"),
    title: {
      en: "Motion that does not lie about state",
      ar: "حركة لا تكذب عن الحالة",
    },
    excerpt: {
      en: "Duration, easing, and the reduced-motion path we ship on every marketing surface.",
      ar: "المدة والتخفيف ومسار تقليل الحركة الذي نشحنه على كل سطح تسويقي.",
    },
    links: [
      { kind: "website", href: "https://www.framer.com/motion/", label: "Framer Motion" },
      { kind: "github", href: "https://github.com/motiondivision/motion", label: "motion" },
    ],
    gallery: [
      shot("1550745165-9bc0b252726f", "Abstract motion", "حركة تجريدية"),
      shot("1558591710-4c05a0d02292", "Light trails", "آثار ضوء"),
      shot("1519389950473-47ba0277781c", "Team in motion", "فريق في حركة"),
    ],
    body: articleBodies["motion-that-does-not-lie"],
  },
  {
    slug: "dark-ui-contrast-that-ships",
    category: "design",
    date: "2025-03-19",
    readTime: 6,
    author: "Nina Alvarez",
    cover: img("1550751827-4bd374c3f58b"),
    title: {
      en: "Dark UI contrast that still passes",
      ar: "تباين واجهة داكنة ينجح بعد",
    },
    excerpt: {
      en: "Muted text, glass panels, and the WCAG line we will not cross for atmosphere.",
      ar: "نص خافت وألواح زجاجية وخط إتاحة لن نتجاوزه من أجل الجو.",
    },
    links: [
      { kind: "website", href: "https://www.w3.org/WAI/WCAG21/quickref/", label: "WCAG quickref" },
      { kind: "github", href: "https://github.com/dequelabs/axe-core", label: "axe-core" },
    ],
    gallery: [
      shot("1550751827-4bd374c3f58b", "Circuit in blue light", "دائرة بضوء أزرق"),
      shot("1531297484001-80022131f5a1", "Dark laptop scene", "حاسوب في مشهد داكن"),
      shot("1484417894907-623942c8ee29", "Night workspace", "مساحة عمل ليلية"),
    ],
    body: articleBodies["dark-ui-contrast-that-ships"],
  },
  {
    slug: "figma-to-code-contracts",
    category: "design",
    date: "2025-02-07",
    readTime: 6,
    author: "Omar Farouk",
    cover: img("1586717791821-3f44a563fa4c"),
    title: {
      en: "Figma-to-code contracts that survive a sprint",
      ar: "عقود فيجما إلى الشيفرة التي تصمد أمام سبرنت",
    },
    excerpt: {
      en: "Auto-layout, named layers, and the inspection ritual we run before estimate.",
      ar: "التخطيط التلقائي والطبقات المسمّاة وطقس الفحص قبل التقدير.",
    },
    links: [
      { kind: "website", href: "https://help.figma.com", label: "Figma Help" },
      { kind: "github", href: "https://github.com/figma/plugin-samples", label: "Figma plugins" },
      { kind: "linkedin", href: "https://www.linkedin.com/company/figma", label: "Figma" },
    ],
    gallery: [
      shot("1586717791821-3f44a563fa4c", "Color chips", "رقائق لون"),
      shot("1572041921920-716e023814cd", "Sticky workshop", "ورشة ملاحظات"),
      shot("1542744173-8e7e53415bb0", "Design review", "مراجعة تصميم"),
    ],
    body: articleBodies["figma-to-code-contracts"],
  },
  {
    slug: "ledger-reconciliation-console",
    category: "caseStudies",
    date: "2025-01-15",
    readTime: 6,
    author: "Karim Nasser",
    cover: img("1554224155-8d04cb21cd6c"),
    title: {
      en: "A reconciliation console that finance would sit in",
      ar: "وحدة مطابقة يجلس فيها المالية",
    },
    excerpt: {
      en: "How we replaced spreadsheet archaeology with an audit-grade trail.",
      ar: "كيف استبدلنا تنقيب الجداول بمسار تدقيق معتمد.",
    },
    links: [
      { kind: "website", href: "https://www.postgresql.org/docs/", label: "PostgreSQL" },
      { kind: "github", href: "https://github.com/prisma/prisma", label: "Prisma" },
      { kind: "linkedin", href: "https://www.linkedin.com/company/postgresql", label: "PostgreSQL" },
    ],
    gallery: [
      shot("1554224155-8d04cb21cd6c", "Financial desk", "مكتب مالي"),
      shot("1460925895917-afdab827c52f", "Ledger charts", "مخططات دفتر"),
      shot("1551288049-bebda4e38f71", "Ops metrics", "مقاييس تشغيل"),
    ],
    body: articleBodies["ledger-reconciliation-console"],
  },
  {
    slug: "clinic-booking-under-load",
    category: "caseStudies",
    date: "2024-12-02",
    readTime: 6,
    author: "Layla Hassan",
    cover: img("1576091160393-0ea0c4b0f0ea"),
    title: {
      en: "Clinic booking that held through a vaccine week",
      ar: "حجز عيادات صمد في أسبوع تطعيم",
    },
    excerpt: {
      en: "Queues, slot locks, and the SMS path that stopped double-booking.",
      ar: "طوابير وقفل فترات ومسار رسائل أوقف الحجز المزدوج.",
    },
    links: [
      { kind: "website", href: "https://redis.io/docs/", label: "Redis docs" },
      { kind: "github", href: "https://github.com/redis/node-redis", label: "node-redis" },
    ],
    gallery: [
      shot("1576091160393-0ea0c4b0f0ea", "Clinic corridor", "ممر عيادة"),
      shot("1579684385127-1ef15d508118", "Care team", "فريق رعاية"),
      shot("1516321318423-f06f85e504b3", "Scheduling workshop", "ورشة جدولة"),
    ],
    body: articleBodies["clinic-booking-under-load"],
  },
  {
    slug: "marketplace-search-relevance",
    category: "caseStudies",
    date: "2024-10-24",
    readTime: 6,
    author: "Omar Farouk",
    cover: img("1486312338219-ce68d2c6f44d"),
    title: {
      en: "Marketplace search that stopped ranking junk first",
      ar: "بحث سوق توقف عن ترتيب الرديء أولاً",
    },
    excerpt: {
      en: "Synonyms, stock signals, and the query log we finally read.",
      ar: "المرادفات وإشارات المخزون وسجل الاستعلام الذي قرأناه أخيراً.",
    },
    links: [
      { kind: "website", href: "https://www.elastic.co/guide/index.html", label: "Elastic docs" },
      { kind: "github", href: "https://github.com/elastic/elasticsearch", label: "elasticsearch" },
      { kind: "linkedin", href: "https://www.linkedin.com/company/elastic-co", label: "Elastic" },
    ],
    gallery: [
      shot("1486312338219-ce68d2c6f44d", "Research on a laptop", "بحث على حاسوب"),
      shot("1441986300917-64674bd600d8", "Store interior", "داخل متجر"),
      shot("1460925895917-afdab827c52f", "Relevance charts", "مخططات صلة"),
    ],
    body: articleBodies["marketplace-search-relevance"],
  },
];

export function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug);
}

export function getRelatedArticles(slug: string, limit = 3) {
  const current = getArticle(slug);
  if (!current) return articles.slice(0, limit);
  return articles
    .filter((article) => article.slug !== slug)
    .sort((a, b) =>
      a.category === current.category ? -1 : b.category === current.category ? 1 : 0,
    )
    .slice(0, limit);
}
