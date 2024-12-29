'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "17b8ce2958320353151b3c40fea25c09",
"assets/AssetManifest.bin.json": "2f41c2cf058e06e4f2b06d02d68009d7",
"assets/AssetManifest.json": "d3270e1c312e0c77d88c1961b89ed524",
"assets/assets/images/angry.jpg": "6de7280ce17110be7b9fdd8b1c27d759",
"assets/assets/images/blue-btn-p.png": "64614dc48d249dedd722c292161bd400",
"assets/assets/images/blue-btn.png": "9d490552c5501c757420663743b3a537",
"assets/assets/images/cockroach.gif": "70dbe0d6f700039307c437b0402382e2",
"assets/assets/images/compass_arrow.png": "178e1804ddbd9c190feeaaf99e4318a8",
"assets/assets/images/confused.webp": "03d2e04bafd1ceb29afaf4bf96f9aac1",
"assets/assets/images/corgi-butt.png": "0508930fb4b903ada9d5b770a7c0ec49",
"assets/assets/images/corgi.png": "970e7369620d792bd32b765e3bf19f36",
"assets/assets/images/cossack.png": "7b31873c80b9e86677926aa7d6c3c2e5",
"assets/assets/images/cossack_2.png": "cc89381add6c11e906bbe4037f66764d",
"assets/assets/images/cossack_3.png": "7ba84477d81b3b65707f260f6ce42c40",
"assets/assets/images/desparate.webp": "248f2cfecadb3512e133c667ec67cd52",
"assets/assets/images/empty.png": "ef764a7392b83b68452bdf5ac12e95d1",
"assets/assets/images/explosion.png": "1172d689fabe4adb5ce072e475241cc5",
"assets/assets/images/falling.jpg": "f791fd79a6c1b7ba77b135b9d1848b49",
"assets/assets/images/fooled.webp": "f9b3369d73888d1359479ddd1ea1d691",
"assets/assets/images/green-btn-p.png": "a0048460985ae34d083940266f25549c",
"assets/assets/images/green-btn.png": "60fd446543e792350e1f5424f4cec91e",
"assets/assets/images/Kate.jpg": "dfa697ecb77d1b9d873f02a0412ce4cb",
"assets/assets/images/pointing.jpg": "46467e55efe217500aef49e53d726380",
"assets/assets/images/red-btn-p.png": "04d5467cd0886b75c754f08d5cb72053",
"assets/assets/images/red-btn.png": "893523f64499837a67e39e0c199fd61f",
"assets/assets/images/sad.webp": "06c937a438d9ac3863a62e68c50f9515",
"assets/assets/images/stain.png": "fa940332d4c01aa19d46b4bc5a7d6efb",
"assets/assets/images/Tafa.jpg": "7b6aff701493dea685dabca4988526cf",
"assets/assets/images/three.webp": "be7cc9c15e0fb681bcfeafc0c324bf04",
"assets/assets/images/wait.jpg": "bb101b3beb569675be207d611af0f429",
"assets/assets/images/win.webp": "158bfc1dfe6bcfa4e26a59dc314a67d0",
"assets/assets/sounds/alert.m4a": "44f46cdd4e27c9f1c42340ec7236cb2a",
"assets/assets/sounds/radar.mp3": "b1ea1b034fc4ac2fb8a86b8797c4da70",
"assets/assets/sounds/start.mp3": "f6770e81732fb5ca80c374cf73c36c95",
"assets/assets/sounds/victory_voice.mp3": "8df5832fa105340de4104625a163edb3",
"assets/assets/sounds/win.mp3": "2b66f283554e11223972c3e0af8eb069",
"assets/assets/texts/states.json": "b86b1a981dd73384c33587a4be99074d",
"assets/assets/texts/testing_states.json": "0b4d60b4fc3d7a3b0b99c8d00228cf2f",
"assets/assets/videos/dance.mp4": "6da09c2276c5b6d9505a42033074c31d",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/NOTICES": "49355485d35ba90664fd46a9c88be8f6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "91e36142562310f36a46cf9c5a3a75c8",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "4472fe285b0ee81e20b18181cf58ef32",
"/": "4472fe285b0ee81e20b18181cf58ef32",
"main.dart.js": "d083bfa8378f8d2b1dbea70de84add60",
"manifest.json": "65cc38aa0f858efdda0bdfdee09e494f",
"version.json": "3e0c0d640fa947c55c65ce9052ba9294"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
