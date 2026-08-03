/* =========================================================================
   أسئلة المقابلات البرمجية — app.js
   المنطق الرئيسي: التنقل، العرض، والتفاعل بين كل الوحدات
   ========================================================================= */

/* ---------------------------------------------------------------------- */
/* حالة التطبيق أثناء التشغيل (Runtime State) */
/* ---------------------------------------------------------------------- */
const App = {
  currentView: "home",
  currentSectionId: null,
  currentDifficultyFilter: "all",
  currentQuestionList: [],
  currentQuestionIndex: 0,
  quiz: { questions: [], index: 0, answers: [], startTime: 0, sectionId: null, sectionName: "" },
  interview: { sectionId: null, sectionName: "", count: 10, timePerQ: 120, questions: [], index: 0, results: [], timerId: null, remaining: 0 },
};

function getAllQuestionsFlat() {
  const flat = [];
  QUESTION_BANK.forEach((s) => s.questions.forEach((q) => flat.push({ ...q, sectionId: s.id, sectionName: s.name, sectionIcon: s.icon })));
  return flat;
}
function getSectionById(id) { return QUESTION_BANK.find((s) => s.id === id); }
function getQuestionById(id) { return getAllQuestionsFlat().find((q) => q.id === id); }

/* ---------------------------------------------------------------------- */
/* التهيئة */
/* ---------------------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  registerServiceWorker();
  bindGlobalEvents();
  renderHome();
  setTimeout(() => document.getElementById("splash").classList.add("hide"), 900);
});

function registerServiceWorker() {
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("service-worker.js").catch((err) => console.warn("فشل تسجيل Service Worker:", err));
    });
  }
}

/* ---------------------------------------------------------------------- */
/* الوضع الليلي / الفاتح */
/* ---------------------------------------------------------------------- */
function initTheme() {
  let theme = Progress.getTheme();
  if (!theme) theme = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  applyTheme(theme);
}
function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  document.getElementById("btn-theme").textContent = theme === "dark" ? "☀️" : "🌙";
  Progress.setTheme(theme);
}
function toggleTheme() {
  const current = document.documentElement.getAttribute("data-theme") || "light";
  applyTheme(current === "dark" ? "light" : "dark");
}

/* ---------------------------------------------------------------------- */
/* التوست (إشعارات قصيرة) */
/* ---------------------------------------------------------------------- */
function showToast(message) {
  const host = document.getElementById("toast-host");
  const el = document.createElement("div");
  el.className = "toast";
  el.textContent = message;
  host.appendChild(el);
  setTimeout(() => el.remove(), 2600);
}

function showAchievements(badges) {
  if (!badges || !badges.length) return;
  const badge = badges[0];
  const overlay = document.createElement("div");
  overlay.className = "achievement-overlay";
  overlay.innerHTML = `
    <div class="achievement-modal">
      <div class="a-icon">${badge.icon}</div>
      <h3>شارة جديدة: ${badge.name}!</h3>
      <p>${badge.desc}</p>
      <button class="btn btn-primary btn-block" id="ach-close">رائع!</button>
    </div>`;
  document.body.appendChild(overlay);
  overlay.querySelector("#ach-close").addEventListener("click", () => {
    overlay.remove();
    if (badges.length > 1) showAchievements(badges.slice(1));
  });
}

/* ---------------------------------------------------------------------- */
/* التنقل بين الصفحات */
/* ---------------------------------------------------------------------- */
function navigate(viewName, params = {}) {
  document.querySelectorAll("main.view").forEach((v) => v.classList.remove("active"));
  const target = document.getElementById(`view-${viewName}`);
  if (target) target.classList.add("active");
  window.scrollTo(0, 0);
  App.currentView = viewName;

  document.querySelectorAll(".tab-bar button").forEach((b) => b.classList.remove("active"));
  const tabBtn = document.querySelector(`.tab-bar button[data-nav="${viewName}"]`);
  if (tabBtn) tabBtn.classList.add("active");

  const renderers = {
    home: renderHome,
    sections: renderSectionsList,
    "section-detail": () => renderSectionDetail(params.sectionId || App.currentSectionId),
    concepts: () => renderConcepts(params.sectionId || App.currentSectionId),
    question: () => renderQuestionDetail(params.index !== undefined ? params.index : App.currentQuestionIndex),
    "interview-setup": renderInterviewSetup,
    daily: renderDaily,
    search: renderSearchView,
    favorites: renderFavorites,
    dashboard: renderDashboard,
    badges: renderBadges,
  };
  if (renderers[viewName]) renderers[viewName]();
}

