 /*
 self.addEventListener("install", e=> {
    e.waitUntil(
        caches.open("static").then(cache => {
            return cache.addAll(["./", "./src/master.css", "./images/logo192.png"]);
        })
    );
 });

 self.addEventListener("fetch", e=> {
    e.respondWith(
        caches.match(e.request).then(response => {
            return response || fetch(e.request);
        })
    )
 });
 */

 self.addEventListener('install', (e) => {
    e.waitUntil(
      caches.open('static').then((cache) => cache.addAll([
        //'sw.js',
        'EV90.html',
        
      ])),
    );
  });
  
  self.addEventListener('fetch', (e) => {
    console.log(e.request.url);
    e.respondWith(
      caches.match(e.request).then((response) => response || fetch(e.request)),
    );
  });
