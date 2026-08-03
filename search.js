/* =========================================================================
   أسئلة المقابلات البرمجية — البحث الفوري (search.js)
   ========================================================================= */

const SearchEngine = (() => {
  let flatIndex = null;

  function buildIndex() {
    flatIndex = [];
    QUESTION_BANK.forEach((section) => {
      section.questions.forEach((q) => {
        const haystack = [
          q.title, q.question, q.answer, q.explanation, q.domain,
          (q.followups || []).join(" "), (q.similar || []).join(" ")
        ].join(" ").toLowerCase();
        flatIndex.push({ sectionId: section.id, sectionName: section.name, sectionIcon: section.icon, question: q, haystack });
      });
    });
    return flatIndex;
  }

  function normalize(str) {
    return (str || "").toLowerCase().trim();
  }

  function highlight(text, term) {
    if (!term) return escapeHtml(text);
    const idx = normalize(text).indexOf(term);
    if (idx === -1) return escapeHtml(text);
    const before = escapeHtml(text.slice(0, idx));
    const match = escapeHtml(text.slice(idx, idx + term.length));
    const after = escapeHtml(text.slice(idx + term.length));
    return `${before}<mark>${match}</mark>${after}`;
  }

  function escapeHtml(str) {
    return (str || "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  }

  return {
    search(term) {
      if (!flatIndex) buildIndex();
      const t = normalize(term);
      if (!t) return [];
      return flatIndex
        .filter((item) => item.haystack.includes(t))
        .slice(0, 60)
        .map((item) => ({ ...item, snippet: buildSnippet(item.question, t) }));
    },
    highlight,
    escapeHtml,
    rebuildIndex: buildIndex
  };

  function buildSnippet(q, term) {
    // يُرجع أول مصدر يحتوي على المصطلح المطلوب لعرضه كمعاينة
    const sources = [q.title, q.question, q.answer];
    for (const s of sources) {
      if (s && normalize(s).includes(term)) return s;
    }
    return q.question;
  }
})();