function bindGlobalEvents() {
  document.getElementById("btn-theme").addEventListener("click", toggleTheme);
  document.getElementById("btn-search-top").addEventListener("click", () => navigate("search"));

  document.querySelectorAll("[data-nav]").forEach((el) => {
    el.addEventListener("click", () => navigate(el.getAttribute("data-nav")));
  });

  document.getElementById("home-flashcard").addEventListener("click", function () { this.classList.toggle("flipped"); });
  document.getElementById("btn-start-training").addEventListener("click", () => navigate("sections"));
  document.getElementById("btn-daily-home").addEventListener("click", () => navigate("daily"));

  document.getElementById("concepts-back").addEventListener("click", () => navigate("section-detail"));
  document.getElementById("q-back").addEventListener("click", () => navigate("section-detail"));
  document.getElementById("q-prev").addEventListener("click", () => moveQuestion(-1));
  document.getElementById("q-next").addEventListener("click", () => moveQuestion(1));
  document.getElementById("q-fav-btn").addEventListener("click", onToggleFavoriteCurrentQuestion);

  document.getElementById("sd-start-practice").addEventListener("click", () => startPractice());
  document.getElementById("sd-start-quiz").addEventListener("click", () => startQuiz(App.currentSectionId, 8));
  document.getElementById("sd-start-interview").addEventListener("click", () => {
    navigate("interview-setup");
    preselectInterviewSection(App.currentSectionId);
  });
  document.getElementById("sd-view-concepts").addEventListener("click", () => navigate("concepts"));

  document.getElementById("quiz-exit").addEventListener("click", () => {
    if (confirm("هل تريد إنهاء الاختبار الحالي؟ لن يُحفظ التقدم.")) navigate("section-detail");
  });
  document.getElementById("quiz-retry").addEventListener("click", () => startQuiz(App.quiz.sectionId, App.quiz.questions.length));

  bindInterviewSetupEvents();
  document.getElementById("interview-exit").addEventListener("click", () => {
    clearInterval(App.interview.timerId);
    if (confirm("هل تريد إنهاء المقابلة الحالية؟")) navigate("interview-setup");
  });
  document.getElementById("interview-reveal-btn").addEventListener("click", revealInterviewAnswer);
  document.getElementById("interview-next-btn").addEventListener("click", nextInterviewQuestion);

  document.getElementById("search-input").addEventListener("input", (e) => renderSearchResults(e.target.value));
}

/* ---------------------------------------------------------------------- */
/* الصفحة الرئيسية */
/* ---------------------------------------------------------------------- */
function renderHome() {
  const flat = getAllQuestionsFlat().filter((q) => q.type === "open" || q.type === "scenario");
  const randomQ = flat[Math.floor(Math.random() * flat.length)];
  if (randomQ) {
    document.getElementById("fc-domain").textContent = randomQ.domain;
    document.getElementById("fc-question").textContent = randomQ.title;
    document.getElementById("fc-answer").textContent = truncate(randomQ.answer, 220);
  }
  document.getElementById("home-flashcard").classList.remove("flipped");

  const stats = Progress.getOverallStats(QUESTION_BANK);
  const statsRow = document.getElementById("home-stats");
  statsRow.innerHTML = `
    <div class="stat-chip"><div class="stat-num">${stats.answeredQuestions}</div><div class="stat-label">سؤال محلول</div></div>
    <div class="stat-chip"><div class="stat-num">${stats.totalQuizzes}</div><div class="stat-label">اختبار</div></div>
    <div class="stat-chip"><div class="stat-num">${stats.avgQuizScore}%</div><div class="stat-label">نسبة النجاح</div></div>
    <div class="stat-chip"><div class="stat-num">${Progress.getEarnedBadgesCount()}</div><div class="stat-label">شارة</div></div>`;

  const preview = document.getElementById("home-sections-preview");
  preview.innerHTML = QUESTION_BANK.slice(0, 6).map((s) => sectionCardHtml(s)).join("");
  preview.querySelectorAll(".topic-card").forEach((el) => el.addEventListener("click", () => openSection(el.dataset.id)));

  const recentHost = document.getElementById("home-recent");
  const activity = Progress.getRecentActivity(4);
  if (!activity.length) {
    recentHost.innerHTML = `<div class="empty-state"><p>لم تبدأ أي أسئلة بعد — جرّب سؤالًا من الأعلى!</p></div>`;
  } else {
    recentHost.innerHTML = activity.map((a) => `
      <div class="list-row"><div class="row-icon">${activityIcon(a.type)}</div>
      <div class="row-body"><div class="row-title">${a.label}</div><div class="row-sub">${timeAgo(a.date)}</div></div></div>`).join("");
  }
}
function activityIcon(type) { return { quiz: "✅", interview: "🎙️", daily: "🔥" }[type] || "📌"; }
function timeAgo(ts) {
  const diff = Math.floor((Date.now() - ts) / 60000);
  if (diff < 1) return "الآن";
  if (diff < 60) return `منذ ${diff} دقيقة`;
  const hours = Math.floor(diff / 60);
  if (hours < 24) return `منذ ${hours} ساعة`;
  return `منذ ${Math.floor(hours / 24)} يوم`;
}
function truncate(str, n) { return str && str.length > n ? str.slice(0, n).trim() + "…" : str; }

function sectionCardHtml(s) {
  const stats = Progress.getSectionStats(s.id, s.questions);
  return `
  <div class="topic-card" data-id="${s.id}">
    <div class="topic-top">
      <div class="topic-icon">${s.icon}</div>
      <span class="badge badge-neutral">${s.questions.length} سؤال</span>
    </div>
    <div class="topic-name">${s.name}</div>
    <div class="progress-track"><div class="progress-fill" style="width:${stats.pct}%"></div></div>
    <div class="topic-meta">${stats.pct}% مكتمل</div>
  </div>`;
}

