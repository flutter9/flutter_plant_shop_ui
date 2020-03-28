'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/index.html": "e6e25ef07ab061f3396db68372e4cc59",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "9a62a954b81a1ad45a58b9bcea89b50b",
"/assets/assets/images/plant2.png": "c039cc11f9f41a900d6ec4cfc2f69cf4",
"/assets/assets/images/plant1.png": "e558342313407a10a23bd0a0a12f44ea",
"/assets/assets/images/plant0.png": "3f819afb2b5882c99759d45dcd7c291a",
"/assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/AssetManifest.json": "188f58b11a4e4aa184b7f6b0493956b0",
"/assets/LICENSE": "964211db6a8b173b1744e68da77ce459",
"/main.dart.js": "add3fe6e29087a2961284c2604040f0b"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
