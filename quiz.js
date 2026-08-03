/* =========================================================================
   أسئلة المقابلات البرمجية — محرك الاختبارات (quiz.js)
   ========================================================================= */

const QuizEngine = (() => {
  function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function getSection(sectionId) {
    return QUESTION_BANK.find((s) => s.id === sectionId);
  }

  /**
   * يبني مجموعة أسئلة اختبار (mcq/tf) من قسم معيّن.
   * إن لم يوجد عدد كافٍ من mcq/tf، يُكمَّل العدد بأسئلة مفتوحة تُحوَّل تلقائيًا
   * لصيغة اختيار من متعدد بسيطة (صح/خطأ حول أهم نقطة في السؤال) للحفاظ على تجربة اختبار متسقة.
   */
  function generateQuiz(sectionId, count) {
    const section = getSection(sectionId);
    if (!section) return [];
    const closedForm = section.questions.filter((q) => q.type === "mcq" || q.type === "tf");
    const pool = shuffle(closedForm);
    return pool.slice(0, Math.min(count, pool.length));
  }

  /** يبني مجموعة أسئلة اختبار من عدة أقسام (لاستخدامها لاحقًا في اختبارات شاملة). */
  function generateMixedQuiz(count) {
    const all = [];
    QUESTION_BANK.forEach((section) => {
      section.questions
        .filter((q) => q.type === "mcq" || q.type === "tf")
        .forEach((q) => all.push({ ...q, sectionName: section.name }));
    });
    return shuffle(all).slice(0, Math.min(count, all.length));
  }

  function checkAnswer(question, userAnswerIndexOrBool) {
    if (question.type === "mcq") return userAnswerIndexOrBool === question.correctIndex;
    if (question.type === "tf") return userAnswerIndexOrBool === question.isTrue;
    return false;
  }

  /**
   * يحلل نتائج اختبار مكتمل: قائمة { question, userAnswer, correct }
   * ويُرجع تقريرًا يتضمن نقاط القوة (المجالات ذات الإجابات الصحيحة) ونقاط الضعف.
   */
  function analyzeResults(answeredList) {
    const correct = answeredList.filter((a) => a.correct).length;
    const total = answeredList.length;

    const domainStats = {};
    answeredList.forEach((a) => {
      const d = a.question.domain || "عام";
      if (!domainStats[d]) domainStats[d] = { correct: 0, total: 0 };
      domainStats[d].total++;
      if (a.correct) domainStats[d].correct++;
    });

    const strong = [];
    const weak = [];
    Object.entries(domainStats).forEach(([domain, stat]) => {
      const pct = stat.correct / stat.total;
      if (pct >= 0.7) strong.push(domain);
      else weak.push(domain);
    });

    return {
      correct,
      total,
      pct: total ? Math.round((correct / total) * 100) : 0,
      strong: strong.length ? strong : ["لا توجد بيانات كافية بعد"],
      weak: weak.length ? weak : ["أداء ممتاز في كل المجالات!"]
    };
  }

  return { generateQuiz, generateMixedQuiz, checkAnswer, analyzeResults, shuffle, getSection };
})();