/* ---------------------------------------------------------------------- */
/* قائمة الأقسام */
/* ---------------------------------------------------------------------- */
function renderSectionsList() {
  const grid = document.getElementById("sections-full-grid");
  grid.innerHTML = QUESTION_BANK.map((s) => sectionCardHtml(s)).join("");
  grid.querySelectorAll(".topic-card").forEach((el) => el.addEventListener("click", () => openSection(el.dataset.id)));
}
function openSection(sectionId) {
  App.currentSectionId = sectionId;
  App.currentDifficultyFilter = "all";
  navigate("section-detail", { sectionId });
}

/* ---------------------------------------------------------------------- */
/* تفاصيل القسم */
/* ---------------------------------------------------------------------- */
function renderSectionDetail(sectionId) {
  const section = getSectionById(sectionId);
  if (!section) { navigate("sections"); return; }
  App.currentSectionId = sectionId;

  document.getElementById("sd-icon").textContent = section.icon;
  document.getElementById("sd-title").textContent = section.name;
  document.getElementById("sd-desc").textContent = `${section.questions.length} سؤال — ${section.intro.slice(0, 60)}...`;

  const chipsHost = document.getElementById("sd-filter-chips");
  const filters = [["all", "الكل"], ["easy", "سهل"], ["medium", "متوسط"], ["hard", "صعب"]];
  chipsHost.innerHTML = filters.map(([key, label]) =>
    `<button class="chip ${App.currentDifficultyFilter === key ? "active" : ""}" data-filter="${key}">${label}</button>`).join("");
  chipsHost.querySelectorAll(".chip").forEach((chip) => {
    chip.addEventListener("click", () => {
      App.currentDifficultyFilter = chip.dataset.filter;
      renderSectionDetail(sectionId);
    });
  });

  renderSectionQuestionsList(section);
}

function getFilteredQuestions(section) {
  const filter = App.currentDifficultyFilter;
  return section.questions.filter((q) => filter === "all" || q.difficulty === filter);
}

function renderSectionQuestionsList(section) {
  const listHost = document.getElementById("sd-questions-list");
  const questions = getFilteredQuestions(section);
  if (!questions.length) {
    listHost.innerHTML = `<div class="empty-state"><div class="empty-icon">🗂️</div><h3>لا توجد أسئلة</h3><p>جرّب مستوى صعوبة آخر</p></div>`;
    return;
  }
  listHost.innerHTML = questions.map((q) => `
    <div class="list-row" data-id="${q.id}" style="cursor:pointer;">
      <div class="row-icon">${Progress.isAnswered(q.id) ? "✅" : typeIcon(q.type)}</div>
      <div class="row-body">
        <div class="row-title">${q.title}</div>
        <div class="row-sub"><span class="badge badge-${q.difficulty}" style="margin-left:4px;">${difficultyLabel(q.difficulty)}</span> ⏱️ ${q.timeMinutes} د</div>
      </div>
      <div class="row-chevron">‹</div>
    </div>`).join("");
  listHost.querySelectorAll(".list-row").forEach((row) => {
    row.addEventListener("click", () => {
      App.currentQuestionList = getFilteredQuestions(section).map((q) => q.id);
      const idx = App.currentQuestionList.indexOf(row.dataset.id);
      navigate("question", { index: idx });
    });
  });
}
function typeIcon(type) { return { open: "📖", mcq: "☑️", tf: "🔘", scenario: "🎭" }[type] || "📖"; }
function difficultyLabel(d) { return { easy: "سهل", medium: "متوسط", hard: "صعب" }[d] || d; }

function startPractice() {
  const section = getSectionById(App.currentSectionId);
  App.currentQuestionList = getFilteredQuestions(section).map((q) => q.id);
  if (!App.currentQuestionList.length) { showToast("لا توجد أسئلة في هذا التصنيف"); return; }
  navigate("question", { index: 0 });
}

/* ---------------------------------------------------------------------- */
/* أهم المفاهيم */
/* ---------------------------------------------------------------------- */
function renderConcepts(sectionId) {
  const section = getSectionById(sectionId);
  if (!section) return;
  document.getElementById("concepts-title").textContent = `💡 أهم مفاهيم ${section.name}`;
  document.getElementById("concepts-list").innerHTML = section.concepts.map((c) => `
    <div class="q-block"><h3>${c.title}</h3><div class="q-text-body"><p>${c.body}</p></div></div>`).join("");
}

/* ---------------------------------------------------------------------- */
/* تفاصيل السؤال */
/* ---------------------------------------------------------------------- */
function moveQuestion(delta) {
  const newIndex = App.currentQuestionIndex + delta;
  if (newIndex < 0 || newIndex >= App.currentQuestionList.length) {
    showToast(delta > 0 ? "هذا آخر سؤال في هذا التصنيف 🎉" : "هذا أول سؤال");
    return;
  }
  navigate("question", { index: newIndex });
}

