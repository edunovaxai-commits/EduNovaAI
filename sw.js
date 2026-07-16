// ======================================
// File : sw.js (NEW FILE)
// Service Worker
// ======================================

const CACHE_NAME="EduNovaAI-v1";

const urls=[

"/",

"index.html",

"login.html",

"signup.html",

"dashboard.html",

"profile.html",

"notes.html",

"quiz.html",

"certificate.html",

"progress.html",

"leaderboard.html",

"settings.html",

"papers.html",

"style.css",

"script.js"

];

self.addEventListener("install",event=>{

event.waitUntil(

caches.open(CACHE_NAME)

.then(cache=>cache.addAll(urls))

);

});

self.addEventListener("fetch",event=>{

event.respondWith(

caches.match(event.request)

.then(response=>{

return response || fetch(event.request);

})

);

});
