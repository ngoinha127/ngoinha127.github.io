// Lưu đệm VỎ ứng dụng (HTML, JS, biểu tượng) để mở nhanh. KHÔNG lưu phản hồi của máy chủ dữ liệu:
// mọi yêu cầu POST và mọi yêu cầu sang nguồn khác (Apps Script, Google Fonts) đi thẳng ra mạng.
var PHIEN_BAN = 'nn127-vo-0ae9d16f4d';
var VO = ["./","./index.html","./app.js?v=0ae9d16f4d","./config.js?v=0ae9d16f4d","./manifest.webmanifest","./icon-192.png","./icon-512.png","./apple-touch-icon.png","./favicon-32.png"];
self.addEventListener('install', function (e) {
  e.waitUntil(caches.open(PHIEN_BAN).then(function (c) { return c.addAll(VO); }).then(function () { return self.skipWaiting(); }));
});
self.addEventListener('activate', function (e) {
  e.waitUntil(caches.keys().then(function (ks) {
    return Promise.all(ks.filter(function (k) { return k.indexOf('nn127-') === 0 && k !== PHIEN_BAN; }).map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});
self.addEventListener('fetch', function (e) {
  var req = e.request;
  if (req.method !== 'GET') return;
  var url = new URL(req.url);
  if (url.origin !== self.location.origin) return;
  if (req.mode === 'navigate' || /\/config\.js$/.test(url.pathname)) {
    // Trang chính và config.js: lấy mạng trước để luôn có bản mới (đổi EXEC_URL là có ngay); mất mạng thì dùng bản lưu.
    var laTrang = req.mode === 'navigate';
    e.respondWith(fetch(req).then(function (r) { if (r.ok) { var c = r.clone(); caches.open(PHIEN_BAN).then(function (x) { x.put(laTrang ? './index.html' : req, c); }); } return r; })
      .catch(function () { return caches.match(laTrang ? './index.html' : req, { ignoreSearch: !laTrang }); }));
    return;
  }
  e.respondWith(caches.match(req).then(function (r) { return r || fetch(req); }));
});