function renderQuestionDetail(index) {
  if (!App.currentQuestionList.length) { navigate("sections"); return; }
  index = Math.max(0, Math.min(index, App.currentQuestionList.length - 1));
  App.currentQuestionIndex = index;
  const qId = App.currentQuestionList[index];
  const q = getQuestionById(qId);
  if (!q) return;

  Progress.markAnswered(q.id);
  const newBadges = Progress.checkAndAwardBadges(getAllQuestionsFlat().length);

  document.getElementById("q-difficulty-badge").textContent = difficultyLabel(q.difficulty);
  document.getElementById("q-difficulty-badge").className = `badge badge-${q.difficulty}`;
  document.getElementById("q-domain-badge").textContent = q.domain;
  document.getElementById("q-type-badge").textContent = typeLabel(q.type);
  document.getElementById("q-title").textContent = q.title;
  document.getElementById("q-time").textContent = `⏱️ الوقت المتوقع: ${q.timeMinutes} دقيقة`;

  const favBtn = document.getElementById("q-fav-btn");
  favBtn.classList.toggle("active", Progress.isFavorite(q.id));
  favBtn.textContent = Progress.isFavorite(q.id) ? "★" : "☆";

  document.getElementById("q-body").innerHTML = `<p>${escapeHtml(q.question)}</p>`;
  document.getElementById("q-answer").innerHTML = `<p>${escapeHtml(q.answer)}</p>`;
  document.getElementById("q-explanation").innerHTML = `<p>${escapeHtml(q.explanation)}</p>`;

  const exampleBlock = document.getElementById("q-example-block");
  if (q.example) {
    exampleBlock.classList.remove("hidden");
    document.getElementById("q-example-code").textContent = q.example;
  } else {
    exampleBlock.classList.add("hidden");
  }

  renderDashList("q-best-practices", q.bestPractices);
  renderDashList("q-mistakes", q.commonMistakes);

  const followupBlock = document.getElementById("q-followup-block");
  if (q.followups && q.followups.length) {
    followupBlock.classList.remove("hidden");
    renderDashList("q-followups", q.followups);
  } else {
    followupBlock.classList.add("hidden");
  }

  const similarHost = document.getElementById("q-similar");
  similarHost.innerHTML = (q.similar && q.similar.length)
    ? q.similar.map((s) => `<span class="similar-tag">${escapeHtml(s)}</span>`).join("")
    : `<span class="similar-tag">لا توجد أسئلة مشابهة مرتبطة بعد</span>`;

  document.getElementById("q-prev").disabled = index === 0;
  document.getElementById("q-next").textContent = index === App.currentQuestionList.length - 1 ? "إنهاء ✓" : "التالي ←";

  if (newBadges.length) showAchievements(newBadges);
}
function typeLabel(t) { return { open: "سؤال مفتوح", mcq: "اختيار من متعدد", tf: "صح أو خطأ", scenario: "سيناريو عملي" }[t] || t; }
function renderDashList(hostId, items) {
  const host = document.getElementById(hostId);
  host.innerHTML = (items && items.length) ? items.map((i) => `<li>${escapeHtml(i)}</li>`).join("") : `<li>لا يوجد</li>`;
}
function escapeHtml(str) { return SearchEngine.escapeHtml(str); }

function onToggleFavoriteCurrentQuestion() {
  const qId = App.currentQuestionList[App.currentQuestionIndex];
  if (!qId) return;
  const isFav = Progress.toggleFavorite(qId);
  const favBtn = document.getElementById("q-fav-btn");
  favBtn.classList.toggle("active", isFav);
  favBtn.textContent = isFav ? "★" : "☆";
  showToast(isFav ? "أُضيف للمفضلة ⭐" : "أُزيل من المفضلة");
  const newBadges = Progress.checkAndAwardBadges(getAllQuestionsFlat().length);
  if (newBadges.length) showAchievements(newBadges);
}

/* ---------------------------------------------------------------------- */
/* الاختبار (Quiz) */
/* ---------------------------------------------------------------------- */
function startQuiz(sectionId, count) {
  const section = getSectionById(sectionId);
  if (!section) return;
  const questions = QuizEngine.generateQuiz(sectionId, count);
  if (!questions.length) { showToast("لا توجد أسئلة اختيار من متعدد كافية في هذا القسم بعد"); return; }
  App.quiz = { questions, index: 0, answers: [], startTime: Date.now(), sectionId, sectionName: section.name };
  document.getElementById("quiz-section-name").textContent = section.name;
  navigate("quiz");
  renderQuizQuestion();
}

function renderQuizQuestion() {
  const { questions, index } = App.quiz;
  const pct = Math.round((index / questions.length) * 100);
  document.getElementById("quiz-progress-fill").style.width = pct + "%";
  const q = questions[index];
  const body = document.getElementById("quiz-body");

  let optionsHtml = "";
  if (q.type === "mcq") {
    optionsHtml = `<div class="quiz-options">${q.options.map((opt, i) => `
      <button class="quiz-option" data-index="${i}"><span class="opt-letter">${["أ", "ب", "ج", "د"][i]}</span><span>${escapeHtml(opt)}</span></button>`).join("")}</div>`;
  } else if (q.type === "tf") {
    optionsHtml = `<div class="tf-options">
      <button class="quiz-option" data-bool="true"><span>✅ صح</span></button>
      <button class="quiz-option" data-bool="false"><span>❌ خطأ</span></button>
    </div>`;
  }

  body.innerHTML = `
    <div class="quiz-question-card">
      <div class="q-count">سؤال ${index + 1} من ${questions.length} — ${q.domain}</div>
      <p class="q-stem">${escapeHtml(q.question)}</p>
    </div>
    ${optionsHtml}
    <div id="quiz-explain-host"></div>
    <button class="btn btn-primary btn-block hidden mt-16" id="quiz-next-inline">
      ${index === questions.length - 1 ? "عرض النتيجة" : "السؤال التالي ←"}
    </button>`;

  body.querySelectorAll(".quiz-option").forEach((btn) => {
    btn.addEventListener("click", () => onQuizAnswer(btn, q));
  });
}

