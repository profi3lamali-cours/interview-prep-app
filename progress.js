/* =========================================================================
   أسئلة المقابلات البرمجية — إدارة التقدم (progress.js)
   يتعامل مع كل التخزين المحلي: الأسئلة المُجابة، المفضلة، نتائج الاختبارات،
   المقابلات الوهمية، التحدي اليومي والسلسلة، والشارات.
   ========================================================================= */

const STORAGE_KEY = "interview_app_state_v1";

const BADGES_DEF = [
  { id: "first_question", name: "أول خطوة", icon: "🌱", desc: "أجب على أول سؤال", check: (s) => Object.keys(s.answeredQuestions).length >= 1 },
  { id: "ten_questions", name: "مبتدئ", icon: "📗", desc: "أجب على 10 أسئلة", check: (s) => Object.keys(s.answeredQuestions).length >= 10 },
  { id: "fifty_questions", name: "متقدم", icon: "📘", desc: "أجب على 50 سؤالًا", check: (s) => Object.keys(s.answeredQuestions).length >= 50 },
  { id: "hundred_questions", name: "خبير", icon: "📙", desc: "أجب على 100 سؤال", check: (s) => Object.keys(s.answeredQuestions).length >= 100 },
  { id: "all_questions", name: "محترف", icon: "🏆", desc: "أجب على كل الأسئلة المتاحة", check: (s, total) => Object.keys(s.answeredQuestions).length >= total },
  { id: "first_quiz", name: "أول اختبار", icon: "✅", desc: "أكمل أول اختبار", check: (s) => s.quizResults.length >= 1 },
  { id: "perfect_quiz", name: "علامة كاملة", icon: "💯", desc: "احصل على 100% في اختبار", check: (s) => s.quizResults.some((q) => q.total > 0 && q.correct === q.total) },
  { id: "five_quizzes", name: "مثابر", icon: "🎯", desc: "أكمل 5 اختبارات", check: (s) => s.quizResults.length >= 5 },
  { id: "first_interview", name: "أول مقابلة", icon: "🎙️", desc: "أكمل أول مقابلة وهمية", check: (s) => s.interviewResults.length >= 1 },
  { id: "streak_3", name: "استمرارية", icon: "🔥", desc: "سلسلة 3 أيام متتالية", check: (s) => s.daily.streak >= 3 },
  { id: "streak_7", name: "أسبوع كامل", icon: "🔥", desc: "سلسلة 7 أيام متتالية", check: (s) => s.daily.streak >= 7 },
  { id: "streak_30", name: "أسطورة المقابلات", icon: "👑", desc: "سلسلة 30 يومًا متتالية", check: (s) => s.daily.streak >= 30 },
  { id: "five_favorites", name: "جامع المفضلة", icon: "⭐", desc: "أضف 5 أسئلة للمفضلة", check: (s) => Object.keys(s.favorites).length >= 5 },
];

