import type { Localized, Project } from "@/lib/content/projectTypes";

const L = (en: string, ar: string): Localized => ({ en, ar });

export const marketplaceProject: Project = {
  slug: "ai-powered-marketplace",
  service: "ecommerce",
  industry: "retail",
  stack: [
    "Modern Web",
    "API Backend",
    "PostgreSQL",
    "Redis",
    "Search + Vectors",
    "WebSockets",
    "Containers",
  ],
  tags: [
    L("Multi-Vendor", "متعدد البائعين"),
    L("E-Commerce", "تجارة إلكترونية"),
    L("AI Search", "بحث بالذكاء الاصطناعي"),
    L("Seller Portal", "بوابة البائع"),
    L("Marketplace Ops", "تشغيل السوق"),
  ],
  cover: "/assets/projects/marketplace-cover.jpg",
  gallery: [
    {
      src: "/assets/projects/marketplace-cover.jpg",
      alt: L("Customer storefront homepage", "الصفحة الرئيسية لواجهة المتجر"),
    },
    {
      src: "/assets/projects/marketplace-1.jpg",
      alt: L("Marketplace product and category browsing", "تصفح المنتجات والتصنيفات"),
    },
    {
      src: "/assets/projects/marketplace-2.jpg",
      alt: L("Seller and operations workspace", "مساحة عمل البائع والتشغيل"),
    },
    {
      src: "/assets/projects/marketplace-3.jpg",
      alt: L("Checkout and order experience", "تجربة الدفع والطلب"),
    },
    {
      src: "/assets/projects/marketplace-4.jpg",
      alt: L("Admin marketplace dashboard", "لوحة إدارة السوق"),
    },
  ],
  name: {
    en: "AI-Powered Multi-Vendor Commerce Platform",
    ar: "منصة تجارة متعددة البائعين بالذكاء الاصطناعي",
  },
  tagline: {
    en: "A feature-rich marketplace combining modern e-commerce, seller operations, platform administration, and practical AI capabilities in one scalable product.",
    ar: "سوق غني بالميزات يجمع التجارة الحديثة وتشغيل البائعين وإدارة المنصة وقدرات ذكاء اصطناعي عملية في منتج واحد قابل للتوسع.",
  },
  cta: {
    en: "Building a marketplace, commerce platform, or AI-enabled product?",
    ar: "تبنون سوقاً أو منصة تجارة أو منتجاً مدعوماً بالذكاء الاصطناعي؟",
  },
  sections: [
    {
      kicker: L("The Challenge", "التحدي"),
      title: L(
        "A serious marketplace must serve customers, merchants, and operators at the same time.",
        "السوق الجاد يجب أن يخدم العملاء والتجار والمشغّلين في الوقت نفسه.",
      ),
      intro: L(
        "Multi-vendor commerce is significantly more complex than a conventional online store. Product discovery, seller operations, inventory, payments, commissions, moderation, fulfillment, refunds, and customer service all need to work as one coordinated product.",
        "التجارة متعددة البائعين أعقد بكثير من متجر إلكتروني تقليدي. اكتشاف المنتج وتشغيل البائع والمخزون والمدفوعات والعمولات والإشراف والتنفيذ والاسترداد وخدمة العملاء يجب أن تعمل كمنتج واحد منسّق.",
      ),
      cards: [
        {
          title: L("Complex Product Discovery", "اكتشاف منتج معقّد"),
          body: L(
            "Large catalogs make it difficult for customers to find the right product using exact keywords, filters, and conventional category navigation alone.",
            "الكتالوجات الكبيرة تصعّب على العملاء إيجاد المنتج المناسب بالكلمات المفتاحية الدقيقة والفلاتر والتنقل التقليدي بين التصنيفات وحدها.",
          ),
        },
        {
          title: L("Fragmented Seller Operations", "تشغيل بائع متفرق"),
          body: L(
            "Independent merchants need reliable tools for products, variants, inventory, promotions, orders, customers, and performance without leaving the marketplace ecosystem.",
            "يحتاج التجار المستقلون أدوات موثوقة للمنتجات والمتغيرات والمخزون والعروض والطلبات والعملاء والأداء دون مغادرة منظومة السوق.",
          ),
        },
        {
          title: L("Marketplace-Wide Control", "سيطرة على كامل السوق"),
          body: L(
            "Administrators need centralized control over vendors, products, commissions, payments, refunds, disputes, moderation, permissions, and operational visibility.",
            "يحتاج الإداريون سيطرة مركزية على البائعين والمنتجات والعمولات والمدفوعات والاسترداد والنزاعات والإشراف والصلاحيات والرؤية التشغيلية.",
          ),
        },
      ],
    },
    {
      kicker: L("The Solution", "الحل"),
      title: L(
        "A complete digital commerce ecosystem rather than a conventional online store.",
        "منظومة تجارة رقمية كاملة لا متجراً تقليدياً.",
      ),
      intro: L(
        "Customers shop across multiple vendors through one storefront, merchants operate their businesses through dedicated seller tools, and administrators manage the entire marketplace from a central operations console. Catalog, inventory, checkout, fulfillment, marketplace governance, and AI capabilities are designed around the same transactional and operational data.",
        "يتسوق العملاء عبر بائعين متعددين من واجهة واحدة، ويدير التجار أعمالهم بأدوات بائع مخصصة، ويدير الإداريون السوق كله من وحدة تشغيل مركزية. الكتالوج والمخزون والدفع والتنفيذ وحوكمة السوق وقدرات الذكاء الاصطناعي مبنية حول البيانات التشغيلية والمعاملات نفسها.",
      ),
      notes: [
        {
          title: L("Three connected experiences", "ثلاث تجارب متصلة"),
          body: L(
            "Customer, seller, and admin workflows share one commerce platform.",
            "مسارات العميل والبائع والإدارة تتشارك منصة تجارة واحدة.",
          ),
        },
      ],
      cards: [
        {
          title: L("Rich Customer Storefront", "واجهة عميل غنية"),
          body: L(
            "Catalogs, categories, collections, variants, SKUs, promotions, wishlists, comparisons, ratings, and reviews.",
            "كتالوجات وتصنيفات ومجموعات ومتغيرات ووحدات حفظ مخزون وعروض وقوائم رغبات ومقارنات وتقييمات ومراجعات.",
          ),
        },
        {
          title: L("Checkout & Post-Purchase", "الدفع وما بعد الشراء"),
          body: L(
            "Secure checkout, payment integration, coupons, saved addresses, order history, tracking, returns, refunds, and notifications.",
            "دفع آمن وتكامل مدفوعات وكوبونات وعناوين محفوظة وتاريخ طلبات وتتبع وإرجاع واسترداد وإشعارات.",
          ),
        },
        {
          title: L("Seller Operations", "تشغيل البائع"),
          body: L(
            "Dedicated merchant tools for products, inventory, orders, promotions, customers, stock alerts, and performance analytics.",
            "أدوات تاجر مخصصة للمنتجات والمخزون والطلبات والعروض والعملاء وتنبيهات المخزون وتحليلات الأداء.",
          ),
        },
        {
          title: L("Marketplace Administration", "إدارة السوق"),
          body: L(
            "Vendor approval, product moderation, commissions, payments, refunds, disputes, permissions, auditability, and dashboards.",
            "الموافقة على البائعين وإشراف المنتجات والعمولات والمدفوعات والاسترداد والنزاعات والصلاحيات وقابلية التدقيق واللوحات.",
          ),
        },
        {
          title: L("AI-Powered Discovery", "اكتشاف بالذكاء الاصطناعي"),
          body: L(
            "Conversational discovery, semantic search, visual product search, intelligent comparison, and personalized recommendations.",
            "اكتشاف حواري وبحث دلالي وبحث بصري للمنتجات ومقارنة ذكية وتوصيات مخصصة.",
          ),
        },
        {
          title: L("AI Seller Intelligence", "ذكاء البائع"),
          body: L(
            "Content generation and grounded sales analysis help merchants merchandise faster and understand business performance.",
            "توليد المحتوى وتحليل المبيعات المرتكز على البيانات يساعد التجار على التسويق أسرع وفهم أداء العمل.",
          ),
        },
      ],
    },
    {
      kicker: L("Explore the Platform", "استكشف المنصة"),
      title: L(
        "One marketplace. Distinct experiences for shoppers, sellers, and platform teams.",
        "سوق واحد. تجارب متمايزة للمتسوقين والبائعين وفرق المنصة.",
      ),
      intro: L(
        "Each surface supports a different part of the commerce lifecycle while sharing the same catalog, inventory, and order data.",
        "كل سطح يدعم جزءاً مختلفاً من دورة التجارة مع مشاركة الكتالوج والمخزون وبيانات الطلب نفسها.",
      ),
      modules: [
        {
          kicker: L("Customer Experience", "تجربة العميل"),
          title: L(
            "A unified storefront built for discovery and conversion",
            "واجهة موحّدة مبنية للاكتشاف والتحويل",
          ),
          body: L(
            "Customers browse products from multiple vendors through one responsive storefront with rich discovery, comparison, checkout, tracking, and post-purchase flows.",
            "يتصفح العملاء منتجات بائعين متعددين عبر واجهة متجاوبة واحدة باكتشاف غني ومقارنة ودفع وتتبع ومسارات ما بعد الشراء.",
          ),
          bullets: [
            L(
              "Advanced search, filtering, categories, and collections",
              "بحث متقدم وتصفية وتصنيفات ومجموعات",
            ),
            L(
              "Variants, wishlists, comparisons, ratings, and reviews",
              "متغيرات وقوائم رغبات ومقارنات وتقييمات ومراجعات",
            ),
            L(
              "Secure cart, checkout, payments, tracking, and returns",
              "سلة آمنة ودفع ومدفوعات وتتبع وإرجاع",
            ),
          ],
        },
        {
          kicker: L("Seller Operations", "تشغيل البائع"),
          title: L(
            "Independent merchants get a complete business workspace",
            "يحصل التجار المستقلون على مساحة عمل تجارية كاملة",
          ),
          body: L(
            "Sellers manage products, variants, inventory, orders, promotions, customers, and performance through a dedicated merchant portal.",
            "يدير البائعون المنتجات والمتغيرات والمخزون والطلبات والعروض والعملاء والأداء عبر بوابة تاجر مخصصة.",
          ),
          bullets: [
            L("Product and variant management", "إدارة المنتجات والمتغيرات"),
            L("Stock monitoring and low-stock alerts", "مراقبة المخزون وتنبيهات النفاد"),
            L(
              "Orders, promotions, customers, and performance analytics",
              "الطلبات والعروض والعملاء وتحليلات الأداء",
            ),
          ],
        },
        {
          kicker: L("Marketplace Operations", "تشغيل السوق"),
          title: L(
            "Central control for the teams operating the marketplace",
            "سيطرة مركزية للفرق التي تشغّل السوق",
          ),
          body: L(
            "Administrators govern vendors, products, commissions, payments, refunds, disputes, moderation, roles, and marketplace-wide operational activity.",
            "يحكم الإداريون البائعين والمنتجات والعمولات والمدفوعات والاسترداد والنزاعات والإشراف والأدوار والنشاط التشغيلي على مستوى السوق.",
          ),
          bullets: [
            L("Vendor approval and product moderation", "الموافقة على البائعين وإشراف المنتجات"),
            L("Commissions, payments, refunds, and disputes", "العمولات والمدفوعات والاسترداد والنزاعات"),
            L("RBAC, auditability, and operational dashboards", "صلاحيات أدوار وقابلية تدقيق ولوحات تشغيل"),
          ],
        },
        {
          kicker: L("AI-Powered Discovery", "اكتشاف بالذكاء الاصطناعي"),
          title: L(
            "Search by meaning, intent, image, and real customer needs",
            "ابحث بالمعنى والقصد والصورة واحتياجات العميل الحقيقية",
          ),
          body: L(
            "AI improves product discovery with conversational search, semantic matching, image-assisted discovery, intelligent comparisons, and personalized recommendations.",
            "يحسّن الذكاء الاصطناعي اكتشاف المنتج ببحث حواري ومطابقة دلالية واكتشاف بمساعدة الصورة ومقارنات ذكية وتوصيات مخصصة.",
          ),
          bullets: [
            L("Conversational product discovery", "اكتشاف منتج حواري"),
            L("Semantic and visual search", "بحث دلالي وبصري"),
            L("AI product comparison and recommendations", "مقارنة منتجات وتوصيات بالذكاء الاصطناعي"),
          ],
        },
        {
          kicker: L("Order Lifecycle", "دورة حياة الطلب"),
          title: L(
            "Coordinate checkout, fulfillment, tracking, returns, and refunds",
            "نسّق الدفع والتنفيذ والتتبع والإرجاع والاسترداد",
          ),
          body: L(
            "The commerce workflow connects customer orders with vendor fulfillment, marketplace oversight, payment status, shipment tracking, and post-purchase service.",
            "يربط مسار التجارة طلبات العميل بتنفيذ البائع وإشراف السوق وحالة الدفع وتتبع الشحن وخدمة ما بعد الشراء.",
          ),
          bullets: [
            L("Order lifecycle and fulfillment status", "دورة الطلب وحالة التنفيذ"),
            L("Shipment tracking and customer notifications", "تتبع الشحن وإشعارات العميل"),
            L("Returns, refunds, and dispute handling", "الإرجاع والاسترداد ومعالجة النزاعات"),
          ],
        },
      ],
    },
    {
      kicker: L("AI as a Business Capability", "الذكاء الاصطناعي كقدرة أعمال"),
      title: L(
        "AI is embedded into high-value commerce workflows—not added as a standalone chatbot.",
        "الذكاء الاصطناعي مضمّن في مسارات التجارة عالية القيمة — لا كروبوت محادثة منفصل.",
      ),
      intro: L(
        "The intelligence layer improves discovery, merchandising, comparison, personalization, and seller decision support while remaining grounded in marketplace data.",
        "تحسّن طبقة الذكاء الاكتشاف والتسويق والمقارنة والتخصيص ودعم قرار البائع مع البقاء مرتكزة على بيانات السوق.",
      ),
      steps: [
        {
          title: L("Customer Intent", "قصد العميل"),
          body: L("Language, image, behavior", "لغة وصورة وسلوك"),
        },
        {
          title: L("Catalog Intelligence", "ذكاء الكتالوج"),
          body: L("Products, specs, reviews", "منتجات ومواصفات ومراجعات"),
        },
        {
          title: L("Semantic Matching", "مطابقة دلالية"),
          body: L("Meaning beyond keywords", "معنى يتجاوز الكلمات المفتاحية"),
        },
        {
          title: L("Personalized Guidance", "إرشاد مخصص"),
          body: L("Compare & recommend", "قارن ووصِّ"),
        },
        {
          title: L("Seller Intelligence", "ذكاء البائع"),
          body: L("Content & sales analysis", "تحليل المحتوى والمبيعات"),
        },
      ],
      notes: [
        {
          title: L("Conversational product discovery", "اكتشاف منتج حواري"),
          body: L(
            "“I need wireless headphones for commuting under $200.” Intent-aware recommendations stay grounded in specifications, pricing, review signals, and the stated use case — with a clear best match, an alternative, and the reason both appeared.",
            "«أحتاج سماعات لاسلكية للتنقل بأقل من 200 دولار.» تبقى التوصيات الواعية بالقصد مرتكزة على المواصفات والسعر وإشارات المراجعات وحالة الاستخدام — مع أفضل مطابقة وبديل وسبب ظهور كليهما.",
          ),
        },
      ],
    },
    {
      kicker: L("Architecture & Engineering", "البنية والهندسة"),
      title: L(
        "Engineered for catalog scale, transactional reliability, intelligent search, and marketplace operations.",
        "مهندسة لمقياس الكتالوج وموثوقية المعاملات والبحث الذكي وتشغيل السوق.",
      ),
      intro: L(
        "The platform demonstrates how customer experience, seller tooling, AI services, payments, search, and operational workflows can be designed as one production-oriented commerce architecture.",
        "تُظهر المنصة كيف يمكن تصميم تجربة العميل وأدوات البائع وخدمات الذكاء الاصطناعي والمدفوعات والبحث ومسارات التشغيل كبنية تجارة واحدة موجّهة للإنتاج.",
      ),
      layers: [
        L(
          "Responsive Customer / Seller / Admin Web Experiences",
          "تجارب ويب متجاوبة للعميل والبائع والإدارة",
        ),
        L("API-Driven Application Backend", "خلفية تطبيق موجّهة بالواجهات"),
        L("Commerce Services", "خدمات التجارة"),
        L("AI & Search Services", "خدمات الذكاء الاصطناعي والبحث"),
        L("Authentication & RBAC", "المصادقة وصلاحيات الأدوار"),
        L("PostgreSQL / Redis", "PostgreSQL / Redis"),
        L("Search / Vector Index", "فهرس بحث / متجهات"),
        L("Payments / Storage / CDN", "مدفوعات / تخزين / شبكة توصيل"),
        L("Event-Driven Order Workflows", "مسارات طلب قائمة على الأحداث"),
        L("Real-Time Updates", "تحديثات فورية"),
        L("Observability", "قابلية الرصد"),
      ],
    },
    {
      kicker: L("AI & Business Impact", "أثر الذكاء الاصطناعي والأعمال"),
      title: L(
        "Value across the entire marketplace ecosystem.",
        "قيمة عبر منظومة السوق بأكملها.",
      ),
      intro: L(
        "The case study communicates the operational outcomes the platform is designed to enable rather than inventing performance statistics.",
        "تنقل دراسة الحالة النتائج التشغيلية التي صُممت المنصة لتمكينها بدل اختراع أرقام أداء.",
      ),
      cards: [
        {
          title: L("Better Customer Discovery", "اكتشاف أفضل للعميل"),
          body: L(
            "Help shoppers find relevant products faster through semantic search, visual discovery, intelligent comparison, and personalized recommendations.",
            "ساعد المتسوقين على إيجاد منتجات ذات صلة أسرع عبر البحث الدلالي والاكتشاف البصري والمقارنة الذكية والتوصيات المخصصة.",
          ),
        },
        {
          title: L("Lower Seller Effort", "جهد أقل على البائع"),
          body: L(
            "Reduce merchandising workload with AI-assisted product content while giving merchants easier access to actionable sales analysis.",
            "خفّض عبء التسويق بمحتوى منتج بمساعدة الذكاء الاصطناعي مع منح التجار وصولاً أسهل إلى تحليل مبيعات قابل للتنفيذ.",
          ),
        },
        {
          title: L("Stronger Marketplace Control", "سيطرة أقوى على السوق"),
          body: L(
            "Centralize vendor governance, product moderation, payments, commissions, refunds, disputes, and operational oversight.",
            "مركز حوكمة البائعين وإشراف المنتجات والمدفوعات والعمولات والاسترداد والنزاعات والرقابة التشغيلية.",
          ),
        },
        {
          title: L("Scalable Commerce Operations", "تشغيل تجارة قابل للتوسع"),
          body: L(
            "Support growing catalogs, more vendors, and higher transaction volume with API-driven, event-based, observable platform services.",
            "ادعم كتالوجات نامية وبائعين أكثر وحجماً أعلى من المعاملات بخدمات منصة موجّهة بالواجهات وقائمة على الأحداث وقابلة للرصد.",
          ),
        },
      ],
    },
  ],
};