function onQuizAnswer(btn, q) {
  const options = document.querySelectorAll(".quiz-option");
  options.forEach((o) => (o.disabled = true));

  let userAnswer;
  if (q.type === "mcq") userAnswer = parseInt(btn.dataset.index, 10);
  else userAnswer = btn.dataset.bool === "true";

  const isCorrect = QuizEngine.checkAnswer(q, userAnswer);
  btn.classList.add(isCorrect ? "correct" : "incorrect");
  if (!isCorrect) {
    if (q.type === "mcq") options[q.correctIndex].classList.add("correct");
    else document.querySelector(`.quiz-option[data-bool="${q.isTrue}"]`).classList.add("correct");
  }

  document.getElementById("quiz-explain-host").innerHTML = `<div class="quiz-explain">${escapeHtml(q.explanation)}</div>`;
  document.getElementById("quiz-next-inline").classList.remove("hidden");
  document.getElementById("quiz-next-inline").onclick = () => advanceQuiz();

  App.quiz.answers.push({ question: q, userAnswer, correct: isCorrect });
}

function advanceQuiz() {
  App.quiz.index++;
  if (App.quiz.index >= App.quiz.questions.length) {
    finishQuiz();
  } else {
    renderQuizQuestion();
  }
}

function finishQuiz() {
  const analysis = QuizEngine.analyzeResults(App.quiz.answers);
  const timeSpentSec = Math.round((Date.now() - App.quiz.startTime) / 1000);

  Progress.recordQuiz({
    sectionId: App.quiz.sectionId, sectionName: App.quiz.sectionName,
    correct: analysis.correct, total: analysis.total, timeSpentSec
  });
  const newBadges = Progress.checkAndAwardBadges(getAllQuestionsFlat().length);

  navigate("quiz-result");
  const circumference = 2 * Math.PI * 52;
  const ringFill = document.getElementById("result-ring-fill");
  ringFill.style.strokeDasharray = circumference;
  ringFill.style.strokeDashoffset = circumference;
  requestAnimationFrame(() => {
    ringFill.style.strokeDashoffset = circumference - (analysis.pct / 100) * circumference;
  });
  document.getElementById("result-pct").textContent = analysis.pct + "%";
  document.getElementById("result-correct").textContent = analysis.correct;
  document.getElementById("result-wrong").textContent = analysis.total - analysis.correct;
  document.getElementById("result-time").textContent = formatTime(timeSpentSec);
  document.getElementById("result-strong").innerHTML = analysis.strong.map((s) => `<li>${s}</li>`).join("");
  document.getElementById("result-weak").innerHTML = analysis.weak.map((s) => `<li>${s}</li>`).join("");

  if (newBadges.length) setTimeout(() => showAchievements(newBadges), 600);
}
function formatTime(sec) { const m = Math.floor(sec / 60), s = sec % 60; return `${m}:${String(s).padStart(2, "0")}`; }

/* ---------------------------------------------------------------------- */
/* المقابلة الوهمية (Interview Mode) */
/* ---------------------------------------------------------------------- */
function bindInterviewSetupEvents() {
  document.getElementById("interview-count-minus").addEventListener("click", () => {
    App.interview.count = Math.max(3, App.interview.count - 1);
    document.getElementById("interview-count-val").textContent = App.interview.count;
  });
  document.getElementById("interview-count-plus").addEventListener("click", () => {
    App.interview.count = Math.min(30, App.interview.count + 1);
    document.getElementById("interview-count-val").textContent = App.interview.count;
  });
  document.querySelectorAll("#view-interview-setup .select-grid .opt").forEach((opt) => {
    opt.addEventListener("click", function () {
      this.parentElement.querySelectorAll(".opt").forEach((o) => o.classList.remove("active"));
      this.classList.add("active");
      App.interview.timePerQ = parseInt(this.dataset.time, 10);
    });
  });
  document.getElementById("interview-start-btn").addEventListener("click", startInterview);
}

function renderInterviewSetup() {
  const host = document.getElementById("interview-section-select");
  host.innerHTML = QUESTION_BANK.map((s) => `<div class="opt" data-id="${s.id}">${s.icon} ${s.name}</div>`).join("");
  host.querySelectorAll(".opt").forEach((opt) => {
    opt.addEventListener("click", function () {
      host.querySelectorAll(".opt").forEach((o) => o.classList.remove("active"));
      this.classList.add("active");
      App.interview.sectionId = this.dataset.id;
    });
  });
  document.getElementById("interview-count-val").textContent = App.interview.count;
}
function preselectInterviewSection(sectionId) {
  const host = document.getElementById("interview-section-select");
  host.querySelectorAll(".opt").forEach((o) => o.classList.toggle("active", o.dataset.id === sectionId));
  App.interview.sectionId = sectionId;
}