const Progress = (() => {
  function defaultState() {
    return {
      theme: null,
      answeredQuestions: {},
      favorites: {},
      quizResults: [],       // { id, sectionId, sectionName, correct, total, wrongTopics: [], strongTopics: [], date, timeSpentSec }
      interviewResults: [],  // { id, sectionId, sectionName, excellent, ok, weak, total, date }
      daily: { streak: 0, lastDate: null, completedDates: [] },
      earnedBadges: {},
      activity: [],          // { type, label, date }
      lastPositions: {}      // { sectionId: questionIndex } for resume
    };
  }

  function load() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return defaultState();
      const parsed = JSON.parse(raw);
      return Object.assign(defaultState(), parsed);
    } catch (e) {
      console.error("خطأ في قراءة التقدم المحفوظ:", e);
      return defaultState();
    }
  }

  function save(state) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
      console.error("تعذر حفظ التقدم:", e);
    }
  }

  let state = load();

  function persist() { save(state); }

  return {
    getState() { return state; },

    getTheme() { return state.theme; },
    setTheme(t) { state.theme = t; persist(); },

    markAnswered(questionId) {
      if (!state.answeredQuestions[questionId]) {
        state.answeredQuestions[questionId] = Date.now();
        persist();
      }
    },
    isAnswered(questionId) { return !!state.answeredQuestions[questionId]; },
    getAnsweredCount() { return Object.keys(state.answeredQuestions).length; },

    toggleFavorite(questionId) {
      if (state.favorites[questionId]) delete state.favorites[questionId];
      else state.favorites[questionId] = Date.now();
      persist();
      return !!state.favorites[questionId];
    },
    isFavorite(questionId) { return !!state.favorites[questionId]; },
    getFavoriteIds() { return Object.keys(state.favorites); },

    recordQuiz(result) {
      state.quizResults.push(Object.assign({ id: "quiz_" + Date.now(), date: Date.now() }, result));
      this.addActivity("quiz", `أكملت اختبار ${result.sectionName} — ${result.correct}/${result.total}`);
      persist();
    },
    recordInterview(result) {
      state.interviewResults.push(Object.assign({ id: "interview_" + Date.now(), date: Date.now() }, result));
      this.addActivity("interview", `أكملت مقابلة وهمية في ${result.sectionName}`);
      persist();
    },

    recordDailyCompletion() {
      const today = new Date().toISOString().slice(0, 10);
      if (state.daily.lastDate === today) return; // already done today
      const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
      if (state.daily.lastDate === yesterday) {
        state.daily.streak += 1;
      } else {
        state.daily.streak = 1;
      }
      state.daily.lastDate = today;
      state.daily.completedDates.push(today);
      this.addActivity("daily", "أكملت التحدي اليومي 🔥");
      persist();
    },
    getDailyInfo() {
      const today = new Date().toISOString().slice(0, 10);
      return { streak: state.daily.streak, doneToday: state.daily.lastDate === today, completedDates: state.daily.completedDates };
    },

    addActivity(type, label) {
      state.activity.unshift({ type, label, date: Date.now() });
      state.activity = state.activity.slice(0, 20);
      persist();
    },
    getRecentActivity(limit = 5) { return state.activity.slice(0, limit); },

    setLastPosition(sectionId, index) { state.lastPositions[sectionId] = index; persist(); },
    getLastPosition(sectionId) { return state.lastPositions[sectionId] || 0; },

    // --- إحصائيات ---
    getSectionStats(sectionId, questions) {
      const total = questions.length;
      const answered = questions.filter((q) => this.isAnswered(q.id)).length;
      const sectionQuizzes = state.quizResults.filter((q) => q.sectionId === sectionId);
      const avgScore = sectionQuizzes.length
        ? Math.round(sectionQuizzes.reduce((sum, q) => sum + (q.correct / q.total) * 100, 0) / sectionQuizzes.length)
        : null;
      return { total, answered, pct: total ? Math.round((answered / total) * 100) : 0, avgScore, quizCount: sectionQuizzes.length };
    },

    getOverallStats(allSections) {
      let totalQ = 0, answeredQ = 0;
      const sectionPcts = [];
      allSections.forEach((s) => {
        const stats = this.getSectionStats(s.id, s.questions);
        totalQ += stats.total; answeredQ += stats.answered;
        sectionPcts.push({ id: s.id, name: s.name, icon: s.icon, pct: stats.pct, avgScore: stats.avgScore });
      });
      const totalQuizzes = state.quizResults.length;
      const avgQuizScore = totalQuizzes
        ? Math.round(state.quizResults.reduce((sum, q) => sum + (q.correct / q.total) * 100, 0) / totalQuizzes)
        : 0;
      const bestSections = [...sectionPcts].filter((s) => s.avgScore !== null).sort((a, b) => b.avgScore - a.avgScore).slice(0, 5);
      return {
        totalQuestions: totalQ,
        answeredQuestions: answeredQ,
        overallPct: totalQ ? Math.round((answeredQ / totalQ) * 100) : 0,
        totalQuizzes,
        avgQuizScore,
        totalInterviews: state.interviewResults.length,
        bestSections,
        totalFavorites: Object.keys(state.favorites).length
      };
    },

    // --- الشارات ---
    checkAndAwardBadges(totalQuestionsCount) {
      const newlyEarned = [];
      BADGES_DEF.forEach((badge) => {
        if (!state.earnedBadges[badge.id] && badge.check(state, totalQuestionsCount)) {
          state.earnedBadges[badge.id] = Date.now();
          newlyEarned.push(badge);
        }
      });
      if (newlyEarned.length) persist();
      return newlyEarned;
    },
    getAllBadgesWithStatus() {
      return BADGES_DEF.map((b) => ({ ...b, earned: !!state.earnedBadges[b.id] }));
    },
    getEarnedBadgesCount() { return Object.keys(state.earnedBadges).length; },

    isCertificateEligible(allSections) {
      // شرط الحصول على الشهادة: إكمال اختبار واحد على الأقل بنجاح (>=60%) في كل قسم
      return allSections.every((s) => state.quizResults.some((q) => q.sectionId === s.id && q.correct / q.total >= 0.6));
    },

    resetAll() {
      state = defaultState();
      persist();
    }
  };
})();
