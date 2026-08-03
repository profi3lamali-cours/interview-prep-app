/* =========================================================================
   أسئلة المقابلات البرمجية — بنك الأسئلة (questions.js)
   ---------------------------------------------------------------------
   هيكل كل قسم (Section):
   {
     id, name, icon, intro, concepts: [{title, body}],
     questions: [ Question ]
   }

   هيكل السؤال (Question):
   {
     id, title, difficulty: 'easy'|'medium'|'hard',
     domain, type: 'open'|'mcq'|'tf'|'scenario',
     timeMinutes, question, answer, explanation,
     example (اختياري - كود),
     bestPractices: [...], commonMistakes: [...],
     followups: [...], similar: [...],
     // خاص بـ mcq:
     options: [...], correctIndex,
     // خاص بـ tf:
     isTrue: true/false
   }

   ملاحظة للتطوير المستقبلي: هذا الملف مصمم ليكون قابلاً للتوسّع بسهولة —
   يكفي إضافة كائنات أسئلة جديدة داخل مصفوفة questions لأي قسم، أو إضافة
   قسم جديد كامل بنفس الهيكل أعلاه، دون الحاجة لتعديل أي كود آخر.
   ========================================================================= */

const QUESTION_BANK = [

/* ======================================================================
   HTML
   ====================================================================== */
{
  id: "html",
  name: "HTML",
  icon: "🌐",
  intro: "لغة HTML هي الهيكل العظمي لأي صفحة ويب. في المقابلات، لا يُسأل المرشح عادة عن الوسوم الأساسية فقط، بل عن الدلالية (Semantics)، وإمكانية الوصول (Accessibility)، والأداء، وكيف يفكر في بنية الصفحة كمحادث حقيقي مع المتصفح ومحركات البحث وقارئات الشاشة.",
  concepts: [
    { title: "HTML الدلالي (Semantic HTML)", body: "استخدام وسوم تعبّر عن المعنى الحقيقي للمحتوى مثل header وnav وmain وarticle وsection وfooter بدلًا من الاعتماد الكلي على div. هذا يحسّن SEO وإمكانية الوصول ويجعل الكود مفهومًا لأي مطوّر آخر." },
    { title: "نموذج الصندوق (Box Model)", body: "كل عنصر HTML يُعامل كصندوق يتكوّن من content ثم padding ثم border ثم margin. فهم هذا النموذج ضروري قبل الانتقال لـ CSS، لأن الوسوم مثل div وspan تُعرض افتراضيًا كـ block أو inline." },
    { title: "إمكانية الوصول (Accessibility - a11y)", body: "استخدام خصائص مثل alt وaria-label ولfor مع label، والحفاظ على ترتيب منطقي للعناوين h1 إلى h6، يجعل الموقع قابلًا للاستخدام من قبل الأشخاص الذين يعتمدون على قارئات الشاشة." },
    { title: "النماذج (Forms) والتحقق من الصحة", body: "HTML5 يوفر تحقق صحة أساسي عبر خصائص مثل required وpattern وtype=email، مما يقلل الاعتماد الكلي على JavaScript للتحقق البسيط." },
    { title: "الوسوم الوصفية meta والأداء", body: "وسم viewport ضروري للتجاوب، وخصائص مثل loading=lazy على الصور تحسّن سرعة تحميل الصفحة الأولى (First Contentful Paint)." }
  ],
  questions: [
    {
      id: "html-1", title: "ما الفرق بين HTML الدلالي وغير الدلالي؟", difficulty: "easy", domain: "HTML", type: "open", timeMinutes: 3,
      question: "اشرح الفرق بين Semantic HTML وNon-semantic HTML، ولماذا يُفضّل المحاورون رؤية استخدام الوسوم الدلالية؟",
      answer: "الوسوم الدلالية (مثل header، nav، main، article، section، footer، aside) تحمل معنى واضحًا عن دور المحتوى داخلها، بعكس div وspan اللذين لا يعبّران عن أي شيء سوى أنهما حاويات عامة. عند استخدام الوسوم الدلالية، يفهم المتصفح ومحركات البحث وقارئات الشاشة بنية الصفحة دون الحاجة لتحليل الأسماء أو الفئات (classes).",
      explanation: "استخدام <article> بدلًا من <div class='article'> يعطي معنى إضافيًا مجانيًا: محركات البحث تفهم أن هذا محتوى مستقل قائم بذاته، وقارئ الشاشة يمكنه القفز مباشرة إلى <main> أو <nav> عبر اختصارات التنقّل السريع. من الناحية العملية، لا يوجد فرق بصري في العرض الافتراضي بين article وdiv، لكن الفرق كله في المعنى الذي يُنقل للأنظمة الأخرى غير العين البشرية.",
      bestPractices: ["استخدم عنصر <main> واحد فقط في كل صفحة", "لا تتجاوز في الترتيب الهرمي للعناوين (h1 ثم h2 ثم h3...) دون قفز", "استخدم <button> للأزرار الفعلية وليس <div onclick>"],
      commonMistakes: ["استخدام div لكل شيء حتى عند وجود وسم دلالي مناسب", "استخدام أكثر من h1 واحد في نفس الصفحة دون داعٍ", "نسيان أن section يجب أن تحتوي عادة على عنوان (heading) داخلها"],
      followups: ["كيف تتحقق من أن صفحتك تدعم قارئات الشاشة فعليًا؟", "ما تأثير semantic HTML على SEO تحديدًا؟"],
      similar: ["ما الفرق بين article وsection؟", "متى تستخدم aside؟"]
    },
    {
      id: "html-2", title: "اشرح Box Model في HTML/CSS", difficulty: "easy", domain: "HTML", type: "open", timeMinutes: 4,
      question: "ما هو نموذج الصندوق (Box Model)؟ وما الفرق بين box-sizing: content-box وborder-box؟",
      answer: "كل عنصر HTML عبارة عن صندوق مستطيل يتكوّن من أربع طبقات من الداخل للخارج: المحتوى (content)، الحشو الداخلي (padding)، الحدود (border)، ثم الهامش الخارجي (margin). في content-box (القيمة الافتراضية)، تُحسب width وheight للمحتوى فقط، ويُضاف padding وborder فوقها فيكبر حجم العنصر الكلي. أما في border-box، فإن width وheight تشملان المحتوى والـ padding والـ border معًا، مما يجعل التحكم بالتخطيط أسهل بكثير.",
      explanation: "المشكلة الشائعة تحدث عندما تحدد عنصرًا بعرض width: 200px ثم تضيف له padding: 20px؛ في content-box سيصبح العرض الفعلي 240px (200 + 20 + 20)، مما يكسر التخطيطات المبنية على شبكة (grid) بعرض ثابت. لهذا السبب يستخدم معظم المطورين الحديثين قاعدة عالمية مثل * { box-sizing: border-box; } في بداية أي مشروع لتفادي هذه المفاجآت.",
      example: "* {\n  box-sizing: border-box;\n}\n\n.card {\n  width: 300px;\n  padding: 20px;\n  border: 2px solid #333;\n  /* العرض الكلي يبقى 300px بفضل border-box */\n}",
      bestPractices: ["ضع box-sizing: border-box على * في بداية كل مشروع", "استخدم أدوات المطوّر (DevTools) لمعاينة الصندوق فعليًا عند تصحيح الأخطاء"],
      commonMistakes: ["نسيان أن margin لا يُحتسب ضمن border-box أبدًا (فقط content+padding+border)", "الخلط بين padding الذي يضيف مساحة داخلية وmargin الذي يبعد العنصر عن جيرانه"],
      followups: ["ماذا يحدث مع margin collapsing بين عنصرين متجاورين رأسيًا؟", "كيف تتعامل مع box-sizing في مكتبات CSS الحديثة مثل Tailwind؟"],
      similar: ["ما الفرق بين inline وblock وinline-block؟", "كيف يعمل position: absolute بالنسبة للصندوق؟"]
    },
    {
      id: "html-3", title: "ما دور خاصية alt في الصور؟", difficulty: "easy", domain: "HTML", type: "open", timeMinutes: 2,
      question: "لماذا تُعتبر خاصية alt في وسم img مهمة جدًا في المقابلات التقنية، وما هي أفضل طريقة لكتابتها؟",
      answer: "خاصية alt توفر نصًا بديلاً يصف محتوى الصورة، ويُستخدم في ثلاث حالات رئيسية: عندما تفشل الصورة في التحميل، عندما يستخدم شخص قارئ شاشة (screen reader) لا يستطيع رؤية الصورة، وعندما تفهرس محركات البحث محتوى الصفحة. يجب أن يكون النص وصفيًا ومختصرًا وذا معنى، وليس مجرد اسم الملف.",
      explanation: "الفرق بين alt='image1.jpg' وalt='رسم بياني يوضح نمو المبيعات خلال 2025' هائل من ناحية تجربة المستخدم؛ الأول عديم الفائدة تمامًا لمستخدم قارئ الشاشة، بينما الثاني ينقل نفس المعلومة التي يراها المستخدم المُبصر. أما الصور الزخرفية البحتة التي لا تحمل معنى وظيفيًا (مثل خط فاصل تزييني)، فيجب أن تحمل alt=\"\" فارغة عمدًا حتى يتجاوزها قارئ الشاشة تمامًا بدلًا من قراءة اسم ملف غير مفيد.",
      bestPractices: ["اجعل alt وصفيًا وموجزًا (لا يتجاوز عادة جملة واحدة)", "استخدم alt=\"\" فارغة عمدًا للصور الزخرفية البحتة", "لا تكرر كلمة 'صورة' داخل alt لأن قارئ الشاشة يعلن ذلك تلقائيًا"],
      commonMistakes: ["ترك alt فارغًا للصور المهمة وظيفيًا (مثل صورة منتج)", "كتابة alt طويل جدًا أشبه بفقرة كاملة", "نسيان alt كليًا مما يجعل قارئ الشاشة يقرأ اسم الملف الكامل بامتداده"],
      followups: ["كيف تتعامل مع الصور التي تعمل كأزرار (مثل أيقونة إغلاق)؟", "ما الفرق بين aria-label وalt؟"],
      similar: ["ما هي خاصية title وهل تغني عن alt؟", "كيف تُحسّن إمكانية الوصول (a11y) في نموذج تسجيل الدخول؟"]
    },
    {
      id: "html-4", title: "ما الفرق بين localStorage وsessionStorage وCookies؟", difficulty: "medium", domain: "HTML", type: "open", timeMinutes: 4,
      question: "قارن بين localStorage وsessionStorage وCookies من حيث السعة، مدة البقاء، وإرسالها مع الطلبات (requests).",
      answer: "localStorage يخزّن البيانات بشكل دائم في المتصفح حتى يحذفها المستخدم يدويًا، بسعة تصل عادة إلى 5-10 ميغابايت، ولا تُرسل بياناته مع طلبات HTTP. sessionStorage يشبهه تمامًا في السعة والواجهة البرمجية، لكن بياناته تُمسح فور إغلاق التبويب. أما الـ Cookies فسعتها أصغر بكثير (حوالي 4 كيلوبايت)، ويمكن ضبط تاريخ انتهاء لها، والأهم أنها تُرسل تلقائيًا مع كل طلب HTTP للخادم، مما يجعلها مناسبة لحالات المصادقة (authentication) وغير مناسبة لتخزين بيانات كبيرة.",
      explanation: "الاختيار بين الثلاثة يعتمد على طبيعة البيانات: تفضيلات الواجهة (مثل الوضع الليلي) تناسب localStorage لأنها يجب أن تبقى بين الزيارات. بيانات نموذج مؤقت خلال جلسة واحدة تناسب sessionStorage. أما رمز الجلسة (session token) الذي يحتاج الخادم لرؤيته في كل طلب، فيُفضّل أن يكون في Cookie بخاصية HttpOnly لمنع الوصول إليه عبر JavaScript وبالتالي تقليل مخاطر هجمات XSS.",
      bestPractices: ["استخدم HttpOnly وSecure وSameSite على الكوكيز الحساسة", "لا تخزّن بيانات حساسة (كلمات مرور، توكنات كاملة) في localStorage لأنها عرضة لهجمات XSS"],
      commonMistakes: ["تخزين JWT tokens في localStorage معتقدين أنها آمنة تمامًا من XSS", "الخلط بين سعة الكوكيز الصغيرة جدًا وسعة localStorage الأكبر"],
      followups: ["كيف تحمي localStorage من هجمات XSS إن اضطررت لاستخدامه؟", "ما هو IndexedDB ومتى تحتاجه بدلًا من localStorage؟"],
      similar: ["ما هو CSRF وكيف ترتبط الكوكيز به؟", "كيف تعمل SameSite cookies؟"]
    },
    {
      id: "html-5", title: "ما هو DOCTYPE ولماذا نحتاجه؟", difficulty: "easy", domain: "HTML", type: "open", timeMinutes: 2,
      question: "ما وظيفة <!DOCTYPE html> في بداية أي صفحة HTML؟",
      answer: "سطر DOCTYPE يخبر المتصفح أن هذا المستند يتبع معايير HTML5 الحديثة، مما يجعل المتصفح يعرض الصفحة في وضع standards mode بدلًا من quirks mode القديم المتوافق مع متصفحات التسعينيات. بدون هذا السطر، قد يفسّر بعض المتصفحات خصائص CSS وBox Model بطريقة مختلفة وغير متوقعة.",
      explanation: "وضع quirks mode كان موجودًا تاريخيًا للحفاظ على توافق الصفحات القديمة مع متصفحات لم تكن تدعم معايير W3C الكاملة. اليوم، كتابة <!DOCTYPE html> البسيطة (وهي كل ما يحتاجه HTML5 بعكس إصدارات XHTML القديمة المعقدة) تضمن سلوكًا متسقًا عبر جميع المتصفحات الحديثة.",
      bestPractices: ["ضع DOCTYPE دائمًا كأول سطر في الملف قبل أي شيء آخر حتى المسافات"],
      commonMistakes: ["نسيان DOCTYPE تمامًا مما يفعّل quirks mode دون علم المطور", "وضع تعليقات أو مسافات قبل DOCTYPE"],
      followups: ["ما الفرق بين quirks mode وstandards mode عمليًا في العرض؟"],
      similar: ["ما هي بنية مستند HTML5 الأساسية؟"]
    },
    {
      id: "html-6", title: "ما الفرق بين defer وasync في وسم script؟", difficulty: "medium", domain: "HTML", type: "open", timeMinutes: 4,
      question: "عند تحميل ملف JavaScript خارجي عبر <script src='...'>, ما الفرق بين استخدام الخاصية defer والخاصية async، ومتى تختار كلًا منهما؟",
      answer: "بدون أي خاصية، يوقف المتصفح تحليل (parsing) صفحة HTML بالكامل عند الوصول لوسم script، ويحمّل وينفّذ الملف فورًا قبل المتابعة. مع async، يستمر المتصفح في تحليل HTML أثناء تحميل الملف بالتوازي، لكن بمجرد اكتمال التحميل يوقف التحليل فورًا لتنفيذ السكربت مباشرة — وترتيب التنفيذ بين عدة ملفات async غير مضمون. أما defer، فيحمّل الملف بالتوازي مع تحليل HTML أيضًا، لكنه يؤجل التنفيذ حتى ينتهي تحليل المستند بالكامل، مع الحفاظ على ترتيب التنفيذ كما هو مكتوب في الصفحة.",
      explanation: "من الناحية العملية: async مناسب للسكربتات المستقلة تمامًا عن بعضها وعن DOM، مثل أدوات التحليل الإحصائي (analytics) أو الإعلانات. أما defer فهو الخيار الأنسب لمعظم سكربتات التطبيق الرئيسية التي تحتاج DOM جاهزًا بالكامل وتعتمد على ترتيب تنفيذ معيّن بين ملفات متعددة.",
      example: "<!-- يُنفَّذ بترتيبه بعد اكتمال HTML بالكامل -->\n<script src=\"app.js\" defer></script>\n\n<!-- يُنفَّذ فور اكتماله، بلا ترتيب مضمون مع سكربتات أخرى -->\n<script src=\"analytics.js\" async></script>",
      bestPractices: ["استخدم defer لملفات JavaScript الأساسية في التطبيق", "استخدم async لأدوات الطرف الثالث المستقلة مثل التحليلات"],
      commonMistakes: ["الاعتماد على async مع توقّع ترتيب تنفيذ معيّن بين عدة ملفات", "وضع سكربتات ضخمة بدون defer أو async في <head> مما يبطئ عرض الصفحة الأولي"],
      followups: ["أين يُفضّل وضع وسم script من الناحية العملية: head أم نهاية body؟", "كيف يؤثر ذلك على مقياس First Contentful Paint؟"],
      similar: ["ما هو Critical Rendering Path؟"]
    },
    {
      id: "html-mcq-1", title: "أي وسم يُستخدم لأهم عنوان رئيسي في الصفحة؟", difficulty: "easy", domain: "HTML", type: "mcq", timeMinutes: 1,
      question: "أي وسم HTML هو الأنسب لأهم عنوان رئيسي وحيد في الصفحة؟",
      options: ["<div class='title'>", "<h1>", "<header>", "<b>"], correctIndex: 1,
      answer: "الوسم <h1> هو الأنسب.",
      explanation: "يجب أن تحتوي كل صفحة على <h1> واحد يمثّل العنوان الرئيسي الأهم دلاليًا، بينما header هو حاوية تخطيطية قد تحتوي شعارًا وقائمة تنقّل وليس بالضرورة عنوانًا نصيًا.",
      bestPractices: ["استخدم h1 واحدًا فقط لكل صفحة"], commonMistakes: ["استخدام header أو div بدلًا من h1 ظنًا أنهما متكافئان دلاليًا"],
      followups: ["ماذا يحدث إن استخدمت أكثر من h1 في نفس الصفحة؟"], similar: ["ما الترتيب الصحيح للعناوين h1-h6؟"]
    },
    {
      id: "html-mcq-2", title: "أي خاصية تجعل الحقل إلزاميًا في النموذج؟", difficulty: "easy", domain: "HTML", type: "mcq", timeMinutes: 1,
      question: "أي خاصية HTML5 تجعل حقل الإدخال إلزاميًا دون كتابة JavaScript؟",
      options: ["mandatory", "required", "validate", "must"], correctIndex: 1,
      answer: "الخاصية required.",
      explanation: "خاصية required توقف إرسال النموذج تلقائيًا وتعرض رسالة تحقق افتراضية من المتصفح إذا كان الحقل فارغًا، دون الحاجة لأي كود JavaScript إضافي.",
      bestPractices: ["اجمع بين required والتحقق من جهة الخادم دومًا، فلا يكفي التحقق من جهة العميل وحده"],
      commonMistakes: ["الاعتماد على required فقط دون تحقق من جهة الخادم، مما يفتح ثغرة أمنية"],
      followups: ["كيف تخصص رسالة الخطأ الافتراضية لـ required؟"], similar: ["ما هي خاصية pattern في input؟"]
    },
    {
      id: "html-tf-1", title: "صح أو خطأ: يمكن وجود أكثر من عنصر main في الصفحة", difficulty: "easy", domain: "HTML", type: "tf", timeMinutes: 1,
      question: "صح أم خطأ: يُسمح بوجود أكثر من وسم <main> واحد ظاهر في نفس صفحة HTML.",
      isTrue: false,
      answer: "خطأ.",
      explanation: "يجب أن يحتوي المستند على عنصر <main> واحد فقط غير مخفي (بدون hidden)، لأنه يمثّل المحتوى الرئيسي الفريد للصفحة، ووجود أكثر من واحد يربك أدوات إمكانية الوصول التي تعتمد عليه للتنقّل السريع.",
      bestPractices: ["استخدم main واحدًا يحيط بالمحتوى الأساسي فقط، لا التنقّل أو التذييل"],
      commonMistakes: ["وضع main داخل main بالخطأ", "استخدام main لأجزاء متكررة مثل الشريط الجانبي"],
      followups: [], similar: ["ما الفرق بين main وarticle؟"]
    },
    {
      id: "html-7", title: "ما الفرق بين عنصر Canvas وSVG؟", difficulty: "medium", domain: "HTML", type: "open", timeMinutes: 4,
      question: "متى تستخدم <canvas> ومتى تستخدم <svg> لعرض رسومات في صفحة ويب؟",
      answer: "Canvas سطح رسم نقطي (bitmap/raster) يُرسَم عليه عبر JavaScript فقط، ولا يحتفظ بأي تمثيل للأشكال المرسومة كعناصر منفصلة بعد رسمها (فقط بكسلات نهائية)؛ لذا فأي تعديل على شكل واحد يتطلب إعادة رسم كل شيء من الصفر. SVG صيغة رسومات متجهة (vector) تُمثَّل كعناصر DOM حقيقية (مثل <circle> و<rect>)، يمكن الوصول لكل شكل والتحكم به فرديًا عبر CSS وJavaScript تمامًا مثل أي عنصر HTML آخر، وتبقى حادة الجودة (لا تتشوّه) عند التكبير مهما كان حجم الشاشة.",
      explanation: "اختر Canvas للرسومات كثيفة التحديث والتغيير باستمرار (ألعاب، رسوم بيانية متحركة معقدة، معالجة صور بكسل بكسل) حيث الأداء أهم من إمكانية التعامل مع كل شكل فرديًا. اختر SVG للرسومات التي تحتاج تفاعلاً فرديًا مع كل عنصر (أيقونات قابلة للنقر، رسوم بيانية تفاعلية بعدد عناصر محدود نسبيًا)، أو عندما يكون الوضوح الحاد عند التكبير (مثل الشعارات) أولوية.",
      bestPractices: ["استخدم SVG للأيقونات والشعارات (حادة الجودة دومًا)، وCanvas للرسوم المتحركة كثيفة الأداء مثل الألعاب"],
      commonMistakes: ["استخدام Canvas لعدد قليل من الأشكال البسيطة القابلة للتفاعل، حيث SVG كان سيكون أبسط وأسهل صيانة"],
      followups: ["كيف تتعامل مع آلاف العناصر في SVG دون التأثير على الأداء؟"], similar: ["ما هو WebGL وعلاقته بـ Canvas؟"]
    },
    {
      id: "html-8", title: "ما فائدة خصائص data-* المخصصة؟", difficulty: "easy", domain: "HTML", type: "open", timeMinutes: 2,
      question: "ما هي خصائص data-* في HTML، ومتى تُستخدم بدلاً من إنشاء متغيرات JavaScript منفصلة؟",
      answer: "خصائص data-* (مثل data-user-id=\"42\") تسمح بتخزين بيانات مخصصة مرتبطة بعنصر HTML مباشرة داخل الوسم نفسه، دون الحاجة لخصائص غير قياسية قد تتعارض مستقبلاً مع مواصفات HTML الرسمية. يمكن الوصول لها بسهولة عبر element.dataset.userId في JavaScript، أو عبر محدد CSS مثل [data-user-id=\"42\"].",
      explanation: "الفائدة العملية الأساسية هي ربط بيانات السياق (مثل معرّف عنصر في قاعدة البيانات) مباشرة بعنصر DOM المقابل له، بحيث لا تحتاج للاحتفاظ بخريطة (map) منفصلة في JavaScript تربط بين عناصر DOM ومعرّفاتها؛ العنصر نفسه 'يحمل' بياناته معه، مما يبسّط كتابة معالجات أحداث عامة (مثل معالج نقر واحد على قائمة كاملة يقرأ data-id من العنصر المنقور عليه تحديدًا).",
      example: "<button data-product-id=\"501\" data-action=\"add-to-cart\">أضف للسلة</button>\n\n// في JavaScript:\nbutton.addEventListener('click', (e) => {\n  console.log(e.target.dataset.productId); // '501'\n});",
      bestPractices: ["استخدم data-* لبيانات مرتبطة بعنصر واحد تحتاجها JavaScript أو CSS، بدلًا من خصائص HTML غير قياسية مخترَعة"],
      commonMistakes: ["تخزين بيانات حساسة (مثل توكنات مصادقة) في data-* الظاهرة في مصدر الصفحة، وهي مرئية لأي شخص يفحص HTML"],
      followups: ["كيف تصل لخصائص data-* عبر CSS بدلاً من JavaScript؟"], similar: ["ما الفرق بين خصائص data-* وaria-* المخصصة لإمكانية الوصول؟"]
    },
    {
      id: "html-mcq-3", title: "أي طريقة إرسال نموذج تُظهر البيانات في رابط URL؟", difficulty: "easy", domain: "HTML", type: "mcq", timeMinutes: 1,
      question: "عند إرسال نموذج HTML بطريقة method=\"get\"، أين تظهر بيانات الحقول المُرسَلة؟",
      options: ["في جسم الطلب (Request Body) بشكل مخفي", "في رابط URL كـ Query String", "في ترويسة (Header) خاصة", "لا تُرسَل أبدًا"], correctIndex: 1,
      answer: "في رابط URL كـ Query String.",
      explanation: "method=\"get\" يُلحق بيانات النموذج مباشرة في رابط URL بصيغة ?key=value&key2=value2، مما يجعلها مرئية للمستخدم ومحفوظة في تاريخ المتصفح، وغير مناسبة إطلاقًا لبيانات حساسة مثل كلمات المرور. أما method=\"post\" فيُرسل البيانات داخل جسم الطلب (Request Body) بعيدًا عن الرابط الظاهر.",
      bestPractices: ["استخدم method=\"post\" لأي نموذج يحتوي بيانات حساسة أو يُحدث بيانات على الخادم (مثل تسجيل الدخول)"],
      commonMistakes: ["استخدام method=\"get\" لنموذج تسجيل الدخول، مما يعرض كلمة المرور في رابط URL ظاهرة وفي تاريخ المتصفح"],
      followups: [], similar: ["ما هو الحد الأقصى الفعلي لطول رابط URL في معظم المتصفحات؟"]
    },
  ]
},

/* ======================================================================
   CSS
   ====================================================================== */
{
  id: "css",
  name: "CSS",
  icon: "🎨",
  intro: "أسئلة CSS في المقابلات لا تتوقف عند الألوان والخطوط، بل تختبر فهمك العميق لكيفية حساب المتصفح للتخطيط: من Specificity إلى Flexbox وGrid إلى إدارة الاستجابة (Responsive Design) والأداء البصري.",
  concepts: [
    { title: "الأولوية (Specificity)", body: "يحسب المتصفح أولوية كل قاعدة CSS بناءً على نوع المحدد (selector): المعرفات (id) لها وزن أعلى من الفئات (class)، والفئات أعلى من وسوم العناصر (element). القاعدة الأحدث تفوز فقط عند تساوي الأولوية." },
    { title: "Flexbox", body: "نظام تخطيط أحادي البعد (صف أو عمود) مصمم لتوزيع المساحة بين عناصر داخل حاوية واحدة، مثالي لأشرطة التنقل والبطاقات المتراصفة." },
    { title: "CSS Grid", body: "نظام تخطيط ثنائي الأبعاد (صفوف وأعمدة معًا) يمنحك تحكمًا دقيقًا في بنية الصفحة الكاملة، مناسب لتخطيطات الصفحة العامة أكثر من Flexbox." },
    { title: "الاستعلامات الإعلامية (Media Queries)", body: "تسمح بتطبيق قواعد CSS مختلفة حسب عرض الشاشة، وهي أساس فلسفة Mobile-First في التصميم المتجاوب." },
    { title: "المتغيرات المخصصة (CSS Custom Properties)", body: "تسمح بتعريف قيم قابلة لإعادة الاستخدام عبر var(--name)، وهي الأساس التقني وراء أنظمة الوضع الليلي/الفاتح الحديثة." }
  ],
  questions: [
    {
      id: "css-1", title: "اشرح كيفية عمل Specificity في CSS", difficulty: "medium", domain: "CSS", type: "open", timeMinutes: 4,
      question: "كيف يقرر المتصفح أي قاعدة CSS تفوز عند وجود تعارض بين عدة قواعد تستهدف نفس العنصر؟",
      answer: "يحسب المتصفح لكل محدد (selector) قيمة أولوية مكوّنة من أربع خانات: أنماط inline، ثم عدد المعرفات (#id)، ثم عدد الفئات والخصائص والأصناف الزائفة (.class، [attr]، :hover)، ثم عدد أسماء العناصر والأصناف الزائفة للعنصر (div، ::before). كل مرتبة أعلى تتفوق على كل ما دونها مجتمعًا، بغض النظر عن العدد. عند تساوي الأولوية تمامًا، تفوز القاعدة المكتوبة لاحقًا في ملف CSS.",
      explanation: "مثال عملي: #nav .item يتفوق دائمًا على .nav .item .link .active مهما زاد عدد الفئات في الثاني، لأن وجود معرف واحد (#) يتفوق على أي عدد من الفئات. هذا سبب شائع لارتباك المطورين المبتدئين عندما لا تُطبَّق أنماطهم رغم أنها 'مكتوبة لاحقًا' في الملف - الترتيب لا يهم إلا عند تساوي الأولوية فعليًا.",
      example: "/* الأولوية: 0-1-1 (فئة واحدة + عنصر واحد) */\nul.nav li { color: blue; }\n\n/* الأولوية: 0-1-0 (فئة واحدة فقط) - أقل، لن تفوز رغم أنها لاحقة */\n.active { color: red; }\n\n/* لتفادي !important، ارفع النوعية بدلًا من ذلك */",
      bestPractices: ["تجنب !important قدر الإمكان، وارفع النوعية بمحدد أدق بدلًا منه", "استخدم منهجية تسمية مثل BEM لتقليل تعارض الأولوية أصلًا"],
      commonMistakes: ["استخدام !important كحل سريع مما يخلق فوضى يصعب تصحيحها لاحقًا", "الاعتقاد بأن ترتيب الكتابة يتفوق دائمًا على النوعية"],
      followups: ["كيف تتعامل مع CSS قادم من مكتبة خارجية له نوعية عالية؟", "ما هو CSS Cascade Layers (@layer) وكيف يحل هذه المشكلة؟"],
      similar: ["ما الفرق بين class وid من ناحية الاستخدام لا الأولوية فقط؟"]
    },
    {
      id: "css-2", title: "متى تستخدم Flexbox ومتى تستخدم Grid؟", difficulty: "medium", domain: "CSS", type: "open", timeMinutes: 4,
      question: "ما الفرق الجوهري بين Flexbox وCSS Grid، وكيف تقرر أيهما تستخدم في تخطيط معيّن؟",
      answer: "Flexbox نظام أحادي البعد: يرتب العناصر إما في صف واحد أو عمود واحد، ويتفوق في توزيع المساحة الديناميكي بين عناصر غير معروفة العدد مسبقًا مثل أزرار شريط أدوات أو بطاقات تصطف أفقيًا. أما Grid فنظام ثنائي الأبعاد: يتحكم في الصفوف والأعمدة معًا في نفس الوقت، مما يجعله الخيار الأنسب لتخطيطات الصفحة الكاملة مثل رأس وشريط جانبي ومحتوى وتذييل.",
      explanation: "قاعدة عملية شائعة بين المطورين: فكّر في المحتوى أولاً - إذا كنت تصمم مكونًا (component) بترتيب خطي واحد، اختر Flexbox. إذا كنت تصمم تخطيطًا (layout) يحتاج محاذاة عبر صفوف وأعمدة معًا، اختر Grid. في الواقع العملي، يستخدم معظم المشاريع الحديثة كليهما معًا: Grid للهيكل العام للصفحة، وFlexbox داخل كل بطاقة أو مكوّن فرعي.",
      example: "/* Grid لتخطيط الصفحة العام */\n.page {\n  display: grid;\n  grid-template-columns: 240px 1fr;\n  grid-template-rows: auto 1fr auto;\n}\n\n/* Flexbox لمحاذاة عناصر داخل بطاقة واحدة */\n.card {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}",
      bestPractices: ["استخدم Grid للتخطيط العام وFlexbox للمكوّنات الداخلية", "استخدم gap بدلًا من margin للمسافات بين عناصر flex/grid"],
      commonMistakes: ["محاولة بناء تخطيط شبكي معقد بالكامل باستخدام Flexbox فقط ومعاناة مع الأعمدة غير المتساوية", "نسيان أن align-items يتحكم بالمحور العمودي بينما justify-content بالأفقي في flex-direction: row الافتراضي"],
      followups: ["كيف تبني تخطيطًا متجاوبًا (responsive) باستخدام Grid وauto-fit وminmax؟", "ما الفرق بين fr وpx وauto في Grid؟"],
      similar: ["ما هو subgrid وما فائدته؟"]
    },
    {
      id: "css-3", title: "اشرح الفرق بين em وrem وpx وvw/vh", difficulty: "medium", domain: "CSS", type: "open", timeMinutes: 3,
      question: "متى تستخدم كل وحدة من وحدات القياس التالية في CSS: px، em، rem، vw/vh؟",
      answer: "px وحدة ثابتة مطلقة لا تتأثر بأي شيء آخر، مناسبة للحدود (borders) الدقيقة. em نسبية لحجم خط العنصر الأب مباشرة، مما يجعلها تتراكم (compounding) عبر العناصر المتداخلة وقد تسبب نتائج غير متوقعة. rem نسبية لحجم الخط الجذري (root، عادة html) فقط، بغض النظر عن التداخل، مما يجعلها الخيار الأكثر قابلية للتنبؤ لأحجام الخطوط والمسافات. أما vw وvh فنسبية لعرض وارتفاع نافذة العرض (viewport) بالكامل، مفيدة للعناصر التي يجب أن تتناسب مع حجم الشاشة مباشرة مثل قسم Hero بارتفاع الشاشة كاملة.",
      explanation: "مشكلة em الشائعة: إذا كان لديك .parent { font-size: 20px } و.child { font-size: 1.5em } داخل عنصر آخر متداخل بنفس القاعدة، فإن الحجم يتضاعف تراكميًا مع كل مستوى تداخل. rem تتجنب هذه المشكلة تمامًا لأنها تشير دائمًا لجذر المستند بغض النظر عن عمق التداخل، ولهذا أصبحت المعيار الافتراضي في أنظمة التصميم الحديثة.",
      bestPractices: ["استخدم rem لأحجام الخطوط والمسافات لضمان اتساق قابل للتنبؤ", "استخدم % أو vw/vh للعناصر التي يجب أن تتجاوب مع حاوية أو شاشة"],
      commonMistakes: ["استخدام em بكثرة في مكونات متداخلة دون انتباه للتراكم", "الاعتماد على px فقط مما يكسر إمكانية تكبير الخط من إعدادات المتصفح لضعاف البصر"],
      followups: ["كيف يؤثر تغيير المستخدم لحجم خط المتصفح الافتراضي على تصميمك إن استخدمت rem؟"],
      similar: ["ما هو clamp() ولماذا يُستخدم مع الخطوط المتجاوبة؟"]
    },
    {
      id: "css-4", title: "ما هو BEM ولماذا نستخدمه؟", difficulty: "medium", domain: "CSS", type: "open", timeMinutes: 3,
      question: "ما هي منهجية BEM في تسمية فئات CSS (classes)، وما المشكلة التي تحلها؟",
      answer: "BEM اختصار لـ Block, Element, Modifier، وهي منهجية تسمية تكتب الفئات بصيغة block__element--modifier، مثل card__title--highlighted. الهدف هو جعل كل فئة مسطحة الأولوية (specificity منخفضة وثابتة دائمًا) ومستقلة تمامًا، بحيث لا تحتاج أبدًا لمحددات متداخلة أو !important لأن كل مكوّن معزول تمامًا عن غيره بأسماء فريدة.",
      explanation: "في مشروع كبير بدون منهجية تسمية، يبدأ CSS بالتضخم مع محددات متداخلة عميقة مثل .sidebar .widget ul li a.active التي يصعب فهمها وتعديلها لاحقًا دون كسر شيء آخر. مع BEM، تصبح كل فئة اسمًا مسطحًا واضحًا بذاته مثل widget__link--active، فتقرأ الكود وتفهم فورًا أنه عنصر رابط داخل مكوّن widget في حالة نشطة، دون الحاجة لتتبع التداخل في الشجرة.",
      example: "/* Block */\n.card { }\n\n/* Element - جزء من الـ block */\n.card__title { }\n.card__image { }\n\n/* Modifier - حالة أو تنويع للـ block أو الـ element */\n.card--featured { }\n.card__title--large { }",
      bestPractices: ["التزم بمنهجية تسمية واحدة (BEM أو ما شابه) عبر المشروع بأكمله", "تجنّب تداخل المحددات العميق حتى مع BEM نفسه"],
      commonMistakes: ["الخلط بين BEM ومنهجيات أخرى في نفس المشروع مما يفقد الفائدة", "استخدام element متداخل داخل element آخر (card__title__text) بدلًا من تسطيح الاسم"],
      followups: ["كيف تقارن BEM مع Utility-First CSS مثل Tailwind؟", "كيف يتعامل CSS Modules أو CSS-in-JS مع نفس المشكلة؟"],
      similar: ["ما هي منهجية OOCSS أو SMACSS؟"]
    },
    {
      id: "css-5", title: "كيف تبني تصميمًا متجاوبًا Responsive Design؟", difficulty: "medium", domain: "CSS", type: "scenario", timeMinutes: 5,
      question: "سيناريو: طُلب منك تحويل تصميم ثابت (Desktop-only) إلى تصميم متجاوب بالكامل. ما هي استراتيجيتك خطوة بخطوة؟",
      answer: "أبدأ بفلسفة Mobile-First: أكتب القواعد الأساسية لأصغر شاشة أولاً بدون أي media query، ثم أضيف min-width media queries تدريجيًا لتحسين التخطيط على الشاشات الأكبر. أستخدم وحدات نسبية (%, rem, fr) بدلًا من px الثابتة، وGrid/Flexbox مع خصائص مثل auto-fit وminmax لتفادي كتابة عدد كبير من نقاط التوقف (breakpoints) يدويًا.",
      explanation: "العمل بنهج Mobile-First (وليس Desktop-First مع إخفاء عناصر لاحقًا) يجبرك على التفكير أولاً بأولويات المحتوى: ماذا يجب أن يظهر أولًا على شاشة صغيرة؟ هذا عادة ما ينتج تصميمًا أنظف من محاولة 'تقليص' تصميم سطح مكتب معقد بأثر رجعي. تقنية مثل grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)) تجعل الشبكة تتجاوب تلقائيًا دون كتابة أي media query على الإطلاق في كثير من الحالات.",
      example: "/* Mobile-first: القاعدة الافتراضية للشاشات الصغيرة */\n.grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n  gap: 16px;\n}\n\n@media (min-width: 768px) {\n  .grid { gap: 24px; }\n}",
      bestPractices: ["ابدأ دائمًا بتصميم الشاشة الصغيرة (Mobile-First)", "اختبر على أجهزة حقيقية وليس فقط بتصغير نافذة المتصفح", "استخدم وسم viewport الصحيح في head"],
      commonMistakes: ["نسيان <meta name='viewport' content='width=device-width, initial-scale=1'> فتظهر الصفحة مصغّرة على الجوال", "الاعتماد على max-width فقط (Desktop-First) مما يعقّد إعادة الترتيب لاحقًا"],
      followups: ["كيف تتعامل مع الصور المتجاوبة (srcset وsizes)؟", "ما هي container queries وكيف تختلف عن media queries؟"],
      similar: ["ما الفرق بين adaptive design وresponsive design؟"]
    },
    {
      id: "css-mcq-1", title: "أي خاصية تنشئ سياق تكديس جديد (Stacking Context)؟", difficulty: "hard", domain: "CSS", type: "mcq", timeMinutes: 2,
      question: "أي مما يلي ينشئ Stacking Context جديدًا في CSS؟",
      options: ["display: block", "position: relative فقط بدون z-index", "position: absolute مع z-index محدد", "text-align: center"], correctIndex: 2,
      answer: "position: absolute (أو relative/fixed) مع تحديد قيمة z-index.",
      explanation: "مجرد وضع position: relative بدون z-index لا ينشئ سياق تكديس جديدًا. لكن بمجرد إضافة z-index (أي رقم غير auto) مع أي قيمة position غير static، يُنشئ العنصر سياق تكديس جديدًا يعزل ترتيب أبنائه عن بقية الصفحة.",
      bestPractices: ["افهم Stacking Context قبل استخدام z-index عشوائيًا لحل مشاكل التداخل"],
      commonMistakes: ["زيادة قيمة z-index باستمرار (999، 9999...) دون فهم السبب الجذري للمشكلة"],
      followups: ["ما هي الخصائص الأخرى التي تنشئ Stacking Context (مثل opacity أقل من 1، transform)؟"],
      similar: ["كيف يعمل z-index داخل عناصر flex أو grid؟"]
    },
    {
      id: "css-mcq-2", title: "ما هي نتيجة display: none على إمكانية الوصول؟", difficulty: "medium", domain: "CSS", type: "mcq", timeMinutes: 1,
      question: "عند استخدام display: none على عنصر، ماذا يحدث من ناحية قارئات الشاشة (screen readers)؟",
      options: ["يبقى العنصر مقروءًا بصوت خافت", "يُزال العنصر تمامًا من شجرة إمكانية الوصول ولا يُقرأ", "يُقرأ فقط عند التركيز عليه بالتاب", "لا يوجد أي تأثير"], correctIndex: 1,
      answer: "يُزال العنصر تمامًا من شجرة إمكانية الوصول.",
      explanation: "display: none يخفي العنصر بصريًا ويزيله من التخطيط تمامًا، كما يزيله من شجرة إمكانية الوصول (Accessibility Tree)، فلا تقرأه قارئات الشاشة إطلاقًا. هذا يختلف عن تقنية 'إخفاء بصري فقط' (visually-hidden class) التي تُبقي العنصر متاحًا لقارئ الشاشة بينما تخفيه عن العين المبصرة.",
      bestPractices: ["استخدم فئة visually-hidden (وليس display:none) عند إخفاء نص عن العين مع إبقائه لقارئ الشاشة"],
      commonMistakes: ["استخدام display:none لإخفاء تسمية (label) نصية ثم التفاجؤ بأن قارئ الشاشة لا يقرأها"],
      followups: ["كيف تكتب فئة visually-hidden صحيحة؟"], similar: ["ما الفرق بين visibility:hidden وdisplay:none؟"]
    },
    {
      id: "css-tf-1", title: "صح أو خطأ: margin: auto يعمل مع flexbox لتوسيط عنصر", difficulty: "medium", domain: "CSS", type: "tf", timeMinutes: 1,
      question: "صح أم خطأ: يمكن استخدام margin: auto على عنصر واحد داخل حاوية flex لدفعه إلى الجهة المقابلة أو توسيطه.",
      isTrue: true,
      answer: "صح.",
      explanation: "داخل flex container، تأخذ خاصية margin: auto كل المساحة الفارغة المتاحة في ذلك الاتجاه، وهي حيلة شائعة جدًا لدفع عنصر أخير في شريط تنقّل إلى أقصى اليسار (margin-right: auto في RTL) بينما تبقى بقية العناصر متلاصقة.",
      bestPractices: ["استخدم margin-inline-start/end: auto بدلًا من margin-left/right لدعم RTL تلقائيًا"],
      commonMistakes: ["استخدام justify-content: space-between عندما يكون margin:auto على عنصر واحد أبسط وأدق للحالة المطلوبة"],
      followups: [], similar: ["كيف توسّط عنصرًا رأسيًا وأفقيًا معًا باستخدام flexbox؟"]
    },
    {
      id: "css-6", title: "ما الفرق بين Pseudo-classes وPseudo-elements؟", difficulty: "medium", domain: "CSS", type: "open", timeMinutes: 3,
      question: "ما الفرق بين :hover (pseudo-class) و::before (pseudo-element) في CSS؟",
      answer: "الأصناف الزائفة (Pseudo-classes، بنقطتين رأسيتين واحدة مثل :hover و:first-child) تستهدف عنصرًا موجودًا فعليًا في حالة أو موضع معيّن (عند تمرير الفأرة فوقه، أو كونه أول ابن). أما العناصر الزائفة (Pseudo-elements، بنقطتين رأسيتين ثنائيتين مثل ::before و::after) فتُنشئ 'عنصرًا وهميًا' جديدًا غير موجود أصلاً في HTML، ويمكن تنسيقه ككتلة محتوى منفصلة (غالبًا مع خاصية content).",
      explanation: "القاعدة الحديثة (CSS3) تستخدم نقطتين رأسيتين (::) للعناصر الزائفة و نقطة رأسية واحدة (:) للأصناف الزائفة للتفريق الواضح بينهما، رغم أن المتصفحات لا تزال تقبل نقطة واحدة للتوافق مع CSS2 القديم. ::before و::after يُستخدمان بكثرة لإضافة زخرفة بصرية (أيقونات، اقتباسات) دون تلويث HTML بعناصر إضافية لا معنى دلاليًا لها.",
      example: ".tooltip:hover { opacity: 1; } /* pseudo-class: حالة */\n\n.quote::before { content: '\\201C'; } /* pseudo-element: محتوى جديد وهمي */\n.quote::after { content: '\\201D'; }",
      bestPractices: ["استخدم :: للعناصر الزائفة و: للأصناف الزائفة للوضوح، حتى لو قبل المتصفح كليهما بنقطة واحدة"],
      commonMistakes: ["نسيان أن ::before/::after يحتاجان خاصية content (حتى لو فارغة content: '') وإلا لن يظهرا إطلاقًا"],
      followups: ["كيف تُستخدم ::before لإنشاء عداد تلقائي (counter) على عناصر قائمة؟"], similar: ["ما هو :nth-child(n) وكيف يُستخدم لتنسيق أنماط متكررة؟"]
    },
    {
      id: "css-7", title: "ما الفرق بين transition وanimation في CSS؟", difficulty: "medium", domain: "CSS", type: "open", timeMinutes: 3,
      question: "متى تستخدم transition ومتى تحتاج animation مع @keyframes؟",
      answer: "transition يُحرّك التغيّر بين حالتين فقط (البداية والنهاية) استجابة لتغيّر فعلي في خاصية CSS (مثل :hover)، ولا يعمل إلا عند حدوث ذلك التغيير. أما animation مع @keyframes فتسمح بتعريف عدة نقاط توقف وسيطة (0%, 25%, 50%...100%) لحركة معقدة متعددة المراحل، ويمكنها العمل تلقائيًا عند تحميل الصفحة دون انتظار أي تفاعل من المستخدم، والتكرار عدد مرات محدد أو لا نهائيًا.",
      explanation: "استخدم transition للتأثيرات التفاعلية البسيطة ذات نقطتين (تغيّر لون زر عند hover، فتح/إغلاق قائمة). استخدم animation عندما تحتاج تسلسلاً أكثر تعقيدًا من مرحلتين، أو حركة تعمل تلقائيًا وباستمرار دون أي تفاعل مستخدم (مثل مؤشر تحميل دوّار spinner).",
      example: "/* transition: بين حالتين فقط، عند تغيّر فعلي */\n.btn { transition: background-color 0.3s ease; }\n.btn:hover { background-color: darkblue; }\n\n/* animation: عدة مراحل، تلقائية ومتكررة */\n@keyframes spin {\n  from { transform: rotate(0deg); }\n  to { transform: rotate(360deg); }\n}\n.spinner { animation: spin 1s linear infinite; }",
      bestPractices: ["استخدم transition للتفاعلات البسيطة، وanimation للحركات المعقدة أو المستمرة تلقائيًا"],
      commonMistakes: ["محاولة بناء حركة معقدة متعددة المراحل باستخدام transition وحدها، وهو أصعب بكثير من استخدام animation المصممة لهذا الغرض تحديدًا"],
      followups: ["كيف تُحسّن أداء الحركات عبر تفضيل transform وopacity على خصائص أخرى مثل width/height؟"], similar: ["ما هي خاصية will-change ومتى تُستخدم؟"]
    },
    {
      id: "css-mcq-3", title: "أي خاصية CSS الأفضل للأداء عند تحريك عنصر؟", difficulty: "hard", domain: "CSS", type: "mcq", timeMinutes: 2,
      question: "أي من خصائص CSS التالية هي الأفضل من ناحية الأداء لتحريك عنصر بسلاسة (دون إعادة تخطيط الصفحة)؟",
      options: ["width وheight", "margin وpadding", "transform وopacity", "top وleft مع position:static"], correctIndex: 2,
      answer: "transform وopacity",
      explanation: "تغيير transform وopacity لا يتطلب من المتصفح إعادة حساب تخطيط الصفحة بأكملها (Layout/Reflow)؛ يمكن للمتصفح تنفيذ هذه التغييرات مباشرة على طبقة GPU منفصلة (compositing) بكفاءة عالية جدًا. أما تغيير width أو height أو margin أو top/left يُجبر المتصفح على إعادة حساب تخطيط عناصر كثيرة محيطة، مما يُبطئ الحركة خصوصًا على أجهزة أضعف.",
      bestPractices: ["استخدم transform: translate() بدلاً من تغيير top/left، وtransform: scale() بدلاً من تغيير width/height عند إمكان ذلك في الحركات"],
      commonMistakes: ["تحريك width أو margin لعناصر كثيرة في نفس الوقت، مما يُسبب بطئًا ملحوظًا (jank) خصوصًا على الجوال"],
      followups: [], similar: ["ما هو Compositing Layer وكيف يرتبط بأداء الحركات؟"]
    },
  ]
},

/* ======================================================================
   JavaScript
   ====================================================================== */
{
  id: "javascript",
  name: "JavaScript",
  icon: "⚡",
  intro: "JavaScript هو القسم الأكثر عمقًا في أي مقابلة Frontend، لأنه يختبر فهمك لتفاصيل اللغة الدقيقة: كيفية عمل Scope وClosures وEvent Loop، والفرق بين الأنواع البدائية والمرجعية، وأساليب البرمجة غير المتزامنة (Asynchronous Programming).",
  concepts: [
    { title: "Closures", body: "الدالة التي تحتفظ بحق الوصول لمتغيرات النطاق (scope) الذي أُنشئت فيه، حتى بعد انتهاء تنفيذ تلك الدالة الخارجية. أساس تقنيات مهمة مثل الخصوصية (private variables) وdebounce/throttle." },
    { title: "Event Loop", body: "الآلية التي تسمح لجافاسكريبت أحادي الخيط (single-threaded) بالتعامل مع عمليات غير متزامنة عبر Call Stack وWeb APIs وTask Queue وMicrotask Queue." },
    { title: "Prototypal Inheritance", body: "جافاسكريبت تستخدم الوراثة عبر النماذج الأولية (prototypes) بدلًا من الفئات الكلاسيكية؛ صيغة class هي مجرد 'سكر نحوي' (syntactic sugar) فوق هذا النظام." },
    { title: "الأنواع البدائية مقابل المرجعية", body: "الأنواع البدائية (string, number, boolean...) تُنسخ بالقيمة، بينما الكائنات والمصفوفات تُنسخ بالمرجع (reference)، مما يفسر سلوكيات غير متوقعة عند المقارنة أو النسخ السطحي." },
    { title: "Promises وasync/await", body: "async/await هو 'سكر نحوي' فوق Promises يجعل الكود غير المتزامن يُقرأ ويُكتب بشكل يشبه الكود المتزامن التقليدي، مع الحفاظ على نفس السلوك تحت الغطاء." }
  ],
  questions: [
    {
      id: "js-1", title: "ما هو Closure في JavaScript؟", difficulty: "medium", domain: "JavaScript", type: "open", timeMinutes: 5,
      question: "اشرح مفهوم Closure مع مثال عملي، ولماذا يُعتبر من أهم أسئلة مقابلات JavaScript؟",
      answer: "الـ Closure هو دالة تحتفظ بإمكانية الوصول للمتغيرات الموجودة في النطاق (scope) الذي أُنشئت فيه، حتى بعد أن تنتهي تلك الدالة الخارجية من التنفيذ وتخرج من مكدس الاستدعاء (call stack). بمعنى آخر، الدالة الداخلية 'تتذكر' بيئتها المحيطة (lexical environment) وتحمل هذه الذاكرة معها أينما استُخدمت لاحقًا.",
      explanation: "يُسأل عن Closures كثيرًا لأنها تكشف مدى فهم المرشح لـ Scope الحقيقي في جافاسكريبت، وليس مجرد حفظ التعريف. الاستخدام العملي الأشهر هو إنشاء متغيرات خاصة (private state) لا يمكن الوصول إليها مباشرة من الخارج، وهو ما تعتمد عليه الآن أيضًا React Hooks مثل useState داخليًا لتتبع الحالة بين عمليات إعادة العرض (re-renders).",
      example: "function createCounter() {\n  let count = 0; // خاص، لا يمكن الوصول له من الخارج مباشرة\n  return {\n    increment: () => ++count,\n    getValue: () => count\n  };\n}\n\nconst counter = createCounter();\ncounter.increment();\ncounter.increment();\nconsole.log(counter.getValue()); // 2\n// count غير مرئي أو قابل للتعديل مباشرة من خارج createCounter",
      bestPractices: ["استخدم Closures لإنشاء حالة خاصة (encapsulation) دون الحاجة لكلاسات معقدة", "انتبه لتأثير Closures على استهلاك الذاكرة عند إنشاء عدد كبير منها في حلقات"],
      commonMistakes: ["الخطأ الكلاسيكي: استخدام var داخل حلقة for مع setTimeout فتطبع كل الدوال نفس القيمة النهائية للمتغير بدلاً من القيمة وقت الإنشاء (يُحل باستخدام let أو IIFE)"],
      followups: ["كيف يحل let هذه المشكلة تحديدًا مقارنة بـ var داخل الحلقات؟", "كيف ترتبط Closures بتسريبات الذاكرة (memory leaks) المحتملة؟"],
      similar: ["ما هو IIFE (Immediately Invoked Function Expression)؟", "كيف تعمل useState في React داخليًا؟"]
    },
    {
      id: "js-2", title: "اشرح كيف يعمل Event Loop في JavaScript", difficulty: "hard", domain: "JavaScript", type: "open", timeMinutes: 6,
      question: "جافاسكريبت لغة أحادية الخيط (single-threaded)، فكيف تتعامل مع عمليات غير متزامنة مثل setTimeout وfetch دون أن تتجمد الواجهة؟ اشرح دور Call Stack وWeb APIs وMicrotask/Macrotask Queue.",
      answer: "المحرك ينفذ الكود المتزامن سطرًا بسطر عبر Call Stack. عندما يواجه عملية غير متزامنة مثل setTimeout أو fetch، يُسلّمها للمتصفح (Web APIs) ليعمل عليها في الخلفية بينما يستمر Call Stack في تنفيذ بقية الكود المتزامن فورًا. عند اكتمال العملية غير المتزامنة، توضع دالة الاستجابة (callback) في طابور: إما Macrotask Queue (لـ setTimeout وأحداث DOM) أو Microtask Queue (لـ Promises وasync/await). يفرغ الـ Event Loop طابور Microtask بالكامل أولًا كلما أصبح Call Stack فارغًا، قبل أن يأخذ مهمة واحدة فقط من Macrotask Queue، ثم يكرر الدورة.",
      explanation: "أهمية هذا التمييز بين الطابورين تظهر في أسئلة مثل: 'ماذا تطبع الشيفرة إذا وضعنا setTimeout(fn, 0) وPromise.resolve().then(fn2) معًا؟' الإجابة الصحيحة أن fn2 (من Microtask) تُطبع دائمًا قبل fn (من Macrotask)، حتى لو كان التأخير صفرًا، لأن المحرك يُفرغ كامل طابور Microtask أولًا في كل دورة قبل الانتقال لأي Macrotask.",
      example: "console.log('1');\n\nsetTimeout(() => console.log('2'), 0); // Macrotask\n\nPromise.resolve().then(() => console.log('3')); // Microtask\n\nconsole.log('4');\n\n// الناتج: 1, 4, 3, 2\n// المتزامن أولاً (1, 4)، ثم Microtask (3)، ثم Macrotask (2)",
      bestPractices: ["افهم أن async/await لا يوقف الخيط الرئيسي أبدًا، بل يعيد تنظيم استمرار الدالة كـ microtask"],
      commonMistakes: ["الاعتقاد بأن setTimeout(fn, 0) ينفّذ الدالة فورًا؛ في الحقيقة تنتظر دورها في الطابور حتى بعد كل الكود المتزامن والـ microtasks"],
      followups: ["ما الفرق بين requestAnimationFrame وsetTimeout من ناحية التوقيت؟", "كيف تتعامل Node.js مع Event Loop بشكل مختلف قليلاً عن المتصفح (مثل process.nextTick)؟"],
      similar: ["كيف تعمل async/await تحت الغطاء بالضبط؟", "ما هو Web Workers ولماذا نحتاجه رغم وجود Event Loop؟"]
    },
    {
      id: "js-3", title: "ما الفرق بين == و === في JavaScript؟", difficulty: "easy", domain: "JavaScript", type: "open", timeMinutes: 3,
      question: "اشرح الفرق بين عامل المساواة == و=== ولماذا يُنصح دائمًا باستخدام الثاني؟",
      answer: "== (Loose Equality) يقارن القيمتين بعد تحويل أحدهما أو كليهما لنفس النوع تلقائيًا (type coercion) إن اختلف نوعاهما. أما === (Strict Equality) فيقارن القيمة والنوع معًا دون أي تحويل ضمني، فإذا اختلف النوعان تكون النتيجة false مباشرة بغض النظر عن القيمة.",
      explanation: "قواعد التحويل الضمني في == معقدة وغير بديهية أحيانًا؛ فمثلًا '' == 0 تُعطي true، وnull == undefined تُعطي true لكن null === undefined تُعطي false، بينما [] == false تُعطي true أيضًا نتيجة سلسلة تحويلات داخلية. هذا التعقيد هو بالضبط سبب توصية جميع أدلة الأسلوب الحديثة (مثل Airbnb Style Guide) باستخدام === دائمًا لتفادي أخطاء منطقية يصعب تتبعها.",
      example: "0 == '0'      // true  (تحويل الفهرس النصي لرقم)\n0 == ''       // true\n0 === '0'     // false (نوعان مختلفان)\nnull == undefined   // true\nnull === undefined  // false",
      bestPractices: ["استخدم === وحدها دائمًا في الكود الإنتاجي، فيما عدا حالة نادرة مثل x == null لفحص null وundefined معًا عمدًا"],
      commonMistakes: ["استخدام == افتراضيًا دون وعي بقواعد التحويل الضمني الكامنة خلفه"],
      followups: ["كيف تقارن كائنين (objects) أو مصفوفتين للتساوي في المحتوى وليس المرجع؟"],
      similar: ["ما هو Object.is() وكيف يختلف عن ===؟"]
    },
    {
      id: "js-4", title: "ما هو Hoisting؟", difficulty: "medium", domain: "JavaScript", type: "open", timeMinutes: 3,
      question: "ما هو مفهوم Hoisting في JavaScript، وكيف يختلف تصرف var عن let وconst بخصوصه؟",
      answer: "Hoisting هو سلوك المحرك الذي 'يرفع' تعريفات المتغيرات والدوال إلى أعلى نطاقها (scope) قبل تنفيذ الكود فعليًا. متغيرات var تُرفع ويُهيَّأ لها undefined فورًا، لذا يمكن استخدامها (بقيمة undefined) قبل سطر تعريفها دون خطأ. أما let وconst فتُرفع أيضًا من ناحية تقنية، لكنها تبقى في 'المنطقة الميتة المؤقتة' (Temporal Dead Zone) حتى سطر تعريفها الفعلي، فأي محاولة لاستخدامها قبل ذلك السطر تطلق خطأ ReferenceError بدلًا من إعطاء undefined بصمت.",
      explanation: "التمييز مهم عمليًا لأن var يُخفي أخطاء برمجية قد تمر دون ملاحظة (تحصل على undefined بدلًا من خطأ واضح)، بينما let/const يُظهران الخطأ فورًا وبوضوح أكبر أثناء التطوير، وهذا أحد أسباب تفضيل let/const في الكود الحديث تمامًا كما هو الحال مع تفضيل === على ==.",
      example: "console.log(x); // undefined (لا خطأ، hoisting كامل مع var)\nvar x = 5;\n\nconsole.log(y); // ReferenceError: Cannot access 'y' before initialization\nlet y = 5;",
      bestPractices: ["تجنب var تمامًا في الكود الحديث، واستخدم let أو const فقط"],
      commonMistakes: ["الاعتقاد بأن let/const 'لا تُرفع إطلاقًا'؛ الصحيح أنها تُرفع لكن تبقى غير قابلة للوصول حتى سطر التعريف"],
      followups: ["هل تُرفع تعريفات الدوال (function declarations) بالكامل مع جسمها، أم فقط اسمها كما var؟"],
      similar: ["ما هو Temporal Dead Zone بالتفصيل؟"]
    },
    {
      id: "js-5", title: "ما الفرق بين call وapply وbind؟", difficulty: "medium", domain: "JavaScript", type: "open", timeMinutes: 4,
      question: "ما هي الوظائف call وapply وbind الموجودة على كل دالة في JavaScript، وما الفرق بينها؟",
      answer: "الثلاثة تُستخدم للتحكم في قيمة this داخل دالة معينة. call تستدعي الدالة فورًا مع تحديد this ثم تمرير باقي المعاملات كل واحدة منفصلة بفاصلة. apply تستدعي الدالة فورًا أيضًا مع تحديد this، لكنها تأخذ باقي المعاملات كمصفوفة واحدة. أما bind فلا تستدعي الدالة فورًا؛ بل تُعيد دالة جديدة مرتبطة (bound) بقيمة this محددة، يمكن استدعاؤها لاحقًا في أي وقت.",
      explanation: "الفرق العملي الأهم هو bind مقابل الاثنين الآخرين: call/apply للتنفيذ الفوري، بينما bind لإنشاء نسخة جديدة من الدالة مُثبّتة السياق تُستخدم لاحقًا، وهذا شائع جدًا عند تمرير event handlers في كلاسات JavaScript التقليدية (قبل استخدام arrow functions) لضمان أن this داخل الدالة يشير للكائن الصحيح دائمًا بغض النظر عن كيفية استدعائها.",
      example: "function greet(greeting) { return `${greeting}, ${this.name}`; }\nconst user = { name: 'سارة' };\n\ngreet.call(user, 'مرحبًا');      // 'مرحبًا, سارة' - تنفيذ فوري، معاملات منفصلة\ngreet.apply(user, ['أهلًا']);    // 'أهلًا, سارة'  - تنفيذ فوري، معاملات كمصفوفة\n\nconst boundGreet = greet.bind(user);\nboundGreet('صباح الخير');        // 'صباح الخير, سارة' - يُستدعى لاحقًا",
      bestPractices: ["استخدم arrow functions كبديل حديث لتفادي مشاكل this في الكلاسات بدلًا من bind يدويًا في كل مكان"],
      commonMistakes: ["نسيان bind دالة معالج حدث (event handler) داخل كلاس React قديم فتفقد this سياقها عند الاستدعاء"],
      followups: ["كيف تختلف قيمة this داخل arrow function عن دالة عادية؟"],
      similar: ["كيف تعمل قيمة this في الوضع الصارم (strict mode)؟"]
    },
    {
      id: "js-6", title: "ما الفرق بين null وundefined؟", difficulty: "easy", domain: "JavaScript", type: "open", timeMinutes: 2,
      question: "ما الفرق بين قيمة null وقيمة undefined في JavaScript؟",
      answer: "undefined تعني أن المتغير أُعلن ولكن لم تُسند له أي قيمة بعد، وهي القيمة الافتراضية التي يعطيها المحرك تلقائيًا. أما null فهي قيمة يُسندها المطور عمدًا للدلالة على 'لا قيمة' أو 'فراغ مقصود'، أي أنها تعبير صريح عن غياب القيمة وليس غيابًا عرضيًا.",
      explanation: "من الناحية العملية، إذا رأيت undefined فهذا غالبًا يعني أن شيئًا لم يُهيَّأ بعد (متغير، خاصية كائن غير موجودة، أو دالة بلا قيمة إرجاع)، بينما null غالبًا يشير إلى أن مطورًا قرر صراحة تفريغ قيمة كانت موجودة، مثل تصفير مرجع كائن. من ناحية typeof، الأمر مثير للاهتمام: typeof null يُعطي 'object' وهذا خطأ تاريخي قديم في اللغة نفسها موثق ولا يمكن إصلاحه دون كسر توافقية الويب.",
      example: "let a;\nconsole.log(a); // undefined - لم تُسند قيمة\n\nlet b = null;\nconsole.log(b); // null - أُسندت عمدًا كـ 'فارغة'\n\ntypeof undefined; // 'undefined'\ntypeof null;      // 'object' (خلل تاريخي شهير في اللغة)",
      bestPractices: ["استخدم null فقط عندما تريد التعبير الصريح عن 'لا قيمة' في متغير من المفترض أن يحمل كائنًا"],
      commonMistakes: ["الخلط بينهما عند فحص الشرط بـ if (value) لأن كليهما falsy فيمر بنفس المسار رغم اختلاف المعنى المقصود"],
      followups: ["كيف تفحص كليهما معًا بأمان باستخدام == null؟"], similar: ["ما هو Optional Chaining ?. وكيف يتعامل مع هذه القيم؟"]
    },
    {
      id: "js-mcq-1", title: "ما ناتج [1,2,3] + [4,5,6] في JavaScript؟", difficulty: "medium", domain: "JavaScript", type: "mcq", timeMinutes: 2,
      question: "ما ناتج تنفيذ [1,2,3] + [4,5,6] في وحدة تحكم المتصفح؟",
      options: ["[1,2,3,4,5,6]", "'1,2,34,5,6'", "خطأ (Error)", "NaN"], correctIndex: 1,
      answer: "'1,2,34,5,6' (سلسلة نصية).",
      explanation: "عامل + مع مصفوفتين يحوّل كليهما أولًا إلى نص (toString) قبل الجمع، فتصبح [1,2,3] هي '1,2,3' و[4,5,6] هي '4,5,6'، ثم يُجمع النصان بعملية دمج نصوص عادية (concatenation) فينتج '1,2,34,5,6' وليس عملية دمج مصفوفات كما قد يتوقع البعض.",
      bestPractices: ["استخدم [...arr1, ...arr2] أو arr1.concat(arr2) لدمج المصفوفات فعليًا بدلًا من +"],
      commonMistakes: ["افتراض أن + يعمل مع المصفوفات كما يعمل مع الأرقام أو كما يُتوقع بديهيًا"],
      followups: ["ماذا يحدث لو استخدمت + بين مصفوفة ورقم بدلًا من مصفوفتين؟"], similar: ["كيف يعمل type coercion مع الكائنات (objects) في عمليات الجمع؟"]
    },
    {
      id: "js-mcq-2", title: "أي طريقة تُنشئ نسخة سطحية (shallow copy) من مصفوفة؟", difficulty: "easy", domain: "JavaScript", type: "mcq", timeMinutes: 1,
      question: "أي من التالي يُنشئ نسخة سطحية (shallow copy) جديدة من مصفوفة arr بدلًا من مرجع لنفس المصفوفة؟",
      options: ["let copy = arr;", "let copy = [...arr];", "let copy = arr.length;", "arr.push(copy);"], correctIndex: 1,
      answer: "let copy = [...arr]; باستخدام Spread Operator.",
      explanation: "let copy = arr يُنسخ المرجع فقط، فيصبح كل من arr وcopy يشيران لنفس المصفوفة في الذاكرة؛ أي تعديل على أحدهما ينعكس على الآخر. أما [...arr] (أو Array.from(arr) أو arr.slice()) فتُنشئ مصفوفة جديدة فعليًا في الذاكرة تحتوي نفس العناصر (نسخ سطحي - العناصر الداخلية المرجعية مثل كائنات متداخلة تبقى مشتركة).",
      bestPractices: ["استخدم spread أو structuredClone() عند الحاجة لنسخ عميق حقيقي يشمل الكائنات المتداخلة"],
      commonMistakes: ["الاعتقاد بأن [...arr] ينسخ نسخًا عميقًا كاملاً حتى لو كانت عناصر المصفوفة كائنات متداخلة"],
      followups: ["كيف تنسخ نسخًا عميقًا (deep copy) كاملاً لكائن متداخل بعمق؟"], similar: ["ما الفرق بين structuredClone وJSON.parse(JSON.stringify())؟"]
    },
    {
      id: "js-tf-1", title: "صح أو خطأ: الدوال في JavaScript هي Objects من الدرجة الأولى", difficulty: "easy", domain: "JavaScript", type: "tf", timeMinutes: 1,
      question: "صح أم خطأ: الدوال في JavaScript تُعامل كـ First-Class Citizens، أي يمكن تمريرها كمعاملات وإرجاعها من دوال أخرى وتخزينها في متغيرات مثل أي قيمة أخرى.",
      isTrue: true,
      answer: "صح.",
      explanation: "الدوال في JavaScript هي كائنات (objects) قابلة للتمرير كمعامل لدالة أخرى (callbacks)، وقابلة للإرجاع من دالة أخرى (كما في Closures وHigher-Order Functions)، وقابلة للتخزين في متغيرات أو مصفوفات أو خصائص كائن مثل أي قيمة عادية أخرى. هذه الخاصية هي أساس البرمجة الوظيفية (Functional Programming) في JavaScript.",
      bestPractices: ["استغل هذه الخاصية لكتابة دوال عليا (Higher-Order Functions) مثل map وfilter وreduce بدلًا من الحلقات اليدوية عند المناسب"],
      commonMistakes: [], followups: ["ما هي Higher-Order Function وأعطِ مثالًا؟"], similar: ["ما الفرق بين Function Declaration وFunction Expression؟"]
    },
    {
      id: "js-7", title: "ما الفرق بين Promise.all وPromise.race وPromise.allSettled؟", difficulty: "hard", domain: "JavaScript", type: "open", timeMinutes: 5,
      question: "متى تستخدم كلًا من Promise.all وPromise.race وPromise.allSettled عند التعامل مع عدة Promises معًا؟",
      answer: "Promise.all تنتظر اكتمال كل الـ Promises بنجاح، وتُرجع مصفوفة بكل النتائج بالترتيب؛ لكن إذا فشل (rejected) أي واحد منها، تفشل all بأكملها فورًا برفض واحد بغض النظر عن نجاح البقية. Promise.race تنتظر أول Promise ينتهي (سواء بنجاح أو فشل) وتتجاهل الباقي تمامًا بعد ذلك. Promise.allSettled تنتظر اكتمال كل الـ Promises دون استثناء (نجاحًا أو فشلاً)، وتُرجع مصفوفة تحتوي حالة كل واحدة (status: 'fulfilled' أو 'rejected') مع قيمتها أو سبب الفشل، دون أن يُسقط فشل واحد النتيجة الكاملة.",
      explanation: "استخدم Promise.all عندما تحتاج كل النتائج معًا ولا معنى للمتابعة إن فشل أي واحد (مثل تحميل عدة إعدادات ضرورية لتشغيل التطبيق). استخدم Promise.race لتطبيق مهلة زمنية (timeout) على عملية (سباق بين الطلب الفعلي وPromise تأخير يرفض بعد مدة معينة). استخدم Promise.allSettled عندما تريد تنفيذ عدة عمليات مستقلة عن بعضها ومعرفة نتيجة كل واحدة على حدة، حتى لو فشل بعضها (مثل إرسال عدة إشعارات لمستخدمين مختلفين، حيث فشل إشعار واحد لا يجب أن يوقف الباقي).",
      example: "// إن فشل أي طلب، Promise.all بأكملها تفشل فورًا\nconst [users, posts] = await Promise.all([fetchUsers(), fetchPosts()]);\n\n// تحصل على نتيجة كل عملية بغض النظر عن نجاح أو فشل الأخرى\nconst results = await Promise.allSettled([fetchA(), fetchB()]);\nresults.forEach(r => console.log(r.status)); // 'fulfilled' أو 'rejected'",
      bestPractices: ["استخدم Promise.allSettled بدلًا من Promise.all عندما تريد الاستمرار حتى لو فشلت بعض العمليات المستقلة"],
      commonMistakes: ["استخدام Promise.all لعمليات مستقلة تمامًا، فيفشل كل شيء ويُفقد نجاح البقية بسبب فشل عملية واحدة فقط غير حرجة"],
      followups: ["كيف تبني مهلة زمنية (timeout) لطلب fetch باستخدام Promise.race؟"], similar: ["ما هو Promise.any() وكيف يختلف عن Promise.race؟"]
    },
    {
      id: "js-8", title: "ما الفرق بين Debounce وThrottle؟", difficulty: "hard", domain: "JavaScript", type: "open", timeMinutes: 5,
      question: "اشرح الفرق بين تقنيتي Debounce وThrottle، مع مثال عملي لكل واحدة.",
      answer: "Debounce يؤجل تنفيذ دالة حتى يمر وقت محدد دون أي استدعاء جديد لها؛ كل استدعاء جديد يُلغي المؤقت السابق ويبدأ عدًّا جديدًا، فتُنفَّذ الدالة فعليًا مرة واحدة فقط بعد توقف الاستدعاءات المتكررة تمامًا (مثالها الكلاسيكي: البحث الفوري الذي ينتظر توقف المستخدم عن الكتابة قبل إرسال الطلب). Throttle يضمن تنفيذ الدالة بحد أقصى مرة واحدة كل فترة زمنية ثابتة، بغض النظر عن عدد مرات الاستدعاء الفعلي خلال تلك الفترة (مثالها الكلاسيكي: معالج حدث scroll الذي يُنفَّذ كل 200 مللي ثانية بدلاً من مئات المرات في الثانية).",
      explanation: "الفرق الجوهري: Debounce 'ينتظر السكون' قبل التنفيذ (مناسب عندما يهمك فقط الحدث النهائي بعد توقف التغيير)، بينما Throttle 'يُحدد معدل' التنفيذ المنتظم بغض النظر عن استمرار الأحداث (مناسب عندما تحتاج تحديثات دورية منتظمة أثناء نشاط مستمر مثل التمرير أو تحريك الفأرة).",
      example: "function debounce(fn, delay) {\n  let timer;\n  return (...args) => {\n    clearTimeout(timer);\n    timer = setTimeout(() => fn(...args), delay);\n  };\n}\n\nfunction throttle(fn, limit) {\n  let inThrottle;\n  return (...args) => {\n    if (!inThrottle) {\n      fn(...args);\n      inThrottle = true;\n      setTimeout(() => inThrottle = false, limit);\n    }\n  };\n}",
      bestPractices: ["استخدم debounce لحقول البحث الفوري وتغيير حجم النافذة، وthrottle لأحداث scroll وmousemove المتكررة جدًا"],
      commonMistakes: ["استخدام debounce لمعالج scroll، مما يجعل الدالة لا تُنفَّذ إطلاقًا أثناء التمرير المستمر (فقط بعد توقفه تمامًا)، بينما المطلوب تحديثات دورية أثناء التمرير نفسه"],
      followups: ["كيف تنفّذ debounce يدعم 'leading edge' (تنفيذ فوري أولاً ثم تجاهل الباقي) بدلاً من 'trailing edge' الافتراضي؟"], similar: ["كيف تستخدم requestAnimationFrame كبديل لـ throttle في حركات مرتبطة بالرسم؟"]
    },
    {
      id: "js-mcq-3", title: "ما ناتج typeof NaN في JavaScript؟", difficulty: "medium", domain: "JavaScript", type: "mcq", timeMinutes: 1,
      question: "ما ناتج تنفيذ typeof NaN في JavaScript؟",
      options: ["'undefined'", "'NaN'", "'number'", "'object'"], correctIndex: 2,
      answer: "'number'",
      explanation: "رغم أن NaN تعني حرفيًا 'Not a Number'، فإن نوعها الفعلي في JavaScript هو 'number'؛ فهي قيمة خاصة ضمن نوع الأرقام تُمثّل نتيجة عملية حسابية غير صالحة (مثل 0/0 أو parseInt('abc')). من الخصائص الغريبة الإضافية: NaN === NaN تُعطي false (القيمة الوحيدة في JavaScript التي لا تساوي نفسها!)، ولذا يجب استخدام Number.isNaN() أو isNaN() للتحقق من كونها NaN بدلًا من المقارنة المباشرة.",
      bestPractices: ["استخدم Number.isNaN(value) للتحقق الدقيق، وتجنّب مقارنة value === NaN التي تفشل دائمًا"],
      commonMistakes: ["محاولة التحقق من NaN عبر value === NaN مباشرة، وهي دائمًا false بغض النظر عن القيمة"],
      followups: [], similar: ["ما الفرق بين isNaN() العامة وNumber.isNaN()؟"]
    },
  ]
},

/* ======================================================================
   Python
   ====================================================================== */
{
  id: "python",
  name: "Python",
  icon: "🐍",
  intro: "بايثون من أكثر اللغات طلبًا في مقابلات الشركات الناشئة وشركات الذكاء الاصطناعي والباك-إند. المحاور غالبًا يختبر فهمك لإدارة الذاكرة وأنواع البيانات القابلة والغير قابلة للتغيير (mutable/immutable)، والبرمجة الكائنية، ومعالجة الاستثناءات، وميزات اللغة التعبيرية مثل List Comprehensions وGenerators.",
  concepts: [
    { title: "Mutable vs Immutable", body: "القوائم (list) والقواميس (dict) والمجموعات (set) قابلة للتغيير، بينما السلاسل النصية (str) والمجموعات الرقمية (tuple) والأرقام غير قابلة للتغيير. هذا الفرق يفسر سلوكيات مهمة عند تمرير المتغيرات كمعاملات للدوال." },
    { title: "List Comprehension", body: "صياغة موجزة لإنشاء قائمة جديدة من قائمة أخرى في سطر واحد، تُعتبر أكثر بايثونية (Pythonic) وغالبًا أسرع من حلقة for التقليدية المكافئة." },
    { title: "Generators وYield", body: "الدوال المولّدة (باستخدام yield) تنتج القيم واحدة تلو الأخرى عند الطلب (lazy evaluation) بدلًا من حساب كل القيم دفعة واحدة في الذاكرة، مما يوفر ذاكرة هائلة عند التعامل مع بيانات ضخمة." },
    { title: "Decorators", body: "دوال تُغلّف دالة أخرى لإضافة سلوك إضافي (مثل التسجيل logging أو قياس الوقت أو التحقق من الصلاحيات) دون تعديل كود الدالة الأصلية نفسها." },
    { title: "GIL (Global Interpreter Lock)", body: "قفل يمنع أكثر من خيط (thread) واحد من تنفيذ bytecode بايثون في نفس اللحظة داخل نفس العملية، مما يجعل Multiprocessing أفضل من Threading للمهام الحسابية الثقيلة (CPU-bound)." }
  ],
  questions: [
    {
      id: "py-1", title: "ما الفرق بين List وTuple في بايثون؟", difficulty: "easy", domain: "Python", type: "open", timeMinutes: 3,
      question: "متى تستخدم tuple بدلًا من list في بايثون؟ وما الفروقات الجوهرية بينهما؟",
      answer: "القائمة (list) قابلة للتغيير (mutable): يمكنك إضافة أو حذف أو تعديل عناصرها بعد الإنشاء. أما tuple فغير قابلة للتغيير (immutable) بعد إنشائها. عمليًا، هذا يجعل tuple أسرع قليلًا في المعالجة، وقابلة للاستخدام كمفتاح في dict أو كعنصر داخل set (بعكس list التي لا يمكن استخدامها كمفتاح لأنها mutable).",
      explanation: "استخدام tuple مناسب عندما تريد ضمان أن البيانات لن تتغير بالخطأ في مكان آخر من البرنامج، مثل إحداثيات (x, y) ثابتة أو صف بيانات من قاعدة بيانات لن يُعدَّل. أما list فمناسبة عندما تتوقع أن تحتاج لإضافة أو حذف عناصر باستمرار مثل قائمة مهام قابلة للتعديل.",
      example: "coordinates = (10, 20)   # tuple - لن تتغير\ntasks = ['كتابة كود', 'مراجعة']  # list - قابلة للتعديل\ntasks.append('نشر')  # صحيح\n# coordinates[0] = 15  # TypeError: tuples غير قابلة للتعديل",
      bestPractices: ["استخدم tuple للبيانات الثابتة المرتبطة ببعضها مثل الإحداثيات أو RGB colors", "استخدم namedtuple عندما تريد وضوحًا أكبر في أسماء الحقول"],
      commonMistakes: ["استخدام list في كل مكان دون تفكير حتى عندما تكون البيانات لا يجب أن تتغير منطقيًا"],
      followups: ["ماذا لو احتوى tuple على عنصر list بداخله - هل يصبح قابلًا للتعديل جزئيًا؟"], similar: ["ما هو namedtuple ومتى يُستخدم؟"]
    },
    {
      id: "py-2", title: "اشرح List Comprehension مع مثال", difficulty: "easy", domain: "Python", type: "open", timeMinutes: 3,
      question: "ما هو List Comprehension في بايثون، وكيف يقارن بحلقة for التقليدية؟",
      answer: "List Comprehension صياغة مختصرة لبناء قائمة جديدة اعتمادًا على قائمة أو تكرارية (iterable) موجودة، مع إمكانية تطبيق شرط تصفية وتحويل في سطر واحد، بالصيغة [تعبير for عنصر in تكرارية if شرط].",
      explanation: "بالإضافة إلى إيجازها، تُعتبر List Comprehension غالبًا أسرع تنفيذًا من حلقة for المكافئة لأن بايثون تُحسّنها داخليًا على مستوى bytecode، وتُعتبر أسلوبًا 'بايثونيًا' (Pythonic) يُفضّله المحاورون كدليل على إلمام المرشح بأسلوب اللغة الاصطلاحي وليس فقط ترجمة حرفية من لغات أخرى.",
      example: "# الطريقة التقليدية\nsquares = []\nfor n in range(10):\n    if n % 2 == 0:\n        squares.append(n ** 2)\n\n# List Comprehension المكافئة\nsquares = [n ** 2 for n in range(10) if n % 2 == 0]",
      bestPractices: ["استخدمها للتحويلات البسيطة، وتجنبها إذا أصبح التعبير معقدًا لدرجة تُضعف القراءة"],
      commonMistakes: ["تعشيش (nesting) أكثر من مستويين من List Comprehension في سطر واحد مما يجعل الكود صعب القراءة"],
      followups: ["كيف تكتب Dictionary Comprehension أو Set Comprehension بنفس الأسلوب؟"], similar: ["ما الفرق بين map/filter وList Comprehension من ناحية الأداء والقراءة؟"]
    },
    {
      id: "py-3", title: "ما الفرق بين Generator وList العادية؟", difficulty: "medium", domain: "Python", type: "open", timeMinutes: 4,
      question: "ما هو الـ Generator في بايثون (باستخدام yield)، وما ميزته الأساسية على إرجاع list كاملة؟",
      answer: "الـ Generator هو دالة تستخدم yield بدلًا من return لإرجاع قيمها، وينتج القيم واحدة تلو الأخرى عند الطلب فقط (lazy evaluation)، بدلًا من حساب وتخزين كل القيم في الذاكرة دفعة واحدة كما تفعل list عادية. هذا يجعله أكثر كفاءة بشكل هائل من ناحية استهلاك الذاكرة عند التعامل مع بيانات كبيرة جدًا أو تدفقات لا نهائية.",
      explanation: "الفرق العملي الحاسم: دالة تُرجع list لملايين الأرقام تحسب وتخزّن كل رقم فورًا في الذاكرة قبل إرجاع أي شيء، بينما Generator مكافئ يحسب رقمًا واحدًا فقط في كل مرة يُطلب فيها next()، مما يجعل استهلاك الذاكرة ثابتًا بغض النظر عن حجم البيانات الكلي. لهذا السبب تعتمد أدوات معالجة البيانات الضخمة على المولّدات لمعالجة ملفات أكبر من الذاكرة المتاحة.",
      example: "def squares_list(n):      # يحسب كل شيء فورًا في الذاكرة\n    return [i**2 for i in range(n)]\n\ndef squares_gen(n):       # ينتج قيمة واحدة عند الطلب فقط\n    for i in range(n):\n        yield i**2\n\ngen = squares_gen(1_000_000)  # لا يُحسب شيء بعد حتى الآن\nnext(gen)  # يُحسب 0 فقط الآن",
      bestPractices: ["استخدم generator expressions (n**2 for n in range(x)) بدلًا من list comprehension عندما لا تحتاج كل القيم في الذاكرة دفعة واحدة"],
      commonMistakes: ["محاولة استخدام len() على generator (غير مدعوم لأنه لا يعرف طوله مسبقًا)", "استهلاك generator مرتين ظنًا أنه يعمل كـ list قابلة لإعادة التكرار"],
      followups: ["كيف يعمل yield from لتفويض التوليد لدالة generator أخرى؟"], similar: ["ما هو الفرق بين iterator وiterable في بايثون؟"]
    },
    {
      id: "py-4", title: "كيف تتعامل مع الاستثناءات في بايثون؟", difficulty: "medium", domain: "Python", type: "open", timeMinutes: 4,
      question: "اشرح كيفية استخدام try/except/else/finally في بايثون، ودور كل جزء منها.",
      answer: "try يحتوي الكود الذي قد يُطلق خطأ. except يلتقط نوعًا محددًا من الاستثناءات ويعالجه دون إيقاف البرنامج بالكامل. else (اختياري) يُنفَّذ فقط إذا لم يحدث أي استثناء داخل try. أما finally فيُنفَّذ دائمًا بغض النظر عن حدوث استثناء أم لا، وهو المكان المثالي لتحرير الموارد مثل إغلاق ملف أو اتصال قاعدة بيانات.",
      explanation: "من أفضل الممارسات التقاط أنواع استثناءات محددة (مثل ValueError أو FileNotFoundError) بدلًا من except: عام يلتقط كل شيء، لأن الالتقاط العام قد يخفي أخطاء برمجية حقيقية (مثل خطأ إملائي في اسم متغير) ويجعل تصحيح الأخطاء أصعب بكثير لاحقًا.",
      example: "try:\n    result = 10 / int(user_input)\nexcept ZeroDivisionError:\n    print('لا يمكن القسمة على صفر')\nexcept ValueError:\n    print('يجب إدخال رقم صحيح')\nelse:\n    print(f'الناتج: {result}')\nfinally:\n    print('انتهت العملية')  # يُنفَّذ دائمًا",
      bestPractices: ["التقط استثناءات محددة دائمًا وليس except: عامًا", "استخدم finally لتحرير الموارد، أو الأفضل استخدام with statement عند الإمكان"],
      commonMistakes: ["استخدام except: بدون تحديد النوع مما يُخفي أخطاء برمجية غير متوقعة", "نسيان أن else تُنفَّذ فقط عند عدم وجود استثناء، والخلط بينها وبين وضع الكود داخل try مباشرة"],
      followups: ["ما الفرق بين raise وraise Exception('msg') from original_error؟", "كيف تُنشئ استثناء مخصصًا (custom exception) خاصًا بتطبيقك؟"],
      similar: ["ما هو context manager (with statement) وكيف يرتبط بمعالجة الأخطاء؟"]
    },
    {
      id: "py-5", title: "ما هو Decorator في بايثون؟", difficulty: "hard", domain: "Python", type: "open", timeMinutes: 5,
      question: "اشرح مفهوم Decorators في بايثون مع مثال عملي بسيط، وما الفائدة العملية منها؟",
      answer: "الـ Decorator هو دالة تأخذ دالة أخرى كمعامل، وتُعيد دالة جديدة (غالبًا) تُغلّف الدالة الأصلية بسلوك إضافي قبل أو بعد تنفيذها، دون الحاجة لتعديل كود الدالة الأصلية نفسها إطلاقًا. تُستخدم بصيغة @decorator_name فوق تعريف الدالة مباشرة.",
      explanation: "الاستخدامات العملية الشائعة تشمل: قياس زمن تنفيذ دالة، تسجيل (logging) كل استدعاء، التحقق من صلاحيات المستخدم قبل تنفيذ دالة (كما في Flask مع @login_required)، أو التخزين المؤقت (caching) نتائج دالة عبر @functools.lru_cache. الفائدة الجوهرية هي فصل الاهتمامات (Separation of Concerns): منطق القياس أو التسجيل يبقى منفصلًا تمامًا عن منطق العمل الأساسي للدالة.",
      example: "import time\nimport functools\n\ndef measure_time(func):\n    @functools.wraps(func)\n    def wrapper(*args, **kwargs):\n        start = time.time()\n        result = func(*args, **kwargs)\n        print(f'{func.__name__} استغرقت {time.time()-start:.4f}s')\n        return result\n    return wrapper\n\n@measure_time\ndef slow_function():\n    time.sleep(1)\n\nslow_function()  # يطبع الوقت المستغرق تلقائيًا",
      bestPractices: ["استخدم functools.wraps دائمًا داخل الـ decorator للحفاظ على اسم ووثائق (docstring) الدالة الأصلية"],
      commonMistakes: ["نسيان functools.wraps فتفقد الدالة المُزخرفة اسمها الأصلي عند فحصها (مما يعقّد التصحيح والتوثيق التلقائي)"],
      followups: ["كيف تكتب decorator يقبل معاملات إضافية مثل @retry(times=3)؟"], similar: ["كيف تعمل @property وما الفرق بينها وبين decorator عادي؟"]
    },
    {
      id: "py-mcq-1", title: "ما ناتج طباعة [1,2,3] * 2 في بايثون؟", difficulty: "easy", domain: "Python", type: "mcq", timeMinutes: 1,
      question: "ما ناتج تنفيذ [1, 2, 3] * 2 في بايثون؟",
      options: ["[2, 4, 6]", "[1, 2, 3, 1, 2, 3]", "خطأ TypeError", "[1, 2, 3, 2]"], correctIndex: 1,
      answer: "[1, 2, 3, 1, 2, 3]",
      explanation: "عامل * مع list ورقم صحيح يكرر عناصر القائمة ذلك العدد من المرات ويدمجها في قائمة واحدة، وليس ضربًا رياضيًا لكل عنصر كما قد يُظن للوهلة الأولى (لعمل ذلك تحتاج List Comprehension مثل [x*2 for x in [1,2,3]]).",
      bestPractices: ["استخدم List Comprehension إن أردت ضرب كل عنصر رياضيًا، وليس عامل * مباشرة على القائمة"],
      commonMistakes: ["الخلط بين تكرار القائمة وضرب كل عنصر فيها رياضيًا"],
      followups: [], similar: ["ماذا يحدث مع 'ab' * 3 على سلسلة نصية؟"]
    },
    {
      id: "py-mcq-2", title: "أي دالة تُستخدم لدمج قاموسين في بايثون 3.9+؟", difficulty: "medium", domain: "Python", type: "mcq", timeMinutes: 1,
      question: "في بايثون 3.9 فما فوق، أي عامل يدمج قاموسين (dict) في قاموس جديد؟",
      options: ["dict1 & dict2", "dict1 | dict2", "dict1 + dict2", "dict1 * dict2"], correctIndex: 1,
      answer: "dict1 | dict2",
      explanation: "منذ بايثون 3.9، أصبح عامل | مدعومًا مباشرة على القواميس لدمجها في قاموس جديد، بحيث تفوز قيم dict2 عند تكرار نفس المفتاح في كليهما. قبل هذا الإصدار كان يجب استخدام {**dict1, **dict2} أو dict1.update(dict2).",
      bestPractices: ["استخدم dict1 | dict2 في المشاريع الحديثة لوضوحها، أو {**dict1, **dict2} لدعم إصدارات أقدم"],
      commonMistakes: ["محاولة استخدام + بين القواميس ظنًا أنه يعمل كما في القوائم أو النصوص"],
      followups: ["ما الفرق بين |= وupdate() للدمج داخل نفس القاموس بدلًا من إنشاء واحد جديد؟"], similar: ["كيف تدمج قائمتين في بايثون؟"]
    },
    {
      id: "py-tf-1", title: "صح أو خطأ: السلاسل النصية (str) في بايثون غير قابلة للتغيير", difficulty: "easy", domain: "Python", type: "tf", timeMinutes: 1,
      question: "صح أم خطأ: السلاسل النصية (strings) في بايثون immutable، أي لا يمكن تعديل حرف واحد بداخلها مباشرة بعد الإنشاء.",
      isTrue: true,
      answer: "صح.",
      explanation: "أي عملية 'تعديل' ظاهرية على سلسلة نصية في بايثون (مثل s.replace() أو s.upper()) تُنشئ في الحقيقة سلسلة جديدة تمامًا في الذاكرة وتُعيدها، دون تعديل السلسلة الأصلية. محاولة s[0] = 'A' مباشرة تُطلق TypeError لأن السلاسل immutable تمامًا مثل tuple.",
      bestPractices: ["استخدم join() لبناء سلاسل نصية طويلة في حلقة بدلًا من += المتكرر، لتفادي إنشاء نسخ وسيطة كثيرة غير ضرورية"],
      commonMistakes: ["استخدام += داخل حلقة كبيرة لبناء نص طويل، مما يخلق أداءً سيئًا بسبب إنشاء نسخة جديدة في كل مرة"],
      followups: [], similar: ["ما الفرق بين str وbytes في بايثون؟"]
    },
    {
      id: "py-6", title: "ما الفرق بين *args و**kwargs؟", difficulty: "medium", domain: "Python", type: "open", timeMinutes: 3,
      question: "اشرح استخدام *args و**kwargs في تعريف دوال بايثون التي تقبل عددًا متغيرًا من المعاملات.",
      answer: "*args تسمح للدالة بقبول عدد غير محدد من المعاملات الموضعية (positional arguments)، وتُجمَّع داخليًا في tuple. **kwargs تسمح بقبول عدد غير محدد من المعاملات المُسمّاة (keyword arguments)، وتُجمَّع داخليًا في dict، بحيث يكون كل مفتاح هو اسم المعامل وقيمته هي القيمة المُمرَّرة.",
      explanation: "هذه الصياغة مفيدة جدًا عند كتابة دوال عامة (wrapper functions) لا تعرف مسبقًا عدد أو أسماء المعاملات التي سيُمررها المستخدم، مثل decorators تحتاج تمرير أي معاملات تُمرَّر للدالة الأصلية دون تحديدها مسبقًا. الأسماء 'args' و'kwargs' مجرد اصطلاح شائع (convention)؛ العلامتان * و** هما اللتان تحملان المعنى الفعلي، ويمكن تسميتها بأي اسم آخر.",
      example: "def greet(*args, **kwargs):\n    print(args)    # tuple: ('مرحبا', 'أهلا')\n    print(kwargs)  # dict: {'name': 'سارة', 'age': 28}\n\ngreet('مرحبا', 'أهلا', name='سارة', age=28)",
      bestPractices: ["استخدم *args/**kwargs في decorators ودوال wrapper عامة، لكن فضّل معاملات محددة الاسم في دوال API عادية لوضوح أكبر"],
      commonMistakes: ["الإفراط في استخدام **kwargs في دوال API عامة يستخدمها مطورون آخرون، مما يُخفي المعاملات الفعلية المتوقعة ويُصعّب فهم الاستخدام الصحيح دون قراءة التوثيق"],
      followups: ["كيف تمرر *args و**kwargs معًا لدالة أخرى داخل decorator؟"], similar: ["ما هو Unpacking Operator (* و**) عند استدعاء دالة وليس فقط عند تعريفها؟"]
    },
    {
      id: "py-7", title: "ما الفرق بين Shallow Copy وDeep Copy؟", difficulty: "medium", domain: "Python", type: "open", timeMinutes: 4,
      question: "ما الفرق بين copy.copy() وcopy.deepcopy() عند نسخ بنية بيانات متداخلة في بايثون؟",
      answer: "copy.copy() (النسخ السطحي) يُنشئ كائنًا جديدًا في المستوى الأول فقط، لكن أي عناصر متداخلة بداخله (مثل قائمة داخل قائمة) تبقى مرجعًا مشتركًا مع النسخة الأصلية؛ تعديل عنصر متداخل عبر النسخة الجديدة يؤثر على الأصل أيضًا. copy.deepcopy() (النسخ العميق) يُنشئ نسخة مستقلة تمامًا وبشكل تكراري لكل مستوى من التداخل، بحيث لا تشترك النسخة الجديدة بأي مرجع مع الأصل مهما كان عمق التداخل.",
      explanation: "المشكلة الشائعة: نسخ قائمة تحتوي قوائم فرعية عبر list(original) أو original[:] أو copy.copy() يبدو أنه أنشأ 'نسخة مستقلة'، لكن تعديل عنصر داخل إحدى القوائم الفرعية سيؤثر فجأة على النسخة الأصلية أيضًا، لأن القوائم الفرعية نفسها لم تُنسخ، فقط القائمة الخارجية. هذا يُفاجئ كثيرًا من المبرمجين حتى المتمرسين، وسبب شائع لأخطاء صعبة التتبع.",
      example: "import copy\noriginal = [[1, 2], [3, 4]]\n\nshallow = copy.copy(original)\nshallow[0].append(99)\nprint(original)  # [[1, 2, 99], [3, 4]] - تأثر الأصل!\n\ndeep = copy.deepcopy(original)\ndeep[0].append(100)\nprint(original)  # لم يتأثر - نسخة مستقلة تمامًا",
      bestPractices: ["استخدم copy.deepcopy() عند التعامل مع بنى بيانات متداخلة تحتاج استقلالية كاملة عن الأصل"],
      commonMistakes: ["افتراض أن list(original) أو original[:] ينسخان نسخًا عميقًا كاملاً، بينما هما نسخ سطحي فقط للمستوى الأول"],
      followups: ["كيف يؤثر هذا الفرق عند تمرير قوائم كمعاملات افتراضية (default arguments) للدوال؟"], similar: ["ما هي مشكلة Mutable Default Arguments الشهيرة في بايثون؟"]
    },
    {
      id: "py-mcq-3", title: "أي دالة تُستخدم للتحقق من نوع كائن في بايثون؟", difficulty: "easy", domain: "Python", type: "mcq", timeMinutes: 1,
      question: "أي دالة في بايثون تُستخدم للتحقق مما إذا كان كائن معيّن ينتمي لنوع أو فئة محددة؟",
      options: ["type() فقط", "isinstance()", "typeof()", "instanceof()"], correctIndex: 1,
      answer: "isinstance()",
      explanation: "isinstance(obj, ClassName) هي الطريقة المُفضَّلة للتحقق من النوع لأنها تأخذ الوراثة بعين الاعتبار (تُرجع True حتى لو كان obj من فئة فرعية ترث من ClassName)، بعكس type(obj) == ClassName التي تفحص تطابقًا حرفيًا فقط ولا تعترف بالفئات الفرعية كأنواع صالحة. typeof() وinstanceof() ليستا دوال بايثون (الأخيرة من JavaScript).",
      bestPractices: ["استخدم isinstance() دائمًا بدلًا من مقارنة type() المباشرة للتحقق من الأنواع بشكل صحيح مع الوراثة"],
      commonMistakes: ["استخدام type(obj) == ClassName الذي يفشل بشكل خاطئ مع الفئات الفرعية الصحيحة منطقيًا"],
      followups: [], similar: ["كيف تتحقق من أن كائن قابل للتكرار (iterable) دون معرفة نوعه بالضبط (Duck Typing)؟"]
    },
  ]
},

/* ======================================================================
   Git & GitHub
   ====================================================================== */
{
  id: "git",
  name: "Git",
  icon: "🌿",
  intro: "Git ليس مجرد أداة تُستخدم يوميًا، بل موضوع مقابلة قائم بذاته خصوصًا للمناصب التي تتطلب عملًا جماعيًا مكثفًا. الأسئلة هنا تركز على فهم الفروع (branches)، حل التعارضات (merge conflicts)، والفرق بين merge وrebase، والتراجع الآمن عن الأخطاء.",
  concepts: [
    { title: "Merge vs Rebase", body: "merge يدمج تاريخ فرعين مع الحفاظ على كليهما وإنشاء commit دمج جديد، بينما rebase يعيد كتابة تاريخ الفرع الحالي فوق الفرع الآخر مباشرة لإنتاج تاريخ خطي أنظف، لكن يجب تجنبه على فروع مشتركة يعمل عليها آخرون." },
    { title: "منطقة التهيئة (Staging Area)", body: "git add ينقل التغييرات من مجلد العمل إلى منطقة التهيئة (index)، وهي خطوة وسيطة تسمح لك باختيار أي التغييرات بالضبط ستدخل في الـ commit التالي." },
    { title: "حل تعارضات الدمج (Merge Conflicts)", body: "تحدث عندما يعدّل فرعان نفس السطر في نفس الملف بطريقتين مختلفتين، ويتطلب حلها تدخلًا يدويًا لتحديد النسخة النهائية الصحيحة." },
    { title: "git reset مقابل git revert", body: "reset يعيد كتابة التاريخ ويحذف commits (خطر على الفروع المشتركة)، بينما revert يُنشئ commit جديد يعكس تأثير commit سابق دون حذف أي تاريخ، وهو الأكثر أمانًا على الفروع المشتركة." }
  ],
  questions: [
    {
      id: "git-1", title: "ما الفرق بين git merge وgit rebase؟", difficulty: "medium", domain: "Git", type: "open", timeMinutes: 4,
      question: "متى تستخدم git merge ومتى تستخدم git rebase عند دمج فرع feature في main؟",
      answer: "git merge يأخذ تاريخ الفرعين كما هو ويُنشئ commit جديد خاص يجمعهما معًا (merge commit)، محافظًا على السجل الكامل لكيفية تطور كل فرع بالضبط. أما git rebase فيأخذ commits الفرع الحالي ويُعيد 'إلصاقها' فوق أحدث نقطة في الفرع الآخر، منتجًا تاريخًا خطيًا نظيفًا وكأن العمل تم بالتسلسل منذ البداية دون تفرّع ظاهر.",
      explanation: "القاعدة الذهبية: لا تُعِد كتابة (rebase) تاريخ فرع يعمل عليه آخرون بالفعل ودفعوه (pushed) للمستودع المشترك، لأن ذلك يغيّر معرّفات الـ commits (hashes) ويسبب فوضى وتعارضات لكل من سحب النسخة القديمة. rebase مناسب جدًا لتنظيف تاريخ فرعك المحلي الخاص قبل فتح Pull Request، بينما merge أكثر أمانًا للدمج النهائي في الفروع المشتركة.",
      example: "# على فرعك المحلي فقط، لتنظيف التاريخ قبل الدمج:\ngit checkout feature-branch\ngit rebase main\n\n# للدمج النهائي في فرع مشترك:\ngit checkout main\ngit merge feature-branch",
      bestPractices: ["لا تُعِد كتابة تاريخ مُشترك تم دفعه بالفعل لفريق آخر", "استخدم rebase لتنظيف تاريخك المحلي الخاص فقط قبل فتح Pull Request"],
      commonMistakes: ["تنفيذ git rebase على فرع main المشترك مباشرة مما يكسر تاريخ الجميع", "الخلط بين git pull العادي وgit pull --rebase"],
      followups: ["ماذا يحدث عند تعارض (conflict) أثناء rebase، وكيف يختلف حله عن تعارض merge؟", "ما هو Interactive Rebase (rebase -i) واستخداماته؟"],
      similar: ["ما هو Fast-Forward Merge؟", "كيف تستخدم git cherry-pick؟"]
    },
    {
      id: "git-2", title: "كيف تحل تعارض دمج (Merge Conflict)؟", difficulty: "medium", domain: "Git", type: "scenario", timeMinutes: 4,
      question: "سيناريو: نفّذت git merge وظهرت رسالة CONFLICT في ملف معيّن. اشرح خطوات حل هذا التعارض بشكل صحيح.",
      answer: "أولًا، افتح الملف المتعارض وستجد علامات خاصة يضيفها Git: <<<<<<< HEAD تُظهر نسختك الحالية، ثم ======= يفصل، ثم نسخة الفرع الآخر، وأخيرًا >>>>>>> اسم الفرع. يجب عليك تحديد يدويًا أي المحتوى (أو مزيج منهما) هو الصحيح نهائيًا، ثم حذف جميع علامات <<<<<<< و======= و>>>>>>> تمامًا، ثم تنفيذ git add على الملف المُصلَح، وأخيرًا git commit لإكمال الدمج.",
      explanation: "الخطأ الشائع جدًا للمبتدئين هو نسيان حذف علامات <<<<<<< و======= بعد اختيار المحتوى الصحيح، فيبقى الكود يحتوي نصًا غريبًا يكسر البرنامج فورًا دون أن يظهر كخطأ Git، بل كخطأ في الكود نفسه عند التشغيل. من الأفضل استخدام أداة دمج بصرية (مثل تلك المدمجة في VS Code) التي تعرض 'Accept Current' و'Accept Incoming' و'Accept Both' بأزرار مباشرة بدلًا من التعديل اليدوي في نص خام.",
      example: "<<<<<<< HEAD\nconst greeting = 'مرحبًا';\n=======\nconst greeting = 'أهلاً وسهلاً';\n>>>>>>> feature-branch\n\n# بعد الحل يدويًا (اختيار نسخة أو دمج الاثنين):\nconst greeting = 'أهلاً وسهلاً';\n\n# ثم:\n# git add <file>\n# git commit",
      bestPractices: ["استخدم أداة دمج بصرية (VS Code، GitKraken) بدلًا من التعديل اليدوي للنص الخام", "اختبر الكود بعد حل التعارض قبل الـ commit للتأكد من عدم وجود أخطاء منطقية"],
      commonMistakes: ["نسيان حذف علامات <<<<<<< و======= و>>>>>>> بعد الحل", "الـ commit دون اختبار الكود بعد حل التعارض"],
      followups: ["كيف تُلغي عملية merge كاملة إن تعقّدت التعارضات (git merge --abort)؟"], similar: ["كيف تحل تعارض أثناء git rebase تحديدًا؟"]
    },
    {
      id: "git-3", title: "ما الفرق بين git reset وgit revert؟", difficulty: "medium", domain: "Git", type: "open", timeMinutes: 3,
      question: "متى تستخدم git revert بدلًا من git reset للتراجع عن commit سابق؟",
      answer: "git reset يعيد كتابة التاريخ فعليًا عبر نقل مؤشر الفرع لنقطة سابقة، وقد يحذف commits نهائيًا (خصوصًا مع --hard)؛ هذا خطر جدًا إذا كانت هذه الـ commits موجودة بالفعل على مستودع مشترك دفعه آخرون. أما git revert فينشئ commit جديدًا تمامًا يعكس (يلغي) تأثير commit سابق دون حذف أي تاريخ موجود، وهو الخيار الآمن دائمًا على الفروع المشتركة لأنه يحافظ على السجل الكامل.",
      explanation: "قاعدة عملية بسيطة: استخدم reset فقط على commits محلية لم تُدفع بعد لأحد (لتنظيف تاريخك الخاص)، واستخدم revert دائمًا للتراجع عن أي شيء تم دفعه بالفعل ويستخدمه آخرون، لأن revert لا يغيّر معرّفات commits الموجودة ولا يكسر عمل أي شخص آخر سحب تلك التغييرات.",
      example: "# آمن على فرع مشترك: ينشئ commit جديد يلغي التغيير\ngit revert <commit-hash>\n\n# خطر إن كان الـ commit مدفوعًا بالفعل لآخرين: يحذف التاريخ\ngit reset --hard <commit-hash>",
      bestPractices: ["استخدم git revert على أي فرع مشترك دون استثناء", "استخدم git reset --soft (وليس --hard) عندما تحتاج فقط إعادة ترتيب commits محلية دون فقدان التغييرات"],
      commonMistakes: ["تنفيذ git reset --hard على فرع مشترك مما يحذف عمل الآخرين عند دفعه بالقوة (force push)"],
      followups: ["ما الفرق بين reset --soft وreset --mixed وreset --hard تحديدًا؟"], similar: ["كيف يعمل git reflog لاستعادة commits بدت 'مفقودة'؟"]
    },
    {
      id: "git-mcq-1", title: "أي أمر يعرض تاريخ الـ commits بشكل مختصر؟", difficulty: "easy", domain: "Git", type: "mcq", timeMinutes: 1,
      question: "أي أمر Git يعرض تاريخ الـ commits في سطر واحد لكل commit؟",
      options: ["git log", "git log --oneline", "git status", "git diff"], correctIndex: 1,
      answer: "git log --oneline",
      explanation: "git log العادي يعرض تفاصيل كاملة لكل commit (المؤلف، التاريخ، الرسالة الكاملة) على عدة أسطر، بينما --oneline يختصر كل commit لسطر واحد فقط يحتوي معرّف مختصر (hash) ورسالة الـ commit، وهو مفيد جدًا لمسح تاريخ طويل بسرعة.",
      bestPractices: ["استخدم git log --oneline --graph لعرض بصري لتفرّع الفروع أيضًا"],
      commonMistakes: [], followups: ["كيف تعرض فقط commits ملف معيّن؟"], similar: ["ما الفرق بين git status وgit log؟"]
    },
    {
      id: "git-tf-1", title: "صح أو خطأ: git pull يعادل git fetch ثم git merge", difficulty: "medium", domain: "Git", type: "tf", timeMinutes: 1,
      question: "صح أم خطأ: تنفيذ git pull يُكافئ تمامًا تنفيذ git fetch متبوعًا بـ git merge على الفرع المتتبَّع.",
      isTrue: true,
      answer: "صح.",
      explanation: "git fetch يجلب فقط آخر التغييرات من المستودع البعيد دون دمجها في فرعك الحالي، بينما git pull ينفّذ fetch أولًا ثم merge تلقائيًا مباشرة بعده. هذا يفسر لماذا يُفضّل بعض المطورين المتمرسين استخدام fetch ثم مراجعة التغييرات يدويًا قبل الدمج، بدلًا من pull المباشر الذي قد يُحدث دمجًا غير متوقع فورًا.",
      bestPractices: ["استخدم git fetch ثم راجع التغييرات (git log origin/main) قبل الدمج في المشاريع الحساسة"],
      commonMistakes: ["افتراض أن git pull 'يُحدّث' الكود فقط دون فهم أنه ينفّذ دمجًا فعليًا قد يسبب تعارضات"],
      followups: [], similar: ["ما الفرق بين git pull وgit pull --rebase؟"]
    },
    {
      id: "git-4", title: "ما هو git stash ومتى تستخدمه؟", difficulty: "easy", domain: "Git", type: "open", timeMinutes: 3,
      question: "ما فائدة أمر git stash، ومتى تحتاجه أثناء العمل اليومي؟",
      answer: "git stash يحفظ التغييرات غير المُثبَّتة (uncommitted) في مجلد العمل ومنطقة التهيئة مؤقتًا جانبًا، ويُعيد مجلد العمل لحالته النظيفة كما آخر commit، دون الحاجة لعمل commit مؤقت غير مكتمل. لاحقًا يمكن استرجاع تلك التغييرات المحفوظة عبر git stash pop أو git stash apply.",
      explanation: "الاستخدام النموذجي: تعمل على ميزة جديدة ولم تنتهِ بعد، وفجأة تحتاج التبديل السريع لفرع آخر لإصلاح خطأ عاجل (hotfix)؛ بدلًا من عمل commit غير مكتمل ومربك بعنوان مثل 'wip'، تستخدم git stash لحفظ عملك جانبًا مؤقتًا، تُبدّل للفرع الآخر وتُصلح الخطأ، ثم تعود لفرعك الأصلي وتسترجع عملك المحفوظ بـ git stash pop تمامًا كما تركته.",
      example: "git stash                  # حفظ التغييرات الحالية جانبًا\ngit checkout hotfix-branch  # التبديل لفرع آخر بمجلد عمل نظيف\n# ... إصلاح الخطأ العاجل والـ commit ...\ngit checkout original-branch\ngit stash pop               # استرجاع العمل المحفوظ سابقًا",
      bestPractices: ["استخدم git stash push -m 'وصف واضح' لتسمية كل stash عند وجود أكثر من واحد محفوظ في نفس الوقت"],
      commonMistakes: ["نسيان وجود stash محفوظ منذ فترة طويلة (git stash list لمراجعة كل المحفوظات المتراكمة)"],
      followups: ["ما الفرق بين git stash pop وgit stash apply؟"], similar: ["كيف تسترجع ملفًا واحدًا فقط من stash بدلًا من كل التغييرات؟"]
    },
    {
      id: "git-5", title: "ما هو Detached HEAD في Git؟", difficulty: "medium", domain: "Git", type: "open", timeMinutes: 3,
      question: "ماذا يعني ظهور رسالة 'You are in detached HEAD state' في Git، وكيف تتعامل معها بأمان؟",
      answer: "في الحالة الطبيعية، يشير HEAD لأحدث commit في فرع معيّن (مثل main)، وأي commit جديد يتحرك ذلك الفرع للأمام معه. الحالة المنفصلة (Detached HEAD) تحدث عندما تُنفّذ git checkout مباشرة على commit hash محدد أو tag بدلاً من اسم فرع؛ هنا يشير HEAD لذلك الـ commit تحديدًا وليس لأي فرع، وأي commits جديدة تُنشئها في هذه الحالة لا تنتمي لأي فرع ويمكن أن تُفقَد نهائيًا إذا بدّلت لفرع آخر دون حفظها.",
      explanation: "هذه الحالة ليست خطأً بحد ذاتها؛ مفيدة جدًا لاستكشاف تاريخ قديم أو اختبار commit معيّن مؤقتًا دون التأثير على أي فرع. لكن الخطر يكمن في نسيان أنك في هذه الحالة والاستمرار بعمل commits جديدة ظنًا أنها تُضاف لفرعك المعتاد؛ إذا بدّلت لفرع آخر لاحقًا، تصبح تلك الـ commits 'يتيمة' (orphaned) ومعرّضة للحذف النهائي عبر garbage collection ما لم تُنشئ فرعًا جديدًا يشير إليها أولاً.",
      example: "git checkout a1b2c3d   # ينتقل لحالة detached HEAD\n# إن أردت الاحتفاظ بأي عمل جديد هنا:\ngit checkout -b new-branch-name  # يحوّل العمل الحالي لفرع حقيقي آمن",
      bestPractices: ["إذا أنشأت commits مهمة وأنت في detached HEAD، أنشئ فرعًا جديدًا فورًا (git checkout -b) قبل التبديل لأي مكان آخر"],
      commonMistakes: ["الاستمرار بالعمل والـ commit في detached HEAD دون علم، ثم فقدان ذلك العمل عند التبديل لفرع آخر لاحقًا"],
      followups: ["كيف تستعيد commits 'يتيمة' فقدتها عبر git reflog؟"], similar: ["ما الفرق بين checkout tag وcheckout branch من ناحية HEAD؟"]
    },
    {
      id: "git-6", title: "ما هو git cherry-pick؟", difficulty: "medium", domain: "Git", type: "open", timeMinutes: 3,
      question: "ما فائدة أمر git cherry-pick، ومتى تستخدمه بدلاً من merge كامل بين فرعين؟",
      answer: "git cherry-pick <commit-hash> يأخذ commit واحدًا محددًا من فرع آخر، ويُطبّق نفس التغييرات الموجودة فيه على فرعك الحالي كـ commit جديد، دون الحاجة لدمج الفرع بأكمله بكل تاريخه. هذا مفيد جدًا عندما تحتاج فقط إصلاحًا واحدًا محددًا (hotfix) من فرع آخر، دون سحب كل التغييرات الأخرى غير ذات الصلة الموجودة في ذلك الفرع.",
      explanation: "مثال شائع: أصلحت خطأ حرجًا في فرع feature قيد التطوير، وتحتاج نفس الإصلاح فورًا في فرع production المستقر دون دمج بقية ميزات feature غير المكتملة بعد. cherry-pick يسمح بأخذ ذلك الـ commit المحدد فقط (الإصلاح) وتطبيقه مباشرة على production، بينما يبقى الفرعان مستقلين تمامًا عن أي شيء آخر.",
      example: "git checkout production\ngit cherry-pick a1b2c3d   # يأخذ فقط ذلك commit من فرع آخر ويطبقه هنا",
      bestPractices: ["استخدم cherry-pick لنقل إصلاحات محددة بين فروع مستقلة، وليس كبديل عام عن merge أو rebase لدمج فروع كاملة"],
      commonMistakes: ["استخدام cherry-pick بشكل متكرر لنقل عدة commits مترابطة منطقيًا، مما قد يخلق تاريخًا مبعثرًا؛ في تلك الحالة قد يكون merge أو rebase الفرع كاملاً أنسب"],
      followups: ["ماذا يحدث عند تعارض (conflict) أثناء cherry-pick، وكيف يُحل؟"], similar: ["ما الفرق بين cherry-pick ورebase من ناحية عدد الـ commits المتأثرة؟"]
    },
    {
      id: "git-mcq-2", title: "ما وظيفة ملف .gitignore؟", difficulty: "easy", domain: "Git", type: "mcq", timeMinutes: 1,
      question: "ما وظيفة ملف .gitignore في مستودع Git؟",
      options: ["حذف ملفات من المستودع نهائيًا", "منع Git من تتبع ملفات أو مجلدات معيّنة (مثل node_modules)", "تشفير محتوى المستودع", "دمج فروع تلقائيًا"], correctIndex: 1,
      answer: "منع Git من تتبع ملفات أو مجلدات معيّنة.",
      explanation: ".gitignore يحتوي أنماطًا (patterns) لأسماء ملفات أو مجلدات يجب على Git تجاهلها تمامًا وعدم تتبعها أو اقتراح إضافتها عبر git add، مثل مجلدات الاعتماديات (node_modules)، ملفات البيئة الحساسة (.env)، أو ملفات مؤقتة تولّدها أدوات البناء. هذا يمنع تلويث المستودع بملفات ضخمة أو حساسة لا يجب رفعها لمستودع مشترك.",
      bestPractices: ["أضف .gitignore منذ اليوم الأول للمشروع، وتضمّن فيه ملفات البيئة الحساسة (.env) ومجلدات الاعتماديات دائمًا"],
      commonMistakes: ["إضافة .gitignore بعد رفع ملفات حساسة أو ضخمة بالفعل للمستودع؛ .gitignore يمنع التتبع المستقبلي فقط، ولا يحذف ملفات مُتتبَّعة بالفعل من التاريخ الموجود"],
      followups: [], similar: ["كيف تحذف ملفًا حساسًا رُفع بالخطأ من تاريخ Git بالكامل؟"]
    },
    {
      id: "git-7", title: "ما الفرق بين Pull Request وMerge مباشر؟", difficulty: "medium", domain: "Git", type: "scenario", timeMinutes: 4,
      question: "لماذا تعتمد الفرق البرمجية على Pull Requests (أو Merge Requests) بدلًا من الدمج المباشر لفروعها في main؟",
      answer: "Pull Request (PR) هو طلب رسمي لدمج تغييرات من فرع إلى آخر (عادة إلى main)، يُتيح لأعضاء الفريق مراجعة الكود (Code Review) والتعليق عليه ومناقشته قبل الدمج الفعلي، وربما تشغيل اختبارات آلية (CI) تتحقق من عدم كسر أي شيء، كل ذلك قبل أن تُصبح التغييرات جزءًا من الفرع الرئيسي. الدمج المباشر (merge دون PR) يتخطى كل هذه الخطوات الوقائية، فيدخل الكود لـ main فورًا دون أي مراجعة بشرية أو آلية.",
      explanation: "فائدة PR ليست تقنية بحتة في Git نفسه (فهي ميزة توفرها منصات مثل GitHub وGitLab وليست جزءًا من Git الأساسي)، بل تنظيمية: تضمن أن كل تغيير يمر بعين ثانية على الأقل قبل التأثير على الفرع الرئيسي الذي يعتمد عليه الجميع، وتوفر سجلًا موثقًا (تعليقات، نقاش) حول سبب كل تغيير مهم، وتسمح بربط اختبارات آلية تفشل الطلب تلقائيًا إن كسر الكود شيئًا.",
      bestPractices: ["اعتمد سياسة تتطلب مراجعة واحدة على الأقل (approval) قبل دمج أي PR في فرع main، حتى في الفرق الصغيرة"],
      commonMistakes: ["السماح بدمج مباشر لفرع main دون أي مراجعة في مشروع جماعي، مما يزيد مخاطر دخول أخطاء أو تصميم سيء دون أي رقابة"],
      followups: ["كيف تدمج CI/CD مع PRs لتشغيل اختبارات تلقائية قبل السماح بالدمج؟"], similar: ["ما هو Draft Pull Request ومتى يُستخدم؟"]
    },
    {
      id: "git-mcq-3", title: "أي أمر يعرض من كتب كل سطر في ملف وآخر تعديل عليه؟", difficulty: "medium", domain: "Git", type: "mcq", timeMinutes: 1,
      question: "أي أمر Git يعرض لكل سطر في ملف معيّن، آخر commit (ومؤلفه) الذي عدّل ذلك السطر تحديدًا؟",
      options: ["git log", "git blame", "git diff", "git show"], correctIndex: 1,
      answer: "git blame",
      explanation: "git blame <file> يعرض الملف سطرًا بسطر، مع توضيح آخر commit (والمؤلف والتاريخ) الذي عدّل كل سطر تحديدًا، وهو مفيد جدًا لفهم 'لماذا كُتب هذا السطر بهذه الطريقة' أو 'من يمكنني سؤاله عن هذا الجزء تحديدًا' عند مواجهة كود غير مألوف أو مشبوه.",
      bestPractices: ["استخدم git blame لفهم سياق سطر كود قبل تعديله، خصوصًا في كود قديم لم تكتبه أنت شخصيًا"],
      commonMistakes: ["تجاهل git blame والافتراضات الخاطئة حول سبب وجود كود معيّن، بدلًا من التحقق الفعلي من سياقه التاريخي"],
      followups: [], similar: ["كيف تستخدم git log -p لرؤية التغييرات الفعلية (diff) في تاريخ ملف معيّن؟"]
    },
  ]
},

/* ======================================================================
   Data Structures
   ====================================================================== */
{
  id: "data-structures",
  name: "Data Structures",
  icon: "🧱",
  intro: "هياكل البيانات هي جوهر أي مقابلة تقنية جادة، لأنها الأساس الذي تُبنى عليه كل خوارزمية. المحاور يريد أن يرى ليس فقط حفظ التعريفات، بل فهم متى تختار هيكلًا معينًا بناءً على التوازن بين تعقيد الوقت (Time Complexity) وتعقيد المساحة (Space Complexity) لعملية معينة.",
  concepts: [
    { title: "Array مقابل Linked List", body: "المصفوفة (Array) تخزّن العناصر في ذاكرة متجاورة مما يجعل الوصول العشوائي O(1)، بينما القائمة المرتبطة (Linked List) تخزّن العناصر في عقد منفصلة متصلة بمؤشرات، مما يجعل الإدراج والحذف في المنتصف أسرع لكن الوصول العشوائي O(n)." },
    { title: "Stack وQueue", body: "المكدس (Stack) يتبع مبدأ LIFO (آخر داخل، أول خارج) مثل زر التراجع Undo. الطابور (Queue) يتبع مبدأ FIFO (أول داخل، أول خارج) مثل طابور طباعة المستندات." },
    { title: "Hash Table (Hash Map)", body: "هيكل بيانات يخزّن أزواج مفتاح-قيمة، ويستخدم دالة تجزئة (hash function) لحساب موقع التخزين مباشرة، مما يجعل متوسط زمن البحث والإدراج والحذف O(1)." },
    { title: "Tree وBinary Search Tree", body: "الشجرة الثنائية للبحث تحافظ على ترتيب: كل عقدة يسارها أصغر منها وكل عقدة يمينها أكبر، مما يجعل البحث O(log n) في المتوسط إذا كانت الشجرة متوازنة." },
    { title: "Graph", body: "بنية من عقد (vertices) وحواف (edges) تُمثّل علاقات معقدة مثل الشبكات الاجتماعية أو خرائط الطرق، وتُستكشف عادة عبر خوارزميات BFS أو DFS." }
  ],
  questions: [
    {
      id: "ds-1", title: "ما الفرق بين Array وLinked List؟", difficulty: "easy", domain: "Data Structures", type: "open", timeMinutes: 4,
      question: "قارن بين Array وLinked List من ناحية تعقيد الوقت لعمليات الوصول والإدراج والحذف.",
      answer: "المصفوفة تُخزَّن في كتلة ذاكرة متجاورة، لذا الوصول لعنصر بفهرسه (index) هو O(1) لأن العنوان يُحسب مباشرة. لكن الإدراج أو الحذف في المنتصف يتطلب إزاحة كل العناصر التالية فيصبح O(n). القائمة المرتبطة تُخزَّن كعقد منفصلة، كل عقدة تحمل مؤشرًا للعقدة التالية، لذا الوصول لعنصر معيّن يتطلب المرور بكل العقد السابقة فيصبح O(n)، لكن الإدراج أو الحذف بمجرد معرفة موقع العقدة هو O(1) لأنه يتطلب فقط إعادة توجيه مؤشرين.",
      explanation: "الاختيار يعتمد على نمط الاستخدام الغالب: إذا كنت تحتاج وصولًا عشوائيًا متكررًا لعناصر بفهرسها (مثل مصفوفة صور معرض)، اختر Array. إذا كنت تحتاج إدراجًا وحذفًا متكررًا في بداية أو منتصف مجموعة بيانات ضخمة (مثل تنفيذ Undo History أو قائمة انتظار ديناميكية)، فقد تكون Linked List أفضل رغم بطء وصولها العشوائي.",
      example: "// Array: وصول سريع O(1)\nconst arr = [10, 20, 30];\nconsole.log(arr[1]); // 20 فورًا\n\n// Linked List: وصول O(n) لكن إدراج/حذف O(1) بموقع معروف\n// head -> {10} -> {20} -> {30} -> null",
      bestPractices: ["استخدم Array (أو ArrayList) كخيار افتراضي إلا وجود سبب واضح لاختيار Linked List", "انتبه لتكلفة إعادة تخصيص الذاكرة (resizing) عند نمو المصفوفات الديناميكية"],
      commonMistakes: ["افتراض أن Linked List 'أفضل دائمًا' للإدراج/الحذف دون احتساب أن الوصول لموقع الإدراج نفسه قد يكلف O(n)"],
      followups: ["ما هو Doubly Linked List وكيف يختلف عن Singly Linked List؟", "كيف تعمل المصفوفات الديناميكية (مثل ArrayList أو Python list) داخليًا عند إعادة التحجيم؟"],
      similar: ["ما هو Circular Linked List واستخداماته؟"]
    },
    {
      id: "ds-2", title: "اشرح Hash Table وكيف تتعامل مع التصادم (Collision)؟", difficulty: "medium", domain: "Data Structures", type: "open", timeMinutes: 5,
      question: "كيف يعمل Hash Table داخليًا، وكيف يتعامل مع حالة تصادم مفتاحين (collision) على نفس الموقع؟",
      answer: "يستخدم Hash Table دالة تجزئة (hash function) لتحويل المفتاح (key) إلى رقم يمثّل موقعًا (index) في مصفوفة داخلية، مما يجعل الوصول والإدراج والحذف بمتوسط O(1). التصادم يحدث عندما تُنتج دالة التجزئة نفس الموقع لمفتاحين مختلفين، ويُحل غالبًا بإحدى طريقتين: Separate Chaining حيث يخزّن كل موقع قائمة (أو شجرة) من كل العناصر التي تصادمت فيه، أو Open Addressing حيث يبحث الخوارزم عن أقرب موقع فارغ تالٍ بأسلوب معيّن (مثل linear probing).",
      explanation: "جودة دالة التجزئة تحدد الأداء الفعلي؛ دالة تجزئة سيئة تُنتج تصادمات كثيرة تحوّل الأداء من O(1) المتوسط إلى O(n) في أسوأ الحالات (عندما تتحول كل العناصر لقائمة واحدة مرتبطة في نفس الموقع). لهذا السبب تستخدم اللغات الحديثة مثل Java وPython دوال تجزئة مُحسَّنة جيدًا، بالإضافة لتقنية إعادة التحجيم (rehashing) التي تُعيد توزيع كل العناصر عندما يتجاوز معامل الحمل (load factor) نسبة معينة.",
      bestPractices: ["اختر دالة تجزئة توزّع المفاتيح بشكل متساوٍ لتقليل التصادمات", "راقب معامل الحمل (load factor) لتحديد متى تحتاج إعادة تحجيم الجدول"],
      commonMistakes: ["الاعتقاد بأن Hash Table دائمًا O(1) بالضبط، متجاهلين أسوأ حالة (worst case) الناتجة عن تصادمات كثيرة"],
      followups: ["ما الفرق بين HashMap وTreeMap في جافا من ناحية الترتيب؟", "كيف يُنفَّذ Hash Table في بايثون تحديدًا (dict)؟"],
      similar: ["ما هو Load Factor ومتى يحدث Rehashing؟"]
    },
    {
      id: "ds-3", title: "ما الفرق بين Stack وQueue؟", difficulty: "easy", domain: "Data Structures", type: "open", timeMinutes: 3,
      question: "اشرح الفرق بين Stack وQueue مع أمثلة واقعية لاستخدام كل منهما.",
      answer: "المكدس (Stack) يتبع مبدأ LIFO: آخر عنصر يُضاف (push) هو أول عنصر يُزال (pop)، تمامًا مثل كومة أطباق - تأخذ الطبق العلوي أولًا. الطابور (Queue) يتبع مبدأ FIFO: أول عنصر يُضاف (enqueue) هو أول عنصر يُزال (dequeue)، تمامًا مثل طابور بشري ينتظر دوره في مكان ما.",
      explanation: "أمثلة واقعية للـ Stack: زر التراجع Undo في محرر النصوص (آخر عملية تُلغى أولًا)، وCall Stack نفسه في تنفيذ البرامج (آخر دالة استُدعيت تنتهي أولًا). أمثلة واقعية للـ Queue: طابور طباعة المستندات (أول من طلب الطباعة يُطبع أولًا)، ومعالجة الطلبات في الخوادم (Task Queue)، وBFS في الرسوم البيانية الذي يعتمد على Queue تحديدًا (بعكس DFS الذي يعتمد على Stack).",
      example: "// Stack (باستخدام مصفوفة JS)\nconst stack = [];\nstack.push(1); stack.push(2);\nstack.pop(); // يُزيل 2 (آخر ما دخل)\n\n// Queue (باستخدام مصفوفة JS)\nconst queue = [];\nqueue.push(1); queue.push(2);\nqueue.shift(); // يُزيل 1 (أول ما دخل)",
      bestPractices: ["استخدم بنية بيانات مخصصة (deque) بدلًا من array.shift() في الإنتاج، لأن shift() على مصفوفة عادية هو O(n) وليس O(1)"],
      commonMistakes: ["استخدام array.shift()/unshift() ظنًا أنها O(1) في Queue حقيقي بينما هي فعليًا O(n) لأنها تُزيح كل العناصر"],
      followups: ["كيف تنفّذ Queue بكفاءة O(1) فعلية باستخدام مؤشرين (head/tail) أو linked list؟"], similar: ["ما هو Priority Queue وكيف يختلف عن Queue العادي؟"]
    },
    {
      id: "ds-mcq-1", title: "ما تعقيد البحث في Binary Search Tree متوازنة؟", difficulty: "medium", domain: "Data Structures", type: "mcq", timeMinutes: 1,
      question: "ما هو تعقيد الوقت (Time Complexity) للبحث عن عنصر في Binary Search Tree متوازنة (balanced)؟",
      options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"], correctIndex: 1,
      answer: "O(log n)",
      explanation: "في شجرة بحث ثنائية متوازنة، كل مقارنة تستبعد نصف العقد المتبقية (يسارًا أو يمينًا)، تمامًا مثل البحث الثنائي في مصفوفة مرتبة، مما يعطي تعقيدًا لوغاريتميًا O(log n). لكن إذا لم تكن الشجرة متوازنة (مثلًا أُدرجت العناصر بترتيب تصاعدي فتحوّلت عمليًا لقائمة مرتبطة)، يتدهور التعقيد إلى O(n) في أسوأ الحالات.",
      bestPractices: ["استخدم أشجارًا متوازنة تلقائيًا مثل AVL Tree أو Red-Black Tree عند الحاجة لضمان O(log n) دائمًا"],
      commonMistakes: ["افتراض أن كل Binary Search Tree تعطي O(log n) بغض النظر عن توازنها"],
      followups: ["ما الفرق بين AVL Tree وRed-Black Tree؟"], similar: ["كيف يعمل Traversal (In-order, Pre-order, Post-order) في الشجرة؟"]
    },
    {
      id: "ds-tf-1", title: "صح أو خطأ: BFS يستخدم Queue بينما DFS يستخدم Stack", difficulty: "medium", domain: "Data Structures", type: "tf", timeMinutes: 1,
      question: "صح أم خطأ: خوارزمية BFS (البحث بالعرض أولاً) تعتمد على Queue، بينما DFS (البحث بالعمق أولاً) تعتمد على Stack (أو التكرار العودي recursion الذي يستخدم call stack ضمنيًا).",
      isTrue: true,
      answer: "صح.",
      explanation: "BFS يستكشف كل العقد على نفس المستوى قبل الانتقال للمستوى التالي، وهذا يتطلب Queue (FIFO) لضمان معالجة العقد بترتيب اكتشافها. أما DFS فيغوص في عمق فرع واحد كاملاً قبل الرجوع لاستكشاف فرع آخر، وهذا يتطابق طبيعيًا مع سلوك Stack (LIFO) سواء استُخدم صراحة أو ضمنيًا عبر التكرار العودي (recursion) الذي يعتمد على Call Stack أصلًا.",
      bestPractices: ["استخدم BFS عند الحاجة لأقصر مسار في رسم بياني غير موزون (unweighted)، وDFS عند الحاجة لاستكشاف كل الاحتمالات بعمق مثل حل المتاهات"],
      commonMistakes: [], followups: ["متى تفضّل BFS على DFS في مسألة أقصر مسار تحديدًا؟"], similar: ["كيف تتجنب حلقة لا نهائية (infinite loop) عند تطبيق BFS/DFS على رسم بياني يحتوي دورات (cycles)؟"]
    },
    {
      id: "ds-4", title: "ما هو Heap ومتى يُستخدم؟", difficulty: "medium", domain: "Data Structures", type: "open", timeMinutes: 4,
      question: "ما هو Heap (كومة)، وكيف يرتبط بتنفيذ Priority Queue؟",
      answer: "Heap شجرة ثنائية شبه مكتملة (complete binary tree) تحافظ على خاصية الترتيب: في Min-Heap، كل عقدة أب أصغر من أو تساوي أبنائها (فالجذر دائمًا أصغر عنصر)؛ في Max-Heap، كل عقدة أب أكبر من أو تساوي أبنائها (فالجذر دائمًا أكبر عنصر). هذا يجعل الوصول لأصغر أو أكبر عنصر O(1) فورًا (هو الجذر)، بينما الإدراج والحذف من الجذر O(log n).",
      explanation: "Priority Queue (طابور بأولوية) هو تجريد منطقي يُخرج دائمًا العنصر ذا الأولوية الأعلى أولاً بدلًا من الترتيب الزمني العادي لـ Queue، وHeap هو التطبيق الأكثر كفاءة وشيوعًا لبنائه عمليًا، لأنه يوفر الوصول لعنصر الأولوية القصوى في O(1) والإدراج/الحذف في O(log n) فقط. تُستخدم Priority Queues المبنية على Heap في خوارزميات مهمة جدًا مثل Dijkstra لأقصر مسار، وA* في الذكاء الاصطناعي، وجدولة المهام حسب الأولوية.",
      bestPractices: ["استخدم مكتبة Heap المدمجة في لغتك (مثل heapq في بايثون أو PriorityQueue في جافا) بدلاً من تطبيق Heap يدويًا من الصفر"],
      commonMistakes: ["الخلط بين Heap (بنية بيانات شجرية خاصة) وHeap Memory (منطقة الذاكرة الديناميكية العامة في البرمجة) رغم أنهما مفهومان مختلفان تمامًا يتشاركان الاسم فقط"],
      followups: ["كيف تُبنى Heap من مصفوفة عادية بكفاءة O(n) بدلاً من إدراج كل عنصر على حدة O(n log n)؟"], similar: ["ما هو Heap Sort وكيف يستخدم بنية Heap؟"]
    },
    {
      id: "ds-5", title: "ما هو Trie ومتى يُستخدم؟", difficulty: "hard", domain: "Data Structures", type: "open", timeMinutes: 4,
      question: "ما هو Trie (شجرة البادئات)، ولماذا هو مثالي لتطبيقات مثل الإكمال التلقائي (Autocomplete)؟",
      answer: "Trie بنية بيانات شجرية متخصصة لتخزين سلاسل نصية، حيث يمثّل كل مسار من الجذر لعقدة معيّنة بادئة (prefix) مشتركة بين عدة كلمات. كل عقدة تمثّل حرفًا واحدًا، والكلمات التي تشترك في نفس البادئة (مثل 'برمجة' و'برنامج') تتشارك نفس المسار الأولي في الشجرة قبل أن تتفرّع عند أول حرف مختلف.",
      explanation: "هذا التصميم يجعل البحث عن كل الكلمات التي تبدأ ببادئة معيّنة سريعًا جدًا: بمجرد الوصول لعقدة تلك البادئة (بتعقيد O(طول البادئة) فقط)، كل الكلمات الممكنة تقع في الشجرة الفرعية أسفلها مباشرة، دون الحاجة للمرور على كل الكلمات المخزَّنة بالكامل كما يتطلبه البحث في قائمة عادية. هذا يجعله الخيار الأمثل لأنظمة الإكمال التلقائي في محركات البحث، وأدوات التدقيق الإملائي، وأنظمة التوجيه الشبكي (IP Routing) القائمة على أطول بادئة مطابقة.",
      bestPractices: ["استخدم Trie عندما تحتاج بحثًا متكررًا بالبادئة (prefix search) على مجموعة كبيرة من الكلمات، بدلًا من قائمة أو Hash Table عادية"],
      commonMistakes: ["استخدام Trie لحالات لا تحتاج فعليًا بحثًا بالبادئة (مثل بحث تطابق كامل فقط)، حيث Hash Table أبسط وكافٍ تمامًا لتلك الحالة"],
      followups: ["كيف تُقدّر استهلاك الذاكرة لـ Trie مقارنة بقائمة كلمات عادية؟"], similar: ["ما هو Suffix Tree وكيف يختلف عن Trie العادي؟"]
    },
    {
      id: "ds-mcq-2", title: "ما تعقيد الوصول لأصغر عنصر في Min-Heap؟", difficulty: "medium", domain: "Data Structures", type: "mcq", timeMinutes: 1,
      question: "ما هو تعقيد الوقت للوصول (وليس الحذف) لأصغر عنصر في Min-Heap؟",
      options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"], correctIndex: 0,
      answer: "O(1)",
      explanation: "في Min-Heap، أصغر عنصر يقع دائمًا في الجذر (root) بحكم خاصية الترتيب الأساسية للبنية، لذا الوصول له (بدون حذفه) هو مجرد قراءة مباشرة لعنصر الجذر بتعقيد ثابت O(1). أما حذف ذلك العنصر (extract-min) فيتطلب O(log n) لأن الحذف يستوجب إعادة ترتيب الشجرة (heapify) للحفاظ على خاصية الترتيب بعد إزالة الجذر.",
      bestPractices: ["تذكّر الفرق بين 'قراءة' الحد الأقصى/الأدنى (O(1)) و'حذفه فعليًا' (O(log n)) عند تحليل تعقيد خوارزميات تستخدم Heap"],
      commonMistakes: ["الخلط بين تعقيد القراءة وتعقيد الحذف/الإدراج في Heap"],
      followups: [], similar: ["ما تعقيد بناء Heap كاملة من مصفوفة غير مرتبة؟"]
    },
    {
      id: "ds-6", title: "ما الفرق بين Singly وDoubly Linked List؟", difficulty: "medium", domain: "Data Structures", type: "open", timeMinutes: 3,
      question: "ما الفرق بين القائمة المرتبطة الأحادية (Singly) والمزدوجة (Doubly) الاتجاه؟",
      answer: "في Singly Linked List، كل عقدة تحمل مؤشرًا واحدًا فقط يشير للعقدة التالية، فيمكن التنقّل في اتجاه واحد فقط (للأمام). في Doubly Linked List، كل عقدة تحمل مؤشرين: واحد للعقدة التالية وآخر للعقدة السابقة، مما يسمح بالتنقّل في كلا الاتجاهين (للأمام وللخلف) بسهولة.",
      explanation: "الفائدة العملية لـ Doubly Linked List تظهر عند الحاجة للحذف السريع لعقدة معيّنة إن كان لديك مؤشر إليها مباشرة (لا تحتاج المرور من البداية لإيجاد العقدة السابقة كما في Singly)، أو عند الحاجة للتنقّل بكلا الاتجاهين (مثل تنفيذ زر 'رجوع' و'تقدّم' في متصفح). الثمن مقابل هذه المرونة الإضافية هو ذاكرة إضافية لكل عقدة (مؤشر إضافي) وتعقيد أكبر قليلاً في كتابة عمليات الإدراج والحذف بشكل صحيح.",
      bestPractices: ["استخدم Doubly Linked List عندما تحتاج فعليًا تنقّلاً بكلا الاتجاهين أو حذفًا سريعًا من عقدة معروفة مباشرة، وSingly عندما يكفي التنقّل الأمامي فقط لتوفير ذاكرة"],
      commonMistakes: ["استخدام Doubly Linked List افتراضيًا دون حاجة فعلية للتنقّل العكسي، مما يستهلك ذاكرة إضافية بلا فائدة تُذكر"],
      followups: ["كيف تُنفَّذ Circular Linked List وما استخداماتها؟"], similar: ["كيف تُنفَّذ خوارزمية Undo/Redo باستخدام Doubly Linked List؟"]
    },
    {
      id: "ds-mcq-3", title: "أي بنية بيانات مناسبة لتنفيذ 'آخر استُخدم أولاً يُزال' (LRU Cache)؟", difficulty: "hard", domain: "Data Structures", type: "mcq", timeMinutes: 2,
      question: "أي مزيج من بنيات البيانات يُستخدم عادة لتنفيذ LRU Cache (ذاكرة مؤقتة تُزيل أقل العناصر استخدامًا حديثًا) بكفاءة O(1) لكل العمليات؟",
      options: ["مصفوفة عادية فقط", "Hash Map + Doubly Linked List معًا", "Stack فقط", "Binary Search Tree فقط"], correctIndex: 1,
      answer: "Hash Map + Doubly Linked List معًا",
      explanation: "الجمع بين الاثنين يحقق أفضل ما في كل بنية: Hash Map يوفر بحثًا O(1) عن أي عنصر عبر مفتاحه مباشرة، بينما Doubly Linked List يحافظ على ترتيب الاستخدام (الأحدث في مقدمة القائمة، الأقدم في نهايتها) ويسمح بنقل عنصر للمقدمة أو حذف العنصر الأخير بتعقيد O(1) أيضًا بفضل المؤشرات المزدوجة. بدون هذا الجمع، إما تخسر سرعة البحث (بقائمة فقط) أو سرعة تتبع الترتيب (بـ Hash Map فقط).",
      bestPractices: ["فكّر في دمج بنيات بيانات متعددة معًا عند مواجهة متطلبات مختلطة (بحث سريع + ترتيب معيّن) لا تفي بها بنية واحدة بمفردها بكفاءة"],
      commonMistakes: ["محاولة تنفيذ LRU Cache بمصفوفة عادية فقط، مما يجعل نقل عنصر للمقدمة أو حذف الأقدم O(n) بدلاً من O(1)"],
      followups: [], similar: ["كيف يختلف تنفيذ LFU Cache (الأقل استخدامًا تكرارًا) عن LRU؟"]
    },
  ]
},

/* ======================================================================
   Object-Oriented Programming (OOP)
   ====================================================================== */
{
  id: "oop",
  name: "Object Oriented Programming",
  icon: "🧩",
  intro: "البرمجة كائنية التوجه هي اللغة المشتركة بين معظم أنظمة البرمجيات الكبيرة. المقابلات تركز على المبادئ الأربعة الأساسية (التغليف، الوراثة، تعدد الأشكال، التجريد)، بالإضافة إلى مبادئ SOLID التي تُظهر نضج المرشح في تصميم أنظمة قابلة للصيانة.",
  concepts: [
    { title: "المبادئ الأربعة (Encapsulation, Inheritance, Polymorphism, Abstraction)", body: "التغليف يخفي التفاصيل الداخلية، الوراثة تسمح بإعادة استخدام سلوك موجود، تعدد الأشكال يسمح لكائنات مختلفة بالاستجابة لنفس الاستدعاء بطرق مختلفة، والتجريد يركّز على 'ماذا يفعل' الكائن لا 'كيف'." },
    { title: "مبادئ SOLID", body: "خمسة مبادئ لتصميم كود كائني قابل للصيانة والتوسعة: مسؤولية واحدة (SRP)، مفتوح للتوسعة مغلق للتعديل (OCP)، استبدال ليسكوف (LSP)، فصل الواجهات (ISP)، وعكس الاعتماديات (DIP)." },
    { title: "Composition over Inheritance", body: "مبدأ تصميمي حديث يفضّل بناء السلوك عبر تركيب كائنات صغيرة معًا (composition) بدلًا من التسلسل الوراثي العميق، لتفادي المشاكل الناتجة عن الاقتران القوي (tight coupling) بين الفئات." },
    { title: "Interface مقابل Abstract Class", body: "الواجهة (interface) تُعرّف عقدًا (contract) من التوقيعات دون أي تنفيذ، بينما الفئة المجردة (abstract class) يمكن أن تحتوي تنفيذًا جزئيًا مشتركًا بالإضافة لطرق مجردة يجب على الفئات الفرعية تنفيذها." }
  ],
  questions: [
    {
      id: "oop-1", title: "اشرح المبادئ الأربعة لـ OOP", difficulty: "easy", domain: "OOP", type: "open", timeMinutes: 5,
      question: "ما هي المبادئ الأربعة الأساسية للبرمجة كائنية التوجه (Encapsulation, Inheritance, Polymorphism, Abstraction)؟ اشرح كل واحد بمثال قصير.",
      answer: "التغليف (Encapsulation): تجميع البيانات والدوال التي تعمل عليها داخل كائن واحد، مع إخفاء التفاصيل الداخلية عن العالم الخارجي وكشف واجهة محددة فقط (مثل خاصية private مع getter/setter). الوراثة (Inheritance): تسمح لفئة جديدة (فئة فرعية) باستعارة خصائص وسلوكيات فئة موجودة (فئة أب) وإعادة استخدامها أو تخصيصها. تعدد الأشكال (Polymorphism): يسمح لكائنات من فئات مختلفة بالاستجابة لنفس استدعاء الدالة بطرق مختلفة خاصة بكل منها. التجريد (Abstraction): إخفاء التعقيد الداخلي وعرض واجهة مبسطة تركّز على 'ماذا' يفعل الكائن دون كشف 'كيف' ينفّذه داخليًا.",
      explanation: "مثال موحّد يجمع الأربعة: تخيّل فئة Animal أب بها دالة makeSound() مجردة (Abstraction تُخفي التفاصيل). فئتا Dog وCat ترثان منها (Inheritance) وتنفّذ كل منهما makeSound() بطريقتها الخاصة (Polymorphism - نفس الاستدعاء animal.makeSound() ينتج نباحًا أو مواءً حسب الكائن الفعلي). وأي بيانات داخلية مثل عمر الحيوان تُحفظ كخاصية خاصة (private) لا يمكن الوصول إليها إلا عبر دوال محددة (Encapsulation).",
      example: "class Animal {\n  #name; // خاص - Encapsulation\n  constructor(name) { this.#name = name; }\n  makeSound() { throw new Error('يجب التنفيذ في الفئة الفرعية'); } // Abstraction\n}\n\nclass Dog extends Animal { // Inheritance\n  makeSound() { return 'هاو هاو'; } // Polymorphism\n}\nclass Cat extends Animal {\n  makeSound() { return 'مواء'; }\n}\n\n[new Dog('ريكس'), new Cat('لولو')].forEach(a => console.log(a.makeSound()));",
      bestPractices: ["فضّل composition على وراثة عميقة متعددة المستويات لتفادي الاقتران القوي"],
      commonMistakes: ["الإفراط في الوراثة (deep inheritance chains) مما يجعل تتبع سلوك فئة معينة صعبًا جدًا لاحقًا"],
      followups: ["كيف يختلف Polymorphism في لغات typed statically مثل Java عن لغات ديناميكية مثل بايثون؟"], similar: ["ما هو Duck Typing؟"]
    },
    {
      id: "oop-2", title: "اشرح مبادئ SOLID باختصار", difficulty: "hard", domain: "OOP", type: "open", timeMinutes: 6,
      question: "ما هي مبادئ SOLID الخمسة، ولماذا تُعتبر مهمة في تصميم أنظمة برمجية قابلة للصيانة؟",
      answer: "S - مبدأ المسؤولية الواحدة (Single Responsibility): كل فئة يجب أن يكون لها سبب واحد فقط للتغيير. O - مبدأ الفتح للتوسعة والإغلاق للتعديل (Open/Closed): يجب أن تكون قادرًا على إضافة سلوك جديد دون تعديل الكود الموجود، غالبًا عبر الوراثة أو الواجهات. L - مبدأ استبدال ليسكوف (Liskov Substitution): أي فئة فرعية يجب أن تكون قابلة للاستخدام مكان فئتها الأب دون كسر صحة البرنامج. I - فصل الواجهات (Interface Segregation): لا تُجبر فئة على تنفيذ طرق لا تحتاجها؛ قسّم الواجهات الكبيرة لواجهات أصغر متخصصة. D - عكس الاعتماديات (Dependency Inversion): يجب أن تعتمد الوحدات عالية المستوى على تجريدات (abstractions) لا على تفاصيل تنفيذ محددة.",
      explanation: "مبدأ عكس الاعتماديات (D) هو الأكثر أهمية عمليًا في الأنظمة الحديثة، لأنه أساس تقنية Dependency Injection المنتشرة في أطر عمل مثل Spring وAngular وNestJS. بدلًا من أن تُنشئ فئة PaymentProcessor اعتمادًا مباشرًا على فئة StripeGateway محددة، تعتمد على واجهة PaymentGateway مجردة، مما يسمح باستبدال Stripe بـ PayPal لاحقًا دون تعديل أي سطر في PaymentProcessor نفسها.",
      example: "// مخالف لـ DIP: اعتماد مباشر على تفاصيل تنفيذ\nclass PaymentProcessor {\n  constructor() { this.gateway = new StripeGateway(); }\n}\n\n// متوافق مع DIP: الاعتماد على تجريد قابل للحقن\nclass PaymentProcessor {\n  constructor(gateway) { this.gateway = gateway; } // أي gateway ينفّذ الواجهة المطلوبة\n}",
      bestPractices: ["طبّق SRP بسؤال: 'هل هذه الفئة لها أكثر من سبب واحد ليتغيّر كودها؟'", "استخدم Dependency Injection لتطبيق DIP عمليًا بدلًا من الإنشاء المباشر داخل الفئة"],
      commonMistakes: ["إنشاء فئة 'God Object' ضخمة تفعل كل شيء، مخالفة لمبدأ SRP بشكل صارخ", "الخلط بين OCP وعدم تعديل أي كود إطلاقًا - المبدأ عن التوسعة عبر إضافة كود جديد، وليس تجميد الكود القديم للأبد"],
      followups: ["أعطِ مثالًا عمليًا لانتهاك مبدأ Liskov Substitution وكيف تُصلحه؟", "كيف يرتبط DIP بـ Inversion of Control (IoC) containers؟"],
      similar: ["ما هو Design Pattern وكيف يرتبط بمبادئ SOLID؟"]
    },
    {
      id: "oop-3", title: "ما الفرق بين Interface وAbstract Class؟", difficulty: "medium", domain: "OOP", type: "open", timeMinutes: 4,
      question: "متى تستخدم Interface ومتى تستخدم Abstract Class في تصميم نظامك؟",
      answer: "الواجهة (Interface) تُعرّف فقط 'عقدًا' من توقيعات الطرق (method signatures) دون أي تنفيذ فعلي، وتسمح لفئة واحدة بتنفيذ عدة واجهات في نفس الوقت (في لغات مثل Java وC#). أما الفئة المجردة (Abstract Class) فيمكن أن تحتوي تنفيذًا فعليًا مشتركًا لبعض الطرق بالإضافة لطرق مجردة أخرى يجب على كل فئة فرعية تنفيذها بنفسها، لكن الفئة الفرعية عادة يمكنها وراثة فئة مجردة واحدة فقط.",
      explanation: "اختر Interface عندما تريد تعريف 'قدرة' (capability) يمكن أن تشترك فيها فئات غير مرتبطة تمامًا ببعضها، مثل Flyable وSwimmable لكائنات لا علاقة تصنيفية بينها. اختر Abstract Class عندما تريد مشاركة تنفيذ فعلي مشترك (كود حقيقي، ليس فقط توقيعًا) بين فئات فرعية مرتبطة منطقيًا في تسلسل هرمي واحد واضح، مثل Shape أب مجرد يحتوي دالة مشتركة لحساب المحيط، بينما كل فئة فرعية (Circle، Square) تنفّذ دالة حساب المساحة الخاصة بشكلها فقط.",
      bestPractices: ["فضّل composition من عدة interfaces صغيرة على وراثة عميقة من abstract class واحدة"],
      commonMistakes: ["استخدام abstract class عندما تحتاج فعليًا فقط عقدًا بدون أي تنفيذ مشترك، مما يقيّد الفئة الفرعية بوراثة واحدة فقط دون داعٍ"],
      followups: ["كيف يتعامل TypeScript مع الفرق بين interface وabstract class تحديدًا؟"], similar: ["ما هو Multiple Inheritance ولماذا لا تدعمه لغات مثل جافا مباشرة؟"]
    },
    {
      id: "oop-mcq-1", title: "أي مبدأ SOLID يتعلق بـ 'مسؤولية واحدة لكل فئة'؟", difficulty: "easy", domain: "OOP", type: "mcq", timeMinutes: 1,
      question: "أي حرف من مبادئ SOLID يشير إلى أن كل فئة يجب أن يكون لها سبب واحد فقط للتغيير؟",
      options: ["O - Open/Closed", "S - Single Responsibility", "L - Liskov Substitution", "D - Dependency Inversion"], correctIndex: 1,
      answer: "S - مبدأ المسؤولية الواحدة (Single Responsibility Principle).",
      explanation: "هذا المبدأ ينص على أن كل فئة أو وحدة يجب أن يكون لها سبب واحد فقط للتغيير، بمعنى أنها تُنجز مسؤولية واحدة محددة بوضوح. عندما تحتوي فئة واحدة منطق قاعدة بيانات ومنطق عرض ومنطق أعمال معًا، فإنها تخالف هذا المبدأ وتصبح صعبة الصيانة والاختبار.",
      bestPractices: ["افصل منطق الأعمال عن منطق العرض عن منطق الوصول للبيانات في طبقات مختلفة"],
      commonMistakes: ["إنشاء فئات 'تفعل كل شيء' (God Classes) تجمع مسؤوليات غير مترابطة"],
      followups: [], similar: ["كيف تكتشف انتهاك SRP في مراجعة الكود (code review)؟"]
    },
    {
      id: "oop-tf-1", title: "صح أو خطأ: يمكن لفئة واحدة في جافا أن ترث من أكثر من فئة", difficulty: "easy", domain: "OOP", type: "tf", timeMinutes: 1,
      question: "صح أم خطأ: في جافا، يمكن لفئة (class) واحدة أن ترث (extends) من أكثر من فئة أب في نفس الوقت.",
      isTrue: false,
      answer: "خطأ.",
      explanation: "جافا لا تدعم الوراثة المتعددة (Multiple Inheritance) للفئات لتفادي 'مشكلة الألماس' (Diamond Problem) الشهيرة التي تحدث عند وجود غموض حول أي تنفيذ يُستخدم عند وراثة نفس الطريقة من فئتين أب مختلفتين. لكن جافا تسمح لفئة واحدة بتنفيذ (implements) عدة واجهات (interfaces) في نفس الوقت، لأن الواجهات (قبل Java 8 على الأقل) لا تحتوي تنفيذًا فعليًا يسبب هذا الغموض.",
      bestPractices: ["استخدم عدة interfaces للحصول على مرونة تشبه الوراثة المتعددة دون مشاكلها"],
      commonMistakes: ["الخلط بين extends (فئة واحدة فقط) وimplements (عدة واجهات مسموحة) في جافا"],
      followups: ["كيف تحل لغات مثل بايثون أو C++ مشكلة الألماس عند دعمها للوراثة المتعددة؟"], similar: ["ما هو Diamond Problem بالتفصيل؟"]
    },
    {
      id: "oop-4", title: "ما الفرق بين Method Overloading وOverriding؟", difficulty: "medium", domain: "OOP", type: "open", timeMinutes: 4,
      question: "اشرح الفرق بين تعدد التحميل (Overloading) والكتابة الفوقية (Overriding) للدوال في البرمجة كائنية التوجه.",
      answer: "تعدد التحميل (Overloading) يعني تعريف عدة دوال بنفس الاسم داخل نفس الفئة، لكن باختلاف في عدد أو نوع المعاملات، ويُحدَّد أي نسخة تُستدعى وقت الترجمة (compile-time) بناءً على المعاملات المُمرَّرة. الكتابة الفوقية (Overriding) تعني أن فئة فرعية تُعيد تعريف دالة موجودة بالفعل في فئتها الأب، بنفس التوقيع تمامًا، ويُحدَّد أي نسخة تُنفَّذ فعليًا وقت التشغيل (runtime) بناءً على نوع الكائن الفعلي.",
      explanation: "Overloading يحدث داخل نفس الفئة كوسيلة لتوفير عدة 'واجهات استدعاء' مريحة لنفس المفهوم، بينما Overriding يحدث عبر تسلسل هرمي للوراثة كوسيلة لتخصيص سلوك موروث. ملاحظة مهمة: JavaScript وبايثون لا تدعمان Overloading التقليدي (التعريف الأخير يستبدل الأول تمامًا)، بعكس لغات مثل جافا وC++ التي تدعمانه أصالة.",
      example: "// Overriding - في جافا، عبر الوراثة\nclass Animal {\n  void makeSound() { System.out.println(\"صوت عام\"); }\n}\nclass Dog extends Animal {\n  @Override\n  void makeSound() { System.out.println(\"هاو هاو\"); }\n}\n\n// Overloading - في نفس الفئة، معاملات مختلفة\nclass Calculator {\n  int add(int a, int b) { return a + b; }\n  double add(double a, double b) { return a + b; }\n}",
      bestPractices: ["استخدم @Override صراحة عند الكتابة الفوقية ليكتشف المترجم أي خطأ إملائي في التوقيع فورًا"],
      commonMistakes: ["كتابة توقيع مختلف قليلاً أثناء محاولة Overriding، مما يُنشئ دالة جديدة تمامًا بدلاً من الكتابة الفوقية المقصودة"],
      followups: ["لماذا لا تدعم بايثون Method Overloading التقليدي؟"], similar: ["ما هو Method Hiding في جافا؟"]
    },
    {
      id: "oop-5", title: "ما الفرق بين Composition وAggregation؟", difficulty: "hard", domain: "OOP", type: "open", timeMinutes: 4,
      question: "اشرح الفرق بين علاقتي Composition وAggregation بين الكائنات في التصميم كائني التوجه.",
      answer: "في Composition، الكائن الجزء لا يمكنه الوجود منطقيًا بمعزل عن الكائن الكل؛ عند تدمير الكل، يُدمَّر الجزء معه (ملكية قوية). في Aggregation، الكائن الجزء له وجود مستقل تمامًا عن الكل، ويمكن أن يستمر بالوجود حتى بعد تدمير الكل (ملكية ضعيفة).",
      explanation: "مثال: علاقة House وRoom هي Composition — الغرفة لا معنى لوجودها بدون المنزل. أما Department وEmployee فهي Aggregation — الموظف له وجود مستقل، وإغلاق القسم لا يعني تدمير الموظف.",
      example: "// Composition\nclass Car {\n  constructor() { this.engine = new Engine(); }\n}\n\n// Aggregation\nclass Department {\n  constructor(employees) { this.employees = employees; }\n}",
      bestPractices: ["فضّل Composition عندما تريد تغليفًا قويًا وضمان عدم وجود الجزء بمعزل عن الكل"],
      commonMistakes: ["الخلط بين الاثنين دون تحليل قوة الملكية الفعلية"],
      followups: ["كيف ترتبط Composition بمبدأ 'Composition over Inheritance'؟"], similar: ["ما الفرق بين Association وAggregation وComposition؟"]
    },
    {
      id: "oop-mcq-2", title: "أي Design Pattern يضمن وجود نسخة واحدة فقط من فئة معيّنة؟", difficulty: "medium", domain: "OOP", type: "mcq", timeMinutes: 1,
      question: "أي نمط تصميم يضمن وجود نسخة واحدة فقط من فئة معيّنة عبر التطبيق بأكمله؟",
      options: ["Factory Pattern", "Observer Pattern", "Singleton Pattern", "Strategy Pattern"], correctIndex: 2,
      answer: "Singleton Pattern",
      explanation: "نمط Singleton يضمن عدم إنشاء أكثر من نسخة واحدة من فئة معيّنة، عادة عبر باني خاص ودالة ساكنة تُعيد النسخة الوحيدة الموجودة، ويُستخدم لإدارة موارد مشتركة يجب أن تكون فريدة.",
      bestPractices: ["استخدم Singleton بحذر، لأنه يُصعّب الاختبار وينشئ حالة عامة مشتركة"],
      commonMistakes: ["الإفراط في استخدام Singleton كحل سريع لمشاركة البيانات"],
      followups: [], similar: ["ما هو Factory Pattern؟"]
    },
    {
      id: "oop-6", title: "ما الفرق بين Coupling وCohesion؟", difficulty: "hard", domain: "OOP", type: "open", timeMinutes: 4,
      question: "ما هو Coupling (الاقتران) وCohesion (التماسك)، ولماذا نسعى لاقتران منخفض وتماسك عالٍ؟",
      answer: "Coupling يقيس درجة اعتماد وحدة (فئة أو موديول) على تفاصيل وحدات أخرى؛ اقتران عالٍ يعني أن تغييرًا صغيرًا في وحدة يُجبر على تعديل وحدات أخرى كثيرة معتمدة عليها بإحكام. Cohesion يقيس مدى ترابط ومسؤوليات وحدة واحدة داخليًا؛ تماسك عالٍ يعني أن كل ما بداخل تلك الوحدة يخدم غرضًا واحدًا واضحًا ومترابطًا منطقيًا (قريب من مبدأ المسؤولية الواحدة SRP).",
      explanation: "الهدف المثالي في تصميم أي نظام كائني التوجه جيد هو اقتران منخفض (Low Coupling) بين الوحدات المختلفة (كل وحدة تعتمد على تجريدات وليس تفاصيل تنفيذ محددة لوحدات أخرى، كما في مبدأ DIP)، مع تماسك عالٍ (High Cohesion) داخل كل وحدة (كل فئة تفعل شيئًا واحدًا محددًا جيدًا). هذا التوازن يجعل النظام أسهل في الفهم والاختبار والتعديل: يمكنك تغيير وحدة داخليًا دون كسر وحدات أخرى (بفضل الاقتران المنخفض)، وتعرف بالضبط أين تجد أي وظيفة معيّنة (بفضل التماسك العالي).",
      bestPractices: ["اسأل عند تصميم أي فئة: 'هل كل ما بداخلها مترابط منطقيًا بغرض واحد؟' (تماسك) و'هل تعتمد على تفاصيل داخلية لفئات أخرى بدلاً من واجهات مجردة؟' (اقتران)"],
      commonMistakes: ["إنشاء فئات 'كبيرة الحجم' تجمع مسؤوليات غير مترابطة (تماسك منخفض)، أو فئات تعتمد بإحكام على تفاصيل تنفيذ داخلية لفئات أخرى (اقتران عالٍ)"],
      followups: ["كيف يرتبط مبدأ Dependency Inversion (DIP) بتقليل الاقتران؟"], similar: ["كيف تكتشف اقترانًا عاليًا في مراجعة الكود (code review)؟"]
    },
    {
      id: "oop-mcq-3", title: "أي كلمة مفتاحية تُعرِّف دالة يجب على كل فئة فرعية تنفيذها؟", difficulty: "easy", domain: "OOP", type: "mcq", timeMinutes: 1,
      question: "في لغات مثل جافا أو C#، أي كلمة مفتاحية تُستخدم لتعريف دالة مجردة (abstract method) يجب على كل فئة فرعية غير مجردة تنفيذها؟",
      options: ["final", "abstract", "static", "private"], correctIndex: 1,
      answer: "abstract",
      explanation: "abstract method تُعرَّف داخل abstract class دون أي تنفيذ فعلي (فقط توقيع الدالة)، ويُجبَر المترجم أي فئة فرعية غير مجردة ترث من تلك الفئة الأب على تنفيذ تلك الدالة صراحة، وإلا فشل بناء (compilation) تلك الفئة الفرعية. هذا يضمن أن كل فئة فرعية ملموسة (concrete) تلتزم بتوفير سلوك حقيقي لكل دالة مجردة وعدتها الفئة الأب بوجودها.",
      bestPractices: ["استخدم abstract methods لتعريف 'عقد' واضح يجب على كل فئة فرعية الوفاء به، مع ترك التنفيذ الفعلي التفصيلي لكل فئة فرعية بطريقتها الخاصة"],
      commonMistakes: ["نسيان تنفيذ دالة مجردة موروثة في فئة فرعية جديدة، مما يُسبب خطأ ترجمة فوري وواضح (وهي ميزة أمان مقصودة وليست إزعاجًا)"],
      followups: [], similar: ["ما الفرق بين abstract method وvirtual method القابلة للتنفيذ الافتراضي؟"]
    },
  ]
},

/* ======================================================================
   Java
   ====================================================================== */
{
  id: "java",
  name: "Java",
  icon: "☕",
  intro: "جافا لغة أساسية في مقابلات الشركات الكبرى والأنظمة المؤسسية (Enterprise). المحاور يركّز على فهمك العميق لآلة جافا الافتراضية (JVM)، إدارة الذاكرة التلقائية (Garbage Collection)، ونظام الأنواع القوي، بالإضافة لمفاهيم متقدمة مثل معالجة الاستثناءات والتزامن (Concurrency).",
  concepts: [
    { title: "JDK وJRE وJVM", body: "JDK (Java Development Kit) هو أدوات التطوير الكاملة بما فيها المترجم. JRE (Java Runtime Environment) بيئة تشغيل البرامج المُترجمة فقط دون أدوات تطوير. JVM (Java Virtual Machine) هي الآلة الافتراضية التي تُنفّذ bytecode جافا فعليًا، وهي ما يجعل جافا 'اكتب مرة، شغّل في أي مكان'." },
    { title: "Garbage Collection", body: "جافا تدير الذاكرة تلقائيًا عبر جامع القمامة (Garbage Collector) الذي يحرر الذاكرة المشغولة بكائنات لم يعد لها أي مرجع نشط، مما يوفر على المطور إدارة الذاكرة يدويًا لكنه قد يسبب توقفات قصيرة (pause times) في التطبيقات الحساسة للأداء." },
    { title: "Checked vs Unchecked Exceptions", body: "الاستثناءات المُتحقق منها (checked مثل IOException) يجب معالجتها أو الإعلان عنها صراحة (throws) وقت الترجمة، بينما غير المُتحقق منها (unchecked مثل NullPointerException، وهي فئات فرعية من RuntimeException) لا تفرض ذلك." },
    { title: "Collections Framework", body: "مجموعة موحّدة من الواجهات والفئات (List، Set، Map وتطبيقاتها مثل ArrayList وHashSet وHashMap) لتخزين ومعالجة مجموعات البيانات بكفاءة." }
  ],
  questions: [
    {
      id: "java-1", title: "ما الفرق بين JDK وJRE وJVM؟", difficulty: "easy", domain: "Java", type: "open", timeMinutes: 3,
      question: "اشرح العلاقة بين JDK وJRE وJVM في منظومة جافا.",
      answer: "JVM هي الآلة الافتراضية التي تُنفّذ bytecode جافا مباشرة على نظام التشغيل، وهي السبب في أن نفس الملف المُترجم (.class) يعمل على أي نظام تشغيل يملك JVM مناسبة. JRE يحتوي JVM بالإضافة لمكتبات جافا الأساسية اللازمة لتشغيل أي برنامج جافا، لكن بدون أي أدوات تطوير. أما JDK فيحتوي JRE بالكامل بالإضافة لأدوات التطوير مثل المترجم javac والمصحح (debugger)، وهو ما يحتاجه أي مطور فعليًا لكتابة وبناء برامج جافا.",
      explanation: "العلاقة تسلسلية احتوائية: JDK ⊃ JRE ⊃ JVM. من يريد فقط تشغيل برنامج جافا جاهز (مستخدم نهائي) يحتاج JRE فقط، بينما من يريد تطوير وبناء برامج جافا يحتاج JDK كاملاً. هذا التمييز مهم عمليًا عند إعداد بيئة خادم إنتاج (production server) لا يحتاج فعليًا سوى JRE لتشغيل التطبيق، دون أدوات تطوير غير ضرورية هناك.",
      bestPractices: ["ثبّت JDK فقط على أجهزة التطوير، وJRE فقط على خوادم الإنتاج التي لا تحتاج تجميع الكود"],
      commonMistakes: ["الخلط بين الثلاثة والاعتقاد بأنها مترادفات لنفس الشيء"],
      followups: ["كيف تُنفَّذ آلية 'اكتب مرة، شغّل في أي مكان' (Write Once, Run Anywhere) عمليًا عبر bytecode؟"], similar: ["ما الفرق بين Compiler وInterpreter، وأين يقع JIT Compiler من هذا؟"]
    },
    {
      id: "java-2", title: "ما الفرق بين Checked وUnchecked Exceptions؟", difficulty: "medium", domain: "Java", type: "open", timeMinutes: 4,
      question: "اشرح الفرق بين الاستثناءات المُتحقق منها (Checked) وغير المُتحقق منها (Unchecked) في جافا، مع مثال لكل نوع.",
      answer: "الاستثناءات المُتحقق منها (مثل IOException وSQLException) يفرضها المترجم (compiler) صراحة: يجب على المطور إما معالجتها بـ try/catch أو الإعلان عنها في توقيع الدالة عبر throws، وإلا فشل البناء (compilation) بالكامل. أما الاستثناءات غير المُتحقق منها (مثل NullPointerException وArrayIndexOutOfBoundsException، وكلها فئات فرعية من RuntimeException) فلا يفرض المترجم معالجتها، وعادة ما تدل على خطأ برمجي يجب إصلاحه في الكود بدلًا من التعامل معه وقت التشغيل.",
      explanation: "الفلسفة خلف هذا التمييز: الاستثناءات المُتحقق منها تمثّل ظروفًا خارجية متوقعة قد يواجهها برنامج سليم (مثل فشل قراءة ملف غير موجود)، بينما غير المُتحقق منها تمثّل أخطاء برمجية (bugs) يفترض ألا تحدث في كود صحيح (مثل الوصول لعنصر خارج حدود المصفوفة). هذا سبب جدل مستمر بين مطوري جافا حول ما إذا كانت الاستثناءات المُتحقق منها فكرة جيدة أصلًا، ولهذا لا تحتوي لغات حديثة مثل Kotlin أو C# على هذا التمييز إطلاقًا.",
      example: "// Checked - يجب معالجتها أو الإعلان عنها\npublic void readFile() throws IOException {\n    FileReader file = new FileReader(\"data.txt\");\n}\n\n// Unchecked - لا يفرضها المترجم\npublic void divide(int a, int b) {\n    int result = a / b; // قد يطلق ArithmeticException دون فرض معالجة\n}",
      bestPractices: ["لا تُنشئ استثناءات checked مخصصة إلا لضرورة قوية، فهي تُعقّد توقيعات الدوال بلا داعٍ أحيانًا"],
      commonMistakes: ["كتابة catch (Exception e) {} فارغ لإسكات استثناء checked دون معالجة حقيقية، مما يُخفي أخطاء فعلية"],
      followups: ["كيف تُنشئ استثناء مخصصًا (custom exception) في جافا؟"], similar: ["ما الفرق بين throw وthrows؟"]
    },
    {
      id: "java-3", title: "ما الفرق بين == وequals() في جافا؟", difficulty: "easy", domain: "Java", type: "open", timeMinutes: 3,
      question: "لماذا لا يجب استخدام == لمقارنة كائنات String في جافا، وما البديل الصحيح؟",
      answer: "عامل == يقارن مرجع الذاكرة (reference) للكائنين، أي يفحص ما إذا كانا نفس الكائن فعليًا في الذاكرة، وليس محتواهما. أما equals() فهي دالة يمكن للفئة (class) تخصيصها (override) لمقارنة المحتوى الفعلي؛ وفئة String تُخصِّص equals() بالفعل لمقارنة تسلسل الأحرف حرفًا بحرف.",
      explanation: "المشكلة الشائعة أن new String(\"a\") == new String(\"a\") تُعطي false لأنهما كائنان منفصلان في الذاكرة رغم تطابق المحتوى، بينما new String(\"a\").equals(new String(\"a\")) تُعطي true بشكل صحيح. الأمر يزداد تعقيدًا بسبب 'تجمّع السلاسل' (String Pool) في جافا، حيث قد تُشير سلسلتان حرفيتان (literals) متطابقتان لنفس الكائن في الذاكرة فتُعطي == نتيجة true بالصدفة، مما يخدع مطورين مبتدئين لظن أن == يعمل بشكل صحيح دائمًا مع النصوص.",
      example: "String a = new String(\"مرحبا\");\nString b = new String(\"مرحبا\");\nSystem.out.println(a == b);       // false - مرجعان مختلفان\nSystem.out.println(a.equals(b));  // true - نفس المحتوى",
      bestPractices: ["استخدم equals() دائمًا لمقارنة محتوى الكائنات، وخصص equals() وhashCode() معًا عند إنشاء فئات مخصصة"],
      commonMistakes: ["استخدام == لمقارنة أي كائن غير بدائي (non-primitive) بما فيه String وWrapper classes مثل Integer"],
      followups: ["لماذا يجب تخصيص hashCode() دائمًا عند تخصيص equals()؟"], similar: ["ما هو String Pool في جافا؟"]
    },
    {
      id: "java-4", title: "ما الفرق بين ArrayList وLinkedList في جافا؟", difficulty: "medium", domain: "Java", type: "open", timeMinutes: 3,
      question: "متى تختار ArrayList ومتى تختار LinkedList من واجهة List في جافا؟",
      answer: "ArrayList مبنية داخليًا على مصفوفة ديناميكية، فتوفر وصولًا عشوائيًا سريعًا O(1) عبر get(index)، لكن الإدراج أو الحذف من المنتصف يتطلب إزاحة عناصر فيصبح O(n). أما LinkedList فمبنية على قائمة مرتبطة مزدوجة (doubly linked list)، فالإدراج والحذف في البداية أو النهاية O(1)، لكن الوصول لعنصر بفهرسه يتطلب المرور بالعناصر فيصبح O(n).",
      explanation: "في الممارسة العملية الحديثة، تُستخدم ArrayList كخيار افتراضي في الغالبية العظمى من الحالات لأن الوصول العشوائي والتكرار (iteration) الأسرع من ArrayList أهم عمليًا في معظم التطبيقات، ولأن LinkedList تستهلك ذاكرة إضافية لكل عقدة (لتخزين مؤشرات next/prev). LinkedList يُفضّل فقط في حالات نادرة تتطلب إدراجًا/حذفًا متكررًا جدًا من الطرفين مثل تطبيق Deque أو Queue.",
      bestPractices: ["استخدم ArrayList كخيار افتراضي، ولا تنتقل لـ LinkedList إلا بعد قياس فعلي (profiling) يُظهر حاجة حقيقية"],
      commonMistakes: ["اختيار LinkedList افتراضيًا اعتقادًا بأنها 'أفضل' للإدراج/الحذف دون قياس فعلي لنمط الاستخدام الحقيقي"],
      followups: ["كيف تعمل إعادة تحجيم (resizing) ArrayList داخليًا عند امتلائها؟"], similar: ["ما الفرق بين Vector وArrayList؟"]
    },
    {
      id: "java-mcq-1", title: "أي كلمة مفتاحية تمنع وراثة فئة في جافا؟", difficulty: "easy", domain: "Java", type: "mcq", timeMinutes: 1,
      question: "أي كلمة مفتاحية تُستخدم لمنع أي فئة أخرى من وراثة فئة معيّنة في جافا؟",
      options: ["static", "final", "private", "abstract"], correctIndex: 1,
      answer: "final",
      explanation: "وضع final قبل تعريف الفئة (مثل final class MyClass) يمنع أي فئة أخرى من عمل extends لها. final تُستخدم أيضًا على المتغيرات (لجعلها ثابتة لا يمكن إعادة إسنادها) وعلى الدوال (لمنع الفئات الفرعية من إعادة تعريفها/override).",
      bestPractices: ["اجعل الفئات final افتراضيًا إن لم تكن مصممة صراحة لتكون قابلة للوراثة، لتفادي كسر تصميمها لاحقًا عبر وراثة غير متوقعة"],
      commonMistakes: ["الخلط بين final class (منع الوراثة) وabstract class (إجبار الوراثة والتنفيذ)"],
      followups: [], similar: ["ما الفرق بين final وfinally وfinalize؟"]
    },
    {
      id: "java-tf-1", title: "صح أو خطأ: جافا تدعم الوراثة المتعددة للفئات", difficulty: "easy", domain: "Java", type: "tf", timeMinutes: 1,
      question: "صح أم خطأ: يمكن لفئة في جافا أن ترث (extends) من أكثر من فئة واحدة في نفس الوقت.",
      isTrue: false,
      answer: "خطأ.",
      explanation: "جافا تسمح بوراثة فئة واحدة فقط (single inheritance) عبر extends، لتفادي مشكلة الألماس (Diamond Problem)، لكنها تسمح بتنفيذ (implements) عدة واجهات (interfaces) في نفس الوقت، ومنذ Java 8 يمكن لهذه الواجهات أن تحتوي دوالًا افتراضية (default methods) بتنفيذ فعلي أيضًا.",
      bestPractices: ["استخدم عدة interfaces عندما تحتاج مرونة تشبه الوراثة المتعددة"],
      commonMistakes: [], followups: ["كيف تحل جافا تعارض دالتين default methods متطابقتي التوقيع من واجهتين مختلفتين؟"], similar: ["ما الفرق بين extends وimplements؟"]
    },
    {
      id: "java-5", title: "ما هو Autoboxing وUnboxing في جافا؟", difficulty: "medium", domain: "Java", type: "open", timeMinutes: 3,
      question: "ما هو Autoboxing وUnboxing، ولماذا يجب الانتباه لتأثيرهما على الأداء؟",
      answer: "Autoboxing هو التحويل التلقائي من نوع بدائي (primitive مثل int) لنوع كائن مقابل (Wrapper Class مثل Integer)، وUnboxing هو العكس: تحويل الكائن Wrapper مرة أخرى لنوع بدائي تلقائيًا عند الحاجة. جافا تُنفّذ هذا التحويل تلقائيًا خلف الكواليس دون طلب صريح من المطور، لتسهيل استخدام الأنواع البدائية في سياقات تتطلب كائنات (مثل تخزينها في ArrayList التي لا تقبل إلا كائنات وليس أنواعًا بدائية مباشرة).",
      explanation: "المشكلة العملية أن كل عملية autoboxing/unboxing تُنشئ كائنًا جديدًا في الذاكرة (أو تستخدم كائنًا مُخزَّنًا مؤقتًا لقيم صغيرة معيّنة)، وهذا له تكلفة أداء وذاكرة إضافية غير موجودة عند استخدام الأنواع البدائية مباشرة. في حلقات ضخمة تكرر هذا التحويل ملايين المرات (مثل جمع أعداد كبيرة داخل ArrayList<Integer> بدلاً من مصفوفة int[])، يصبح هذا التأثير التراكمي على الأداء ملحوظًا جدًا.",
      example: "List<Integer> list = new ArrayList<>();\nfor (int i = 0; i < 1000000; i++) {\n    list.add(i); // autoboxing ضمني: int -> Integer في كل مرة\n}\n// أبطأ بكثير من استخدام int[] عادية لنفس الغرض",
      bestPractices: ["استخدم مصفوفات من الأنواع البدائية (int[]) بدلاً من ArrayList<Integer> في الحلقات كثيفة الأداء التي لا تحتاج فعليًا مرونة الكائنات"],
      commonMistakes: ["استخدام Integer بدلاً من int في متغيرات حلقات ضخمة دون وعي بتكلفة autoboxing المتكررة"],
      followups: ["ما هو Integer Cache في جافا ولماذا new Integer(127) == new Integer(127) قد تُعطي نتائج مختلفة عن استخدام القيم المباشرة؟"], similar: ["ما الفرق بين int وInteger من ناحية إمكانية حمل null؟"]
    },
    {
      id: "java-mcq-2", title: "أي طريقة أفضل لدمج نصوص كثيرة داخل حلقة في جافا؟", difficulty: "medium", domain: "Java", type: "mcq", timeMinutes: 1,
      question: "أي طريقة هي الأفضل أداءً لبناء سلسلة نصية طويلة داخل حلقة تكرر آلاف المرات في جافا؟",
      options: ["استخدام + لدمج String مباشرة في كل تكرار", "استخدام StringBuilder وappend()", "استخدام String.concat() في كل تكرار", "لا فرق بين الطرق الثلاث"], correctIndex: 1,
      answer: "استخدام StringBuilder وappend()",
      explanation: "بما أن كائنات String في جافا immutable (غير قابلة للتغيير)، فإن استخدام + أو concat() داخل حلقة يُنشئ كائن String جديدًا بالكامل في كل تكرار وينسخ كل المحتوى السابق إليه، مما يجعل التعقيد الكلي O(n²) لبناء نص بطول n. أما StringBuilder فيستخدم مصفوفة أحرف داخلية قابلة للتغيير (mutable) يمكن التوسع فيها بكفاءة، فيصبح التعقيد الكلي O(n) فقط.",
      bestPractices: ["استخدم StringBuilder دائمًا عند بناء نص داخل حلقة، واحتفظ بـ String العادية للنصوص الثابتة أو دمج بسيط لمرة واحدة"],
      commonMistakes: ["استخدام += لدمج نصوص داخل حلقة كبيرة، مما يُبطئ الأداء بشكل كبير جدًا مع زيادة حجم البيانات"],
      followups: [], similar: ["ما الفرق بين StringBuilder وStringBuffer؟"]
    },
    {
      id: "java-6", title: "كيف يعمل Garbage Collection في جافا؟", difficulty: "hard", domain: "Java", type: "open", timeMinutes: 5,
      question: "اشرح فكرة عمل جامع القمامة (Garbage Collector) في جافا، وما هي 'الأجيال' (Generations) التي يعتمد عليها؟",
      answer: "جامع القمامة في جافا يُحرِّر تلقائيًا الذاكرة المشغولة بكائنات لم يعد لها أي مرجع نشط يصل إليها من الكود قيد التنفيذ (unreachable objects)، دون تدخل يدوي من المطور كما في C/C++. تعتمد معظم تطبيقات JVM الحديثة على 'جمع قمامة جيلي' (Generational GC): تُقسَّم الذاكرة (Heap) لمناطق حسب عمر الكائن؛ Young Generation للكائنات المُنشأة حديثًا (تُفحَص بكثرة لأن أغلب الكائنات تموت شابة)، وOld Generation للكائنات التي نجت من عدة دورات فحص وأثبتت أنها طويلة العمر (تُفحَص أقل تكرارًا).",
      explanation: "هذا التقسيم الجيلي مبني على ملاحظة تجريبية شائعة جدًا في معظم البرامج: أغلب الكائنات تُنشأ وتموت بسرعة (متغيرات مؤقتة داخل دالة)، بينما قلة من الكائنات تعيش طويلاً (كائنات على مستوى التطبيق بأكمله). فحص Young Generation بكثرة (لأنها صغيرة وتحتوي أغلب 'القمامة' المتوقعة) وOld Generation نادرًا (لأنها أكبر لكن أقل تغيرًا) يجعل الأداء الكلي لـ GC أفضل بكثير من فحص كل الذاكرة بنفس التكرار بغض النظر عن عمر الكائنات.",
      bestPractices: ["افهم أن GC يعمل تلقائيًا في الخلفية، وتجنب استدعاء System.gc() يدويًا (اقتراح فقط، لا يضمن التنفيذ الفوري، وقد يُسبب توقفات غير ضرورية)"],
      commonMistakes: ["الاحتفاظ بمراجع غير ضرورية لكائنات كبيرة لم تعد تُستخدم فعليًا (مثل قوائم static تتراكم بلا تفريغ)، مما يمنع GC من تحريرها ويُسبب تسريب ذاكرة منطقي رغم وجود GC"],
      followups: ["ما الفرق بين Minor GC وMajor/Full GC من ناحية التكلفة؟"], similar: ["ما هي خوارزميات GC الشائعة (Mark-and-Sweep, G1, ZGC)؟"]
    },
    {
      id: "java-mcq-3", title: "أي مجموعة في جافا آمنة للخيوط (thread-safe) افتراضيًا؟", difficulty: "medium", domain: "Java", type: "mcq", timeMinutes: 1,
      question: "أي من المجموعتين التاليتين آمنة افتراضيًا للاستخدام من عدة خيوط (thread-safe) دون أي تزامن إضافي يدوي؟",
      options: ["ArrayList", "Vector", "HashMap", "LinkedList"], correctIndex: 1,
      answer: "Vector",
      explanation: "Vector فئة قديمة (موجودة منذ الإصدارات الأولى لجافا) تُزامن (synchronize) كل دوالها داخليًا تلقائيًا، فتكون آمنة للاستخدام من عدة خيوط في نفس الوقت دون تزامن إضافي يدوي، لكن هذا يأتي بتكلفة أداء إضافية دائمة حتى في البرامج أحادية الخيط. ArrayList وHashMap وLinkedList الحديثة غير متزامنة افتراضيًا (أسرع في البرامج أحادية الخيط)، وتحتاج تزامنًا يدويًا صريحًا (مثل Collections.synchronizedList) أو استخدام بدائل مصممة للتزامن مثل ConcurrentHashMap عند الحاجة الفعلية لمشاركتها بين خيوط متعددة.",
      bestPractices: ["تجنّب Vector في الكود الحديث؛ استخدم ArrayList عادة، وإن احتجت أمانًا للخيوط استخدم Collections.synchronizedList أو الأفضل ConcurrentHashMap/CopyOnWriteArrayList المصممة خصيصًا للتزامن العالي الأداء"],
      commonMistakes: ["استخدام Vector اعتقادًا بأنه 'الخيار الآمن الافتراضي الأفضل'، بينما بدائل حديثة مصممة للتزامن أداؤها أفضل بكثير عند الحاجة الفعلية"],
      followups: [], similar: ["ما هو ConcurrentHashMap وكيف يختلف عن Collections.synchronizedMap؟"]
    },
  ]
},

/* ======================================================================
   C
   ====================================================================== */
{
  id: "c-lang",
  name: "C",
  icon: "🔧",
  intro: "لغة C أساس فهم كيفية عمل الحاسوب على مستوى منخفض: الذاكرة، المؤشرات (Pointers)، وإدارة الموارد يدويًا دون أي طبقة حماية تلقائية. مقابلات الأنظمة المدمجة (Embedded Systems) والأنظمة التشغيلية تعتمد بشكل كبير على إتقان هذه المفاهيم.",
  concepts: [
    { title: "المؤشرات (Pointers)", body: "متغير يخزّن عنوان ذاكرة متغيّر آخر بدلًا من قيمة مباشرة. فهم المؤشرات هو حجر الأساس لفهم كيفية تمرير البيانات بكفاءة، وبناء هياكل بيانات ديناميكية مثل القوائم المرتبطة." },
    { title: "إدارة الذاكرة اليدوية", body: "على عكس جافا أو بايثون، لا توجد إدارة ذاكرة تلقائية في C؛ يجب على المبرمج تخصيص الذاكرة يدويًا عبر malloc/calloc وتحريرها يدويًا عبر free، وإلا يحدث تسريب ذاكرة (memory leak)." },
    { title: "Structs", body: "تسمح بتجميع عدة متغيرات من أنواع مختلفة تحت اسم واحد، وهي أساس بناء هياكل بيانات مخصصة (مثل عقدة قائمة مرتبطة) قبل ظهور البرمجة الكائنية." }
  ],
  questions: [
    {
      id: "c-1", title: "ما هو المؤشر (Pointer) في C؟", difficulty: "medium", domain: "C", type: "open", timeMinutes: 4,
      question: "اشرح مفهوم Pointer في لغة C، ولماذا يُعتبر من أهم وأصعب المفاهيم للمبتدئين؟",
      answer: "المؤشر متغيّر يخزّن عنوان ذاكرة (memory address) متغيّر آخر بدلًا من تخزين قيمة مباشرة. يُعرَّف بإضافة * قبل اسم المتغير مثل int *ptr، ويُستخدم عامل & للحصول على عنوان متغيّر موجود، بينما يُستخدم عامل * (dereference) للوصول للقيمة المُخزَّنة في ذلك العنوان.",
      explanation: "صعوبتها للمبتدئين تأتي من التجريد المزدوج: يجب التفكير في عنوان الذاكرة والقيمة المُخزَّنة فيه كشيئين منفصلين تمامًا. الفائدة العملية الأساسية: تمرير مؤشر لدالة (بدلًا من نسخة كاملة من بيانات ضخمة) يوفر ذاكرة ووقتًا، ويسمح للدالة بتعديل القيمة الأصلية مباشرة (محاكاة pass-by-reference التي لا تدعمها C افتراضيًا).",
      example: "int x = 10;\nint *ptr = &x;    // ptr يخزّن عنوان x\nprintf(\"%d\", *ptr); // 10 - الوصول للقيمة عبر dereference\n\n*ptr = 20;         // تعديل x مباشرة عبر المؤشر\nprintf(\"%d\", x);    // 20",
      bestPractices: ["هيّئ كل مؤشر عند تعريفه (حتى بـ NULL) لتفادي 'المؤشرات المتطايرة' (wild pointers) التي تشير لذاكرة عشوائية"],
      commonMistakes: ["استخدام مؤشر قبل تهيئته (undefined behavior خطير)", "نسيان * عند dereference فتُعامل قيمة العنوان نفسها كقيمة البيانات بالخطأ"],
      followups: ["ما الفرق بين مؤشر (pointer) ومرجع (reference) في C++؟", "ما هو Pointer Arithmetic وكيف يرتبط بالمصفوفات؟"],
      similar: ["ما هو Double Pointer (**ptr) ومتى يُستخدم؟"]
    },
    {
      id: "c-2", title: "ما الفرق بين malloc وcalloc وrealloc وfree؟", difficulty: "medium", domain: "C", type: "open", timeMinutes: 4,
      question: "اشرح الفرق بين دوال إدارة الذاكرة الديناميكية في C: malloc وcalloc وrealloc وfree.",
      answer: "malloc(size) تخصّص كتلة ذاكرة بحجم size بايت دون تهيئتها (تحتوي قيمًا عشوائية غير محددة). calloc(n, size) تخصّص ذاكرة لـ n عنصر بحجم size لكل منها، مع تهيئة كل البايتات لصفر تلقائيًا. realloc(ptr, newSize) تُغيّر حجم كتلة ذاكرة مُخصَّصة سابقًا (توسيعًا أو تصغيرًا) مع الحفاظ على محتواها القديم قدر الإمكان. أما free(ptr) فتُحرّر الذاكرة المُخصَّصة سابقًا لتعود متاحة للنظام.",
      explanation: "نسيان free بعد malloc/calloc يُسبب تسريب ذاكرة (memory leak) يتراكم مع تكرار البرنامج، وقد يُستنفَد كل RAM المتاح في برنامج طويل التشغيل. بالمقابل، استخدام free مرتين على نفس المؤشر (double free) أو استخدام مؤشر بعد تحريره (use-after-free / dangling pointer) يُسبب سلوكًا غير معرّف (undefined behavior) قد يكون ثغرة أمنية خطيرة.",
      example: "int *arr = malloc(5 * sizeof(int));   // ذاكرة غير مهيّأة\nint *zeros = calloc(5, sizeof(int));  // ذاكرة مهيّأة بأصفار\n\narr = realloc(arr, 10 * sizeof(int));  // توسيع لـ 10 عناصر\n\nfree(arr);\nfree(zeros);\narr = NULL; // جيد: تفادي dangling pointer بعد التحرير",
      bestPractices: ["اجعل قيمة المؤشر NULL فورًا بعد free لتفادي dangling pointer عرضي لاحقًا", "تحقق دائمًا من قيمة الإرجاع (قد تكون NULL عند فشل التخصيص)"],
      commonMistakes: ["نسيان free مما يسبب تسريب ذاكرة تراكمي", "استخدام free مرتين على نفس المؤشر (double free)"],
      followups: ["كيف تكتشف تسريبات الذاكرة عمليًا باستخدام أداة مثل Valgrind؟"], similar: ["ما الفرق بين stack memory وheap memory؟"]
    },
    {
      id: "c-3", title: "ما الفرق بين struct وunion في C؟", difficulty: "medium", domain: "C", type: "open", timeMinutes: 3,
      question: "اشرح الفرق الجوهري بين struct وunion في C من ناحية استهلاك الذاكرة.",
      answer: "struct تُخصّص ذاكرة منفصلة لكل حقل بداخلها، فحجمها الكلي هو مجموع أحجام كل الحقول (بالإضافة لأي padding يضيفه المترجم للمحاذاة). أما union فتُخصّص ذاكرة واحدة مشتركة بحجم أكبر حقل فقط، وتشترك كل الحقول في نفس مساحة الذاكرة تلك؛ أي أن تعديل أحد الحقول يُغيّر (يُتلف) قيمة بقية الحقول لأنها كلها تتشارك نفس البايتات فعليًا.",
      explanation: "union مفيد عندما تعلم أن حقلًا واحدًا فقط سيكون نشطًا (ذا معنى) في أي لحظة معيّنة، مما يوفر ذاكرة كبيرة مقارنة بـ struct المكافئة، وهو شائع في برمجة الأنظمة المدمجة ومحركات الألعاب لتوفير الذاكرة عند التعامل مع أنواع بيانات متنوعة تُخزَّن في نفس الموقع حسب سياق معيّن (يُعرف أحيانًا باسم tagged union عند إضافة حقل يوضح أي نوع نشط حاليًا).",
      example: "struct Point { int x; int y; };  // sizeof = 8 بايت تقريبًا (4+4)\n\nunion Data { int i; float f; char str[4]; };\n// sizeof = 4 بايت فقط (أكبر عضو)، وكل الأعضاء يتشاركون نفس الذاكرة",
      bestPractices: ["استخدم union مع حقل 'tag' منفصل يوضح أي عضو نشط حاليًا لتفادي قراءة بيانات خاطئة"],
      commonMistakes: ["كتابة قيمة في عضو union ثم قراءتها من عضو آخر بالخطأ (نتيجة غير معرّفة عادة)"],
      followups: ["كيف تُحسب padding و alignment داخل struct؟"], similar: ["ما هو bit-field في C؟"]
    },
    {
      id: "c-mcq-1", title: "أي عامل يُستخدم للحصول على حجم نوع بيانات؟", difficulty: "easy", domain: "C", type: "mcq", timeMinutes: 1,
      question: "أي عامل (operator) في C يُستخدم لمعرفة حجم نوع بيانات أو متغيّر بالبايت؟",
      options: ["length()", "sizeof", "size()", "bytesOf"], correctIndex: 1,
      answer: "sizeof",
      explanation: "sizeof عامل مدمج في اللغة (وليس دالة عادية) يُحسب وقت الترجمة غالبًا، ويُرجع حجم أي نوع بيانات أو متغيّر بالبايت، وهو أساسي جدًا عند استخدام malloc لحساب الحجم المطلوب بدقة بغض النظر عن منصة التشغيل.",
      bestPractices: ["استخدم sizeof(*ptr) بدلًا من sizeof(int) مباشرة عند تخصيص ذاكرة لمؤشر، لتفادي أخطاء عند تغيير نوع المؤشر لاحقًا"],
      commonMistakes: ["افتراض حجم ثابت لنوع بيانات (مثل int دائمًا 4 بايت) دون استخدام sizeof، رغم اختلاف ذلك بين بعض المنصات"],
      followups: [], similar: ["ما الفرق بين sizeof(array) وsizeof(pointer) عند تمرير مصفوفة لدالة؟"]
    },
    {
      id: "c-tf-1", title: "صح أو خطأ: يمكن لدالة C إرجاع أكثر من قيمة عبر المؤشرات", difficulty: "medium", domain: "C", type: "tf", timeMinutes: 1,
      question: "صح أم خطأ: رغم أن دالة C يمكنها إرجاع return قيمة واحدة فقط، يمكن محاكاة إرجاع عدة قيم عبر تمرير مؤشرات كمعاملات وتعديل القيم التي تُشير إليها داخل الدالة.",
      isTrue: true,
      answer: "صح.",
      explanation: "بما أن C لا تدعم إرجاع أكثر من قيمة مباشرة عبر return، فإن الأسلوب الشائع لتحقيق ذلك هو تمرير مؤشرات (pointers) كمعاملات إضافية للدالة، ثم dereference هذه المؤشرات داخل الدالة لتعديل القيم الأصلية في مكان استدعائها مباشرة، مما يحاكي تأثير إرجاع عدة قيم.",
      bestPractices: ["وثّق بوضوح أي معامل مؤشر في الدالة يُستخدم كـ 'مخرج' (output parameter) وليس فقط كمدخل"],
      commonMistakes: ["نسيان تمرير عنوان المتغير (&) عند استدعاء دالة تتوقع مؤشرًا"],
      followups: [], similar: ["كيف تُرجع struct كاملة من دالة في C كبديل لعدة مؤشرات؟"]
    },
    {
      id: "c-4", title: "ما الفرق بين #define وconst في C؟", difficulty: "medium", domain: "C", type: "open", timeMinutes: 3,
      question: "متى تستخدم #define ومتى تستخدم const لتعريف قيمة ثابتة في C؟",
      answer: "#define هي تعليمة معالج مسبق (preprocessor directive): تُستبدَل بقيمتها النصية الحرفية في كل مكان تظهر فيه قبل أي ترجمة فعلية للكود، دون أي فحص نوع (type checking) على الإطلاق. const تُعرِّف متغيّرًا حقيقيًا في اللغة نفسها (لا المعالج المسبق) بقيمة لا يمكن تعديلها بعد التهيئة، مع فحص نوع كامل من المترجم، ويحتل فعليًا مساحة في الذاكرة (بعكس #define التي لا تحتل أي ذاكرة لأنها مجرد استبدال نصي).",
      explanation: "المشكلة العملية مع #define أنها لا تخضع لأي قواعد النطاق (scope) في اللغة، ولا يستطيع المصحح (debugger) رؤيتها كمتغيّر حقيقي (فقط كنص مُستبدَل مسبقًا)، ولا يوجد فحص نوع يمنع أخطاء منطقية (مثل #define MAX_SIZE \"100\" بدلاً من 100 كرقم). const أكثر أمانًا وقابلية للتصحيح، وتُفضَّل في الكود الحديث لأي ثابت يحتاج فحص نوع أو ظهورًا واضحًا في أدوات التصحيح.",
      example: "#define MAX_SIZE 100   // استبدال نصي بحت، بلا فحص نوع\nconst int max_size = 100;  // متغيّر حقيقي، بفحص نوع كامل، يظهر في المصحح",
      bestPractices: ["فضّل const على #define للثوابت العادية في الكود الحديث، واحتفظ بـ #define للحالات التي تحتاج فعليًا معالجة مسبقة (مثل include guards أو macros شرطية)"],
      commonMistakes: ["استخدام #define لقيم معقدة دون قوسين حولها، مما يُسبب أخطاء ترتيب عمليات حسابية غير متوقعة بعد الاستبدال النصي المباشر"],
      followups: ["ما هي include guards وكيف تعمل عبر #define و#ifndef؟"], similar: ["ما الفرق بين macro function وinline function حقيقية؟"]
    },
    {
      id: "c-mcq-2", title: "ما هو Segmentation Fault في C؟", difficulty: "medium", domain: "C", type: "mcq", timeMinutes: 2,
      question: "ما هو السبب الأكثر شيوعًا لحدوث Segmentation Fault في برنامج C؟",
      options: ["نسيان فاصلة منقوطة في نهاية سطر", "الوصول لذاكرة غير مخصصة للبرنامج (مثل مؤشر NULL أو محرَّر مسبقًا)", "استخدام حلقة for بدلاً من while", "تسمية متغيّر بأحرف عربية"], correctIndex: 1,
      answer: "الوصول لذاكرة غير مخصصة للبرنامج (مثل مؤشر NULL أو محرَّر مسبقًا).",
      explanation: "Segmentation Fault يحدث عندما يحاول البرنامج الوصول لعنوان ذاكرة لا يملك الإذن للوصول إليه، أو غير مخصص له إطلاقًا؛ الأسباب الشائعة تشمل: dereference مؤشر NULL أو مؤشر لم يُهيَّأ، الوصول لذاكرة حُرِّرت بالفعل عبر free() (dangling pointer)، أو تجاوز حدود مصفوفة (buffer overflow) للكتابة خارج المساحة المخصصة لها.",
      bestPractices: ["استخدم أدوات مثل Valgrind أو AddressSanitizer لتشخيص أخطاء الذاكرة هذه بدقة قبل الوصول للإنتاج"],
      commonMistakes: ["إهمال فحص قيمة إرجاع malloc قبل استخدامها (قد تكون NULL عند فشل التخصيص)، مما يُسبب segfault فور أول محاولة استخدام لذلك المؤشر الفاشل"],
      followups: [], similar: ["ما هو Buffer Overflow وكيف يرتبط بثغرات أمنية خطيرة؟"]
    },
    {
      id: "c-5", title: "ما هو Function Pointer في C؟", difficulty: "hard", domain: "C", type: "open", timeMinutes: 4,
      question: "ما هو المؤشر للدالة (Function Pointer) في C، وما فائدته العملية؟",
      answer: "Function Pointer متغيّر يخزّن عنوان دالة في الذاكرة بدلاً من عنوان بيانات عادية، مما يسمح باستدعاء تلك الدالة بشكل غير مباشر عبر ذلك المؤشر، أو تمرير دالة كمعامل لدالة أخرى، أو تخزين عدة دوال في مصفوفة واختيار أيها يُستدعى وقت التشغيل بناءً على شرط معيّن.",
      explanation: "الاستخدام الكلاسيكي الأشهر هو دوال 'callback': تمرير مؤشر لدالة معيّنة كمعامل لدالة أخرى، لتُستدعى تلك الدالة الممرَّرة في لحظة معينة داخل الدالة المستقبِلة (مثل دالة ترتيب qsort في مكتبة C القياسية التي تأخذ مؤشرًا لدالة مقارنة مخصصة تحدد ترتيب العناصر). هذا يمنح مرونة كبيرة: يمكن لنفس دالة الترتيب qsort العمل مع أي معيار ترتيب مخصص، طالما وفّرت دالة مقارنة مناسبة كـ function pointer.",
      example: "int compare(const void *a, const void *b) {\n    return (*(int*)a - *(int*)b);\n}\n\nint arr[] = {5, 2, 8, 1};\nqsort(arr, 4, sizeof(int), compare); // تمرير function pointer كمعيار ترتيب",
      bestPractices: ["استخدم function pointers لتصميم دوال عامة قابلة للتخصيص (مثل خوارزميات ترتيب أو بحث تقبل معيارًا مخصصًا)"],
      commonMistakes: ["الخلط بين استدعاء دالة مباشرة func() وتمرير مؤشرها func (بدون أقواس) كقيمة، مما يُسبب أخطاء ترجمة أو سلوكًا غير متوقع"],
      followups: ["كيف تُعرِّف typedef لتبسيط صياغة function pointer المعقدة؟"], similar: ["كيف تُنفَّذ آلية callbacks المشابهة في لغات حديثة مثل JavaScript؟"]
    },
    {
      id: "c-mcq-3", title: "أي منطقة ذاكرة تُستخدم للمتغيرات المحلية في دالة C؟", difficulty: "easy", domain: "C", type: "mcq", timeMinutes: 1,
      question: "أي منطقة من الذاكرة تُخصَّص تلقائيًا للمتغيرات المحلية (local variables) داخل دالة C عند استدعائها؟",
      options: ["Heap", "Stack", "Data Segment", "Code Segment"], correctIndex: 1,
      answer: "Stack",
      explanation: "المتغيرات المحلية داخل دالة تُخصَّص تلقائيًا على الـ Stack عند دخول الدالة، وتُحرَّر تلقائيًا عند خروجها (بلا أي تدخل من المبرمج)، بعكس الذاكرة المُخصَّصة يدويًا عبر malloc التي تقع على الـ Heap وتبقى محجوزة حتى يُستدعى free() صراحة عليها.",
      bestPractices: ["تذكّر أن أي مؤشر يُعيد عنوان متغيّر محلي من دالة (return &local_var) خطر جدًا، لأن تلك الذاكرة تُحرَّر فور خروج الدالة (dangling pointer فوري)"],
      commonMistakes: ["إرجاع عنوان متغيّر محلي (stack) من دالة، مما ينتج مؤشرًا معلَّقًا يُشير لذاكرة أصبحت غير صالحة فور عودة الدالة"],
      followups: [], similar: ["ما الفرق بين Stack وHeap من ناحية سرعة التخصيص وحجم المساحة المتاحة؟"]
    },
    {
      id: "c-6", title: "ما هي الكلمة المفتاحية volatile في C؟", difficulty: "hard", domain: "C", type: "open", timeMinutes: 4,
      question: "ما فائدة الكلمة المفتاحية volatile عند تعريف متغيّر في C؟",
      answer: "volatile تُخبر المترجم أن قيمة هذا المتغيّر قد تتغيّر في أي لحظة من مصدر خارج نطاق سيطرة الكود العادي الحالي (مثل جهاز عتاد خارجي، إشارة مقاطعة interrupt، أو خيط آخر)، لذا يجب على المترجم قراءة القيمة الفعلية من الذاكرة في كل مرة يُشار إليها، دون أي تحسينات (optimizations) تفترض أن القيمة لم تتغيّر منذ آخر قراءة (مثل تخزينها مؤقتًا في سجل معالج register لتسريع الوصول).",
      explanation: "بدون volatile، قد يُحسِّن المترجم كودًا يقرأ نفس المتغيّر عدة مرات في حلقة انتظار (polling loop) عبر قراءته مرة واحدة فقط وتخزينه في سجل، معتقدًا أن قيمته لن تتغيّر لأن لا شيء في الكود الظاهر يُعدِّلها؛ لكن إن كانت القيمة تُغيَّر فعليًا من مصدر خارجي (كإشارة مقاطعة عتاد)، فإن هذا التحسين يجعل الحلقة 'تعلق' منتظرة قيمة لن تتغيّر أبدًا في نظرها. volatile يمنع هذا التحسين الخاطئ صراحة.",
      example: "volatile int flag = 0; // قد تُغيّرها إشارة مقاطعة (interrupt) خارجية\n\nwhile (flag == 0) {\n    // بدون volatile: قد يُحسِّن المترجم هذا لقراءة واحدة فقط ويُعلّق للأبد\n    // مع volatile: يُعيد قراءة flag من الذاكرة فعليًا في كل تكرار\n}",
      bestPractices: ["استخدم volatile للمتغيرات التي تُعدَّل من إشارات مقاطعة (interrupt handlers) أو عتاد خارجي في برمجة الأنظمة المدمجة، وليس كبديل عام لآليات تزامن الخيوط الفعلية (مثل mutex)"],
      commonMistakes: ["الاعتقاد بأن volatile كافية وحدها لضمان أمان الوصول المتزامن من عدة خيوط (thread safety)، بينما هي فقط تمنع تحسينات ترجمة معيّنة ولا توفر أي ضمان تزامن فعلي (atomicity) بحد ذاتها"],
      followups: ["كيف يختلف volatile عن استخدام mutex لحماية بيانات مشتركة بين خيوط؟"], similar: ["ما هو دور volatile في برمجة الأنظمة المدمجة (Embedded Systems) تحديدًا؟"]
    },
    {
      id: "c-mcq-4", title: "أي عملية تُسبب Padding داخل struct في C؟", difficulty: "hard", domain: "C", type: "mcq", timeMinutes: 2,
      question: "لماذا قد يكون sizeof(struct) أكبر من مجموع أحجام حقوله الفردية في C؟",
      options: ["خطأ في المترجم دائمًا", "المترجم يُضيف بايتات فارغة (Padding) بين الحقول لضمان محاذاة (alignment) صحيحة في الذاكرة حسب متطلبات المعالج", "لغة C تُضيف حقلاً خفيًا دائمًا", "يعتمد فقط على نظام التشغيل وليس المعالج"], correctIndex: 1,
      answer: "المترجم يُضيف بايتات فارغة (Padding) بين الحقول لضمان محاذاة (alignment) صحيحة في الذاكرة حسب متطلبات المعالج.",
      explanation: "معظم المعالجات تقرأ الذاكرة بكفاءة أعلى عندما تكون البيانات 'محاذاة' (aligned) على حدود عناوين معيّنة (مثل عنوان يقبل القسمة على 4 لعدد int)؛ لضمان ذلك، قد يُضيف المترجم بايتات فارغة (padding) بين حقول struct مختلفة الحجم لإبقاء كل حقل محاذًى بشكل صحيح، مما يجعل الحجم الكلي لـ struct أكبر أحيانًا من مجموع أحجام حقوله الفردية المُعلَنة.",
      bestPractices: ["رتّب حقول struct من الأكبر للأصغر حجمًا لتقليل الـ padding الإجمالي الناتج، إن كان توفير الذاكرة مهمًا (خصوصًا في struct بكميات ضخمة أو أنظمة مدمجة محدودة الموارد)"],
      commonMistakes: ["افتراض أن sizeof(struct) يساوي دائمًا مجموع sizeof كل حقل على حدة، دون أخذ padding والمحاذاة بعين الاعتبار"],
      followups: ["كيف تستخدم #pragma pack لتعطيل أو تعديل سلوك padding الافتراضي؟"], similar: ["كيف تختلف محاذاة الذاكرة بين معماريات معالج مختلفة (32-بت مقابل 64-بت)؟"]
    },
  ]
},

/* ======================================================================
   C++
   ====================================================================== */
{
  id: "cpp",
  name: "C++",
  icon: "➕",
  intro: "C++ تجمع بين التحكم منخفض المستوى للغة C والتجريد الكائني عالي المستوى، وتُستخدم في مقابلات الأنظمة عالية الأداء (محركات الألعاب، التداول عالي التردد، الأنظمة المدمجة). الأسئلة تركّز على إدارة الذاكرة الآمنة (RAII، Smart Pointers) وتعدد الأشكال (Polymorphism) عبر الدوال الافتراضية.",
  concepts: [
    { title: "RAII (Resource Acquisition Is Initialization)", body: "مبدأ تصميمي أساسي في C++ يربط دورة حياة المورد (ذاكرة، ملف، اتصال) بدورة حياة كائن؛ يُحصَّل المورد في الباني (constructor) ويُحرَّر تلقائيًا في الهادم (destructor)، مما يمنع تسريبات الموارد حتى عند حدوث استثناءات." },
    { title: "Smart Pointers", body: "unique_ptr وshared_ptr وweak_ptr هي أغلفة (wrappers) حول المؤشرات الخام تُطبّق RAII تلقائيًا لتحرير الذاكرة، مما يُقلّل الحاجة لاستخدام new/delete يدويًا وتسريبات الذاكرة الناتجة عن نسيانها." },
    { title: "Virtual Functions وPolymorphism", body: "الدالة الافتراضية (virtual) تسمح لفئة فرعية بإعادة تعريف سلوك دالة الفئة الأب، ويُحدَّد أي تنفيذ يُستدعى فعليًا وقت التشغيل (runtime) بدلًا من وقت الترجمة، عبر آلية داخلية تُسمى جدول الدوال الافتراضية (vtable)." }
  ],
  questions: [
    {
      id: "cpp-1", title: "ما الفرق بين Pointer وReference في C++؟", difficulty: "medium", domain: "C++", type: "open", timeMinutes: 4,
      question: "اشرح الفرق بين استخدام مؤشر (pointer) ومرجع (reference) في C++، ومتى تختار كلًا منهما؟",
      answer: "المؤشر متغيّر يخزّن عنوان ذاكرة، يمكن إعادة إسناده ليشير لمتغيّر آخر لاحقًا، ويمكن أن يكون NULL (لا يشير لشيء)، ويحتاج dereference صريح (*) للوصول لقيمته. أما المرجع فهو اسم بديل (alias) لمتغيّر موجود بالفعل: يجب تهيئته فور تعريفه، ولا يمكن إعادة ربطه بمتغيّر آخر لاحقًا، ولا يمكن أن يكون 'فارغًا'، ويُستخدم بنفس صياغة المتغيّر العادي دون الحاجة لـ * صريحة.",
      explanation: "من الناحية العملية، المراجع أكثر أمانًا من المؤشرات لأنها لا يمكن أن تكون NULL ولا تحتاج فحص صحة قبل الاستخدام، لذا يُفضّل استخدام المراجع كمعاملات دوال (خصوصًا const &) لتفادي نسخ كائنات ضخمة دون تحمّل مخاطر المؤشرات الخام (مثل dangling pointers). المؤشرات تبقى ضرورية عندما تحتاج فعليًا 'لا شيء' كقيمة ممكنة، أو عندما تحتاج إعادة توجيه نفس المتغيّر لكائنات مختلفة بمرور الوقت.",
      example: "void byReference(int &x) { x = 100; } // آمن، لا يمكن أن يكون x فارغًا\nvoid byPointer(int *x) { if (x) *x = 100; } // يحتاج فحص NULL\n\nint a = 5;\nint &ref = a;   // مرجع - alias دائم لـ a\nint *ptr = &a;  // مؤشر - يمكن إعادة توجيهه لاحقًا لمتغيّر آخر",
      bestPractices: ["فضّل const & كمعامل دالة لتمرير كائنات كبيرة دون نسخ ودون الحاجة لفحص NULL", "استخدم smart pointers بدلًا من مؤشرات خام عند الحاجة لملكية ديناميكية"],
      commonMistakes: ["استخدام مؤشر عندما يكفي مرجع، مما يضيف تعقيدًا غير ضروري وفحوصات NULL زائدة"],
      followups: ["لماذا لا يمكن أن يكون هناك 'مصفوفة مراجع' (array of references) في C++؟"], similar: ["ما هو rvalue reference (&&) وما علاقته بـ move semantics؟"]
    },
    {
      id: "cpp-2", title: "اشرح RAII وSmart Pointers", difficulty: "hard", domain: "C++", type: "open", timeMinutes: 5,
      question: "ما هو مبدأ RAII في C++، وكيف تطبّقه أنواع Smart Pointers مثل unique_ptr وshared_ptr؟",
      answer: "RAII يعني ربط حيازة أي مورد (ذاكرة، مقبض ملف، قفل mutex) بلحظة إنشاء كائن، وربط تحرير ذلك المورد تلقائيًا بلحظة تدمير الكائن (عند خروجه من النطاق scope)، سواء انتهى البرنامج بشكل طبيعي أو بسبب استثناء. unique_ptr يُطبّق هذا لملكية حصرية: عندما يخرج من النطاق، يُحرِّر الذاكرة التي يملكها تلقائيًا عبر delete داخلي، ولا يمكن نسخه (فقط نقله عبر std::move). أما shared_ptr فيسمح بملكية مشتركة بين عدة مؤشرات عبر عداد مراجع (reference counting)؛ الذاكرة تُحرَّر فقط عندما يصل هذا العداد للصفر (آخر shared_ptr يخرج من النطاق).",
      explanation: "قبل C++11 وSmart Pointers، كان على المطور استدعاء delete يدويًا لكل new، وأي استثناء يحدث بين new وdelete يُسبب تسريب ذاكرة مضمونًا. RAII عبر smart pointers يحل هذه المشكلة جذريًا: الهادم (destructor) يُستدعى تلقائيًا دائمًا عند خروج الكائن من النطاق (حتى أثناء 'فك الستاك' stack unwinding الناتج عن استثناء)، فيُضمن تحرير الذاكرة دون أي كود إضافي من المطور.",
      example: "void process() {\n    std::unique_ptr<Resource> res = std::make_unique<Resource>();\n    // ... حتى لو حدث استثناء هنا ...\n    doSomethingRisky();\n} // res يُحرَّر تلقائيًا هنا دائمًا، بلا تسريب أبدًا",
      bestPractices: ["استخدم unique_ptr كخيار افتراضي، وshared_ptr فقط عند الحاجة الحقيقية لملكية مشتركة", "تجنّب new/delete اليدوي المباشر تمامًا في كود C++ حديث"],
      commonMistakes: ["إنشاء دورة مرجعية (reference cycle) بين كائنين shared_ptr يشير كل منهما للآخر، مما يمنع تحرير الذاكرة أبدًا (يُحل باستخدام weak_ptr)"],
      followups: ["ما هو weak_ptr وكيف يحل مشكلة الدورات المرجعية؟"], similar: ["ما هو move semantics وstd::move؟"]
    },
    {
      id: "cpp-3", title: "لماذا يجب أن يكون الهادم افتراضيًا (virtual destructor)؟", difficulty: "hard", domain: "C++", type: "open", timeMinutes: 4,
      question: "لماذا يجب أن تكون دالة الهدم (destructor) في فئة أب افتراضية (virtual) إذا كانت هذه الفئة ستُستخدم بتعدد الأشكال (polymorphically)؟",
      answer: "إذا حذفت كائنًا فرعيًا عبر مؤشر من نوع الفئة الأب (Base* ptr = new Derived(); delete ptr;) بدون أن يكون هادم الفئة الأب افتراضيًا، فسيُستدعى فقط هادم الفئة الأب، وليس هادم الفئة الفرعية، مما يُسبب تسريب أي موارد خصصتها الفئة الفرعية تحديدًا (سلوك غير معرّف/جزئي التحرير). جعل الهادم virtual يضمن استدعاء السلسلة الكاملة من الهدامات (من الفرعية للأب) بالترتيب الصحيح.",
      explanation: "هذه من أكثر الأخطاء التي تُسأل عنها في مقابلات C++ المتقدمة لأنها تبدو 'تعمل' في اختبار سريع (البرنامج لا يتعطل فورًا) لكنها تُسبب تسريب موارد صامتًا في الإنتاج. القاعدة العامة: أي فئة مصممة لتكون فئة أب لتعدد الأشكال (أي لديها دالة virtual واحدة على الأقل) يجب أن يكون هادمها virtual أيضًا، حتى لو كان فارغًا.",
      example: "class Base {\npublic:\n    virtual ~Base() {}  // صحيح: افتراضي\n};\nclass Derived : public Base {\n    int* data = new int[100];\npublic:\n    ~Derived() { delete[] data; }\n};\n\nBase* ptr = new Derived();\ndelete ptr; // بفضل virtual ~Base()، يُستدعى ~Derived() ثم ~Base() بالترتيب الصحيح",
      bestPractices: ["اجعل هادم أي فئة أب مُصمَّمة للوراثة والتعامل عبر مؤشرات polymorphic دائمًا virtual"],
      commonMistakes: ["نسيان virtual على الهادم في فئة أب، فيبدو الكود يعمل حتى تظهر تسريبات الذاكرة لاحقًا في الإنتاج"],
      followups: ["ما هو vtable وكيف يرتبط بتكلفة الأداء الطفيفة لاستخدام virtual؟"], similar: ["ما الفرق بين override وfinal في C++11؟"]
    },
    {
      id: "cpp-mcq-1", title: "أي حاوية STL تحافظ على العناصر مرتبة تلقائيًا؟", difficulty: "medium", domain: "C++", type: "mcq", timeMinutes: 1,
      question: "أي من حاويات STL التالية تحافظ على عناصرها مرتبة تلقائيًا (عادة عبر شجرة حمراء-سوداء داخليًا)؟",
      options: ["std::vector", "std::unordered_map", "std::map", "std::deque"], correctIndex: 2,
      answer: "std::map",
      explanation: "std::map تحافظ على مفاتيحها مرتبة تلقائيًا (تصاعديًا افتراضيًا) عبر تطبيق داخلي يعتمد عادة على شجرة حمراء-سوداء متوازنة، مما يجعل عمليات البحث والإدراج O(log n). بالمقابل std::unordered_map تستخدم جدول تجزئة (hash table) بدون أي ترتيب مضمون، لكنها أسرع في المتوسط O(1) للبحث والإدراج.",
      bestPractices: ["استخدم unordered_map عندما لا تحتاج ترتيبًا وتريد أداءً أفضل في المتوسط، وmap عندما يهمك الترتيب أو أسوأ حالة (worst case) مضمونة"],
      commonMistakes: ["استخدام map افتراضيًا دون الحاجة الفعلية للترتيب، فتخسر أداءً مقارنة بـ unordered_map"],
      followups: [], similar: ["ما الفرق بين std::set وstd::unordered_set؟"]
    },
    {
      id: "cpp-tf-1", title: "صح أو خطأ: struct وclass متطابقتان في C++ عدا التحكم الافتراضي بالوصول", difficulty: "medium", domain: "C++", type: "tf", timeMinutes: 1,
      question: "صح أم خطأ: في C++ (بعكس C)، الفرق الوحيد بين struct وclass هو أن أعضاء struct عامة (public) افتراضيًا بينما أعضاء class خاصة (private) افتراضيًا.",
      isTrue: true,
      answer: "صح.",
      explanation: "في C++، كل من struct وclass يمكنهما احتواء دوال، باني وهادم، ودعم الوراثة تمامًا بنفس القدرات. الفرق الوحيد الفعلي هو مستوى الوصول الافتراضي: أعضاء struct عامة (public) ما لم يُحدَّد غير ذلك صراحة، بينما أعضاء class خاصة (private) افتراضيًا. عمليًا، يستخدم كثير من المطورين struct لهياكل بيانات بسيطة (POD - Plain Old Data) وclass للكائنات ذات السلوك والتغليف الكامل، لكن هذا مجرد اصطلاح (convention) وليس قيدًا تقنيًا من اللغة.",
      bestPractices: ["استخدم struct اصطلاحًا لحاويات بيانات بسيطة بدون منطق معقد، وclass للكائنات ذات السلوك والتغليف"],
      commonMistakes: [], followups: [], similar: ["ما هو POD (Plain Old Data) في C++؟"]
    },
    {
      id: "cpp-4", title: "ما هو Operator Overloading في C++؟", difficulty: "medium", domain: "C++", type: "open", timeMinutes: 4,
      question: "ما هو تعدد تحميل العوامل (Operator Overloading)، وأعطِ مثالاً عمليًا لفائدته؟",
      answer: "Operator Overloading يسمح بإعادة تعريف سلوك عامل موجود (مثل + أو == أو <<) ليعمل بشكل مخصص مع أنواع بيانات معرَّفة من قبل المستخدم (فئات/كلاسات)، بدلاً من الاقتصار على العمل مع الأنواع البدائية فقط. هذا يجعل استخدام الكائنات المخصصة أكثر طبيعية وقابلية للقراءة، كأنها أنواع بيانات مدمجة في اللغة نفسها.",
      explanation: "مثال شائع: فئة Vector2D تمثّل نقطة إحداثية ثنائية الأبعاد؛ بدون overloading، جمع نقطتين يتطلب استدعاء دالة صريحة مثل v1.add(v2)، بينما مع overloading لعامل +، يمكن كتابة v1 + v2 مباشرة بشكل طبيعي وبديهي، تمامًا كما تجمع رقمين عاديين. يجب استخدام هذه الميزة بحكمة؛ إعادة تعريف عامل بسلوك غير متوقع (مثل جعل + يقوم بعملية طرح فعليًا) يُربك أي مطور آخر يقرأ الكود ويتوقع سلوكًا منطقيًا للعامل المألوف.",
      example: "class Vector2D {\npublic:\n    double x, y;\n    Vector2D operator+(const Vector2D& other) const {\n        return Vector2D{x + other.x, y + other.y};\n    }\n};\n\nVector2D a{1, 2}, b{3, 4};\nVector2D c = a + b; // يستدعي operator+ المخصص، ينتج {4, 6}",
      bestPractices: ["اجعل سلوك العامل المُعاد تعريفه منطقيًا ومتوقعًا تمامًا كما يُفهم ذلك العامل عادة (+ يجمع، == يقارن للتساوي)"],
      commonMistakes: ["إعادة تعريف عامل بسلوك غير بديهي على الإطلاق، مما يجعل الكود مربكًا ومضللاً لأي قارئ آخر"],
      followups: ["كيف يختلف تعدد تحميل العوامل عن Function Overloading العادي؟"], similar: ["كيف تعمل << وoperator<< لطباعة كائن مخصص مباشرة عبر cout؟"]
    },
    {
      id: "cpp-mcq-2", title: "ما هو Rule of Three في C++؟", difficulty: "hard", domain: "C++", type: "mcq", timeMinutes: 2,
      question: "حسب Rule of Three في C++، إذا احتاجت فئة تعريف الهادم (destructor) يدويًا، فما الدالتان الأخريان اللتان يجب تعريفهما عادة أيضًا؟",
      options: ["الباني الافتراضي وoperator==", "باني النسخ (Copy Constructor) وoperator النسخ (Copy Assignment)", "operator+ وoperator-", "static methods فقط"], correctIndex: 1,
      answer: "باني النسخ (Copy Constructor) وoperator النسخ (Copy Assignment).",
      explanation: "Rule of Three ينص على أنه إذا احتاجت فئة تعريف أيٍّ من الثلاثة يدويًا (الهادم، باني النسخ، أو عامل إسناد النسخ)، فهي غالبًا تحتاج الثلاثة معًا. السبب: الحاجة لهادم مخصص عادة تعني أن الفئة تُدير موردًا (مثل ذاكرة مُخصَّصة يدويًا)؛ إن لم تُعرَّف باني النسخ وعامل الإسناد يدويًا، سيستخدم المترجم النسخ الافتراضي (نسخ سطحي للمؤشر فقط)، مما يجعل نسختين تشيران لنفس الذاكرة، فيحاول كلاهما تحريرها عند التدمير (double free خطير).",
      bestPractices: ["في C++ الحديثة (C++11+)، فضّل Rule of Five (يضيف move constructor وmove assignment) أو الأفضل: استخدم smart pointers لتفادي الحاجة لكتابة أيٍّ من هذه يدويًا أصلاً"],
      commonMistakes: ["تعريف هادم مخصص فقط دون باني النسخ وعامل الإسناد، مما يُسبب أخطاء ذاكرة خطيرة (double free) عند نسخ كائنات من تلك الفئة"],
      followups: ["ما هو Rule of Five وكيف يضيف Move Semantics للثلاثة الأصليين؟"], similar: ["كيف تتجنب Rule of Three/Five تمامًا باستخدام unique_ptr؟"]
    },
    {
      id: "cpp-5", title: "ما هو Template في C++؟", difficulty: "hard", domain: "C++", type: "open", timeMinutes: 4,
      question: "ما هو Template في C++، وكيف يسمح بكتابة كود عام (generic) يعمل مع أي نوع بيانات؟",
      answer: "Template يسمح بكتابة دالة أو فئة 'عامة' (generic) مرة واحدة فقط، تعمل مع أي نوع بيانات دون تكرار نفس الكود لكل نوع على حدة. عند استخدام Template مع نوع معيّن (مثل int أو string أو فئة مخصصة)، يُنشئ المترجم نسخة مخصصة (instantiation) من ذلك الكود لذلك النوع تحديدًا وقت الترجمة، فلا توجد أي تكلفة أداء إضافية وقت التشغيل مقارنة بكتابة الكود يدويًا لكل نوع.",
      explanation: "مثال كلاسيكي: بدلاً من كتابة دالة max منفصلة لكل نوع (maxInt، maxDouble، maxString...)، تكتب دالة Template واحدة عامة تعمل مع أي نوع يدعم عامل المقارنة <. مكتبة STL بأكملها (vector، map، algorithms مثل sort) مبنية على Templates، وهذا سبب قدرتها على العمل مع أي نوع بيانات (بدائية أو مخصصة) دون تكرار الكود لكل نوع.",
      example: "template <typename T>\nT getMax(T a, T b) {\n    return (a > b) ? a : b;\n}\n\ngetMax(5, 10);       // T = int\ngetMax(3.5, 2.1);    // T = double\ngetMax(\"abc\", \"xyz\"); // T = const char*",
      bestPractices: ["استخدم Templates لكتابة خوارزميات أو حاويات عامة تحتاجها بأنواع بيانات متعددة، بدلاً من تكرار نفس المنطق لكل نوع"],
      commonMistakes: ["كتابة عدة دوال مكررة تقريبًا لنفس المنطق مع أنواع بيانات مختلفة فقط، بدلاً من استخدام Template واحد عام يغطي كل الحالات"],
      followups: ["ما الفرق بين Template Function وTemplate Class؟"], similar: ["كيف تعمل Templates في C++ مقارنة بـ Generics في جافا أو C#؟"]
    },
    {
      id: "cpp-mcq-3", title: "ما الفرق بين Compile-time وRun-time Polymorphism في C++؟", difficulty: "hard", domain: "C++", type: "mcq", timeMinutes: 2,
      question: "أي مما يلي مثال على Compile-time Polymorphism (وليس Run-time) في C++؟",
      options: ["Virtual Functions", "Function Overloading", "Dynamic Binding عبر مؤشر فئة أب", "Abstract Classes"], correctIndex: 1,
      answer: "Function Overloading",
      explanation: "Function Overloading يُحدَّد أي نسخة من الدالة تُستدعى وقت الترجمة (compile-time) بناءً على عدد ونوع المعاملات الممرَّرة، ولذا يُسمى Compile-time (أو Static) Polymorphism. أما Virtual Functions (المستخدمة عبر مؤشر أو مرجع فئة أب للإشارة لكائن فئة فرعية) فيُحدَّد أي نسخة فعلية تُنفَّذ وقت التشغيل (runtime) فعليًا بناءً على النوع الحقيقي للكائن، ولذا تُسمى Run-time (أو Dynamic) Polymorphism.",
      bestPractices: ["ميّز بوضوح بين النوعين عند الإجابة في المقابلات: Overloading = compile-time، Virtual Functions = runtime"],
      commonMistakes: ["الخلط بين Overloading وOverriding، رغم أن الأول compile-time polymorphism والثاني runtime polymorphism"],
      followups: [], similar: ["كيف تعمل vtable لتفعيل Runtime Polymorphism داخليًا؟"]
    },
    {
      id: "cpp-6", title: "ما الفرق بين new/delete وmalloc/free في C++؟", difficulty: "medium", domain: "C++", type: "open", timeMinutes: 3,
      question: "لماذا يُفضَّل new/delete على malloc/free في كود C++، رغم أن كليهما يُخصّص ذاكرة ديناميكية؟",
      answer: "new تُخصّص ذاكرة وتستدعي تلقائيًا الباني (constructor) للكائن المُنشأ، بينما malloc تُخصّص ذاكرة خامًا فقط دون استدعاء أي باني (مناسبة فقط لأنواع C البدائية البسيطة، وليست لكائنات C++ ذات بانٍ وهادم). بالمثل، delete تستدعي الهادم (destructor) قبل تحرير الذاكرة، بينما free تُحرّر الذاكرة مباشرة دون استدعاء أي هادم، مما قد يترك موارد داخلية للكائن (مثل ذاكرة إضافية يملكها ذلك الكائن) غير محرَّرة أبدًا.",
      explanation: "استخدام malloc/free مع كائنات C++ حقيقية (لها بانٍ وهادم) خطر جدًا: malloc لن يُهيّئ الكائن بشكل صحيح (بلا استدعاء باني)، وfree لن ينظّف أي موارد داخلية يملكها الكائن (بلا استدعاء هادم)، مما يُسبب سلوكًا غير معرّف وتسريبات موارد. new/delete مصممان خصيصًا للتكامل مع نظام الكائنات في C++، ويُنصَح باستخدامهما (أو الأفضل: smart pointers) دائمًا بدلاً من دوال C القديمة.",
      example: "// خطر مع كائنات C++\nMyClass* obj = (MyClass*)malloc(sizeof(MyClass)); // لا يستدعي الباني!\nfree(obj); // لا يستدعي الهادم!\n\n// صحيح\nMyClass* obj = new MyClass(); // يستدعي الباني\ndelete obj; // يستدعي الهادم ثم يحرر الذاكرة",
      bestPractices: ["استخدم new/delete (أو الأفضل smart pointers) دائمًا لكائنات C++، ولا تخلط بينها وبين malloc/free من C أبدًا لنفس الكائن"],
      commonMistakes: ["خلط new مع free، أو malloc مع delete، مما يُسبب سلوكًا غير معرّف لأن كليهما يتبعان آليات إدارة ذاكرة مختلفة تمامًا غير متوافقة"],
      followups: ["ما الفرق بين new وnew[] لتخصيص مصفوفة من الكائنات؟"], similar: ["كيف تتجنب new/delete اليدوي تمامًا عبر smart pointers؟"]
    },
    {
      id: "cpp-mcq-4", title: "أي كائن STL يُستخدم للتنقّل عبر عناصر حاوية دون معرفة تفاصيلها الداخلية؟", difficulty: "medium", domain: "C++", type: "mcq", timeMinutes: 1,
      question: "أي مفهوم في STL يوفر طريقة موحّدة للتنقّل عبر عناصر أي حاوية (vector، list، map...) دون معرفة تفاصيل تنفيذها الداخلي؟",
      options: ["Template", "Iterator", "Reference", "Namespace"], correctIndex: 1,
      answer: "Iterator",
      explanation: "Iterator كائن يعمل كـ 'مؤشر معمَّم' يُشير لعنصر داخل حاوية، ويدعم عمليات موحّدة (مثل ++ للانتقال للعنصر التالي، و* للوصول لقيمته) بغض النظر عن نوع الحاوية الفعلي وتفاصيل تنفيذها الداخلي (مصفوفة متجاورة في vector، عقد منفصلة في list). هذا يسمح بكتابة خوارزميات عامة (مثل std::sort أو std::find) تعمل مع أي حاوية توفر iterators مناسبة، دون الحاجة لكتابة نسخة منفصلة من كل خوارزمية لكل نوع حاوية.",
      bestPractices: ["استخدم iterators (أو range-based for loops الحديثة التي تعتمد عليها ضمنيًا) للتنقّل عبر حاويات STL بدلاً من الوصول المباشر بفهرس رقمي عندما لا يكون ذلك ضروريًا"],
      commonMistakes: ["استخدام فهرس رقمي (index) للتنقّل عبر حاوية مثل std::list التي لا تدعم وصولاً عشوائيًا فعالاً أصلاً، بينما iterator هو الطريقة الصحيحة والموحّدة للتنقّل عبر أي حاوية STL"],
      followups: [], similar: ["ما الفرق بين Forward Iterator وBidirectional Iterator وRandom Access Iterator؟"]
    },
  ]
},

/* ======================================================================
   C#
   ====================================================================== */
{
  id: "csharp",
  name: "C#",
  icon: "🎯",
  intro: "لغة C# أساسية لمقابلات تطوير تطبيقات Windows وUnity وASP.NET. المحاور يركّز على فهمك لنظام الأنواع (Value Types vs Reference Types)، البرمجة غير المتزامنة عبر async/await، وLINQ كأسلوب تعبيري لمعالجة المجموعات.",
  concepts: [
    { title: "Value Types vs Reference Types", body: "الأنواع القيمية (struct، int، bool...) تُخزَّن مباشرة وتُنسخ بالكامل عند الإسناد، بينما الأنواع المرجعية (class، array، string...) تُخزَّن كمرجع لموقع في الـ heap، فنسخ المرجع لا ينسخ الكائن نفسه." },
    { title: "async/await", body: "يسمحان بكتابة كود غير متزامن (asynchronous) يُقرأ كأنه متزامن (synchronous) تمامًا، مع تحرير الخيط (thread) الحالي أثناء انتظار عملية طويلة (مثل استدعاء شبكة) بدلًا من حجبه (blocking)." },
    { title: "LINQ (Language Integrated Query)", body: "يسمح بكتابة استعلامات تعبيرية على أي مجموعة (Array، List، حتى قواعد بيانات عبر Entity Framework) بأسلوب موحّد شبيه بـ SQL أو بأسلوب دوال متسلسلة (method chaining)." }
  ],
  questions: [
    {
      id: "cs-1", title: "ما الفرق بين Value Types وReference Types في C#؟", difficulty: "medium", domain: "C#", type: "open", timeMinutes: 4,
      question: "اشرح الفرق بين الأنواع القيمية (Value Types) والمرجعية (Reference Types) في C#، مع مثال يوضح الفرق عند الإسناد.",
      answer: "الأنواع القيمية (مثل int وbool وstruct) تُخزَّن قيمتها مباشرة في الذاكرة المخصصة لها (عادة على الـ stack)، وعند إسناد متغيّر لآخر، تُنسخ القيمة بالكامل فيصبح لديك نسختان مستقلتان تمامًا. أما الأنواع المرجعية (مثل class وarray وstring) فتُخزَّن فعليًا في الـ heap، والمتغيّر نفسه يحمل فقط مرجعًا (عنوانًا) لذلك الموقع؛ عند الإسناد، يُنسخ المرجع فقط، فيصبح كلا المتغيرين يشيران لنفس الكائن، وأي تعديل عبر أحدهما ينعكس على الآخر.",
      explanation: "هذا الفرق يُفاجئ كثيرًا من المبرمجين القادمين من لغات أخرى؛ فمثلًا نسخ struct عبر = يُعطي نسخة مستقلة تمامًا آمنة للتعديل، بينما نسخ كائن class عبر = يُعطي مرجعًا مشتركًا، وتعديل خاصية عبر أحد المتغيرين سيظهر فورًا عند قراءته عبر المتغيّر الآخر لأنهما يشيران لنفس الكائن في الذاكرة.",
      example: "struct PointStruct { public int X; }\nclass PointClass { public int X; }\n\nPointStruct s1 = new PointStruct { X = 5 };\nPointStruct s2 = s1;  // نسخة كاملة مستقلة\ns2.X = 10;\n// s1.X لا يزال 5\n\nPointClass c1 = new PointClass { X = 5 };\nPointClass c2 = c1;   // نفس المرجع\nc2.X = 10;\n// c1.X أصبح 10 أيضًا!",
      bestPractices: ["استخدم struct فقط للبيانات الصغيرة غير القابلة للتغيير منطقيًا (مثل نقطة إحداثيات)، وclass لكل شيء آخر ذي سلوك أو حالة معقدة"],
      commonMistakes: ["افتراض أن نسخ كائن class عبر = ينشئ نسخة مستقلة، بينما هو فعليًا مرجع مشترك"],
      followups: ["ما هو Boxing/Unboxing وكيف يرتبط بهذا الفرق؟"], similar: ["ما الفرق بين struct وclass من ناحية القدرات في C#؟"]
    },
    {
      id: "cs-2", title: "اشرح async/await في C#", difficulty: "hard", domain: "C#", type: "open", timeMinutes: 5,
      question: "كيف تعمل async/await في C#، وما الفرق بينها وبين الخيوط التقليدية (Threads)؟",
      answer: "عند وضع async على دالة تُرجع Task أو Task<T>، يمكنك استخدام await داخلها لانتظار عملية غير متزامنة (مثل طلب شبكة أو قراءة ملف) دون حجب الخيط الحالي (thread) بينما ينتظر. بدلًا من حجب الخيط، تُسجَّل الدالة 'استمرارًا' (continuation) يُنفَّذ عند اكتمال العملية، ويُحرَّر الخيط في هذه الأثناء للقيام بعمل آخر (مثل الاستجابة لطلبات أخرى في تطبيق خادم).",
      explanation: "الفرق الجوهري عن الخيوط التقليدية (Thread) هو أن async/await لا تُنشئ بالضرورة خيطًا جديدًا؛ فهي تقنية لكتابة كود 'غير حاجب' (non-blocking) بكفاءة، بينما إنشاء Thread جديد يخصص موردًا حقيقيًا (خيط نظام تشغيل كامل) وهو مكلف نسبيًا. في تطبيقات الخادم (مثل ASP.NET) خصوصًا، استخدام async/await للعمليات المرتبطة بالإدخال/الإخراج (I/O-bound مثل استدعاءات قاعدة البيانات أو الشبكة) يسمح للخادم بمعالجة عدد أكبر بكثير من الطلبات المتزامنة بعدد أقل من الخيوط.",
      example: "public async Task<string> GetDataAsync()\n{\n    HttpClient client = new HttpClient();\n    string result = await client.GetStringAsync(\"https://api.example.com/data\");\n    // الخيط الحالي كان حرًا أثناء انتظار الشبكة\n    return result;\n}",
      bestPractices: ["استخدم async/await للعمليات المرتبطة بالإدخال/الإخراج (I/O-bound)، وThread/Task.Run للعمليات الحسابية الثقيلة (CPU-bound)", "تجنّب استخدام .Result أو .Wait() على Task لأنها تُلغي فائدة async وقد تسبب Deadlock"],
      commonMistakes: ["استدعاء دالة async دون await (نسيان الانتظار الفعلي، مما يجعل الكود يتابع دون انتظار النتيجة)", "استخدام async void بدلًا من async Task (يجعل معالجة الأخطاء صعبة جدًا)"],
      followups: ["ما الفرق بين CPU-bound وI/O-bound من ناحية اختيار async أم Thread؟"], similar: ["كيف تعمل Task في .NET داخليًا عبر Thread Pool؟"]
    },
    {
      id: "cs-mcq-1", title: "أي كلمة مفتاحية تمنع وراثة فئة في C#؟", difficulty: "easy", domain: "C#", type: "mcq", timeMinutes: 1,
      question: "أي كلمة مفتاحية في C# تمنع أي فئة أخرى من وراثة فئة معيّنة؟",
      options: ["static", "sealed", "readonly", "const"], correctIndex: 1,
      answer: "sealed",
      explanation: "sealed class تمنع أي فئة أخرى من عمل : ClassName (وراثتها). تُستخدم عادة على فئات مصممة لتكون نهائية في التسلسل الهرمي، أو لأسباب أداء طفيفة (تسمح للمترجم بتحسينات معيّنة عند التأكد من عدم وجود فئات فرعية).",
      bestPractices: ["اجعل الفئات sealed افتراضيًا إن لم تكن مصممة عمدًا لتكون قابلة للوراثة"],
      commonMistakes: ["الخلط بين sealed (منع الوراثة تمامًا) وprivate/protected (تحكم في الوصول للأعضاء فقط)"],
      followups: [], similar: ["ما الفرق بين readonly وconst في C#؟"]
    },
    {
      id: "cs-tf-1", title: "صح أو خطأ: struct في C# هو نوع قيمي (value type)", difficulty: "easy", domain: "C#", type: "tf", timeMinutes: 1,
      question: "صح أم خطأ: struct في C# هو نوع قيمي (value type) يُخزَّن عادة على الـ stack، بعكس class الذي هو نوع مرجعي يُخزَّن على الـ heap.",
      isTrue: true,
      answer: "صح.",
      explanation: "هذا فرق جوهري مقارنة بلغات مثل جافا حيث كل الكائنات المُعرَّفة بـ class هي أنواع مرجعية دون بديل قيمي مباشر بنفس المرونة. في C#، struct نوع قيمي فعليًا (رغم استثناءات دقيقة تتعلق بالتخزين الفعلي عند التغليف داخل كائنات أخرى)، مما يجعله خيارًا جيدًا للبيانات الصغيرة كثيفة الاستخدام (مثل الإحداثيات أو الألوان) لتفادي ضغط إضافي على جامع القمامة (Garbage Collector) الناتج عن تخصيصات heap كثيرة.",
      bestPractices: ["استخدم struct للبيانات الصغيرة (عادة أقل من 16 بايت) التي تُنسخ كثيرًا ولا تحتاج هوية مرجعية"],
      commonMistakes: ["استخدام struct كبيرة الحجم كثيرة الحقول، مما يجعل نسخها في كل مرة أبطأ من استخدام class"],
      followups: [], similar: ["ما هو Nullable<T> وكيف يسمح لنوع قيمي أن يحمل null؟"]
    },
    {
      id: "cs-3", title: "ما هو LINQ في C#؟", difficulty: "medium", domain: "C#", type: "open", timeMinutes: 4,
      question: "ما هو LINQ (Language Integrated Query)، وما الفائدة منه مقارنة بحلقات foreach التقليدية؟",
      answer: "LINQ يسمح بكتابة استعلامات تعبيرية موحّدة على أي مصدر بيانات (مصفوفات، قوائم، حتى قواعد بيانات عبر Entity Framework) بأسلوب يشبه SQL أو بأسلوب دوال متسلسلة (method chaining) مثل Where وSelect وOrderBy، بدلاً من كتابة حلقات foreach يدوية مع متغيرات وسيطة لتجميع النتائج.",
      explanation: "الفائدة الأساسية هي التعبيرية والإيجاز: بدلاً من كتابة حلقة تفحص كل عنصر وتُضيف الشرط يدويًا، تصف LINQ 'ماذا تريد' (كل الطلاب الذين درجتهم أعلى من 90، مرتبين تنازليًا) بدلاً من 'كيف تحصل عليه' خطوة بخطوة، مما يجعل الكود أقصر وأسهل قراءة. كما أن LINQ to Entities (مع قواعد البيانات) يُترجم الاستعلام إلى SQL فعلي يُنفَّذ في قاعدة البيانات نفسها، بدلًا من جلب كل البيانات ثم فلترتها في الذاكرة.",
      example: "// بحلقة تقليدية\nvar result = new List<Student>();\nforeach (var s in students) {\n    if (s.Grade > 90) result.Add(s);\n}\n\n// بـ LINQ\nvar result = students.Where(s => s.Grade > 90).OrderByDescending(s => s.Grade).ToList();",
      bestPractices: ["استخدم LINQ للاستعلامات القابلة للتعبير الواضح، لكن انتبه لتنفيذ Deferred Execution (LINQ لا يُنفَّذ فعليًا إلا عند التكرار الفعلي على النتيجة مثل ToList())"],
      commonMistakes: ["استدعاء LINQ عدة مرات على نفس المصدر دون ToList() أولاً، مما قد يُعيد تنفيذ الاستعلام بالكامل في كل مرة (خصوصًا مع مصادر بيانات بطيئة مثل قواعد البيانات)"],
      followups: ["ما الفرق بين IEnumerable وIQueryable من ناحية أين يُنفَّذ الاستعلام فعليًا؟"], similar: ["ما هو Deferred Execution في LINQ؟"]
    },
    {
      id: "cs-mcq-2", title: "أي كلمة مفتاحية تمنع تعديل قيمة متغيّر بعد تهيئته الأولى في C#؟", difficulty: "easy", domain: "C#", type: "mcq", timeMinutes: 1,
      question: "أي كلمة مفتاحية في C# تجعل حقلاً قابلاً للتهيئة مرة واحدة فقط (في التعريف أو الباني)، ثم غير قابل للتعديل بعدها؟",
      options: ["static", "readonly", "volatile", "public"], correctIndex: 1,
      answer: "readonly",
      explanation: "readonly تسمح بتعيين قيمة الحقل إما عند تعريفه مباشرة أو داخل الباني (constructor) فقط، وبعد ذلك يصبح غير قابل للتعديل. يختلف هذا عن const الذي يتطلب قيمة معروفة وقت الترجمة تمامًا، بينما readonly يمكن حسابها وقت التشغيل (runtime) داخل الباني.",
      bestPractices: ["استخدم readonly للحقول التي تُحسب قيمتها وقت التشغيل ولا يجب أن تتغيّر بعد إنشاء الكائن"],
      commonMistakes: ["محاولة تعديل حقل readonly من خارج الباني، مما يُسبب خطأ ترجمة فوري"],
      followups: [], similar: ["ما الفرق بين readonly وconst في C#؟"]
    },
    {
      id: "cs-4", title: "ما هو Boxing وUnboxing في C#؟", difficulty: "medium", domain: "C#", type: "open", timeMinutes: 3,
      question: "ما هو Boxing وUnboxing، وما تأثيرهما على الأداء عند استخدامهما بكثرة؟",
      answer: "Boxing هو تحويل نوع قيمي (value type مثل int) إلى نوع مرجعي (object)، عبر تغليفه في كائن جديد على الـ heap. Unboxing هو العملية العكسية: استخراج القيمة الأصلية من ذلك الكائن المُغلَّف وإعادتها لنوعها القيمي الأصلي. تحدث هذه العمليات ضمنيًا وتلقائيًا في مواضع كثيرة، مثل تخزين int داخل ArrayList (التي تخزّن object بشكل عام) أو تمرير قيمة قيمية لدالة تتوقع معاملًا من نوع object.",
      explanation: "كل عملية Boxing تُنشئ كائنًا جديدًا على الـ heap، وهذا له تكلفة أداء وذاكرة إضافية (تخصيص جديد + عمل جامع القمامة لاحقًا) غير موجودة عند التعامل مع القيم البدائية مباشرة. في حلقات ضخمة تكرر هذا التحويل ملايين المرات، يصبح التأثير التراكمي على الأداء ملحوظًا جدًا، وهذا سبب أساسي لتفضيل المجموعات المُعمَّمة (Generic Collections مثل List<int>) على المجموعات غير المُعمَّمة القديمة (مثل ArrayList) التي تُجبر على Boxing لكل عنصر قيمي.",
      example: "int number = 42;\nobject boxed = number;  // Boxing: تخصيص كائن جديد على heap\nint unboxed = (int)boxed; // Unboxing: استخراج القيمة مرة أخرى\n\n// List<int> الحديثة تتجنب Boxing تمامًا لأنها معمّمة (generic)\n// بعكس ArrayList القديمة التي تخزّن object وتُجبر على Boxing لكل int",
      bestPractices: ["استخدم المجموعات المُعمَّمة (List<T>, Dictionary<K,V>) دائمًا بدلاً من المجموعات القديمة غير المُعمَّمة لتفادي Boxing غير الضروري"],
      commonMistakes: ["استخدام ArrayList أو Hashtable القديمة في كود جديد، رغم أن المجموعات المُعمَّمة الحديثة أفضل أداءً وأمانًا من ناحية الأنواع"],
      followups: ["كيف تتجنب Boxing عند استخدام دوال تتوقع معامل object؟"], similar: ["ما هو Generic Type Constraint في C# وكيف يرتبط بتجنب Boxing؟"]
    },
    {
      id: "cs-mcq-3", title: "أي واجهة تُنفَّذ للسماح باستخدام foreach على كائن مخصص؟", difficulty: "medium", domain: "C#", type: "mcq", timeMinutes: 1,
      question: "أي واجهة (interface) يجب أن يُنفّذها كلاس مخصص للسماح باستخدام حلقة foreach عليه مباشرة؟",
      options: ["IComparable", "IEnumerable", "IDisposable", "ICloneable"], correctIndex: 1,
      answer: "IEnumerable",
      explanation: "تنفيذ IEnumerable (عبر توفير دالة GetEnumerator) يسمح لأي كلاس مخصص بأن يُستخدَم مباشرة في حلقة foreach، لأن C# تعتمد داخليًا على هذه الواجهة لتحديد كيفية المرور على عناصر أي مجموعة قابلة للتكرار. IComparable تُستخدم للمقارنة والترتيب، IDisposable لتحرير موارد يدويًا (with using)، وICloneable للنسخ.",
      bestPractices: ["نفّذ IEnumerable<T> المُعمَّم (وليس IEnumerable غير المُعمَّم القديم) للحصول على أمان أنواع أفضل عند إنشاء مجموعة مخصصة"],
      commonMistakes: ["الخلط بين IEnumerable (الوصف: 'يمكن المرور عليه') وIEnumerator (الوصف: 'المؤشر الفعلي أثناء المرور')"],
      followups: [], similar: ["ما الفرق بين IEnumerable وIQueryable من ناحية أين يُنفَّذ الاستعلام؟"]
    },
    {
      id: "cs-5", title: "ما هو Delegate في C#؟", difficulty: "hard", domain: "C#", type: "open", timeMinutes: 4,
      question: "ما هو Delegate في C#، وكيف يرتبط بمفهوم 'الدوال كقيم' (functions as first-class values)؟",
      answer: "Delegate هو نوع بيانات آمن (type-safe) يُمثّل مرجعًا لدالة، يمكن تخزينه في متغيّر، تمريره كمعامل لدالة أخرى، أو استدعاؤه لاحقًا مثل أي دالة عادية. يُحدَّد توقيع Delegate (نوع القيمة الراجعة وأنواع المعاملات) مسبقًا، ولا يمكن ربطه إلا بدوال تتطابق مع ذلك التوقيع بالضبط، مما يوفر أمان أنواع كامل (بعكس مؤشرات الدوال الخام في لغات مثل C).",
      explanation: "Delegates هي الأساس الذي تُبنى عليه الأحداث (Events) في C#، وأنماط مثل Observer Pattern، وLINQ (حيث تُمرَّر دوال مثل s => s.Length كـ delegate لدالة Where أو Select). Action وFunc وPredicate هي أنواع delegate جاهزة ومدمجة في C# لتغطية أنماط شائعة (Action لدالة بدون قيمة إرجاع، Func لدالة تُرجع قيمة، Predicate لدالة تُرجع bool)، مما يوفر على المطور تعريف delegate مخصص لكل حالة بسيطة.",
      example: "delegate int Operation(int a, int b);\n\nint Add(int a, int b) => a + b;\nint Multiply(int a, int b) => a * b;\n\nOperation op = Add;\nConsole.WriteLine(op(3, 4)); // 7\n\nop = Multiply;\nConsole.WriteLine(op(3, 4)); // 12 - نفس المتغيّر، دالة مختلفة الآن",
      bestPractices: ["استخدم الأنواع الجاهزة Action وFunc وPredicate بدلاً من تعريف delegate مخصص جديد، ما لم تحتج توقيعًا خاصًا جدًا"],
      commonMistakes: ["تعريف delegate مخصص جديد لكل حالة بسيطة، بينما Func<T> أو Action<T> الجاهزة تغطي الحالة تمامًا وبشكل أبسط"],
      followups: ["كيف ترتبط Delegates بتعريف Events في C#؟"], similar: ["ما الفرق بين Delegate وInterface من ناحية متى تختار كلًا منهما؟"]
    },
    {
      id: "cs-mcq-4", title: "أي كلاس يُستخدم لتشغيل عملية غير متزامنة في C#؟", difficulty: "medium", domain: "C#", type: "mcq", timeMinutes: 1,
      question: "أي نوع بيانات في C# يمثّل عملية غير متزامنة قيد التنفيذ، ويُستخدم عادة مع async/await؟",
      options: ["Thread", "Task", "Delegate", "Action"], correctIndex: 1,
      answer: "Task",
      explanation: "Task يمثّل عملية غير متزامنة (قد تكون قيد التنفيذ حاليًا أو مكتملة) ويُستخدم كنوع الإرجاع القياسي لدوال async، ويمكن انتظاره عبر await. يختلف عن Thread الذي يمثّل خيط تنفيذ نظام تشغيل حقيقي وأثقل تكلفة؛ Task قد يُنفَّذ فعليًا على أي خيط من Thread Pool، أو حتى دون إنشاء خيط جديد إطلاقًا لعمليات I/O-bound (بفضل عدم الحجب non-blocking).",
      bestPractices: ["استخدم Task وasync/await للعمليات غير المتزامنة الحديثة، واحتفظ بـ Thread المباشر فقط لحالات نادرة تحتاج تحكمًا دقيقًا جدًا بخيط نظام تشغيل حقيقي"],
      commonMistakes: ["استخدام Thread مباشرة لعمليات I/O-bound بسيطة، بينما Task مع async/await أخف وأكفأ بكثير لتلك الحالة تحديدًا"],
      followups: [], similar: ["ما الفرق بين Task وThread من ناحية استهلاك الموارد؟"]
    },
  ]
},

/* ======================================================================
   PHP
   ====================================================================== */
{
  id: "php",
  name: "PHP",
  icon: "🐘",
  intro: "PHP لا تزال تُشغّل جزءًا كبيرًا من الويب (WordPress، Laravel). مقابلات PHP تركّز على فهم الفرق بين المقارنة الفضفاضة والصارمة، إدارة الجلسات (Sessions)، والتعامل الآمن مع قواعد البيانات عبر PDO لتفادي حقن SQL (SQL Injection).",
  concepts: [
    { title: "== مقابل ===", body: "== تقارن القيمة بعد تحويل الأنواع الضمني (type juggling)، بينما === تقارن القيمة والنوع معًا دون أي تحويل، تمامًا كما في JavaScript." },
    { title: "PDO (PHP Data Objects)", body: "طبقة وصول موحّدة لقواعد البيانات تدعم Prepared Statements، وهي الطريقة الآمنة الموصى بها للتعامل مع قواعد البيانات لتفادي هجمات حقن SQL، بعكس دوال mysqli أو mysql القديمة المستخدمة بشكل غير آمن." },
    { title: "Sessions وCookies", body: "الجلسة (session) تُخزَّن بيانات المستخدم على الخادم مع معرّف فريد يُرسَل للعميل عادة عبر كوكي، بينما الكوكي نفسها تُخزَّن على جهاز العميل مباشرة." }
  ],
  questions: [
    {
      id: "php-1", title: "ما الفرق بين == و=== في PHP؟", difficulty: "easy", domain: "PHP", type: "open", timeMinutes: 3,
      question: "لماذا يُنصح باستخدام === بدلًا من == في PHP، خصوصًا عند التعامل مع دوال قد تُرجع 0 أو false؟",
      answer: "== تقارن القيمتين بعد تحويل ضمني للنوع (type juggling) إن اختلف نوعاهما، بينما === تتطلب تطابق القيمة والنوع معًا دون أي تحويل. المشكلة الشهيرة: دالة مثل strpos() قد تُرجع 0 (عندما توجد السلسلة المطلوبة في أول موضع) أو false (عندما لا توجد إطلاقًا)؛ لو استخدمت == false للتحقق من 'عدم الوجود'، فإن strpos() == false ستكون true خطأً حتى عندما تكون النتيجة الفعلية 0 (لأن 0 == false صحيحة بسبب التحويل الضمني)، بينما strpos() === false تُميّز الحالتين بدقة.",
      explanation: "هذا مثال كلاسيكي على سبب أهمية === في PHP تحديدًا، لأن العديد من دوال PHP القياسية تُرجع إما رقمًا صحيحًا (بما فيه 0) أو false للدلالة على الفشل، وهذا النمط المزدوج للقيمة الراجعة يجعل == خطيرًا جدًا في هذه الحالات بالذات.",
      example: "$pos = strpos('hello world', 'hello'); // يُرجع 0 (وُجدت في البداية)\n\nif ($pos == false) { echo 'غير موجودة'; }   // خطأ! يُطبع رغم أنها موجودة فعليًا\nif ($pos === false) { echo 'غير موجودة'; }  // صحيح - لا يُطبع",
      bestPractices: ["استخدم === دائمًا مع الدوال التي قد تُرجع false أو 0 أو null كقيم مختلفة المعنى"],
      commonMistakes: ["استخدام == للتحقق من نتيجة strpos أو array_search دون انتباه لهذه المشكلة تحديدًا"],
      followups: ["ما هي 'PHP Type Juggling' وأمثلة أخرى غريبة عليها؟"], similar: ["ما الفرق بين isset() وempty() وis_null()؟"]
    },
    {
      id: "php-2", title: "ما هو PDO ولماذا نستخدمه بدلًا من mysqli المباشر؟", difficulty: "medium", domain: "PHP", type: "open", timeMinutes: 4,
      question: "ما هي مزايا استخدام PDO مع Prepared Statements للتعامل مع قواعد البيانات في PHP؟",
      answer: "PDO طبقة وصول موحّدة تدعم أنظمة قواعد بيانات متعددة (MySQL، PostgreSQL، SQLite...) بنفس الواجهة البرمجية، وتدعم Prepared Statements التي تفصل استعلام SQL عن البيانات المُدخلة تمامًا، بحيث تُعامل قيم المستخدم دائمًا كبيانات خام وليست جزءًا قابلًا للتنفيذ من الاستعلام، مما يمنع هجمات حقن SQL (SQL Injection) بشكل جذري.",
      explanation: "بناء استعلام SQL عبر دمج مباشر لمدخلات المستخدم في نص الاستعلام (مثل \"SELECT * FROM users WHERE name = '$name'\") يسمح لمهاجم بإدخال نص SQL خبيث ضمن قيمة $name يُغيّر معنى الاستعلام بالكامل (مثل إدخال ' OR '1'='1 لتجاوز شرط تسجيل الدخول). Prepared Statements تحل هذا جذريًا عبر إرسال بنية الاستعلام وقيم المعاملات في خطوتين منفصلتين لقاعدة البيانات، فلا يمكن لأي قيمة إدخال أن 'تُفلت' من كونها مجرد بيانات إلى تنفيذ فعلي كجزء من الأمر.",
      example: "// غير آمن - عرضة لحقن SQL\n$query = \"SELECT * FROM users WHERE email = '$email'\";\n\n// آمن - PDO مع Prepared Statement\n$stmt = $pdo->prepare(\"SELECT * FROM users WHERE email = :email\");\n$stmt->execute(['email' => $email]);\n$user = $stmt->fetch();",
      bestPractices: ["استخدم Prepared Statements دائمًا، ولا تُدرج مدخلات المستخدم مباشرة داخل نص استعلام SQL مطلقًا"],
      commonMistakes: ["دمج مدخلات المستخدم مباشرة في نص الاستعلام حتى بعد 'تنظيفها' يدويًا (escaping) بدلًا من استخدام Prepared Statements الفعلية"],
      followups: ["ما الفرق بين Prepared Statements المُحضَّرة من جهة الخادم (server-side) وجهة العميل (client-side/emulated) في PDO؟"], similar: ["ما هو XSS وكيف يختلف عن SQL Injection؟"]
    },
    {
      id: "php-mcq-1", title: "أي متغيّر خارق (superglobal) يحتوي بيانات نموذج POST؟", difficulty: "easy", domain: "PHP", type: "mcq", timeMinutes: 1,
      question: "أي متغيّر خارق (superglobal) في PHP يحتوي البيانات المُرسَلة عبر نموذج بطريقة POST؟",
      options: ["$_GET", "$_POST", "$_REQUEST", "$_SESSION"], correctIndex: 1,
      answer: "$_POST",
      explanation: "$_POST مصفوفة خارقة تحتوي تحديدًا البيانات المُرسَلة عبر طريقة HTTP POST (عادة من نموذج method='post')، بينما $_GET تحتوي بيانات URL Query String، و$_REQUEST تدمج $_GET و$_POST و$_COOKIE معًا (ويُنصح غالبًا بتجنبه لعدم الوضوح حول مصدر البيانات الفعلي).",
      bestPractices: ["استخدم $_POST أو $_GET تحديدًا بدلًا من $_REQUEST العام لوضوح أكبر حول مصدر البيانات المتوقع"],
      commonMistakes: ["استخدام $_REQUEST افتراضيًا مما قد يفتح ثغرات إن توقع المطور مصدرًا معينًا (POST) بينما وصلت البيانات فعليًا عبر GET"],
      followups: [], similar: ["ما هو $_SESSION وكيف يختلف عن $_COOKIE؟"]
    },
    {
      id: "php-tf-1", title: "صح أو خطأ: PHP لغة ذات كتابة ديناميكية (dynamically typed)", difficulty: "easy", domain: "PHP", type: "tf", timeMinutes: 1,
      question: "صح أم خطأ: PHP لغة ذات كتابة ديناميكية (dynamically typed)، أي لا يلزم تحديد نوع المتغيّر صراحة عند تعريفه.",
      isTrue: true,
      answer: "صح.",
      explanation: "في PHP، يمكن تعريف متغيّر (مثل $x = 5;) دون تحديد نوعه صراحة، ويمكن لنفس المتغيّر أن يحمل قيمة من نوع مختلف تمامًا لاحقًا في البرنامج ($x = 'نص';). منذ PHP 7، أضيفت ميزة Type Declarations الاختيارية على معاملات الدوال وقيم الإرجاع لتوفير فحص نوع أكثر صرامة عند الحاجة، لكنها تبقى اختيارية وليست إلزامية كما في لغات ذات كتابة ثابتة مثل جافا أو C#.",
      bestPractices: ["استخدم Type Declarations (int, string, ?array...) على توقيعات الدوال في المشاريع الكبيرة لتحسين الوضوح والتحقق المبكر من الأخطاء"],
      commonMistakes: [], followups: ["ما هو Strict Types (declare(strict_types=1)) في PHP 7+؟"], similar: ["كيف تقارن PHP بلغات ذات كتابة ثابتة (statically typed) من ناحية اكتشاف الأخطاء؟"]
    },
    {
      id: "php-3", title: "ما هو Composer وAutoloading؟", difficulty: "medium", domain: "PHP", type: "open", timeMinutes: 4,
      question: "ما هو Composer في PHP، وكيف يحل مشكلة تحميل الملفات (autoloading) يدويًا؟",
      answer: "Composer هو مدير الحزم (Dependency Manager) القياسي لـ PHP، يسمح بتثبيت مكتبات خارجية وإدارة إصداراتها عبر ملف composer.json، مشابه لـ npm في Node.js. أحد أهم ميزاته هي Autoloading: بدلاً من كتابة require_once لكل ملف كلاس يدويًا في بداية كل سكربت، يُنشئ Composer ملف autoload.php واحدًا يُحمِّل تلقائيًا أي كلاس عند أول استخدام له، وفق معيار تسمية قياسي يُسمى PSR-4 يربط أسماء الفضاءات (namespaces) بمسارات المجلدات مباشرة.",
      explanation: "قبل Composer وAutoloading، كان على المطور كتابة عشرات أسطر require_once يدويًا لكل ملف يعتمد عليه المشروع، وأي نسيان لسطر واحد يُسبب خطأ 'Class not found'. مع PSR-4 Autoloading، يكفي تسمية الملفات والفضاءات (namespaces) وفق اصطلاح متوقع (مثل App\\Models\\User في ملف src/Models/User.php)، ويتولى Composer تحميل الملف الصحيح تلقائيًا فور أول استخدام لذلك الكلاس في أي مكان بالكود.",
      example: "// composer.json\n{\n  \"autoload\": { \"psr-4\": { \"App\\\\\": \"src/\" } }\n}\n\n// في أي ملف، بعد require 'vendor/autoload.php' مرة واحدة فقط:\nuse App\\Models\\User;\n$user = new User(); // يُحمَّل تلقائيًا من src/Models/User.php",
      bestPractices: ["اتبع معيار PSR-4 في تنظيم الملفات والفضاءات لضمان عمل autoloading تلقائيًا وبسلاسة"],
      commonMistakes: ["عدم تشغيل composer dump-autoload بعد إضافة كلاسات جديدة يدويًا خارج آلية composer install العادية، مما قد يجعل autoloading لا يجد الكلاس الجديد فورًا"],
      followups: ["ما الفرق بين composer install وcomposer update؟"], similar: ["ما هو composer.lock ولماذا هو مهم لضمان بيئات متطابقة؟"]
    },
    {
      id: "php-mcq-2", title: "ما الفرق بين require وinclude في PHP؟", difficulty: "easy", domain: "PHP", type: "mcq", timeMinutes: 1,
      question: "ما الفرق الجوهري بين require وinclude عند تضمين ملف غير موجود في PHP؟",
      options: ["لا فرق بينهما إطلاقًا", "require يوقف تنفيذ السكربت بخطأ فادح (Fatal Error)، بينما include يُصدر تحذيرًا فقط ويكمل التنفيذ", "include أسرع دائمًا من require", "require يعمل فقط مع ملفات .php"], correctIndex: 1,
      answer: "require يوقف تنفيذ السكربت بخطأ فادح إن لم يجد الملف، بينما include يُصدر تحذيرًا (Warning) فقط ويستمر السكربت بالتنفيذ رغم غياب الملف.",
      explanation: "استخدم require للملفات الضرورية تمامًا لعمل السكربت (مثل ملف اتصال قاعدة بيانات أو تعريف كلاس أساسي)، حيث لا معنى للاستمرار دون ذلك الملف على الإطلاق. استخدم include للملفات الاختيارية التي لا يجب أن يتوقف البرنامج بالكامل إن غابت (مثل ملف تذييل صفحة تجميلي بحت).",
      bestPractices: ["استخدم require_once وinclude_once لتفادي تضمين نفس الملف مرتين بالخطأ (مما يُسبب أخطاء إعادة تعريف كلاس أو دالة)"],
      commonMistakes: ["استخدام include لملف حرج لعمل البرنامج، فيستمر التنفيذ بأخطاء لاحقة غامضة بدلاً من توقف واضح فوري يوضح المشكلة الحقيقية"],
      followups: [], similar: ["ما الفرق بين require وrequire_once؟"]
    },
    {
      id: "php-4", title: "ما هو Trait في PHP؟", difficulty: "hard", domain: "PHP", type: "open", timeMinutes: 4,
      question: "ما هو Trait في PHP، وكيف يحل مشكلة عدم دعم الوراثة المتعددة للفئات؟",
      answer: "PHP لا تسمح لكلاس بوراثة (extends) أكثر من كلاس أب واحد. Trait يحل هذه المشكلة جزئيًا: هو مجموعة من الدوال يمكن 'دمجها' داخل أي كلاس عبر الكلمة المفتاحية use، وكأن دوال ذلك الـ trait أصبحت جزءًا من الكلاس مباشرة. يمكن لكلاس واحد استخدام (use) عدة traits معًا في نفس الوقت، مما يوفر مرونة تشبه الوراثة المتعددة دون تعقيداتها (مثل مشكلة الألماس).",
      explanation: "الفرق عن Interface: الـ Interface يُعرِّف فقط 'عقدًا' من توقيعات دوال دون أي تنفيذ فعلي، بينما Trait يحتوي تنفيذًا فعليًا حقيقيًا جاهزًا للاستخدام المباشر. هذا يجعل Traits مفيدة جدًا لمشاركة سلوك مشترك فعلي (وليس مجرد توقيع) بين عدة كلاسات غير مرتبطة وراثيًا، مثل دالة logging مشتركة تُستخدم في كلاسات كثيرة مختلفة تمامًا دون تكرار نفس الكود في كل واحدة.",
      example: "trait Loggable {\n    public function log($message) {\n        echo \"[LOG] $message\";\n    }\n}\n\nclass UserController {\n    use Loggable; // يحصل على دالة log() جاهزة\n}\n\n$controller = new UserController();\n$controller->log('تم إنشاء مستخدم جديد');",
      bestPractices: ["استخدم Traits لمشاركة سلوك فعلي متكرر بين كلاسات غير مرتبطة وراثيًا، وليس كبديل عام عن التصميم الكائني الجيد"],
      commonMistakes: ["استخدام عدة traits تحتوي دوالًا متطابقة الاسم دون حل التعارض صراحة (عبر insteadof وas)، مما يُسبب خطأ فادح (Fatal Error)"],
      followups: ["كيف تحل تعارض اسم دالة بين traitين مختلفين مُستخدَمين في نفس الكلاس؟"], similar: ["ما الفرق بين Trait وAbstract Class في PHP؟"]
    },
    {
      id: "php-mcq-3", title: "أي دالة PHP تتحقق من نوع متغيّر كمصفوفة؟", difficulty: "easy", domain: "PHP", type: "mcq", timeMinutes: 1,
      question: "أي دالة PHP تُستخدم للتحقق مما إذا كان متغيّر معيّن من نوع array؟",
      options: ["is_array()", "array_check()", "typeof()", "is_list()"], correctIndex: 0,
      answer: "is_array()",
      explanation: "is_array($var) تُرجع true إذا كان المتغيّر المُمرَّر من نوع array فعليًا، وfalse خلاف ذلك، وهي شائعة الاستخدام للتحقق من نوع البيانات الوارد (مثل من مُدخل مستخدم أو استجابة API) قبل محاولة التكرار عليه بحلقة foreach لتفادي أخطاء وقت التشغيل.",
      bestPractices: ["تحقق من نوع البيانات القادمة من مصادر خارجية (مثل استجابات API) باستخدام is_array() أو is_string() قبل التعامل معها مباشرة"],
      commonMistakes: ["افتراض أن بيانات قادمة من مصدر خارجي هي دائمًا array دون تحقق، مما يُسبب أخطاء وقت التشغيل عند تغيّر شكل البيانات القادمة لاحقًا"],
      followups: [], similar: ["ما الفرق بين is_array() وis_iterable()؟"]
    },
    {
      id: "php-5", title: "ما الفرق بين self:: وstatic:: في PHP؟", difficulty: "hard", domain: "PHP", type: "open", timeMinutes: 4,
      question: "ما الفرق بين استخدام self:: وstatic:: للإشارة لعناصر ساكنة (static) داخل كلاس في PHP؟",
      answer: "self:: تشير دائمًا للفئة التي كُتب فيها الكود بالضبط (الفئة المُعرِّفة الأصلية)، بغض النظر عن أي فئة فرعية استُدعيت منها الدالة فعليًا. static:: (تُعرف بـ 'Late Static Binding') تشير للفئة الفعلية التي استُدعيت منها الدالة وقت التشغيل، حتى لو كانت تلك الدالة موروثة من فئة أب مختلفة كتبتها في الأصل.",
      explanation: "الفرق يظهر بوضوح عند استخدام factory methods موروثة: لو كانت فئة أب تحتوي دالة create() تستخدم self::، فإن استدعاء ChildClass::create() سينشئ دائمًا كائنًا من الفئة الأب الأصلية (لأن self:: 'متجمدة' على مكان كتابة الكود)، وليس من ChildClass كما قد يُتوقَّع. استخدام static:: بدلاً من self:: يحل هذه المشكلة: static::create() داخل نفس الدالة الموروثة سينشئ فعليًا كائنًا من ChildClass إن استُدعيت عبرها، لأنه يتتبع الفئة الفعلية المُستدعية وقت التشغيل.",
      example: "class ParentClass {\n    public static function create() {\n        return new static(); // Late Static Binding\n    }\n}\nclass ChildClass extends ParentClass { }\n\n$obj = ChildClass::create();\nvar_dump($obj); // object(ChildClass) - وليس ParentClass!",
      bestPractices: ["استخدم static:: بدلاً من self:: عند كتابة factory methods أو دوال ساكنة مصممة للوراثة والتخصيص من فئات فرعية"],
      commonMistakes: ["استخدام self:: افتراضيًا في دوال ساكنة مصممة للوراثة، مما يُنتج دائمًا كائنات من الفئة الأصلية بدلاً من الفئة الفرعية المتوقعة فعليًا"],
      followups: ["ما هي حالات استخدام self:: الصحيحة رغم وجود static::؟"], similar: ["كيف يرتبط هذا بمفهوم Late Static Binding في PHP 5.3+؟"]
    },
    {
      id: "php-mcq-4", title: "ما هو Closure في PHP؟", difficulty: "medium", domain: "PHP", type: "mcq", timeMinutes: 1,
      question: "أي مما يلي يصف Closure (الدالة المجهولة) في PHP بدقة؟",
      options: ["دالة تُغلق البرنامج فورًا", "دالة مجهولة الاسم يمكن تخزينها في متغيّر وتحمل السياق المحيط بها عبر use", "دالة لا يمكن استدعاؤها أبدًا", "دالة تعمل فقط داخل كلاسات"], correctIndex: 1,
      answer: "دالة مجهولة الاسم يمكن تخزينها في متغيّر وتحمل السياق المحيط بها عبر use.",
      explanation: "Closure في PHP هي دالة مجهولة (anonymous function) يمكن تعريفها مباشرة وتخزينها في متغيّر أو تمريرها كمعامل، وتستطيع 'الوصول' لمتغيرات من النطاق المحيط بها وقت تعريفها عبر الكلمة المفتاحية use، محتفظة بتلك القيم حتى بعد خروج التنفيذ من ذلك النطاق الأصلي (مشابهة تمامًا لمفهوم Closures في JavaScript).",
      bestPractices: ["استخدم Closures لتمرير منطق مخصص قصير لدوال مثل array_map أو array_filter بدلاً من كتابة دالة مسمّاة منفصلة لكل حالة بسيطة"],
      commonMistakes: ["نسيان use($variable) عند الحاجة لوصول Closure لمتغيّر من النطاق الخارجي، مما يجعل تلك القيمة غير متاحة داخل الـ Closure"],
      followups: [], similar: ["ما الفرق بين use($var) وuse(&$var) (بالمرجع) في Closures؟"]
    },
  ]
},

/* ======================================================================
   SQL
   ====================================================================== */
{
  id: "sql",
  name: "SQL",
  icon: "🗄️",
  intro: "SQL أساسي في كل مقابلة تقريبًا، حتى لمناصب ليست backend بحتة. المحاور يختبر فهمك للـ JOINs المختلفة، التطبيع (Normalization)، خصائص المعاملات (ACID)، وكيف تُحسّن استعلامًا بطيئًا عبر الفهارس (Indexes).",
  concepts: [
    { title: "أنواع JOIN", body: "INNER JOIN يُرجع فقط الصفوف التي لها تطابق في الجدولين. LEFT JOIN يُرجع كل صفوف الجدول الأيسر مع القيم المطابقة من الأيمن (أو NULL إن لم يوجد تطابق). RIGHT JOIN عكس ذلك، وFULL OUTER JOIN يُرجع كل الصفوف من كلا الجدولين." },
    { title: "التطبيع (Normalization)", body: "عملية تنظيم جداول قاعدة البيانات لتقليل التكرار (redundancy) وتفادي شذوذ التحديث (update anomalies)، عبر مستويات (Normal Forms) تصاعدية مثل 1NF وNF2 وNF3." },
    { title: "خصائص ACID", body: "Atomicity (كل المعاملة تنجح أو تفشل كاملة)، Consistency (تبقى القاعدة في حالة صحيحة دائمًا)، Isolation (المعاملات المتزامنة لا تتداخل بشكل يفسد النتائج)، وDurability (بمجرد نجاح معاملة، تبقى محفوظة حتى عند انقطاع الكهرباء)." },
    { title: "الفهارس (Indexes)", body: "بنية بيانات إضافية (عادة B-Tree) تُسرّع عمليات البحث والفلترة بشكل كبير، لكنها تُبطئ عمليات الإدراج والتحديث والحذف قليلًا لأنها تحتاج تحديثًا أيضًا." }
  ],
  questions: [
    {
      id: "sql-1", title: "ما الفرق بين INNER JOIN وLEFT JOIN؟", difficulty: "easy", domain: "SQL", type: "open", timeMinutes: 4,
      question: "اشرح الفرق بين INNER JOIN وLEFT JOIN مع مثال عملي.",
      answer: "INNER JOIN يُرجع فقط الصفوف التي يوجد لها تطابق في كلا الجدولين المرتبطين؛ أي صف في أي من الجدولين بدون مطابق في الآخر يُستبعد تمامًا من النتيجة. أما LEFT JOIN (أو LEFT OUTER JOIN) فيُرجع كل صفوف الجدول الأيسر (المذكور أولًا) بغض النظر عن وجود تطابق، مع ملء الأعمدة القادمة من الجدول الأيمن بقيم NULL في حال عدم وجود تطابق لذلك الصف.",
      explanation: "مثال عملي شائع: لو أردت عرض كل العملاء مع طلباتهم (إن وُجدت)، فإن INNER JOIN بين جدولي customers وorders سيُخفي تمامًا أي عميل لم يقم بأي طلب بعد (لأنه لا يوجد تطابق له في جدول orders)، بينما LEFT JOIN customers مع orders سيُظهر كل العملاء بما فيهم من لم يطلب شيئًا بعد، مع أعمدة الطلب فارغة (NULL) لهؤلاء تحديدًا. هذا الفرق يُغيّر النتيجة جذريًا، وهو سؤال شائع جدًا لاختبار فهم عملي حقيقي وليس حفظًا للتعريف.",
      example: "-- يُظهر فقط العملاء الذين لديهم طلب واحد على الأقل\nSELECT c.name, o.id FROM customers c\nINNER JOIN orders o ON c.id = o.customer_id;\n\n-- يُظهر كل العملاء، حتى من ليس لديهم أي طلب (order id سيكون NULL)\nSELECT c.name, o.id FROM customers c\nLEFT JOIN orders o ON c.id = o.customer_id;",
      bestPractices: ["فكّر أولًا: هل أحتاج فقط السجلات المتطابقة (INNER) أم كل سجلات جدول رئيسي حتى بلا تطابق (LEFT)؟ قبل كتابة الاستعلام"],
      commonMistakes: ["استخدام INNER JOIN افتراضيًا في تقارير تحتاج فعليًا عرض كل السجلات الرئيسية حتى بدون تطابق، فتختفي بيانات مهمة من التقرير دون أن يلاحظ أحد"],
      followups: ["ما الفرق بين LEFT JOIN وRIGHT JOIN وFULL OUTER JOIN؟", "كيف يمكن محاكاة FULL OUTER JOIN في MySQL الذي لا يدعمه مباشرة؟"],
      similar: ["ما هو CROSS JOIN ومتى يُستخدم؟"]
    },
    {
      id: "sql-2", title: "اشرح خصائص ACID في المعاملات (Transactions)", difficulty: "hard", domain: "SQL", type: "open", timeMinutes: 5,
      question: "ما هي خصائص ACID، ولماذا هي مهمة لضمان موثوقية قاعدة البيانات؟",
      answer: "Atomicity (الذرّية): المعاملة (transaction) تُعامَل كوحدة واحدة غير قابلة للتجزئة؛ إما تنجح كل عملياتها بالكامل أو تفشل وتتراجع (rollback) بالكامل، فلا يوجد 'نجاح جزئي'. Consistency (الاتساق): تنقل المعاملة قاعدة البيانات من حالة صحيحة لأخرى صحيحة دائمًا، محافظة على كل القيود (constraints) المعرَّفة. Isolation (العزل): تنفيذ عدة معاملات متزامنة يجب أن يُنتج نفس النتيجة كما لو نُفِّذت كل واحدة منها بشكل منفصل ومتسلسل تمامًا. Durability (الدوام): بمجرد أن تُؤكِّد المعاملة نجاحها (commit)، يجب أن تبقى تغييراتها محفوظة بشكل دائم حتى في حال انقطاع الكهرباء أو تعطل النظام فورًا بعد ذلك.",
      explanation: "مثال كلاسيكي يوضح أهمية Atomicity: تحويل مبلغ مالي بين حسابين يتطلب عمليتين (خصم من الحساب الأول وإضافة للثاني)؛ بدون ضمان الذرّية، قد ينجح الخصم ويفشل الإضافة بسبب عطل مفاجئ، فيختفي المال فعليًا من النظام. المعاملات (Transactions) عبر BEGIN وCOMMIT وROLLBACK هي الآلية التي توفر هذا الضمان، وهي سبب اعتماد التطبيقات المالية والحساسة على قواعد بيانات علائقية (relational) تدعم ACID بشكل كامل.",
      example: "BEGIN TRANSACTION;\nUPDATE accounts SET balance = balance - 100 WHERE id = 1;\nUPDATE accounts SET balance = balance + 100 WHERE id = 2;\n-- لو فشل أي سطر هنا، ينبغي:\nROLLBACK; -- إلغاء كل شيء\n-- أو عند النجاح الكامل:\nCOMMIT; -- تثبيت كل شيء بشكل دائم",
      bestPractices: ["لُفّ أي مجموعة عمليات مترابطة منطقيًا (يجب أن تنجح أو تفشل معًا) داخل معاملة واحدة صريحة"],
      commonMistakes: ["تنفيذ عمليات مترابطة منطقيًا (مثل التحويل المالي) كاستعلامات منفصلة دون معاملة، مما يترك احتمالًا لحالة غير متسقة عند فشل جزئي"],
      followups: ["ما هي مستويات العزل (Isolation Levels) الأربعة وما الفرق بينها (Read Uncommitted, Read Committed, Repeatable Read, Serializable)؟"], similar: ["ما هو Deadlock في قواعد البيانات وكيف يُتفادى؟"]
    },
    {
      id: "sql-3", title: "ما الفرق بين WHERE وHAVING؟", difficulty: "medium", domain: "SQL", type: "open", timeMinutes: 3,
      question: "متى تستخدم HAVING بدلًا من WHERE في استعلام يحتوي GROUP BY؟",
      answer: "WHERE يُصفّي الصفوف الفردية قبل أي تجميع (GROUP BY)، أي يعمل على البيانات الخام مباشرة من الجدول. أما HAVING فيُصفّي المجموعات (groups) بعد تنفيذ GROUP BY، ويُستخدم تحديدًا عندما يكون شرط التصفية يعتمد على نتيجة دالة تجميعية (aggregate function) مثل COUNT أو SUM أو AVG، وهو ما لا يمكن لـ WHERE فعله لأن هذه الدوال التجميعية لم تُحسب بعد وقت تطبيق WHERE.",
      explanation: "قاعدة عملية بسيطة: لو كان شرط التصفية على عمود موجود مباشرة في الجدول (مثل WHERE country = 'مصر')، استخدم WHERE لأنه أكفأ (يُصفّي قبل التجميع فيقلل البيانات المُعالَجة لاحقًا). لو كان الشرط على نتيجة تجميعية (مثل 'أظهر فقط العملاء الذين لديهم أكثر من 5 طلبات')، فيجب استخدام HAVING COUNT(*) > 5 لأن هذا الشرط لا معنى له إلا بعد التجميع فعليًا.",
      example: "-- WHERE: تصفية صفوف قبل التجميع (على عمود مباشر)\nSELECT country, COUNT(*) FROM customers\nWHERE country = 'مصر'\nGROUP BY country;\n\n-- HAVING: تصفية بعد التجميع (على نتيجة دالة تجميعية)\nSELECT customer_id, COUNT(*) as order_count FROM orders\nGROUP BY customer_id\nHAVING COUNT(*) > 5;",
      bestPractices: ["استخدم WHERE كلما أمكن قبل GROUP BY لتقليل حجم البيانات المُعالَجة مبكرًا، واستخدم HAVING فقط للشروط التي تعتمد فعليًا على دالة تجميعية"],
      commonMistakes: ["محاولة استخدام WHERE COUNT(*) > 5 مباشرة، وهو خطأ نحوي لأن WHERE يُنفَّذ قبل حساب أي تجميع"],
      followups: ["ما ترتيب التنفيذ الفعلي لجمل SQL (FROM, WHERE, GROUP BY, HAVING, SELECT, ORDER BY)؟"], similar: ["ما الفرق بين COUNT(*) وCOUNT(column_name)؟"]
    },
    {
      id: "sql-mcq-1", title: "أي جملة SQL تُستخدم لتصفية المجموعات بعد GROUP BY؟", difficulty: "medium", domain: "SQL", type: "mcq", timeMinutes: 1,
      question: "أي جملة في SQL تُستخدم لتصفية النتائج بعد تطبيق GROUP BY (استنادًا لدالة تجميعية)؟",
      options: ["WHERE", "HAVING", "FILTER", "ORDER BY"], correctIndex: 1,
      answer: "HAVING",
      explanation: "HAVING مصممة خصيصًا للعمل مع GROUP BY، لتصفية المجموعات الناتجة بناءً على نتيجة دالة تجميعية مثل COUNT أو SUM، وهو ما لا يمكن لـ WHERE القيام به لأنها تُطبَّق قبل أي تجميع.",
      bestPractices: ["تذكّر ترتيب التنفيذ المنطقي: WHERE أولًا (على الصفوف الخام)، ثم GROUP BY، ثم HAVING (على المجموعات)"],
      commonMistakes: ["محاولة استخدام WHERE بدلًا من HAVING مع دالة تجميعية، مما يُسبب خطأ نحويًا"],
      followups: [], similar: ["ما الفرق بين GROUP BY وDISTINCT؟"]
    },
    {
      id: "sql-tf-1", title: "صح أو خطأ: الفهرس (Index) يُسرّع SELECT لكن قد يُبطئ INSERT/UPDATE", difficulty: "medium", domain: "SQL", type: "tf", timeMinutes: 1,
      question: "صح أم خطأ: إضافة فهرس (index) على عمود تُسرّع استعلامات SELECT التي تفلتر أو ترتّب حسب ذلك العمود، لكنها قد تُبطئ قليلًا عمليات INSERT وUPDATE وDELETE على ذلك الجدول.",
      isTrue: true,
      answer: "صح.",
      explanation: "الفهرس بنية بيانات إضافية (غالبًا B-Tree) تُخزَّن بشكل منفصل عن بيانات الجدول نفسها لتسريع البحث، لكن أي عملية تُعدِّل بيانات الجدول (إدراج، تحديث، حذف) يجب أن تُحدِّث الفهرس أيضًا للحفاظ على تناسقه مع البيانات الفعلية، مما يضيف تكلفة أداء إضافية طفيفة على عمليات الكتابة مقابل تسريع كبير في عمليات القراءة/البحث.",
      bestPractices: ["أضف فهارس على الأعمدة المستخدمة كثيرًا في WHERE وJOIN وORDER BY، لكن تجنّب الإفراط في الفهرسة على جداول تُكتب فيها بيانات كثيرة وبشكل متكرر"],
      commonMistakes: ["إضافة فهرس على كل عمود 'تحسبًا' دون قياس فعلي لأنماط الاستعلام الحقيقية، مما يُبطئ الكتابة دون فائدة تُذكر"],
      followups: ["ما الفرق بين Clustered Index وNon-Clustered Index؟"], similar: ["كيف تستخدم EXPLAIN لفهم خطة تنفيذ استعلام؟"]
    },
    {
      id: "sql-4", title: "ما الفرق بين UNION وUNION ALL؟", difficulty: "medium", domain: "SQL", type: "open", timeMinutes: 3,
      question: "متى تستخدم UNION ومتى تستخدم UNION ALL لدمج نتائج استعلامين؟",
      answer: "UNION يدمج نتائج استعلامين (بنفس عدد ونوع الأعمدة) في نتيجة واحدة، مع حذف الصفوف المكررة تلقائيًا (يتطلب هذا عمليًا فرزًا داخليًا للمقارنة). UNION ALL يدمج النتائج بنفس الطريقة لكن دون حذف أي تكرار، فيُبقي كل الصفوف من كلا الاستعلامين كما هي، بما فيها المتطابقة تمامًا.",
      explanation: "الفرق الجوهري العملي هو الأداء: UNION ALL أسرع بكثير من UNION لأنه لا يحتاج فحص كل صف لمقارنته بباقي الصفوف بحثًا عن تكرار. لذا القاعدة العملية: استخدم UNION ALL دائمًا كخيار افتراضي أول، ولا تنتقل لـ UNION إلا إذا كنت متأكدًا فعليًا من وجود تكرار محتمل تريد إزالته، وتقبّل التكلفة الإضافية لذلك.",
      example: "-- UNION: يحذف التكرارات (أبطأ)\nSELECT city FROM customers\nUNION\nSELECT city FROM suppliers;\n\n-- UNION ALL: يُبقي كل شيء (أسرع)\nSELECT city FROM customers\nUNION ALL\nSELECT city FROM suppliers;",
      bestPractices: ["استخدم UNION ALL افتراضيًا ما لم تحتج فعليًا لحذف التكرارات"],
      commonMistakes: ["استخدام UNION افتراضيًا دون تفكير في التكلفة الإضافية، بينما UNION ALL كافٍ تمامًا في أغلب الحالات العملية"],
      followups: ["ما الشروط اللازمة لعمل UNION بين استعلامين (تطابق عدد وأنواع الأعمدة)؟"], similar: ["ما الفرق بين JOIN وUNION من ناحية الغرض؟"]
    },
    {
      id: "sql-5", title: "ما هو Self Join ومتى يُستخدم؟", difficulty: "hard", domain: "SQL", type: "open", timeMinutes: 4,
      question: "ما هو Self Join، واذكر مثالاً عمليًا لحالة تحتاج فيها لربط جدول بنفسه.",
      answer: "Self Join هو عملية ربط جدول بنفسه، عبر معاملته كأنه جدولان منفصلان بأسماء مستعارة (aliases) مختلفة، وذلك لمقارنة صفوف الجدول ببعضها البعض. يُستخدم عندما يحتوي الجدول على علاقة هرمية أو مرجعية ذاتية، مثل عمود manager_id في جدول employees يشير لمعرّف موظف آخر (المدير) داخل نفس الجدول.",
      explanation: "بدون Self Join، يصعب الإجابة على أسئلة مثل 'أظهر كل موظف مع اسم مديره المباشر'، لأن اسم المدير موجود في نفس جدول الموظفين وليس جدولاً منفصلاً. عبر ربط الجدول بنفسه (مرة كـ e لتمثيل الموظف، ومرة كـ m لتمثيل المدير)، يمكن مطابقة e.manager_id مع m.id للحصول على اسم المدير مباشرة في نفس الاستعلام.",
      example: "SELECT e.name AS employee_name, m.name AS manager_name\nFROM employees e\nLEFT JOIN employees m ON e.manager_id = m.id;\n-- e و m كلاهما نفس جدول employees، بأسماء مستعارة مختلفة",
      bestPractices: ["استخدم أسماء مستعارة واضحة (مثل e وm) عند عمل Self Join لتمييز أي 'نسخة' من الجدول تُمثّل ماذا في الاستعلام"],
      commonMistakes: ["نسيان استخدام LEFT JOIN بدلاً من INNER JOIN عند البحث عن صفوف قد لا يكون لها تطابق ذاتي (مثل موظف بلا مدير، كالمدير التنفيذي الأعلى)"],
      followups: ["كيف تستخدم Self Join لإيجاد أزواج مكررة (duplicates) في جدول؟"], similar: ["ما هو Recursive CTE وكيف يمتد لمستويات هرمية غير محدودة العمق؟"]
    },
    {
      id: "sql-mcq-2", title: "أي جملة SQL تُستخدم لإزالة الصفوف المكررة من نتيجة استعلام؟", difficulty: "easy", domain: "SQL", type: "mcq", timeMinutes: 1,
      question: "أي كلمة مفتاحية في SQL تُزيل الصفوف المكررة من نتيجة SELECT مباشرة؟",
      options: ["UNIQUE", "DISTINCT", "GROUP", "FILTER"], correctIndex: 1,
      answer: "DISTINCT",
      explanation: "SELECT DISTINCT column_name يُرجع فقط القيم الفريدة (غير المكررة) لذلك العمود أو مجموعة الأعمدة المحددة، بحذف أي صفوف متطابقة تمامًا في النتيجة النهائية. يمكن استخدامه أيضًا مع أعمدة متعددة لإزالة التكرار بناءً على مجموعة القيم مجتمعة.",
      bestPractices: ["استخدم DISTINCT فقط عند الحاجة الفعلية، لأنه يضيف تكلفة أداء (يتطلب مقارنة/فرز داخلي) على استعلامات كبيرة"],
      commonMistakes: ["استخدام DISTINCT كعادة افتراضية 'احتياطًا' حتى عند عدم وجود تكرار متوقع فعليًا في البيانات"],
      followups: [], similar: ["ما الفرق بين DISTINCT وGROUP BY عندما لا توجد دالة تجميعية؟"]
    },
    {
      id: "sql-6", title: "ما هو Foreign Key وما دوره في سلامة البيانات؟", difficulty: "medium", domain: "SQL", type: "open", timeMinutes: 4,
      question: "ما هو المفتاح الأجنبي (Foreign Key)، وكيف يضمن سلامة الإحالة (Referential Integrity) بين الجداول؟",
      answer: "المفتاح الأجنبي عمود (أو مجموعة أعمدة) في جدول يشير لمفتاح أساسي (Primary Key) في جدول آخر، مُنشئًا علاقة رسمية بينهما. يفرض قاعدة البيانات تلقائيًا 'سلامة الإحالة': لا يمكن إدراج قيمة في عمود foreign key لا توجد فعليًا كمفتاح أساسي مطابق في الجدول المرجعي، ولا يمكن (افتراضيًا) حذف صف من الجدول المرجعي إن كانت هناك صفوف أخرى تعتمد عليه عبر foreign key، ما لم تُحدَّد سياسة صريحة للتعامل مع ذلك (مثل CASCADE للحذف التلقائي المرتبط).",
      explanation: "بدون Foreign Key، يمكن بسهولة إدخال بيانات غير متسقة، مثل طلب (order) يشير لعميل (customer_id) غير موجود فعليًا في جدول العملاء، مما يخلق 'بيانات يتيمة' (orphaned data) تُفسد تقارير وإحصائيات لاحقة. فرض القيد على مستوى قاعدة البيانات نفسها (وليس فقط على مستوى كود التطبيق) يضمن سلامة البيانات حتى لو كان هناك أخطاء برمجية أو تعديلات مباشرة على قاعدة البيانات تتجاوز طبقة التطبيق.",
      example: "CREATE TABLE orders (\n    id INT PRIMARY KEY,\n    customer_id INT,\n    FOREIGN KEY (customer_id) REFERENCES customers(id)\n      ON DELETE CASCADE  -- حذف الطلبات تلقائيًا عند حذف العميل\n);",
      bestPractices: ["عرّف Foreign Keys صراحة على مستوى قاعدة البيانات، ولا تعتمد فقط على منطق التطبيق للحفاظ على سلامة العلاقات بين الجداول"],
      commonMistakes: ["الاعتماد فقط على كود التطبيق لضمان صحة العلاقات (مثل التحقق من وجود customer_id قبل الإدراج) دون فرض قيد Foreign Key فعلي في قاعدة البيانات نفسها كطبقة حماية إضافية"],
      followups: ["ما الفرق بين ON DELETE CASCADE وON DELETE SET NULL وON DELETE RESTRICT؟"], similar: ["ما هو Composite Key وكيف يختلف عن Foreign Key بسيط؟"]
    },
    {
      id: "sql-mcq-3", title: "أي مستوى عزل يمنع القراءة المتسخة (Dirty Read) لكن قد يسمح بقراءات غير قابلة للتكرار؟", difficulty: "hard", domain: "SQL", type: "mcq", timeMinutes: 2,
      question: "أي من مستويات العزل التالية (Isolation Levels) يمنع Dirty Read لكنه قد يسمح بحدوث Non-Repeatable Read؟",
      options: ["Read Uncommitted", "Read Committed", "Serializable", "لا أحد منها"], correctIndex: 1,
      answer: "Read Committed",
      explanation: "Read Committed يضمن أن أي معاملة (transaction) تقرأ فقط بيانات تم تثبيتها بالفعل (committed) من معاملات أخرى، فيمنع Dirty Read (قراءة بيانات معاملة أخرى لم تُثبَّت بعد وقد تتراجع لاحقًا). لكنه لا يمنع Non-Repeatable Read: لو قرأت معاملتك نفس الصف مرتين، وبين القراءتين قامت معاملة أخرى بتحديث ذلك الصف وتثبيته، فستحصل على قيمتين مختلفتين لنفس الصف داخل نفس معاملتك. مستوى Serializable الأعلى (والأبطأ) يمنع كل هذه المشاكل بما فيها Non-Repeatable Read.",
      bestPractices: ["اختر مستوى العزل بناءً على حاجة تطبيقك الفعلية للتوازن بين الاتساق الصارم والأداء؛ Read Committed هو الافتراضي الشائع في أنظمة كثيرة لتوازنه المعقول"],
      commonMistakes: ["استخدام Serializable افتراضيًا في كل مكان دون داعٍ فعلي، مما يُبطئ الأداء بشكل كبير بسبب القفل الصارم الإضافي مقارنة بمستويات أقل تشددًا كافية لمعظم الحالات"],
      followups: [], similar: ["ما هو Phantom Read، وأي مستوى عزل يمنعه؟"]
    },
  ]
},

/* ======================================================================
   Linux
   ====================================================================== */
{
  id: "linux",
  name: "Linux",
  icon: "🐧",
  intro: "إتقان Linux ضروري لأي مطور Backend أو DevOps، لأن معظم الخوادم في العالم تعمل عليه. المقابلات تركّز على صلاحيات الملفات، إدارة العمليات (Processes)، والأدوات النصية (Pipes، Redirection) التي تجعل سطر الأوامر أداة قوية جدًا لمعالجة البيانات.",
  concepts: [
    { title: "صلاحيات الملفات (Permissions)", body: "كل ملف له ثلاث فئات صلاحيات: المالك (owner)، المجموعة (group)، والآخرون (others)، وكل فئة لها قراءة (r) وكتابة (w) وتنفيذ (x)، تُمثَّل عادة كأرقام (مثل 755) أو رموز (rwxr-xr-x)." },
    { title: "إدارة العمليات (Process Management)", body: "كل برنامج قيد التشغيل هو process له معرّف فريد (PID). أوامر مثل ps وtop تعرض العمليات الجارية، وkill ترسل إشارات (signals) للتحكم بها مثل الإنهاء الآمن (SIGTERM) أو القسري (SIGKILL)." },
    { title: "الأنابيب وإعادة التوجيه (Pipes & Redirection)", body: "الأنبوب | يُمرر مخرجات أمر كمدخلات لأمر آخر مباشرة، بينما > و>> تُعيدان توجيه المخرجات لملف (استبدال أو إلحاق)، وهذا أساس فلسفة يونكس 'أدوات صغيرة تفعل شيئًا واحدا جيدًا، وتُركَّب معًا'." }
  ],
  questions: [
    {
      id: "linux-1", title: "اشرح صلاحيات الملفات وchmod", difficulty: "medium", domain: "Linux", type: "open", timeMinutes: 4,
      question: "كيف تعمل صلاحيات الملفات في Linux، وماذا يعني الأمر chmod 755 file.sh؟",
      answer: "لكل ملف ثلاث فئات: المالك (owner)، المجموعة (group)، والآخرون (others)، ولكل فئة ثلاث صلاحيات: قراءة (read=4)، كتابة (write=2)، تنفيذ (execute=1). الرقم الإجمالي لكل فئة هو مجموع الصلاحيات الممنوحة لها. في chmod 755: الرقم 7 (4+2+1) للمالك يعني قراءة+كتابة+تنفيذ، والرقم 5 (4+1) للمجموعة والآخرين يعني قراءة+تنفيذ فقط (بدون كتابة).",
      explanation: "هذا النظام الرقمي (Octal) هو الطريقة الأسرع لضبط الصلاحيات دفعة واحدة، بديلاً عن الصيغة الرمزية rwxr-xr-x الأطول. صلاحية التنفيذ (x) على الملفات الثنائية أو السكربتات ضرورية لتشغيلها مباشرة (./script.sh)، بينما صلاحية x على مجلد لها معنى مختلف تمامًا: تعني إمكانية الدخول لذلك المجلد (cd) واستعراض محتوياته بالاسم، وليس 'تنفيذه'.",
      example: "chmod 755 script.sh   # rwxr-xr-x - المالك كل شيء، البقية قراءة وتنفيذ فقط\nchmod 644 file.txt     # rw-r--r-- - المالك قراءة وكتابة، البقية قراءة فقط\nchmod +x script.sh     # إضافة صلاحية تنفيذ فقط دون تغيير الباقي",
      bestPractices: ["لا تستخدم chmod 777 (صلاحية كاملة للجميع) إلا للضرورة القصوى، فهي ثغرة أمنية شائعة في الخوادم"],
      commonMistakes: ["استخدام chmod 777 كحل سريع لمشاكل الصلاحيات دون فهم المخاطر الأمنية الحقيقية وراء ذلك"],
      followups: ["ما الفرق بين chmod وchown؟", "ما معنى صلاحية sticky bit أو setuid؟"], similar: ["ما الفرق بين hard link وsymbolic link؟"]
    },
    {
      id: "linux-2", title: "ما الفرق بين SIGTERM وSIGKILL؟", difficulty: "medium", domain: "Linux", type: "open", timeMinutes: 3,
      question: "عند إنهاء عملية (process) في Linux، ما الفرق بين إرسال SIGTERM وSIGKILL؟",
      answer: "SIGTERM (الإشارة الافتراضية لأمر kill) تطلب من العملية إنهاء نفسها بأدب (graceful shutdown)، مما يسمح لها بالتقاط الإشارة وتنفيذ عمليات تنظيف (مثل إغلاق اتصالات قاعدة بيانات أو حفظ حالة) قبل الخروج فعليًا. أما SIGKILL (kill -9) فتُنهي العملية فورًا وبشكل غير قابل للتجاهل من نظام التشغيل مباشرة، دون منحها أي فرصة لتنظيف مواردها، مما قد يترك ملفات مؤقتة أو اتصالات مفتوحة معلّقة.",
      explanation: "القاعدة العملية: جرّب دائمًا SIGTERM أولاً وانتظر قليلاً لترى إن أنهت العملية نفسها بأدب، ولا تلجأ لـ SIGKILL إلا إذا لم تستجب العملية إطلاقًا بعد مهلة معقولة (تُعرف هذه العملية بـ 'العملية العنيدة' أو hung process)، لأن SIGKILL قد يترك النظام في حالة غير متسقة (مثل ملف قفل lock file لم يُحذف).",
      example: "kill 1234        # يرسل SIGTERM افتراضيًا - إنهاء أدبي\nkill -9 1234      # يرسل SIGKILL - إنهاء قسري فوري\nkill -l           # عرض كل الإشارات المتاحة",
      bestPractices: ["استخدم SIGTERM أولاً دائمًا، وSIGKILL فقط كملاذ أخير عند عدم استجابة العملية"],
      commonMistakes: ["استخدام kill -9 كعادة افتراضية دون تجربة SIGTERM أولاً، مما قد يُفسد بيانات لم تُحفَظ بعد"],
      followups: ["كيف تلتقط عملية Node.js أو Python إشارة SIGTERM لتنظيف نفسها قبل الخروج؟"], similar: ["ما الفرق بين foreground وbackground process (& وnohup)؟"]
    },
    {
      id: "linux-3", title: "اشرح الأنابيب وإعادة التوجيه (Pipes & Redirection)", difficulty: "easy", domain: "Linux", type: "open", timeMinutes: 3,
      question: "ما الفرق بين استخدام | و> و>> و2>&1 في سطر أوامر Linux؟",
      answer: "الأنبوب | يأخذ المخرجات القياسية (stdout) لأمر ما ويُمررها كمدخلات قياسية (stdin) للأمر التالي مباشرة، مما يسمح بتركيب أوامر بسيطة معًا لإنجاز مهام معقدة. > تُعيد توجيه المخرجات لملف مع استبدال محتواه بالكامل، بينما >> تُلحق المخرجات بنهاية الملف دون حذف محتواه القديم. أما 2>&1 فتُعيد توجيه مخرجات الأخطاء (stderr، الوصف الرقمي 2) لتذهب لنفس وجهة المخرجات العادية (stdout، الوصف الرقمي 1)، وهو مفيد لتسجيل كل الرسائل (عادية وأخطاء) في نفس ملف السجل (log).",
      explanation: "هذا النظام يجسّد فلسفة يونكس الأساسية: كل أداة تفعل شيئًا واحدًا بإتقان، وتُركَّب مع أدوات أخرى عبر أنابيب لإنجاز مهام معقدة دون الحاجة لكتابة برنامج مخصص. مثال شائع جدًا: ps aux | grep node | wc -l يُظهر عدد عمليات Node.js الجارية حاليًا، بتركيب ثلاثة أوامر بسيطة معًا.",
      example: "ps aux | grep node        # تمرير مخرجات ps كمدخلات لـ grep\necho 'log entry' >> app.log   # إلحاق سطر بنهاية ملف السجل\ncommand > output.log 2>&1     # توجيه كل من المخرجات والأخطاء لنفس الملف",
      bestPractices: ["استخدم >> لملفات السجل (logs) لتفادي حذف السجل القديم بالخطأ عبر > "],
      commonMistakes: ["استخدام > بدلًا من >> عند إضافة بيانات لملف سجل موجود، مما يمحو كل السجل السابق دون قصد"],
      followups: ["ما الفرق بين stdin وstdout وstderr كأوصاف ملفات (file descriptors)؟"], similar: ["ما هو أمر tee ومتى يُستخدم بدلًا من > العادي؟"]
    },
    {
      id: "linux-mcq-1", title: "أي أمر يعرض العمليات الجارية بشكل تفاعلي مباشر؟", difficulty: "easy", domain: "Linux", type: "mcq", timeMinutes: 1,
      question: "أي أمر Linux يعرض العمليات الجارية وموارد النظام (CPU، الذاكرة) بشكل تفاعلي محدَّث لحظيًا؟",
      options: ["ls", "ps", "top", "cat"], correctIndex: 2,
      answer: "top (أو الأحدث htop)",
      explanation: "top يعرض لوحة تحكم تفاعلية محدَّثة كل ثانية أو ثانيتين تُظهر استهلاك CPU والذاكرة لكل عملية، وترتيبها حسب الاستهلاك، وهو أول أداة يلجأ لها أي مسؤول نظام لتشخيص مشكلة أداء فورية. ps بالمقابل يعطي لقطة (snapshot) ثابتة واحدة لحظة تنفيذ الأمر فقط دون تحديث تلقائي.",
      bestPractices: ["استخدم htop (نسخة محسّنة بصريًا من top) إن كانت متاحة على الخادم لتشخيص أسرع وأوضح"],
      commonMistakes: ["استخدام ps فقط لمراقبة أداء مستمر بدلًا من top، مما يتطلب تكرار الأمر يدويًا"],
      followups: [], similar: ["ما الفرق بين ps aux وps -ef؟"]
    },
    {
      id: "linux-tf-1", title: "صح أو خطأ: sudo يمنحك صلاحيات root بشكل دائم لكل الجلسة", difficulty: "medium", domain: "Linux", type: "tf", timeMinutes: 1,
      question: "صح أم خطأ: استخدام sudo قبل أمر واحد يمنحك صلاحيات root بشكل دائم لبقية جلسة الطرفية (terminal session) دون الحاجة لتكرار sudo لاحقًا.",
      isTrue: false,
      answer: "خطأ.",
      explanation: "sudo يمنح صلاحيات مرتفعة (root) فقط للأمر الواحد الذي يسبقه مباشرة، رغم أنه قد لا يطلب كلمة المرور مرة أخرى لفترة قصيرة بعد الاستخدام (تُسمى فترة 'ذاكرة التخزين المؤقت' لجلسة sudo، عادة بضع دقائق حسب الإعداد). للحصول على صلاحيات root دائمة طوال الجلسة كاملة، يجب استخدام sudo -i أو sudo su للدخول فعليًا كمستخدم root.",
      bestPractices: ["استخدم sudo لكل أمر يحتاج صلاحيات مرتفعة تحديدًا، بدلًا من الدخول كـ root بشكل دائم لتقليل مخاطر أخطاء عرضية جسيمة"],
      commonMistakes: ["الخلط بين sudo (رفع صلاحية أمر واحد) وsudo su (الدخول كـ root فعليًا لبقية الجلسة)"],
      followups: [], similar: ["ما الفرق بين المستخدم root والمستخدم العادي في Linux؟"]
    },
    {
      id: "linux-4", title: "ما الفرق بين Hard Link وSymbolic Link؟", difficulty: "medium", domain: "Linux", type: "open", timeMinutes: 4,
      question: "ما الفرق بين الرابط الصلب (Hard Link) والرابط الرمزي (Symbolic Link/Symlink) في Linux؟",
      answer: "الرابط الصلب (hard link، عبر ln) يُنشئ اسمًا إضافيًا يشير مباشرة لنفس البيانات الفعلية على القرص (نفس inode)؛ حذف أحد الأسماء لا يحذف البيانات طالما بقي اسم واحد آخر يشير لها. الرابط الرمزي (symbolic link، عبر ln -s) هو ملف خاص صغير يحتوي فقط مسار الملف الأصلي كنص، مشابه لاختصار (shortcut)؛ إذا حُذف أو نُقل الملف الأصلي، يصبح الرابط الرمزي 'معلَّقًا' (broken/dangling) ويشير لمسار غير موجود.",
      explanation: "فرق تقني مهم: الرابط الصلب لا يمكنه الإشارة عبر أنظمة ملفات (partitions) مختلفة لأنه يعتمد على رقم inode المحلي لنظام الملفات نفسه، بينما الرابط الرمزي يمكنه الإشارة لأي مسار في أي مكان (حتى عبر أنظمة ملفات مختلفة) لأنه مجرد نص مسار. كما لا يمكن عمل رابط صلب لمجلد (directory) لتفادي حلقات لا نهائية محتملة في شجرة الملفات، بينما الرابط الرمزي يمكنه الإشارة لمجلد بلا مشكلة.",
      example: "ln original.txt hardlink.txt      # رابط صلب - نفس البيانات فعليًا\nln -s original.txt symlink.txt    # رابط رمزي - يشير للمسار فقط\n\nrm original.txt\n# hardlink.txt: لا يزال يعمل، البيانات لا تزال موجودة\n# symlink.txt: أصبح معلَّقًا (broken link)",
      bestPractices: ["استخدم الروابط الرمزية للإشارة السريعة لمجلدات أو ملفات في مواقع أخرى، والروابط الصلبة نادرًا ما تُستخدم يدويًا إلا لحالات نسخ احتياطي متقدمة"],
      commonMistakes: ["الاعتماد على رابط رمزي دون التحقق من استمرار وجود الملف الأصلي، فيصبح الرابط معلَّقًا دون تنبيه واضح عند تشغيل سكربت يعتمد عليه"],
      followups: ["كيف تتحقق ما إذا كان ملف معيّن رابطًا رمزيًا عبر الأمر ls -l؟"], similar: ["ما هو inode في نظام ملفات Linux؟"]
    },
    {
      id: "linux-mcq-2", title: "أي أداة تُستخدم لجدولة مهام دورية تلقائية في Linux؟", difficulty: "easy", domain: "Linux", type: "mcq", timeMinutes: 1,
      question: "أي أداة/خدمة في Linux تُستخدم لجدولة تنفيذ أوامر أو سكربتات تلقائيًا في أوقات محددة بشكل متكرر؟",
      options: ["systemd فقط", "cron", "grep", "chmod"], correctIndex: 1,
      answer: "cron",
      explanation: "cron خدمة نظام تعمل في الخلفية تقرأ جداول زمنية معرَّفة (crontab) لتنفيذ أوامر تلقائيًا في أوقات محددة (كل دقيقة، كل ساعة، يوميًا في وقت معيّن، إلخ)، وتُستخدم شائعًا لمهام مثل النسخ الاحتياطي الدوري، تنظيف ملفات مؤقتة، أو إرسال تقارير دورية.",
      bestPractices: ["استخدم crontab -e لتحرير جدول المهام الخاص بمستخدم معيّن، وسجّل مخرجات كل مهمة في ملف log لتسهيل تصحيح الأخطاء لاحقًا"],
      commonMistakes: ["نسيان أن بيئة cron قد تختلف عن بيئة الطرفية العادية (متغيرات PATH مختلفة مثلاً)، مما يجعل سكربتًا يعمل يدويًا يفشل صامتًا عند تشغيله عبر cron"],
      followups: [], similar: ["ما هي صيغة جدول cron الزمني (دقيقة ساعة يوم شهر أسبوع)؟"]
    },
    {
      id: "linux-5", title: "ما هو grep وكيف يُستخدم مع Regular Expressions؟", difficulty: "medium", domain: "Linux", type: "open", timeMinutes: 3,
      question: "ما هو أمر grep، ولماذا يُعتبر من أهم أدوات معالجة النصوص في Linux؟",
      answer: "grep يبحث عن نمط نصي (أو تعبير نمطي/regular expression) داخل ملف أو نص وارد، ويطبع كل الأسطر المطابقة لذلك النمط. فائدته الحقيقية تظهر عند دمجه عبر أنابيب (pipes) مع أوامر أخرى، مثل فلترة مخرجات ps للبحث عن عملية معيّنة، أو البحث عن سطر خطأ محدد داخل ملف سجل ضخم يحتوي آلاف الأسطر دون فتحه يدويًا بالكامل.",
      explanation: "قوة grep الحقيقية تأتي من دعمه لـ Regular Expressions: بدلاً من البحث عن نص حرفي ثابت فقط، يمكن البحث عن أنماط مرنة مثل 'أي سطر يبدأ بتاريخ بصيغة معيّنة' أو 'أي سطر يحتوي رقم هاتف بصيغة معيّنة'، مما يجعله أداة تحليل نصوص قوية جدًا لمهندسي الأنظمة ومطوري البرمجيات على حد سواء، خصوصًا عند تحليل ملفات سجل (logs) ضخمة بحثًا عن أنماط أخطاء محددة.",
      example: "grep 'error' app.log              # بحث عن نص حرفي 'error'\ngrep -i 'error' app.log            # بحث غير حساس لحالة الأحرف\ngrep -r 'TODO' ./src               # بحث تكراري عبر كل الملفات في مجلد\nps aux | grep node                 # دمج مع أمر آخر عبر أنبوب",
      bestPractices: ["استخدم grep -r للبحث عبر مجلد كامل من الملفات، وgrep -i لتجاهل حالة الأحرف عند الحاجة"],
      commonMistakes: ["البحث بنمط نصي بسيط جدًا يُنتج نتائج كثيرة غير ذات صلة، بدلاً من صياغة تعبير نمطي أدق يستهدف الحالة المطلوبة تحديدًا"],
      followups: ["ما الفرق بين grep وegrep من ناحية دعم صياغة regex؟"], similar: ["ما هو أمر sed وكيف يُستخدم لتعديل النصوص مباشرة (وليس فقط البحث)؟"]
    },
    {
      id: "linux-mcq-3", title: "ما وظيفة سطر Shebang (#!/bin/bash) في بداية سكربت؟", difficulty: "medium", domain: "Linux", type: "mcq", timeMinutes: 2,
      question: "ما وظيفة السطر الأول #!/bin/bash في بداية سكربت شل؟",
      options: ["مجرد تعليق (comment) يُتجاهل تمامًا", "يُخبر النظام بأي مُفسِّر (interpreter) يجب استخدامه لتنفيذ بقية السكربت", "يُشفّر محتوى السكربت", "يُحدد صلاحيات الملف تلقائيًا"], correctIndex: 1,
      answer: "يُخبر النظام بأي مُفسِّر (interpreter) يجب استخدامه لتنفيذ بقية السكربت.",
      explanation: "سطر Shebang (يبدأ بـ #! ثم مسار المُفسِّر) يُخبر نظام التشغيل تحديدًا أي برنامج يجب استخدامه لتفسير وتنفيذ بقية أسطر الملف عند تشغيله مباشرة (مثل ./script.sh). #!/bin/bash يعني 'استخدم bash'، بينما #!/usr/bin/env python3 يعني 'استخدم بايثون 3'. بدون هذا السطر، قد يحاول النظام تنفيذ السكربت بمفسر خاطئ (أو الصدفة الحالية الافتراضية) مما قد يُسبب أخطاء صياغة غير متوقعة.",
      bestPractices: ["استخدم #!/usr/bin/env bash أو #!/usr/bin/env python3 بدلاً من مسار ثابت مباشر، لضمان استخدام أول نسخة مطابقة موجودة في PATH بغض النظر عن مسارها الدقيق على كل نظام"],
      commonMistakes: ["نسيان سطر Shebang تمامًا، فيعتمد تفسير السكربت على الصدفة الحالية للمستخدم بدلاً من مفسر محدد صراحة ومتوقع"],
      followups: [], similar: ["كيف تجعل سكربتًا قابلاً للتنفيذ مباشرة (chmod +x) بعد كتابة Shebang الصحيح؟"]
    },
    {
      id: "linux-6", title: "ما الفرق بين SSH وTelnet؟", difficulty: "medium", domain: "Linux", type: "open", timeMinutes: 3,
      question: "ما هو SSH، ولماذا حلّ محل بروتوكول Telnet القديم للاتصال عن بُعد بالخوادم؟",
      answer: "SSH (Secure Shell) بروتوكول يسمح بالاتصال الآمن عن بُعد بجهاز آخر (عادة خادم Linux) وتنفيذ أوامر عليه، مع تشفير كامل لكل البيانات المتبادلة (بما فيها اسم المستخدم وكلمة المرور أو المفتاح). Telnet بروتوكول أقدم بكثير يقوم بنفس الوظيفة الأساسية (اتصال ونقل أوامر عن بُعد)، لكن دون أي تشفير إطلاقًا؛ كل البيانات (بما فيها كلمات المرور) تُرسَل كنص خام واضح (plain text) يمكن لأي طرف يتنصت على الشبكة قراءته مباشرة.",
      explanation: "هذا الفرق في الأمان هو السبب الحصري تقريبًا وراء استبدال Telnet شبه الكامل بـ SSH في كل الاستخدامات الحديثة؛ استخدام Telnet اليوم للاتصال بخادم حقيقي عبر الإنترنت يُعتبر ثغرة أمنية خطيرة جدًا، لأن أي شخص على نفس الشبكة (خصوصًا شبكات واي فاي عامة) يمكنه اعتراض بيانات الاعتماد بسهولة تامة. SSH أيضًا يدعم المصادقة عبر أزواج مفاتيح (public/private key) بدلاً من كلمة مرور فقط، مما يوفر أمانًا إضافيًا وتلقائية أكبر (اتصال دون كتابة كلمة مرور يدويًا في كل مرة).",
      example: "ssh user@server.com          # اتصال آمن مشفّر\nssh -i ~/.ssh/id_rsa user@server.com  # اتصال بمفتاح خاص محدد",
      bestPractices: ["استخدم SSH دائمًا (وليس Telnet مطلقًا) لأي اتصال إداري بخادم عن بُعد، وفضّل المصادقة بالمفاتيح (key-based) على كلمة المرور وحدها لأمان أعلى"],
      commonMistakes: ["استخدام Telnet في أي سياق حديث يتطلب اتصالاً بخادم حقيقي عبر شبكة غير موثوقة تمامًا، مما يعرّض بيانات الاعتماد لخطر الاعتراض المباشر"],
      followups: ["كيف تُعِدُّ مصادقة SSH بمفاتيح عامة/خاصة بدلاً من كلمة المرور؟"], similar: ["ما هو SCP وكيف يستخدم بروتوكول SSH لنقل الملفات بأمان؟"]
    },
    {
      id: "linux-mcq-4", title: "أي مجلد في Linux يحتوي عادة الملفات التنفيذية الأساسية للنظام؟", difficulty: "easy", domain: "Linux", type: "mcq", timeMinutes: 1,
      question: "أي مجلد قياسي في هيكل نظام ملفات Linux يحتوي عادة الملفات التنفيذية الأساسية المستخدمة من قبل كل المستخدمين (مثل ls وcat وgrep)؟",
      options: ["/etc", "/bin", "/var", "/tmp"], correctIndex: 1,
      answer: "/bin",
      explanation: "/bin يحتوي الملفات التنفيذية الأساسية (binaries) المطلوبة لعمل النظام الأساسي وتُستخدم من قبل كل المستخدمين، مثل ls وcat وgrep. أما /etc فيحتوي ملفات إعدادات النظام (configuration files)، /var يحتوي بيانات متغيّرة باستمرار مثل ملفات السجل (logs)، و/tmp يحتوي ملفات مؤقتة تُحذف عادة عند إعادة تشغيل النظام.",
      bestPractices: ["تعرّف على البنية القياسية لمجلدات Linux (/bin، /etc، /var، /home، /tmp...) فهي متشابهة عبر كل توزيعات Linux تقريبًا وأساسية لفهم أي نظام جديد بسرعة"],
      commonMistakes: ["الخلط بين /etc (إعدادات ثابتة نسبيًا) و/var (بيانات متغيّرة باستمرار مثل السجلات)، رغم اختلاف طبيعة المحتوى المتوقع في كل منهما"],
      followups: [], similar: ["ما الفرق بين /bin و/usr/bin و/sbin؟"]
    },
  ]
},

/* ======================================================================
   Node.js
   ====================================================================== */
{
  id: "nodejs",
  name: "Node.js",
  icon: "🟢",
  intro: "Node.js حوّل JavaScript إلى لغة Backend كاملة. المقابلات تركّز على فهمك لطبيعته اللاحاجبة (non-blocking) أحادية الخيط المبنية على Event Loop، وكيفية التعامل مع الوحدات (Modules) والحزم (npm)، وبناء واجهات برمجية عبر أطر مثل Express.",
  concepts: [
    { title: "Non-blocking I/O", body: "Node.js يُنفّذ عمليات الإدخال/الإخراج (قراءة ملفات، طلبات شبكة، قواعد بيانات) بشكل غير حاجب عبر تفويضها لمكتبة libuv في الخلفية، بينما يستمر الخيط الرئيسي في معالجة طلبات أخرى دون انتظار." },
    { title: "npm وpackage.json", body: "npm هو مدير الحزم الافتراضي لـ Node.js، وpackage.json يُعرّف اعتماديات المشروع (dependencies) وسكربتاته، مع استخدام الترقيم الدلالي (Semantic Versioning) مثل ^1.2.3 لتحديد نطاقات إصدارات مقبولة." },
    { title: "Middleware في Express", body: "دالة تُنفَّذ بين وصول الطلب (request) والوصول للمعالج (handler) النهائي، ويمكنها فحص أو تعديل الطلب، أو إنهاء الاستجابة مباشرة، أو تمرير التحكم للدالة التالية عبر next()." }
  ],
  questions: [
    {
      id: "node-1", title: "لماذا يُعتبر Node.js لاحاجب (non-blocking)؟", difficulty: "hard", domain: "Node.js", type: "open", timeMinutes: 5,
      question: "كيف يستطيع Node.js التعامل مع آلاف الاتصالات المتزامنة رغم أنه يعمل على خيط واحد رئيسي (single-threaded)؟",
      answer: "الخيط الرئيسي في Node.js لا يُنفّذ عمليات الإدخال/الإخراج البطيئة (مثل قراءة ملف، طلب شبكة، استعلام قاعدة بيانات) بنفسه مباشرة؛ بل يُفوّضها لمكتبة C++ داخلية تُسمى libuv، التي تدير مجموعة خيوط منفصلة (thread pool) خلف الكواليس للتعامل مع هذه العمليات البطيئة. عندما تكتمل عملية، تُوضَع دالة الاستدعاء (callback) الخاصة بها في طابور، ويلتقطها Event Loop لتنفيذها بمجرد أن يُصبح الخيط الرئيسي فارغًا.",
      explanation: "هذا يجعل Node.js مثاليًا جدًا لتطبيقات كثيرة الاتصالات لكن خفيفة الحساب (I/O-bound مثل خوادم API وWebSockets)، لأن الخيط الرئيسي لا ينتظر أبدًا اكتمال عملية بطيئة، بل ينتقل فورًا لمعالجة طلب آخر. بالمقابل، Node.js ليس الخيار الأمثل للعمليات الحسابية الثقيلة (CPU-bound مثل معالجة صور ضخمة) لأنها ستحجب الخيط الرئيسي الوحيد بالكامل وتمنعه من خدمة أي طلب آخر أثناء تنفيذها، ما لم تُستخدم worker_threads لتفويضها لخيط منفصل فعليًا.",
      example: "// غير حاجب - الخيط الرئيسي حر أثناء قراءة الملف\nfs.readFile('data.txt', (err, data) => {\n  console.log('اكتملت القراءة');\n});\nconsole.log('هذا يُطبع أولًا، قبل اكتمال القراءة');",
      bestPractices: ["استخدم النسخ غير الحاجبة (async) من دوال Node.js دائمًا (fs.readFile وليس fs.readFileSync) في كود الخادم الفعلي"],
      commonMistakes: ["استخدام دوال متزامنة حاجبة (مثل fs.readFileSync) داخل معالج طلب في خادم إنتاج، مما يُجمّد الخادم بالكامل لكل المستخدمين أثناء تلك القراءة"],
      followups: ["متى تحتاج فعليًا worker_threads بدلًا من الاعتماد على libuv وحده؟"], similar: ["كيف يختلف Event Loop في Node.js عن Event Loop في المتصفح (مثل process.nextTick)؟"]
    },
    {
      id: "node-2", title: "ما هو Middleware في Express؟", difficulty: "medium", domain: "Node.js", type: "open", timeMinutes: 4,
      question: "اشرح مفهوم Middleware في إطار عمل Express، مع مثال على استخدامه.",
      answer: "الـ Middleware دالة تأخذ ثلاثة معاملات (req، res، next) وتُنفَّذ في سلسلة بين وصول الطلب والوصول لمعالج المسار (route handler) النهائي. يمكنها فحص أو تعديل كائن الطلب req، إنهاء الاستجابة مباشرة (مثل رفض طلب غير مصرَّح)، أو استدعاء next() لتمرير التحكم للدالة التالية في السلسلة.",
      explanation: "الاستخدامات الشائعة تشمل: تسجيل كل طلب وارد (logging)، التحقق من صلاحية المصادقة (authentication) قبل الوصول لمسار محمي، تحليل جسم الطلب (body parsing مثل express.json())، ومعالجة الأخطاء المركزية. هذا التصميم يسمح بفصل الاهتمامات (Separation of Concerns) بحيث لا يحتاج كل معالج مسار لتكرار نفس منطق التحقق أو التسجيل بنفسه.",
      example: "function authMiddleware(req, res, next) {\n  if (!req.headers.authorization) {\n    return res.status(401).json({ error: 'غير مصرَّح' }); // إنهاء مباشر\n  }\n  next(); // المتابعة للمعالج التالي\n}\n\napp.get('/profile', authMiddleware, (req, res) => {\n  res.json({ name: 'محمد' });\n});",
      bestPractices: ["رتّب middleware بحكمة: middleware عامة (logging، body parsing) أولًا، ثم middleware خاصة بمسار معيّن (auth) مباشرة قبل معالجه"],
      commonMistakes: ["نسيان استدعاء next() داخل middleware، مما يجعل الطلب 'معلَّقًا' للأبد دون استجابة أو انتقال للمعالج التالي"],
      followups: ["كيف يعمل middleware معالجة الأخطاء المركزي (error-handling middleware) بأربعة معاملات؟"], similar: ["ما الفرق بين app.use() وapp.get() في Express؟"]
    },
    {
      id: "node-mcq-1", title: "ما الفرق بين dependencies وdevDependencies في package.json؟", difficulty: "easy", domain: "Node.js", type: "mcq", timeMinutes: 1,
      question: "أين يجب وضع مكتبة اختبار (testing library) مثل Jest في package.json؟",
      options: ["dependencies", "devDependencies", "peerDependencies", "scripts"], correctIndex: 1,
      answer: "devDependencies",
      explanation: "devDependencies تحتوي الحزم اللازمة فقط أثناء التطوير (اختبار، بناء، linting) ولا تُثبَّت في بيئة الإنتاج عند استخدام npm install --production، بينما dependencies تحتوي الحزم التي يحتاجها التطبيق فعليًا وقت التشغيل (runtime) في كل البيئات بما فيها الإنتاج.",
      bestPractices: ["ضع أي أداة تطوير فقط (اختبار، بناء) في devDependencies لتقليل حجم تثبيت الإنتاج"],
      commonMistakes: ["وضع كل شيء في dependencies دون تمييز، مما يُضخّم حجم التثبيت في الإنتاج بأدوات غير ضرورية هناك"],
      followups: [], similar: ["ما معنى ^ و~ في أرقام إصدارات npm (Semantic Versioning)؟"]
    },
    {
      id: "node-tf-1", title: "صح أو خطأ: Node.js أحادي الخيط بشكل كامل ولا يمكنه استخدام أكثر من نواة معالج", difficulty: "medium", domain: "Node.js", type: "tf", timeMinutes: 1,
      question: "صح أم خطأ: Node.js لا يمكنه أبدًا الاستفادة من أكثر من نواة معالج (CPU core) واحدة في أي حال من الأحوال.",
      isTrue: false,
      answer: "خطأ.",
      explanation: "رغم أن الخيط الرئيسي (main thread) لتنفيذ كود JavaScript في Node.js أحادي فعلاً، توفر Node.js وحدة worker_threads المدمجة لتشغيل كود JavaScript فعليًا على خيوط منفصلة تستفيد من أنوية معالج إضافية للمهام الحسابية الثقيلة، كما توفر وحدة cluster لتشغيل عدة نسخ (processes) من التطبيق نفسه على منافذ مشتركة للاستفادة من كل الأنوية المتاحة في خادم متعدد الأنوية.",
      bestPractices: ["استخدم cluster module أو أدوات مثل PM2 في بيئة الإنتاج للاستفادة من كل أنوية الخادم المتاحة"],
      commonMistakes: ["افتراض أن Node.js 'بطيء بطبيعته' على خوادم متعددة الأنوية دون استخدام cluster أو worker_threads فعليًا"],
      followups: ["ما الفرق العملي بين cluster module وworker_threads؟"], similar: ["كيف يعمل PM2 كمدير عمليات (process manager) لتطبيقات Node.js؟"]
    },
    {
      id: "node-3", title: "ما فائدة ملف package-lock.json؟", difficulty: "medium", domain: "Node.js", type: "open", timeMinutes: 3,
      question: "ما الفرق بين package.json وpackage-lock.json، ولماذا يجب حفظ الأخير في Git؟",
      answer: "package.json يُحدد الاعتماديات المطلوبة بنطاقات إصدار مرنة (مثل ^4.17.1 التي تقبل أي إصدار 4.x.x أحدث)، بينما package-lock.json يُثبِّت رقم الإصدار الدقيق والمحدد فعليًا لكل حزمة وكل اعتمادية فرعية لها (dependencies of dependencies)، بحيث يحصل كل من يُنفّذ npm install لاحقًا على نفس الإصدارات بالضبط، حرفيًا، بغض النظر متى نفّذ الأمر.",
      explanation: "بدون package-lock.json، يمكن لمطورين مختلفين (أو بيئة CI/CD مقابل جهاز مطور محلي) أن ينتهي بهم الأمر بإصدارات فرعية مختلفة قليلاً لنفس الاعتمادية (مثل 4.17.1 عند أحدهم و4.17.3 عند آخر)، مما قد يُسبب أخطاء غامضة صعبة إعادة إنتاجها ('يعمل على جهازي لكن لا يعمل هناك'). حفظ package-lock.json في Git يضمن أن الفريق بأكمله، وبيئة الإنتاج، يستخدمون نفس شجرة الاعتماديات بالضبط دائمًا.",
      bestPractices: ["احفظ package-lock.json دائمًا في نظام التحكم بالإصدارات (Git)، ولا تضفه أبدًا إلى .gitignore"],
      commonMistakes: ["تجاهل package-lock.json في .gitignore ظنًا أنه ملف مؤقت غير مهم، مما يفتح الباب لتضارب إصدارات صامت بين أعضاء الفريق"],
      followups: ["ما الفرق بين npm install وnpm ci من ناحية استخدام package-lock.json؟"], similar: ["كيف تعمل آلية semantic versioning (^و~) في تحديد نطاقات الإصدار؟"]
    },
    {
      id: "node-mcq-2", title: "أي وحدة Node.js تُستخدم للتعامل مع بيانات ثنائية خام؟", difficulty: "medium", domain: "Node.js", type: "mcq", timeMinutes: 1,
      question: "أي بنية بيانات في Node.js مصممة خصيصًا للتعامل مع بيانات ثنائية خام (raw binary data) مثل محتوى ملف صورة؟",
      options: ["Buffer", "Array", "String", "Map"], correctIndex: 0,
      answer: "Buffer",
      explanation: "Buffer بنية بيانات مدمجة في Node.js لتخزين والتعامل مع بيانات ثنائية خام مباشرة (بايتات) خارج نطاق محرك V8 العادي، وهي أساسية عند قراءة ملفات ثنائية (صور، فيديوهات)، أو التعامل مع بروتوكولات شبكة منخفضة المستوى، حيث لا تناسب String أو Array العادية تمثيل بيانات ثنائية خام بكفاءة.",
      bestPractices: ["استخدم Buffer عند التعامل مع بيانات ثنائية خام (streams من ملفات أو شبكة)، وحوّلها لنص فقط عند الحاجة الفعلية عبر toString() بترميز محدد"],
      commonMistakes: ["محاولة معاملة Buffer كنص عادي مباشرة دون تحديد الترميز (encoding) الصحيح، مما قد يُنتج نصًا مشوّهًا لبيانات غير نصية أصلاً"],
      followups: [], similar: ["ما هو Stream في Node.js وكيف يرتبط بـ Buffer؟"]
    },
    {
      id: "node-4", title: "ما هو EventEmitter في Node.js؟", difficulty: "medium", domain: "Node.js", type: "open", timeMinutes: 4,
      question: "ما هو EventEmitter، وكيف يُشكّل أساس التعامل مع الأحداث في Node.js؟",
      answer: "EventEmitter فئة مدمجة في Node.js تسمح لكائن بإطلاق أحداث مخصصة (عبر emit) والاستماع لتلك الأحداث (عبر on) لتنفيذ دالة استجابة عند حدوثها. هذا النمط (Publisher/Subscriber أو Observer Pattern) هو الأساس الذي تُبنى عليه أجزاء كثيرة جدًا من Node.js نفسها داخليًا، مثل HTTP Server (يُطلق حدث 'request' عند وصول طلب جديد) وStreams (تُطلق أحداث 'data' و'end').",
      explanation: "الفائدة الأساسية هي فصل الاهتمامات: الكائن الذي يُطلق الحدث لا يحتاج معرفة من يستمع له أو ماذا سيفعل، فقط يُعلن 'حدث كذا وقع'؛ وأي عدد من المستمعين (listeners) يمكنهم الاشتراك في نفس الحدث دون تعديل الكود الأصلي الذي أطلقه. هذا يجعل بناء أنظمة قابلة للتوسعة (extensible) أسهل بكثير، حيث يمكن إضافة سلوك جديد استجابة لحدث موجود دون لمس الكود الذي يُطلقه أصلاً.",
      example: "const EventEmitter = require('events');\nconst myEmitter = new EventEmitter();\n\nmyEmitter.on('userCreated', (name) => {\n  console.log(`مرحبًا ${name}! تم إنشاء حسابك.`);\n});\n\nmyEmitter.emit('userCreated', 'سارة'); // يُطلق الحدث، يُنفَّذ كل مستمع مسجَّل",
      bestPractices: ["استخدم EventEmitter لفصل منطق حدوث شيء معيّن عن منطق الاستجابة له، خصوصًا عندما يحتاج أكثر من جزء من النظام الاستجابة لنفس الحدث"],
      commonMistakes: ["نسيان إزالة مستمعين (removeListener) لم يعودوا ضروريين، مما قد يُسبب تسريب ذاكرة (memory leak) في تطبيقات طويلة التشغيل"],
      followups: ["ما هو تحذير 'MaxListenersExceededWarning' ومتى يظهر؟"], similar: ["كيف ترتبط Streams في Node.js بـ EventEmitter داخليًا؟"]
    },
    {
      id: "node-mcq-3", title: "أي دالة تُنفَّذ قبل أي عملية Macrotask في Node.js Event Loop؟", difficulty: "hard", domain: "Node.js", type: "mcq", timeMinutes: 2,
      question: "أي من دالتي process.nextTick() وsetImmediate() تُنفَّذ أولًا وبأولوية أعلى في Node.js؟",
      options: ["setImmediate() دائمًا", "process.nextTick() دائمًا (تُنفَّذ قبل أي microtask أو macrotask أخرى)", "كلاهما بنفس الأولوية تمامًا", "يعتمد فقط على ترتيب الكتابة في الكود"], correctIndex: 1,
      answer: "process.nextTick() دائمًا.",
      explanation: "process.nextTick() تضع الدالة في طابور خاص يُنفَّذ فور انتهاء العملية الحالية الجارية، وقبل أن يُكمل Event Loop الانتقال لأي مرحلة أخرى (حتى قبل microtasks الأخرى مثل Promises في بعض الإصدارات)، مما يجعلها الأعلى أولوية إطلاقًا في Node.js. أما setImmediate() فتُجدوَل للتنفيذ في مرحلة 'Check' من دورة Event Loop، بعد مرحلة عمليات I/O، وهي أدنى أولوية من process.nextTick() ومن microtasks العادية.",
      bestPractices: ["استخدم process.nextTick() بحذر شديد وبكميات محدودة فقط، لأن الإفراط في استخدامها قد يُؤجل Event Loop عن معالجة أي عمليات I/O أخرى إلى ما لا نهاية (I/O Starvation)"],
      commonMistakes: ["الإفراط في استدعاء process.nextTick() بشكل متكرر ومتداخل، مما قد يُجمّد Event Loop عن معالجة أي طلبات أخرى واردة"],
      followups: ["ما هي المراحل الست لدورة Event Loop في Node.js (timers, pending callbacks, poll, check...)؟"], similar: ["كيف يختلف هذا الترتيب عن Microtask/Macrotask Queue في متصفح الويب؟"]
    },
    {
      id: "node-5", title: "ما الفرق بين exports وmodule.exports في Node.js؟", difficulty: "medium", domain: "Node.js", type: "open", timeMinutes: 4,
      question: "ما الفرق بين exports وmodule.exports عند تصدير قيم من ملف Node.js (نظام CommonJS)؟",
      answer: "module.exports هو الكائن الفعلي الذي يُعاد فعليًا عند استدعاء require() لذلك الملف؛ هو 'الحقيقة' الوحيدة. exports هو مجرد مرجع (متغيّر مختصر) يُشير في البداية لنفس الكائن الذي يُشير إليه module.exports، لتسهيل إضافة خصائص إليه بسرعة (exports.myFunc = ...). لكن إذا أعدت إسناد exports بالكامل لكائن جديد (exports = {...})، ينقطع الرابط بينه وبين module.exports، وما يُصدَّر فعليًا يبقى القيمة الأصلية لـ module.exports وليس ما أسندته لـ exports حديثًا.",
      explanation: "هذا الفخ الشائع يُربك كثيرًا من المبتدئين: exports.foo = 'bar' يعمل بشكل صحيح لأنه يُضيف خاصية لنفس الكائن الذي يُشير إليه module.exports أيضًا. لكن exports = { foo: 'bar' } لا يعمل كما هو متوقع، لأنه يجعل exports يُشير لكائن جديد تمامًا منفصل عن module.exports، بينما ما يُعاد فعليًا عبر require() يبقى القيمة الأصلية القديمة لـ module.exports (كائن فارغ افتراضيًا إن لم تُعدِّله مباشرة).",
      example: "// يعمل بشكل صحيح: نفس الكائن\nexports.add = (a, b) => a + b;\n\n// لا يعمل كما يُتوقَّع: يقطع الرابط مع module.exports\nexports = { add: (a, b) => a + b };\n\n// الطريقة الآمنة دائمًا: استخدم module.exports مباشرة\nmodule.exports = { add: (a, b) => a + b };",
      bestPractices: ["استخدم module.exports مباشرة عند تصدير كائن كامل جديد، واستخدم exports فقط لإضافة خصائص فردية لكائن موجود بالفعل"],
      commonMistakes: ["إعادة إسناد exports بالكامل لكائن جديد ظنًا أنه يُغيّر ما يُصدَّر فعليًا، بينما القيمة الفعلية المُصدَّرة تبقى module.exports الأصلي دون تغيير"],
      followups: ["كيف يختلف نظام CommonJS (require/module.exports) عن ES Modules (import/export) من ناحية التحميل؟"], similar: ["ما الفرق بين named exports وdefault export في ES Modules؟"]
    },
    {
      id: "node-mcq-4", title: "أي حزمة شائعة تُستخدم لتحميل متغيرات بيئة من ملف .env؟", difficulty: "easy", domain: "Node.js", type: "mcq", timeMinutes: 1,
      question: "أي حزمة npm شائعة جدًا تُستخدم لتحميل متغيرات بيئة (environment variables) من ملف .env إلى process.env؟",
      options: ["express", "dotenv", "lodash", "axios"], correctIndex: 1,
      answer: "dotenv",
      explanation: "dotenv تقرأ ملف .env (الذي يحتوي أزواج مفتاح=قيمة مثل DATABASE_URL=...) وتُحمِّل تلك القيم تلقائيًا في process.env، مما يسمح بفصل الإعدادات الحساسة (مفاتيح API، بيانات اتصال قاعدة البيانات) عن الكود المصدري نفسه، وتجنّب رفعها بالخطأ لمستودع Git عام (عبر إضافة .env لملف .gitignore).",
      bestPractices: ["استخدم dotenv مع ملف .env محلي للتطوير، وأضف .env لـ .gitignore دائمًا، واستخدم متغيرات بيئة حقيقية (وليس ملف .env) في بيئة الإنتاج الفعلية عبر إعدادات الاستضافة"],
      commonMistakes: ["رفع ملف .env الفعلي الذي يحتوي أسرارًا حقيقية لمستودع Git عام بالخطأ، بدلاً من رفع ملف .env.example فارغ فقط كقالب توضيحي"],
      followups: [], similar: ["كيف تتعامل مع أسرار (secrets) الإنتاج بأمان أكبر من مجرد ملف .env عادي (مثل AWS Secrets Manager)؟"]
    },
  ]
},

/* ======================================================================
   React
   ====================================================================== */
{
  id: "react",
  name: "React",
  icon: "⚛️",
  intro: "React هي المكتبة الأكثر طلبًا لبناء واجهات المستخدم الحديثة. المقابلات تركّز على فهمك العميق لآلية العمل الداخلية (Virtual DOM، Reconciliation)، وHooks (useState وuseEffect)، والفرق الجوهري بين Props وState الذي يبني عليه كل تصميم مكوّنات React سليم.",
  concepts: [
    { title: "Virtual DOM وReconciliation", body: "React يحتفظ بنسخة خفيفة (Virtual DOM) من شجرة DOM الفعلية في الذاكرة. عند تغيّر الحالة، يُنشئ React شجرة Virtual DOM جديدة، ويُقارنها بالسابقة (خوارزمية Diffing)، ثم يُحدّث DOM الحقيقي فقط بأقل عدد ممكن من التغييرات الفعلية (Reconciliation)، بدلًا من إعادة رسم الصفحة بالكامل." },
    { title: "Props مقابل State", body: "Props بيانات تُمرَّر من مكوّن أب لمكوّن ابن، وهي للقراءة فقط (immutable) من منظور المكوّن الابن. أما State فبيانات داخلية يملكها المكوّن نفسه ويمكنه تعديلها عبر setState أو useState، وأي تغيير فيها يُعيد رسم المكوّن." },
    { title: "useEffect ودورة الحياة", body: "useEffect يسمح بتنفيذ 'تأثيرات جانبية' (side effects مثل طلبات شبكة أو الاشتراك في أحداث) بعد رسم المكوّن، مع مصفوفة اعتماديات (dependency array) تُحدّد متى يُعاد تنفيذه: كل رسم، مرة واحدة فقط، أو عند تغيّر قيم محددة." }
  ],
  questions: [
    {
      id: "react-1", title: "ما هو Virtual DOM ولماذا يجعل React سريعًا؟", difficulty: "medium", domain: "React", type: "open", timeMinutes: 4,
      question: "اشرح مفهوم Virtual DOM في React، وكيف تُحسّن خوارزمية Reconciliation الأداء؟",
      answer: "Virtual DOM هو تمثيل خفيف (كائن JavaScript عادي) لشجرة DOM الفعلية، محفوظ بالكامل في الذاكرة. عند تغيّر حالة (state) مكوّن، لا يُعدّل React الـ DOM الحقيقي فورًا؛ بل يُنشئ شجرة Virtual DOM جديدة بالكامل، ثم يُقارنها (diffing) مع الشجرة القديمة لتحديد أصغر مجموعة من التغييرات الفعلية اللازمة، ثم يُطبّق تلك التغييرات فقط على DOM الحقيقي دفعة واحدة (batched).",
      explanation: "التلاعب المباشر بـ DOM الحقيقي مكلف جدًا من ناحية الأداء (كل تعديل قد يُسبب إعادة تخطيط layout وإعادة رسم repaint للصفحة بأكملها). بما أن العمليات على Virtual DOM (كائنات JavaScript عادية في الذاكرة) أرخص بكثير من عمليات DOM الحقيقي، فإن حساب 'ما الذي تغيّر فعليًا' في الذاكرة أولاً، ثم تطبيق أقل عدد ممكن من التعديلات الحقيقية دفعة واحدة، أسرع بكثير من تحديث DOM في كل خطوة صغيرة.",
      bestPractices: ["استخدم key فريدة وثابتة (وليس index المصفوفة) عند رسم قوائم عناصر، لمساعدة خوارزمية diffing على تحديد العناصر المتطابقة بدقة"],
      commonMistakes: ["استخدام index المصفوفة كـ key في قوائم قابلة لإعادة الترتيب أو الحذف، مما يُربك خوارزمية diffing ويُسبب أخطاء في حالة المكوّنات (خصوصًا مع حقول إدخال)"],
      followups: ["كيف تحدد React أي المكوّنات الفرعية تحتاج إعادة رسم فعلية عند تغيّر حالة الأب؟"], similar: ["ما هو React Fiber وكيف حسّن خوارزمية Reconciliation؟"]
    },
    {
      id: "react-2", title: "ما الفرق بين Props وState؟", difficulty: "easy", domain: "React", type: "open", timeMinutes: 3,
      question: "اشرح الفرق الجوهري بين Props وState في React، ولماذا هذا التمييز أساسي لتصميم مكوّنات سليمة؟",
      answer: "Props بيانات تُمرَّر من مكوّن أب إلى مكوّن ابن، ويجب أن يُعاملها المكوّن الابن كقراءة فقط (read-only) دون تعديلها مباشرة إطلاقًا؛ أي تغيير يجب أن يحدث في الأب الذي يملكها ثم يُمرِّر نسخة جديدة للابن. أما State فبيانات داخلية يملكها المكوّن نفسه بالكامل، يمكنه تعديلها بحرية عبر setState أو useState، وأي تعديل عليها يُطلق إعادة رسم (re-render) لذلك المكوّن (وأبنائه) تلقائيًا.",
      explanation: "هذا التمييز يفرض 'تدفق بيانات باتجاه واحد' (unidirectional data flow) وهو أساس فلسفة React بأكملها: البيانات تتدفق من الأعلى (الأب) للأسفل (الأبناء) عبر props، وأي تغيير فعلي يحدث فقط في مكان ملكية تلك البيانات (state) ثم ينتشر تلقائيًا للأسفل. هذا يجعل تتبع 'من غيّر ماذا ومتى' أسهل بكثير مقارنة بأنظمة تسمح بتعديل البيانات من أي مكان بحرية.",
      example: "function Parent() {\n  const [count, setCount] = useState(0); // state يملكه Parent\n  return <Child count={count} onIncrement={() => setCount(count + 1)} />; // يُمرَّر كـ prop\n}\n\nfunction Child({ count, onIncrement }) {\n  // count هنا prop للقراءة فقط، لا يمكن تعديله مباشرة هنا\n  return <button onClick={onIncrement}>{count}</button>;\n}",
      bestPractices: ["ارفع الحالة (Lift State Up) للمكوّن الأب المشترك الأقرب عندما يحتاج أكثر من مكوّن ابن نفس البيانات"],
      commonMistakes: ["محاولة تعديل prop مباشرة داخل المكوّن الابن (this.props.x = ... أو تعديل كائن prop مباشرة)، وهو ضد فلسفة React تمامًا"],
      followups: ["ما هو 'Lifting State Up' ومتى تحتاجه؟"], similar: ["ما هو Context API ومتى يُستخدم بدلًا من تمرير props عبر عدة مستويات (prop drilling)؟"]
    },
    {
      id: "react-3", title: "اشرح useEffect ومصفوفة الاعتماديات", difficulty: "medium", domain: "React", type: "open", timeMinutes: 5,
      question: "كيف تتحكم مصفوفة الاعتماديات (dependency array) في useEffect بتوقيت تنفيذ التأثير الجانبي؟",
      answer: "useEffect(callback, deps) يُنفّذ callback بعد كل رسم للمكوّن افتراضيًا. إن مررت مصفوفة اعتماديات فارغة []، يُنفَّذ التأثير مرة واحدة فقط بعد أول رسم (يُحاكي componentDidMount). إن مررت مصفوفة تحتوي متغيرات محددة [a, b]، يُعاد تنفيذ التأثير فقط عندما تتغيّر قيمة a أو b مقارنة بالرسم السابق. أما عدم تمرير مصفوفة إطلاقًا، فيُنفَّذ التأثير بعد كل رسم دون استثناء.",
      explanation: "نسيان تضمين متغيّر يُستخدم فعليًا داخل useEffect ضمن مصفوفة الاعتماديات هو مصدر شائع جدًا لأخطاء 'stale closure' حيث يستمر التأثير باستخدام قيمة قديمة لذلك المتغيّر رغم تحديثها في مكان آخر، لأن الدالة 'أُغلقت' (closed over) على القيمة وقت إنشائها فقط. أدوات لينتنج مثل eslint-plugin-react-hooks تكتشف هذه الحالات تلقائيًا وتُحذّر منها.",
      example: "useEffect(() => {\n  console.log('يُنفَّذ مرة واحدة فقط عند التحميل');\n}, []); // مصفوفة فارغة\n\nuseEffect(() => {\n  console.log(`تغيّر userId إلى ${userId}`);\n  fetchUserData(userId);\n}, [userId]); // يُعاد التنفيذ فقط عند تغيّر userId تحديدًا",
      bestPractices: ["ضمّن كل متغيّر يُستخدم فعليًا داخل useEffect ضمن مصفوفة الاعتماديات، ودع أداة eslint-plugin-react-hooks تتحقق من ذلك تلقائيًا"],
      commonMistakes: ["نسيان تضمين متغيّر في مصفوفة الاعتماديات فيستخدم useEffect قيمة قديمة (stale) منه دون تحديث", "إرجاع دالة تنظيف (cleanup function) منسية فتتراكم الاشتراكات (مثل event listeners) دون إلغائها"],
      followups: ["ما هي دالة التنظيف (cleanup function) التي تُعاد من useEffect ومتى تُستدعى؟"], similar: ["ما الفرق بين useEffect وuseLayoutEffect؟"]
    },
    {
      id: "react-mcq-1", title: "أي Hook يُستخدم لتخزين قيمة مؤقتة (memoized) لتفادي إعادة الحساب؟", difficulty: "medium", domain: "React", type: "mcq", timeMinutes: 1,
      question: "أي Hook في React يُستخدم لتفادي إعادة حساب قيمة مكلفة في كل رسم، إلا عند تغيّر اعتمادياتها فعليًا؟",
      options: ["useState", "useEffect", "useMemo", "useRef"], correctIndex: 2,
      answer: "useMemo",
      explanation: "useMemo(() => computeExpensiveValue(a, b), [a, b]) يُعيد حساب القيمة فقط عندما تتغيّر a أو b، ويُعيد القيمة المحفوظة (memoized) من المرة السابقة في بقية الرسومات، مما يوفر حسابًا مكلفًا متكررًا بلا داعٍ. useCallback مشابه لكنه يُذاكر (memoizes) دالة كاملة بدلاً من قيمة، وuseRef يحفظ قيمة قابلة للتغيير عبر الرسومات دون إطلاق إعادة رسم عند تغييرها.",
      bestPractices: ["استخدم useMemo/useCallback فقط عند وجود دليل فعلي (قياس أداء) على أن إعادة الحساب مكلفة فعلاً، وليس كعادة افتراضية في كل مكان"],
      commonMistakes: ["الإفراط في استخدام useMemo/useCallback في كل مكان دون داعٍ، مما يضيف تعقيدًا وربما يُبطئ الأداء بدلًا من تحسينه بسبب تكلفة المقارنة نفسها"],
      followups: [], similar: ["ما الفرق بين useMemo وuseCallback؟"]
    },
    {
      id: "react-tf-1", title: "صح أو خطأ: يمكن تعديل خاصية داخل props مباشرة من المكوّن الابن", difficulty: "easy", domain: "React", type: "tf", timeMinutes: 1,
      question: "صح أم خطأ: من المقبول في React تعديل قيمة داخل كائن props مباشرة (مثل props.user.name = 'جديد') من داخل المكوّن الابن.",
      isTrue: false,
      answer: "خطأ.",
      explanation: "props يجب أن تُعامَل دائمًا كقراءة فقط (read-only/immutable) من منظور المكوّن الذي يستقبلها. تعديلها مباشرة يخالف فلسفة تدفق البيانات باتجاه واحد في React، وقد لا يُطلق إعادة رسم صحيحة أصلًا (لأن React يعتمد أحيانًا على مقارنة مرجعية سطحية shallow reference comparison لا تكتشف تعديل خاصية داخلية لكائن دون تغيير المرجع نفسه)، مما يُسبب أخطاء عرض صامتة يصعب تتبعها.",
      bestPractices: ["أرسل دالة (callback prop) من الأب للابن ليطلب الابن من الأب تحديث البيانات، بدلًا من تعديلها مباشرة في الابن"],
      commonMistakes: [], followups: [], similar: ["لماذا تُعتبر immutability مهمة جدًا في تحديثات state في React؟"]
    },
    {
      id: "react-4", title: "ما هو Context API ومتى تستخدمه؟", difficulty: "medium", domain: "React", type: "open", timeMinutes: 4,
      question: "ما المشكلة التي يحلها Context API في React، ومتى تستخدمه بدلاً من تمرير props عادي؟",
      answer: "Context API يحل مشكلة 'Prop Drilling': تمرير بيانات عبر عدة مستويات من مكوّنات وسيطة لا تحتاج تلك البيانات فعليًا، فقط لإيصالها لمكوّن عميق في الشجرة يحتاجها. يسمح Context بإنشاء 'قيمة عامة' يمكن لأي مكوّن في الشجرة الوصول إليها مباشرة (عبر useContext) بغض النظر عن عمقه، دون الحاجة لتمريرها يدويًا عبر كل مستوى وسيط.",
      explanation: "الاستخدامات الشائعة تشمل: بيانات المستخدم المسجّل دخوله، إعدادات الوضع الليلي/الفاتح (theme)، أو لغة الواجهة الحالية — بيانات يحتاجها مكوّنات كثيرة موزّعة عبر التطبيق دون علاقة تسلسلية مباشرة بينها. لكن Context ليس بديلاً عامًا عن كل props؛ الإفراط في استخدامه لكل شيء يجعل تتبع مصدر البيانات وتدفقها أصعب، وقد يُسبب إعادة رسم غير ضرورية لكل مكوّن مشترك في Context عند أي تغيير بسيط في القيمة.",
      example: "const ThemeContext = createContext('light');\n\nfunction App() {\n  return (\n    <ThemeContext.Provider value=\"dark\">\n      <DeepChild />\n    </ThemeContext.Provider>\n  );\n}\n\nfunction DeepChild() {\n  const theme = useContext(ThemeContext); // وصول مباشر، بلا prop drilling\n  return <div className={theme}>محتوى</div>;\n}",
      bestPractices: ["استخدم Context للبيانات العامة النادرة التغيير (theme، مستخدم مسجّل دخوله)، وليس لكل حالة تطبيق"],
      commonMistakes: ["استخدام Context لبيانات تتغيّر بمعدل عالٍ جدًا، مما يُسبب إعادة رسم مفرطة لكل مكوّن مشترك فيه"],
      followups: ["كيف تتجنب إعادة الرسم غير الضرورية عند استخدام Context مع قيم متغيّرة كثيرًا؟"], similar: ["ما الفرق بين Context API ومكتبات إدارة حالة خارجية مثل Redux؟"]
    },
    {
      id: "react-5", title: "ما الفرق بين Controlled وUncontrolled Components؟", difficulty: "medium", domain: "React", type: "open", timeMinutes: 4,
      question: "ما الفرق بين حقل إدخال Controlled وUncontrolled في React؟",
      answer: "في المكوّن المُتحكَّم به (Controlled)، تكون قيمة الحقل مرتبطة مباشرة بحالة React (state) عبر value وonChange؛ React هو 'مصدر الحقيقة الوحيد' لتلك القيمة، وأي تغيير يمر عبر setState أولاً قبل ظهوره في الحقل. في المكوّن غير المُتحكَّم به (Uncontrolled)، يحتفظ DOM نفسه بقيمة الحقل داخليًا (كما في HTML التقليدي)، ويُقرأ React قيمتها فقط عند الحاجة عبر مرجع (ref) بدلاً من تتبعها في كل ضغطة مفتاح.",
      explanation: "Controlled components هي النمط الموصى به في معظم الحالات لأنها تجعل حالة النموذج بأكملها متوقعة وقابلة للتتبع بسهولة (يمكن التحقق من الصحة فوريًا، تعطيل الإرسال بناءً على القيم الحالية). Uncontrolled أبسط قليلاً وأداؤها أفضل قليلاً في نماذج ضخمة جدًا نادرة التفاعل، لكنها تفقد ميزة 'مصدر حقيقة واحد' الذي يجعل تصحيح الأخطاء وفرض القواعد أسهل بكثير.",
      example: "// Controlled\nfunction ControlledInput() {\n  const [value, setValue] = useState('');\n  return <input value={value} onChange={e => setValue(e.target.value)} />;\n}\n\n// Uncontrolled\nfunction UncontrolledInput() {\n  const inputRef = useRef();\n  const handleSubmit = () => console.log(inputRef.current.value);\n  return <input ref={inputRef} />;\n}",
      bestPractices: ["استخدم Controlled Components كخيار افتراضي لنماذج React، وUncontrolled فقط لحالات أداء خاصة أو تكامل مع مكتبات خارجية"],
      commonMistakes: ["الخلط بين الاثنين في نفس الحقل (تمرير value بدون onChange)، مما يُنتج تحذيرًا في React ويجعل الحقل 'للقراءة فقط' بشكل غير مقصود"],
      followups: ["كيف تتعامل مع نماذج كبيرة جدًا (عشرات الحقول) من ناحية الأداء في Controlled Components؟"], similar: ["كيف تستخدم مكتبات مثل React Hook Form لتحسين أداء النماذج الكبيرة؟"]
    },
    {
      id: "react-mcq-2", title: "أي طريقة تُستخدم لتفادي إعادة رسم مكوّن كامل عند عدم تغيّر props؟", difficulty: "medium", domain: "React", type: "mcq", timeMinutes: 1,
      question: "أي أداة في React تمنع إعادة رسم مكوّن دالي (function component) إن لم تتغيّر قيم props الخاصة به؟",
      options: ["useState", "React.memo", "useEffect", "useContext"], correctIndex: 1,
      answer: "React.memo",
      explanation: "React.memo(Component) يُغلّف مكوّنًا دالة ليقارن props الجديدة بالقديمة (مقارنة سطحية shallow افتراضيًا) قبل إعادة الرسم؛ إن تطابقت props تمامًا، يتخطى React إعادة رسم ذلك المكوّن بالكامل ويعيد استخدام النتيجة السابقة، مما يوفر أداءً في مكوّنات مكلفة الرسم تتلقى نفس props بشكل متكرر رغم إعادة رسم الأب.",
      bestPractices: ["استخدم React.memo فقط بعد قياس فعلي يُظهر أن إعادة رسم ذلك المكوّن تحديدًا مكلفة وتتكرر بلا داعٍ"],
      commonMistakes: ["استخدام React.memo على كل مكوّن دون تمييز، رغم أن المقارنة الإضافية نفسها لها تكلفة قد تفوق فائدتها لمكوّنات بسيطة رخيصة الرسم أصلاً"],
      followups: [], similar: ["ما الفرق بين React.memo وuseMemo؟"]
    },
    {
      id: "react-6", title: "ما الفرق بين useState وuseReducer؟", difficulty: "hard", domain: "React", type: "open", timeMinutes: 5,
      question: "متى تفضّل useReducer على useState لإدارة حالة مكوّن؟",
      answer: "useState مناسب لحالة بسيطة ومستقلة (قيمة واحدة أو بضع قيم غير مترابطة بمنطق تحديث معقد). useReducer مناسب عندما تصبح منطق تحديث الحالة معقدًا: عدة قيم مترابطة تتغيّر معًا استجابة لنفس الحدث، أو عندما يعتمد التحديث الجديد على منطق شرطي معقد بناءً على نوع 'الإجراء' (action) المُرسَل، مشابه تمامًا لفلسفة Redux لكن محليًا داخل مكوّن واحد.",
      explanation: "useReducer يُركّز كل منطق التحديث في مكان واحد (دالة reducer)، بدلاً من تشتيته عبر عدة استدعاءات setState منفصلة في أماكن مختلفة من المكوّن، مما يجعل تتبع 'كيف تتغيّر الحالة استجابة لكل حدث' أوضح وأسهل اختبارًا بمعزل عن باقي المكوّن (يمكن اختبار دالة reducer بمفردها كدالة نقية عادية). القاعدة العملية الشائعة: ابدأ بـ useState دائمًا، وانتقل لـ useReducer فقط عندما تشعر أن منطق التحديث أصبح معقدًا بما يكفي ليستحق تنظيمًا أفضل.",
      example: "function reducer(state, action) {\n  switch (action.type) {\n    case 'increment': return { count: state.count + 1 };\n    case 'decrement': return { count: state.count - 1 };\n    case 'reset': return { count: 0 };\n    default: return state;\n  }\n}\n\nconst [state, dispatch] = useReducer(reducer, { count: 0 });\ndispatch({ type: 'increment' });",
      bestPractices: ["ابدأ بـ useState كخيار افتراضي، وانتقل لـ useReducer فقط عندما يصبح منطق التحديث معقدًا بما يكفي لتبرير التنظيم الإضافي"],
      commonMistakes: ["استخدام useReducer لحالة بسيطة جدًا (قيمة واحدة بسيطة)، مما يُضيف تعقيدًا وإطالة كود غير ضرورية"],
      followups: ["كيف يمكن الجمع بين useReducer وuseContext لمحاكاة إدارة حالة عامة تشبه Redux؟"], similar: ["ما الفرق بين useReducer ومكتبة Redux الخارجية الكاملة؟"]
    },
    {
      id: "react-mcq-3", title: "ما هو Higher-Order Component (HOC) في React؟", difficulty: "hard", domain: "React", type: "mcq", timeMinutes: 2,
      question: "ما هو Higher-Order Component (HOC) في React؟",
      options: ["مكوّن أكبر حجمًا من غيره بصريًا", "دالة تأخذ مكوّنًا وتُعيد مكوّنًا جديدًا مُحسَّنًا أو مُغلَّفًا بسلوك إضافي", "مكوّن يُستخدم فقط في أعلى شجرة التطبيق", "مكوّن مكتوب بلغة TypeScript فقط"], correctIndex: 1,
      answer: "دالة تأخذ مكوّنًا وتُعيد مكوّنًا جديدًا مُحسَّنًا أو مُغلَّفًا بسلوك إضافي.",
      explanation: "HOC هو نمط تصميمي (وليس ميزة مدمجة خاصة في React) يعتمد على أن المكوّنات هي مجرد دوال، فيمكن كتابة دالة تأخذ مكوّنًا كمعامل وتُعيد مكوّنًا جديدًا يُضيف سلوكًا مشتركًا (مثل التحقق من المصادقة، أو تمرير بيانات إضافية) قبل عرض المكوّن الأصلي. مثال شائع: withAuth(Component) يُعيد مكوّنًا جديدًا يتحقق من تسجيل الدخول أولاً قبل عرض Component الأصلي. مع ظهور Hooks، تراجع استخدام HOCs لصالح Custom Hooks التي تحقق نفس الفائدة (مشاركة منطق) بأسلوب أبسط وأقل تعقيدًا في التداخل.",
      bestPractices: ["فضّل Custom Hooks على HOCs في الكود الحديث لمشاركة المنطق، فهي أبسط وتتجنب مشاكل 'تداخل الأغلفة' (wrapper hell) الشائعة مع HOCs متعددة"],
      commonMistakes: ["الإفراط في تكديس عدة HOCs حول مكوّن واحد، مما يخلق شجرة مكوّنات متداخلة معقدة يصعب تتبعها في أدوات التطوير (React DevTools)"],
      followups: [], similar: ["كيف يمكن تحويل HOC شائع إلى Custom Hook مكافئ؟"]
    },
  ]
},

/* ======================================================================
   REST API
   ====================================================================== */
{
  id: "rest-api",
  name: "REST API",
  icon: "🔌",
  intro: "فهم REST ضروري لأي مطور Backend أو Full-Stack، لأنه المعيار الأكثر انتشارًا لبناء واجهات برمجية. المقابلات تختبر فهمك لمبادئ REST الأساسية، الفرق بين طرق HTTP المختلفة، ومفهوم Idempotency الذي يُسأل عنه كثيرًا لكشف الفهم السطحي مقابل العميق.",
  concepts: [
    { title: "مبادئ REST", body: "Representational State Transfer هو نمط معماري (وليس بروتوكولاً صارمًا) يعتمد على مبادئ مثل انعدام الحالة (statelessness: كل طلب يحمل كل المعلومات اللازمة دون اعتماد على طلبات سابقة)، وواجهة موحّدة (uniform interface) تعتمد على الموارد (resources) وعناوينها (URIs)." },
    { title: "طرق HTTP (Methods)", body: "GET لجلب بيانات، POST لإنشاء مورد جديد، PUT لاستبدال مورد كامل، PATCH لتحديث جزئي، DELETE لحذف مورد. كل طريقة لها دلالة (semantics) متفق عليها يجب احترامها لبناء API متوقع السلوك." },
    { title: "Idempotency (الاتساقية)", body: "الطريقة تُعتبر idempotent إذا أنتج تكرار نفس الطلب عدة مرات نفس النتيجة النهائية كأنه نُفِّذ مرة واحدة فقط. GET وPUT وDELETE عادة idempotent، بينما POST ليست كذلك (كل استدعاء قد يُنشئ موردًا جديدًا مختلفًا)." }
  ],
  questions: [
    {
      id: "rest-1", title: "ما الفرق بين PUT وPATCH؟", difficulty: "medium", domain: "REST API", type: "open", timeMinutes: 4,
      question: "متى تستخدم PUT ومتى تستخدم PATCH عند تصميم واجهة برمجية RESTful؟",
      answer: "PUT يُستخدم لاستبدال المورد بالكامل: يجب إرسال التمثيل الكامل للمورد في جسم الطلب، وأي حقل لا تُرسله يُفترض أنه يجب مسحه أو إعادته لقيمته الافتراضية. أما PATCH فيُستخدم للتحديث الجزئي: تُرسل فقط الحقول التي تريد تغييرها تحديدًا، وتبقى بقية حقول المورد كما هي دون تأثر.",
      explanation: "خطأ شائع جدًا هو استخدام PUT مع إرسال حقول جزئية فقط، معتقدين أنه سيُحدّث تلك الحقول فقط تمامًا كـ PATCH؛ لكن السلوك الصحيح المتوقع لـ PUT حسب المعيار هو استبدال المورد بالكامل، وقد تُفقَد بيانات موجودة سابقًا لم تُرسَل في الطلب الجديد. لهذا السبب، PATCH هو الخيار الأكثر أمانًا وشيوعًا عمليًا عند الحاجة لتحديث حقل أو اثنين فقط دون إعادة إرسال المورد بأكمله.",
      example: "// PUT: يجب إرسال المورد بالكامل\nPUT /users/5\n{ \"name\": \"سارة\", \"email\": \"sara@mail.com\", \"age\": 28 }\n\n// PATCH: تحديث جزئي فقط\nPATCH /users/5\n{ \"age\": 29 }  // بقية الحقول تبقى كما هي",
      bestPractices: ["استخدم PATCH للتحديثات الجزئية الشائعة (مثل تحديث حقل واحد)، وPUT فقط عندما تُرسل فعليًا كل حقول المورد"],
      commonMistakes: ["استخدام PUT مع إرسال حقل واحد فقط متوقعين أن بقية الحقول ستبقى كما هي (السلوك الصحيح المتوقع لـ PUT هو العكس)"],
      followups: ["هل PATCH idempotent دائمًا؟ ولماذا قد لا تكون كذلك في بعض التطبيقات (مثل increment)؟"], similar: ["ما الفرق بين POST وPUT عند إنشاء مورد جديد؟"]
    },
    {
      id: "rest-2", title: "ما هو مفهوم Idempotency في REST؟", difficulty: "hard", domain: "REST API", type: "open", timeMinutes: 4,
      question: "ما معنى أن تكون طريقة HTTP idempotent (اتساقية)، وأي الطرق القياسية تملك هذه الخاصية؟",
      answer: "الطريقة idempotent إذا كان تنفيذ نفس الطلب عدة مرات متتالية يُنتج نفس التأثير النهائي على الخادم كما لو نُفِّذ مرة واحدة فقط (رغم أن الاستجابة الفعلية قد تختلف قليلاً، مثل رمز حالة مختلف). GET (قراءة فقط، لا تُغيّر شيئًا فتُعتبر idempotent بديهيًا)، وPUT (استبدال كامل بنفس القيم يُعطي نفس النتيجة أيًا كان عدد مرات التكرار)، وDELETE (حذف مورد محذوف بالفعل عادة يُعطي نفس الحالة النهائية: المورد غير موجود) — كل هذه idempotent. أما POST فليست idempotent عادة، لأن كل استدعاء منفصل يُنشئ عادة موردًا جديدًا مختلفًا (مثل طلب جديد بمعرّف جديد في كل مرة).",
      explanation: "هذا المفهوم عملي جدًا وليس نظريًا فقط: في حال انقطع اتصال الشبكة بعد إرسال طلب لكن قبل استلام الاستجابة، يمكن للعميل إعادة إرسال طلب PUT أو DELETE بأمان تام دون قلق من تأثير مضاعف (side effect) غير مقصود، بينما إعادة إرسال طلب POST (مثل 'إنشاء طلب شراء') بأمان تام قد يُنشئ طلبين مكررين فعليًا، ولهذا تحتاج أنظمة الدفع مثلاً آليات إضافية مثل 'مفاتيح الاتساقية' (Idempotency Keys) لجعل POST آمنًا للتكرار في حالات حرجة كهذه.",
      bestPractices: ["صمّم عمليات PUT وDELETE لتكون idempotent فعليًا بطبيعتها، وأضف Idempotency Keys صراحة لعمليات POST الحساسة (مثل الدفع) التي تحتاج أمانًا ضد التكرار"],
      commonMistakes: ["تصميم PUT بمنطق 'زيادة' (increment) بدلًا من 'استبدال بقيمة محددة'، مما يجعله غير idempotent فعليًا رغم استخدام الطريقة الخاطئة دلاليًا"],
      followups: ["كيف تُصمم Idempotency Key لواجهة برمجية دفع إلكتروني؟"], similar: ["ما الفرق بين Safe Methods وIdempotent Methods في HTTP؟"]
    },
    {
      id: "rest-mcq-1", title: "أي رمز حالة HTTP يُستخدم عند إنشاء مورد جديد بنجاح؟", difficulty: "easy", domain: "REST API", type: "mcq", timeMinutes: 1,
      question: "أي رمز حالة HTTP هو الأنسب لإرجاعه بعد إنشاء مورد جديد بنجاح عبر POST؟",
      options: ["200 OK", "201 Created", "204 No Content", "302 Found"], correctIndex: 1,
      answer: "201 Created",
      explanation: "201 Created يُشير تحديدًا إلى أن الطلب نجح في إنشاء مورد جديد، وعادة ما يُرفَق مع رأس Location يحمل رابط المورد الجديد الذي أُنشئ. أما 200 OK فأعم ويُستخدم لأي نجاح عام دون دلالة إنشاء محددة، و204 No Content يُستخدم عندما ينجح الطلب لكن لا يوجد محتوى لإرجاعه (شائع مع DELETE الناجح).",
      bestPractices: ["استخدم 201 مع رأس Location صراحة عند إنشاء موارد جديدة، لمساعدة العميل على معرفة رابط المورد الجديد فورًا"],
      commonMistakes: ["إرجاع 200 OK لكل العمليات الناجحة بلا تمييز، مما يفقد العميل معلومة دلالية مفيدة عن نوع النجاح تحديدًا"],
      followups: [], similar: ["ما الفرق بين 401 Unauthorized و403 Forbidden؟"]
    },
    {
      id: "rest-tf-1", title: "صح أو خطأ: يجب أن يكون كل طلب REST مستقلاً تمامًا عن الطلبات السابقة (Stateless)", difficulty: "medium", domain: "REST API", type: "tf", timeMinutes: 1,
      question: "صح أم خطأ: أحد مبادئ REST الأساسية هو أن كل طلب يجب أن يحمل كل المعلومات اللازمة لفهمه ومعالجته، دون اعتماد الخادم على أي حالة (state) محفوظة من طلبات سابقة لنفس العميل.",
      isTrue: true,
      answer: "صح.",
      explanation: "مبدأ انعدام الحالة (Statelessness) يعني أن الخادم لا يحتفظ بأي 'ذاكرة جلسة' (session state) بين الطلبات؛ كل طلب مستقل تمامًا ويحمل كل ما يحتاجه الخادم لمعالجته (مثل رمز مصادقة في الترويسة headers). هذا يجعل الأنظمة أسهل في التوسع أفقيًا (scaling)، لأن أي خادم من مجموعة خوادم متعددة يمكنه معالجة أي طلب دون الحاجة لمعرفة تاريخ تفاعلات ذلك العميل تحديدًا مع خادم آخر سابقًا.",
      bestPractices: ["استخدم رموز مصادقة (tokens مثل JWT) تُرسَل مع كل طلب بدلًا من جلسات (sessions) محفوظة في ذاكرة خادم واحد تحديدًا"],
      commonMistakes: ["الاعتماد على session في ذاكرة خادم واحد (in-memory session) في نظام متعدد الخوادم، مما يكسر التوسع الأفقي لأن كل خادم يملك 'ذاكرة' مختلفة"],
      followups: ["كيف يرتبط هذا المبدأ بتصميم JWT كحل مصادقة عديم الحالة (stateless)؟"], similar: ["ما الفرق بين Session-based Authentication وToken-based Authentication؟"]
    },
    {
      id: "rest-3", title: "ما هي استراتيجيات API Versioning؟", difficulty: "medium", domain: "REST API", type: "open", timeMinutes: 4,
      question: "لماذا نحتاج إصدارات (versions) لواجهة برمجية، وما هي الطرق الشائعة لتطبيقها؟",
      answer: "الإصدار ضروري لأنه بعد إطلاق واجهة برمجية ويبدأ عملاء (تطبيقات أخرى) باستخدامها، أي تغيير جوهري لاحق (breaking change مثل حذف حقل أو تغيير هيكل الاستجابة) سيكسر تلك التطبيقات المعتمدة على السلوك القديم. الإصدار يسمح بإطلاق نسخة جديدة محسَّنة مع الحفاظ على النسخة القديمة تعمل بالتوازي لفترة انتقالية حتى يهاجر كل العملاء طوعًا. الطرق الشائعة: عبر الرابط (URI Versioning مثل /api/v2/users)، عبر ترويسة مخصصة (Header Versioning مثل Accept: application/vnd.myapi.v2+json)، أو عبر معامل استعلام (Query Parameter مثل ?version=2).",
      explanation: "URI Versioning هي الأكثر شيوعًا وبساطة (واضحة في الرابط نفسه، سهلة الاختبار والتوثيق)، لكنها 'تلوّث' الرابط دلاليًا (النسخة ليست فعليًا جزءًا من هوية المورد نفسه). Header Versioning أنظف من الناحية النظرية (الرابط يبقى ثابتًا، فقط الترويسة تتغيّر) لكنها أقل وضوحًا للمطورين وأصعب اختبارًا يدويًا (لا يمكن فتحها مباشرة في متصفح). لا يوجد إجماع كامل على 'الأفضل مطلقًا'؛ الأهم هو اختيار استراتيجية واحدة والالتزام بها بثبات عبر كامل الواجهة البرمجية.",
      example: "// URI Versioning\nGET /api/v1/users/5\nGET /api/v2/users/5\n\n// Header Versioning\nGET /api/users/5\nAccept: application/vnd.myapi.v2+json",
      bestPractices: ["التزم باستراتيجية إصدار واحدة واضحة منذ البداية، ووثّق بوضوح متى ستُهمَل (deprecate) كل نسخة قديمة"],
      commonMistakes: ["إجراء تغييرات جوهرية على واجهة برمجية دون أي نظام إصدار، مما يكسر كل التطبيقات المعتمدة عليها فجأة دون سابق إنذار"],
      followups: ["كيف تتواصل مع مطوري العملاء عند التخطيط لإهمال (deprecate) نسخة قديمة؟"], similar: ["ما هو Semantic Versioning وكيف يرتبط بترقيم إصدارات API؟"]
    },
    {
      id: "rest-mcq-2", title: "أي رمز حالة يعني أن الطلب يتطلب مصادقة لكنها غير موجودة؟", difficulty: "easy", domain: "REST API", type: "mcq", timeMinutes: 1,
      question: "أي رمز حالة HTTP يُشير إلى أن الطلب يتطلب مصادقة (authentication) لم تُقدَّم أو غير صالحة؟",
      options: ["400 Bad Request", "401 Unauthorized", "403 Forbidden", "404 Not Found"], correctIndex: 1,
      answer: "401 Unauthorized",
      explanation: "401 يعني أن الطلب يفتقد بيانات مصادقة صالحة (مثل توكن مفقود أو منتهي الصلاحية)، ويجب على العميل تقديم بيانات اعتماد صحيحة لإعادة المحاولة. أما 403 Forbidden فيعني أن الخادم فهم الطلب وحدد هوية المُرسِل بنجاح، لكنه يرفض تنفيذه لأن ذلك المستخدم تحديدًا لا يملك الصلاحية الكافية (حتى لو كانت مصادقته صحيحة تمامًا).",
      bestPractices: ["استخدم 401 عند غياب/عدم صلاحية المصادقة، و403 عند مصادقة صحيحة لكن صلاحيات غير كافية"],
      commonMistakes: ["الخلط الشائع جدًا بين 401 و403 رغم اختلاف معناهما الدلالي بوضوح"],
      followups: [], similar: ["ما الفرق بين Authentication وAuthorization؟"]
    },
    {
      id: "rest-4", title: "ما الفرق بين رمزي الحالة 500 و503؟", difficulty: "medium", domain: "REST API", type: "open", timeMinutes: 3,
      question: "ما الفرق بين 500 Internal Server Error و503 Service Unavailable؟",
      answer: "500 Internal Server Error يعني أن الخادم واجه خطأ غير متوقع أثناء معالجة الطلب (عادة خطأ برمجي غير معالَج، exception غير متوقعة في كود التطبيق نفسه). 503 Service Unavailable يعني أن الخادم يعمل بشكل طبيعي لكنه غير قادر مؤقتًا على معالجة الطلب، عادة بسبب حمل زائد، صيانة مجدولة، أو انتظار مورد آخر (مثل قاعدة بيانات) لم يستجب بعد.",
      explanation: "الفرق العملي المهم: 503 غالبًا يأتي مع ترويسة Retry-After توضح للعميل متى يُفضَّل إعادة المحاولة، وهي إشارة 'مؤقتة، حاول لاحقًا'. أما 500 فتشير لخطأ حقيقي في الكود يحتاج إصلاحًا من المطورين، وليس مجرد انتظار قصير. عند تصميم واجهة برمجية جيدة، يجب التمييز بوضوح بين الحالتين لمساعدة العميل (أو نظام المراقبة) على التصرف بشكل مناسب لكل حالة.",
      bestPractices: ["استخدم 503 مع Retry-After عند إجراء صيانة مجدولة أو تحميل زائد مؤقت، واحتفظ بـ 500 للأخطاء البرمجية الحقيقية غير المتوقعة"],
      commonMistakes: ["إرجاع 500 لكل شيء غير طبيعي دون تمييز، مما يُفقد العميل معلومة مهمة حول ما إذا كانت المشكلة مؤقتة (يستحق إعادة المحاولة) أم دائمة (يحتاج إصلاحًا)"],
      followups: ["كيف تصمم استراتيجية Retry مع Exponential Backoff استجابة لـ 503؟"], similar: ["ما الفرق بين 502 Bad Gateway و503 Service Unavailable؟"]
    },
    {
      id: "rest-mcq-3", title: "أي طريقة HTTP الأنسب لجلب بيانات دون أي تأثير جانبي؟", difficulty: "easy", domain: "REST API", type: "mcq", timeMinutes: 1,
      question: "أي طريقة HTTP مصممة لتكون 'آمنة' (Safe Method)، أي لا يجب أن يكون لها أي تأثير جانبي على حالة الخادم؟",
      options: ["POST", "GET", "DELETE", "PUT"], correctIndex: 1,
      answer: "GET",
      explanation: "GET مصممة لتكون آمنة (safe) تمامًا: مجرد استدعائها لا يجب أبدًا أن يُغيّر أي بيانات على الخادم، فقط تجلب المعلومات. هذا يسمح للمتصفحات ومحركات البحث وأدوات التخزين المؤقت (caching) بإعادة تنفيذ طلبات GET بحرية دون قلق من عواقب غير مقصودة، بعكس POST أو DELETE أو PUT التي تُغيّر حالة الخادم عمدًا.",
      bestPractices: ["لا تُصمم أبدًا نقطة نهاية GET تُنفّذ عملية تُغيّر بيانات (مثل حذف سجل)، فهذا يخالف العقد الدلالي المتوقع من GET ويُسبب مشاكل غير متوقعة مع أدوات التخزين المؤقت أو الزحف (crawlers)"],
      commonMistakes: ["تصميم رابط GET لحذف عنصر (مثل /delete-item?id=5)، مما قد يُحذف بيانات بالخطأ عبر مجرد زحف محرك بحث أو معاينة رابط تلقائية"],
      followups: [], similar: ["ما الفرق بين Safe Methods وIdempotent Methods؟"]
    },
    {
      id: "rest-5", title: "ما هي استراتيجيات Pagination في REST API؟", difficulty: "medium", domain: "REST API", type: "open", timeMinutes: 4,
      question: "ما الفرق بين Offset-based Pagination وCursor-based Pagination عند إرجاع قوائم كبيرة من البيانات؟",
      answer: "Offset-based Pagination يُحدِّد صفحة معيّنة عبر رقم الصفحة أو عدد العناصر المُتجاوَزة (offset) وعدد العناصر المطلوبة (limit)، مثل ?page=3&limit=20. بسيط جدًا للفهم والتنفيذ، لكنه يعاني من مشكلة 'انزياح النتائج' عند إضافة أو حذف عناصر بين طلب صفحة وأخرى (قد يظهر عنصر مكررًا أو يختفي عنصر من النتائج). Cursor-based Pagination يُحدِّد نقطة بداية عبر 'مؤشر' (cursor، عادة معرّف آخر عنصر في الصفحة السابقة) بدلًا من رقم، مثل ?after=item_123&limit=20، فيبقى مستقرًا حتى مع إضافة أو حذف عناصر بين الطلبات.",
      explanation: "المشكلة العملية بـ Offset تظهر بوضوح في تطبيقات كثيرة التحديث: لو كنت في الصفحة 2 (عناصر 21-40) وأُضيف عنصر جديد في المقدمة، تنزاح كل العناصر للأسفل، فقد تفوتك رؤية عنصر كان يجب أن يظهر، أو ترى عنصرًا رأيته بالفعل مكررًا. Cursor-based يحل هذه المشكلة تمامًا لأنه لا يعتمد على 'موضع رقمي' متغيّر، بل على 'آخر عنصر رأيته فعليًا'، مما يجعله الخيار المفضّل لتطبيقات التمرير اللانهائي (infinite scroll) في الشبكات الاجتماعية وخلافها.",
      example: "// Offset-based\nGET /posts?page=2&limit=20\n\n// Cursor-based\nGET /posts?after=post_456&limit=20",
      bestPractices: ["استخدم Cursor-based Pagination لبيانات كثيرة التحديث (مثل خلاصة أخبار)، وOffset-based للحالات الأبسط ذات البيانات الثابتة نسبيًا (مثل صفحات نتائج بحث أرشيفية)"],
      commonMistakes: ["استخدام Offset-based Pagination على بيانات تتغيّر باستمرار وسريعًا، مما يُسبب تجربة مستخدم مربكة (عناصر مكررة أو مفقودة) في التمرير عبر الصفحات"],
      followups: ["كيف تُصمم رأس استجابة يوضح للعميل رابط الصفحة التالية تلقائيًا (مثل Link header)؟"], similar: ["ما هو GraphQL Cursor Connections Spec؟"]
    },
    {
      id: "rest-mcq-4", title: "أي ترويسة HTTP يستخدمها العميل لتحديد صيغة الاستجابة المفضّلة؟", difficulty: "medium", domain: "REST API", type: "mcq", timeMinutes: 1,
      question: "أي ترويسة طلب HTTP يستخدمها العميل ليُخبر الخادم بصيغة المحتوى المفضّلة للاستجابة (مثل JSON أو XML)؟",
      options: ["Content-Type", "Accept", "Authorization", "User-Agent"], correctIndex: 1,
      answer: "Accept",
      explanation: "ترويسة Accept (مثل Accept: application/json) تُخبر الخادم بصيغ المحتوى التي يستطيع العميل فهمها ويُفضّلها للاستجابة، فيما يُسمى 'التفاوض على المحتوى' (Content Negotiation). أما Content-Type فتُستخدم في الطلب لوصف صيغة البيانات المُرسَلة فعليًا في جسم ذلك الطلب (وليس المُتوقَّعة في الاستجابة)، وهو فرق دلالي مهم يُخلَط فيه كثيرًا.",
      bestPractices: ["أرسل Accept: application/json صراحة عند استهلاك واجهة برمجية تدعم عدة صيغ، وContent-Type: application/json عند إرسال جسم JSON في طلب POST/PUT"],
      commonMistakes: ["الخلط بين Accept (ماذا أريد أن أستقبل) وContent-Type (ماذا أرسل فعليًا الآن)"],
      followups: [], similar: ["كيف يدعم خادم واحد إرجاع نفس البيانات بصيغ متعددة (JSON وXML) بناءً على Accept؟"]
    },
  ]
},

/* ======================================================================
   Algorithms
   ====================================================================== */
{
  id: "algorithms",
  name: "Algorithms",
  icon: "🧮",
  intro: "أسئلة الخوارزميات هي جوهر المقابلات التقنية في الشركات الكبرى (FAANG وما شابهها). المحاور لا يريد فقط الحل الصحيح، بل يريد رؤية تفكيرك في تحليل تعقيد الوقت والمساحة، ومقارنة عدة مقاربات قبل اختيار الأنسب.",
  concepts: [
    { title: "Big O Notation", body: "طريقة رياضية لوصف كيف ينمو زمن (أو مساحة) تنفيذ خوارزمية مع نمو حجم المدخلات n، مع التركيز على أسوأ الحالات (worst case) وتجاهل الثوابت والحدود الأصغر تأثيرًا." },
    { title: "خوارزميات الترتيب (Sorting)", body: "خوارزميات مثل Bubble Sort (O(n²)، بسيطة لكن بطيئة) وMerge Sort وQuick Sort (O(n log n) في المتوسط) تُرتّب البيانات، وكل واحدة لها توازن مختلف بين السرعة والاستقرار (stability) واستهلاك الذاكرة." },
    { title: "البرمجة الديناميكية (Dynamic Programming)", body: "تقنية لحل مسائل معقدة عبر تقسيمها لمسائل فرعية أصغر متداخلة (overlapping subproblems)، مع تخزين نتائج المسائل الفرعية (memoization أو tabulation) لتفادي إعادة حسابها مرارًا." },
    { title: "الخوارزميات الجشعة (Greedy)", body: "تتخذ القرار الأمثل محليًا في كل خطوة على أمل الوصول لحل أمثل إجمالاً، وتعمل بكفاءة لبعض المسائل (مثل إيجاد أقل عدد عملات) لكنها لا تضمن الحل الأمثل لكل المسائل." }
  ],
  questions: [
    {
      id: "algo-1", title: "اشرح Big O Notation بأمثلة", difficulty: "easy", domain: "Algorithms", type: "open", timeMinutes: 4,
      question: "ما هو Big O Notation، ولماذا نتجاهل الثوابت (constants) عند حسابه؟",
      answer: "Big O يصف كيف ينمو زمن تنفيذ خوارزمية (أو استهلاكها للذاكرة) مع تزايد حجم المدخلات n، مع التركيز على السلوك عند n كبيرة جدًا (asymptotic behavior) وليس على قياسات دقيقة لعدد ثوانٍ معيّنة. نتجاهل الثوابت (فمثلاً O(2n) تُكتب O(n)) لأن الفرق بين خوارزميتين من نفس الرتبة (كلاهما O(n) مثلاً) يتلاشى أهميته أمام الفرق الهائل بين رتب مختلفة تمامًا (O(n) مقابل O(n²)) عندما تكبر n بما فيه الكفاية.",
      explanation: "مثال ملموس: خوارزمية O(n) على مليون عنصر تأخذ وقتًا يتناسب خطيًا مع مليون، بينما خوارزمية O(n²) على نفس المليون عنصر تأخذ وقتًا يتناسب مع مليون مليون (تريليون) عملية، وهو فرق هائل جدًا يجعل مقارنة الثوابت الصغيرة (مثل 2n مقابل 3n) تافهة أمامه. هذا سبب تركيز المقابلات التقنية على 'رتبة' الخوارزمية (O(1)، O(log n)، O(n)، O(n log n)، O(n²)...) أكثر من أي تفاصيل دقيقة أخرى.",
      example: "// O(n) - حلقة واحدة تمر على كل عنصر مرة\nfor (let i = 0; i < n; i++) { ... }\n\n// O(n²) - حلقتان متداخلتان\nfor (let i = 0; i < n; i++) {\n  for (let j = 0; j < n; j++) { ... }\n}",
      bestPractices: ["فكّر دائمًا في أسوأ حالة (worst case) عند تحليل خوارزمية، ما لم يُطلَب تحديدًا تحليل الحالة المتوسطة"],
      commonMistakes: ["الخلط بين تعقيد الوقت (time complexity) وتعقيد المساحة (space complexity) عند تحليل خوارزمية"],
      followups: ["ما الفرق بين Big O وBig Theta وBig Omega؟"], similar: ["ما هو Amortized Time Complexity وأين يظهر (مثل ArrayList.add)؟"]
    },
    {
      id: "algo-2", title: "قارن بين Bubble Sort وMerge Sort وQuick Sort", difficulty: "medium", domain: "Algorithms", type: "open", timeMinutes: 5,
      question: "قارن بين خوارزميات الترتيب الثلاث من ناحية تعقيد الوقت والاستقرار (stability) والاستخدام العملي.",
      answer: "Bubble Sort يقارن كل عنصرين متجاورين ويُبدّلهما إن كانا بترتيب خاطئ، مكررًا هذا حتى استقرار القائمة كاملة؛ تعقيده O(n²) في المتوسط وأسوأ حالة، مما يجعله غير عملي إلا للتعليم أو قوائم صغيرة جدًا. Merge Sort يقسّم القائمة تكراريًا لنصفين حتى الوصول لعناصر مفردة، ثم يدمجها (merge) بترتيب صحيح تصاعديًا؛ تعقيده O(n log n) مضمون في كل الحالات (لا يتدهور أبدًا)، ومستقر (stable: يحافظ على ترتيب العناصر المتساوية)، لكنه يحتاج مساحة إضافية O(n). Quick Sort يختار عنصرًا محوريًا (pivot) ويُقسّم حوله، بتعقيد O(n log n) في المتوسط لكن O(n²) في أسوأ حالة (عند اختيار pivot سيء باستمرار)، وغير مستقر افتراضيًا، لكنه غالبًا الأسرع عمليًا في الممارسة بسبب محلية الذاكرة (cache locality) الجيدة ومساحة إضافية أقل.",
      explanation: "الاختيار العملي: لغات كثيرة (مثل Java وPython) تستخدم Timsort (مزيج من Merge Sort وInsertion Sort) للترتيب الافتراضي لأنه مستقر ومضمون O(n log n)، بينما Quick Sort يُفضَّل عندما لا يهم الاستقرار وتريد أفضل أداء عملي متوسط مع أقل استهلاك ذاكرة إضافية. Bubble Sort عمليًا لا يُستخدم في الإنتاج أبدًا، ويُذكَر فقط لأغراض تعليمية أو كمرحلة أولى لفهم مبدأ الترتيب.",
      bestPractices: ["استخدم خوارزمية الترتيب المدمجة في لغتك (مُحسَّنة عادة) بدلًا من كتابة واحدة يدويًا، إلا لأغراض تعليمية"],
      commonMistakes: ["اختيار Quick Sort دون انتباه لأسوأ حالة O(n²) المحتملة على بيانات مرتبة مسبقًا جزئيًا مع اختيار pivot ساذج (مثل العنصر الأول دائمًا)"],
      followups: ["كيف يختار Quick Sort الجيد الـ pivot لتفادي أسوأ حالة (مثل median-of-three)؟"], similar: ["ما هو Heap Sort وكيف يقارن بالثلاثة أعلاه؟"]
    },
    {
      id: "algo-3", title: "ما الفرق بين Recursion العادي وDynamic Programming؟", difficulty: "hard", domain: "Algorithms", type: "open", timeMinutes: 5,
      question: "لماذا تُعتبر البرمجة الديناميكية (Dynamic Programming) أسرع من التكرار العودي (Recursion) البسيط لمسائل مثل متتالية فيبوناتشي؟",
      answer: "التكرار العودي البسيط لحساب فيبوناتشي (fib(n) = fib(n-1) + fib(n-2)) يُعيد حساب نفس المسائل الفرعية مرارًا وتكرارًا (مثلاً fib(3) يُحسَب عدة مرات منفصلة أثناء حساب fib(6))، مما يجعل تعقيده الزمني أُسّيًا O(2^n). البرمجة الديناميكية تحل هذه المشكلة عبر تخزين (memoization أو tabulation) نتيجة كل مسألة فرعية بمجرد حسابها أول مرة، فلا تُعاد حسابها مطلقًا لاحقًا، مما يُخفّض التعقيد إلى O(n) خطي فقط.",
      explanation: "الشرطان الأساسيان لتطبيق DP بنجاح هما: 'المسائل الفرعية المتداخلة' (overlapping subproblems - نفس المسألة الفرعية تظهر عدة مرات) و'البنية المثلى الفرعية' (optimal substructure - الحل الأمثل للمسألة الكبيرة يُبنى من حلول مثلى لمسائل فرعية أصغر). متتالية فيبوناتشي مثال كلاسيكي بسيط لتوضيح الفكرة، لكن DP تُستخدم فعليًا لمسائل أعقد بكثير مثل مسألة الحقيبة (Knapsack) وأطول تسلسل فرعي مشترك (Longest Common Subsequence).",
      example: "// Recursion بسيط - O(2^n) بطيء جدًا لـ n كبيرة\nfunction fib(n) {\n  if (n <= 1) return n;\n  return fib(n - 1) + fib(n - 2);\n}\n\n// Dynamic Programming مع Memoization - O(n)\nfunction fibDP(n, memo = {}) {\n  if (n <= 1) return n;\n  if (memo[n]) return memo[n];\n  return memo[n] = fibDP(n - 1, memo) + fibDP(n - 2, memo);\n}",
      bestPractices: ["ابحث أولًا عن 'مسائل فرعية متداخلة' في أي حل recursion بطيء؛ إن وُجدت، فهي مرشح ممتاز لتطبيق DP"],
      commonMistakes: ["محاولة حل مسائل DP عبر recursion بسيط بلا تخزين نتائج، فيعمل بشكل صحيح على مدخلات صغيرة لكنه يفشل (timeout) على مدخلات أكبر قليلاً"],
      followups: ["ما الفرق بين Top-Down DP (Memoization) وBottom-Up DP (Tabulation)؟"], similar: ["ما هي مسألة الحقيبة (Knapsack Problem) وكيف تُحل بـ DP؟"]
    },
    {
      id: "algo-mcq-1", title: "ما تعقيد الوقت لـ Merge Sort في أسوأ حالة؟", difficulty: "medium", domain: "Algorithms", type: "mcq", timeMinutes: 1,
      question: "ما هو تعقيد الوقت لخوارزمية Merge Sort في أسوأ حالة (worst case)؟",
      options: ["O(n)", "O(n log n)", "O(n²)", "O(log n)"], correctIndex: 1,
      answer: "O(n log n)",
      explanation: "Merge Sort دائمًا O(n log n) بغض النظر عن ترتيب المدخلات الأولي، لأنه يُقسّم القائمة دائمًا لنصفين متساويين تقريبًا (log n مستوى من التقسيم) ثم يدمج كل مستوى بتكلفة O(n)، على عكس Quick Sort الذي يتدهور لـ O(n²) في أسوأ حالة عند اختيار pivot سيء باستمرار.",
      bestPractices: ["اختر Merge Sort عندما تحتاج ضمانًا مؤكدًا لأداء O(n log n) بغض النظر عن طبيعة البيانات المدخلة"],
      commonMistakes: ["الخلط بين تعقيد Merge Sort الثابت دائمًا وتعقيد Quick Sort المتغيّر حسب اختيار pivot"],
      followups: [], similar: ["ما تعقيد المساحة الإضافية (space complexity) لـ Merge Sort مقارنة بـ Quick Sort؟"]
    },
    {
      id: "algo-tf-1", title: "صح أو خطأ: كل خوارزمية Greedy تضمن الحل الأمثل دائمًا", difficulty: "medium", domain: "Algorithms", type: "tf", timeMinutes: 1,
      question: "صح أم خطأ: الخوارزميات الجشعة (Greedy Algorithms) تضمن دائمًا الوصول للحل الأمثل الإجمالي (globally optimal) لأي مسألة تُطبَّق عليها.",
      isTrue: false,
      answer: "خطأ.",
      explanation: "الخوارزميات الجشعة تتخذ القرار الأفضل محليًا (locally optimal) في كل خطوة دون النظر للعواقب المستقبلية، وهذا يضمن الحل الأمثل الإجمالي فقط لمسائل معيّنة لها 'خاصية الاختيار الجشع' (greedy-choice property) مُثبَتة رياضيًا، مثل مسألة إرجاع الباقي بعملات معيّنة (في أنظمة عملات معيّنة) أو خوارزمية Dijkstra لأقصر مسار. لكن لمسائل أخرى كثيرة (مثل بعض حالات مسألة الحقيبة 0/1 Knapsack)، القرار الأمثل محليًا في كل خطوة لا يؤدي بالضرورة للحل الأمثل الإجمالي، وتحتاج تلك المسائل لبرمجة ديناميكية أو مقاربات أخرى بدلًا من ذلك.",
      bestPractices: ["أثبت (أو تحقق من مصدر موثوق) أن مسألتك تملك خاصية الاختيار الجشع فعلاً قبل الاعتماد على حل Greedy كحل نهائي صحيح"],
      commonMistakes: ["افتراض أن أي حل 'بديهي وسريع' يبدو منطقيًا هو بالضرورة حل Greedy صحيح مضمون الأمثلية، دون إثبات رياضي أو مرجع موثوق"],
      followups: ["أعطِ مثالاً لمسألة يفشل فيها الحل الجشع لكن ينجح فيها DP؟"], similar: ["ما هي مسألة اختيار الأنشطة (Activity Selection Problem) كمثال كلاسيكي لـ Greedy الناجح؟"]
    },
    {
      id: "algo-4", title: "اشرح تقنية Two Pointers", difficulty: "medium", domain: "Algorithms", type: "open", timeMinutes: 4,
      question: "ما هي تقنية Two Pointers (المؤشرين)، ومتى تجعل حل مسألة أسرع من الحل التقليدي؟",
      answer: "تقنية Two Pointers تستخدم مؤشرين (متغيرين يمثّلان فهرسين) يتحركان عبر بنية بيانات (عادة مصفوفة مرتبة) وفق منطق معيّن، بدلاً من استخدام حلقتين متداخلتين (O(n²)) لفحص كل زوج ممكن من العناصر. بتحريك المؤشرين بذكاء بناءً على شرط المسألة (مثل تحريك أحدهما للداخل عند تجاوز مجموع معيّن)، يمكن الوصول للحل بمرور واحد فقط على البيانات (O(n)) بدلاً من فحص كل الأزواج.",
      explanation: "مثال كلاسيكي: إيجاد زوج عناصر في مصفوفة مرتبة يجمعان لقيمة مستهدفة (Two Sum على مصفوفة مرتبة). بدلاً من فحص كل زوج ممكن (O(n²))، تضع مؤشرًا في البداية وآخر في النهاية؛ إن كان المجموع الحالي أصغر من الهدف، تُحرّك المؤشر الأيسر للأمام (لزيادة المجموع)، وإن كان أكبر، تُحرّك المؤشر الأيمن للخلف (لتقليله)، حتى إيجاد الزوج المطلوب أو التقاء المؤشرين، بتعقيد O(n) فقط.",
      example: "function twoSumSorted(arr, target) {\n  let left = 0, right = arr.length - 1;\n  while (left < right) {\n    const sum = arr[left] + arr[right];\n    if (sum === target) return [left, right];\n    if (sum < target) left++;\n    else right--;\n  }\n  return null;\n}",
      bestPractices: ["ابحث عن هذه التقنية كلما رأيت مصفوفة مرتبة ومسألة تتعلق بأزواج أو مجاميع أو تصفية عناصر"],
      commonMistakes: ["محاولة استخدام Two Pointers على بيانات غير مرتبة دون ترتيبها أولاً، مما يُبطل صحة منطق تحريك المؤشرين المعتمد على الترتيب"],
      followups: ["كيف تُطبّق هذه التقنية لإزالة عناصر مكررة من مصفوفة مرتبة في المكان (in-place)؟"], similar: ["ما هي تقنية Fast and Slow Pointers (Floyd's Cycle Detection) في القوائم المرتبطة؟"]
    },
    {
      id: "algo-5", title: "اشرح تقنية Sliding Window", difficulty: "medium", domain: "Algorithms", type: "open", timeMinutes: 4,
      question: "ما هي تقنية Sliding Window (النافذة المنزلقة)، ولأي نوع من المسائل هي مناسبة؟",
      answer: "تقنية Sliding Window تحافظ على 'نافذة' (نطاق متجاور من العناصر) تتحرك عبر مصفوفة أو سلسلة نصية، بتوسيع حافتها اليمنى أو تضييق حافتها اليسرى حسب شرط معيّن، بدلاً من إعادة حساب كل نطاق ممكن من الصفر (مما يكلّف O(n²) أو أكثر). هذا يجعلها مناسبة تحديدًا لمسائل 'أفضل نطاق متجاور' مثل إيجاد أطول سلسلة فرعية متتالية بشرط معيّن، أو مجموع أقصى لنافذة بحجم ثابت k.",
      explanation: "الفكرة الأساسية: بدلاً من إعادة جمع كل عناصر النافذة الجديدة من الصفر عند كل تحرك، تُحدَّث القيمة تراكميًا: عند تحريك النافذة خطوة واحدة للأمام، تُطرَح قيمة العنصر الذي خرج من النافذة وتُضاف قيمة العنصر الجديد الذي دخل، فيصبح تحديث النافذة O(1) بدلًا من O(k) في كل خطوة، مما يخفّض التعقيد الكلي من O(n×k) إلى O(n) فقط.",
      example: "// أقصى مجموع لنافذة متتالية بحجم ثابت k\nfunction maxSumWindow(arr, k) {\n  let windowSum = 0;\n  for (let i = 0; i < k; i++) windowSum += arr[i];\n  let maxSum = windowSum;\n\n  for (let i = k; i < arr.length; i++) {\n    windowSum += arr[i] - arr[i - k]; // أضف الجديد، اطرح الخارج\n    maxSum = Math.max(maxSum, windowSum);\n  }\n  return maxSum;\n}",
      bestPractices: ["ابحث عن هذه التقنية كلما رأيت مسألة تطلب 'أفضل نطاق فرعي متجاور' بحجم ثابت أو متغيّر"],
      commonMistakes: ["إعادة حساب مجموع النافذة بالكامل من الصفر في كل خطوة بدلاً من التحديث التراكمي، مما يُفقد الفائدة الأساسية من هذه التقنية"],
      followups: ["كيف تختلف Sliding Window ذات الحجم الثابت عن ذات الحجم المتغيّر (variable-size)؟"], similar: ["كيف تُستخدم هذه التقنية لإيجاد أطول سلسلة فرعية بدون تكرار أحرف؟"]
    },
    {
      id: "algo-6", title: "اشرح خوارزمية Binary Search", difficulty: "medium", domain: "Algorithms", type: "open", timeMinutes: 4,
      question: "كيف تعمل خوارزمية البحث الثنائي (Binary Search)، ولماذا تتطلب مصفوفة مرتبة مسبقًا؟",
      answer: "البحث الثنائي يبحث عن قيمة داخل مصفوفة مرتبة عبر مقارنة القيمة المستهدفة بالعنصر الأوسط في كل خطوة: إن كانت القيمة المستهدفة أصغر، يُستبعد النصف الأيمن بالكامل ويُكرَّر البحث في النصف الأيسر فقط؛ إن كانت أكبر، يُستبعد النصف الأيسر ويُكرَّر في النصف الأيمن؛ وإن تطابقت، وُجدت النتيجة. بما أن كل خطوة تستبعد نصف العناصر المتبقية، فإن التعقيد الكلي هو O(log n) بدلاً من O(n) للبحث الخطي العادي.",
      explanation: "المتطلب الأساسي (وغير القابل للتفاوض) هو أن تكون المصفوفة مرتبة مسبقًا؛ فبدون ترتيب، لا معنى لاستبعاد نصف العناصر بناءً على مقارنة واحدة، لأن العنصر المستهدف قد يقع في أي مكان بلا نمط يمكن استغلاله. هذا يفسر سبب أهمية خوارزميات الترتيب (Sorting) كخطوة تمهيدية غالبًا قبل تطبيق بحث ثنائي فعّال، خصوصًا عند الحاجة لبحث متكرر عن قيم مختلفة في نفس المجموعة.",
      example: "function binarySearch(arr, target) {\n  let low = 0, high = arr.length - 1;\n  while (low <= high) {\n    const mid = Math.floor((low + high) / 2);\n    if (arr[mid] === target) return mid;\n    if (arr[mid] < target) low = mid + 1;\n    else high = mid - 1;\n  }\n  return -1; // غير موجود\n}",
      bestPractices: ["استخدم البحث الثنائي (أو الدوال المدمجة المكافئة له) دائمًا على بيانات مرتبة بدلاً من البحث الخطي، خصوصًا لمجموعات بيانات كبيرة"],
      commonMistakes: ["تطبيق البحث الثنائي على مصفوفة غير مرتبة، مما يُنتج نتائج خاطئة تمامًا دون أي خطأ ترجمة أو تحذير واضح"],
      followups: ["كيف تُطبّق نسخة معدَّلة من البحث الثنائي لإيجاد أول أو آخر ظهور لقيمة مكررة؟"], similar: ["ما هي مسألة 'Search in Rotated Sorted Array' وكيف تُعدَّل خوارزمية البحث الثنائي لحلها؟"]
    },
    {
      id: "algo-mcq-2", title: "أي تقنية تستكشف كل الحلول الممكنة وتتراجع عند فشل مسار معيّن؟", difficulty: "hard", domain: "Algorithms", type: "mcq", timeMinutes: 2,
      question: "أي تقنية خوارزمية تستكشف الحلول الممكنة تدريجيًا، وتتراجع (backtrack) فور اكتشاف أن مسارًا معيّنًا لن يؤدي لحل صحيح؟",
      options: ["Greedy", "Dynamic Programming", "Backtracking", "Binary Search"], correctIndex: 2,
      answer: "Backtracking",
      explanation: "Backtracking يبني الحل تدريجيًا خطوة بخطوة، وفي كل خطوة يتحقق إن كان المسار الحالي لا يزال صالحًا نحو حل ممكن؛ إن اكتشف أن المسار الحالي لن يؤدي أبدًا لحل صحيح (dead end)، 'يتراجع' فورًا لآخر قرار واتخذ مسارًا بديلاً بدلاً من الاستمرار في مسار مضمون الفشل. أمثلة كلاسيكية: حل لغز سودوكو، مسألة الملكات الثماني (N-Queens)، وإيجاد كل التباديل الممكنة (Permutations) لمجموعة.",
      bestPractices: ["استخدم Backtracking للمسائل التي تتطلب استكشاف كل الحلول الممكنة (أو إيجاد حل واحد صالح) ضمن قيود معيّنة، مع إمكانية 'قطع' مسارات غير واعدة مبكرًا لتحسين الأداء"],
      commonMistakes: ["عدم تطبيق 'تقليم' (pruning) مبكر لاستبعاد مسارات مضمونة الفشل بسرعة، مما يجعل الخوارزمية تستكشف مسارات لا فائدة منها فعليًا وتُبطئ الأداء بشكل كبير"],
      followups: [], similar: ["كيف تختلف Backtracking عن Brute Force العشوائي البحت من ناحية الكفاءة؟"]
    },
    {
      id: "algo-7", title: "ما هو Topological Sort؟", difficulty: "hard", domain: "Algorithms", type: "open", timeMinutes: 5,
      question: "ما هو الترتيب الطوبولوجي (Topological Sort)، ولأي نوع من المسائل يُستخدم؟",
      answer: "Topological Sort يُنتج ترتيبًا خطيًا لعقد رسم بياني موجّه (Directed Graph) بلا دورات (DAG - Directed Acyclic Graph)، بحيث تظهر كل عقدة قبل أي عقدة أخرى تعتمد عليها (يوجد حافة موجّهة منها إليها). يُستخدم في أي مسألة تتضمن ترتيب مهام لها اعتماديات متبادلة، حيث يجب إنجاز مهمة معيّنة قبل أخرى تعتمد عليها.",
      explanation: "مثال عملي كلاسيكي: ترتيب المواد الدراسية بناءً على متطلبات سابقة (لا يمكن أخذ مادة متقدمة قبل إتمام المادة الأساسية التي تعتمد عليها)، أو ترتيب خطوات بناء مشروع برمجي بناءً على اعتماديات الحزم (لا يمكن تثبيت حزمة تعتمد على حزمة أخرى لم تُثبَّت بعد). خوارزمية Kahn's Algorithm (تعتمد على BFS مع تتبع عدد الاعتماديات الداخلة لكل عقدة) وDFS-based topological sort هما الطريقتان الشائعتان لتنفيذه، وكلاهما يكتشف أيضًا وجود دورة (cycle) في الرسم البياني إن وُجدت (مما يعني عدم إمكانية الترتيب أصلاً، مثل اعتمادية دائرية بين مادتين دراسيتين).",
      bestPractices: ["استخدم Topological Sort لأي مسألة جدولة مهام لها اعتماديات صريحة بين بعضها البعض، وتحقق أولاً أن الرسم البياني خالٍ من الدورات (DAG) وإلا فلا يوجد ترتيب صالح ممكن"],
      commonMistakes: ["محاولة تطبيق Topological Sort على رسم بياني يحتوي دورة (cycle)، وهو أمر مستحيل منطقيًا (اعتمادية دائرية لا حل خطي لها)؛ يجب اكتشاف الدورة أولاً والتعامل معها"],
      followups: ["كيف تكتشف وجود دورة (cycle) في رسم بياني موجّه أثناء تنفيذ Topological Sort؟"], similar: ["ما هي خوارزمية Kahn's Algorithm بالتفصيل؟"]
    },
    {
      id: "algo-mcq-3", title: "أي بنية بيانات تُستخدم لتنفيذ Union-Find (Disjoint Set)؟", difficulty: "hard", domain: "Algorithms", type: "mcq", timeMinutes: 2,
      question: "لأي نوع من المسائل تُستخدم بنية Union-Find (تُعرف أيضًا بـ Disjoint Set Union)؟",
      options: ["ترتيب عناصر مصفوفة", "تتبع مجموعات من العناصر المنفصلة، مع دعم دمج مجموعتين والتحقق السريع من انتماء عنصرين لنفس المجموعة", "البحث عن أقصر مسار في رسم بياني", "تشفير البيانات"], correctIndex: 1,
      answer: "تتبع مجموعات من العناصر المنفصلة، مع دعم دمج مجموعتين (Union) والتحقق السريع من انتماء عنصرين لنفس المجموعة (Find).",
      explanation: "Union-Find بنية بيانات فعّالة جدًا (شبه O(1) بمتوسط عملي بفضل تحسينات مثل Path Compression وUnion by Rank) لإدارة مجموعات منفصلة من العناصر، وتُستخدم شائعًا في خوارزميات مثل Kruskal's Algorithm لإيجاد الشجرة الممتدة الصغرى (Minimum Spanning Tree)، واكتشاف الدورات (cycles) في رسم بياني غير موجّه، وتحديد المكوّنات المتصلة (Connected Components) في شبكة.",
      bestPractices: ["استخدم Union-Find عندما تحتاج تتبع مجموعات ديناميكية تتغيّر (تندمج) بمرور الوقت، مع حاجة متكررة للتحقق من انتماء عنصرين لنفس المجموعة بكفاءة عالية"],
      commonMistakes: ["تنفيذ Union-Find بسيط بدون تحسينات Path Compression وUnion by Rank، مما يجعل الأداء يتدهور لـ O(n) في أسوأ الحالات بدلاً من شبه O(1) العملي مع التحسينات"],
      followups: [], similar: ["كيف تستخدم Union-Find تحديدًا في خوارزمية Kruskal's لإيجاد Minimum Spanning Tree؟"]
    },
  ]
},

/* ======================================================================
   Operating Systems
   ====================================================================== */
{
  id: "operating-systems",
  name: "Operating Systems",
  icon: "💻",
  intro: "فهم أنظمة التشغيل يكشف مدى عمق معرفتك بما يحدث فعليًا 'تحت الغطاء' عندما يعمل برنامجك. المقابلات تركّز على الفرق بين العمليات (Processes) والخيوط (Threads)، الجمود (Deadlock)، والذاكرة الافتراضية (Virtual Memory) — مفاهيم أساسية لفهم الأداء والتزامن في أي نظام حقيقي.",
  concepts: [
    { title: "Process مقابل Thread", body: "العملية (Process) برنامج قيد التشغيل بمساحة ذاكرة معزولة خاصة به. الخيط (Thread) وحدة تنفيذ أصغر داخل عملية، وتتشارك كل الخيوط داخل نفس العملية نفس مساحة الذاكرة، مما يجعل التواصل بينها أسرع لكن أكثر عرضة لتعارضات البيانات (race conditions)." },
    { title: "Deadlock (الجمود)", body: "حالة تتوقف فيها عمليتان أو أكثر عن التقدم للأبد، كل منها ينتظر موردًا يحتفظ به الآخر. يحدث فقط عند توفر أربعة شروط معًا: الحصرية المتبادلة، الاحتفاظ والانتظار، عدم انتزاع المورد قسرًا، والانتظار الدائري." },
    { title: "الذاكرة الافتراضية (Virtual Memory) والتصفيح (Paging)", body: "تقنية تمنح كل عملية وهم امتلاك مساحة ذاكرة كبيرة ومتصلة خاصة بها، بينما يُدير نظام التشغيل فعليًا تعيين (mapping) أجزاء صغيرة منها (صفحات pages) بين الذاكرة الفعلية RAM والقرص، بشفافية كاملة عن البرنامج." }
  ],
  questions: [
    {
      id: "os-1", title: "ما الفرق بين Process وThread؟", difficulty: "medium", domain: "Operating Systems", type: "open", timeMinutes: 4,
      question: "اشرح الفرق الجوهري بين Process وThread، ولماذا التواصل بين الخيوط أسرع لكن أخطر؟",
      answer: "العملية (Process) هي برنامج قيد التنفيذ يملك مساحة ذاكرة خاصة معزولة تمامًا عن أي عملية أخرى، بما فيها الكومة (heap) والمكدس (stack) الخاصين بها. الخيط (Thread) هو وحدة تنفيذ أصغر داخل عملية واحدة؛ يمكن لعملية واحدة أن تحتوي عدة خيوط، وكل هذه الخيوط تتشارك نفس مساحة الذاكرة (بما فيها المتغيرات العامة والكومة) الخاصة بتلك العملية، رغم أن لكل خيط مكدسه (stack) الخاص به.",
      explanation: "بما أن الخيوط تتشارك نفس الذاكرة، فإن التواصل بينها (مشاركة بيانات) أسرع بكثير من التواصل بين عمليتين منفصلتين (التي تحتاج آليات اتصال بين العمليات IPC مثل الأنابيب أو الذاكرة المشتركة الصريحة). لكن هذه المشاركة نفسها هي مصدر الخطر: إذا عدّل خيطان نفس المتغيّر المشترك في نفس الوقت دون تزامن (synchronization) صحيح عبر أدوات مثل mutex، يحدث ما يُعرف بـ 'حالة السباق' (race condition) تُنتج نتائج غير متوقعة وغير قابلة للتكرار بسهولة عند تصحيح الأخطاء.",
      bestPractices: ["استخدم آليات تزامن صريحة (mutex، semaphore) عند مشاركة بيانات بين خيوط متعددة لتفادي race conditions"],
      commonMistakes: ["الافتراض أن استخدام خيوط متعددة سيُسرّع أي برنامج تلقائيًا، متجاهلين تكلفة التزامن وتعقيد التصحيح الإضافي"],
      followups: ["ما هو GIL في بايثون ولماذا يحد من فائدة الخيوط للمهام الحسابية الثقيلة هناك تحديدًا؟"], similar: ["ما الفرق بين Concurrency وParallelism؟"]
    },
    {
      id: "os-2", title: "اشرح Deadlock وشروطه الأربعة", difficulty: "hard", domain: "Operating Systems", type: "open", timeMinutes: 5,
      question: "ما هو الجمود (Deadlock)، وما الشروط الأربعة التي يجب توفرها معًا لحدوثه؟",
      answer: "الجمود حالة تتوقف فيها عمليتان أو أكثر عن التقدم للأبد، لأن كل واحدة تنتظر موردًا يحتفظ به الطرف الآخر، ولا أحد يتنازل. يحدث فقط عند توفر أربعة شروط معًا (شروط كوفمان Coffman Conditions): الحصرية المتبادلة (Mutual Exclusion — المورد لا يمكن مشاركته بين عمليتين في نفس اللحظة)، الاحتفاظ والانتظار (Hold and Wait — عملية تحتفظ بمورد وتنتظر مورد آخر في نفس الوقت)، عدم انتزاع المورد قسرًا (No Preemption — لا يمكن أخذ المورد من عملية قسرًا)، والانتظار الدائري (Circular Wait — سلسلة من العمليات كل واحدة تنتظر التالية، وتُغلق الدائرة أخيرًا على الأولى).",
      explanation: "المثال الكلاسيكي: عمليتان A وB، كل واحدة تحتاج قفلين (locks) X وY. إن حصلت A على X وانتظرت Y، بينما حصلت B على Y وانتظرت X، فكل منهما تنتظر للأبد موردًا يملكه الآخر — جمود تام. لمنع الجمود، يكفي كسر شرط واحد فقط من الأربعة؛ الحل العملي الأكثر شيوعًا هو فرض ترتيب ثابت وموحّد للحصول على الأقفال (مثلاً: احصل دائمًا على X قبل Y في كل مكان بالكود)، مما يكسر شرط الانتظار الدائري تحديدًا.",
      bestPractices: ["اتفق على ترتيب ثابت للحصول على أقفال متعددة عبر كامل الكود لتفادي الانتظار الدائري"],
      commonMistakes: ["الحصول على أقفال بترتيب مختلف في أجزاء مختلفة من الكود (مثل قفل X ثم Y في مكان، وY ثم X في مكان آخر)، مما يفتح احتمالية جمود حقيقية"],
      followups: ["ما هي خوارزمية بنكير (Banker's Algorithm) لتفادي الجمود؟"], similar: ["ما الفرق بين Deadlock وStarvation (التجويع)؟"]
    },
    {
      id: "os-mcq-1", title: "أي مما التالي ليس أحد شروط حدوث الجمود الأربعة؟", difficulty: "hard", domain: "Operating Systems", type: "mcq", timeMinutes: 2,
      question: "أي مما يلي ليس أحد الشروط الأربعة الضرورية لحدوث Deadlock (شروط كوفمان)؟",
      options: ["Mutual Exclusion (الحصرية المتبادلة)", "Circular Wait (الانتظار الدائري)", "Load Balancing (توازن الحمل)", "Hold and Wait (الاحتفاظ والانتظار)"], correctIndex: 2,
      answer: "Load Balancing (توازن الحمل).",
      explanation: "توازن الحمل (Load Balancing) مفهوم غير مرتبط إطلاقًا بشروط حدوث الجمود؛ الشروط الأربعة الفعلية هي: Mutual Exclusion وHold and Wait وNo Preemption وCircular Wait. يجب توفر الأربعة معًا لحدوث جمود فعلي، وكسر أي واحد منها فقط كافٍ لمنعه بالكامل.",
      bestPractices: ["احفظ الشروط الأربعة الحقيقية جيدًا (Mutual Exclusion, Hold and Wait, No Preemption, Circular Wait) لأنها تظهر كثيرًا في مقابلات الأنظمة"],
      commonMistakes: ["الخلط بين مفاهيم أداء عامة (مثل Load Balancing) ومفاهيم تزامن محددة (مثل شروط الجمود)"],
      followups: [], similar: ["كيف تكتشف الجمود بعد وقوعه (Deadlock Detection) عبر رسم بياني لانتظار الموارد؟"]
    },
    {
      id: "os-tf-1", title: "صح أو خطأ: كل الخيوط داخل نفس العملية تتشارك نفس مساحة الذاكرة", difficulty: "medium", domain: "Operating Systems", type: "tf", timeMinutes: 1,
      question: "صح أم خطأ: كل الخيوط (threads) التي تنتمي لنفس العملية (process) تتشارك نفس مساحة الذاكرة (بما فيها المتغيرات العامة والكومة heap)، لكن لكل خيط مكدسه (stack) الخاص به.",
      isTrue: true,
      answer: "صح.",
      explanation: "هذا هو الفرق الجوهري بين الخيوط والعمليات: الخيوط 'خفيفة' لأنها تتشارك أغلب موارد الذاكرة (الكومة heap والمتغيرات العامة والملفات المفتوحة) مع بقية خيوط نفس العملية، ولا ينفرد كل خيط إلا بمكدسه (stack) الخاص لتتبع استدعاءات الدوال المحلية له، وسجلات المعالج (registers) الخاصة بحالته. هذا يجعل إنشاء خيط أرخص بكثير (من ناحية الذاكرة والوقت) من إنشاء عملية كاملة جديدة، لكنه يفرض ضرورة التزامن الصريح عند الوصول للبيانات المشتركة.",
      bestPractices: ["استغل هذه المشاركة للتواصل السريع بين الخيوط، لكن احمِ أي بيانات مشتركة بآليات تزامن مناسبة دائمًا"],
      commonMistakes: [], followups: ["كيف يختلف إنشاء Thread عن إنشاء Process من ناحية التكلفة الفعلية (fork مقابل pthread_create)؟"], similar: ["ما هو Context Switching وكيف يختلف تكلفته بين تبديل خيطين مقابل تبديل عمليتين؟"]
    },
    {
      id: "os-3", title: "ما الفرق بين Mutex وSemaphore؟", difficulty: "hard", domain: "Operating Systems", type: "open", timeMinutes: 5,
      question: "اشرح الفرق بين Mutex وSemaphore كأدوات لتزامن الوصول للموارد المشتركة.",
      answer: "Mutex (Mutual Exclusion) قفل ثنائي بسيط: إما مُقفَل أو مفتوح، ويسمح لخيط واحد بالضبط بالوصول للمورد المحمي في أي لحظة؛ الخيط الذي يحصل على القفل هو نفسه من يجب أن يُحرّره (ملكية واضحة). Semaphore عداد أكثر عمومية يسمح لعدد محدد مسبقًا (n) من الخيوط بالوصول المتزامن للمورد في نفس الوقت (وليس واحدًا فقط بالضرورة)؛ عندما تصل قيمة العداد للصفر، تنتظر أي خيوط إضافية حتى يُحرِّر أحد الخيوط الحالية مكانه.",
      explanation: "استخدم Mutex عندما تحتاج حصرية تامة (واحد فقط في كل مرة) لمورد بسيط مثل متغيّر مشترك أو قسم حرج (critical section). استخدم Semaphore عندما تحتاج التحكم في عدد محدد من الوصول المتزامن، مثل تقييد عدد الاتصالات المتزامنة بقاعدة بيانات إلى 10 كحد أقصى (Counting Semaphore بقيمة ابتدائية 10)، أو Semaphore الثنائي (binary semaphore بقيمة 0 أو 1) الذي يتصرف مشابهًا لـ Mutex لكن دون قيد 'من يملك القفل يجب أن يُحرّره'.",
      bestPractices: ["استخدم Mutex للحصرية البسيطة (خيط واحد فقط)، وSemaphore عندما تحتاج تحديد عدد أكبر من واحد للوصول المتزامن المسموح"],
      commonMistakes: ["استخدام Semaphore حيث يكفي Mutex بسيط، مما يُضيف تعقيدًا غير ضروري دون فائدة فعلية"],
      followups: ["ما هو Deadlock المحتمل عند سوء استخدام semaphores متعددة معًا؟"], similar: ["ما هو Monitor كتجريد أعلى مستوى فوق Mutex وCondition Variables؟"]
    },
    {
      id: "os-mcq-2", title: "ما هو الغرض من الذاكرة الافتراضية (Virtual Memory)؟", difficulty: "medium", domain: "Operating Systems", type: "mcq", timeMinutes: 2,
      question: "ما الهدف الأساسي من الذاكرة الافتراضية (Virtual Memory) في أنظمة التشغيل الحديثة؟",
      options: ["تسريع المعالج مباشرة", "منح كل عملية وهم امتلاك مساحة ذاكرة كبيرة ومعزولة، مع عزلها عن بقية العمليات", "زيادة سعة القرص الصلب فعليًا", "تقليل استهلاك الكهرباء"], correctIndex: 1,
      answer: "منح كل عملية وهم امتلاك مساحة ذاكرة كبيرة ومعزولة، مع عزلها عن بقية العمليات.",
      explanation: "الذاكرة الافتراضية تمنح كل عملية مساحة عناوين (address space) خاصة بها تبدو متصلة وكبيرة، بينما يُدير نظام التشغيل فعليًا تعيين (mapping) أجزاء صغيرة منها (صفحات pages) بين ذاكرة RAM الفعلية والقرص عبر آلية Paging، بشفافية كاملة عن البرنامج. هذا يوفر أيضًا عزلاً أمنيًا مهمًا: عملية واحدة لا يمكنها الوصول مباشرة لذاكرة عملية أخرى، لأن كل عملية ترى فقط 'عالمها الافتراضي' الخاص.",
      bestPractices: ["افهم أن Virtual Memory هي أساس العزل بين العمليات (process isolation) وليست فقط 'امتدادًا' للذاكرة الفعلية"],
      commonMistakes: ["الاعتقاد بأن الذاكرة الافتراضية تزيد الذاكرة الفعلية المتاحة فعليًا دون أي تكلفة أداء، متجاهلين تكلفة Page Faults عند الحاجة لجلب صفحة من القرص"],
      followups: [], similar: ["ما هو Page Fault، ومتى يحدث؟"]
    },
    {
      id: "os-4", title: "ما الفرق بين Zombie Process وOrphan Process؟", difficulty: "hard", domain: "Operating Systems", type: "open", timeMinutes: 4,
      question: "اشرح الفرق بين العملية الزومبي (Zombie Process) والعملية اليتيمة (Orphan Process) في أنظمة Unix/Linux.",
      answer: "العملية الزومبي هي عملية انتهت تنفيذها بالفعل (أنهت كل عملها) لكن لا تزال موجودة في جدول العمليات لأن عمليتها الأب (parent) لم تقرأ بعد رمز الخروج (exit status) الخاص بها عبر استدعاء wait()؛ تبقى الزومبي 'حجزًا' فارغًا في الجدول حتى يقرأ الأب ذلك الرمز. العملية اليتيمة هي عملية لا تزال قيد التنفيذ الفعلي، لكن عمليتها الأب انتهت أو ماتت قبلها؛ نظام التشغيل يتبناها تلقائيًا عبر ربطها بعملية init (أو systemd) كأب جديد، فتستمر بالعمل بشكل طبيعي دون أن تصبح زومبي.",
      explanation: "الفرق الجوهري: الزومبي 'ميتة بالفعل' لكن عالقة إداريًا بانتظار الأب، بينما اليتيمة 'لا تزال حية' لكن فقدت أباها الأصلي. تراكم عمليات زومبي كثيرة (نادرًا ما يحدث لعملية واحدة، لكن قد يتكرر إن كان للأب خلل برمجي في عدم استدعاء wait() بانتظام) يستهلك مساحة في جدول العمليات (عدد محدود من إدخالات PID)، وقد يمنع إنشاء عمليات جديدة إذا امتلأ الجدول بالكامل بزومبي عالقة.",
      bestPractices: ["تأكد من أن أي عملية أب تستدعي wait() أو waitpid() بانتظام لتنظيف عمليات ابنة انتهت، لتفادي تراكم عمليات زومبي"],
      commonMistakes: ["إنشاء عمليات ابنة (fork) متكررة دون استدعاء wait() لاحقًا لتنظيفها، مما يُراكم عمليات زومبي بمرور الوقت"],
      followups: ["كيف يتبنى init/systemd العمليات اليتيمة تلقائيًا؟"], similar: ["ما هو fork() وكيف ينشئ عملية ابنة جديدة في Unix؟"]
    },
    {
      id: "os-mcq-3", title: "ما هو Thrashing في أنظمة التشغيل؟", difficulty: "hard", domain: "Operating Systems", type: "mcq", timeMinutes: 2,
      question: "ما هو Thrashing، ومتى يحدث في نظام يستخدم الذاكرة الافتراضية؟",
      options: ["تسريع النظام بشكل مفاجئ", "قضاء النظام معظم وقته في تبديل صفحات (paging) بدلاً من تنفيذ عمل فعلي، بسبب نقص شديد في الذاكرة الفعلية", "توقف الشبكة عن العمل", "زيادة سرعة القرص الصلب"], correctIndex: 1,
      answer: "قضاء النظام معظم وقته في تبديل صفحات (paging) بدلاً من تنفيذ عمل فعلي، بسبب نقص شديد في الذاكرة الفعلية.",
      explanation: "Thrashing يحدث عندما يكون عدد العمليات النشطة ومتطلباتها من الذاكرة أكبر بكثير من الذاكرة الفعلية (RAM) المتاحة، فيضطر نظام التشغيل لتبديل صفحات (pages) بين RAM والقرص باستمرار وبمعدل عالٍ جدًا لخدمة كل عملية، مما يستهلك معظم وقت المعالج في عمليات تبديل الصفحات البطيئة بدلاً من تنفيذ العمل الفعلي المفيد، فيتباطأ النظام بشكل حاد جدًا وقد يبدو 'متجمدًا' تمامًا رغم أنه يعمل تقنيًا.",
      bestPractices: ["راقب معدل Page Faults كمؤشر مبكر على اقتراب Thrashing، وأضف ذاكرة فعلية أو قلّل عدد العمليات المتزامنة عند اكتشافه"],
      commonMistakes: ["تشغيل عدد كبير جدًا من العمليات/التطبيقات الثقيلة في نفس الوقت على جهاز بذاكرة محدودة، مما يُسبب Thrashing يجعل كل شيء أبطأ بدلاً من إنجاز المزيد بالتوازي"],
      followups: [], similar: ["كيف تختار خوارزمية استبدال الصفحات (Page Replacement) المناسبة (مثل LRU) لتقليل احتمال Thrashing؟"]
    },
    {
      id: "os-5", title: "ما الفرق بين Multithreading وMultiprocessing؟", difficulty: "medium", domain: "Operating Systems", type: "open", timeMinutes: 4,
      question: "ما الفرق بين تعدد الخيوط (Multithreading) وتعدد العمليات (Multiprocessing)؟",
      answer: "Multithreading يُنفّذ عدة خيوط داخل نفس العملية الواحدة، تتشارك جميعها نفس مساحة الذاكرة، مما يجعل التواصل بينها سريعًا لكنه يتطلب تزامنًا حذرًا لتفادي race conditions. Multiprocessing يُشغّل عدة عمليات منفصلة تمامًا، كل واحدة بمساحة ذاكرة معزولة خاصة بها؛ التواصل بينها يتطلب آليات اتصال بين العمليات (IPC) أبطأ نسبيًا (مثل الأنابيب أو الذاكرة المشتركة الصريحة)، لكن عزلها الكامل يعني أن تعطّل عملية واحدة (crash) لا يُسقط بقية العمليات الأخرى.",
      explanation: "الاختيار العملي يعتمد على طبيعة المهمة: للمهام المرتبطة بالإدخال/الإخراج (I/O-bound) التي تحتاج تشارك بيانات كثيرة بسرعة، Multithreading أنسب. للمهام الحسابية الثقيلة (CPU-bound) التي تحتاج استغلال عدة أنوية معالج بالتوازي الحقيقي (خصوصًا في لغات مثل بايثون المقيَّدة بـ GIL على مستوى الخيوط)، Multiprocessing يوفر توازيًا حقيقيًا أفضل، مع تكلفة إضافية في استهلاك الذاكرة والوقت لإنشاء كل عملية منفصلة.",
      bestPractices: ["استخدم Multithreading للمهام I/O-bound التي تحتاج تشارك حالة بسرعة، وMultiprocessing للمهام CPU-bound التي تحتاج توازيًا حسابيًا حقيقيًا عبر عدة أنوية"],
      commonMistakes: ["استخدام Multithreading لمهام CPU-bound ثقيلة في لغات مقيَّدة بقفل عام (مثل GIL في بايثون)، فلا تحصل على أي تسريع حقيقي رغم استخدام عدة خيوط"],
      followups: ["كيف يتغلب Multiprocessing على قيد GIL في بايثون تحديدًا؟"], similar: ["ما الفرق بين Concurrency وParallelism بشكل عام؟"]
    },
    {
      id: "os-mcq-4", title: "أي خوارزمية جدولة CPU تُعطي كل عملية شريحة زمنية متساوية بالتناوب؟", difficulty: "medium", domain: "Operating Systems", type: "mcq", timeMinutes: 1,
      question: "أي خوارزمية جدولة معالج (CPU Scheduling) تُعطي كل عملية جاهزة شريحة زمنية ثابتة بالتناوب الدائري؟",
      options: ["First Come First Served (FCFS)", "Shortest Job First (SJF)", "Round Robin", "Priority Scheduling"], correctIndex: 2,
      answer: "Round Robin",
      explanation: "Round Robin يُعطي كل عملية جاهزة شريحة زمنية ثابتة (time quantum) للتنفيذ، ثم ينتقل للعملية التالية في الطابور بالتناوب الدائري بغض النظر عن أولويتها أو مدة تنفيذها الكلية، مما يضمن عدالة نسبية بين كل العمليات ويمنع 'تجويع' (starvation) أي عملية طويلة الانتظار. هذا يختلف عن FCFS (تنفيذ حسب ترتيب الوصول دون مقاطعة) وShortest Job First (أولوية للعمليات الأقصر تنفيذًا) وPriority Scheduling (أولوية حسب أهمية محددة مسبقًا).",
      bestPractices: ["اختر Round Robin لأنظمة تفاعلية (interactive systems) تحتاج استجابة عادلة وسريعة لكل المستخدمين/العمليات، مع ضبط حجم الشريحة الزمنية بعناية (صغيرة جدًا تزيد تكلفة تبديل السياق، كبيرة جدًا تقلل الاستجابة الفورية)"],
      commonMistakes: ["اختيار شريحة زمنية غير مناسبة لـ Round Robin (صغيرة جدًا تجعل تكلفة تبديل السياق المتكرر تفوق الفائدة، أو كبيرة جدًا فيتصرف النظام كأنه FCFS تقريبًا)"],
      followups: [], similar: ["ما هي مشكلة Starvation، وأي خوارزميات جدولة عرضة لها أكثر من غيرها؟"]
    },
  ]
},

/* ======================================================================
   Flutter
   ====================================================================== */
{
  id: "flutter",
  name: "Flutter",
  icon: "🦋",
  intro: "Flutter من أسرع أطر عمل تطوير التطبيقات نموًا لبناء تطبيقات iOS وAndroid من كود واحد. المقابلات تركّز على الفلسفة الأساسية 'كل شيء Widget'، والفرق بين StatelessWidget وStatefulWidget، وفهم كيف تُدار الحالة (State) وتُعاد بناء الواجهة بكفاءة.",
  concepts: [
    { title: "كل شيء Widget", body: "في Flutter، حتى الحشو (Padding) والمحاذاة (Alignment) والألوان هي Widgets، وليست فقط الأزرار والنصوص. واجهة التطبيق بأكملها هي شجرة متداخلة من Widgets، ما يجعل التركيب (composition) هو الأداة الأساسية لبناء أي تصميم معقد." },
    { title: "StatelessWidget مقابل StatefulWidget", body: "StatelessWidget لا يحمل أي حالة داخلية قابلة للتغيير بعد إنشائه؛ يُعاد بناؤه فقط عند تغيّر بيانات الأب. StatefulWidget يحمل كائن State منفصل يمكنه استدعاء setState() لإعادة بناء نفسه محليًا عند تغيّر بياناته الداخلية." },
    { title: "Hot Reload مقابل Hot Restart", body: "Hot Reload يُحقن الكود المُعدَّل مباشرة في التطبيق قيد التشغيل مع الحفاظ على الحالة الحالية (state) لمعاينة فورية للتغييرات. Hot Restart يُعيد تشغيل التطبيق بالكامل من الصفر، فاقدًا كل الحالة الحالية، لكنه ضروري عند تغييرات لا يستطيع Hot Reload التقاطها (مثل تغيير متغيرات عامة أو دالة main)." }
  ],
  questions: [
    {
      id: "flutter-1", title: "ما الفرق بين StatelessWidget وStatefulWidget؟", difficulty: "easy", domain: "Flutter", type: "open", timeMinutes: 4,
      question: "متى تستخدم StatelessWidget ومتى تستخدم StatefulWidget في Flutter؟",
      answer: "StatelessWidget مناسب لأي جزء من الواجهة لا يحتاج تغيير نفسه داخليًا بمرور الوقت بعد إنشائه؛ يُعاد بناؤه فقط عندما يتغيّر شيء في الـ widget الأب الذي يحتويه. StatefulWidget مناسب عندما يحتاج ذلك الجزء تتبع بيانات داخلية قابلة للتغيير بمرور الوقت نتيجة تفاعل المستخدم أو بيانات واردة، مثل عداد يزداد عند الضغط على زر.",
      explanation: "الفرق التقني الجوهري: StatefulWidget مرتبط بكائن State منفصل تمامًا يحمل البيانات القابلة للتغيير ويستدعي setState() لإخبار Flutter بضرورة إعادة بناء واجهة ذلك الـ widget. الفصل بين الـ Widget نفسه (immutable) وكائن الـ State (قابل للتغيير) يسمح لـ Flutter بإنشاء widget جديد في كل إعادة بناء دون فقدان الحالة الفعلية.",
      example: "class Counter extends StatefulWidget {\n  @override\n  State<Counter> createState() => _CounterState();\n}\n\nclass _CounterState extends State<Counter> {\n  int count = 0;\n\n  @override\n  Widget build(BuildContext context) {\n    return ElevatedButton(\n      onPressed: () => setState(() => count++),\n      child: Text('العدد: $count'),\n    );\n  }\n}",
      bestPractices: ["استخدم StatelessWidget كخيار افتراضي، وانتقل لـ StatefulWidget فقط عند الحاجة الفعلية لتتبع حالة داخلية"],
      commonMistakes: ["تعديل متغيّر حالة مباشرة دون استدعاء setState()، مما يُغيّر القيمة داخليًا لكن لا يُحدّث الواجهة المعروضة"],
      followups: ["ما هو BuildContext ولماذا يُمرَّر لكل دالة build؟"], similar: ["كيف تُدار الحالة على مستوى تطبيق كامل (Provider أو Riverpod)؟"]
    },
    {
      id: "flutter-2", title: "ما الفرق بين Hot Reload وHot Restart؟", difficulty: "easy", domain: "Flutter", type: "open", timeMinutes: 3,
      question: "لماذا يُعتبر Hot Reload من أهم ميزات إنتاجية Flutter، وما الفرق بينه وبين Hot Restart؟",
      answer: "Hot Reload يُحقن الكود المُعدَّل مباشرة داخل الآلة الافتراضية لـ Dart قيد التشغيل، مع الحفاظ الكامل على الحالة الحالية. أما Hot Restart فيُعيد تشغيل التطبيق بالكامل من الصفر، فاقدًا كل الحالة الحالية، لكنه ضروري عند تغييرات لا يستطيع Hot Reload التقاطها.",
      explanation: "Hot Reload يُغيّر تجربة التطوير جذريًا مقارنة بأطر عمل الجوال الأصلية. لكن له حدود: لا يعمل بشكل موثوق مع تغييرات في المتغيرات الثابتة العامة، أو دالة main()، وفي هذه الحالات يجب اللجوء لـ Hot Restart.",
      bestPractices: ["استخدم Hot Reload للتكرار السريع، وHot Restart عند تعديل بنية أساسية للكود"],
      commonMistakes: ["الاعتماد فقط على Hot Reload دون تجربة Full Restart عند ظهور سلوك غريب"],
      followups: ["كيف يعمل Hot Reload تقنيًا داخل Dart VM؟"], similar: ["ما الفرق بين debug mode وrelease mode في Flutter؟"]
    },
    {
      id: "flutter-mcq-1", title: "أي Widget يُستخدم لعرض قائمة قابلة للتمرير؟", difficulty: "easy", domain: "Flutter", type: "mcq", timeMinutes: 1,
      question: "أي Widget في Flutter هو الأنسب لعرض قائمة طويلة من العناصر قابلة للتمرير؟",
      options: ["Column", "Row", "ListView", "Container"], correctIndex: 2,
      answer: "ListView",
      explanation: "ListView مصمم خصيصًا لعرض قوائم قابلة للتمرير، ويدعم ListView.builder الذي يُنشئ العناصر بشكل كسول عند الحاجة للعرض فقط. أما Column فتُرتّب عناصرها عموديًا دون أي تمرير مدمج.",
      bestPractices: ["استخدم ListView.builder للقوائم الطويلة أو غير معروفة الطول مسبقًا"],
      commonMistakes: ["استخدام Column مع قائمة طويلة دون تمرير مما يُسبب خطأ overflow"],
      followups: [], similar: ["ما الفرق بين ListView وGridView؟"]
    },
    {
      id: "flutter-tf-1", title: "صح أو خطأ: يمكن لـ StatelessWidget أن يحتوي حالة داخلية قابلة للتغيير", difficulty: "medium", domain: "Flutter", type: "tf", timeMinutes: 1,
      question: "صح أم خطأ: يمكن لـ StatelessWidget أن يحمل متغيّرات داخلية يُغيّرها بنفسه بمرور الوقت ويعكس ذلك في الواجهة تلقائيًا.",
      isTrue: false,
      answer: "خطأ.",
      explanation: "StatelessWidget غير قابل لحمل أي حالة داخلية قابلة للتغيير ذاتيًا؛ كل بياناته تأتي فقط كمعاملات يُمرِّرها الأب وقت الإنشاء. أي حاجة لتتبع حالة داخلية تتغيّر بمرور الوقت تتطلب التحويل لـ StatefulWidget.",
      bestPractices: ["إذا احتجت لمتغيّر يتغيّر بمرور الوقت داخل StatelessWidget، حوّله لـ StatefulWidget أو استخدم إدارة حالة خارجية"],
      commonMistakes: [], followups: [], similar: ["كيف تُدار الحالة المشتركة بين عدة widgets بعيدة عن بعضها؟"]
    },
    {
      id: "flutter-3", title: "ما هو BuildContext في Flutter؟", difficulty: "medium", domain: "Flutter", type: "open", timeMinutes: 4,
      question: "ما هو BuildContext الذي يُمرَّر لكل دالة build، وما الغرض منه؟",
      answer: "BuildContext هو مرجع لموقع widget معيّن ضمن شجرة الـ widgets الكاملة للتطبيق؛ يمثّل 'أين أنا الآن' في تلك الشجرة. يُستخدم للوصول لمعلومات أو خدمات متاحة عبر الشجرة اعتمادًا على الموقع، مثل الوصول لأقرب Theme أو MediaQuery (لمعرفة أبعاد الشاشة) أو Navigator (للتنقّل بين الصفحات) أو أي Provider/InheritedWidget أعلى في الشجرة.",
      explanation: "نقطة مهمة كثيرًا ما تُسبب أخطاء للمبتدئين: BuildContext الذي يحصل عليه widget معيّن يشير لموقعه هو في الشجرة، لا لموقع أي widget آخر. هذا يفسر خطأ شائع: استخدام Navigator.of(context) داخل دالة onPressed لكن مع context قديم أو من موقع خاطئ في الشجرة، مما يُسبب أخطاء 'context غير صحيح' أو سلوكًا غير متوقع، خصوصًا بعد إزالة widget من الشجرة (context أصبح 'ميتًا' لكنه لا يزال محفوظًا في متغيّر ما).",
      example: "Widget build(BuildContext context) {\n  final theme = Theme.of(context); // يبحث لأعلى الشجرة من موقع context هذا\n  final screenWidth = MediaQuery.of(context).size.width;\n  return Text('العرض: $screenWidth', style: theme.textTheme.bodyLarge);\n}",
      bestPractices: ["احرص على استخدام context الصحيح المرتبط بالموقع الفعلي الذي تحتاج البحث منه في الشجرة، خصوصًا داخل دوال متأخرة التنفيذ مثل callbacks"],
      commonMistakes: ["استخدام context بعد أن أصبح widget المرتبط به غير موجود في الشجرة (unmounted)، مما يُسبب أخطاء أو سلوكًا غير متوقع خصوصًا في عمليات async"],
      followups: ["ما هو mounted property وكيف يُستخدم لتفادي استخدام context بعد إزالة widget؟"], similar: ["كيف يعمل InheritedWidget للبحث لأعلى شجرة الـ widgets بكفاءة؟"]
    },
    {
      id: "flutter-mcq-2", title: "أي دالة تُستدعى مرة واحدة فقط عند إنشاء StatefulWidget؟", difficulty: "medium", domain: "Flutter", type: "mcq", timeMinutes: 1,
      question: "أي دالة من دورة حياة StatefulWidget تُستدعى مرة واحدة فقط، فور إنشاء كائن State وقبل أول استدعاء لـ build؟",
      options: ["build()", "initState()", "dispose()", "setState()"], correctIndex: 1,
      answer: "initState()",
      explanation: "initState() تُستدعى مرة واحدة فقط طوال عمر كائن State، مباشرة بعد إنشائه وقبل أول رسم (build)؛ مثالية لتهيئة قيم أولية، الاشتراك في مستمعين (listeners)، أو بدء طلبات شبكة تحتاج التنفيذ مرة واحدة فقط عند ظهور الـ widget لأول مرة. أما build() فتُستدعى مرارًا وتكرارًا مع كل إعادة رسم، بينما dispose() تُستدعى مرة واحدة عند إزالة الـ widget نهائيًا لتحرير أي موارد.",
      bestPractices: ["استخدم initState() للتهيئة التي تحدث مرة واحدة فقط، وتجنّب استدعاء setState() مباشرة داخلها (استخدم القيمة الابتدائية مباشرة بدلًا من ذلك)"],
      commonMistakes: ["وضع منطق تهيئة يعتمد على context كامل (مثل InheritedWidget.of(context)) داخل initState() مباشرة، رغم أن context قد لا يكون جاهزًا بالكامل في تلك اللحظة (يُفضَّل didChangeDependencies لهذه الحالة)"],
      followups: [], similar: ["ما هو دور dispose() ولماذا يجب إلغاء الاشتراكات فيه؟"]
    },
    {
      id: "flutter-4", title: "لماذا يحتاج Flutter لثلاث أشجار: Widget وElement وRenderObject؟", difficulty: "hard", domain: "Flutter", type: "open", timeMinutes: 5,
      question: "لماذا يحتفظ Flutter داخليًا بثلاث أشجار منفصلة (Widget Tree, Element Tree, RenderObject Tree) بدلاً من شجرة واحدة فقط؟",
      answer: "شجرة الـ Widgets خفيفة الوزن وغير قابلة للتغيير (immutable)، تُعاد إنشاؤها بالكامل في كل استدعاء build (وصف تعريفي 'كيف يجب أن تبدو الواجهة'). شجرة الـ Elements هي الجسر الدائم بين الطرفين: تحتفظ بحالة الـ widget عبر إعادة البناء المتكررة، وتقارن الشجرة الجديدة بالقديمة لتحديد ما تغيّر فعليًا. شجرة الـ RenderObjects هي المسؤولة عن الحسابات الفعلية للتخطيط (layout) والرسم (painting) على الشاشة.",
      explanation: "هذا الفصل الثلاثي يسمح لـ Flutter بأداء عالٍ جدًا: بما أن Widgets خفيفة وتُعاد إنشاؤها باستمرار (كل استدعاء build ينشئ widgets جديدة تمامًا)، فإن التكلفة الحقيقية تكمن فقط في تحديث RenderObjects الفعلية عند الحاجة، والتي لا تُعاد إنشاؤها إن لم يتغيّر شيء جوهري؛ عنصر Element يقارن الـ widget الجديد بالقديم (بنفس النوع والمفتاح key) ويُحدّث RenderObject الموجود بدلاً من إعادة إنشائه بالكامل، موفرًا أداءً كبيرًا مقارنة بإعادة بناء كل شيء من الصفر في كل رسم.",
      bestPractices: ["افهم أن كتابة widgets جديدة في كل build() أمر طبيعي ورخيص في Flutter، فالتكلفة الحقيقية تُدار عبر Element وRenderObject تلقائيًا"],
      commonMistakes: ["القلق المفرط من 'إنشاء widgets جديدة' في كل build ظنًا أنها مكلفة كإنشاء كائنات ثقيلة، بينما هي في الحقيقة خفيفة جدًا ومصممة لهذا الغرض تحديدًا"],
      followups: ["كيف يستخدم عنصر Element خاصية Key لتحديد أي widget قديم يطابق أي widget جديد عند إعادة الترتيب؟"], similar: ["ما هو دور Key في Flutter تحديدًا، ولماذا يُطلب عند رسم قوائم؟"]
    },
    {
      id: "flutter-mcq-3", title: "لماذا نحتاج Key عند رسم قائمة عناصر قابلة لإعادة الترتيب في Flutter؟", difficulty: "medium", domain: "Flutter", type: "mcq", timeMinutes: 2,
      question: "لماذا يُنصَح بإضافة Key فريد لكل عنصر عند رسم قائمة widgets قابلة لإعادة الترتيب أو الحذف في Flutter؟",
      options: ["لتحسين شكل الخط فقط", "لمساعدة Flutter على تمييز أي widget قديم يطابق أي widget جديد بعد إعادة الترتيب، بدلاً من الاعتماد على الموضع فقط", "لأنها إلزامية دائمًا على كل widget بلا استثناء", "لتسريع تحميل الصور فقط"], correctIndex: 1,
      answer: "لمساعدة Flutter على تمييز أي widget قديم يطابق أي widget جديد بعد إعادة الترتيب.",
      explanation: "بدون Key، يُطابق Flutter الـ widgets القديمة والجديدة بناءً على النوع والموضع (index) في القائمة فقط؛ إذا أُعيد ترتيب عناصر القائمة (مثل سحب عنصر لأعلى)، قد يُطابق Flutter widget في موضع معيّن مع widget مختلف تمامًا كان في نفس الموضع سابقًا، مما يُسبب فقدان حالة داخلية (مثل قيمة حقل إدخال) أو حركات انتقالية (animations) خاطئة. إضافة Key فريد (مثل ValueKey مبني على معرّف العنصر الفعلي) يضمن أن Flutter يتتبع كل عنصر بهويته الحقيقية بدلاً من موضعه فقط.",
      bestPractices: ["أضف ValueKey أو ObjectKey مبني على معرّف فريد حقيقي للعنصر (وليس index القائمة) عند رسم قوائم قابلة لإعادة الترتيب أو الحذف"],
      commonMistakes: ["استخدام index القائمة كـ Key، وهو نفس المشكلة تمامًا بدون Key أصلاً لأنه يتغيّر مع كل إعادة ترتيب"],
      followups: [], similar: ["ما الفرق بين ValueKey وObjectKey وUniqueKey؟"]
    },
    {
      id: "flutter-5", title: "ما هو FutureBuilder في Flutter؟", difficulty: "medium", domain: "Flutter", type: "open", timeMinutes: 4,
      question: "ما هو FutureBuilder، وكيف يُبسّط عرض بيانات قادمة من عملية غير متزامنة (مثل طلب شبكة)؟",
      answer: "FutureBuilder هو widget يأخذ Future (عملية غير متزامنة ستُنتج قيمة في المستقبل) ودالة builder، ويعيد رسم نفسه تلقائيًا بناءً على حالة ذلك الـ Future الحالية: أثناء الانتظار (waiting)، بعد النجاح (data)، أو بعد الفشل (error). هذا يُغني عن إدارة حالة يدوية معقدة (متغيرات isLoading وdata وerrorMessage منفصلة) لعرض بيانات قادمة من عملية غير متزامنة واحدة.",
      explanation: "بدون FutureBuilder، يحتاج المطور عادة استخدام StatefulWidget مع عدة متغيرات حالة يدوية لتتبع كل مرحلة (جاري التحميل، نجح، فشل)، واستدعاء setState() يدويًا عند اكتمال العملية. FutureBuilder يُغلّف كل هذا التعقيد تلقائيًا، ويكفي فحص snapshot.connectionState وsnapshot.hasData وsnapshot.hasError داخل دالة builder لعرض الواجهة المناسبة لكل حالة.",
      example: "FutureBuilder<String>(\n  future: fetchUserName(), // دالة تُرجع Future<String>\n  builder: (context, snapshot) {\n    if (snapshot.connectionState == ConnectionState.waiting) {\n      return CircularProgressIndicator();\n    } else if (snapshot.hasError) {\n      return Text('خطأ: ${snapshot.error}');\n    } else {\n      return Text('مرحبًا ${snapshot.data}');\n    }\n  },\n)",
      bestPractices: ["استخدم FutureBuilder لعمليات غير متزامنة تُنفَّذ مرة واحدة (مثل طلب أولي)، وStreamBuilder لبيانات مستمرة تتحدث بمرور الوقت"],
      commonMistakes: ["استدعاء دالة Future مباشرة داخل دالة build() في كل مرة (مثل future: fetchUserName() بدون تخزينها مسبقًا في initState)، مما يُعيد تنفيذ الطلب من جديد في كل إعادة رسم غير مقصودة"],
      followups: ["كيف تتفادى مشكلة إعادة تنفيذ Future في كل rebuild؟"], similar: ["ما هو StreamBuilder وكيف يختلف عن FutureBuilder؟"]
    },
    {
      id: "flutter-mcq-4", title: "أي حزمة إدارة حالة شائعة جدًا في مجتمع Flutter؟", difficulty: "easy", domain: "Flutter", type: "mcq", timeMinutes: 1,
      question: "أي من التالي حزمة (package) شائعة جدًا لإدارة الحالة في تطبيقات Flutter، بديلاً عن استخدام setState وحده في تطبيقات كبيرة؟",
      options: ["http", "Provider", "path_provider", "shared_preferences"], correctIndex: 1,
      answer: "Provider",
      explanation: "Provider حزمة شائعة جدًا (وموصى بها رسميًا من فريق Flutter لفترة طويلة) لإدارة الحالة ومشاركتها عبر شجرة widgets كاملة دون الحاجة لتمرير بيانات يدويًا عبر عدة مستويات (prop drilling)، مبنية فوق InheritedWidget مع واجهة أبسط. http وshared_preferences وpath_provider حزم مفيدة أيضًا لكن لأغراض مختلفة تمامًا (طلبات شبكة، تخزين محلي بسيط، الوصول لمسارات الملفات على النظام).",
      bestPractices: ["استخدم Provider (أو بدائل أحدث مثل Riverpod) لإدارة حالة مشتركة بين عدة أجزاء بعيدة من التطبيق، وsetState المحلي لحالة خاصة بمكوّن واحد فقط"],
      commonMistakes: ["استخدام setState فقط في تطبيق كبير مع حالة مشتركة معقدة، مما يُجبر على تمرير بيانات وcallbacks عبر مستويات كثيرة جدًا من الـ widgets (prop drilling مفرط)"],
      followups: [], similar: ["ما الفرق بين Provider وRiverpod وBloc كخيارات إدارة حالة مختلفة؟"]
    },
  ]
},

/* ======================================================================
   Dart
   ====================================================================== */
{
  id: "dart",
  name: "Dart",
  icon: "🎯",
  intro: "Dart هي اللغة التي يُبنى بها Flutter، وتتميز بميزة الأمان من القيم الفارغة (Null Safety) القوية، ونموذج برمجة غير متزامنة عبر Future وStream. المقابلات تركّز على فهمك لهذه الميزات الحديثة.",
  concepts: [
    { title: "Sound Null Safety", body: "منذ Dart 2.12، كل نوع بيانات غير قابل لحمل null افتراضيًا، ما لم يُعلَن صراحة بإضافة ? بعد النوع. هذا يمنع فئة كاملة من الأخطاء وقت الترجمة بدلاً من وقت التشغيل." },
    { title: "Future وStream", body: "Future يمثّل قيمة واحدة ستكون متاحة في المستقبل. Stream يمثّل سلسلة من القيم المتعددة عبر الزمن." },
    { title: "Mixins", body: "طريقة لإعادة استخدام كود فئة في عدة تسلسلات هرمية مختلفة دون وراثة تقليدية، عبر الكلمة المفتاحية with." }
  ],
  questions: [
    {
      id: "dart-1", title: "اشرح Null Safety في Dart", difficulty: "medium", domain: "Dart", type: "open", timeMinutes: 4,
      question: "كيف يعمل Sound Null Safety في Dart، وما الفرق بين ? و! في التعامل مع القيم التي قد تكون null؟",
      answer: "أي نوع بيانات لا يمكن أن يحمل null افتراضيًا، ما لم تُضِف علامة ? بعد اسم النوع صراحة. علامة ! تُخبر المترجم 'أنا متأكد أن هذه القيمة ليست null الآن'، وإن كانت خاطئة فعليًا، يُطلق البرنامج استثناءً وقت التشغيل فورًا.",
      explanation: "هذا النظام يمنع فئة كاملة من الأخطاء الشهيرة جدًا (مثل NullPointerException) عبر اكتشافها وقت الترجمة بدلاً من وقت التشغيل في الإنتاج.",
      example: "String? name;\n// print(name.length); // خطأ ترجمة!\n\nif (name != null) {\n  print(name.length); // آمن الآن\n}\n\nprint(name!.length); // ! تفترض أنها ليست null - خطر",
      bestPractices: ["تجنّب استخدام ! قدر الإمكان، وفضّل فحص if أو عامل ??"],
      commonMistakes: ["الإفراط في استخدام ! في كل مكان لتجاوز تحذيرات المترجم بسرعة"],
      followups: ["ما الفرق بين ?? وعامل ??= في Dart؟"], similar: ["كيف يقارن Null Safety في Dart بـ Optional في Swift أو Kotlin؟"]
    },
    {
      id: "dart-2", title: "ما الفرق بين Future وStream؟", difficulty: "medium", domain: "Dart", type: "open", timeMinutes: 4,
      question: "متى تستخدم Future ومتى تستخدم Stream في Dart؟",
      answer: "Future يمثّل قيمة واحدة فقط ستكون متاحة في المستقبل. أما Stream فيمثّل سلسلة من عدة قيم قد تصل بمرور الوقت، مناسب لأحداث متكررة أو بيانات مستمرة.",
      explanation: "اختيار الأداة الخاطئة يُجبرك على حلول ملتفة غير طبيعية، بينما اختيار Stream المناسب يجعل التعامل مع البيانات المستمرة أنظف بكثير.",
      example: "Future<String> fetchUserName() async {\n  await Future.delayed(Duration(seconds: 1));\n  return 'سارة';\n}\n\nStream<int> countStream() async* {\n  for (int i = 1; i <= 5; i++) {\n    await Future.delayed(Duration(seconds: 1));\n    yield i;\n  }\n}",
      bestPractices: ["استخدم Future لعمليات نتيجتها الواحدة، وStream لأي بيانات متكررة أو مستمرة"],
      commonMistakes: ["محاولة استخدام Future بشكل متكرر لمحاكاة سلوك Stream"],
      followups: ["ما هو StreamController؟"], similar: ["كيف يتعامل StreamBuilder في Flutter مع تحديثات Stream؟"]
    },
    {
      id: "dart-mcq-1", title: "أي عامل في Dart يُعطي قيمة افتراضية عند null؟", difficulty: "easy", domain: "Dart", type: "mcq", timeMinutes: 1,
      question: "أي عامل في Dart يُستخدم لإعطاء قيمة افتراضية بديلة إذا كانت القيمة الأصلية null؟",
      options: ["!", "??", "?.", "as"], correctIndex: 1,
      answer: "?? (Null-coalescing operator)",
      explanation: "name ?? 'ضيف' يُرجع قيمة name إن لم تكن null، وإلا يُرجع 'ضيف'. أما ?. فيُستخدم للوصول لخاصية بأمان فقط إذا لم يكن الكائن null.",
      bestPractices: ["استخدم ?? لتوفير قيم افتراضية آمنة بدلاً من فحوصات if != null المطولة"],
      commonMistakes: ["الخلط بين ?? و?."],
      followups: [], similar: ["ما هو عامل ??= ومتى يُستخدم؟"]
    },
    {
      id: "dart-tf-1", title: "صح أو خطأ: const وfinal كلاهما يمنعان إعادة الإسناد لكن const يُقيَّم وقت الترجمة", difficulty: "medium", domain: "Dart", type: "tf", timeMinutes: 1,
      question: "صح أم خطأ: كل من const وfinal في Dart يمنعان إعادة إسناد المتغيّر، لكن const يجب أن تُعرف وقت الترجمة بينما final يمكن أن تُحسب وقت التشغيل.",
      isTrue: true,
      answer: "صح.",
      explanation: "final x = someFunction() صحيح حتى لو كانت القيمة لا تُعرف إلا وقت التشغيل. أما const فمخصصة للقيم الثابتة المعروفة مسبقًا فقط.",
      bestPractices: ["استخدم const للقيم الثابتة المعروفة مسبقًا، وfinal لأي قيمة أخرى تُحسب وقت التشغيل"],
      commonMistakes: ["محاولة استخدام const مع قيمة تعتمد على استدعاء دالة وقت التشغيل"],
      followups: [], similar: ["ما الفرق بين var وfinal؟"]
    },
    {
      id: "dart-3", title: "ما هو Mixin في Dart؟", difficulty: "hard", domain: "Dart", type: "open", timeMinutes: 4,
      question: "ما هو Mixin في Dart، وكيف يسمح بإعادة استخدام كود بين فئات غير مرتبطة وراثيًا؟",
      answer: "Mixin طريقة لإعادة استخدام مجموعة من الدوال والخصائص عبر عدة فئات مختلفة تمامًا وغير مرتبطة بتسلسل وراثي واحد، عبر الكلمة المفتاحية with. بعكس الوراثة العادية (extends) التي تسمح بفئة أب واحدة فقط، يمكن لفئة واحدة استخدام (with) عدة mixins معًا في نفس الوقت، فتحصل على كل الدوال والخصائص المُعرَّفة في كل mixin دون الحاجة لتسلسل هرمي وراثي معقد.",
      explanation: "مثال عملي: لو أردت أن تشترك فئتا Bird وFish (غير مرتبطتين وراثيًا، إحداهما تطير والأخرى تسبح) في سلوك مشترك مثل التسجيل (Logging) أو القدرة على الحركة (Movable)، يمكن تعريف mixin واحد يحتوي هذا السلوك المشترك، وتطبيقه عبر with على كل فئة تحتاجه، بدلاً من تكرار نفس الكود في كل فئة على حدة، أو اللجوء لوراثة معقدة غير منطقية فقط لمشاركة ذلك السلوك.",
      example: "mixin Flyable {\n  void fly() => print('يطير في السماء');\n}\nmixin Swimmable {\n  void swim() => print('يسبح في الماء');\n}\n\nclass Duck with Flyable, Swimmable { } // يحصل على كليهما معًا\n\nvar duck = Duck();\nduck.fly();\nduck.swim();",
      bestPractices: ["استخدم mixins لسلوك مشترك عابر لتسلسلات وراثية مختلفة تمامًا، وليس كبديل عام عن الوراثة العادية عند وجود علاقة 'is-a' واضحة"],
      commonMistakes: ["الإفراط في استخدام عدد كبير جدًا من mixins على فئة واحدة، مما يُصعّب تتبع مصدر كل دالة أو خاصية معيّنة"],
      followups: ["ما الفرق بين mixin وabstract class في Dart من ناحية القدرات المسموحة؟"], similar: ["كيف تستخدم on clause لتقييد أي فئات يمكنها استخدام mixin معيّن؟"]
    },
    {
      id: "dart-mcq-2", title: "ما الفرق بين async وasync* في دالة Dart؟", difficulty: "hard", domain: "Dart", type: "mcq", timeMinutes: 2,
      question: "دالة معرَّفة بـ async تُرجع Future، ماذا تُرجع دالة معرَّفة بـ async* بدلاً من ذلك؟",
      options: ["Future أيضًا", "Stream", "void دائمًا", "لا فرق، نفس الشيء"], correctIndex: 1,
      answer: "Stream",
      explanation: "async* (مع النجمة) تُعرِّف 'دالة مولّدة' (generator function) غير متزامنة تُرجع Stream بدلاً من Future، وتستخدم yield بدلاً من return لإنتاج قيم متعددة واحدة تلو الأخرى بمرور الوقت. أما async العادية (بدون نجمة) فتُرجع Future يمثّل قيمة واحدة نهائية فقط، وتستخدم await للانتظار وreturn للإرجاع.",
      bestPractices: ["استخدم async* عندما تحتاج إنتاج عدة قيم متتالية عبر الزمن، وasync العادية لعملية تُنتج نتيجة واحدة فقط"],
      commonMistakes: ["الخلط بين async (Future، نتيجة واحدة) وasync* (Stream، عدة نتائج) عند تصميم دالة غير متزامنة جديدة"],
      followups: [], similar: ["كيف تستخدم yield* لتفويض التوليد لـ Stream آخر بالكامل؟"]
    },
    {
      id: "dart-4", title: "ما هو Factory Constructor في Dart؟", difficulty: "hard", domain: "Dart", type: "open", timeMinutes: 4,
      question: "ما الفرق بين الباني العادي (Constructor) والباني المصنعي (Factory Constructor) في Dart؟",
      answer: "الباني العادي يُنشئ دائمًا كائنًا جديدًا في كل استدعاء عبر new (ضمنيًا في Dart الحديثة). الباني المصنعي (المُعرَّف بكلمة factory) يمنحك تحكمًا كاملاً في القيمة المُعادة: يمكنه إعادة كائن موجود بالفعل مسبقًا (بدلاً من إنشاء واحد جديد دائمًا)، أو إعادة نسخة من فئة فرعية مختلفة بناءً على شرط معيّن، أو تطبيق منطق Singleton (إعادة نفس الكائن دائمًا).",
      explanation: "الاستخدام الكلاسيكي الأشهر هو تطبيق Singleton Pattern: باني مصنعي يتحقق أولاً إن كان الكائن قد أُنشئ من قبل، وإن كان كذلك يُعيد نفس الكائن الموجود بدلاً من إنشاء نسخة جديدة. استخدام آخر شائع هو 'باني مصنعي' يقرأ بيانات JSON ويقرر بناءً على محتواها أي فئة فرعية محددة يجب إنشاؤها فعليًا (مثل تحويل JSON لفئة Cat أو Dog بناءً على حقل 'type' في البيانات).",
      example: "class Logger {\n  static final Logger _instance = Logger._internal();\n  factory Logger() {\n    return _instance; // يُعيد نفس الكائن دائمًا (Singleton)\n  }\n  Logger._internal(); // باني خاص، لا يُستدعى مباشرة من الخارج\n}\n\nvar a = Logger();\nvar b = Logger();\nprint(identical(a, b)); // true - نفس الكائن بالضبط",
      bestPractices: ["استخدم factory constructor عندما تحتاج منطقًا يقرر أي كائن يُعاد فعليًا، وليس مجرد إنشاء كائن جديد دائمًا بلا شرط"],
      commonMistakes: ["استخدام factory constructor عندما يكفي باني عادي بسيط، مما يُضيف تعقيدًا غير ضروري لحالة لا تحتاجه"],
      followups: ["كيف يُستخدم factory constructor لتحويل JSON لفئات فرعية مختلفة (Polymorphic Deserialization)؟"], similar: ["ما الفرق بين factory constructor وnamed constructor في Dart؟"]
    },
    {
      id: "dart-mcq-3", title: "أي عامل في Dart يُستخدم لدمج عناصر مجموعة داخل مجموعة أخرى؟", difficulty: "medium", domain: "Dart", type: "mcq", timeMinutes: 1,
      question: "أي عامل في Dart يسمح بدمج (نشر) عناصر قائمة موجودة مباشرة داخل تعريف قائمة جديدة؟",
      options: ["&&", "...", "??", "=>"], correctIndex: 1,
      answer: "... (Spread Operator)",
      explanation: "عامل ... (spread) يأخذ كل عناصر مجموعة موجودة (list أو set أو map) ويُدرجها مباشرة كعناصر مستقلة داخل تعريف مجموعة جديدة، بدلاً من إدراج المجموعة نفسها ككائن واحد متداخل. مفيد جدًا لدمج عدة قوائم معًا أو إضافة عناصر لقائمة موجودة بشكل غير قابل للتغيير (immutable) دون حلقات يدوية.",
      bestPractices: ["استخدم ... لدمج قوائم بأسلوب تعبيري موجز بدلاً من حلقات addAll يدوية متكررة"],
      commonMistakes: ["نسيان عامل ... عند محاولة دمج قائمة داخل أخرى، مما يُدرج القائمة كعنصر واحد متداخل بدلاً من دمج عناصرها الفردية"],
      followups: [], similar: ["ما هو Collection if وCollection for في Dart؟"]
    },
    {
      id: "dart-5", title: "ما هي Extension Methods في Dart؟", difficulty: "hard", domain: "Dart", type: "open", timeMinutes: 4,
      question: "ما هي Extension Methods في Dart، وكيف تسمح بإضافة دوال لفئات موجودة مسبقًا دون تعديلها؟",
      answer: "Extension Methods تسمح بإضافة دوال جديدة لفئة موجودة بالفعل (حتى فئات مدمجة في اللغة نفسها مثل String أو int، أو فئات من مكتبات خارجية لا تملك التحكم في كودها المصدري) دون الحاجة لوراثة تلك الفئة أو تعديل كودها الأصلي مباشرة. تُعرَّف عبر الكلمة المفتاحية extension، وتُستخدم كأنها دالة أصلية موجودة على تلك الفئة تمامًا.",
      explanation: "الفائدة العملية الكبرى: لو أردت إضافة دالة مساعدة (مثل capitalize() لتحويل أول حرف لحرف كبير) على فئة String المدمجة في اللغة، لا يمكنك تعديل كود String نفسه مباشرة (فهو جزء من اللغة الأساسية)؛ Extension Method تحل هذه المشكلة بأناقة، فتسمح بكتابة myString.capitalize() وكأنها دالة أصلية موجودة على String منذ البداية، رغم أنها في الحقيقة دالة أضفتها أنت خارجيًا.",
      example: "extension StringExtension on String {\n  String capitalize() {\n    if (isEmpty) return this;\n    return this[0].toUpperCase() + substring(1);\n  }\n}\n\nprint('hello'.capitalize()); // 'Hello' - يعمل وكأنه أصلي في String",
      bestPractices: ["استخدم Extension Methods لإضافة دوال مساعدة منطقية لفئات موجودة (خاصة بك أو من مكتبات خارجية) بدلاً من إنشاء دوال مساعدة منفصلة تأخذ الكائن كمعامل"],
      commonMistakes: ["الإفراط في إضافة extensions كثيرة جدًا وغير مترابطة منطقيًا على نفس النوع، مما يجعل تتبع مصدر كل دالة (أصلية أم extension مُضافة) أصعب"],
      followups: ["كيف تتعامل Dart مع تعارض اسم extension method مع دالة أصلية موجودة بالفعل على نفس الفئة؟"], similar: ["كيف تقارن Extension Methods في Dart بميزات مشابهة في لغات أخرى (مثل Extension Functions في Kotlin)؟"]
    },
    {
      id: "dart-mcq-4", title: "ما الفرق بين List وSet في Dart؟", difficulty: "easy", domain: "Dart", type: "mcq", timeMinutes: 1,
      question: "ما الفرق الجوهري بين List وSet في Dart؟",
      options: ["لا فرق، مترادفان تمامًا", "List يسمح بعناصر مكررة ويحافظ على الترتيب، بينما Set يمنع التكرار تلقائيًا", "Set أسرع دائمًا في كل العمليات", "List فقط للأرقام، Set فقط للنصوص"], correctIndex: 1,
      answer: "List يسمح بعناصر مكررة ويحافظ على ترتيب الإدراج، بينما Set يمنع أي عنصر مكرر تلقائيًا (ولا يضمن ترتيبًا معينًا في التطبيقات العامة).",
      explanation: "List مجموعة مرتبة تسمح بتكرار نفس القيمة عدة مرات، وتحافظ على ترتيب إضافة العناصر، مناسبة عندما يهمك الترتيب أو قد تحتاج قيمًا مكررة. Set مجموعة تضمن عدم تكرار أي عنصر تلقائيًا (إضافة عنصر موجود بالفعل لا تُغيّر شيئًا)، وتُستخدم عندما يهمك فقط 'هل هذا العنصر موجود أم لا' دون اهتمام بالتكرار أو الترتيب، مع أداء بحث أسرع عادة (O(1) في المتوسط) مقارنة بالبحث في List (O(n)).",
      bestPractices: ["استخدم Set عندما تحتاج فقط ضمان عدم التكرار وبحثًا سريعًا عن وجود عنصر، وList عندما يهمك الترتيب أو تحتاج للسماح بتكرار متعمد"],
      commonMistakes: ["استخدام List مع فحص يدوي متكرر (contains) لمنع التكرار بنفسك، بينما Set يوفر هذا السلوك تلقائيًا وبأداء أفضل"],
      followups: [], similar: ["كيف تحوّل List إلى Set والعكس في Dart لإزالة التكرار بسرعة؟"]
    },
  ]
},

/* ======================================================================
   Database (مفاهيم عامة)
   ====================================================================== */
{
  id: "database",
  name: "Database",
  icon: "🗃️",
  intro: "بعيدًا عن تفاصيل SQL نفسها، هذا القسم يغطي مفاهيم قواعد البيانات العامة: الفرق بين SQL وNoSQL، نظرية CAP، واستراتيجيات التوسع (Sharding وReplication).",
  concepts: [
    { title: "SQL مقابل NoSQL", body: "قواعد بيانات SQL تُخزّن البيانات في جداول ذات مخطط ثابت وتدعم ACID كاملاً. قواعد بيانات NoSQL أكثر مرونة في المخطط، وتنقسم لأنواع (مستندات، مفتاح-قيمة، أعمدة، رسوم بيانية)." },
    { title: "نظرية CAP", body: "في نظام موزّع، لا يمكن ضمان أكثر من اثنتين من: Consistency وAvailability وPartition Tolerance معًا دائمًا." },
    { title: "Sharding مقابل Replication", body: "Sharding يُقسّم البيانات أفقيًا عبر عدة خوادم. Replication يُنسخ نفس البيانات بالكامل على عدة خوادم لزيادة التوافر." }
  ],
  questions: [
    {
      id: "db-1", title: "متى تختار SQL ومتى تختار NoSQL؟", difficulty: "medium", domain: "Database", type: "open", timeMinutes: 5,
      question: "ما هي العوامل التي تجعلك تختار قاعدة بيانات SQL بدلًا من NoSQL، والعكس؟",
      answer: "اختر SQL عندما تحتاج علاقات معقدة ومتسقة، ضمانات ACID كاملة، ومخطط بيانات ثابت. اختر NoSQL عندما تحتاج مرونة عالية في شكل البيانات، وقابلية توسع أفقي هائلة.",
      explanation: "كثير من الأنظمة الحديثة تستخدم كليهما معًا (Polyglot Persistence): SQL لبيانات المعاملات الحرجة، وNoSQL لبيانات أخرى مناسبة لطبيعتها.",
      bestPractices: ["حلّل نمط الوصول لبياناتك قبل اختيار نوع قاعدة البيانات"],
      commonMistakes: ["اختيار NoSQL فقط لأنه 'أحدث وأسرع' دون تحليل حقيقي"],
      followups: ["ما هي الأنواع الأربعة الرئيسية لقواعد NoSQL؟"], similar: ["ما هو Polyglot Persistence؟"]
    },
    {
      id: "db-2", title: "اشرح نظرية CAP", difficulty: "hard", domain: "Database", type: "open", timeMinutes: 5,
      question: "ما هي نظرية CAP، ولماذا لا يمكن لنظام موزّع ضمان الخصائص الثلاث معًا؟",
      answer: "لا يمكن لأي نظام موزّع ضمان أكثر من اثنتين من: Consistency وAvailability وPartition Tolerance معًا عند حدوث انقسام شبكي. بما أن P حتمية عمليًا، الاختيار الفعلي يكون بين C وA.",
      explanation: "مثال: عند انقطاع الاتصال بين مركزي بيانات، يجب على النظام أن يقرر رفض الطلبات (CP) أو الاستمرار بخدمتها رغم احتمال تضارب (AP).",
      bestPractices: ["افهم متطلبات تطبيقك قبل اختيار قاعدة بيانات موزّعة تُفضّل CP أو AP"],
      commonMistakes: ["الاعتقاد بأن يمكن اختيار الخصائص الثلاث معًا بشكل كامل"],
      followups: ["كيف ترتبط نظرية CAP بمفهوم Eventual Consistency؟"], similar: ["ما هو BASE كبديل فلسفي لـ ACID؟"]
    },
    {
      id: "db-mcq-1", title: "أي من التالي مثال على قاعدة بيانات NoSQL من نوع مستندات؟", difficulty: "easy", domain: "Database", type: "mcq", timeMinutes: 1,
      question: "أي من قواعد البيانات التالية هي مثال على 'قاعدة بيانات مستندات'؟",
      options: ["MySQL", "MongoDB", "PostgreSQL", "Oracle"], correctIndex: 1,
      answer: "MongoDB",
      explanation: "MongoDB تُخزّن البيانات كمستندات بصيغة BSON، حيث كل مستند يمكن أن يحمل بنية مختلفة، بعكس MySQL وPostgreSQL وOracle العلائقية.",
      bestPractices: ["استخدم قواعد المستندات عندما تكون بياناتك أقرب لكائنات متداخلة مرنة الشكل"],
      commonMistakes: ["افتراض أن MongoDB 'أسرع دائمًا' دون تحليل نمط الاستخدام"],
      followups: [], similar: ["ما هي أمثلة قواعد 'مفتاح-قيمة' مثل Redis؟"]
    },
    {
      id: "db-tf-1", title: "صح أو خطأ: Sharding يعني تقسيم البيانات أفقيًا عبر عدة خوادم", difficulty: "medium", domain: "Database", type: "tf", timeMinutes: 1,
      question: "صح أم خطأ: Sharding تقنية تُقسّم البيانات أفقيًا عبر عدة خوادم، بعكس Replication التي تنسخ كل البيانات على كل خادم.",
      isTrue: true,
      answer: "صح.",
      explanation: "في Sharding يُقسَّم جدول ضخم بحيث لا يحمل أي خادم كل البيانات. أما Replication فتُنسخ نفس البيانات بالكامل لزيادة التوافر وتحسين أداء القراءة.",
      bestPractices: ["استخدم Sharding عند تجاوز حجم البيانات سعة خادم واحد، وReplication لزيادة التوافر"],
      commonMistakes: ["الخلط بين الاثنين"],
      followups: ["ما هو مفتاح التقسيم (Shard Key)؟"], similar: ["ما هو Master-Slave Replication؟"]
    },
    {
      id: "db-3", title: "ما هو التطبيع (Normalization) في قواعد البيانات؟", difficulty: "medium", domain: "Database", type: "open", timeMinutes: 5,
      question: "ما هو التطبيع (Normalization)، واشرح باختصار الفرق بين 1NF و2NF و3NF.",
      answer: "التطبيع عملية تنظيم جداول قاعدة البيانات لتقليل التكرار (redundancy) وتفادي شذوذ التحديث (update anomalies)، عبر تقسيم البيانات لجداول مترابطة بدلاً من جدول واحد ضخم يكرر نفس المعلومات. 1NF (Normal Form الأولى) تتطلب أن تحتوي كل خانة قيمة ذرية واحدة فقط (لا قوائم أو قيم متعددة في خانة واحدة). 2NF تتطلب تحقيق 1NF بالإضافة لعدم وجود أي عمود يعتمد على جزء فقط من مفتاح مركّب (partial dependency). 3NF تتطلب تحقيق 2NF بالإضافة لعدم وجود أي عمود يعتمد على عمود آخر غير مفتاحي بدلاً من الاعتماد المباشر على المفتاح الأساسي (transitive dependency).",
      explanation: "مثال عملي: جدول طلبات يحتوي عمودي customer_name وcustomer_email مباشرة مكررين في كل صف طلب لنفس العميل، يخالف مبدأ التطبيع؛ إن غيّر العميل بريده الإلكتروني، يجب تحديث كل صف طلب له سابقًا (شذوذ تحديث). الحل: فصل بيانات العميل في جدول customers منفصل، وربطه بجدول orders عبر customer_id فقط، بحيث يُخزَّن بريد العميل مرة واحدة فقط بغض النظر عن عدد طلباته.",
      bestPractices: ["طبّق التطبيع حتى 3NF على الأقل كقاعدة عامة، ولا 'تُطبّع زائدًا' (denormalize) إلا لأسباب أداء مدروسة فعليًا في استعلامات قراءة كثيفة"],
      commonMistakes: ["تكرار نفس البيانات (مثل اسم العميل الكامل) في عدة جداول أو صفوف، مما يخلق شذوذ تحديث عند تغيّر تلك البيانات لاحقًا"],
      followups: ["متى يكون Denormalization (التطبيع العكسي) قرارًا معقولاً لتحسين أداء القراءة؟"], similar: ["ما هو BCNF (Boyce-Codd Normal Form) وكيف يتشدد أكثر من 3NF؟"]
    },
    {
      id: "db-mcq-2", title: "أي نوع فهرس يشمل أكثر من عمود واحد؟", difficulty: "medium", domain: "Database", type: "mcq", timeMinutes: 1,
      question: "أي نوع من الفهارس (Index) يُبنى على أكثر من عمود واحد معًا؟",
      options: ["Unique Index", "Composite Index (Compound Index)", "Full-text Index", "Primary Key فقط"], correctIndex: 1,
      answer: "Composite Index (فهرس مركّب)",
      explanation: "Composite Index يُبنى على عمودين أو أكثر معًا (مثل (last_name, first_name))، ويكون فعالاً جدًا للاستعلامات التي تُصفّي أو ترتّب حسب تلك الأعمدة معًا بنفس الترتيب، لكنه أقل فائدة (أو عديم الفائدة) لاستعلامات تستخدم العمود الثاني فقط دون الأول، بسبب طريقة تخزين B-Tree الداخلية التي تعتمد على ترتيب الأعمدة في تعريف الفهرس.",
      bestPractices: ["رتّب أعمدة Composite Index حسب أكثرها استخدامًا في شروط WHERE بمفرده أولاً (العمود الأكثر انتقائية أو الأكثر استخدامًا في الفلترة المستقلة)"],
      commonMistakes: ["إنشاء Composite Index بترتيب أعمدة لا يتطابق مع نمط الاستعلامات الفعلي، مما يجعل الفهرس عديم الفائدة لكثير من الاستعلامات رغم وجوده"],
      followups: [], similar: ["ما هو Covering Index وكيف يُسرّع الاستعلامات أكثر؟"]
    },
    {
      id: "db-4", title: "ما هو View في قاعدة البيانات؟", difficulty: "medium", domain: "Database", type: "open", timeMinutes: 3,
      question: "ما هو View (العرض) في قواعد البيانات العلائقية، وما فائدته العملية؟",
      answer: "View هو استعلام SQL محفوظ تحت اسم معيّن، يُعامَل كأنه جدول افتراضي (virtual table) عند الاستعلام عنه، لكنه لا يُخزّن أي بيانات فعلية بنفسه؛ في كل مرة يُستعلَم عن View، يُنفَّذ الاستعلام الأصلي المحفوظ خلفه مجددًا على الجداول الحقيقية ويُعاد الناتج. هذا يسمح بتبسيط استعلامات معقدة متكررة (مثل JOIN بين عدة جداول) خلف اسم بسيط يُستخدم لاحقًا وكأنه جدول عادي.",
      explanation: "الفوائد العملية: تبسيط الاستعلامات المعقدة المتكررة (بدلاً من كتابة نفس الـ JOIN المعقد في كل مكان، تستعلم فقط عن View جاهز)، إخفاء تعقيد البنية الداخلية عن مستخدمين آخرين (يرون فقط الأعمدة المهمة لهم دون تفاصيل الجداول الأصلية)، وتوفير طبقة أمان (يمكن منح صلاحية القراءة من View فقط دون منح وصول مباشر للجداول الحساسة تحته).",
      example: "CREATE VIEW active_customers AS\nSELECT c.id, c.name, COUNT(o.id) as order_count\nFROM customers c\nJOIN orders o ON c.id = o.customer_id\nWHERE c.status = 'active'\nGROUP BY c.id, c.name;\n\n-- لاحقًا، استعلام بسيط بدلاً من تكرار الـ JOIN المعقد:\nSELECT * FROM active_customers WHERE order_count > 5;",
      bestPractices: ["استخدم Views لتبسيط استعلامات معقدة متكررة، أو لتوفير طبقة أمان تُقيّد ما يراه مستخدمون معيّنون من البيانات"],
      commonMistakes: ["الاعتقاد بأن View يُخزّن نسخة من البيانات فعليًا (كما Materialized View)، بينما View العادي يُعيد تنفيذ الاستعلام الأصلي في كل مرة دون تخزين أي نتائج"],
      followups: ["ما الفرق بين View العادي وMaterialized View من ناحية الأداء والتخزين؟"], similar: ["كيف تُحدَّث بيانات عبر View، وما قيوده؟"]
    },
    {
      id: "db-mcq-3", title: "أي نوع قواعد بيانات NoSQL الأنسب لتخزين علاقات معقدة بين كيانات؟", difficulty: "medium", domain: "Database", type: "mcq", timeMinutes: 1,
      question: "أي نوع من قواعد بيانات NoSQL هو الأنسب لتخزين واستعلام علاقات معقدة جدًا بين كيانات متشابكة (مثل شبكة اجتماعية)؟",
      options: ["Document Database (مثل MongoDB)", "Key-Value Store (مثل Redis)", "Graph Database (مثل Neo4j)", "Column Store (مثل Cassandra)"], correctIndex: 2,
      answer: "Graph Database (مثل Neo4j)",
      explanation: "قواعد بيانات الرسوم البيانية (Graph Databases) مصممة خصيصًا لتخزين عقد (nodes) وعلاقات (relationships/edges) بينها بكفاءة عالية جدًا، واستعلام أنماط علاقات معقدة (مثل 'أصدقاء أصدقاء' في شبكة اجتماعية) بسرعة تفوق بكثير محاولة محاكاة نفس العلاقات عبر JOINs متعددة في قاعدة SQL علائقية تقليدية، أو عبر مستندات متداخلة في قاعدة مستندات.",
      bestPractices: ["استخدم Graph Database عندما تكون العلاقات نفسها (وليس فقط الكيانات) هي محور الاستعلامات الأساسية لتطبيقك (شبكات اجتماعية، أنظمة توصية، كشف احتيال)"],
      commonMistakes: ["محاولة محاكاة علاقات شبكية معقدة جدًا (مثل شبكة اجتماعية كاملة) في قاعدة SQL علائقية عبر جداول ربط متعددة، مما يُبطئ الاستعلامات بشكل كبير مقارنة بقاعدة رسوم بيانية مخصصة"],
      followups: [], similar: ["ما هي أمثلة تطبيقات عملية شائعة لقواعد بيانات الرسوم البيانية؟"]
    },
    {
      id: "db-5", title: "ما الفرق بين Optimistic وPessimistic Locking؟", difficulty: "hard", domain: "Database", type: "open", timeMinutes: 5,
      question: "ما الفرق بين القفل المتفائل (Optimistic Locking) والقفل المتشائم (Pessimistic Locking) عند التعامل مع تحديثات متزامنة؟",
      answer: "القفل المتشائم يحجز قفلاً فعليًا على الصف قبل قراءته للتعديل، مانعًا أي معاملة أخرى من قراءة أو تعديل نفس الصف حتى تُحرِّر المعاملة الحالية القفل؛ هذا يضمن عدم حدوث تعارض إطلاقًا، لكنه يُقلّل التزامن (concurrency) لأن معاملات أخرى تنتظر. القفل المتفائل لا يحجز أي قفل فعلي؛ بدلاً من ذلك، يقرأ الصف مع رقم إصدار (version) أو طابع زمني، ويتحقق عند محاولة الحفظ أن ذلك الرقم لم يتغيّر من قبل معاملة أخرى في هذه الأثناء؛ إن تغيّر، تفشل عملية الحفظ ويجب إعادة المحاولة، وإلا تنجح مباشرة دون أي قفل مسبق مُكلف.",
      explanation: "القفل المتفائل مناسب جدًا عندما يكون التعارض الفعلي بين معاملات متزامنة نادر الحدوث إحصائيًا (مثل تعديل ملفات شخصية مختلفة نادرًا ما تتزامن على نفس السجل)، لأنه يوفر أداءً أفضل بغياب أي قفل مُكلف في الحالة الشائعة (لا تعارض). القفل المتشائم أنسب عندما يكون التعارض متوقعًا ومتكررًا (مثل حجز مقعد طيران أخير محدود العدد يتنافس عليه عدة مستخدمين في نفس اللحظة)، حيث تكلفة إعادة المحاولة المتكررة في القفل المتفائل قد تفوق تكلفة القفل المباشر.",
      example: "-- Optimistic: يتحقق من رقم الإصدار عند الحفظ\nUPDATE products SET stock = stock - 1, version = version + 1\nWHERE id = 5 AND version = 3; -- يفشل إن تغيّر version من معاملة أخرى بينهما",
      bestPractices: ["استخدم القفل المتفائل افتراضيًا للأنظمة ذات التعارض النادر لأداء أفضل، والقفل المتشائم فقط للحالات عالية التنافس على موارد محدودة"],
      commonMistakes: ["استخدام القفل المتشائم افتراضيًا في كل مكان دون داعٍ، مما يُقلّل التزامن والأداء الكلي للنظام بلا فائدة تُذكر في حالات التعارض النادر"],
      followups: ["كيف تتعامل مع فشل تكرر في القفل المتفائل (retry loop)؟"], similar: ["كيف يرتبط القفل المتفائل بمفهوم Compare-And-Swap في البرمجة المتزامنة عمومًا؟"]
    },
    {
      id: "db-mcq-4", title: "ما هو Stored Procedure في قاعدة البيانات؟", difficulty: "medium", domain: "Database", type: "mcq", timeMinutes: 1,
      question: "ما هو Stored Procedure في قواعد البيانات العلائقية؟",
      options: ["جدول مؤقت يُحذف تلقائيًا", "مجموعة أوامر SQL محفوظة تحت اسم داخل قاعدة البيانات، يمكن استدعاؤها كوحدة واحدة", "نوع خاص من الفهارس", "نسخة احتياطية تلقائية من قاعدة البيانات"], correctIndex: 1,
      answer: "مجموعة أوامر SQL محفوظة تحت اسم داخل قاعدة البيانات، يمكن استدعاؤها كوحدة واحدة.",
      explanation: "Stored Procedure هي كتلة من أوامر SQL (قد تتضمن منطقًا شرطيًا وحلقات حسب نظام قاعدة البيانات) تُحفظ وتُجمَّع مسبقًا داخل قاعدة البيانات نفسها تحت اسم معيّن، ويمكن استدعاؤها لاحقًا بسطر واحد بدلاً من إعادة إرسال كل الأوامر من التطبيق في كل مرة. توفر أداءً أفضل قليلاً (مُجمَّعة مسبقًا)، وتقليل حركة الشبكة بين التطبيق وقاعدة البيانات، لكنها تُصعّب اختبار المنطق ومراجعته مقارنة بمنطق مكتوب في كود التطبيق نفسه.",
      bestPractices: ["استخدم Stored Procedures لعمليات دفعية معقدة تُنفَّذ بكثرة وتحتاج أداءً محسَّنًا، لكن وازن ذلك مع صعوبة اختبار وصيانة منطق محفوظ داخل قاعدة البيانات بدلاً من كود التطبيق"],
      commonMistakes: ["وضع منطق أعمال (business logic) معقد جدًا داخل Stored Procedures، مما يُصعّب اختباره ومراجعته ونقله بين بيئات مختلفة مقارنة بكود تطبيق عادي في نظام تحكم بالإصدارات"],
      followups: [], similar: ["ما هو Trigger وكيف يختلف عن Stored Procedure من ناحية التنفيذ التلقائي؟"]
    },
  ]
},

/* ======================================================================
   Networking
   ====================================================================== */
{
  id: "networking",
  name: "Networking",
  icon: "🌐",
  intro: "فهم الشبكات ضروري لتشخيص مشاكل الأداء والاتصال. المقابلات تركّز على الفرق بين TCP وUDP، ماذا يحدث عند كتابة عنوان في المتصفح، وفهم أساسي لنموذج طبقات الشبكة.",
  concepts: [
    { title: "TCP مقابل UDP", body: "TCP موجّه بالاتصال ويضمن وصول البيانات كاملة عبر تأكيدات استلام. UDP بلا اتصال وأسرع لكن لا يضمن الوصول، مناسب للبث المباشر والألعاب." },
    { title: "DNS Resolution", body: "عملية تحويل اسم نطاق إلى عنوان IP عبر سلسلة استعلامات هرمية بين خوادم DNS مختلفة." },
    { title: "TLS Handshake", body: "سلسلة تبادل رسائل بين العميل والخادم لإنشاء اتصال HTTPS آمن، تتضمن تبادل شهادات وإنشاء مفتاح تشفير مشترك." }
  ],
  questions: [
    {
      id: "net-1", title: "ما الفرق بين TCP وUDP؟", difficulty: "medium", domain: "Networking", type: "open", timeMinutes: 4,
      question: "متى تختار بروتوكول TCP ومتى تختار UDP عند تصميم تطبيق شبكي؟",
      answer: "TCP يُنشئ اتصالاً موثوقًا ويضمن وصول كل البايتات بالترتيب الصحيح، لكن بتكلفة زمنية إضافية. UDP لا يضمن الوصول أو الترتيب، لكنه أسرع بكثير.",
      explanation: "TCP مناسب لتصفح الويب والبريد ونقل الملفات. UDP مناسب للبث المباشر والألعاب ومكالمات VoIP حيث السرعة أهم من الدقة الكاملة.",
      bestPractices: ["اختر TCP افتراضيًا، وUDP فقط عندما تكون السرعة أهم من ضمان وصول كل بايت"],
      commonMistakes: ["استخدام UDP لنقل بيانات حساسة دون بناء موثوقية إضافية يدويًا"],
      followups: ["كيف تعمل مصافحة TCP الثلاثية؟"], similar: ["ما هو بروتوكول QUIC؟"]
    },
    {
      id: "net-2", title: "ماذا يحدث عند كتابة عنوان في المتصفح؟", difficulty: "hard", domain: "Networking", type: "open", timeMinutes: 6,
      question: "اشرح السلسلة الكاملة من الأحداث بين كتابة عنوان في المتصفح وظهور الصفحة.",
      answer: "أولاً DNS Resolution لإيجاد IP. ثم اتصال TCP عبر مصافحة ثلاثية. إن كان HTTPS، مصافحة TLS. ثم طلب HTTP GET، معالجة الخادم، استجابة HTML، وأخيرًا تحليل ورسم الصفحة تدريجيًا.",
      explanation: "سؤال كلاسيكي يختبر فهمًا شاملاً يمتد عبر عدة طبقات (DNS، TCP، TLS، HTTP، رسم المتصفح).",
      bestPractices: ["تدرّب على شرح هذا التسلسل بثقة"],
      commonMistakes: ["نسيان ذكر DNS Caching"],
      followups: ["كيف يُحسّن CDN من سرعة هذه العملية؟"], similar: ["ما هو Certificate Authority؟"]
    },
    {
      id: "net-mcq-1", title: "أي منفذ قياسي لبروتوكول HTTPS؟", difficulty: "easy", domain: "Networking", type: "mcq", timeMinutes: 1,
      question: "ما هو رقم المنفذ القياسي الافتراضي لبروتوكول HTTPS؟",
      options: ["80", "21", "443", "8080"], correctIndex: 2,
      answer: "443",
      explanation: "المنفذ 443 هو القياسي لـ HTTPS، بينما 80 لـ HTTP العادي، و21 لـ FTP.",
      bestPractices: ["تذكّر 80 لـ HTTP و443 لـ HTTPS"],
      commonMistakes: ["الخلط بين أرقام المنافذ القياسية"],
      followups: [], similar: ["ما هو منفذ SSH القياسي؟"]
    },
    {
      id: "net-tf-1", title: "صح أو خطأ: TCP بروتوكول موجّه بالاتصال وموثوق", difficulty: "easy", domain: "Networking", type: "tf", timeMinutes: 1,
      question: "صح أم خطأ: بروتوكول TCP موجّه بالاتصال ويضمن وصول البيانات بشكل موثوق وبالترتيب الصحيح.",
      isTrue: true,
      answer: "صح.",
      explanation: "TCP يُنشئ اتصالاً عبر مصافحة ثلاثية، ويستخدم أرقامًا تسلسلية وتأكيدات استلام لضمان وصول كل حزمة بالترتيب الصحيح.",
      bestPractices: ["استخدم TCP عندما يكون ضمان وصول البيانات أهم من زمن الاستجابة"],
      commonMistakes: [], followups: [], similar: ["كيف يتعامل TCP مع ازدحام الشبكة؟"]
    },
    {
      id: "net-3", title: "ما الفرق بين HTTP/1.1 وHTTP/2؟", difficulty: "hard", domain: "Networking", type: "open", timeMinutes: 4,
      question: "ما هي أهم التحسينات التي جاءت مع HTTP/2 مقارنة بـ HTTP/1.1؟",
      answer: "في HTTP/1.1، كل اتصال TCP واحد يمكنه معالجة طلب واحد فقط في كل مرة بالتسلسل (ما لم يستخدم المتصفح عدة اتصالات TCP متوازية للتحايل على هذا القيد)، مما يُسبب ظاهرة 'Head-of-Line Blocking' حيث يعلق طلب بطيء بقية الطلبات خلفه على نفس الاتصال. HTTP/2 يقدّم التعدد (Multiplexing): يمكن إرسال عدة طلبات واستقبال عدة استجابات في نفس الوقت عبر اتصال TCP واحد فقط، مما يُلغي هذه المشكلة تمامًا على مستوى HTTP. كما يقدّم HTTP/2 ضغط الترويسات (Header Compression عبر HPACK) وServer Push (إمكانية أن يرسل الخادم موارد إضافية استباقيًا قبل أن يطلبها العميل صراحة).",
      explanation: "قبل HTTP/2، كانت ممارسة شائعة جدًا تقسيم الملفات الثابتة عبر عدة نطاقات فرعية (domain sharding) لفتح عدة اتصالات TCP متوازية والتحايل على قيد الطلب الواحد لكل اتصال في HTTP/1.1. مع HTTP/2 والتعدد الحقيقي، أصبحت هذه الممارسة غير ضرورية بل ضارة أحيانًا (فتح اتصالات إضافية له تكلفته الخاصة)، وتغيّرت توصيات تحسين الأداء (Performance Best Practices) بناءً على ذلك جذريًا.",
      bestPractices: ["إن كان خادمك يدعم HTTP/2، تجنّب تقنيات domain sharding القديمة المصممة أصلاً للتحايل على قيود HTTP/1.1"],
      commonMistakes: ["الاستمرار بتطبيق تحسينات أداء مصممة لـ HTTP/1.1 (مثل تجميع كل CSS في ملف واحد ضخم) رغم أنها قد لا تكون مثالية مع HTTP/2 الذي يتعامل جيدًا مع ملفات متعددة صغيرة بفضل التعدد"],
      followups: ["ما هي أهم إضافات HTTP/3 المبني على QUIC بدلاً من TCP؟"], similar: ["ما هو Server Push في HTTP/2 ولماذا تراجع استخدامه لاحقًا؟"]
    },
    {
      id: "net-mcq-2", title: "أي بروتوكول يُستخدم لتعيين عنوان IP تلقائيًا لجهاز في الشبكة؟", difficulty: "easy", domain: "Networking", type: "mcq", timeMinutes: 1,
      question: "أي بروتوكول مسؤول عن تعيين عنوان IP تلقائيًا لأي جهاز جديد ينضم لشبكة محلية؟",
      options: ["DNS", "DHCP", "FTP", "SMTP"], correctIndex: 1,
      answer: "DHCP (Dynamic Host Configuration Protocol)",
      explanation: "DHCP يُعيّن عنوان IP تلقائيًا (بالإضافة لإعدادات أخرى مثل بوابة الشبكة وخادم DNS) لأي جهاز ينضم حديثًا للشبكة، دون الحاجة لضبط يدوي لكل جهاز على حدة. أما DNS فيُحوّل أسماء النطاقات لعناوين IP (وظيفة مختلفة تمامًا)، وFTP لنقل الملفات، وSMTP لإرسال البريد الإلكتروني.",
      bestPractices: ["افهم الفرق الجوهري بين DHCP (تعيين عناوين IP) وDNS (ترجمة أسماء لعناوين)، فهما يُخلَط بينهما أحيانًا رغم اختلاف وظيفتهما تمامًا"],
      commonMistakes: ["الخلط بين DHCP وDNS رغم اختلاف وظيفة كل منهما تمامًا"],
      followups: [], similar: ["ما هو الفرق بين عنوان IP ثابت (Static) وديناميكي (Dynamic)؟"]
    },
    {
      id: "net-4", title: "ما الفرق بين Proxy Server وVPN؟", difficulty: "medium", domain: "Networking", type: "open", timeMinutes: 4,
      question: "ما الفرق بين استخدام Proxy Server وVPN من ناحية الخصوصية والتشفير؟",
      answer: "خادم الوكيل (Proxy Server) يُمرر طلباتك عبر خادم وسيط يُخفي عنوان IP الحقيقي عن الوجهة النهائية، لكنه عادة لا يُشفّر حركة المرور بين جهازك والوكيل نفسه (ما لم يكن الاتصال أصلاً HTTPS)، وغالبًا يعمل على مستوى تطبيق واحد فقط (مثل المتصفح). الشبكة الافتراضية الخاصة (VPN) تُنشئ نفقًا (tunnel) مشفّرًا بالكامل بين جهازك وخادم VPN، يُغلّف كل حركة مرور الجهاز (ليس فقط المتصفح) عبر ذلك النفق المشفّر، فيُخفي كلًا من عنوان IP الحقيقي ومحتوى البيانات المتبادلة عن أي طرف يراقب الشبكة المحلية (مثل مزود خدمة الإنترنت أو شبكة واي فاي عامة).",
      explanation: "الفرق العملي المهم: Proxy مناسب لحالات بسيطة مثل تجاوز قيود جغرافية على مستوى تطبيق واحد، لكنه لا يوفر حماية حقيقية للخصوصية إن لم يكن الاتصال أصلاً مشفّرًا. VPN يوفر حماية أشمل بكثير (تشفير كل حركة المرور من الجهاز بأكمله)، ولذا يُفضَّل عند الاتصال بشبكات واي فاي عامة غير موثوقة، حيث يمنع أي طرف على تلك الشبكة من التنصت على بياناتك حتى لو حاول.",
      bestPractices: ["استخدم VPN من مزود موثوق عند الاتصال بشبكات عامة غير آمنة، وProxy فقط لحالات بسيطة لا تتطلب حماية خصوصية حقيقية"],
      commonMistakes: ["الاعتقاد بأن أي Proxy يوفر نفس مستوى الحماية الذي يوفره VPN، رغم أن Proxy العادي غالبًا لا يُشفّر البيانات نفسها"],
      followups: ["كيف يعمل تشفير VPN تحديدًا (مثل بروتوكولات OpenVPN أو WireGuard)؟"], similar: ["ما هو Tor وكيف يختلف عن VPN من ناحية إخفاء الهوية؟"]
    },
    {
      id: "net-mcq-3", title: "ما الميزة الأساسية لـ IPv6 مقارنة بـ IPv4؟", difficulty: "medium", domain: "Networking", type: "mcq", timeMinutes: 1,
      question: "ما هي الميزة الأساسية التي دفعت لتطوير IPv6 بديلاً عن IPv4؟",
      options: ["سرعة أعلى للإنترنت مباشرة", "مساحة عناوين أكبر بكثير جدًا لحل مشكلة نفاد عناوين IPv4", "أمان أعلى تلقائيًا بدون أي إعداد", "تكلفة أرخص للاستضافة"], correctIndex: 1,
      answer: "مساحة عناوين أكبر بكثير جدًا لحل مشكلة نفاد عناوين IPv4.",
      explanation: "IPv4 يستخدم عناوين 32-بت، مما يحد إجمالي العناوين الممكنة لحوالي 4.3 مليار عنوان فقط، وهو رقم أصبح غير كافٍ إطلاقًا مع الانفجار الهائل في عدد الأجهزة المتصلة بالإنترنت (هواتف، أجهزة IoT). IPv6 يستخدم عناوين 128-بت، مما يوفر عددًا هائلاً من العناوين الممكنة (أكبر بكثير من أي حاجة متوقعة في المستقبل المنظور)، بالإضافة لتحسينات أخرى في كفاءة التوجيه (routing) وبعض ميزات الأمان المدمجة اختياريًا.",
      bestPractices: ["افهم أن IPv6 ليس فقط 'ترقية سرعة'، بل حل جذري لمشكلة نفاد مساحة العناوين تحديدًا"],
      commonMistakes: ["الاعتقاد بأن IPv6 يعني تلقائيًا إنترنت أسرع، بينما الفائدة الأساسية هي مساحة العناوين وليست السرعة مباشرة"],
      followups: [], similar: ["كيف يبدو شكل عنوان IPv6 مقارنة بـ IPv4؟"]
    },
    {
      id: "net-5", title: "ما هو Firewall وكيف يحمي الشبكة؟", difficulty: "medium", domain: "Networking", type: "open", timeMinutes: 4,
      question: "ما هو جدار الحماية (Firewall)، وكيف يقرر أي حركة مرور يسمح بها وأيها يحجبها؟",
      answer: "Firewall نظام (برمجي أو مادي) يقف عند حدود الشبكة (أو جهاز فردي) ويفحص حركة المرور الداخلة والخارجة، ويسمح بها أو يحجبها بناءً على مجموعة قواعد محددة مسبقًا، عادة مبنية على عناصر مثل عنوان IP المصدر/الوجهة، رقم المنفذ (Port)، أو البروتوكول المستخدم. الهدف الأساسي هو منع وصول غير مصرَّح به للشبكة الداخلية من الخارج، مع السماح بحركة المرور الشرعية المطلوبة.",
      explanation: "جدران الحماية التقليدية (Packet-filtering) تفحص كل حزمة بيانات بمعزل عن غيرها بناءً على قواعد ثابتة (مثل 'اسمح بالمنفذ 443، احجب كل شيء آخر وارد من الخارج'). جدران حماية أحدث وأذكى (Stateful وNext-Generation Firewalls) تتتبع حالة الاتصالات الكاملة (وليس كل حزمة بمعزل) وتفحص محتوى البيانات نفسها بحثًا عن أنماط هجوم معروفة، وليس فقط عناوين ومنافذ سطحية.",
      bestPractices: ["طبّق مبدأ 'الرفض الافتراضي' (deny by default): احجب كل شيء افتراضيًا، واسمح صراحة فقط بحركة المرور المطلوبة فعليًا (منافذ وخدمات محددة)"],
      commonMistakes: ["فتح منافذ كثيرة جدًا 'احتياطًا' دون حاجة فعلية، مما يوسّع سطح الهجوم المحتمل بلا داعٍ حقيقي"],
      followups: ["ما الفرق بين Firewall وIntrusion Detection System (IDS)؟"], similar: ["ما هو Network Address Translation (NAT) ودوره في حماية الشبكات الداخلية؟"]
    },
    {
      id: "net-mcq-4", title: "ما هو NAT (Network Address Translation)؟", difficulty: "medium", domain: "Networking", type: "mcq", timeMinutes: 2,
      question: "ما هي الوظيفة الأساسية لـ NAT (ترجمة عناوين الشبكة)؟",
      options: ["تشفير كل حركة المرور تلقائيًا", "ترجمة عناوين IP خاصة داخلية إلى عنوان IP عام واحد (أو أكثر) عند الاتصال بالإنترنت الخارجي", "تسريع نقل الملفات", "حجب المواقع الضارة تلقائيًا"], correctIndex: 1,
      answer: "ترجمة عناوين IP خاصة داخلية إلى عنوان IP عام واحد (أو أكثر) عند الاتصال بالإنترنت الخارجي.",
      explanation: "NAT يسمح لعدة أجهزة داخل شبكة محلية واحدة (كل منها بعنوان IP خاص، مثل 192.168.1.x) بمشاركة عنوان IP عام واحد فقط (أو مجموعة صغيرة) عند التواصل مع الإنترنت الخارجي، عبر ترجمة العناوين الخاصة الداخلية لذلك العنوان العام عند الخروج، وترجمة الاستجابات القادمة مرة أخرى للجهاز الداخلي الصحيح الذي طلبها. هذا يحل جزئيًا مشكلة نفاد عناوين IPv4 العامة (لا تحتاج كل شبكة منزلية مليون عنوان عام منفصل)، ويوفر أيضًا طبقة حماية إضافية غير مباشرة (الأجهزة الداخلية غير مرئية مباشرة من الإنترنت الخارجي).",
      bestPractices: ["افهم أن NAT ليس بديلاً كاملاً عن Firewall حقيقي، رغم أنه يوفر عزلاً جزئيًا مفيدًا كأثر جانبي لوظيفته الأساسية"],
      commonMistakes: ["الاعتقاد بأن NAT يوفر أمانًا كاملاً بذاته، بينما هو أساسًا حل لمشكلة نفاد عناوين IP وليس نظام حماية أمني مخصص"],
      followups: [], similar: ["كيف يرتبط NAT بمشكلة نفاد عناوين IPv4 التي حاول IPv6 حلها جذريًا؟"]
    },
  ]
},

/* ======================================================================
   Cyber Security
   ====================================================================== */
{
  id: "cybersecurity",
  name: "Cyber Security",
  icon: "🔒",
  intro: "أمن المعلومات أصبح جزءًا أساسيًا من أي مقابلة تطوير ويب جادة. المقابلات تركّز على أشهر الثغرات (XSS وCSRF)، والفرق بين التشفير والتجزئة.",
  concepts: [
    { title: "XSS", body: "ثغرة تسمح لمهاجم بحقن كود JavaScript خبيث يُنفَّذ في متصفح ضحية آخر، عادة عبر عدم تنظيف مُدخلات المستخدم قبل عرضها." },
    { title: "CSRF", body: "هجوم يخدع متصفح ضحية مسجّل دخوله لإرسال طلب غير مقصود لموقع آخر، ويُمنَع عبر رموز CSRF فريدة." },
    { title: "Hashing مقابل Encryption", body: "التجزئة عملية أحادية الاتجاه غير قابلة للعكس تُستخدم لتخزين كلمات المرور. التشفير عملية ثنائية الاتجاه قابلة للعكس تُستخدم لحماية سرية البيانات." }
  ],
  questions: [
    {
      id: "sec-1", title: "ما هو XSS وكيف تحمي تطبيقك منه؟", difficulty: "medium", domain: "Cyber Security", type: "open", timeMinutes: 4,
      question: "اشرح هجوم XSS، وما هي الاستراتيجية الأساسية للحماية منه؟",
      answer: "XSS يحدث عندما يستطيع مهاجم حقن كود JavaScript خبيث ضمن صفحة يعرضها مستخدمون آخرون، فيُنفَّذ بصلاحيات جلستهم. الحماية الأساسية: لا تثق أبدًا بمُدخل المستخدم، ونظّف أو شفّر المحتوى قبل عرضه.",
      explanation: "أطر العمل الحديثة مثل React تُطبّق التشفير تلقائيًا عند عرض بيانات ديناميكية، مما يحمي من XSS تلقائيًا ما لم يتجاوز المطور هذه الحماية صراحة.",
      example: "// خطر\nelement.innerHTML = userInput;\n\n// آمن\nelement.textContent = userInput;",
      bestPractices: ["استخدم textContent بدلًا من innerHTML، وطبّق Content-Security-Policy"],
      commonMistakes: ["استخدام innerHTML مباشرة مع مُدخلات مستخدم دون تنظيف"],
      followups: ["ما الفرق بين Stored وReflected XSS؟"], similar: ["كيف تساعد CSP في التخفيف من XSS؟"]
    },
    {
      id: "sec-2", title: "ما الفرق بين Hashing وEncryption؟", difficulty: "medium", domain: "Cyber Security", type: "open", timeMinutes: 4,
      question: "لماذا نُخزّن كلمات المرور عبر Hashing وليس Encryption؟",
      answer: "التجزئة عملية أحادية الاتجاه لا يمكن عكسها. التشفير عملية ثنائية الاتجاه يمكن عكسها عبر مفتاح. كلمات المرور تُخزَّن بـ Hashing لأن الخادم لا يحتاج استعادة القيمة الأصلية أبدًا، فقط التحقق من التطابق.",
      explanation: "تسريب مفتاح التشفير يعني كشف كل كلمات المرور فورًا، بينما تسريب hashes (مع salt) يجعل الاستعادة أصعب بكثير.",
      example: "const hash = bcrypt.hashSync('myPassword123', 10);\nbcrypt.compareSync('myPassword123', hash); // true",
      bestPractices: ["استخدم bcrypt أو Argon2 لكلمات المرور، وليس MD5 أو SHA-256 وحدها"],
      commonMistakes: ["استخدام MD5/SHA-256 مباشرة بلا salt لتخزين كلمات المرور"],
      followups: ["ما هو الملح (Salt)؟"], similar: ["ما هو Rainbow Table Attack؟"]
    },
    {
      id: "sec-mcq-1", title: "أي ترويسة HTTP تساعد في التخفيف من XSS؟", difficulty: "medium", domain: "Cyber Security", type: "mcq", timeMinutes: 1,
      question: "أي ترويسة HTTP تتحكم بمصادر المحتوى المسموح تحميلها، مما يُخفف من XSS؟",
      options: ["Cache-Control", "Content-Security-Policy", "X-Frame-Options", "Accept-Language"], correctIndex: 1,
      answer: "Content-Security-Policy (CSP)",
      explanation: "CSP تسمح بتحديد مصادر مسموح تحميل سكربتات منها، فيرفض المتصفح تنفيذ سكربت من مصدر غير مُصرَّح به حتى لو حُقن بنجاح.",
      bestPractices: ["طبّق CSP كطبقة حماية إضافية، وليس بديلاً عن تنظيف المُدخلات"],
      commonMistakes: ["الاعتماد على CSP وحدها كحل كامل لـ XSS"],
      followups: [], similar: ["ما هي X-Frame-Options؟"]
    },
    {
      id: "sec-tf-1", title: "صح أو خطأ: التجزئة عملية قابلة للعكس", difficulty: "easy", domain: "Cyber Security", type: "tf", timeMinutes: 1,
      question: "صح أم خطأ: يمكن عكس نتيجة Hashing رياضيًا للحصول على القيمة الأصلية.",
      isTrue: false,
      answer: "خطأ.",
      explanation: "التجزئة أحادية الاتجاه بتصميمها الرياضي؛ لا توجد دالة عكسية. هذا يختلف عن التشفير المصمم عمدًا ليكون قابلاً للعكس.",
      bestPractices: ["لا تستخدم Hashing لبيانات تحتاج استرجاعها لاحقًا؛ استخدم Encryption"],
      commonMistakes: ["الخلط بين المصطلحين"],
      followups: [], similar: ["ما هو HMAC؟"]
    },
    {
      id: "sec-3", title: "ما هو CSRF وكيف تحمي منه؟", difficulty: "medium", domain: "Cyber Security", type: "open", timeMinutes: 4,
      question: "اشرح هجوم CSRF (Cross-Site Request Forgery)، وما هي طريقة الحماية الشائعة منه؟",
      answer: "CSRF يستغل حقيقة أن المتصفح يُرسل الكوكيز تلقائيًا مع أي طلب لموقع معيّن، بغض النظر عن المصدر الفعلي لذلك الطلب. يخدع المهاجم ضحية مسجّل دخوله بالفعل في موقع (مثل بنكه) لزيارة صفحة خبيثة تحتوي كودًا يُرسل طلبًا تلقائيًا (مثل تحويل أموال) لموقع البنك، فيُرسل المتصفح كوكيز الجلسة الصحيحة تلقائيًا مع ذلك الطلب المزيّف، فيبدو للخادم كأنه طلب شرعي من المستخدم نفسه.",
      explanation: "الحماية الأساسية تعتمد على 'رمز CSRF' (CSRF Token): قيمة عشوائية فريدة يُنشئها الخادم لكل جلسة أو نموذج، ويجب إرسالها مع أي طلب يُغيّر بيانات (مثل POST)؛ بما أن صفحة خبيثة على موقع آخر لا تستطيع معرفة قيمة ذلك الرمز (وهو غير موجود في الكوكيز التي تُرسَل تلقائيًا)، يفشل الطلب المزيّف لغياب الرمز الصحيح رغم إرسال الكوكيز الصحيحة معه. كما تساعد خاصية SameSite على الكوكيز (Strict أو Lax) في منع إرسال الكوكيز أصلاً مع طلبات قادمة من مواقع أخرى.",
      example: "<!-- في النموذج الشرعي، رمز مخفي فريد لكل جلسة -->\n<form action=\"/transfer\" method=\"POST\">\n  <input type=\"hidden\" name=\"csrf_token\" value=\"a1b2c3d4...\">\n  <!-- بقية الحقول -->\n</form>\n<!-- الخادم يرفض أي طلب POST بدون هذا الرمز الصحيح المطابق للجلسة -->",
      bestPractices: ["استخدم CSRF tokens في كل نموذج يُغيّر بيانات، بالإضافة لضبط SameSite=Strict أو Lax على الكوكيز الحساسة"],
      commonMistakes: ["الاعتماد فقط على الكوكيز للمصادقة دون أي رمز CSRF إضافي في النماذج التي تُغيّر بيانات حساسة"],
      followups: ["ما الفرق بين SameSite=Strict وSameSite=Lax؟"], similar: ["كيف يختلف CSRF عن XSS من ناحية آلية الهجوم؟"]
    },
    {
      id: "sec-mcq-2", title: "أي بروتوكول يُستخدم لتشفير الاتصال بين المتصفح والخادم؟", difficulty: "easy", domain: "Cyber Security", type: "mcq", timeMinutes: 1,
      question: "أي بروتوكول مسؤول عن تشفير الاتصال بين متصفح المستخدم وخادم الويب (يظهر كقفل في شريط العنوان)؟",
      options: ["FTP", "TLS/SSL", "SMTP", "DNS"], correctIndex: 1,
      answer: "TLS/SSL (المستخدم في HTTPS)",
      explanation: "TLS (خليفة SSL القديم) يُشفّر البيانات المتبادلة بين المتصفح والخادم، ويتحقق من هوية الخادم عبر شهادة رقمية، مما يمنع أطرافًا أخرى على نفس الشبكة من قراءة أو التلاعب بالبيانات أثناء انتقالها (هجمات Man-in-the-Middle). HTTPS هو ببساطة HTTP يعمل فوق طبقة TLS.",
      bestPractices: ["استخدم HTTPS دائمًا لأي موقع ينقل بيانات حساسة أو حتى بيانات عادية، فالمتصفحات الحديثة تُحذّر المستخدمين من مواقع HTTP العادية"],
      commonMistakes: ["استخدام HTTP العادي (غير مشفّر) لنقل بيانات حساسة مثل كلمات المرور أو بيانات الدفع"],
      followups: [], similar: ["كيف تعمل مصافحة TLS (TLS Handshake) بالتفصيل؟"]
    },
    {
      id: "sec-4", title: "ما هو Two-Factor Authentication (2FA)؟", difficulty: "medium", domain: "Cyber Security", type: "open", timeMinutes: 3,
      question: "ما هو التحقق بخطوتين (2FA)، ولماذا يوفر أمانًا أعلى من كلمة المرور وحدها؟",
      answer: "التحقق بخطوتين يتطلب إثباتين مستقلين لهوية المستخدم عند تسجيل الدخول: عادة 'شيء تعرفه' (كلمة المرور) بالإضافة لـ 'شيء تملكه' (رمز مؤقت من تطبيق مصادقة على الهاتف، أو رسالة SMS، أو مفتاح أمان فيزيائي). حتى لو سُرقت كلمة المرور بمفردها (عبر تسريب بيانات أو تصيّد احتيالي)، لا يستطيع المهاجم الدخول دون العامل الثاني أيضًا، الذي عادة يكون بحوزة المستخدم الفعلي فقط.",
      explanation: "هذا يُخفف بشكل كبير جدًا من مخاطر تسريبات كلمات المرور الشائعة جدًا (سواء عبر تصيّد احتيالي، أو إعادة استخدام نفس كلمة المرور عبر مواقع متعددة، أو تسريب قاعدة بيانات موقع آخر). من أشكاله: تطبيقات TOTP (مثل Google Authenticator) التي تُنتج رمزًا مؤقتًا يتغيّر كل 30 ثانية بناءً على خوارزمية زمنية مشتركة، أو مفاتيح أمان فيزيائية (مثل YubiKey) وهي الأكثر أمانًا لأنها تقاوم هجمات التصيّد بشكل شبه تام.",
      bestPractices: ["فعّل 2FA على كل حساب مهم يدعمه، وفضّل تطبيقات المصادقة (TOTP) أو مفاتيح الأمان الفيزيائية على SMS (الأقل أمانًا نسبيًا بسبب مخاطر SIM swapping)"],
      commonMistakes: ["الاعتماد فقط على SMS كعامل ثانٍ دون علم بمخاطر هجمات استبدال شريحة SIM (SIM Swapping) التي قد تعترض تلك الرسائل"],
      followups: ["ما هو SIM Swapping وكيف يُستغل لتجاوز 2FA المعتمد على SMS؟"], similar: ["ما الفرق بين 2FA وMulti-Factor Authentication (MFA) الأشمل؟"]
    },
    {
      id: "sec-mcq-3", title: "ما هو Zero-Day Vulnerability؟", difficulty: "hard", domain: "Cyber Security", type: "mcq", timeMinutes: 2,
      question: "ما المقصود بمصطلح 'Zero-Day Vulnerability' في أمن المعلومات؟",
      options: ["ثغرة اكتُشفت واستُغلت لأول مرة يوم إطلاق البرنامج فقط", "ثغرة أمنية غير معروفة بعد لمطوّري البرنامج، وليس لديهم أي تصحيح (patch) جاهز لها بعد", "ثغرة تستغرق يومًا واحدًا فقط لإصلاحها", "ثغرة موجودة فقط في برامج مجانية"], correctIndex: 1,
      answer: "ثغرة أمنية غير معروفة بعد لمطوّري البرنامج، وليس لديهم أي تصحيح (patch) جاهز لها بعد.",
      explanation: "الاسم 'Zero-Day' يشير إلى أن المطورين لديهم 'صفر أيام' للاستعداد أو إصدار تصحيح قبل أن تُستغَل الثغرة فعليًا، لأنهم لم يكونوا يعرفون بوجودها أصلاً حتى اكتُشفت (غالبًا من قبل مهاجمين أو باحثي أمن). هذه الثغرات خطرة جدًا لأنه لا يوجد تصحيح رسمي متاح بعد لسدها، مما يجعل الأنظمة معرَّضة للخطر حتى يكتشفها المطورون رسميًا ويُصدروا تحديثًا أمنيًا.",
      bestPractices: ["حافظ على تحديث الأنظمة والبرامج فور صدور تصحيحات أمنية، واستخدم طبقات حماية إضافية (مثل جدار حماية وأنظمة كشف تسلل) لا تعتمد فقط على تصحيح ثغرة واحدة محددة"],
      commonMistakes: ["الاعتقاد بأن تحديث البرامج بانتظام يحمي من كل الثغرات، بينما ثغرات Zero-Day بحكم تعريفها لا يوجد لها تصحيح متاح بعد وقت اكتشافها"],
      followups: [], similar: ["ما هو Bug Bounty Program وكيف يساعد في اكتشاف ثغرات قبل استغلالها؟"]
    },
    {
      id: "sec-5", title: "ما هي هجمات Social Engineering؟", difficulty: "medium", domain: "Cyber Security", type: "open", timeMinutes: 4,
      question: "ما هي هندسة اجتماعية (Social Engineering) كنوع من الهجمات الأمنية، ولماذا هي فعّالة رغم عدم استغلالها ثغرات تقنية؟",
      answer: "الهندسة الاجتماعية تستغل الثقة والسلوك البشري بدلاً من ثغرات تقنية في البرمجيات؛ يخدع المهاجم الضحية نفسيًا للكشف عن معلومات حساسة (كلمات مرور، بيانات بنكية) أو تنفيذ إجراء يخدم المهاجم (مثل النقر على رابط خبيث أو تثبيت برنامج ضار)، عبر انتحال هوية موثوقة (موظف دعم فني، زميل عمل، جهة رسمية) أو خلق إحساس زائف بالإلحاح أو الخوف.",
      explanation: "التصيّد الاحتيالي (Phishing) هو الشكل الأشهر: رسالة بريد إلكتروني تبدو رسمية من بنك أو خدمة معروفة، تطلب 'التحقق من الحساب' عبر رابط يقود لصفحة تسجيل دخول مزيّفة تسرق بيانات الضحية فور إدخالها. الهندسة الاجتماعية فعّالة جدًا لأنها تتجاوز كل الحماية التقنية (جدران حماية، تشفير قوي) تمامًا، لأنها تستهدف الحلقة الأضعف في أي نظام أمني: العنصر البشري نفسه، الذي لا يمكن 'تصحيحه' ببساطة عبر تحديث برمجي.",
      bestPractices: ["درِّب المستخدمين والموظفين بانتظام على التعرف على علامات التصيّد (روابط مشبوهة، إلحاح غير مبرر، طلبات معلومات حساسة عبر البريد)، فالوعي البشري هو خط الدفاع الأول ضد هذا النوع من الهجمات"],
      commonMistakes: ["الاعتماد فقط على الحماية التقنية (جدران حماية، تشفير) دون أي تدريب توعوي للمستخدمين، رغم أن أضعف حلقة أمنية غالبًا هي السلوك البشري نفسه"],
      followups: ["ما الفرق بين Phishing وSpear Phishing المُستهدف؟"], similar: ["ما هو Pretexting كشكل آخر من أشكال الهندسة الاجتماعية؟"]
    },
    {
      id: "sec-mcq-4", title: "ما هو Ransomware؟", difficulty: "medium", domain: "Cyber Security", type: "mcq", timeMinutes: 1,
      question: "ما هو Ransomware (برنامج الفدية) كنوع من البرمجيات الخبيثة؟",
      options: ["برنامج يُسرّع الجهاز مقابل رسوم", "برنامج خبيث يُشفّر ملفات الضحية ويطلب فدية مالية مقابل مفتاح فك التشفير", "برنامج مجاني يعرض إعلانات فقط", "أداة حماية من الفيروسات"], correctIndex: 1,
      answer: "برنامج خبيث يُشفّر ملفات الضحية ويطلب فدية مالية مقابل مفتاح فك التشفير.",
      explanation: "Ransomware يتسلل لجهاز الضحية (غالبًا عبر مرفق بريد إلكتروني خبيث أو ثغرة غير مُحدَّثة)، ثم يُشفّر ملفات الضحية بمفتاح لا يملكه سوى المهاجم، ويطلب دفع فدية (غالبًا بعملة مشفرة يصعب تتبعها) مقابل تسليم مفتاح فك التشفير؛ لا يوجد ضمان أن المهاجم سيُسلِّم المفتاح فعليًا حتى بعد الدفع. أصبح من أخطر التهديدات السيبرانية على الشركات والمؤسسات في السنوات الأخيرة.",
      bestPractices: ["احتفظ بنسخ احتياطية منتظمة ومعزولة تمامًا عن الشبكة الرئيسية (offline backups)، فهي أفضل حماية عملية ضد Ransomware، لأنها تسمح باستعادة البيانات دون الحاجة لدفع أي فدية"],
      commonMistakes: ["الاعتماد فقط على نسخ احتياطية متصلة دائمًا بنفس الشبكة، والتي قد تُشفَّر هي الأخرى إذا انتشر الـ Ransomware ليصلها أيضًا"],
      followups: [], similar: ["ما هي أشهر حوادث Ransomware التي أثّرت على بنية تحتية حيوية؟"]
    },
  ]
},

/* ======================================================================
   System Design
   ====================================================================== */
{
  id: "system-design",
  name: "System Design",
  icon: "🏗️",
  intro: "أسئلة System Design تُقيّم قدرتك على التفكير في أنظمة كبيرة متعددة المستخدمين. المقابلات تركّز على التوسع الأفقي والعمودي، والتخزين المؤقت، وموازنة الحمل.",
  concepts: [
    { title: "التوسع الأفقي مقابل العمودي", body: "التوسع العمودي يعني زيادة قوة خادم واحد وله حد أقصى مادي. التوسع الأفقي يعني إضافة خوادم إضافية، وهو المفضل للأنظمة الكبيرة." },
    { title: "موازن الحمل", body: "مكوّن يوزّع الطلبات الواردة بين عدة خوادم حسب استراتيجية معيّنة، مما يزيد التوافر." },
    { title: "استراتيجيات التخزين المؤقت", body: "Cache-Aside (التطبيق يفحص الكاش أولاً)، وWrite-Through (كل كتابة تذهب للكاش وقاعدة البيانات معًا)." }
  ],
  questions: [
    {
      id: "sysd-1", title: "ما الفرق بين التوسع الأفقي والعمودي؟", difficulty: "medium", domain: "System Design", type: "open", timeMinutes: 4,
      question: "متى تختار التوسع العمودي ومتى تختار الأفقي؟",
      answer: "التوسع العمودي يعني ترقية خادم موجود؛ بسيط لكن له سقف مادي ونقطة فشل واحدة. التوسع الأفقي يعني إضافة خوادم تعمل بالتوازي؛ أكثر تعقيدًا لكن بلا سقف تقريبًا ويزيد التوافر.",
      explanation: "معظم الأنظمة الكبيرة تعتمد التوسع الأفقي، لكنه يفرض أن يكون التطبيق عديم الحالة (stateless).",
      bestPractices: ["صمّم تطبيقك ليكون stateless من البداية"],
      commonMistakes: ["الاعتماد على حالة محلية في خادم واحد مما يمنع التوسع الأفقي لاحقًا"],
      followups: ["كيف يرتبط هذا بمبدأ Statelessness في REST؟"], similar: ["ما هو Auto Scaling؟"]
    },
    {
      id: "sysd-2", title: "اشرح استراتيجية Cache-Aside", difficulty: "medium", domain: "System Design", type: "open", timeMinutes: 4,
      question: "كيف تعمل استراتيجية Cache-Aside، ولماذا هي الأكثر شيوعًا؟",
      answer: "يفحص التطبيق أولاً الكاش؛ إن وُجدت البيانات تُعاد فورًا. إن لم تُوجد، يقرأ من قاعدة البيانات ثم يُخزّنها في الكاش قبل إعادتها.",
      explanation: "التحدي الأساسي هو إبطال الكاش عند تحديث البيانات، وإلا يستمر إرجاع بيانات قديمة.",
      example: "async function getUser(id) {\n  let user = await cache.get(`user:${id}`);\n  if (user) return user;\n  user = await db.query('SELECT * FROM users WHERE id = ?', [id]);\n  await cache.set(`user:${id}`, user, { ttl: 3600 });\n  return user;\n}",
      bestPractices: ["حدّد TTL مناسبًا وأبطل الكاش صراحة عند التحديثات الحرجة"],
      commonMistakes: ["نسيان إبطال الكاش عند تحديث قاعدة البيانات"],
      followups: ["ما الفرق بين Cache-Aside وWrite-Through؟"], similar: ["ما هي مشكلة Cache Stampede؟"]
    },
    {
      id: "sysd-mcq-1", title: "أي مكوّن يوزّع الطلبات بين عدة خوادم؟", difficulty: "easy", domain: "System Design", type: "mcq", timeMinutes: 1,
      question: "أي مكوّن مسؤول عن توزيع الطلبات بين عدة خوادم؟",
      options: ["CDN", "Load Balancer", "Message Queue", "API Gateway"], correctIndex: 1,
      answer: "Load Balancer",
      explanation: "موازن الحمل يوزّع الطلبات بين الخوادم وفق استراتيجية معيّنة، مما يمنع تحميل خادم واحد فوق طاقته.",
      bestPractices: ["استخدم موازن حمل مع فحوصات صحة دورية"],
      commonMistakes: ["الخلط بين Load Balancer وCDN"],
      followups: [], similar: ["ما الفرق بين Layer 4 وLayer 7 Load Balancing؟"]
    },
    {
      id: "sysd-tf-1", title: "صح أو خطأ: Microservices دائمًا أبسط من Monolith", difficulty: "medium", domain: "System Design", type: "tf", timeMinutes: 1,
      question: "صح أم خطأ: Microservices دائمًا خيار أفضل من Monolith بغض النظر عن حجم الفريق.",
      isTrue: false,
      answer: "خطأ.",
      explanation: "Monolith أبسط بكثير للمشاريع الصغيرة. Microservices تُضيف تعقيدًا تشغيليًا كبيرًا لا يُبرَّر إلا في مشاريع كبيرة بفرق متعددة.",
      bestPractices: ["ابدأ بـ Monolith جيد التنظيم، وانتقل لـ Microservices عند حاجة فعلية"],
      commonMistakes: ["اختيار Microservices من اليوم الأول 'لأنها الترند'"],
      followups: ["ما العلامات التي تشير لحاجة الانتقال؟"], similar: ["ما هو Modular Monolith؟"]
    },
    {
      id: "sysd-3", title: "ما هو CDN وكيف يُحسّن الأداء؟", difficulty: "medium", domain: "System Design", type: "open", timeMinutes: 4,
      question: "ما هو Content Delivery Network (CDN)، ولماذا يُسرّع تحميل الموقع للمستخدمين حول العالم؟",
      answer: "CDN شبكة من الخوادم الموزّعة جغرافيًا في مواقع مختلفة حول العالم، تُخزّن نسخًا مؤقتة (cache) من المحتوى الثابت (صور، ملفات CSS/JavaScript، فيديوهات) قريبة فعليًا من المستخدمين. عندما يطلب مستخدم في اليابان محتوى موقع خادمه الأساسي في أمريكا، يُقدَّم له المحتوى من أقرب خادم CDN جغرافيًا (في آسيا مثلاً) بدلاً من السفر عبر المحيط لخادم أمريكا الأصلي، مما يُقلّل زمن الاستجابة (latency) بشكل كبير جدًا.",
      explanation: "بالإضافة لتقليل زمن الاستجابة الجغرافي، يُخفف CDN الحمل عن الخادم الأصلي (Origin Server) بشكل كبير لأن أغلب الطلبات تُخدَم مباشرة من الكاش الطرفي دون الوصول للخادم الأصلي إطلاقًا، ويوفر أيضًا حماية إضافية ضد هجمات DDoS لأن الحمل الهجومي يتوزع عبر شبكة CDN بأكملها بدلاً من التركز على خادم واحد.",
      bestPractices: ["استخدم CDN لكل المحتوى الثابت (صور، خطوط، JS/CSS مُجمَّعة) الذي لا يتغيّر بمعدل عالٍ، لتخفيف الحمل عن الخادم الأصلي وتسريع التحميل عالميًا"],
      commonMistakes: ["الاعتماد فقط على خادم مركزي واحد لخدمة مستخدمين موزّعين جغرافيًا عالميًا، مما يُسبب زمن استجابة بطيئًا جدًا للمستخدمين البعيدين عن ذلك الخادم"],
      followups: ["كيف يتعامل CDN مع تحديث المحتوى (Cache Invalidation) عند تغيّر ملف مخزَّن مسبقًا؟"], similar: ["ما الفرق بين CDN وLoad Balancer من ناحية الهدف؟"]
    },
    {
      id: "sysd-4", title: "ما هو Rate Limiting ولماذا هو مهم؟", difficulty: "medium", domain: "System Design", type: "open", timeMinutes: 4,
      question: "ما هو Rate Limiting، وما الفائدة منه في حماية وأداء الأنظمة الكبيرة؟",
      answer: "Rate Limiting تقنية تحدّ من عدد الطلبات التي يمكن لعميل واحد (مستخدم، عنوان IP، مفتاح API) إرسالها لخادم خلال فترة زمنية معيّنة (مثل 100 طلب في الدقيقة)؛ أي طلبات تتجاوز هذا الحد تُرفَض عادة برمز حالة HTTP مثل 429 Too Many Requests، ربما مع رأس يوضح متى يمكن المحاولة مجددًا (Retry-After).",
      explanation: "الفائدة مزدوجة: حماية النظام من هجمات إساءة الاستخدام (مثل محاولات تخمين كلمة مرور متكررة، أو هجمات DDoS بسيطة من مصدر واحد)، وضمان توزيع عادل للموارد المحدودة بين كل المستخدمين بحيث لا يستطيع عميل واحد نهم استهلاك كل سعة الخادم على حساب البقية. خوارزميات شائعة لتطبيقها تشمل Token Bucket وSliding Window، تختلف في دقة التحكم بالمعدل مقابل بساطة التنفيذ.",
      bestPractices: ["طبّق Rate Limiting على أي واجهة برمجية عامة (خصوصًا نقاط تسجيل الدخول ومعالجة المدفوعات) لحمايتها من إساءة الاستخدام"],
      commonMistakes: ["عدم تطبيق أي حد على واجهات برمجية حساسة، مما يفتح الباب لهجمات تخمين كلمات المرور المتكررة (Brute Force) دون أي عائق"],
      followups: ["ما الفرق بين خوارزمية Token Bucket وSliding Window Rate Limiting؟"], similar: ["كيف يرتبط Rate Limiting بحماية النظام من هجمات DDoS؟"]
    },
    {
      id: "sysd-mcq-2", title: "أي مكوّن يسمح بمعالجة المهام بشكل غير متزامن بين خدمات منفصلة؟", difficulty: "medium", domain: "System Design", type: "mcq", timeMinutes: 1,
      question: "أي مكوّن معماري يسمح لخدمة بإرسال مهمة لتُعالَج لاحقًا من خدمة أخرى دون انتظار فوري لاكتمالها؟",
      options: ["Load Balancer", "Message Queue", "CDN", "DNS Server"], correctIndex: 1,
      answer: "Message Queue (طابور الرسائل)",
      explanation: "Message Queue (مثل RabbitMQ أو Kafka أو SQS) يسمح لخدمة 'منتجة' (producer) بوضع رسالة/مهمة في الطابور والاستمرار فورًا دون انتظار، بينما تلتقط خدمة 'مستهلكة' (consumer) منفصلة تلك الرسالة وتُعالجها في وقتها الخاص. هذا يفصل الخدمات عن بعضها زمنيًا (decoupling)، ويسمح بمعالجة غير متزامنة لمهام قد تستغرق وقتًا طويلاً (مثل إرسال بريد إلكتروني أو معالجة فيديو) دون تعطيل استجابة الطلب الأصلي للمستخدم.",
      bestPractices: ["استخدم Message Queue لأي مهمة لا تحتاج نتيجتها فورًا في استجابة الطلب الأصلي (مثل إرسال إشعارات أو معالجة خلفية)"],
      commonMistakes: ["تنفيذ مهام طويلة (مثل معالجة فيديو) بشكل متزامن مباشرة داخل معالج الطلب، مما يُبطئ استجابة المستخدم النهائي بلا داعٍ"],
      followups: [], similar: ["ما الفرق بين Message Queue وPub/Sub Pattern؟"]
    },
    {
      id: "sysd-5", title: "ما هو Consistent Hashing؟", difficulty: "hard", domain: "System Design", type: "open", timeMinutes: 5,
      question: "ما هي مشكلة التجزئة (Hashing) العادية عند توزيع البيانات عبر خوادم قابلة للتغيّر، وكيف يحلها Consistent Hashing؟",
      answer: "مع التجزئة العادية (مثل hash(key) % عدد_الخوادم)، إضافة أو إزالة خادم واحد فقط تُغيّر نتيجة القسمة على كل المفاتيح تقريبًا، مما يعني إعادة توزيع (إعادة نقل) كل البيانات تقريبًا بين كل الخوادم عند أي تغيير بسيط في عددها؛ عملية مكلفة جدًا في نظام موزّع كبير. Consistent Hashing يحل هذه المشكلة عبر ترتيب الخوادم والمفاتيح معًا على 'حلقة' تجزئة واحدة (hash ring)؛ كل مفتاح يُخزَّن في أقرب خادم له على الحلقة (بالاتجاه الدوري)، فإضافة أو إزالة خادم واحد يؤثر فقط على المفاتيح القريبة منه مباشرة على الحلقة، وليس كل المفاتيح في النظام.",
      explanation: "هذا يجعل Consistent Hashing أساسيًا في أنظمة موزّعة كبيرة تحتاج مرونة في إضافة/إزالة خوادم دون كارثة إعادة توزيع شاملة، مثل أنظمة Caching الموزّعة (Memcached) وقواعد بيانات NoSQL موزّعة (Cassandra، DynamoDB). بدون هذه التقنية، توسيع أو تقليص نظام تخزين موزّع كبير يصبح عملية باهظة التكلفة ومُعطِّلة للخدمة أثناء إعادة التوزيع الشاملة.",
      bestPractices: ["استخدم Consistent Hashing (أو مكتبات/أنظمة تُطبّقه داخليًا مثل Cassandra) عند تصميم أي نظام تخزين موزّع يحتاج توسعًا أو تقليصًا مرنًا بمرور الوقت"],
      commonMistakes: ["استخدام تجزئة بسيطة (hash % N) في نظام موزّع كبير المقياس، مما يجعل أي تغيير في عدد الخوادم مكلفًا جدًا لإعادة توزيع كل البيانات تقريبًا"],
      followups: ["ما هو مفهوم 'Virtual Nodes' في Consistent Hashing وكيف يحسّن توزيع الحمل؟"], similar: ["كيف تستخدم Cassandra مفهوم Consistent Hashing لتوزيع بياناتها؟"]
    },
    {
      id: "sysd-mcq-3", title: "ما هو Circuit Breaker Pattern؟", difficulty: "hard", domain: "System Design", type: "mcq", timeMinutes: 2,
      question: "ما هو الغرض من نمط Circuit Breaker في الأنظمة الموزّعة؟",
      options: ["تسريع الاتصال بقاعدة البيانات", "منع خدمة من الاستمرار في استدعاء خدمة أخرى معطّلة بشكل متكرر، لتفادي تفاقم الفشل وإعطاء الخدمة المعطّلة فرصة للتعافي", "تشفير الاتصال بين خدمتين", "توزيع الحمل بين خوادم متعددة"], correctIndex: 1,
      answer: "منع خدمة من الاستمرار في استدعاء خدمة أخرى معطّلة بشكل متكرر، لتفادي تفاقم الفشل وإعطاء الخدمة المعطّلة فرصة للتعافي.",
      explanation: "Circuit Breaker يراقب معدل فشل الاستدعاءات لخدمة معيّنة؛ إذا تجاوز الفشل حدًا معيّنًا خلال فترة زمنية، 'يفتح الدائرة' ويمنع أي استدعاءات إضافية لتلك الخدمة مؤقتًا (يُرجع خطأ فورًا دون حتى محاولة الاتصال)، بدلاً من الاستمرار في إرسال طلبات لخدمة معطّلة بالفعل (مما يُفاقم الحمل عليها ويُبطئ الخدمة المُستدعية بانتظار مهلات timeout متكررة). بعد فترة، يسمح الـ Circuit Breaker بمحاولة واحدة تجريبية؛ إن نجحت، 'يُغلق' الدائرة ويعود التدفق الطبيعي.",
      bestPractices: ["طبّق Circuit Breaker على أي استدعاء بين خدمات (خصوصًا خدمات خارجية) في معمارية Microservices، لمنع فشل خدمة واحدة من التسبب في انهيار متسلسل (cascading failure) عبر النظام بأكمله"],
      commonMistakes: ["الاستمرار في محاولة استدعاء خدمة معطّلة بلا توقف، مما يُهدر موارد الخدمة المُستدعية بانتظار مهلات timeout متكررة، ويُفاقم الحمل على الخدمة المعطّلة نفسها ويمنعها من التعافي"],
      followups: [], similar: ["ما هي حالات Circuit Breaker الثلاث (Closed, Open, Half-Open)؟"]
    },
  ]
},

/* ======================================================================
   Artificial Intelligence
   ====================================================================== */
{
  id: "artificial-intelligence",
  name: "Artificial Intelligence",
  icon: "🤖",
  intro: "مع انتشار الذكاء الاصطناعي في كل صناعة، أصبحت أساسياته مطلوبة حتى في مقابلات ليست بحثية. المقابلات تركّز على التمييز بين AI/ML/DL، وأنواع التعلّم، ومشكلة Overfitting.",
  concepts: [
    { title: "AI مقابل ML مقابل Deep Learning", body: "AI هو المجال الأوسع. ML مجموعة فرعية تتعلّم الأنماط من البيانات. Deep Learning مجموعة فرعية من ML تعتمد على شبكات عصبية عميقة." },
    { title: "أنواع التعلّم", body: "Supervised يتعلّم من بيانات مُصنَّفة. Unsupervised يجد أنماطًا في بيانات غير مُصنَّفة. Reinforcement يتعلّم عبر التجربة والخطأ." },
    { title: "Overfitting", body: "يحدث عندما يحفظ النموذج تفاصيل بيانات التدريب بدلاً من تعلّم الأنماط العامة، فيفشل في التعميم على بيانات جديدة." }
  ],
  questions: [
    {
      id: "ai-1", title: "ما الفرق بين AI وML وDeep Learning؟", difficulty: "easy", domain: "Artificial Intelligence", type: "open", timeMinutes: 4,
      question: "اشرح العلاقة الهرمية بين AI وML وDeep Learning.",
      answer: "AI هو أي نظام يُحاكي ذكاءً بشريًا. ML مجموعة فرعية تتعلّم الأنماط من البيانات بدلًا من قواعد مبرمجة يدويًا. Deep Learning مجموعة فرعية من ML تعتمد على شبكات عصبية بعدة طبقات.",
      explanation: "العلاقة تسلسلية احتوائية: AI ⊃ ML ⊃ Deep Learning. نظام شطرنج بقواعد ثابتة هو AI وليس ML. تصنيف بريد spam من أمثلة مُصنَّفة هو ML. تعرّف على وجوه عبر CNN هو Deep Learning.",
      bestPractices: ["استخدم المصطلح الأدق عند الوصف بدلاً من العام"],
      commonMistakes: ["استخدام المصطلحات الثلاثة كمترادفات دون تمييز"],
      followups: ["أعطِ مثالاً لخوارزمية ML تقليدية ليست Deep Learning؟"], similar: ["ما هو Generative AI وأين يقع في هذا التسلسل؟"]
    },
    {
      id: "ai-2", title: "ما هو Overfitting وكيف تتجنّبه؟", difficulty: "medium", domain: "Artificial Intelligence", type: "open", timeMinutes: 5,
      question: "ما هي مشكلة Overfitting، وما هي الطرق الشائعة لتفاديها؟",
      answer: "Overfitting يحدث عندما يتعلّم النموذج تفاصيل بيانات التدريب بدقة مفرطة بما فيها الضوضاء، فيُظهر دقة عالية على التدريب لكن أداءً ضعيفًا على بيانات جديدة.",
      explanation: "طرق التفادي: Cross-Validation، Regularization (L1/L2)، جمع بيانات أكثر تنوعًا، وEarly Stopping.",
      bestPractices: ["قسّم بياناتك لتدريب وتحقق واختبار، وراقب الفجوة بينها"],
      commonMistakes: ["تقييم النموذج فقط على بيانات التدريب نفسها"],
      followups: ["ما هو Underfitting؟"], similar: ["ما هو Dropout في الشبكات العصبية؟"]
    },
    {
      id: "ai-mcq-1", title: "أي خوارزمية مثال على التعلّم غير الخاضع للإشراف؟", difficulty: "medium", domain: "Artificial Intelligence", type: "mcq", timeMinutes: 1,
      question: "أي من التالي مثال كلاسيكي على Unsupervised Learning؟",
      options: ["Linear Regression", "K-Means Clustering", "Logistic Regression", "Decision Tree Classifier"], correctIndex: 1,
      answer: "K-Means Clustering",
      explanation: "K-Means تُجمّع نقاط البيانات دون تصنيفات معروفة مسبقًا. البقية خوارزميات supervised تحتاج بيانات مُصنَّفة.",
      bestPractices: ["حدد هل تملك بيانات مُصنَّفة أم لا لتقرر supervised أم unsupervised"],
      commonMistakes: ["الخلط بين Classification وClustering"],
      followups: [], similar: ["ما هو PCA؟"]
    },
    {
      id: "ai-tf-1", title: "صح أو خطأ: Overfitting يعني أداءً ممتازًا على التدريب لكن ضعيفًا على بيانات جديدة", difficulty: "easy", domain: "Artificial Intelligence", type: "tf", timeMinutes: 1,
      question: "صح أم خطأ: علامة Overfitting هي دقة عالية على التدريب لكن ضعف على بيانات جديدة.",
      isTrue: true,
      answer: "صح.",
      explanation: "النموذج 'حفظ' بيانات التدريب بدلاً من تعلّم أنماط عامة قابلة للتطبيق على بيانات جديدة.",
      bestPractices: ["راقب الفجوة بين دقة التدريب والتحقق باستمرار"],
      commonMistakes: [], followups: [], similar: ["ما هي منحنيات التعلّم؟"]
    },
    {
      id: "ai-3", title: "ما الفرق بين Precision وRecall؟", difficulty: "hard", domain: "Artificial Intelligence", type: "open", timeMinutes: 5,
      question: "اشرح الفرق بين Precision وRecall كمقياسين لتقييم نموذج تصنيف، ولماذا لا تكفي الدقة (Accuracy) وحدها؟",
      answer: "Precision (الدقة الموجبة) تُجيب على سؤال: 'من بين كل الحالات التي تنبأ بها النموذج كإيجابية، كم منها كانت إيجابية فعلاً؟' (TP / (TP + FP)). Recall (الاستدعاء) يُجيب على سؤال مختلف: 'من بين كل الحالات الإيجابية الحقيقية فعليًا، كم منها اكتشفها النموذج فعلاً؟' (TP / (TP + FN)). الدقة العامة (Accuracy) وحدها قد تكون مضللة جدًا في بيانات غير متوازنة (مثل اكتشاف احتيال نادر الحدوث: نموذج يتنبأ 'لا احتيال' دائمًا قد يحقق Accuracy عالية جدًا لأن الاحتيال نادر أصلاً، لكنه عديم الفائدة تمامًا لأنه لا يكتشف أي حالة احتيال حقيقية).",
      explanation: "التوازن بين الاثنين يعتمد على التطبيق: في تشخيص طبي لمرض خطير، Recall أهم بكثير (لا تريد تفويت أي حالة مريضة حقيقية، حتى لو أدى ذلك لبعض التنبيهات الكاذبة الإضافية)، بينما في نظام تصفية بريد spam، Precision قد يكون أهم (لا تريد وضع بريد مهم شرعي في مجلد spam بالخطأ، حتى لو أفلت بعض رسائل spam الفعلية). مقياس F1-Score يجمع الاثنين في رقم واحد (المتوسط التوافقي) عندما تريد توازنًا بينهما دون تفضيل أحدهما بشكل صريح.",
      bestPractices: ["اختر مقياس التقييم (Precision أو Recall أو F1) بناءً على التكلفة الفعلية لكل نوع خطأ في تطبيقك تحديدًا، وليس Accuracy وحدها دائمًا"],
      commonMistakes: ["الاعتماد فقط على Accuracy لتقييم نموذج على بيانات غير متوازنة (imbalanced)، مما يُخفي أداءً ضعيفًا فعليًا على الفئة الأقل تمثيلاً والأهم غالبًا"],
      followups: ["كيف تُحسب F1-Score رياضيًا من Precision وRecall؟"], similar: ["ما هو Confusion Matrix وكيف يُستخرَج منه Precision وRecall؟"]
    },
    {
      id: "ai-mcq-2", title: "ما هو الغرض من خوارزمية Gradient Descent؟", difficulty: "hard", domain: "Artificial Intelligence", type: "mcq", timeMinutes: 2,
      question: "ما هو الهدف الأساسي من خوارزمية Gradient Descent في تدريب نماذج تعلّم الآلة؟",
      options: ["تنظيف البيانات قبل التدريب", "تقليل دالة الخسارة (Loss Function) تدريجيًا عبر تعديل أوزان النموذج في اتجاه الانحدار الأكثر حدة", "تقسيم البيانات لتدريب واختبار", "زيادة عدد الطبقات في الشبكة العصبية تلقائيًا"], correctIndex: 1,
      answer: "تقليل دالة الخسارة (Loss Function) تدريجيًا عبر تعديل أوزان النموذج في اتجاه الانحدار الأكثر حدة.",
      explanation: "Gradient Descent خوارزمية تحسين (optimization) تُستخدم لإيجاد القيم المثلى لأوزان (weights) النموذج التي تُقلّل دالة الخسارة (الفرق بين تنبؤات النموذج والقيم الحقيقية) قدر الإمكان. تعمل عبر حساب مشتقة (gradient) دالة الخسارة بالنسبة لكل وزن، ثم تحديث ذلك الوزن بمقدار صغير في الاتجاه المعاكس للمشتقة (لأن المشتقة تشير لاتجاه الزيادة، ونريد التقليل)، وتكرار هذه الخطوة آلاف المرات حتى تستقر الخسارة عند قيمة صغيرة قريبة من الحد الأدنى.",
      bestPractices: ["اضبط معدل التعلّم (Learning Rate) بعناية: قيمة كبيرة جدًا قد تتخطى الحل الأمثل بدون استقرار، وقيمة صغيرة جدًا تجعل التدريب بطيئًا جدًا"],
      commonMistakes: ["اختيار معدل تعلّم غير مناسب دون تجربة قيم مختلفة، مما يؤدي إما لعدم تقارب النموذج إطلاقًا أو لتدريب بطيء جدًا غير عملي"],
      followups: ["ما الفرق بين Batch Gradient Descent وStochastic Gradient Descent وMini-Batch؟"], similar: ["ما هو Learning Rate وكيف يؤثر على سرعة واستقرار التدريب؟"]
    },
    {
      id: "ai-4", title: "ما هو Confusion Matrix؟", difficulty: "medium", domain: "Artificial Intelligence", type: "open", timeMinutes: 4,
      question: "ما هو Confusion Matrix، وكيف يُستخدم لتقييم نموذج تصنيف ثنائي (binary classification)؟",
      answer: "Confusion Matrix جدول 2×2 (لتصنيف ثنائي) يُلخّص أداء نموذج تصنيف عبر مقارنة تنبؤاته بالقيم الحقيقية الفعلية، مقسّمًا لأربع خانات: True Positive (تنبأ إيجابي وكان إيجابيًا فعلاً)، True Negative (تنبأ سلبي وكان سلبيًا فعلاً)، False Positive (تنبأ إيجابي لكنه كان سلبيًا فعلاً - إنذار كاذب)، وFalse Negative (تنبأ سلبي لكنه كان إيجابيًا فعلاً - حالة فائتة).",
      explanation: "هذا الجدول هو الأساس الذي تُشتَق منه كل مقاييس التقييم الأخرى: Accuracy تحسب نسبة كل التنبؤات الصحيحة (TP+TN) من الإجمالي، Precision تحسب TP/(TP+FP)، وRecall تحسب TP/(TP+FN). النظر للجدول كاملاً بدلاً من رقم Accuracy واحد فقط يكشف تفاصيل مهمة، مثل نموذج يخطئ باستمرار في اتجاه معيّن (كثرة False Negatives تحديدًا) رغم دقته العامة العالية ظاهريًا.",
      example: "                  تنبأ: إيجابي    تنبأ: سلبي\nحقيقي: إيجابي        TP (85)         FN (15)\nحقيقي: سلبي          FP (10)         TN (890)\n\nAccuracy = (85+890)/1000 = 97.5%\nRecall = 85/(85+15) = 85% فقط رغم Accuracy العالية!",
      bestPractices: ["افحص Confusion Matrix كاملاً دائمًا بدلاً من الاكتفاء برقم Accuracy واحد، خصوصًا على بيانات غير متوازنة"],
      commonMistakes: ["الاكتفاء بمقياس Accuracy وحده لتقييم نموذج، متجاهلين توزيع الأخطاء الفعلي بين False Positives وFalse Negatives الذي قد يكون له تكلفة مختلفة تمامًا حسب التطبيق"],
      followups: ["كيف تمتد فكرة Confusion Matrix لتصنيف متعدد الفئات (multi-class) بدلاً من ثنائي فقط؟"], similar: ["ما هو ROC Curve وAUC كمقاييس تقييم أخرى مرتبطة؟"]
    },
    {
      id: "ai-mcq-3", title: "ما هو Transfer Learning؟", difficulty: "hard", domain: "Artificial Intelligence", type: "mcq", timeMinutes: 2,
      question: "ما هو Transfer Learning في التعلّم العميق؟",
      options: ["نقل بيانات بين قواعد بيانات مختلفة", "استخدام نموذج مُدرَّب مسبقًا على مهمة كبيرة، وتخصيصه (fine-tuning) لمهمة جديدة مشابهة بدلًا من التدريب من الصفر", "نقل ملفات النموذج بين خوادم مختلفة", "تحويل نموذج من لغة برمجة لأخرى"], correctIndex: 1,
      answer: "استخدام نموذج مُدرَّب مسبقًا على مهمة كبيرة، وتخصيصه (fine-tuning) لمهمة جديدة مشابهة بدلًا من التدريب من الصفر.",
      explanation: "Transfer Learning يستفيد من الأنماط العامة التي تعلّمها نموذج ضخم مُدرَّب مسبقًا على كمية هائلة من البيانات (مثل نموذج رؤية حاسوبية دُرِّب على ملايين الصور)، ثم يُعاد تدريب الطبقات الأخيرة فقط (أو جزء صغير من النموذج) على بيانات أصغر بكثير خاصة بمهمة جديدة محددة. هذا يوفر وقتًا وموارد حسابية هائلة مقارنة بتدريب نموذج ضخم من الصفر، وغالبًا يُنتج دقة أفضل خصوصًا عندما تكون بيانات المهمة الجديدة محدودة الحجم.",
      bestPractices: ["استخدم Transfer Learning من نماذج مُدرَّبة مسبقًا معروفة (مثل ResNet للصور أو BERT للنصوص) كنقطة بداية بدلاً من التدريب من الصفر، خصوصًا عند محدودية البيانات المتاحة"],
      commonMistakes: ["محاولة تدريب نموذج عميق ضخم من الصفر على بيانات قليلة جدًا، مما يؤدي غالبًا لـ Overfitting شديد بدلًا من الاستفادة من نموذج مُدرَّب مسبقًا جاهز"],
      followups: [], similar: ["ما الفرق بين Fine-tuning وFeature Extraction كطريقتين لتطبيق Transfer Learning؟"]
    },
    {
      id: "ai-5", title: "ما هي شجرة القرار (Decision Tree)؟", difficulty: "medium", domain: "Artificial Intelligence", type: "open", timeMinutes: 4,
      question: "ما هي شجرة القرار (Decision Tree) كخوارزمية تعلّم آلة، وما ميزتها الأساسية من ناحية قابلية التفسير؟",
      answer: "شجرة القرار هي خوارزمية تعلّم خاضع للإشراف تُبنى كشجرة من القرارات المتتالية: كل عقدة داخلية تمثّل اختبارًا على خاصية معيّنة (مثل 'هل العمر أكبر من 30؟')، كل فرع يمثّل نتيجة ذلك الاختبار، وكل ورقة (leaf) تمثّل تصنيفًا نهائيًا أو قيمة تنبؤية. يُبنى الشجرة عبر اختيار الخاصية الأفضل لتقسيم البيانات في كل خطوة (بناءً على مقاييس مثل Gini Impurity أو Information Gain) لتحقيق أنقى فصل ممكن بين الفئات المختلفة.",
      explanation: "الميزة الأساسية التي تُميّز شجرة القرار عن نماذج أخرى (مثل الشبكات العصبية) هي قابلية التفسير العالية جدًا: يمكن تتبع كل قرار تنبؤي عبر مسار واضح من القواعد المفهومة بشريًا ('إذا كان العمر > 30 وكان الدخل > 50000، فالتصنيف = موافقة على القرض')، بعكس نماذج 'الصندوق الأسود' التي يصعب تفسير قرارها الداخلي. لكن شجرة قرار واحدة عرضة لـ Overfitting بسهولة (خصوصًا إن نمت عميقة جدًا)، لذا تُستخدم عمليًا غالبًا ضمن مجموعات (Ensembles) مثل Random Forest التي تجمع عدة أشجار معًا لتحسين الدقة والتعميم.",
      bestPractices: ["استخدم شجرة قرار مفردة عندما تحتاج تفسيرًا واضحًا للقرار (مثل تطبيقات مالية أو طبية تتطلب شفافية)، وRandom Forest أو Gradient Boosting عندما تكون الدقة أهم من قابلية التفسير الفردية"],
      commonMistakes: ["السماح لشجرة قرار واحدة بالنمو بعمق مفرط دون تحديد حد أقصى (max depth)، مما يؤدي لـ Overfitting شديد يحفظ بيانات التدريب بدلاً من تعلّم أنماط عامة"],
      followups: ["كيف يعمل Random Forest على تحسين أداء شجرة قرار مفردة عبر التجميع (ensembling)؟"], similar: ["ما الفرق بين Gini Impurity وEntropy كمقاييس لجودة التقسيم؟"]
    },
    {
      id: "ai-mcq-4", title: "ما هو الغرض من Feature Engineering؟", difficulty: "medium", domain: "Artificial Intelligence", type: "mcq", timeMinutes: 2,
      question: "ما هو الغرض الأساسي من هندسة الخصائص (Feature Engineering) في تعلّم الآلة؟",
      options: ["تنظيف الكود البرمجي للنموذج", "تحويل أو استخلاص خصائص (features) جديدة ومفيدة من البيانات الخام لتحسين أداء النموذج", "زيادة سرعة المعالج المستخدم للتدريب", "تقليل حجم ملف النموذج المُدرَّب"], correctIndex: 1,
      answer: "تحويل أو استخلاص خصائص (features) جديدة ومفيدة من البيانات الخام لتحسين أداء النموذج.",
      explanation: "Feature Engineering هي عملية تحويل البيانات الخام إلى تمثيل (خصائص/features) أكثر فائدة وقابلية لأن يتعلّم منها النموذج أنماطًا مفيدة فعليًا، مثل استخلاص 'يوم الأسبوع' و'الساعة' من طابع زمني خام، أو دمج عمودين موجودين لإنشاء نسبة جديدة ذات معنى (مثل نسبة الدين للدخل). جودة الخصائص المُستخدَمة غالبًا تؤثر على أداء النموذج النهائي أكثر من اختيار الخوارزمية نفسها؛ خصائص جيدة مع خوارزمية بسيطة قد تتفوق على خصائص ضعيفة مع خوارزمية معقدة جدًا.",
      bestPractices: ["اقضِ وقتًا كافيًا في فهم البيانات واستخلاص خصائص ذات معنى فعلي مرتبط بالمشكلة، فهذه الخطوة غالبًا أهم من اختيار الخوارزمية أو ضبط معاملاتها الدقيقة"],
      commonMistakes: ["التركيز فقط على تجربة خوارزميات وضبط معاملات (hyperparameter tuning) متقدمة، متجاهلين تحسين جودة الخصائص الأساسية نفسها التي قد تكون لها تأثير أكبر بكثير على الأداء النهائي"],
      followups: [], similar: ["ما هو One-Hot Encoding كتقنية شائعة في هندسة الخصائص للبيانات الفئوية (categorical)؟"]
    },
  ]
},
];