function startInterview() {
  if (!App.interview.sectionId) { showToast("اختر قسمًا أولًا"); return; }
  const section = getSectionById(App.interview.sectionId);
  const pool = QuizEngine.shuffle(section.questions.filter((q) => q.type === "open" || q.type === "scenario"));
  const questions = pool.slice(0, Math.min(App.interview.count, pool.length));
  if (!questions.length) { showToast("لا توجد أسئلة مفتوحة كافية في هذا القسم"); return; }

  App.interview.questions = questions;
  App.interview.index = 0;
  App.interview.results = [];
  App.interview.sectionName = section.name;

  navigate("interview-run");
  renderInterviewQuestion();
}

function renderInterviewQuestion() {
  const { questions, index, timePerQ } = App.interview;
  const q = questions[index];
  document.getElementById("interview-progress-label").textContent = `سؤال ${index + 1} من ${questions.length}`;
  document.getElementById("interview-progress-fill").style.width = Math.round((index / questions.length) * 100) + "%";
  document.getElementById("interview-q-domain").textContent = `${q.domain} — ${difficultyLabel(q.difficulty)}`;
  document.getElementById("interview-q-stem").textContent = q.question;
  document.getElementById("interview-answer-input").value = "";
  document.getElementById("interview-model-answer-wrap").classList.add("hidden");
  document.getElementById("interview-reveal-btn").classList.remove("hidden");
  document.querySelectorAll(".self-rate").forEach((b) => b.classList.remove("active"));
  App.interview.selectedRating = null;

  startInterviewTimer(timePerQ);
}

function startInterviewTimer(seconds) {
  clearInterval(App.interview.timerId);
  App.interview.remaining = seconds;
  updateTimerDisplay();
  App.interview.timerId = setInterval(() => {
    App.interview.remaining--;
    updateTimerDisplay();
    if (App.interview.remaining <= 0) {
      clearInterval(App.interview.timerId);
      revealInterviewAnswer();
    }
  }, 1000);
}
function updateTimerDisplay() {
  const el = document.getElementById("interview-timer");
  el.textContent = "⏱️ " + formatTime(App.interview.remaining);
  el.classList.toggle("urgent", App.interview.remaining <= 15);
}

function revealInterviewAnswer() {
  clearInterval(App.interview.timerId);
  const q = App.interview.questions[App.interview.index];
  document.getElementById("interview-model-answer").innerHTML = `<p>${escapeHtml(q.answer)}</p>`;
  document.getElementById("interview-model-answer-wrap").classList.remove("hidden");
  document.getElementById("interview-reveal-btn").classList.add("hidden");

  document.querySelectorAll(".self-rate").forEach((btn) => {
    btn.onclick = () => {
      document.querySelectorAll(".self-rate").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      App.interview.selectedRating = parseInt(btn.dataset.rate, 10);
    };
  });
}

function nextInterviewQuestion() {
  const rating = App.interview.selectedRating || 2; // افتراضي: مقبولة إن لم يُقيّم
  const q = App.interview.questions[App.interview.index];
  App.interview.results.push({ question: q, rating });

  App.interview.index++;
  if (App.interview.index >= App.interview.questions.length) {
    finishInterview();
  } else {
    renderInterviewQuestion();
  }
}

function finishInterview() {
  const results = App.interview.results;
  const excellent = results.filter((r) => r.rating === 3).length;
  const ok = results.filter((r) => r.rating === 2).length;
  const weak = results.filter((r) => r.rating === 1).length;
  const total = results.length;
  const scorePct = total ? Math.round(((excellent * 100 + ok * 66 + weak * 33) / total)) : 0;

  Progress.recordInterview({ sectionId: App.interview.sectionId, sectionName: App.interview.sectionName, excellent, ok, weak, total });
  const newBadges = Progress.checkAndAwardBadges(getAllQuestionsFlat().length);

  const domainStats = {};
  results.forEach((r) => {
    const d = r.question.domain;
    if (!domainStats[d]) domainStats[d] = { sum: 0, count: 0 };
    domainStats[d].sum += r.rating; domainStats[d].count++;
  });
  const strong = [], weakList = [];
  Object.entries(domainStats).forEach(([d, s]) => ((s.sum / s.count) >= 2.3 ? strong : weakList).push(d));

  navigate("interview-result");
  const circumference = 2 * Math.PI * 52;
  const ringFill = document.getElementById("ir-ring-fill");
  ringFill.style.strokeDasharray = circumference;
  ringFill.style.strokeDashoffset = circumference;
  requestAnimationFrame(() => { ringFill.style.strokeDashoffset = circumference - (scorePct / 100) * circumference; });
  document.getElementById("ir-pct").textContent = scorePct + "%";
  document.getElementById("ir-excellent").textContent = excellent;
  document.getElementById("ir-ok").textContent = ok;
  document.getElementById("ir-weak").textContent = weak;
  document.getElementById("ir-strong").innerHTML = (strong.length ? strong : ["استمر في التدرب!"]).map((s) => `<li>${s}</li>`).join("");
  document.getElementById("ir-weak-list").innerHTML = (weakList.length ? weakList : ["أداء متوازن في كل المجالات"]).map((s) => `<li>${s}</li>`).join("");

  if (newBadges.length) setTimeout(() => showAchievements(newBadges), 600);
}

