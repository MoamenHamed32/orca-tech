type ArticleBlock =
  | { type: "p"; en: string; ar: string }
  | { type: "h2"; en: string; ar: string };

const p = (en: string, ar: string): ArticleBlock => ({ type: "p", en, ar });
const h2 = (en: string, ar: string): ArticleBlock => ({ type: "h2", en, ar });

export const articleBodies: Record<string, ArticleBlock[]> = {
  "shipping-headless-commerce": [
    p(
      "Headless commerce is often sold as a clean cut: peel the storefront off the monolith, stand up an API, and watch conversion rise. In practice the catalog, promotions, inventory, and checkout are one nervous system. Cut the wrong nerve and the customer still sees a price that finance cannot honour.",
      "تُباع التجارة المنفصلة غالباً كقطع نظيف: افصل الواجهة عن النظام الأحادي، أقم واجهة برمجية، وراقب ارتفاع التحويل. في الواقع الكتالوج والعروض والمخزون والدفع جهاز عصبي واحد. اقطع العصب الخطأ وما زال العميل يرى سعراً لا تستطيع المالية الوفاء به.",
    ),
    p(
      "At Orca-Tech we treat a headless move as a series of seams, not a rewrite. The first seam is always the money path. Until cart, tax, and payment contracts are stable, a prettier marketing site is just a faster way to fail at the last step.",
      "في أوركا-تك نعالج الانتقال إلى بنية منفصلة كسلسلة وصلات لا كإعادة كتابة. الوصلة الأولى دائماً مسار المال. إلى أن تستقر عقود السلة والضريبة والدفع، يبقى موقع تسويق أجمل مجرد طريقة أسرع للفشل في الخطوة الأخيرة.",
    ),
    h2("Start with the money path", "ابدأ بمسار المال"),
    p(
      "We isolate cart and payment behind explicit APIs: add line, apply promotion, calculate tax, capture. Those four calls become the contract both the old theme and the new storefront must honour. If they stay stable, content and merchandising can move independently.",
      "نعزل السلة والدفع خلف واجهات صريحة: أضف بنداً، طبّق عرضاً، احسب الضريبة، التقط. تصبح هذه الاستدعاءات الأربعة العقد الذي يجب أن يحترمه القالب القديم والواجهة الجديدة. إذا بقيت مستقرة يمكن أن يتحرك المحتوى والتسويق مستقلاً.",
    ),
    p(
      "Most failed programs invert that order. They rebuild the homepage in a new framework, then discover that gift cards, split shipments, and regional VAT were encoded as theme liquid. The demo looked modern. The checkout leaked money.",
      "معظم البرامج الفاشلة تعكس هذا الترتيب. يعيدون بناء الصفحة الرئيسية بإطار جديد ثم يكتشفون أن بطاقات الهدايا والشحن المجزأ وضريبة القيمة المضافة الإقليمية كانت مضمّنة في القالب. بدا العرض حديثاً. وتسرّب الدفع مالاً.",
    ),
    h2("What we keep on the monolith — for a while", "ما نبقيه على النظام الأحادي — لفترة"),
    p(
      "Admin, purchasing, and the warehouse integration can stay put for a quarter. Headless is a storefront strategy, not an ERP replacement. We draw a map of reads versus writes and only move the reads the customer actually sees.",
      "يمكن أن يبقى الإدارة والمشتريات وتكامل المستودع كما هي لربع سنة. التجارة المنفصلة استراتيجية واجهة لا استبدال لتخطيط موارد المؤسسة. نرسم خريطة للقراءات مقابل الكتابات وننقل فقط القراءات التي يراها العميل.",
    ),
    p(
      "When the money path is green in production for two peak weekends, we move category pages, then search, then account. Each step has a rollback that is a DNS change, not a prayer.",
      "عندما يصبح مسار المال أخضر في الإنتاج عبر عطلة نهاية أسبوع ذروة، ننقل صفحات التصنيف ثم البحث ثم الحساب. لكل خطوة تراجع هو تغيير DNS لا دعاء.",
    ),
  ],
  "eval-harness-for-llm-features": [
    p(
      "LLM features drift. A prompt tweak that looks sharper in a demo can quietly fail the ugly tickets your customers already send. We do not ship a chatbot on vibes. We put a small golden set in continuous integration before the first public release.",
      "ميزات نماذج اللغة تنحرف. تعديل توجيه يبدو أحدّ في العرض قد يفشل بهدوء التذاكر الصعبة التي يرسلها عملاؤك أصلاً. لا نطلق روبوت محادثة على الإحساس. نضع مجموعة ذهبية صغيرة في التكامل المستمر قبل أول إطلاق عام.",
    ),
    p(
      "The harness is not a research lab. It is the same idea as unit tests: freeze a contract, fail the build when the contract breaks, and make it cheap to add the next edge case after an incident.",
      "الإطار ليس مختبر بحث. إنه الفكرة نفسها لاختبارات الوحدة: جمّد عقداً، أفشل البناء عندما ينكسر، واجعل إضافة الحالة الحدية التالية رخيصة بعد حادث.",
    ),
    h2("What we measure", "ما الذي نقيسه"),
    p(
      "Task success, refusal quality, latency, and cost per resolved ticket. Fluency scores that reward long, confident paragraphs do not make the dashboard. A polite wrong refund is still a wrong refund.",
      "نجاح المهمة وجودة الرفض والكمون والتكلفة لكل تذكرة محلولة. درجات الطلاقة التي تكافئ فقرات طويلة واثقة لا تدخل اللوحة. استرداد مهذب خاطئ ما زال استرداداً خاطئاً.",
    ),
    p(
      "We sample from production, not from imagination. Forty tickets that actually happened beat four thousand synthetic chats. Each fixture stores the input, the policy, and the acceptable outputs — including the right to refuse.",
      "نأخذ العينات من الإنتاج لا من الخيال. أربعون تذكرة حدثت فعلاً تتفوق على أربعة آلاف دردشة مصطنعة. يخزّن كل تجهيز المدخل والسياسة والمخرجات المقبولة — بما فيها حق الرفض.",
    ),
    h2("How it sits in the pipeline", "كيف يجلس في الخط"),
    p(
      "Prompt or tool changes open a pull request like any other. CI runs the golden set against the candidate model and the current production prompt. If task success drops more than the agreed threshold, the pull request cannot merge.",
      "تغييرات التوجيه أو الأدوات تفتح طلب دمج كأي تغيير آخر. يشغّل التكامل المستمر المجموعة الذهبية ضد النموذج المرشح وتوجيه الإنتاج الحالي. إذا انخفض نجاح المهمة فوق العتبة المتفق عليها لا يُدمج الطلب.",
    ),
    p(
      "That sounds slow until the first silent regression. Then it is the cheapest meeting you never had to book.",
      "يبدو ذلك بطيئاً حتى أول انحدار صامت. بعدها يصبح أرخص اجتماع لم تحتاج إلى حجزه.",
    ),
  ],
  "design-systems-that-engineers-use": [
    p(
      "A design system is a product. If it is not versioned with the codebase, it is a mood board. We ship tokens first, then components that encode the hard decisions — not a Figma file that argues with production every sprint.",
      "نظام التصميم منتج. إن لم يُدار بإصدارات مع الشيفرة فهو لوحة مزاج. نشحن الرموز أولاً ثم المكوّنات التي تثبّت القرارات الصعبة — لا ملف فيجما يتجادل مع الإنتاج في كل سبرنت.",
    ),
    p(
      "Engineers will not open three libraries to guess a radius. They will hard-code a value, ship, and the brand will fragment. The system has to be the path of least resistance.",
      "لن يفتح المهندسون ثلاث مكتبات لتخمين نصف قطر. سيكتبون قيمة ثابتة ويشحنون ويتشظى الاسم التجاري. يجب أن يكون النظام طريق المقاومة الأقل.",
    ),
    h2("Delete the unused file", "احذف الملف غير المستخدم"),
    p(
      "One source of truth beats three kits that disagree. We archive the extra Figma libraries, name layers, and publish a JSON token file the app can import on day one.",
      "مصدر حقيقة واحد يتفوق على ثلاثة أطقم تختلف. نؤرشف مكتبات فيجما الزائدة، نسمّي الطبقات، وننشر ملف رموز JSON يمكن للتطبيق استيراده في اليوم الأول.",
    ),
    p(
      "Components come second. A button that knows disabled, loading, and danger is worth more than forty decorative variants nobody can find.",
      "المكوّنات تأتي ثانياً. زر يعرف التعطيل والتحميل والخطر أغلى من أربعين متغيراً زخرفياً لا يجده أحد.",
    ),
    h2("Version it like software", "أدر إصداراته كبرمجيات"),
    p(
      "Breaking a token is a major version. We changelog spacing the same way we changelog APIs. Design review includes the pull request, not a hallway conversation after merge.",
      "كسر رمز إصدار رئيسي. نسجّل تغيّر المسافات كما نسجّل تغيّر الواجهات. تشمل مراجعة التصميم طلب الدمج لا حديث ممر بعد الدمج.",
    ),
    p(
      "When the system is boring, teams move faster. That boredom is the point.",
      "عندما يصبح النظام مملاً تتحرك الفرق أسرع. هذا الملل هو الهدف.",
    ),
  ],
  "fintech-onboarding-rebuild": [
    p(
      "Onboarding was a twelve-step form that encoded every legal fear into a single scroll. Drop-off lived in step four, where we asked for documents nobody had in their pocket. Compliance insisted every field was mandatory. Conversion said otherwise.",
      "كان التسجيل نموذجاً من اثنتي عشرة خطوة يضم كل مخاوف قانونية في تمرير واحد. عاش التسرب في الخطوة الرابعة حيث طلبنا وثائق لا يحملها أحد في جيبه. أصرّ الامتثال أن كل حقل إلزامي. وقال التحويل غير ذلك.",
    ),
    p(
      "We mapped required evidence first: what the regulator actually needs, in which order, and what can wait until after first funding. Then we designed a three-act flow that collected the same proof with less theatre.",
      "رسمنا الأدلة المطلوبة أولاً: ما يحتاجه المنظم فعلاً وبأي ترتيب وما يمكن أن ينتظر حتى بعد أول تمويل. ثم صممنا تدفقاً من ثلاثة فصول يجمع الإثبات نفسه بمسرح أقل.",
    ),
    h2("The three acts", "الفصول الثلاثة"),
    p(
      "Act one is identity you can finish on a phone in four minutes. Act two is the documents that unlock higher limits, requested in context, with examples of a good photo. Act three is ongoing KYC, not a wall on day zero.",
      "الفصل الأول هوية تُنجز على الهاتف في أربع دقائق. الثاني وثائق تفتح حدوداً أعلى تُطلب في السياق مع أمثلة لصورة جيدة. الثالث اعرف عميلك المستمر لا جدار في اليوم صفر.",
    ),
    p(
      "Each act has a save state. Customers who drop off get a precise resume link, not a restart. Support sees the same state the customer sees.",
      "لكل فصل حالة حفظ. من يتسرب يحصل على رابط استئناف دقيق لا إعادة بدء. ويرى الدعم الحالة نفسها التي يراها العميل.",
    ),
    h2("The result", "النتيجة"),
    p(
      "Completion rose 31% in six weeks. Compliance sign-off stayed on the same evidence pack. Legal did not lose a field; they lost the order that punished people for being human.",
      "ارتفع الإكمال 31٪ خلال ستة أسابيع. وبقي اعتماد الامتثال على حزمة الأدلة نفسها. لم تفقد القانونية حقلاً؛ فقدت الترتيب الذي يعاقب الناس لأنهم بشر.",
    ),
    p(
      "We still review the funnel every month. Onboarding is a product, not a project you close.",
      "ما زلنا نراجع القمع كل شهر. التسجيل منتج لا مشروعاً تُغلقه.",
    ),
  ],
  "platform-observability-starter": [
    p(
      "We do not wait for scale to add traces. A thin OpenTelemetry layer on day two saves weeks of guesswork when the first real incident arrives at 2am. Guessing is not an operations strategy.",
      "لا ننتظر التوسع لإضافة التتبع. طبقة OpenTelemetry رقيقة في اليوم الثاني توفر أسابيع من التخمين عندما يصل أول حادث حقيقي في الثانية صباحاً. التخمين ليس استراتيجية تشغيل.",
    ),
    p(
      "The starter is deliberately small: traces around login and checkout, structured logs with a request id, and one dashboard that a human can read without a training course.",
      "الحزمة صغيرة عن عمد: تتبع حول الدخول والدفع، وسجلات منظّمة بمعرّف طلب، ولوحة واحدة يقرأها إنسان بلا دورة تدريب.",
    ),
    h2("One question per dashboard", "سؤال واحد لكل لوحة"),
    p(
      "If the board cannot answer whether a customer is stuck, it is decoration. We start with traces on the money path and the session path. Everything else is optional until those two are boringly green.",
      "إن لم تستطع اللوحة الإجابة إن كان العميل معلقاً فهي زينة. نبدأ بالتتبع على مسار المال ومسار الجلسة. كل شيء آخر اختياري حتى يصبح هذان المساران أخضرين بملل.",
    ),
    p(
      "Alerts page a human only when a user-visible path is failing. CPU graphs stay in a folder nobody is paged for. Noise trains people to ignore the one alert that matters.",
      "تنبيهات تستدعي إنساناً فقط عندما يفشل مسار يراه المستخدم. تبقى مخططات المعالج في مجلد لا يُستدعى لأجله أحد. الضجيج يدرّب الناس على تجاهل التنبيه الوحيد المهم.",
    ),
    h2("Install it like a dependency", "ثبّتها كتابعية"),
    p(
      "The starter is a package, not a wiki page. New services import it. If they cannot, they are not ready for production traffic.",
      "الحزمة حزمة برمجية لا صفحة توثيق. الخدمات الجديدة تستوردها. إن لم تستطع فهي غير جاهزة لحركة الإنتاج.",
    ),
    p(
      "Day two is cheap. Day two hundred, without traces, is an archaeology project you invoice in sleeplessness.",
      "اليوم الثاني رخيص. اليوم المئتان بلا تتبع مشروع تنقيب تُفوّتره أرقاً.",
    ),
  ],
  "ai-in-operations": [
    p(
      "Most AI transformation briefs are undocumented operations. Someone wants an agent. Nobody can write the standard operating procedure the agent is supposed to follow. We write the SOP first, then decide which steps a model should own.",
      "معظم موجزات تحول الذكاء الاصطناعي عمليات غير موثقة. يريد أحدهم وكيلاً. لا أحد يكتب إجراء التشغيل القياسي الذي يفترض أن يتبعه الوكيل. نكتب الإجراء أولاً ثم نقرر أي خطوات يملكها النموذج.",
    ),
    p(
      "Agents fail at the handoff, not at the paragraph. If escalation rules live in a veteran's head, the model will improvise — and improvisation in operations is how refunds go missing.",
      "تفشل الوكلاء عند التسليم لا عند الفقرة. إذا عاشت قواعد التصعيد في رأس مخضرم فسيرتجل النموذج — والارتجال في التشغيل هو كيف تضيع الاستردادات.",
    ),
    h2("Fix the process, then automate the edges", "أصلح العملية ثم أتمت الأطراف"),
    p(
      "Humans keep judgment: exceptions, angry customers, legal grey. Models draft, classify, and route. The product is the handoff, with a transcript a supervisor can audit.",
      "يبقي البشر الحكم: الاستثناءات والعملاء الغاضبون والرمادي القانوني. النماذج تصيغ وتصنف وتوجّه. المنتج هو التسليم مع نص يمكن للمشرف تدقيقه.",
    ),
    p(
      "We measure deflection only when the customer is actually done. A closed ticket that reopens in an hour is not automation. It is delay with extra steps.",
      "نقيس التحويل فقط عندما ينتهي العميل فعلاً. تذكرة أُغلقت ثم فُتحت بعد ساعة ليست أتمتة. إنها تأخير بخطوات إضافية.",
    ),
    h2("Start with one workflow", "ابدأ بمسار واحد"),
    p(
      "Password resets, invoice copies, delivery windows. Pick a flow with volume and a clear happy path. Publish the SOP in the same repo as the prompts. Then expand.",
      "إعادة تعيين كلمة المرور ونسخ الفواتير ونوافذ التسليم. اختر تدفقاً بحجم ومسار سعيد واضح. انشر الإجراء في المستودع نفسه مع التوجيهات. ثم وسّع.",
    ),
    p(
      "If the business cannot describe the work on a whiteboard, it is not ready for an agent. That sentence saves more budget than any model upgrade.",
      "إن لم يستطع العمل وصف المهمة على سبورة فهو غير جاهز لوكيل. هذه الجملة توفّر ميزانية أكثر من أي ترقية نموذج.",
    ),
  ],
  "nextjs-app-router-seams": [
    p(
      "The App Router is not a folder rename. It is a contract about where data is allowed to live, what can be cached, and which components may touch the network. We draw that line before we move a single page.",
      "App Router ليس إعادة تسمية مجلد. إنه عقد حول مكان البيانات وما يمكن تخزينه وأي مكوّنات يجوز أن تلمس الشبكة. نرسم ذلك الخط قبل نقل أي صفحة.",
    ),
    p(
      "Teams that skip the contract end up with client components that fetch in useEffect, cache that nobody can explain, and a production bug that only appears after a hard refresh.",
      "الفرق التي تتخطى العقد تنتهي بمكوّنات عميل تجلب في useEffect وتخزين لا يشرحه أحد وعطل إنتاج لا يظهر إلا بعد تحديث قاسٍ.",
    ),
    h2("Cache on purpose", "خبّئ عن قصد"),
    p(
      "Accidental caching is how catalogs go stale. We name the tags, the revalidate windows, and the mutations that bust them. If a merchandiser publishes a price, we know which tag to invalidate.",
      "التخزين العرضي يجعل الكتالوجات قديمة. نسمّي الوسوم ونوافذ إعادة التحقق والطفرات التي تكسرها. إذا نشر تاجر سعراً نعرف أي وسم نبطله.",
    ),
    p(
      "Server components read. Client components interact. The boundary is a file, not a feeling. We review that boundary in every pull request that crosses it.",
      "مكوّنات الخادم تقرأ. مكوّنات العميل تتفاعل. الحد ملف لا شعور. نراجع ذلك الحد في كل طلب دمج يعبره.",
    ),
    h2("Move page by page", "انقل صفحة بصفحة"),
    p(
      "We do not flip the whole site. We move a route, watch the metrics, then move the next. Parallel routes and intercepting routes wait until the basics are boring.",
      "لا نقلب الموقع كله. ننقل مساراً ونراقب المقاييس ثم ننقل التالي. المسارات المتوازية والمعترضة تنتظر حتى تصبح الأساسيات مملة.",
    ),
    p(
      "Honest Next.js apps are slow to start and fast to change later. That trade is the point of the App Router.",
      "تطبيقات Next.js الصادقة بطيئة في البدء وسريعة في التغيير لاحقاً. هذه المقايضة هي نقطة App Router.",
    ),
  ],
  "github-actions-for-preview-apps": [
    p(
      "A pull request without a URL is a PDF. Design, product, and QA cannot argue about a screenshot they cannot click. We attach a preview to every front-end change so the review comment replaces a meeting.",
      "طلب الدمج بلا رابط مستند. لا يستطيع التصميم والمنتج والجودة الجدال حول لقطة لا يمكن النقر عليها. نرفق معاينة لكل تغيير واجهة حتى يغني تعليق المراجعة عن اجتماع.",
    ),
    p(
      "GitHub Actions builds the branch, deploys an ephemeral URL, and posts it back on the pull request. When the branch dies, the environment dies. That is a feature, not a missing staging server.",
      "يبني GitHub Actions الفرع وينشر عنواناً مؤقتاً ويعيده على الطلب. عندما يموت الفرع تموت البيئة. هذه ميزة لا خادم تجريبي ناقص.",
    ),
    h2("Kill the environment zoo", "أنه حديقة البيئات"),
    p(
      "Staging that nobody trusts is worse than none. It drifts, it holds secrets from 2019, and it is always 'almost like production'. Previews expire. They cannot accumulate folklore.",
      "بيئة تجريبية لا يثق بها أحد أسوأ من لا شيء. تنحرف وتحمل أسراراً من 2019 ودائماً 'تقريباً كالإنتاج'. المعاينات تنتهي. لا يمكن أن تتراكم عليها الحكايات.",
    ),
    p(
      "We still keep one long-lived environment for migrations and partner integrations. Everything a human reviews for UI lives on a preview.",
      "ما زلنا نحتفظ ببيئة طويلة للترحيل وتكاملات الشركاء. كل ما يراجعه إنسان للواجهة يعيش على معاينة.",
    ),
    h2("Make the link unavoidable", "اجعل الرابط لا مفر منه"),
    p(
      "The comment is short: URL, who deployed it, when it expires. If the workflow fails, the pull request is red. There is no optional preview for 'small CSS'. Small CSS is how production themes die.",
      "التعليق قصير: الرابط ومن نشر ومتى ينتهي. إذا فشل المسار فالطلب أحمر. لا معاينة اختيارية لـ 'CSS صغير'. الـ CSS الصغير هو كيف تموت قوالب الإنتاج.",
    ),
    p(
      "Stakeholders click more when the link is in the same thread as the screenshot they used to argue about.",
      "يضغط أصحاب المصلحة أكثر عندما يكون الرابط في الخيط نفسه مع اللقطة التي كانوا يتجادلون حولها.",
    ),
  ],
  "react-native-bridge-discipline": [
    p(
      "Most mobile pain is not JavaScript. It is an undocumented camera module and a bridge that grew by accident. We inventory native surface area before we add a screen, then we keep the JS side boring on purpose.",
      "معظم ألم الجوال ليس جافاسكربت. إنه وحدة كاميرا غير موثقة وجسر نما بالصدفة. نحصر السطح الأصلي قبل إضافة شاشة ثم نبقي جانب جافاسكربت مملاً عن قصد.",
    ),
    p(
      "A leaky bridge shows up as a freeze you cannot reproduce on the web team's Mac. Native code needs an owner who can compile it on Monday, not a ticket that says 'ask iOS'.",
      "الجسر السارب يظهر كتجمّد لا يمكن إعادة إنتاجه على حاسوب فريق الويب. تحتاج الشيفرة الأصلية مالكاً يستطيع بناءها يوم الاثنين لا تذكرة تقول 'اسأل iOS'.",
    ),
    h2("Keep JS boring", "أبقِ جافاسكربت مملاً"),
    p(
      "Business rules stay in TypeScript. Native modules stay thin: camera, biometrics, push, background location. Each module has a version, a changelog, and a fixture app that proves it still builds.",
      "قواعد العمل تبقى في TypeScript. الوحدات الأصلية رقيقة: كاميرا وحيوية ودفع وموقع في الخلفية. لكل وحدة إصدار وسجل تغيّر وتطبيق تجهيز يثبت أنها ما زالت تُبنى.",
    ),
    p(
      "We do not add a native dependency because a blog post was exciting. We add it because the product cannot ship without that capability on both platforms.",
      "لا نضيف تبعية أصلية لأن تدوينة كانت مثيرة. نضيفها لأن المنتج لا يمكن أن يُشحن بلا تلك القدرة على المنصتين.",
    ),
    h2("Upgrade on a schedule", "رقِّ على جدول"),
    p(
      "React Native upgrades are cheaper when they are monthly, not annual. We budget a slice of every sprint for the upgrade treadmill. Skipping two versions is how you buy a rewrite.",
      "ترقيات React Native أرخص شهرياً لا سنوياً. نخصص جزءاً من كل سبرنت لسير الترقية. تخطي إصدارين هو كيف تشتري إعادة كتابة.",
    ),
    p(
      "The bridge is a product boundary. Treat it like one, and the rest of the app can move at JavaScript speed.",
      "الجسر حد منتج. عامله كذلك ويستطيع بقية التطبيق التحرك بسرعة جافاسكربت.",
    ),
  ],
  "kubernetes-without-the-theatre": [
    p(
      "We do not start with a service mesh. We start with three environments, health probes, and a rollback a human can trigger at 2am. YAML is not a strategy. Sleep is.",
      "لا نبدأ بشبكة خدمات. نبدأ بثلاث بيئات وفحوصات صحة وتراجع يستطيع إنسان تشغيله في الثانية صباحاً. YAML ليست استراتيجية. النوم هو.",
    ),
    p(
      "The smallest honest cluster still gives us rolling deploys, secrets that are not in git, and a dashboard that answers 'is checkout up'. Everything else waits.",
      "أصغر عنقود صادق ما زال يمنحنا نشراً متدرجاً وأسراراً ليست في git ولوحة تجيب 'هل الدفع يعمل'. كل شيء آخر ينتظر.",
    ),
    h2("YAML is not strategy", "YAML ليست استراتيجية"),
    p(
      "Manifests encode decisions already made: replica count, resource requests, disruption budgets. If the team cannot explain those numbers on a whiteboard, the cluster is a costume.",
      "البيانات الوصفية تثبّت قرارات اتُّخذت: عدد النسخ وطلبات الموارد وميزانيات التعطيل. إن لم يستطع الفريق شرح تلك الأرقام على سبورة فالعنقود زيّ.",
    ),
    p(
      "We keep a golden path: one ingress, one cert flow, one way to read logs. Optional add-ons are documented as optional, not installed 'just in case'.",
      "نبقي مساراً ذهبياً: دخول واحد وتدفق شهادات واحد وطريقة واحدة لقراءة السجلات. الإضافات الاختيارية موثّقة كاختيارية لا تُثبَّت 'احتياطاً'.",
    ),
    h2("Rollback is a product feature", "التراجع ميزة منتج"),
    p(
      "If rollback needs the person who wrote the helm chart, you do not have rollback. You have folklore. We practise the revert on a weekday, not during an incident.",
      "إذا احتاج التراجع الشخص الذي كتب مخطط هيلم فليس لديك تراجع. لديك حكاية. نتمرن على الرجوع في يوم عمل لا أثناء حادث.",
    ),
    p(
      "Kubernetes earns its keep when it is boring. Theatre belongs on a conference stage, not in your on-call rotation.",
      "يستحق Kubernetes مكانه عندما يكون مملاً. المسرح مكانه منصة مؤتمر لا دورة الاستدعاء.",
    ),
  ],
  "rag-that-survives-production": [
    p(
      "A vector store is not a product. Customers ask for the clause, the date, and the source PDF. Demos hide retrieval bugs behind a fluent paragraph. Production users screenshot the wrong citation and send it to legal.",
      "مخزن المتجهات ليس منتجاً. يطلب العملاء البند والتاريخ وملف المصدر. تخفي العروض أعطال الاسترجاع خلف فقرة طلقة. مستخدمو الإنتاج يلتقطون الاستشهاد الخطأ ويرسلونه إلى القانونية.",
    ),
    p(
      "We design retrieval around citations first. If the model cannot point at a passage, it does not get to speak. That single rule prevents most of the expensive hallucinations.",
      "نصمم الاسترجاع حول الاستشهاد أولاً. إن لم يستطع النموذج الإشارة إلى مقطع فلا يُسمح له بالكلام. هذه القاعدة وحدها تمنع معظم الهلوسة المكلفة.",
    ),
    h2("Chunk like a librarian", "جزّئ كأمين مكتبة"),
    p(
      "Naive 512-token windows smash tables and headings. We split on structure — titles, sections, captions — then embed. Recall goes up. Hallucinations go down. Tables stay tables.",
      "نوافذ 512 رمزاً الساذجة تحطم الجداول والعناوين. نقسم حسب البنية — عناوين وأقسام وتعليقات — ثم نضمّن. يرتفع الاسترجاع وتنخفض الهلوسة. تبقى الجداول جداول.",
    ),
    p(
      "We also keep the original file. A citation that cannot open the PDF is theatre. The UI shows page and snippet, not a vibe.",
      "نبقي الملف الأصلي أيضاً. استشهاد لا يفتح PDF مسرح. تعرض الواجهة الصفحة والمقتطف لا إحساساً.",
    ),
    h2("Evaluate on real documents", "قيّم على وثائق حقيقية"),
    p(
      "We freeze a set of questions from actual users: policy exceptions, fee schedules, last year's addendum. CI fails when retrieval misses the right chunk or the answer drops the citation.",
      "نثبّت مجموعة أسئلة من مستخدمين حقيقيين: استثناءات السياسة وجداول الرسوم وملحق العام الماضي. يفشل التكامل المستمر عندما يخطئ الاسترجاع المقطع الصحيح أو يسقط الجواب الاستشهاد.",
    ),
    p(
      "RAG that survives production is boring infrastructure with a strict mouth. That is the product.",
      "التوليد المعزّز بالاسترجاع الذي يصمد في الإنتاج بنية تحتية مملة بفم صارم. هذا هو المنتج.",
    ),
  ],
  "prompt-evals-as-unit-tests": [
    p(
      "If a prompt can change without a test, it will. We store fixtures next to the feature and fail the build when the model drifts past a threshold. Yesterday's correct answer is allowed to become today's incident only if someone chose that risk in a review.",
      "إن أمكن تغيير التوجيه بلا اختبار فسيحدث. نخزّن التجهيزات بجانب الميزة ونفشل البناء عندما ينحرف النموذج عن العتبة. جواب الأمس الصحيح يُسمح أن يصبح حادث اليوم فقط إذا اختار أحد ذلك الخطر في مراجعة.",
    ),
    p(
      "This is not research excellence. It is the same hygiene we already demand for tax calculation. Language models are not exempt because they sound confident.",
      "هذا ليس تميز بحث. إنه النظافة نفسها التي نطلبها لحساب الضريبة. نماذج اللغة ليست معفاة لأنها تبدو واثقة.",
    ),
    h2("Small sets, sharp cases", "مجموعات صغيرة وحالات حادة"),
    p(
      "Forty ugly tickets beat four thousand generic chats. We sample from production: refunds, threats, mixed languages, incomplete orders. Each case has an acceptable band, including 'refuse and escalate'.",
      "أربعون تذكرة صعبة تتفوق على أربعة آلاف دردشة عامة. نأخذ من الإنتاج: استردادات وتهديدات ولغات مختلطة وطلبات ناقصة. لكل حالة نطاق مقبول بما فيه 'ارفض وصعّد'.",
    ),
    p(
      "When a new failure appears in production, it becomes a fixture before we 'just tweak the prompt'. Otherwise we are playing whack-a-mole with a thesaurus.",
      "عندما يظهر فشل جديد في الإنتاج يصبح تجهيزاً قبل أن 'نعدّل التوجيه فقط'. وإلا فنحن نلعب ضرب الخلد بمعجم مرادفات.",
    ),
    h2("Same pipeline as unit tests", "الخط نفسه لاختبارات الوحدة"),
    p(
      "The eval job is a step in CI, with a number on the pull request. Authors see the failing case. Reviewers see the delta. Nobody has to open a notebook to understand what changed.",
      "مهمة التقييم خطوة في التكامل المستمر برقم على طلب الدمج. يرى المؤلف الحالة الفاشلة. ويرى المراجع الفرق. لا أحد يحتاج فتح دفتر لفهم ما تغيّر.",
    ),
    p(
      "Treat prompts like code and they start behaving like code: reviewable, revertible, and slightly less magical.",
      "عامل التوجيهات كشيفرة فتبدأ بالتصرف كشيفرة: قابلة للمراجعة والرجوع وأقل سحراً بقليل.",
    ),
  ],
  "voice-agents-need-sops": [
    p(
      "A voice bot without a hang-up policy is a hostage situation. Customers cannot see a spinner. They hear silence, then they shout, then they hang up angry. We write the spoken SOP before we pick a model: greet, confirm, escalate, close.",
      "روبوت صوتي بلا سياسة إنهاء موقف رهائن. لا يرى العملاء مؤشراً. يسمعون صمتاً ثم يصرخون ثم يغلقون غاضبين. نكتب الإجراء المنطوق قبل اختيار النموذج: رحّب، أكّد، صعّد، أغلق.",
    ),
    p(
      "Latency is the product. Anything over about 800 milliseconds feels broken. We stream partials and never wait for a perfect sentence before we start talking back.",
      "الكمون هو المنتج. أي شيء فوق نحو 800 ملي ثانية يبدو معطوباً. نبثّ الجزئيات ولا ننتظر جملة كاملة قبل الرد.",
    ),
    h2("Budget the silence", "ضع ميزانية للصمت"),
    p(
      "The SOP names the maximum pause, the interruption policy, and the words we use when we did not hear the customer. 'Sorry, I missed that' is a designed line, not an improvisation.",
      "يسمّي الإجراء أقصى وقفة وسياسة المقاطعة والكلمات التي نستخدمها عندما لم نسمع العميل. 'آسف فاتني ذلك' سطر مصمَّم لا ارتجال.",
    ),
    p(
      "We log every turn with timestamps. When a call goes badly, we replay the timeline, not a vibe about the model being 'off today'.",
      "نسجّل كل دورة بطوابع زمنية. عندما تسوء مكالمة نعيد الخط الزمني لا إحساساً بأن النموذج 'ليس على ما يرام اليوم'.",
    ),
    h2("Escalate like a colleague", "صعّد كزميل"),
    p(
      "Warm transfer includes the transcript and the intent. The human should not ask for the account number again. If they do, the agent failed even if the model spoke fluently.",
      "التحويل الدافئ يشمل النص والقصد. لا ينبغي للإنسان أن يطلب رقم الحساب مرة أخرى. إن فعل فقد فشل الوكيل حتى لو تكلم النموذج بطلاقة.",
    ),
    p(
      "Voice is operations with a microphone. Write the procedure, then automate the edges.",
      "الصوت تشغيل بميكروفون. اكتب الإجراء ثم أتمت الأطراف.",
    ),
  ],
  "tokens-before-components": [
    p(
      "Buttons multiply. Tokens do not — if you name them by role instead of by hex. We publish a JSON file the codebase can import on day one, before anyone draws a hero section.",
      "الأزرار تتكاثر. الرموز لا تتكاثر إن سمّيتها بالدور لا بالقيمة. ننشر ملف JSON تستورده الشيفرة في اليوم الأول قبل أن يرسم أحد قسماً بطولياً.",
    ),
    p(
      "Dark mode is a weekend project only when color is paint. When color is role — accent, muted, danger, surface — switching theme is a map, not a scavenger hunt.",
      "الوضع الداكن مشروع عطلة فقط عندما يكون اللون طلاء. عندما يكون اللون دوراً — تمييز وخافت وخطر وسطح — يصبح تبديل السمة خريطة لا لعبة بحث.",
    ),
    h2("Role, not paint", "دور لا طلاء"),
    p(
      "If a designer needs a new hex, they need a new role — or they are decorating. We reject one-off colors in review the same way we reject one-off magic numbers in code.",
      "إن احتاج المصمم قيمة جديدة فهو يحتاج دوراً جديداً — أو أنه يزيّن. نرفض الألوان الفريدة في المراجعة كما نرفض الأرقام السحرية الفريدة في الشيفرة.",
    ),
    p(
      "Spacing and type follow the same rule. A scale of eight, a type ramp with names, and no 'make it 13px because it looked tight in Figma'.",
      "المسافة والنوع يتبعان القاعدة نفسها. مقياس من ثمانية وسلم نوع بأسماء ولا 'اجعلها 13 بكسل لأنها بدت ضيقة في فيجما'.",
    ),
    h2("Ship the file", "اشحن الملف"),
    p(
      "Tokens live in git. Design tools consume them, or they are downstream. The other way around is how production and Figma divorce.",
      "الرموز تعيش في git. أدوات التصميم تستهلكها أو تكون تابعة. الاتجاه الآخر هو كيف يطلق الإنتاج وفيجما بعضهما.",
    ),
    p(
      "Ship tokens before you ship a button, and the button will have somewhere honest to live.",
      "اشحن الرموز قبل الزر فيجد الزر مكاناً صادقاً يعيش فيه.",
    ),
  ],
  "motion-that-does-not-lie": [
    p(
      "Animation is a status message. If a card flies in after the data is already there, we taught the user to wait for theatre. We animate only state changes: enter, exit, loading, error, success.",
      "الحركة رسالة حالة. إن طارت بطاقة بعد وصول البيانات فقد علّمنا المستخدم انتظار المسرح. نحرّك تغيّر الحالة فقط: دخول وخروج وتحميل وخطأ ونجاح.",
    ),
    p(
      "Duration and easing are part of the system, not a per-screen jam session. One entrance, one exit, one spring for interactive objects. Designers pick from the list.",
      "المدة والتخفيف جزء من النظام لا جلسة ارتجال لكل شاشة. دخول واحد وخروج واحد ونابض واحد للعناصر التفاعلية. يختار المصممون من القائمة.",
    ),
    h2("Respect the OS", "احترم نظام التشغيل"),
    p(
      "prefers-reduced-motion is not optional. Instant opacity is a valid, premium feel. We ship that path on every marketing surface, not as a later accessibility ticket.",
      "تفضيل تقليل الحركة ليس اختيارياً. الشفافية الفورية إحساس فاخر وصالح. نشحن ذلك المسار على كل سطح تسويقي لا كتذكرة إتاحة لاحقة.",
    ),
    p(
      "If the meaning of the interface depends on motion, the interface is broken for someone. We never encode 'you may proceed' only as a slide.",
      "إذا اعتمد معنى الواجهة على الحركة فالواجهة مكسورة لشخص ما. لا نرمّز 'يجوز المتابعة' كشريحة فقط.",
    ),
    h2("Motion as documentation", "الحركة كتوثيق"),
    p(
      "A spinner that never resolves is a lie. We cap waits, show skeletons that match layout, and fail visibly. Honesty is faster than delight that stalls.",
      "مؤشر لا ينتهي كذبة. نضع حداً للانتظار ونظهر هياكل تطابق التخطيط ونفشل بوضوح. الصدق أسرع من بهجة تتوقف.",
    ),
    p(
      "When motion tells the truth about state, it earns the right to be beautiful. Not the other way around.",
      "عندما تصدق الحركة عن الحالة تستحق أن تكون جميلة. لا العكس.",
    ),
  ],
  "dark-ui-contrast-that-ships": [
    p(
      "Atmosphere is allowed. Invisible body copy is not. Dark marketing sites love muted grey on darker grey because it looks expensive in a screenshot. It fails in a brightly lit office and it fails WCAG.",
      "الجو مسموح. النص غير المرئي ليس كذلك. مواقع التسويق الداكنة تحب الرمادي الخافت على أغمق لأنه يبدو فاخراً في لقطة. يفشل في مكتب مضاء ويفشل معايير الإتاحة.",
    ),
    p(
      "We test muted-on-surface pairs and raise the floor before we ship glass. Glow is decoration. Contrast is the product.",
      "نختبر أزواج الخافت على السطح ونرفع الحد الأدنى قبل شحن الزجاج. التوهج زينة. التباين هو المنتج.",
    ),
    h2("Glow is not contrast", "التوهج ليس تبايناً"),
    p(
      "A blue bloom behind a button does not help a low-vision reader. We keep focus rings boring and bright, and we never remove outlines because they 'clashed with the brand'.",
      "توهج أزرق خلف زر لا يساعد ضعيف البصر. نبقي حلقات التركيز مملة ومشرقة ولا نزيل الحدود لأنها 'تعارضت مع العلامة'.",
    ),
    p(
      "Glass panels get a real fill opacity, not a rumour of a panel. If text sits on a photo, we add a scrim until the contrast checker is quiet.",
      "الألواح الزجاجية تحصل على عتامة حقيقية لا إشاعة لوح. إذا جلس نص على صورة نضيف تعتيماً حتى يصمت فاحص التباين.",
    ),
    h2("Check in the real lighting", "افحص في الإضاءة الحقيقية"),
    p(
      "We look at the site on a phone outdoors and on a washed-out laptop. Studio monitors lie. Customers do not live in our studio.",
      "ننظر إلى الموقع على هاتف في الخارج وعلى حاسوب باهت. شاشات الاستوديو تكذب. العملاء لا يعيشون في استوديونا.",
    ),
    p(
      "Ship contrast that passes, then add atmosphere on top. The other order is how you rebuild a homepage after launch.",
      "اشحن تبايناً ينجح ثم أضف الجو فوقه. الترتيب الآخر هو كيف تعيد بناء صفحة رئيسية بعد الإطلاق.",
    ),
  ],
  "figma-to-code-contracts": [
    p(
      "We do not estimate screenshots. We estimate named components with auto-layout and a token file. Anything else is a painting, and paintings slip every sprint.",
      "لا نقدّر لقطات. نقدّر مكوّنات مسمّاة بتخطيط تلقائي وملف رموز. أي شيء آخر لوحة واللوحات تنزلق في كل سبرنت.",
    ),
    p(
      "The inspect ritual is thirty minutes with design and engineering before the estimate. We write the exceptions in the ticket: this is a one-off, this maps to Button, this spacing is wrong in the file.",
      "طقس الفحص ثلاثون دقيقة مع التصميم والهندسة قبل التقدير. نكتب الاستثناءات في التذكرة: هذا فريد، هذا يقابل زراً، هذه المسافة خاطئة في الملف.",
    ),
    h2("Inspect together", "افحصوا معاً"),
    p(
      "A hallway conversation after merge is how padding wars start. Shared inspect kills a week of Slack. The file is the contract only after both sides have walked it.",
      "حديث الممر بعد الدمج هو كيف تبدأ حروب الحشوة. الفحص المشترك يلغي أسبوعاً من المحادثات. الملف عقد فقط بعد أن يمشيه الطرفان.",
    ),
    p(
      "Auto-layout is non-negotiable for anything that will flex. Absolute positioning in Figma becomes magic numbers in CSS. We send those frames back.",
      "التخطيط التلقائي غير قابل للتفاوض لأي شيء سيتمطط. التموضع المطلق في فيجما يصبح أرقاماً سحرية في CSS. نعيد تلك الإطارات.",
    ),
    h2("Name the layers", "سمّ الطبقات"),
    p(
      "Frame 1278 is not a component. PrimaryButton / large / disabled is. Naming is a gift to the person who implements at 11pm.",
      "Frame 1278 ليس مكوّناً. PrimaryButton / large / disabled هو. التسمية هدية لمن ينفّذ في الحادية عشرة ليلاً.",
    ),
    p(
      "Contracts that survive a sprint are boring, named, and inspected. That is the work.",
      "العقود التي تصمد أمام سبرنت مملة ومسمّاة ومفحوصة. هذا هو العمل.",
    ),
  ],
  "ledger-reconciliation-console": [
    p(
      "The operations team lived in twelve workbooks with broken VLOOKUPs and a shared drive nobody dared to reorganize. Month-end was archaeology. We modeled the journal once, then built a console that explained every mismatch.",
      "عاش فريق التشغيل في اثني عشر مصنفاً ببحث معطوب وقرص مشترك لا يجرؤ أحد على إعادة تنظيمه. نهاية الشهر كانت تنقيباً. نمذجنا القيود مرة ثم بنينا وحدة تفسّر كل اختلاف.",
    ),
    p(
      "Finance would not sit in a tool that hid the why. Every row links to the source event, the transformation, and the human who last touched it.",
      "لن يجلس المالية في أداة تخفي السبب. كل صف يرتبط بالحدث المصدر والتحويل والإنسان الذي لمسه أخيراً.",
    ),
    h2("Audit is a feature", "التدقيق ميزة"),
    p(
      "Every adjustment has an actor, a reason, and a before/after. Exports still exist for the auditor's laptop, but they are a view, not the system of record.",
      "لكل تعديل فاعل وسبب وقبل/بعد. ما زالت التصديرات لحاسوب المدقق لكنها عرض لا نظام السجل.",
    ),
    p(
      "Permissions follow the desk: ops can propose, finance can post, nobody can silently edit history. That rule ended more arguments than any chart.",
      "تتبع الصلاحيات المكتب: التشغيل يقترح والمالية ترحّل ولا أحد يعدّل التاريخ في صمت. أنهت هذه القاعدة جدالات أكثر من أي مخطط.",
    ),
    h2("What changed in the room", "ما تغيّر في الغرفة"),
    p(
      "Month-end still happens. It no longer requires a war room. The console is where finance sits because it tells the truth faster than a spreadsheet can lie.",
      "ما زالت نهاية الشهر تحدث. لم تعد تحتاج غرفة حرب. الوحدة هي حيث يجلس المالية لأنها تقول الحقيقة أسرع مما تستطيع الجداول الكذب.",
    ),
    p(
      "We kept their language: batch, post, reverse. New jargon would have killed adoption. The product had to feel like their job, just without the broken links.",
      "أبقينا لغتهم: دفعة وترحيل وعكس. المصطلحات الجديدة كانت ستقتل التبنّي. كان على المنتج أن يشعر كعملهم لكن بلا الروابط المعطوبة.",
    ),
  ],
  "clinic-booking-under-load": [
    p(
      "The old calendar allowed two families to hold the same slot. Confirmation was an SMS that sometimes arrived after the appointment. Vaccine week turned the clinic into a queue with a database behind it.",
      "كان التقويم القديم يسمح لعائلتين بحجز الفترة نفسها. كان التأكيد رسالة تصل أحياناً بعد الموعد. حوّل أسبوع التطعيم العيادة إلى طابور خلفه قاعدة بيانات.",
    ),
    p(
      "We introduced short-lived locks, a confirmation that actually meant confirmed, and reminders that left the building on time. Peak is the product. Idle Wednesday is not.",
      "أدخلنا أقفالاً قصيرة وتأكيداً يعني التأكيد فعلاً وتذكيرات تغادر المبنى في وقتها. الذروة هي المنتج. أربعاء الهدوء ليس كذلك.",
    ),
    h2("Peak is the product", "الذروة هي المنتج"),
    p(
      "We load-tested the Tuesday 8am rush with production-shaped data, not a handful of fake patients. Slot locks expire. Double-book attempts become a clear 'this time just went' instead of a silent overwrite.",
      "اختبرنا حمل ثلاثاء الثامنة ببيانات تشبه الإنتاج لا حفنة مرضى وهميين. أقفال الفترات تنتهي. محاولات الحجز المزدوج تصبح 'هذا الوقت ذهب للتو' واضحة لا كتابة صامتة فوقه.",
    ),
    p(
      "No-shows dropped because reminders finally arrived, and because cancelling was a two-tap flow instead of a phone tree.",
      "انخفض التغيب لأن التذكيرات وصلت ولأن الإلغاء أصبح مسارين لا شجرة هاتف.",
    ),
    h2("Staff see the same truth", "يرى الطاقم الحقيقة نفسها"),
    p(
      "The desk board and the patient SMS share state. If the family thinks they are booked, the nurse sees the same booking. Split-brain calendars are how clinics lose a morning.",
      "لوحة المكتب ورسالة المريض تشتركان في الحالة. إذا ظنت العائلة أنها محجوزة ترى الممرضة الحجز نفسه. التقاويم المنقسمة هي كيف تخسر العيادات صباحاً.",
    ),
    p(
      "Booking software earns trust in the loud week. We designed for that week first.",
      "برمجيات الحجز تكسب الثقة في الأسبوع الصاخب. صممنا لذلك الأسبوع أولاً.",
    ),
  ],
  "marketplace-search-relevance": [
    p(
      "Search returned expired listings because recency beat availability. Sellers with empty warehouses still sat on page one. Buyers learned to add 'in stock' to every query, which is a product failure with extra typing.",
      "كان البحث يعيد إعلانات منتهية لأن الحداثة تغلبت على التوفر. بائعون بمستودعات فارغة ما زالوا في الصفحة الأولى. تعلم المشترون إضافة 'متوفر' لكل استعلام وهذا فشل منتج بكتابة إضافية.",
    ),
    p(
      "We mixed in stock, seller score, and a synonym list from actual queries. Then we staffed a weekly review of empty results until the curve bent.",
      "أدخلنا المخزون ودرجة البائع وقائمة مرادفات من الاستعلامات الفعلية. ثم خصصنا مراجعة أسبوعية للنتائج الفارغة حتى انحنى المنحنى.",
    ),
    h2("Read the zero-result log", "اقرأ سجل الصفر نتائج"),
    p(
      "The most expensive click is the one that finds nothing. Empty queries are a product backlog, not a sad chart. We promoted synonyms, fixed categories, and killed ghost inventory every week.",
      "أغلى نقرة هي التي لا تجد شيئاً. الاستعلامات الفارغة قائمة عمل لا مخطط حزين. رقّينا المرادفات وأصلحنا التصنيفات وقتلنا المخزون الشبح كل أسبوع.",
    ),
    p(
      "Merchants got a simple health score: photos, stock freshness, response time. Ranking without a lever they can pull is a black box they will not trust.",
      "حصل التجار على درجة صحة بسيطة: صور وحداثة مخزون ووقت رد. الترتيب بلا ذراع يمكنهم سحبها صندوق أسود لن يثقوا به.",
    ),
    h2("Relevance is operations", "الصلة تشغيل"),
    p(
      "Search quality is not a one-time model drop. It is a desk that reads logs, a ranking recipe you can explain, and the courage to demote junk even when it is new.",
      "جودة البحث ليست إسقاط نموذج مرة. إنها مكتب يقرأ السجلات ووصفة ترتيب يمكن شرحها وشجاعة تخفيض الرديء حتى عندما يكون جديداً.",
    ),
    p(
      "When junk stopped ranking first, conversion followed. Buyers did not need a lecture. They needed the thing they typed.",
      "عندما توقف الرديء عن الترتيب أولاً تبعه التحويل. لم يحتج المشترون محاضرة. احتاجوا الشيء الذي كتبوه.",
    ),
  ],
};
