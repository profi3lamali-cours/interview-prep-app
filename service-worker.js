// أسئلة المقابلات البرمجية — Service Worker
// يوفر دعم العمل بدون اتصال (Offline Mode) عبر تخزين الأصول الأساسية مؤقتًا

const CACHE_VERSION = "v1.0.0";
const STATIC_CACHE = `interview-app-static-${CACHE_VERSION}`;
const RUNTIME_CACHE = `interview-app-runtime-${CACHE_VERSION}`;

const CORE_ASSETS = [
  "./",
  "./index.html",
  "./style.css",
  "./app.js",
  "./questions.js",
  "./quiz.js",
  "./search.js",
  "./progress.js",
  "./manifest.json",
  "./assets/icons/icon-192.png",
  "./assets/icons/icon-512.png",
  "./assets/icons/favicon-32.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE).then((cache) => cache.addAll(CORE_ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter((key) => key !== STATIC_CACHE && key !== RUNTIME_CACHE)
            .map((key) => caches.delete(key))
        )
      )
      .then(() => self.clients.claim())
  );
});

// استراتيجية: Cache First للأصول الثابتة، Network First مع fallback للباقي
self.addEventListener("fetch", (event) => {
  const { request } = event;
  if (request.method !== "GET") return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  event.respondWith(
    caches.match(request).then((cached) => {
      if (cached) {
        // تحديث في الخلفية (stale-while-revalidate)
        fetchAndCache(request);
        return cached;
      }
      return fetchAndCache(request).catch(() => {
        if (request.mode === "navigate") {
          return caches.match("./index.html");
        }
        return new Response("", { status: 408, statusText: "غير متصل" });
      });
    })
  );
});

function fetchAndCache(request) {
  return fetch(request).then((response) => {
    if (response && response.status === 200) {
      const responseClone = response.clone();
      caches.open(RUNTIME_CACHE).then((cache) => cache.put(request, responseClone));
    }
    return response;
  });
}

// دعم رسائل من التطبيق (مثل تخطي الانتظار عند تحديث جديد)
self.addEventListener("message", (event) => {
  if (event.data === "SKIP_WAITING") {
    self.skipWaiting();
  }
});