/* ---------------------------------------------------------------------- */
/* التحدي اليومي */
/* ---------------------------------------------------------------------- */
function dailyQuestionForToday() {
  const flat = getAllQuestionsFlat().filter((q) => q.type === "open" || q.type === "scenario");
  const dateStr = new Date().toISOString().slice(0, 10);
  let hash = 0;
  for (let i = 0; i < dateStr.length; i++) hash = (hash * 31 + dateStr.charCodeAt(i)) >>> 0;
  return flat[hash % flat.length];
}

function renderDaily() {
  const info = Progress.getDailyInfo();
  document.getElementById("daily-streak-num").textContent = `${info.streak} يوم`;
  const daysHost = document.getElementById("daily-streak-days");
  daysHost.innerHTML = Array.from({ length: 7 }, (_, i) => {
    const d = new Date(Date.now() - (6 - i) * 86400000).toISOString().slice(0, 10);
    return `<span class="d ${info.completedDates.includes(d) ? "done" : ""}"></span>`;
  }).join("");

  const q = dailyQuestionForToday();
  const wrap = document.getElementById("daily-question-wrap");
  if (info.doneToday) {
    wrap.innerHTML = `
      <div class="q-block answer-block text-center" style="padding:30px;">
        <h3 style="justify-content:center;">✅ أكملت تحدي اليوم!</h3>
        <p style="margin-top:8px;">عد غدًا لتحدٍ جديد وحافظ على سلسلتك 🔥</p>
      </div>`;
    return;
  }
  wrap.innerHTML = `
    <div class="q-block">
      <h3>${q.sectionIcon} ${q.domain} — ${difficultyLabel(q.difficulty)}</h3>
      <div class="q-text-body"><p>${escapeHtml(q.question)}</p></div>
    </div>
    <button class="btn btn-secondary btn-block" id="daily-reveal-btn">عرض الإجابة النموذجية</button>
    <div id="daily-answer-wrap" class="hidden mt-16">
      <div class="q-block answer-block"><h3>✅ الإجابة</h3><div class="q-text-body"><p>${escapeHtml(q.answer)}</p></div></div>
      <button class="btn btn-primary btn-block mt-16" id="daily-complete-btn">أكملت التحدي ✓</button>
    </div>`;
  document.getElementById("daily-reveal-btn").addEventListener("click", () => {
    document.getElementById("daily-answer-wrap").classList.remove("hidden");
    document.getElementById("daily-reveal-btn").classList.add("hidden");
  });
  document.getElementById("daily-complete-btn").addEventListener("click", () => {
    Progress.markAnswered(q.id);
    Progress.recordDailyCompletion();
    const newBadges = Progress.checkAndAwardBadges(getAllQuestionsFlat().length);
    showToast("أحسنت! 🔥 استمرت سلسلتك");
    renderDaily();
    if (newBadges.length) showAchievements(newBadges);
  });
}

/* ---------------------------------------------------------------------- */
/* البحث */
/* ---------------------------------------------------------------------- */
function renderSearchView() {
  document.getElementById("search-input").value = "";
  document.getElementById("search-results").innerHTML = `
    <div class="empty-state"><div class="empty-icon">🔍</div><h3>ابحث في بنك الأسئلة</h3><p>اكتب كلمة مفتاحية مثل "Closure" أو "SOLID" أو "Git"</p></div>`;
  setTimeout(() => document.getElementById("search-input").focus(), 300);
}
function renderSearchResults(term) {
  const host = document.getElementById("search-results");
  if (!term.trim()) { renderSearchView(); return; }
  const results = SearchEngine.search(term);
  if (!results.length) {
    host.innerHTML = `<div class="empty-state"><div class="empty-icon">🕵️</div><h3>لا توجد نتائج</h3><p>جرّب كلمات مفتاحية أخرى</p></div>`;
    return;
  }
  host.innerHTML = results.map((r) => `
    <div class="list-row" data-section="${r.sectionId}" data-qid="${r.question.id}" style="cursor:pointer;">
      <div class="row-icon">${r.sectionIcon}</div>
      <div class="row-body">
        <div class="row-title">${SearchEngine.highlight(r.question.title, term)}</div>
        <div class="row-sub">${r.sectionName} · ${SearchEngine.highlight(truncate(r.snippet, 70), term)}</div>
      </div>
      <div class="row-chevron">‹</div>
    </div>`).join("");
  host.querySelectorAll(".list-row").forEach((row) => {
    row.addEventListener("click", () => {
      const section = getSectionById(row.dataset.section);
      App.currentSectionId = section.id;
      App.currentQuestionList = section.questions.map((q) => q.id);
      const idx = App.currentQuestionList.indexOf(row.dataset.qid);
      navigate("question", { index: idx });
    });
  });
}

