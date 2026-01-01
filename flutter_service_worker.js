'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "721b7f247d6d2ab3c1b82a46771345c5",
".git/config": "0d52cb2a134d30d50453701ee56e0adc",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "58317a60900a2671988da36afe030ad4",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "7071d5b3d899c48b6d9cc2d1cb9a5898",
".git/logs/refs/heads/master": "7071d5b3d899c48b6d9cc2d1cb9a5898",
".git/logs/refs/remotes/origin/master": "5f70724f145df268c0a4dbb830a85177",
".git/objects/00/2bb23b2332bb633382597f8ee03ca80a8dd453": "70b4a0027c87187badff3a89cac52579",
".git/objects/01/6680e7a6bfaa58d78f729b5f22e0e73748c266": "2446e515c63bc2fb2978fc790b9cdc27",
".git/objects/08/27c17254fd3959af211aaf91a82d3b9a804c2f": "360dc8df65dabbf4e7f858711c46cc09",
".git/objects/15/7776fa12f7a1452c9114f5b09b16aeb57dc828": "d039f1e3638187013e5266c1cd89ff23",
".git/objects/1c/b6617c951c8c232dea46fc2fdf2b921a24bc2c": "e98b2fb6b3337f0b94ca3b946c7b5056",
".git/objects/27/57b044103b94310e926e2a1e34162f08315b95": "ff2c7012ce420aa2cd7a6c5c7c6a5be8",
".git/objects/2c/18605d4b30e630d4a3cfe24c314c43ff6136a5": "e6faecd357fae35c602a89268a784eeb",
".git/objects/2c/8e48785eda3cfef23b8e47ddd1f0e02767c98b": "6e411d04af99f0e67ef8619146ddd34a",
".git/objects/3a/8cda5335b4b2a108123194b84df133bac91b23": "1636ee51263ed072c69e4e3b8d14f339",
".git/objects/44/c6a01cd4876cff8cb75d6c145e2bac6bd56042": "74c11912de36f63ed62798a69a3aa2e7",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/49/6eeb01c053f5d2a00a4a088927c11c472eb9bb": "008d80d7ef0f543dd44d664e14bb672d",
".git/objects/4b/985f5353dcb7588606baaa315f15b1acfa0dce": "303d2fd24a753eebdfe05af617cfbb04",
".git/objects/4e/86ba00e431c1ea05d99c82813aee4d9c218846": "3a5e7f8c0516b9983a09db2a38f8d909",
".git/objects/4f/234d5f1a5f40b8cb61c6e4ee9234c91be4afe0": "33ade098b9a6b6cea31642043dcb4987",
".git/objects/51/03e757c71f2abfd2269054a790f775ec61ffa4": "d437b77e41df8fcc0c0e99f143adc093",
".git/objects/57/01463f81715472234ec025a3e3634a58722e28": "2b19a1879ce804d101a1ea32d87de207",
".git/objects/5d/c024a4bad1b2d3e0a98c32e2fdffc67659f369": "80cf1d745b0f8b07f8abe6e405026c08",
".git/objects/60/e153104df280ee4b8b8df53fe50527da402fe6": "7fe1133c9c459891ea98b80b33d220ab",
".git/objects/67/143b795a7a453e23be6ec0b5533fccfcedb2c3": "8895f67f35d5dda13cfb647610fe714c",
".git/objects/68/43fddc6aef172d5576ecce56160b1c73bc0f85": "2a91c358adf65703ab820ee54e7aff37",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6d/bf138b671754dfefe7c3384caaace1c3e39c69": "54eb1e80d1078f6551fd018b92fa91c6",
".git/objects/6f/7661bc79baa113f478e9a717e0c4959a3f3d27": "985be3a6935e9d31febd5205a9e04c4e",
".git/objects/78/c1dfa7e479459d02e056f4612ca79dd4245456": "e50365e94be780104ee63a89aa971323",
".git/objects/7a/a659d5b0c07d6426fbbc6526e69ab4ea0b411d": "f417434d10cdcbf6c0757159813acd82",
".git/objects/7c/3463b788d022128d17b29072564326f1fd8819": "37fee507a59e935fc85169a822943ba2",
".git/objects/81/1ef8d7f75224c896c22e9539e6567c68a75219": "4525125e4ee004423c9fa9d515bd5260",
".git/objects/81/3ff413353b7520a9babdf59b68d1c3002a7b78": "837844d81f48cbdc6f4cde624c74d70c",
".git/objects/84/36c30734b497719f76f0d69124496e5f9441e1": "90c3804fa8a1d34bce23bf07159e54c6",
".git/objects/85/63aed2175379d2e75ec05ec0373a302730b6ad": "997f96db42b2dde7c208b10d023a5a8e",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8e/21753cdb204192a414b235db41da6a8446c8b4": "1e467e19cabb5d3d38b8fe200c37479e",
".git/objects/93/b363f37b4951e6c5b9e1932ed169c9928b1e90": "c8d74fb3083c0dc39be8cff78a1d4dd5",
".git/objects/95/161bd98375cbb5d5235e724671fe2f3fb1296b": "bb02820142bcb48fb28df6c8847ce3bf",
".git/objects/a5/80519da5033c75ecc77ff239e19c1d6b645324": "911d5dbbdb3c69e05038b9117f0885cb",
".git/objects/a6/4a26d42097987f4e0cc3581eb98d202b00b284": "6bb0ebdfbf5eb0c0a9d99f4c38ddcdd2",
".git/objects/a7/3f4b23dde68ce5a05ce4c658ccd690c7f707ec": "ee275830276a88bac752feff80ed6470",
".git/objects/a9/016462e5df907618513b2fd94391a24c734e6d": "4e679ae6f16244febc5af92dc0d69aba",
".git/objects/ab/a1107bff4756ff586b1ceafd51a4e7f1902712": "5c89ab08eb54a76671d1e4b88d140434",
".git/objects/ad/ced61befd6b9d30829511317b07b72e66918a1": "37e7fcca73f0b6930673b256fac467ae",
".git/objects/ae/3c9cd77692a8f893cae679a936c2482ac5d3b1": "c7b7d50b4844e34cbdac58fe73905048",
".git/objects/b1/a440225a89d7bb4639548b671fc149d0a42151": "d05ae71014bf5dc30063e688ce466e81",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/3e39bd49dfaf9e225bb598cd9644f833badd9a": "666b0d595ebbcc37f0c7b61220c18864",
".git/objects/bb/9fc5f7549a8a8f395df3aa81e943f96fb1bdbf": "ef1f08e7dc3fe4db6c8bcd5b5c28350b",
".git/objects/c4/414db6a212024570c7e6dea21b0821964f6943": "910ce4e40b37974920a2adb48447823b",
".git/objects/c8/3af99da428c63c1f82efdcd11c8d5297bddb04": "144ef6d9a8ff9a753d6e3b9573d5242f",
".git/objects/c9/b4df44b0f3e1fbbe112e285de5915dae9c89ec": "0c996db7dacc7d9e3e5a4721550fa371",
".git/objects/ce/14496026c2e302a3b26c5d5c050c0b6086d20c": "5c96f080faac46cff05f0ea347f0b2ee",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/0a01f89a9fa1dea9564ff762f3d5b6043fb505": "ec7277678f607621006502f173412131",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d9/5b1d3499b3b3d3989fa2a461151ba2abd92a07": "a072a09ac2efe43c8d49b7356317e52e",
".git/objects/dc/e5c88bd579bfcd3251cfbd3726a60ca4cb1f24": "2e6e005cf3cce730c80227e4537ebcb9",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f1/46df94d8e4d764ec1fed27940dd4d1898c467a": "e5c6c6d8024de332ee16f53987a7e8a0",
".git/objects/f3/3e0726c3581f96c51f862cf61120af36599a32": "afcaefd94c5f13d3da610e0defa27e50",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f6/e6c75d6f1151eeb165a90f04b4d99effa41e83": "95ea83d65d44e4c524c6d51286406ac8",
".git/objects/f7/e675a7fe59f9bb9e2f9c271e976986b05d5d50": "a2c87afd4eefd594dca777cdb48c3ccc",
".git/objects/fd/05cfbc927a4fedcbe4d6d4b62e2c1ed8918f26": "5675c69555d005a1a244cc8ba90a402c",
".git/refs/heads/master": "f62ab50e93e62ca97f89fb55df5b6211",
".git/refs/remotes/origin/master": "f62ab50e93e62ca97f89fb55df5b6211",
"assets/AssetManifest.bin": "3baaeef813f9f72ee1a7f8f5b124dbe3",
"assets/AssetManifest.bin.json": "edf6a4e14999eb325294f126538a5173",
"assets/assets/audio/Lacintro.mp3": "393662ac5be09ae14867b8ea4b0e7fac",
"assets/assets/images/Gemmodel.png": "654607a3e9fb96ccdd7bc22a15bcb4d0",
"assets/assets/images/LAC-Rlogo.png": "844c3130dbc3aa83e36b7e855ac217d1",
"assets/assets/images/Lacintro.gif": "3765578a43731ba3b5d0d1a98cd2bac3",
"assets/assets/images/lacmodel.png": "28f8bdb20a4dd3d7df9abdbefab49d6d",
"assets/assets/images/Leonixlogo.png": "255ec2cd83052d561a7fc0f2d6aa2de0",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "df03aac1134a73f42a4c361c756fec89",
"assets/NOTICES": "10f8d1acbc328126482b1f81201a5c17",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"favicon.png": "8f1f73e641fabe1bb6fd8a457145fd9e",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "54ab63327a4324a9a258a2437a1d9814",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "fd6f990da22933319a6583f5b43613df",
"/": "fd6f990da22933319a6583f5b43613df",
"main.dart.js": "59331f778504d2776297285ae539c775",
"manifest.json": "fa781c75b0904cb698d30f759e79d3fe",
"version.json": "4f05d3803b8fb001d344e0e27db50363"};
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
