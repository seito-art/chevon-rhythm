const CACHE='chevon-v2';
const CORE=["./index.html", "./manifest.webmanifest", "./icon-192.png", "./icon-512.png", "./audio/song01.mp4", "./audio/song02.mp4", "./audio/song03.mp4", "./audio/song04.mp4", "./audio/song05.mp4", "./audio/song06.mp4", "./audio/song07.mp4", "./audio/song08.mp4", "./audio/song09.mp4", "./audio/song10.mp4", "./audio/song11.mp4", "./audio/song12.mp4", "./audio/song13.mp4", "./audio/song14.mp4"];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).then(x=>{const y=x.clone();caches.open(CACHE).then(c=>c.put(e.request,y));return x}).catch(()=>caches.match('./index.html'))));});