/* ---------------------------------------------------------------------- */
/* المفضلة */
/* ---------------------------------------------------------------------- */
function renderFavorites() {
  const ids = Progress.getFavoriteIds();
  const host = document.getElementById("favorites-list");
  if (!ids.length) {
    host.innerHTML = `<div class="empty-state"><div class="empty-icon">⭐</div><h3>لا توجد أسئلة مفضّلة بعد</h3><p>اضغط على أيقونة النجمة داخل أي سؤال لحفظه هنا</p></div>`;
    return;
  }
  const flat = getAllQuestionsFlat();
  const favQuestions = ids.map((id) => flat.find((q) => q.id === id)).filter(Boolean);
  host.innerHTML = favQuestions.map((q) => `
    <div class="list-row" data-section="${q.sectionId}" data-qid="${q.id}" style="cursor:pointer;">
      <div class="row-icon">${q.sectionIcon}</div>
      <div class="row-body"><div class="row-title">${q.title}</div><div class="row-sub">${q.sectionName}</div></div>
      <div class="row-chevron">‹</div>
    </div>`).join("");
  host.querySelectorAll(".list-row").forEach((row) => {
    row.addEventListener("click", () => {
      const section = getSectionById(row.dataset.section);
      App.currentSectionId = section.id;
      App.currentQuestionList = section.questions.map((q) => q.id);
      const idx = App.currentQuestionList.indexOf(row.dataset.qid);
      navigate("question", { index: idx });
    });
  });
}

/* ---------------------------------------------------------------------- */
/* لوحة التحكم */
/* ---------------------------------------------------------------------- */
function renderDashboard() {
  const stats = Progress.getOverallStats(QUESTION_BANK);
  const daily = Progress.getDailyInfo();

  const circumference = 2 * Math.PI * 38;
  const ringFill = document.getElementById("dash-ring-fill");
  ringFill.style.strokeDasharray = circumference;
  ringFill.style.strokeDashoffset = circumference - (stats.overallPct / 100) * circumference;
  document.getElementById("dash-ring-txt").textContent = stats.overallPct + "%";
  document.getElementById("dash-hero-sub").textContent = `${stats.answeredQuestions} من ${stats.totalQuestions} سؤال`;

  document.getElementById("dash-streak-num").textContent = `${daily.streak} يوم`;
  document.getElementById("dash-answered").textContent = stats.answeredQuestions;
  document.getElementById("dash-quizzes").textContent = stats.totalQuizzes;
  document.getElementById("dash-avg").textContent = stats.avgQuizScore + "%";
  document.getElementById("dash-interviews").textContent = stats.totalInterviews;

  const bestHost = document.getElementById("dash-best-sections");
  if (!stats.bestSections.length) {
    bestHost.innerHTML = `<p style="font-size:12.5px;color:var(--ink-faint);text-align:center;padding:16px;">أكمل اختبارًا واحدًا على الأقل لرؤية أفضل أقسامك</p>`;
  } else {
    bestHost.innerHTML = stats.bestSections.map((s, i) => `
      <div class="bs-row"><div class="bs-rank">${i + 1}</div><div class="bs-name">${s.icon} ${s.name}</div><div class="bs-pct">${s.avgScore}%</div></div>`).join("");
  }

  const badgesPreview = Progress.getAllBadgesWithStatus().slice(0, 6);
  document.getElementById("dash-badges-preview").innerHTML = badgesPreview.map(badgeTileHtml).join("");

  const activity = Progress.getRecentActivity(6);
  const actHost = document.getElementById("dash-recent-activity");
  actHost.innerHTML = activity.length
    ? activity.map((a) => `<div class="list-row"><div class="row-icon">${activityIcon(a.type)}</div><div class="row-body"><div class="row-title">${a.label}</div><div class="row-sub">${timeAgo(a.date)}</div></div></div>`).join("")
    : `<div class="empty-state"><p>لا يوجد نشاط بعد</p></div>`;
}
function badgeTileHtml(b) {
  return `<div class="badge-tile ${b.earned ? "earned" : ""}"><div class="b-icon">${b.icon}</div><div class="b-name">${b.name}</div></div>`;
}

/* ---------------------------------------------------------------------- */
/* الشارات والشهادة */
/* ---------------------------------------------------------------------- */
function renderBadges() {
  const all = Progress.getAllBadgesWithStatus();
  document.getElementById("badges-full-grid").innerHTML = all.map(badgeTileHtml).join("");

  const certHost = document.getElementById("certificate-wrap");
  const eligible = Progress.isCertificateEligible(QUESTION_BANK);
  if (eligible) {
    certHost.innerHTML = `
      <div class="certificate">
        <div class="cert-mark">🎓</div>
        <h2>شهادة إتمام</h2>
        <p>مُنحت لإتمام اختبارات ناجحة في جميع الأقسام المتاحة</p>
        <div class="cert-name">مبرمج مستعد للمقابلات</div>
        <p>أسئلة المقابلات البرمجية · ${new Date().toLocaleDateString("ar-EG", { year: "numeric", month: "long", day: "numeric" })}</p>
        <p class="cert-issuer">بإشراف <span class="term-en">@prof.i3lam_ali</span></p>
      </div>`;
  } else {
    const remaining = QUESTION_BANK.filter((s) => !Progress.getState().quizResults.some((q) => q.sectionId === s.id && q.correct / q.total >= 0.6));
    certHost.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">🎓</div>
        <h3>الشهادة غير مفتوحة بعد</h3>
        <p>أكمل اختبارًا بنجاح (60% فأعلى) في ${remaining.length} قسم متبقٍ للحصول على شهادة الإتمام</p>
      </div>`;
  }
}
