/* Biểu tượng: vẽ theo phong cách Lucide (lucide.dev, giấy phép ISC), nét 1,75 trên lưới 24 px; vẽ lại trong tệp này, không tải thư viện ngoài. */
(function () {
  'use strict';

  // ================================================================ tiện ích DOM: mọi chữ đặt bằng textContent, không chèn HTML thô
  var SVG_NS = 'http://www.w3.org/2000/svg';
  function h(the, thuocTinh) {
    var el = document.createElement(the);
    var tt = thuocTinh || {};
    Object.keys(tt).forEach(function (k) {
      var v = tt[k];
      if (v === null || v === undefined || v === false) return;
      if (k === 'lop') el.className = v;
      else if (k === 'chu') el.textContent = v;
      else if (k.indexOf('on') === 0) el.addEventListener(k.slice(2), v);
      else if (k === 'kieu') Object.keys(v).forEach(function (s) { el.style.setProperty(s, v[s]); });
      else if (k === 'giaTri') el.value = v;
      else el.setAttribute(k, v === true ? '' : v);
    });
    for (var i = 2; i < arguments.length; i++) them(el, arguments[i]);
    return el;
  }
  function them(cha, con) {
    if (con === null || con === undefined || con === false) return;
    if (Array.isArray(con)) { con.forEach(function (c) { them(cha, c); }); return; }
    if (typeof con === 'string' || typeof con === 'number') cha.appendChild(document.createTextNode(String(con)));
    else cha.appendChild(con);
  }
  function s(the, thuocTinh, con) {
    var el = document.createElementNS(SVG_NS, the);
    Object.keys(thuocTinh || {}).forEach(function (k) { el.setAttribute(k, thuocTinh[k]); });
    (con || []).forEach(function (c) { el.appendChild(c); });
    return el;
  }
  function xoaHet(el) { while (el.firstChild) el.removeChild(el.firstChild); return el; }

  // ================================================================ biểu tượng
  var BT = {
    nha: [['path', 'M3 10.5 12 3l9 7.5'], ['path', 'M5 9.5V20a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1V9.5']],
    nhom: [['circle', 9, 8, 3.5], ['path', 'M2.5 20a6.5 6.5 0 0 1 13 0'], ['path', 'M16 4.6a3.5 3.5 0 0 1 0 6.8'], ['path', 'M18.6 14.4A6.5 6.5 0 0 1 21.5 20']],
    loa: [['path', 'M3 11v2a1 1 0 0 0 1 1h3l7 4.5V5.5L7 10H4a1 1 0 0 0-1 1z'], ['path', 'M17.5 8.5a5 5 0 0 1 0 7'], ['path', 'M7 14l1.4 5h2.6l-1.1-4.4']],
    sach: [['path', 'M2 5h6a4 4 0 0 1 4 4v11a3 3 0 0 0-3-3H2z'], ['path', 'M22 5h-6a4 4 0 0 0-4 4v11a3 3 0 0 1 3-3h7z']],
    phieu: [['rect', 8, 2, 8, 4, 1], ['path', 'M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'], ['path', 'm9 14 2 2 4-4']],
    so: [['path', 'M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4'], ['path', 'M2 6h4M2 10h4M2 14h4M2 18h4'], ['path', 'M18.4 2.6a2.1 2.1 0 1 1 3 3L16 11l-4 1 1-4z']],
    cup: [['path', 'M6 9H4.5a2.5 2.5 0 0 1 0-5H6'], ['path', 'M18 9h1.5a2.5 2.5 0 0 0 0-5H18'], ['path', 'M4 22h16'], ['path', 'M10 14.7V17c0 .6-.5 1-1 1.2C7.9 18.8 7 20.2 7 22'], ['path', 'M14 14.7V17c0 .6.5 1 1 1.2 1.1.6 2 2 2 3.8'], ['path', 'M18 2H6v7a6 6 0 0 0 12 0z']],
    huy: [['circle', 12, 15, 5], ['path', 'M8.6 10.6 5 3h4l3 6 3-6h4l-3.6 7.6']],
    banh: [['path', 'M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8'], ['path', 'M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1'], ['path', 'M2 21h20'], ['path', 'M7 8v3M12 8v3M17 8v3'], ['path', 'M7 4.5h.01M12 4.5h.01M17 4.5h.01']],
    giuong: [['path', 'M2 4v16'], ['path', 'M2 8h18a2 2 0 0 1 2 2v10'], ['path', 'M2 17h20'], ['path', 'M6 8v9']],
    lich: [['rect', 3, 4, 18, 18, 2], ['path', 'M16 2v4M8 2v4M3 10h18']],
    dong_ho: [['circle', 12, 12, 10], ['path', 'M12 6v6l4 2']],
    khoa: [['rect', 3, 11, 18, 11, 2], ['path', 'M7 11V7a5 5 0 0 1 10 0v4']],
    tep: [['path', 'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z'], ['path', 'M14 2v6h6']],
    anh: [['rect', 3, 3, 18, 18, 2], ['circle', 9, 9, 2], ['path', 'm21 15-3.1-3.1a2 2 0 0 0-2.8 0L6 21']],
    man_hinh: [['rect', 2, 3, 20, 14, 2], ['path', 'M8 21h8M12 17v4']],
    tich: [['path', 'M20 6 9 17l-5-5']],
    nhan: [['path', 'M18 6 6 18M6 6l12 12']],
    trai: [['path', 'm15 18-6-6 6-6']],
    phai: [['path', 'm9 18 6-6-6-6']],
    xuong: [['path', 'm6 9 6 6 6-6']],
    chuong: [['path', 'M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9'], ['path', 'M10.3 21a1.9 1.9 0 0 0 3.4 0']],
    may_in: [['path', 'M6 9V2h12v7'], ['path', 'M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2'], ['rect', 6, 14, 12, 8, 0]],
    ra: [['path', 'M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4'], ['path', 'm16 17 5-5-5-5'], ['path', 'M21 12H9']],
    canh_bao: [['path', 'm21.7 18-8-14a2 2 0 0 0-3.4 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.7-3z'], ['path', 'M12 9v4M12 17h.01']],
    luoi: [['rect', 3, 3, 7, 7, 1.5], ['rect', 14, 3, 7, 7, 1.5], ['rect', 3, 14, 7, 7, 1.5], ['rect', 14, 14, 7, 7, 1.5]],
    cong: [['path', 'M12 5v14M5 12h14']],
    tru: [['path', 'M5 12h14']],
    tim: [['circle', 11, 11, 8], ['path', 'm21 21-4.3-4.3']],
    ghim: [['path', 'M12 17v5'], ['path', 'M9 10.8a2 2 0 0 1-1.1 1.8l-1.8.9A2 2 0 0 0 5 15.2v.8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.8a2 2 0 0 0-1.1-1.8l-1.8-.9A2 2 0 0 1 15 10.8V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z']],
    chia_khoa: [['circle', 7.5, 15.5, 5.5], ['path', 'm21 2-9.6 9.6'], ['path', 'm15.5 7.5 3 3L22 7l-3-3']],
    tai_lai: [['path', 'M3 12a9 9 0 0 1 15-6.7L21 8'], ['path', 'M21 3v5h-5'], ['path', 'M21 12a9 9 0 0 1-15 6.7L3 16'], ['path', 'M3 21v-5h5']],
    mat: [['path', 'M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z'], ['circle', 12, 12, 3]],
    mat_an: [['path', 'm2 2 20 20'], ['path', 'M6.7 6.7C4.2 8.3 2.5 12 2.5 12s3.5 7 9.5 7c1.9 0 3.6-.6 5-1.5'], ['path', 'M10.7 5.1 12 5c6 0 9.5 7 9.5 7a17 17 0 0 1-2.1 3']],
    sao: [['path', 'm12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8-6.2-3.2-6.2 3.2L7 14.2 2 9.3l6.9-1z']],
    lap_lanh: [['path', 'm12 3 1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z'], ['path', 'M19 3v4M17 5h4']],
    them_nguoi: [['circle', 9, 7, 4], ['path', 'M2 21v-2a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v2'], ['path', 'M19 8v6M16 11h6']],
    but: [['path', 'M17 3a2.8 2.8 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5z']],
    tra_lai: [['path', 'M9 14 4 9l5-5'], ['path', 'M4 9h10.5a5.5 5.5 0 0 1 0 11H11']],
    phong_to: [['path', 'M8 3H5a2 2 0 0 0-2 2v3M21 8V5a2 2 0 0 0-2-2h-3M3 16v3a2 2 0 0 0 2 2h3M16 21h3a2 2 0 0 0 2-2v-3']],
    dung: [['rect', 6, 4, 4, 16, 1], ['rect', 14, 4, 4, 16, 1]],
    chay: [['path', 'm6 3 14 9-14 9z']],
    trang_khuyet: [['path', 'M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9z']],
    mat_troi: [['circle', 12, 12, 4], ['path', 'M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4']],
    tin_nhan: [['path', 'M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z']],
    khien: [['path', 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z'], ['path', 'm9 12 2 2 4-4']],
    gui: [['path', 'm22 2-7 20-4-9-9-4z'], ['path', 'M22 2 11 13']],
    lien_ket: [['path', 'M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.7 1.7'], ['path', 'M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.7-1.7']],
    cot: [['path', 'M3 3v18h18'], ['path', 'M8 17V11M13 17V7M18 17v-4']]
  };
  function bt(ten, lop) {
    var dsHinh = (BT[ten] || BT.sao).map(function (x) {
      if (x[0] === 'path') return s('path', { d: x[1] });
      if (x[0] === 'circle') return s('circle', { cx: x[1], cy: x[2], r: x[3] });
      return s('rect', { x: x[1], y: x[2], width: x[3], height: x[4], rx: x[5] });
    });
    return s('svg', { viewBox: '0 0 24 24', 'class': 'bieu-tuong' + (lop ? ' ' + lop : ''), 'aria-hidden': 'true', focusable: 'false' }, dsHinh);
  }

  // Biểu trưng: ngôi nhà mái tam giác nét tròn, trong có số 12.7.
  function bieuTrung(lop, toi) {
    var nen = toi ? 'var(--trang)' : 'var(--chinh)';
    var chu = toi ? 'var(--chinh)' : 'var(--trang)';
    var t = s('text', { x: 32, y: 47, 'text-anchor': 'middle', 'font-size': 15, 'font-weight': 700, fill: chu, 'font-family': 'var(--chu)' });
    t.textContent = '12.7';
    return s('svg', { viewBox: '0 0 64 64', 'class': 'bieu-trung' + (lop ? ' ' + lop : ''), 'aria-hidden': 'true' }, [
      s('path', { d: 'M10 28 32 9l22 19v24a4 4 0 0 1-4 4H14a4 4 0 0 1-4-4z', fill: nen, stroke: nen, 'stroke-width': 4, 'stroke-linejoin': 'round' }),
      s('path', { d: 'M5 30 32 7l27 23', fill: 'none', stroke: 'var(--vang)', 'stroke-width': 5, 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }),
      s('rect', { x: 28, y: 18, width: 8, height: 7, rx: 1.5, fill: 'var(--vang-2)' }),
      t
    ]);
  }
  // Dải hoa văn hình học: hình thoi và răng cưa lặp lại, ba màu xanh cổ vịt, vàng, trắng.
  var demDai = 0;
  function daiHoaVan(lop) {
    demDai++;
    var id = 'hv' + demDai;
    return s('svg', { 'class': lop || 'dai-hoa-van', 'aria-hidden': 'true', height: 8 }, [
      s('defs', {}, [s('pattern', { id: id, width: 16, height: 8, patternUnits: 'userSpaceOnUse' }, [
        s('rect', { width: 16, height: 8, fill: 'var(--chinh-dam)' }),
        s('path', { d: 'M0 8 4 4 8 8 12 4 16 8z', fill: 'var(--chinh)' }),
        s('path', { d: 'M8 1 11 4 8 7 5 4z', fill: 'var(--vang-2)' }),
        s('path', { d: 'M8 3 9 4 8 5 7 4z', fill: 'var(--trang)' })
      ])]),
      s('rect', { width: '100%', height: 8, fill: 'url(#' + id + ')' })
    ]);
  }
  // Hình vẽ nét nhỏ cho trạng thái rỗng.
  function hinhRong(loai) {
    var nen = s('circle', { cx: 44, cy: 44, r: 40, fill: 'var(--nhat)' });
    var net = { fill: 'none', stroke: 'var(--chinh)', 'stroke-width': 2.5, 'stroke-linecap': 'round', 'stroke-linejoin': 'round' };
    var phu = { fill: 'none', stroke: 'var(--vang)', 'stroke-width': 2.5, 'stroke-linecap': 'round' };
    function p(d, o) { return s('path', Object.assign({ d: d }, o || net)); }
    var ve = {
      loa: [p('M22 40v8h8l16 10V30L30 40z'), p('M54 36a10 10 0 0 1 0 16'), p('M60 30a18 18 0 0 1 0 28', phu)],
      cup: [p('M32 24h24v12a12 12 0 0 1-24 0z'), p('M32 28h-6a6 6 0 0 0 6 8M56 28h6a6 6 0 0 1-6 8'), p('M44 48v8M36 62h16'), p('M66 20l2-4M70 26h4M22 20l-2-4', phu)],
      phieu: [p('M30 22h28v44H30z'), p('M36 34h16M36 42h16M36 50h10'), p('m50 56 4 4 8-8', phu)],
      banh: [p('M26 60V46h36v14'), p('M24 60h40'), p('M34 46v-8M44 46v-8M54 46v-8'), p('M34 32v-2M44 32v-2M54 32v-2', phu)],
      nha: [p('M22 44 44 24l22 20'), p('M28 40v22h32V40'), p('M40 62V50h8v12'), p('M60 22l3-5M66 28h5', phu)]
    };
    return s('svg', { viewBox: '0 0 88 88', 'aria-hidden': 'true' }, [nen].concat(ve[loai] || ve.nha));
  }
  function trangRong(loai, cau) { return h('div', { lop: 'rong' }, hinhRong(loai), h('p', { chu: cau })); }

  // ================================================================ định dạng
  function vs(x) {
    if (x === null || x === undefined || x === '') return '–';
    var n = Math.round(Number(x) * 100) / 100;
    return String(n).replace('.', ',').replace('-', '−');
  }
  function ngayVN(st) { var m = String(st || '').match(/^(\d{4})-(\d{2})-(\d{2})(?: (\d{2}:\d{2}))?/); return m ? (m[4] ? m[4] + ' ' : '') + m[3] + '/' + m[2] + '/' + m[1] : ''; }
  var TEN_XL = { TOT: 'Tốt', KHA: 'Khá', DAT: 'Đạt', CHUA_DAT: 'Chưa đạt' };
  var LOP_XL = { TOT: 'vt-tot', KHA: 'vt-kha', DAT: 'vt-dat', CHUA_DAT: 'vt-cd' };
  function vienXepLoai(xl) { return xl ? h('span', { lop: 'vien-thuoc ' + LOP_XL[xl] }, xl === 'TOT' ? bt('sao') : null, TEN_XL[xl]) : null; }
  var TT_PHIEU = {
    CHUA_CO: ['Chưa gửi', 'vt-cg', 'dong_ho'], NHAP: ['Nháp', 'vt-cg', 'but'], DA_GUI: ['Đã gửi', 'vt-kha', 'gui'],
    TRA_LAI: ['Trả lại', 'vt-tl', 'tra_lai'], DA_DUYET: ['Đã duyệt', 'vt-tot', 'tich'], DA_CHOT: ['Đã chốt', 'vt-chot', 'khoa']
  };
  function vienTrangThai(tt) { var x = TT_PHIEU[tt] || TT_PHIEU.CHUA_CO; return h('span', { lop: 'vien-thuoc ' + x[1] }, bt(x[2]), x[0]); }
  function chuDau(ten) { var m = String(ten || '?').match(/[A-Za-zÀ-ỹĐđ]/); return m ? m[0].toUpperCase() : '?'; }
  function tronTen(ten, to) { return h('span', { lop: 'tron-ten to-' + (/^[1-4]$/.test(String(to)) ? to : 0), 'aria-hidden': 'true', chu: chuDau(ten) }); }
  function huyChuong(hang) {
    var mau = hang === 1 ? ['var(--vang-2)', 'var(--vang)'] : hang === 2 ? ['var(--vien)', 'var(--phu)'] : ['var(--kem-2)', 'var(--to4)'];
    var t = s('text', { x: 12, y: 18.6, 'text-anchor': 'middle', 'font-size': 8, 'font-weight': 700, fill: 'var(--muc)', 'font-family': 'var(--chu)' });
    t.textContent = String(hang);
    return s('svg', { viewBox: '0 0 24 24', 'class': 'huy-chuong', 'aria-label': 'Hạng ' + hang, role: 'img' }, [
      s('path', { d: 'M7 2h4l2 6H9zM13 2h4l-2 6h-4z', fill: 'var(--to1)' }),
      s('circle', { cx: 12, cy: 15.5, r: 6.5, fill: mau[0], stroke: mau[1], 'stroke-width': 1.75 }), t
    ]);
  }

  // ================================================================ trạng thái, gọi máy chủ
  var S = { phien: null, nd: null, man: 'nha', luot: 0, phieu: null, pinVuaCap: null };
  var KHOA_PHIEN = 'nn127_phien';
  function luuPhien(v) { try { if (v) sessionStorage.setItem(KHOA_PHIEN, v); else sessionStorage.removeItem(KHOA_PHIEN); } catch (e) { /* trình duyệt chặn bộ nhớ */ } }
  function docPhien() { try { return sessionStorage.getItem(KHOA_PHIEN); } catch (e) { return null; } }

  /**
   * Một lần gọi máy chủ. Hai đường truyền:
   *  - trong Apps Script (HtmlService): google.script.run.api;
   *  - giao diện đặt ở nơi khác (GitHub Pages): POST text/plain tới EXEC_URL trong config.js (không cần kiểm CORS trước).
   * Mã yêu cầu (_ma_yc) đi kèm để máy chủ không ghi hai lần khi trình duyệt thử lại.
   */
  function goiMot(ten, duLieu) {
    if (window.google && google.script && google.script.run) {
      return new Promise(function (thanh, hong) {
        google.script.run.withSuccessHandler(thanh).withFailureHandler(hong).api(ten, S.phien, duLieu || {});
      });
    }
    var ch = window.NN127_CAU_HINH;
    if (!ch || !ch.EXEC_URL || typeof fetch !== 'function') return Promise.reject(new Error('Không kết nối được máy chủ.'));
    var d = {}, reqId = null;
    Object.keys(duLieu || {}).forEach(function (k) { if (k === '_ma_yc') reqId = duLieu[k]; else d[k] = duLieu[k]; });
    var dieuKhien = typeof AbortController === 'function' ? new AbortController() : null;
    var hen = setTimeout(function () { if (dieuKhien) dieuKhien.abort(); }, ten === 'taiTep' ? 120000 : 45000);
    return fetch(ch.EXEC_URL, {
      method: 'POST', headers: { 'Content-Type': 'text/plain;charset=utf-8' }, redirect: 'follow', credentials: 'omit', cache: 'no-store',
      body: JSON.stringify({ fn: ten, args: d, token: S.phien || null, reqId: reqId }), signal: dieuKhien ? dieuKhien.signal : undefined
    }).then(function (r) {
      clearTimeout(hen);
      if (!r.ok) throw new Error('HTTP ' + r.status);
      return r.json();
    }, function (e) { clearTimeout(hen); throw e; });
  }
  function cho(ms) { return new Promise(function (r) { setTimeout(r, ms); }); }
  /** Gọi máy chủ; lỗi đường truyền thì thử lại 2 lần, cách 2 giây. */
  var CHI_DOC = ['hoSo', 'trangChu', 'lopMinh', 'dsThongBao', 'quyChe', 'phieuCuaEm', 'dsDuyet', 'xemPhieu', 'bangTuan', 'dsTaiKhoan', 'bangChieu', 'phieuPhong', 'dsDiemCong', 'tuongLai', 'tuongLaiCaLop', 'lichSu'];
  function maNgauNhien() {
    var a = new Uint8Array(16);
    try { crypto.getRandomValues(a); } catch (e) { for (var i = 0; i < 16; i++) a[i] = Math.floor(Math.random() * 256); }
    return Array.prototype.map.call(a, function (b) { return (b < 16 ? '0' : '') + b.toString(16); }).join('');
  }
  function goi(ten, duLieu) {
    var lan = 0;
    // Một mã cho cả lần gọi và các lần thử lại, để máy chủ không ghi hai lần.
    var d = Object.assign({}, duLieu || {}, { _ma_yc: maNgauNhien() });
    function thu() {
      return goiMot(ten, d).catch(function (e) {
        lan++;
        if (lan > 2) throw { mang: true, loi: 'Mạng chập chờn hoặc máy chủ bận. Đợi 1 phút rồi thử lại.' };
        return cho(2000).then(thu);
      });
    }
    return thu().then(function (kq) {
      if (kq && kq.ok) { anThanhMang(); if (CHI_DOC.indexOf(ten) < 0) cuHet(); return kq.du_lieu; }
      var ma = kq && kq.ma_loi;
      if (ma === 'HET_PHIEN') { dangXuatNoi('Phiên làm việc đã hết. Mời đăng nhập lại.'); throw { daXuLy: true }; }
      if (ma === 'PHAI_DOI_PIN') { manDoiPin(true); throw { daXuLy: true }; }
      throw { loi: (kq && kq.loi) || 'Có lỗi. Đợi 1 phút rồi thử lại.' };
    });
  }
  function xuLyLoi(e, thuLai) {
    if (e && e.daXuLy) return;
    if (e && e.mang) { hienThanhMang(e.loi, thuLai); return; }
    baoNho((e && e.loi) || 'Có lỗi. Đợi 1 phút rồi thử lại.', true);
  }

  // ================================================================ thông báo nhỏ, thanh lỗi mạng, hộp hỏi, tấm trượt
  var hen = null;
  function baoNho(chu, loi) {
    var cu = document.querySelector('.thong-bao-nho'); if (cu) cu.remove();
    var el = h('div', { lop: 'thong-bao-nho', role: 'status' }, bt(loi ? 'canh_bao' : 'tich'), h('span', { chu: chu }));
    document.body.appendChild(el);
    clearTimeout(hen); hen = setTimeout(function () { el.remove(); }, loi ? 4000 : 2000);
  }
  function hienThanhMang(chu, thuLai) {
    anThanhMang();
    var main = document.querySelector('main'); if (!main) { baoNho(chu, true); return; }
    main.insertBefore(h('div', { lop: 'thanh-mang', role: 'alert' }, bt('canh_bao'), h('span', { chu: chu }),
      thuLai ? h('button', { lop: 'nut nut-nho', onclick: function () { anThanhMang(); thuLai(); } }, bt('tai_lai'), 'Thử lại') : null), main.firstChild);
  }
  function anThanhMang() { var x = document.querySelector('.thanh-mang'); if (x) x.remove(); }
  function moTam(tieuDe, noiDung, nutDay, khiDong) {
    var truocDo = document.activeElement;
    var nen;
    function dong() { nen.remove(); document.removeEventListener('keydown', phim); if (khiDong) khiDong(); if (truocDo && truocDo.focus) truocDo.focus(); }
    function phim(e) { if (e.key === 'Escape') dong(); }
    var nutX = h('button', { lop: 'nut nut-chu nut-tron', 'aria-label': 'Đóng', onclick: dong }, bt('nhan'));
    var tam = h('div', { lop: 'tam-truot', role: 'dialog', 'aria-modal': 'true', 'aria-label': tieuDe, tabindex: '-1', kieu: { outline: 'none' } },
      h('div', { lop: 'tam-dau' }, h('h2', { chu: tieuDe }), nutX),
      h('div', { lop: 'tam-than' }, noiDung),
      nutDay && nutDay.length ? h('div', { lop: 'tam-day' }, nutDay) : null);
    nen = h('div', { lop: 'nen-mo', onclick: function (e) { if (e.target === nen) dong(); } }, tam);
    document.body.appendChild(nen);
    document.addEventListener('keydown', phim);
    setTimeout(function () { tam.focus(); }, 30);
    return { dong: dong, tam: tam };
  }
  function hoi(tieuDe, noiDung, chuNut, loaiNut) {
    return new Promise(function (tl) {
      var xong = false;
      var t = moTam(tieuDe, typeof noiDung === 'string' ? h('p', { chu: noiDung }) : noiDung, [
        h('button', { lop: 'nut', chu: 'Thôi', onclick: function () { t.dong(); } }),
        h('button', { lop: 'nut ' + (loaiNut || 'nut-chinh'), chu: chuNut, onclick: function () { xong = true; t.dong(); } })
      ], function () { tl(xong); });
    });
  }
  function nutCho(nut, dangCho) { nut.disabled = !!dangCho; nut.setAttribute('aria-busy', dangCho ? 'true' : 'false'); }

  // ================================================================ đăng nhập
  function manDangNhap(loi) {
    S.phien = null; S.nd = null; luuPhien(null);
    var goc = xoaHet(document.getElementById('ung-dung'));
    var oMa = h('input', { lop: 'o-nhap', id: 'o-ma', autocomplete: 'username', autocapitalize: 'characters', spellcheck: 'false', inputmode: 'text', maxlength: 10, placeholder: 'Ví dụ: HS05' });
    var oPin = [];
    var hopPin = h('div', { lop: 'o-pin', role: 'group', 'aria-label': 'PIN 6 chữ số' });
    for (var i = 0; i < 6; i++) {
      (function (k) {
        var o = h('input', { type: 'password', inputmode: 'numeric', autocomplete: k === 0 ? 'current-password' : 'off', maxlength: 1, 'aria-label': 'Chữ số ' + (k + 1) + ' của PIN' });
        o.addEventListener('input', function () {
          o.value = o.value.replace(/\D/g, '').slice(-1);
          if (o.value && k < 5) oPin[k + 1].focus();
          if (oPin.every(function (x) { return x.value; })) nut.focus();
        });
        o.addEventListener('keydown', function (e) { if (e.key === 'Backspace' && !o.value && k > 0) oPin[k - 1].focus(); });
        o.addEventListener('paste', function (e) {
          var d = (e.clipboardData && e.clipboardData.getData('text') || '').replace(/\D/g, '').slice(0, 6);
          if (d.length) { e.preventDefault(); oPin.forEach(function (x, j) { x.value = d[j] || ''; }); }
        });
        oPin.push(o); hopPin.appendChild(o);
      })(i);
    }
    var oMk = h('input', { lop: 'o-nhap an', type: 'password', autocomplete: 'current-password', maxlength: 64, 'aria-label': 'Mật khẩu quản trị' });
    var nhanPin = h('label', { lop: 'nhan-o', chu: 'PIN (6 chữ số)' });
    oMa.addEventListener('input', function () {
      oMa.value = oMa.value.toUpperCase().replace(/[^A-Z0-9]/g, '');
      var qt = /^QT/.test(oMa.value);
      hopPin.classList.toggle('an', qt); oMk.classList.toggle('an', !qt);
      nhanPin.textContent = qt ? 'Mật khẩu quản trị' : 'PIN (6 chữ số)';
    });
    var vungLoi = h('div', { 'aria-live': 'polite' });
    if (loi) vungLoi.appendChild(h('div', { lop: 'thanh-loi' }, bt('canh_bao'), h('span', { chu: loi })));
    var nut = h('button', { lop: 'nut nut-chinh nut-rong', type: 'submit' }, bt('nha'), 'Vào nhà');
    var form = h('form', { novalidate: true }, h('div', { lop: 'truong' }, h('label', { lop: 'nhan-o', 'for': 'o-ma', chu: 'Mã số' }), oMa),
      h('div', { lop: 'truong' }, nhanPin, hopPin, oMk), vungLoi, h('div', { kieu: { 'margin-top': '20px' } }, nut));
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var ma = oMa.value.trim();
      var pin = /^QT/.test(ma) ? oMk.value : oPin.map(function (x) { return x.value; }).join('');
      xoaHet(vungLoi);
      if (!ma || !pin) { vungLoi.appendChild(h('div', { lop: 'thanh-loi' }, bt('canh_bao'), h('span', { chu: 'Nhập mã số và PIN.' }))); return; }
      dangNhap(ma, pin, nut, vungLoi, oPin);
    });
    goc.appendChild(h('div', { lop: 'man-dang-nhap' },
      h('div', { lop: 'dn-dau' }, bieuTrung(), h('h1', { chu: 'Ngôi nhà 12.7' }), h('p', { chu: 'Lớp 12.7 · năm học 2026 – 2027' }), h('div', { lop: 'dn-dai' }, daiHoaVan('dai-hoa-van'))),
      h('div', { lop: 'dn-the' }, h('h2', { chu: 'Đăng nhập' }), form),
      h('p', { lop: 'dn-chan' }, bt('khoa'), 'Quên PIN: báo cô chủ nhiệm')));
    setTimeout(function () { oMa.focus(); }, 50);
  }
  function dangNhap(ma, pin, nut, vungLoi, oPin) {
    nutCho(nut, true);
    goiMot('dangNhap', { ma: ma, pin: pin, kem: KEM_MAC_DINH }).then(function (kq) {
      nutCho(nut, false);
      if (!kq.ok) {
        vungLoi.appendChild(h('div', { lop: 'thanh-loi', role: 'alert' }, bt('canh_bao'), h('span', { chu: kq.loi })));
        if (oPin) { oPin.forEach(function (x) { x.value = ''; }); }
        return;
      }
      S.phien = kq.du_lieu.phien; luuPhien(S.phien);
      S.nd = kq.du_lieu.nguoi_dung;
      if (kq.du_lieu.trang_chu) { nhanKem(kq.du_lieu.trang_chu.kem); datDem('nha', kq.du_lieu.trang_chu); }
      if (kq.du_lieu.phai_doi_pin) manDoiPin(true); else dungKhung('nha');
    }).catch(function () {
      nutCho(nut, false);
      vungLoi.appendChild(h('div', { lop: 'thanh-loi', role: 'alert' }, bt('canh_bao'), h('span', { chu: 'Không kết nối được. Đợi 1 phút rồi thử lại.' })));
    });
  }
  function dangXuatNoi(loi) { manDangNhap(loi); }

  // ================================================================ đổi PIN
  function manDoiPin(batBuoc) {
    var qt = S.nd && S.nd.la_qt;
    var tenPin = qt ? 'mật khẩu' : 'PIN';
    var oCu = h('input', { lop: 'o-nhap', type: 'password', id: 'pin-cu', inputmode: qt ? 'text' : 'numeric', autocomplete: 'current-password', maxlength: 64 });
    var oMoi = h('input', { lop: 'o-nhap', type: 'password', id: 'pin-moi', inputmode: qt ? 'text' : 'numeric', autocomplete: 'new-password', maxlength: 64 });
    var oLai = h('input', { lop: 'o-nhap', type: 'password', id: 'pin-lai', inputmode: qt ? 'text' : 'numeric', autocomplete: 'new-password', maxlength: 64 });
    var vungLoi = h('div', { 'aria-live': 'polite' });
    var nut = h('button', { lop: 'nut nut-chinh nut-rong', type: 'submit' }, bt('khoa'), 'Đổi ' + tenPin);
    var form = h('form', { novalidate: true },
      h('div', { lop: 'truong' }, h('label', { lop: 'nhan-o', 'for': 'pin-cu', chu: (qt ? 'Mật khẩu' : 'PIN') + ' hiện tại' + (batBuoc && !qt ? ' (PIN cô phát)' : '') }), oCu),
      h('div', { lop: 'truong' }, h('label', { lop: 'nhan-o', 'for': 'pin-moi', chu: (qt ? 'Mật khẩu' : 'PIN') + ' mới' }), oMoi),
      h('div', { lop: 'truong' }, h('label', { lop: 'nhan-o', 'for': 'pin-lai', chu: 'Gõ lại ' + tenPin + ' mới' }), oLai),
      h('p', { lop: 'chu-phu', kieu: { 'margin-top': '12px' }, chu: qt ? 'Từ 10 ký tự, có cả chữ và số.' : 'Đúng 6 chữ số. Không dùng 6 số giống nhau hay dãy liền nhau như 123456.' }),
      vungLoi, h('div', { kieu: { 'margin-top': '16px' } }, nut));
    form.addEventListener('submit', function (e) {
      e.preventDefault(); xoaHet(vungLoi);
      if (oMoi.value !== oLai.value) { vungLoi.appendChild(h('div', { lop: 'thanh-loi' }, bt('canh_bao'), h('span', { chu: 'Hai lần gõ ' + tenPin + ' mới chưa giống nhau.' }))); return; }
      nutCho(nut, true);
      goiMot('doiPin', { pin_cu: oCu.value, pin_moi: oMoi.value }).then(function (kq) {
        nutCho(nut, false);
        if (!kq.ok) {
          if (kq.ma_loi === 'HET_PHIEN') { manDangNhap(kq.loi); return; }
          vungLoi.appendChild(h('div', { lop: 'thanh-loi', role: 'alert' }, bt('canh_bao'), h('span', { chu: kq.loi }))); return;
        }
        baoNho('Đã đổi ' + tenPin + '.');
        goi('hoSo').then(function (hs) { S.nd = hs; dungKhung('nha'); }).catch(xuLyLoi);
      }).catch(function () { nutCho(nut, false); vungLoi.appendChild(h('div', { lop: 'thanh-loi' }, bt('canh_bao'), h('span', { chu: 'Không kết nối được. Đợi 1 phút rồi thử lại.' }))); });
    });
    if (batBuoc) {
      var goc = xoaHet(document.getElementById('ung-dung'));
      goc.appendChild(h('div', { lop: 'man-dang-nhap' },
        h('div', { lop: 'dn-dau' }, bieuTrung(), h('h1', { chu: 'Chào em!' }), h('p', { chu: 'Lần đầu vào nhà, em đặt PIN riêng của mình.' })),
        h('div', { lop: 'dn-the' }, h('h2', { chu: 'Đặt ' + tenPin + ' mới' }), form)));
      setTimeout(function () { oCu.focus(); }, 50);
    } else {
      veMan('Đổi ' + tenPin, function (main) { main.appendChild(h('div', { lop: 'the', kieu: { 'max-width': '480px' } }, form)); });
    }
  }

  // ================================================================ khung ứng dụng
  function dsDieuHuong() {
    var nd = S.nd || {};
    var ds = [['nha', 'Nhà', 'nha']];
    if (nd.la_qt) ds.push(['bangtuan', 'Bảng tuần', 'phieu']); else ds.push(['phieu', 'Phiếu tuần', 'phieu']);
    if (nd.la_qt) ds.push(['thongbao', 'Thông báo', 'loa'], ['lop', 'Lớp mình', 'nhom'], ['them', 'Thêm', 'luoi']);
    else ds.push(['thongbao', 'Thông báo', 'loa'], ['sotay', 'Sổ tay', 'so'], ['them', 'Thêm', 'luoi']);
    return ds;
  }
  function dsThem() {
    var nd = S.nd || {};
    var ds = [];
    if (!nd.la_qt) ds.push(['lichsu', 'Điểm các tuần', 'Biểu đồ điểm thi đua của em', 'cot']);
    if (!nd.la_qt) ds.push(['lop', 'Lớp mình', 'Tổ, phòng, ban cán bộ, thời khoá biểu', 'nhom']);
    if (nd.cong_cu && nd.cong_cu.duyet && !nd.la_qt) ds.push(['duyet', 'Duyệt phiếu', 'Phiếu của tổ viên đang chờ', 'phieu']);
    if (nd.cong_cu && nd.cong_cu.phong) ds.push(['phong', 'Phiếu phòng', 'Lỗi nhóm 7 và việc của phòng', 'giuong']);
    if (nd.cong_cu && nd.cong_cu.xac_nhan) ds.push(['diemcong', 'Xác nhận điểm cộng', 'Đề nghị điểm cộng của các bạn', 'sao']);
    ds.push(['quyche', 'Quy chế', 'Các mục trừ điểm và cộng điểm', 'sach']);
    if (nd.la_qt) {
      ds.push(['taikhoan', 'Tài khoản và PIN', 'Cấp PIN, in phiếu PIN, mở khoá', 'chia_khoa']);
      ds.push(['chieu', 'Bảng chiếu', 'Chiếu vinh danh lên tivi của lớp', 'man_hinh']);
      ds.push(['tuonglai', 'Sổ tay cả lớp', 'Trang TƯƠNG LAI của 32 em', 'so']);
      ds.push(['naplai', 'Nạp lại từ bảng tính', 'Dùng sau khi sửa tay trên bảng tính', 'tai_lai']);
    }
    ds.push(['doipin', nd.la_qt ? 'Đổi mật khẩu' : 'Đổi PIN', '', 'khoa']);
    return ds;
  }
  function dungKhung(man) {
    var goc = xoaHet(document.getElementById('ung-dung'));
    var tieuDe = h('h1', { id: 'tieu-de-dau', chu: '' });
    var chip = h('span', { lop: 'chip-tuan an', id: 'chip-tuan' });
    var dau = h('header', { lop: 'dau-trang' }, h('div', { lop: 'dau-trang-trong' }, bieuTrung(null, true), tieuDe, chip), daiHoaVan());
    dau.querySelector('.bieu-trung').setAttribute('style', 'width:36px;height:36px;flex:none');
    var duoi = h('nav', { lop: 'thanh-duoi', 'aria-label': 'Điều hướng chính' });
    var trai = h('nav', { lop: 'cot-trai', 'aria-label': 'Điều hướng' });
    dsDieuHuong().forEach(function (m) {
      duoi.appendChild(h('button', { lop: 'muc-dieu-huong', 'data-man': m[0], onclick: function () { diDen(m[0]); } }, bt(m[2]), h('span', { chu: m[1] })));
      if (m[0] !== 'them') trai.appendChild(h('button', { lop: 'muc-dieu-huong', 'data-man': m[0], onclick: function () { diDen(m[0]); } }, bt(m[2]), h('span', { chu: m[1] })));
    });
    trai.appendChild(h('hr'));
    dsThem().forEach(function (m) { trai.appendChild(h('button', { lop: 'muc-dieu-huong', 'data-man': m[0], onclick: function () { diDen(m[0]); } }, bt(m[3]), h('span', { chu: m[1] }))); });
    trai.appendChild(h('button', { lop: 'muc-dieu-huong', onclick: dangXuat }, bt('ra'), h('span', { chu: 'Đăng xuất' })));
    goc.appendChild(dau);
    goc.appendChild(h('div', { lop: 'than' }, trai, h('main', { id: 'noi-dung', tabindex: '-1' })));
    goc.appendChild(duoi);
    diDen(man || 'nha');
  }
  function dangXuat() {
    var p = S.phien;
    if (p) goiMot('dangXuat', {}).catch(function () {});
    manDangNhap();
  }
  function datTieuDe(chu, chipTuan) {
    var t = document.getElementById('tieu-de-dau'); if (t) t.textContent = chu;
    var c = document.getElementById('chip-tuan');
    if (c) {
      xoaHet(c);
      var m = String(chipTuan || '').match(/^(Tuần \d+)(.*)$/);
      if (m) { c.appendChild(document.createTextNode(m[1])); c.appendChild(h('span', { lop: 'ngay-chip', chu: m[2] })); }
      else c.textContent = chipTuan || '';
      c.classList.toggle('an', !chipTuan);
    }
    document.title = chu + ' · Ngôi nhà 12.7';
  }
  var MAN = {};
  function diDen(man, thamSo) {
    S.man = man;
    var nhomCua = { duyet: 'them', quyche: 'them', taikhoan: 'them', doipin: 'them', inpin: 'them', phong: 'them', diemcong: 'them', tuonglai: 'them', lichsu: 'them', lop: S.nd && S.nd.la_qt ? 'lop' : 'them' };
    document.querySelectorAll('.muc-dieu-huong').forEach(function (b) {
      var m = b.getAttribute('data-man');
      var dang = m === man || (b.closest('.thanh-duoi') && m === nhomCua[man]);
      if (dang) b.setAttribute('aria-current', 'page'); else b.removeAttribute('aria-current');
    });
    if (man === 'doipin') { manDoiPin(false); return; }
    if (man === 'chieu') { MAN.chieu(); return; }
    if (man === 'naplai') { goi('napLaiCauHinh').then(function () { Object.keys(DEM).forEach(function (k) { delete DEM[k]; }); baoNho('Đã nạp lại. Mở lại màn để thấy dữ liệu mới.'); }).catch(xuLyLoi); return; }
    (MAN[man] || MAN.nha)(thamSo || {});
    window.scrollTo(0, 0);
  }
  /** Vẽ một màn hình: khung xám trước, dữ liệu sau. */
  function veMan(tieuDe, ve, chipTuan) {
    var main = document.getElementById('noi-dung');
    if (!main) return;
    xoaHet(main);
    document.body.classList.remove('nen-kem');
    datTieuDe(tieuDe, chipTuan);
    ve(main);
  }
  function khungCho(main, soThe) {
    for (var i = 0; i < (soThe || 3); i++) {
      main.appendChild(h('div', { lop: 'the', 'aria-hidden': 'true' }, h('div', { lop: 'khung-cho', kieu: { height: '20px', width: '45%' } }),
        h('div', { lop: 'khung-cho', kieu: { height: '14px', width: '90%', 'margin-top': '14px' } }), h('div', { lop: 'khung-cho', kieu: { height: '14px', width: '70%', 'margin-top': '10px' } })));
    }
  }
  // Kho dữ liệu màn hình trên trình duyệt: mở lại màn là hiện ngay, rồi lấy bản mới ở nền (mỗi lần gọi Apps Script mất 1 – 2 giây).
  var DEM = {};
  function datDem(k, v) { if (v) DEM[k] = { v: v, luc: Date.now(), cu: false }; }
  function layDem(k) { return DEM[k] || null; }
  function cuHet() { Object.keys(DEM).forEach(function (k) { DEM[k].cu = true; }); }
  /**
   * Tải một màn. tc.dem: khoá kho dữ liệu; tc.tuoi: số giây coi là còn mới (không gọi lại);
   * tc.lamMoi: có bản cũ thì hiện ngay rồi lấy bản mới ở nền, khác thì vẽ lại.
   */
  function taiMan(tieuDe, ten, duLieu, ve, soKhung, tc) {
    tc = tc || {};
    var luot = ++S.luot;
    var cu = tc.dem ? layDem(tc.dem) : null;
    veMan(tieuDe, function (main) {
      var daVe = false, chuCu = '';
      if (cu && (tc.lamMoi || (!cu.cu && Date.now() - cu.luc < (tc.tuoi || 0) * 1000))) {
        ve(main, cu.v); daVe = true; chuCu = JSON.stringify(cu.v);
        if (!cu.cu && Date.now() - cu.luc < (tc.tuoi || 15) * 1000) return;
      } else khungCho(main, soKhung);
      goi(ten, duLieu).then(function (d) {
        if (tc.dem) datDem(tc.dem, d);
        if (luot !== S.luot) return;
        if (daVe && JSON.stringify(d) === chuCu) return;
        var y = window.scrollY;
        xoaHet(main);
        ve(main, d);
        if (daVe) window.scrollTo(0, y);
      }).catch(function (e) {
        if (luot !== S.luot || daVe) return;
        xoaHet(main);
        xuLyLoi(e, function () { taiMan(tieuDe, ten, duLieu, ve, soKhung, tc); });
        if (!(e && e.daXuLy)) main.appendChild(trangRong('nha', 'Chưa tải được dữ liệu.'));
      });
    });
  }
  /** Bọc nút gửi: khoá nút trong lúc chờ máy chủ để không bấm hai lần. fn trả Promise. */
  function mot(fn) {
    return function (e) {
      var b = e && e.currentTarget;
      if (b && b.disabled) return;
      if (b) nutCho(b, true);
      Promise.resolve().then(function () { return fn(e); }).catch(xuLyLoi).then(function () { if (b && b.isConnected) nutCho(b, false); });
    };
  }
  var KEM_MAC_DINH = ['phieu', 'thongbao', 'lop', 'quyche', 'duyet', 'bangtuan', 'sotay'];
  function nhanKem(kem) { Object.keys(kem || {}).forEach(function (k) { datDem(k, kem[k]); }); }
  function the(tieuDeThe, bieuTuong, con, lop) {
    return h('section', { lop: 'the' + (lop ? ' ' + lop : '') },
      tieuDeThe ? h('div', { lop: 'the-dau' }, bieuTuong ? h('span', { lop: 'o-bieu-tuong' }, bt(bieuTuong)) : null, h('h2', { chu: tieuDeThe })) : null, con);
  }

  // ================================================================ trang chủ
  MAN.nha = function () {
    // Lấy kèm dữ liệu các màn đã cũ, để bấm sang màn khác là có ngay.
    var kem = KEM_MAC_DINH.filter(function (k) { var x = layDem(k); return !x || x.cu || Date.now() - x.luc > 120000; });
    taiMan('Ngôi nhà 12.7', 'trangChu', { kem: kem }, function (main, d) {
      nhanKem(d.kem);
      datTieuDe('Ngôi nhà 12.7', d.nhan_tuan);
      var gio = typeof d.gio === 'number' ? d.gio : new Date().getHours();
      var loiChao = gio < 11 ? 'Chào buổi sáng' : gio < 14 ? 'Chào buổi trưa' : gio < 18 ? 'Chào buổi chiều' : 'Chào buổi tối';
      var THU = ['Chủ nhật', 'Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy'];
      var mHn = String(d.hom_nay).match(/^(\d{4})-(\d{2})-(\d{2})/);
      var thu = mHn ? THU[new Date(Date.UTC(+mHn[1], +mHn[2] - 1, +mHn[3])).getUTCDay()] + ', ' + ngayVN(d.hom_nay) : '';
      main.appendChild(h('div', { lop: 'chao', kieu: { 'margin-bottom': '16px' } }, h('h2', { chu: loiChao + ', ' + d.chao + '!' }), h('p', { chu: thu })));
      var sinhNhatNay = d.sinh_nhat.filter(function (x) { return x.hom_nay; });
      if (sinhNhatNay.length) main.appendChild(h('div', { lop: 'sn-hom-nay' }, h('span', { lop: 'o-bieu-tuong' }, bt('banh')), h('span', { chu: 'Hôm nay sinh nhật ' + sinhNhatNay.map(function (x) { return x.ten; }).join(', ') + '. Chúc mừng sinh nhật!' })));
      var cot1 = h('div', { lop: 'cot' }), cot2 = h('div', { lop: 'cot' });
      cot1.appendChild(theViec(d));
      cot1.appendChild(theVinhDanh(d.vinh_danh));
      cot2.appendChild(theDiemTo(d.vinh_danh));
      cot2.appendChild(theSinhNhat(d.sinh_nhat));
      cot2.appendChild(theThongBaoMoi(d.thong_bao));
      main.appendChild(h('div', { lop: 'luoi-2' }, cot1, cot2));
    }, 4, { dem: 'nha', lamMoi: true, tuoi: 20 });
  };
  function theViec(d) {
    var v = d.viec || {};
    var con = [];
    if (S.nd.la_qt) {
      if (v.tuan) {
        con.push(h('div', { lop: 'viec-chinh' }, h('span', { lop: 'vien-thuoc vt-kha' }, bt('phieu'), (v.da_gui || 0) + '/' + (v.si_so || 0) + ' phiếu đã gửi'),
          v.khong_dong_y ? h('span', { lop: 'vien-thuoc vt-tl' }, bt('tin_nhan'), v.khong_dong_y + ' em không đồng ý') : null));
        if (v.cho_duyet) con.push(dongViec(v.cho_duyet, 'phiếu đã gửi, chưa duyệt', 'bangtuan'));
        con.push(h('div', { lop: 'hang-nut' }, h('button', { lop: 'nut nut-chinh', onclick: function () { diDen('bangtuan'); } }, bt('phieu'), 'Mở bảng tuần ' + v.tuan),
          h('button', { lop: 'nut', onclick: function () { diDen('chieu'); } }, bt('man_hinh'), 'Bảng chiếu')));
      } else con.push(h('p', { lop: 'chu-phu', chu: 'Chưa có tuần nào mở.' }));
      return the('Việc tuần này', 'phieu', con);
    }
    if (v.tuan) {
      var tt = v.trang_thai_phieu;
      var nhanNut = tt === 'TRA_LAI' ? 'Sửa phiếu bị trả lại' : (tt === 'NHAP' ? 'Điền tiếp phiếu tuần ' + v.tuan : 'Điền phiếu tuần ' + v.tuan);
      con.push(h('div', { lop: 'viec-chinh' }, h('b', { chu: 'Phiếu tuần ' + v.tuan }), vienTrangThai(tt),
        v.sua_duoc ? h('span', { lop: 'han' }, bt('dong_ho'), v.con_lai) : null));
      if (v.to_tien_do) con.push(h('p', { lop: 'chu-phu', kieu: { 'margin-top': '6px' } }, bt('nhom', 'nho'), ' Tổ em: ' + v.to_tien_do.da_gui + '/' + v.to_tien_do.si_so + ' phiếu đã gửi'));
      if (tt === 'TRA_LAI' && v.ly_do_tra) con.push(h('div', { lop: 'khung-vang' }, bt('tra_lai'), h('span', { chu: 'Lý do trả lại: ' + v.ly_do_tra })));
      if (v.trang_thai_tuan === 'CHUA_MO') con.push(h('p', { lop: 'chu-phu', kieu: { 'margin-top': '8px' }, chu: 'Phiếu ' + v.con_lai + '.' }));
      con.push(h('div', { lop: 'hang-nut' }, v.sua_duoc
        ? h('button', { lop: 'nut nut-chinh', onclick: function () { diDen('phieu'); } }, bt('but'), nhanNut)
        : h('button', { lop: 'nut', onclick: function () { diDen('phieu'); } }, bt('phieu'), 'Xem phiếu của em')));
    }
    if (v.cho_duyet !== undefined) con.push(dongViec(v.cho_duyet, v.cho_duyet ? 'phiếu chờ em duyệt' : 'Không có phiếu nào chờ duyệt', 'duyet'));
    if (v.phieu_phong) con.push(h('button', { lop: 'dong-viec', onclick: function () { diDen('phong'); } }, h('span', { lop: 'o-bieu-tuong' }, bt('giuong')),
      h('span', { lop: 'dong-giua', chu: 'Phiếu phòng ' + v.phieu_phong.phong + (v.phieu_phong.da_nop ? ': đã gửi' : ': chưa gửi') }), bt('phai')));
    if (v.cong_cho !== undefined) con.push(dongViec(v.cong_cho, v.cong_cho ? 'đề nghị điểm cộng chờ em xác nhận' : 'Không có đề nghị điểm cộng nào chờ', 'diemcong'));
    if (!con.length) con.push(h('p', { lop: 'chu-phu', chu: 'Tuần này chưa có việc.' }));
    return the('Việc của em tuần này', 'phieu', con);
  }
  function dongViec(so, chu, man) {
    return h('button', { lop: 'dong-viec', onclick: function () { diDen(man); } }, h('span', { lop: 'so-lon', chu: String(so) }), h('span', { lop: 'dong-giua', chu: chu }), bt('phai'));
  }
  function tenKy(loai, ky) { return loai === 'thang' ? 'Tháng ' + Number(String(ky).slice(4)) + '/' + String(ky).slice(0, 4) : 'Đợt ' + ky; }
  function khoiVinhDanh(ds, coTienBo) {
    var con = [];
    var xs = ds.filter(function (x) { return x.danh_hieu === 'HS_XS'; });
    var toXs = ds.filter(function (x) { return x.danh_hieu === 'TO_XS'; });
    var phong = ds.filter(function (x) { return x.danh_hieu === 'PHONG_KM'; });
    var tienBo = ds.filter(function (x) { return x.danh_hieu === 'TIEN_BO'; });
    con.push(h('div', { lop: 'khoi-vd' }, h('h3', {}, bt('huy'), 'Học sinh xuất sắc'),
      xs.length ? h('div', { lop: 'ba-em' }, xs.slice(0, 6).map(function (x) {
        return h('div', { lop: 'em-vd' }, huyChuong(x.hang), tronTen(x.ten, x.to), h('div', { lop: 'ten', chu: x.ten }), h('div', { lop: 'phu', chu: 'Tổ ' + x.to }));
      })) : h('p', { lop: 'chu-phu', chu: 'Chưa có em đủ điều kiện.' })));
    con.push(h('div', { lop: 'khoi-vd' }, h('div', { lop: 'hang-doi' },
      h('div', { lop: 'o-doi' }, bt('cup'), h('div', { lop: 'dong-giua' }, h('div', { lop: 'nhan', chu: 'Tổ xuất sắc' }),
        toXs.length ? h('div', { lop: 'lon', chu: toXs.map(function (x) { return x.ten; }).join(', ') }) : h('div', { lop: 'chu-phu', chu: 'Chưa có tổ đủ điều kiện' }),
        toXs.length ? h('div', { lop: 'chu-phu so', chu: 'Trung bình ' + vs(toXs[0].chi_so) }) : null)),
      h('div', { lop: 'o-doi' }, bt('giuong'), h('div', { lop: 'dong-giua' }, h('div', { lop: 'nhan', chu: 'Phòng kiểu mẫu' }),
        phong.length ? h('div', { lop: 'lon', chu: phong.map(function (x) { return x.ten; }).join(', ') }) : h('div', { lop: 'chu-phu', chu: 'Chưa có phòng đủ điều kiện' }))))));
    if (coTienBo && tienBo.length) con.push(h('div', { lop: 'khoi-vd' }, h('h3', {}, bt('lap_lanh'), 'Bạn tiến bộ'),
      h('div', { lop: 'cac-chip' }, tienBo.map(function (x) { return h('span', { lop: 'chip' }, h('span', { lop: 'cham-to to-' + x.to }), x.ten, x.chi_so ? h('span', { lop: 'chu-phu so', chu: '+' + vs(x.chi_so) }) : null); }))));
    return con;
  }
  function theVinhDanh(vd) {
    var t = vd && vd.tuan;
    if (!t) return the('Vinh danh', 'cup', trangRong('cup', 'Chưa có tuần nào được chốt. Vinh danh hiện ở đây ngay khi cô chốt tuần.'), 'the-vinh-danh');
    var cacTab = [['tuan', 'Tuần ' + t.so]];
    if (vd.thang) cacTab.push(['thang', 'Tháng ' + Number(String(vd.thang.ky).slice(4))]);
    if (vd.dot) cacTab.push(['dot', tenKy('dot', vd.dot.ky)]);
    var vung = h('div');
    var nut = [];
    function chon(k) {
      nut.forEach(function (b) { b.setAttribute('aria-selected', b.getAttribute('data-k') === k ? 'true' : 'false'); });
      xoaHet(vung);
      if (k === 'tuan') { vung.appendChild(h('p', { lop: 'chu-phu', kieu: { 'margin-bottom': '12px' }, chu: t.nhan })); them(vung, khoiVinhDanh(t.ds, true)); }
      else {
        var ky = vd[k];
        vung.appendChild(h('p', { lop: 'chu-phu', kieu: { 'margin-bottom': '12px' }, chu: ky.chinh_thuc ? 'Chính thức' : 'Tạm tính đến tuần ' + ky.tinh_den_tuan }));
        them(vung, khoiVinhDanh(ky.ds, false));
      }
    }
    var thanhTab = cacTab.length > 1 ? h('div', { lop: 'tab-vd', role: 'tablist', 'aria-label': 'Kỳ vinh danh' }, cacTab.map(function (x) {
      var b = h('button', { role: 'tab', 'data-k': x[0], chu: x[1], onclick: function () { chon(x[0]); } }); nut.push(b); return b;
    })) : null;
    chon('tuan');
    return the('Vinh danh', 'cup', [thanhTab, vung], 'the-vinh-danh');
  }
  function theDiemTo(vd) {
    var ds = (vd && vd.to_tb) || [];
    if (!ds.length) return the('Điểm trung bình các tổ', 'cot', trangRong('nha', 'Có điểm sau khi tuần đầu tiên được chốt.'));
    var min = 60, max = 110;
    var con = ds.map(function (t) {
      var pt = t.diem_tb === null ? 0 : Math.max(4, Math.min(100, (t.diem_tb - min) / (max - min) * 100));
      return h('div', { lop: 'thanh-to' }, h('span', { lop: 'dong-ten' }, 'Tổ ' + t.to, t.du_dieu_kien ? null : h('small', { chu: 'chưa đủ điều kiện' })),
        h('div', { lop: 'ray', role: 'img', 'aria-label': 'Tổ ' + t.to + ': ' + vs(t.diem_tb) }, h('span', { kieu: { transform: 'scaleX(' + (pt / 100) + ')', background: 'var(--to' + t.to + ')' } })),
        h('span', { lop: 'gt', chu: vs(t.diem_tb) }));
    });
    con.unshift(h('p', { lop: 'chu-phu', kieu: { 'margin-top': '-6px', 'margin-bottom': '12px' }, chu: 'Tuần ' + vd.tuan.so + '. Thanh tính từ 60 điểm.' }));
    return the('Điểm trung bình các tổ', 'cot', con);
  }
  function theSinhNhat(ds) {
    var thang = new Date().getMonth() + 1;
    return the('Sinh nhật tháng ' + thang, 'banh', ds.length
      ? h('div', { lop: 'cac-chip' }, ds.map(function (x) { return h('span', { lop: 'chip' }, h('span', { lop: 'cham-to to-' + x.to }), x.ten + ' · ' + x.ngay); }))
      : trangRong('banh', 'Tháng này chưa có sinh nhật nào.'));
  }
  function theThongBaoMoi(ds) {
    var con = ds.length ? h('ul', { lop: 'ds' }, ds.map(function (t) {
      return h('li', { lop: 'dong-ds' }, h('span', { lop: 'o-bieu-tuong' }, bt(t.ghim ? 'ghim' : 'loa')),
        h('div', { lop: 'dong-giua' }, h('div', { lop: 'dong-ten cat-dong', chu: t.tieu_de }), h('div', { lop: 'chu-phu', chu: t.loai + ' · ' + ngayVN(t.ngay) })));
    })) : trangRong('loa', 'Chưa có thông báo nào.');
    return the('Thông báo mới', 'loa', [con, h('button', { lop: 'nut nut-chu', kieu: { 'margin-top': '8px' }, onclick: function () { diDen('thongbao'); } }, 'Xem tất cả', bt('phai'))]);
  }

  // ================================================================ phiếu tuần (học sinh) và nhập hộ
  MAN.phieu = function (ts) {
    taiMan('Phiếu tuần', 'phieuCuaEm', ts && ts.tuan ? { tuan: ts.tuan } : {}, function (main, d) {
      if (!(ts && ts.tuan)) datDem('phieu', d);
      datTieuDe('Phiếu tuần ' + d.tuan.so, d.tuan.nhan);
      if (d.sua_duoc) {
        S.phieu = taoTrangThaiPhieu(d, 'HS');
        vePhieu(main);
      } else veXemPhieuEm(main, d);
    }, 3, ts && ts.tuan ? {} : { dem: 'phieu', tuoi: 120 });
  };
  function taoTrangThaiPhieu(d, cheDo, maEm) {
    var chon = {}, cong = {};
    d.dong.filter(function (x) { return x.nguon === 'HS'; }).forEach(function (x) {
      if (x.loai === 'CONG') cong[x.ma_muc] = x.ghi_chu || '';
      else chon[x.ma_muc] = { so_lan: x.so_lan, tu_khai: x.tu_khai };
    });
    return { d: d, cheDo: cheDo, maEm: maEm, buoc: 1, chon: chon, cong: cong, mo: {},
      viec_tot_so: d.phieu.viec_tot_so, viec_nho_nhat: d.phieu.viec_nho_nhat || '', loi_nhan: d.phieu.loi_nhan || '', tomTat: null };
  }
  function tamTru() {
    var P = S.phieu, tong = 0;
    P.d.quy_che.forEach(function (m) {
      var c = P.chon[m.ma]; if (!c || m.loai !== 'TRU') return;
      tong += m.muc * c.so_lan * (c.tu_khai && m.tu_khai_duoc ? P.d.he_so_tu_khai : 1);
    });
    var daCo = P.d.dong.filter(function (x) { return x.nguon !== 'HS' && x.trang_thai === 'HIEU_LUC' && x.loai === 'TRU'; });
    daCo.forEach(function (x) { tong += -(x.diem === null ? -x.muc * x.so_lan : x.diem); });
    return tong;
  }
  function vePhieu(main) {
    var P = S.phieu;
    xoaHet(main);
    var tenBuoc = P.cheDo === 'HS' ? ['Lỗi', 'Điểm cộng', 'Sổ tay', 'Tóm tắt'] : ['Lỗi', 'Điểm cộng', 'Lời nhắn', 'Gửi'];
    main.appendChild(h('div', { lop: 'buoc', role: 'list', 'aria-label': 'Các bước' }, tenBuoc.map(function (t, i) {
      return h('div', { lop: 'buoc-o' + (i + 1 < P.buoc ? ' xong' : '') + (i + 1 === P.buoc ? ' dang' : ''), role: 'listitem', 'aria-current': i + 1 === P.buoc ? 'step' : null, 'aria-label': 'Bước ' + (i + 1) + ': ' + t, chu: t });
    })));
    if (P.d.phieu.trang_thai === 'TRA_LAI' && P.d.phieu.ly_do_tra) main.appendChild(h('div', { lop: 'khung-vang', kieu: { 'margin-top': '0', 'margin-bottom': '16px' } }, bt('tra_lai'), h('span', { chu: 'Phiếu bị trả lại: ' + P.d.phieu.ly_do_tra })));
    if (P.cheDo === 'NHAP_HO') main.appendChild(h('div', { lop: 'khung-xanh', kieu: { 'margin-top': '0', 'margin-bottom': '16px' } }, bt('them_nguoi'), h('span', { chu: 'Em đang nhập hộ phiếu giấy của ' + P.d.hoc_sinh.ten_goi + '.' })));
    [null, buocLoi, buocCong, buocSoTay, buocTomTat][P.buoc](main);
  }
  function sangBuoc(n) { S.phieu.buoc = n; vePhieu(document.getElementById('noi-dung')); window.scrollTo(0, 0); }
  function thanhDay(con) { return h('div', { lop: 'thanh-day' }, con); }
  function buocLoi(main) {
    var P = S.phieu;
    if (P.cheDo === 'HS') main.appendChild(h('button', { lop: 'nut-khong-loi', onclick: function () { P.chon = {}; P.cong = {}; sangBuoc(4); } }, bt('tich'), 'Tuần này em không vi phạm mục nào'));
    main.appendChild(h('p', { lop: 'nhan', kieu: { margin: '20px 0 8px' }, chu: P.cheDo === 'HS' ? 'Hoặc chọn các mục em đã vi phạm:' : 'Các mục bạn ghi trong phiếu giấy:' }));
    var nhom = {};
    P.d.quy_che.filter(function (m) { return m.loai === 'TRU'; }).forEach(function (m) { (nhom[m.nhom] = nhom[m.nhom] || []).push(m); });
    var oTam = h('b', { lop: 'so' });
    function capNhatTam() { var t = tamTru(); oTam.textContent = t ? '−' + vs(t) : '0'; }
    Object.keys(nhom).sort().forEach(function (k) {
      var ds = nhom[k];
      var dem = h('span', { lop: 'nhom-dem' });
      function capNhatDem() { var n = ds.filter(function (m) { return P.chon[m.ma]; }).length; dem.textContent = n; dem.classList.toggle('an', !n); }
      var than = h('div', { lop: 'nhom-than' + (P.mo[k] ? '' : ' an') });
      var khoi = h('div', { lop: 'nhom', 'data-mo': P.mo[k] ? '1' : '0' });
      var dau = h('button', { lop: 'nhom-dau', 'aria-expanded': P.mo[k] ? 'true' : 'false', onclick: function () {
        P.mo[k] = !P.mo[k]; than.classList.toggle('an', !P.mo[k]); khoi.setAttribute('data-mo', P.mo[k] ? '1' : '0'); dau.setAttribute('aria-expanded', P.mo[k] ? 'true' : 'false');
      } }, h('span', { lop: 'so-nhom', chu: k }), h('span', { lop: 'dong-giua', chu: ds[0].ten_nhom }), dem, bt('xuong', 'mui'));
      ds.forEach(function (m) { than.appendChild(mucLoi(m, function () { capNhatDem(); capNhatTam(); })); });
      khoi.appendChild(dau); khoi.appendChild(than);
      main.appendChild(khoi);
      capNhatDem();
    });
    var daCo = P.d.dong.filter(function (x) { return x.nguon !== 'HS' && x.loai === 'TRU'; });
    if (daCo.length) main.appendChild(the('Người khác đã ghi cho ' + (P.cheDo === 'HS' ? 'em' : 'bạn'), 'phieu', daCo.map(dongPhieu)));
    capNhatTam();
    main.appendChild(thanhDay([h('div', { lop: 'tam' }, h('div', { lop: 'nhan', chu: 'Điểm trừ tạm' }), oTam), h('button', { lop: 'nut nut-chinh', onclick: function () { sangBuoc(2); } }, 'Tiếp', bt('phai'))]));
  }
  function mucLoi(m, khiDoi) {
    var P = S.phieu;
    var hang = h('div', { lop: 'muc-loi', 'data-chon': P.chon[m.ma] ? '1' : '0' });
    var them_ = h('div', { lop: 'muc-loi-them' + (P.chon[m.ma] ? '' : ' an') });
    var soO = h('span', { 'aria-live': 'polite' });
    function veSo() { soO.textContent = P.chon[m.ma] ? P.chon[m.ma].so_lan : 1; }
    var nutTru = h('button', { 'aria-label': 'Bớt một lần', onclick: function () { if (P.chon[m.ma].so_lan > 1) { P.chon[m.ma].so_lan--; veSo(); khiDoi(); } } }, bt('tru'));
    var nutCong = h('button', { 'aria-label': 'Thêm một lần', onclick: function () { if (P.chon[m.ma].so_lan < Math.min(20, m.toi_da || 20)) { P.chon[m.ma].so_lan++; veSo(); khiDoi(); } } }, bt('cong'));
    them_.appendChild(h('div', { lop: 'bo-dem', role: 'group', 'aria-label': 'Số lần' }, nutTru, soO, nutCong));
    if (m.tu_khai_duoc) {
      var hop = h('input', { type: 'checkbox' });
      hop.checked = !!(P.chon[m.ma] && P.chon[m.ma].tu_khai);
      hop.addEventListener('change', function () { if (P.chon[m.ma]) { P.chon[m.ma].tu_khai = hop.checked; khiDoi(); } });
      them_.appendChild(h('label', { lop: 'cong-tac' }, hop, h('span', { lop: 'ray-ct' }), 'Em tự khai, chưa ai ghi'));
    } else them_.appendChild(h('span', { lop: 'chu-phu', chu: 'Mục này trừ đủ, không giảm khi tự khai' }));
    var dau = h('button', { lop: 'muc-loi-dau', 'aria-pressed': P.chon[m.ma] ? 'true' : 'false', onclick: function () {
      if (P.chon[m.ma]) delete P.chon[m.ma]; else P.chon[m.ma] = { so_lan: 1, tu_khai: P.cheDo === 'HS' };
      var co = !!P.chon[m.ma];
      hang.setAttribute('data-chon', co ? '1' : '0'); dau.setAttribute('aria-pressed', co ? 'true' : 'false'); them_.classList.toggle('an', !co);
      var hp = them_.querySelector('input'); if (hp) hp.checked = co && P.chon[m.ma].tu_khai;
      veSo(); khiDoi();
    } }, h('span', { lop: 'o-chon' }, bt('tich')), h('span', { lop: 'ma-muc', chu: m.ma }), h('span', { lop: 'nd', chu: m.noi_dung }), h('span', { lop: 'muc', chu: '−' + vs(m.muc) }));
    veSo();
    hang.appendChild(dau); hang.appendChild(them_);
    return hang;
  }
  function buocCong(main) {
    var P = S.phieu;
    var ds = P.d.quy_che.filter(function (m) { return m.loai === 'CONG' && m.hs_tu_chon; });
    main.appendChild(the('Điểm cộng ' + (P.cheDo === 'HS' ? 'em' : 'bạn') + ' đề nghị', 'sao', [
      h('p', { lop: 'chu-phu', kieu: { 'margin-bottom': '8px' }, chu: 'Chọn mục và ghi một dòng việc đã làm. Cán bộ phụ trách xác nhận rồi mới cộng.' }),
      h('div', { lop: 'nhom' }, ds.map(function (m) {
        var hang = h('div', { lop: 'muc-loi', 'data-chon': P.cong[m.ma] !== undefined ? '1' : '0' });
        var o = h('input', { lop: 'o-nhap', maxlength: 200, placeholder: 'Việc em đã làm', 'aria-label': 'Việc đã làm cho ' + m.ma });
        o.value = P.cong[m.ma] || '';
        o.addEventListener('input', function () { P.cong[m.ma] = o.value; });
        var them_ = h('div', { lop: 'muc-loi-them' + (P.cong[m.ma] !== undefined ? '' : ' an'), kieu: { display: P.cong[m.ma] !== undefined ? 'block' : null } }, o);
        var dau = h('button', { lop: 'muc-loi-dau', 'aria-pressed': P.cong[m.ma] !== undefined ? 'true' : 'false', onclick: function () {
          if (P.cong[m.ma] !== undefined) delete P.cong[m.ma]; else P.cong[m.ma] = '';
          var co = P.cong[m.ma] !== undefined;
          hang.setAttribute('data-chon', co ? '1' : '0'); dau.setAttribute('aria-pressed', co ? 'true' : 'false'); them_.classList.toggle('an', !co);
          if (co) o.focus();
        } }, h('span', { lop: 'o-chon' }, bt('tich')), h('span', { lop: 'ma-muc', chu: m.ma }), h('span', { lop: 'nd', chu: m.noi_dung }), h('span', { lop: 'muc cong', chu: '+' + vs(m.muc) }));
        hang.appendChild(dau); hang.appendChild(them_);
        return hang;
      }))
    ]));
    main.appendChild(thanhDay([h('button', { lop: 'nut', onclick: function () { sangBuoc(1); } }, bt('trai'), 'Lại'), h('div', { lop: 'tam' }), h('button', { lop: 'nut nut-chinh', onclick: function () { sangBuoc(3); } }, 'Tiếp', bt('phai'))]));
  }
  function oChu(nhanChu, giaTri, toiDa, khiDoi, id, goiY) {
    var o = h('textarea', { lop: 'o-nhap', id: id, maxlength: toiDa, placeholder: goiY || '' });
    o.value = giaTri || '';
    var dem = h('div', { lop: 'dem-ky-tu', chu: o.value.length + '/' + toiDa });
    o.addEventListener('input', function () { dem.textContent = o.value.length + '/' + toiDa; khiDoi(o.value); });
    return h('div', { lop: 'truong' }, h('label', { lop: 'nhan-o', 'for': id, chu: nhanChu }), o, dem);
  }
  function buocSoTay(main) {
    var P = S.phieu;
    var con = [];
    if (P.cheDo === 'HS' || P.cheDo === 'NHAP_HO') {
      var nutSo = [];
      for (var i = 0; i <= 7; i++) (function (k) {
        var b = h('button', { 'aria-pressed': P.viec_tot_so === k ? 'true' : 'false', chu: String(k), onclick: function () {
          P.viec_tot_so = P.viec_tot_so === k ? null : k;
          nutSo.forEach(function (x, j) { x.setAttribute('aria-pressed', P.viec_tot_so === j ? 'true' : 'false'); });
        } });
        nutSo.push(b);
      })(i);
      con.push(h('div', { lop: 'truong' }, h('span', { lop: 'nhan-o', id: 'nhan-viec-tot', chu: 'Tuần này ' + (P.cheDo === 'HS' ? 'em' : 'bạn') + ' làm được mấy việc tốt?' }),
        h('div', { lop: 'chon-so', role: 'group', 'aria-labelledby': 'nhan-viec-tot' }, nutSo),
        h('p', { lop: 'chu-phu', kieu: { 'margin-top': '6px' }, chu: 'Số này không tính vào điểm thi đua.' })));
    }
    if (P.cheDo === 'HS') con.push(oChu('Việc em nhớ nhất (không bắt buộc)', P.viec_nho_nhat, 300, function (v) { P.viec_nho_nhat = v; }, 'o-nho-nhat'));
    con.push(oChu('Lời nhắn cho tổ trưởng hoặc cô', P.loi_nhan, 300, function (v) { P.loi_nhan = v; }, 'o-loi-nhan', 'Ví dụ: tối thứ Năm em bị sốt, có giấy của y tế'));
    con.push(h('div', { lop: 'khung-xanh' }, bt('khien'), h('span', { chu: 'Tổ trưởng, cô chủ nhiệm và người quản trị ứng dụng đọc được phần này.' })));
    main.appendChild(the(P.cheDo === 'HS' ? 'Sổ tay tuần này' : 'Lời nhắn', 'so', con));
    main.appendChild(thanhDay([h('button', { lop: 'nut', onclick: function () { sangBuoc(2); } }, bt('trai'), 'Lại'), h('div', { lop: 'tam' }), h('button', { lop: 'nut nut-chinh', onclick: function () { sangBuoc(4); } }, 'Xem tóm tắt', bt('phai'))]));
  }
  function goiDongPhieu() {
    var P = S.phieu;
    var dong = Object.keys(P.chon).map(function (k) { return { ma_muc: k, so_lan: P.chon[k].so_lan, tu_khai: P.chon[k].tu_khai }; });
    Object.keys(P.cong).forEach(function (k) { dong.push({ ma_muc: k, so_lan: 1, ghi_chu: P.cong[k] }); });
    return { tuan: P.d.tuan.so, dong: dong, viec_tot_so: P.viec_tot_so === null || P.viec_tot_so === undefined ? '' : P.viec_tot_so, viec_nho_nhat: P.viec_nho_nhat, loi_nhan: P.loi_nhan };
  }
  function buocTomTat(main) {
    var P = S.phieu;
    if (P.cheDo === 'NHAP_HO') {
      var n = Object.keys(P.chon).length + Object.keys(P.cong).length;
      var nutGui = h('button', { lop: 'nut nut-chinh', onclick: function () {
        nutCho(nutGui, true);
        var d = goiDongPhieu(); d.ma = P.maEm;
        goi('nhapHo', d).then(function () { baoNho('Đã nhập hộ phiếu của ' + P.d.hoc_sinh.ten_goi + '.'); diDen(S.nd.la_qt ? 'bangtuan' : 'duyet'); })
          .catch(function (e) { nutCho(nutGui, false); xuLyLoi(e); });
      } }, bt('gui'), 'Nhập hộ và gửi');
      main.appendChild(the('Gửi phiếu nhập hộ', 'them_nguoi', [h('p', { chu: P.d.hoc_sinh.ten_goi + ': ' + n + ' mục đã chọn. Sau khi gửi, em duyệt phiếu này như phiếu thường.' })]));
      main.appendChild(thanhDay([h('button', { lop: 'nut', onclick: function () { sangBuoc(3); } }, bt('trai'), 'Lại'), h('div', { lop: 'tam' }), nutGui]));
      return;
    }
    // Tóm tắt tính ngay trên máy để hiện tức thì; nháp lưu ở nền; máy chủ tính lại khi gửi (điểm chính thức do máy chủ tính).
    var tom = tomTatTam(P);
    var vungDiem = h('div'), vungDong = h('div');
    main.appendChild(vungDiem); main.appendChild(vungDong);
    function veTom(tt, dong) {
      xoaHet(vungDiem); xoaHet(vungDong);
      vungDiem.appendChild(h('section', { lop: 'the the-diem' }, h('div', { lop: 'nhan', chu: 'Điểm tạm tính tuần ' + P.d.tuan.so }), h('div', { lop: 'so-diem', chu: vs(tt.diem_tuan) }),
        h('div', { kieu: { 'margin-top': '8px' } }, vienXepLoai(tt.xep_loai)),
        h('div', { lop: 'bang-so' }, h('div', {}, h('b', { lop: 'so', chu: tt.diem_tru ? '−' + vs(tt.diem_tru) : '0' }), h('span', { chu: 'Điểm trừ' })),
          h('div', {}, h('b', { lop: 'so', chu: '+' + vs(tt.diem_cong) }), h('span', { chu: 'Cộng đã xác nhận' })),
          h('div', {}, h('b', { lop: 'so', chu: '+' + vs(tt.cong_cho_xac_nhan) }), h('span', { chu: 'Cộng chờ xác nhận' })))));
      vungDong.appendChild(the('Các dòng trong phiếu', 'phieu', dong.length ? dong.map(dongPhieu) : h('p', { lop: 'chu-phu', chu: 'Không có dòng nào. Tuần này em không vi phạm mục nào.' })));
      if (tt.cong_cho_xac_nhan) vungDong.appendChild(h('div', { lop: 'khung-vang' }, bt('dong_ho'), h('span', { chu: 'Điểm cộng chờ cán bộ xác nhận chưa tính vào điểm tạm.' })));
    }
    veTom(tom, tom.dong);
    // Nháp lưu ở nền sau 4 giây đứng ở bước này; bấm Gửi trước đó thì chỉ cần một lần gọi máy chủ.
    function luuNhap() {
      if (P.luuNhap) return P.luuNhap;
      clearTimeout(P.henNhap);
      var d = goiDongPhieu(); d.gui = false;
      P.luuNhap = goi('luuPhieu', d).then(function (kq) {
        P.d = Object.assign(P.d, kq);
        if (S.phieu === P && P.buoc === 4) veTom(kq.tom_tat, kq.dong.filter(function (x) { return x.trang_thai !== 'HUY'; }));
        return kq;
      }).catch(function () { return null; });
      return P.luuNhap;
    }
    P.luuNhap = null;
    clearTimeout(P.henNhap);
    P.henNhap = setTimeout(function () { if (S.phieu === P && P.buoc === 4) luuNhap(); }, 4000);
    var nutGui = h('button', { lop: 'nut nut-chinh', onclick: mot(function () {
      var g = goiDongPhieu(); g.gui = true;
      // Đợi nháp ở nền xong rồi mới gửi, để hai lần ghi không chen nhau.
      clearTimeout(P.henNhap);
      return (P.luuNhap || Promise.resolve()).then(function () { return goi('luuPhieu', g); }).then(function (kq2) { delete DEM.phieu; veDaGui(main, kq2); });
    }) }, bt('gui'), 'Gửi tổ trưởng duyệt');
    nutGui.classList.add('day-chinh');
    main.appendChild(thanhDay([h('button', { lop: 'nut', onclick: function () { sangBuoc(3); } }, bt('trai'), 'Lại'), h('div', { lop: 'tam' }),
      h('button', { lop: 'nut', onclick: mot(function () { return luuNhap().then(function (kq) { baoNho(kq ? 'Đã lưu nháp.' : 'Chưa lưu được nháp. Đợi 1 phút rồi thử lại.', !kq); }); }) }, 'Lưu nháp'), nutGui]));
  }
  /** Tóm tắt phiếu tính trên máy (giống quy tắc 3.5, chưa có DC6), để hiện ngay. */
  function tomTatTam(P) {
    var qc = {}; P.d.quy_che.forEach(function (m) { qc[m.ma] = m; });
    var tru = tamTru();
    var daXacNhan = {};
    P.d.dong.forEach(function (x) { if (x.loai === 'CONG' && x.trang_thai === 'HIEU_LUC' && x.ma_muc !== 'DC6' && (x.nguon !== 'HS' || P.cong[x.ma_muc] !== undefined)) daXacNhan[x.ma_muc] = x.muc; });
    var cong = 0, cho = 0;
    Object.keys(daXacNhan).forEach(function (k) { cong += daXacNhan[k]; });
    Object.keys(P.cong).forEach(function (k) { if (!daXacNhan[k] && qc[k]) cho += qc[k].muc; });
    var diemCong = Math.min(10, cong), diem = Math.max(0, 100 - tru + diemCong);
    var xl = P.d.phieu.co_nt ? 'CHUA_DAT' : diem >= 90 ? 'TOT' : diem >= 80 ? 'KHA' : diem >= 70 ? 'DAT' : 'CHUA_DAT';
    var dong = [];
    Object.keys(P.chon).forEach(function (k) { var m = qc[k] || {}; dong.push({ ma_muc: k, noi_dung: m.noi_dung, loai: 'TRU', muc: m.muc, so_lan: P.chon[k].so_lan, tu_khai: P.chon[k].tu_khai && m.tu_khai_duoc, nguon: 'HS', ten_nguon: 'Tự khai trong phiếu', trang_thai: 'HIEU_LUC', diem: null }); });
    Object.keys(P.cong).forEach(function (k) { var m = qc[k] || {}; dong.push({ ma_muc: k, noi_dung: m.noi_dung, loai: 'CONG', muc: m.muc, so_lan: 1, nguon: 'HS', ten_nguon: '', trang_thai: daXacNhan[k] ? 'HIEU_LUC' : 'CHO_XAC_NHAN', ghi_chu: P.cong[k], diem: null }); });
    P.d.dong.forEach(function (x) { if (x.nguon !== 'HS' && x.trang_thai !== 'HUY') dong.push(x); });
    return { diem_tru: tru, diem_cong: diemCong, cong_cho_xac_nhan: cho, diem_tuan: diem, xep_loai: xl, dong: dong };
  }
  function veDaGui(main, kq) {
    xoaHet(main);
    main.appendChild(h('section', { lop: 'the da-gui' }, h('div', { lop: 'vong' }, bt('tich')), h('h2', { kieu: { 'font-size': '22px' }, chu: 'Em đã gửi phiếu tuần ' + kq.tuan.so }),
      h('p', { lop: 'chu-phu', kieu: { 'margin-top': '6px' }, chu: 'Gửi lúc ' + ngayVN(kq.phieu.gui_luc) + '. Người duyệt: ' + kq.ten_nguoi_duyet + '.' }),
      h('p', { kieu: { 'margin-top': '8px', display: 'flex', gap: '8px', 'justify-content': 'center', 'align-items': 'center' } }, h('b', { lop: 'so', chu: 'Điểm tạm tính ' + vs(kq.tom_tat.diem_tuan) }), vienXepLoai(kq.tom_tat.xep_loai)),
      h('div', { lop: 'hang-nut', kieu: { 'justify-content': 'center' } }, h('button', { lop: 'nut', onclick: function () { diDen('nha'); } }, bt('nha'), 'Về trang chủ'),
        h('button', { lop: 'nut', onclick: function () { diDen('phieu'); } }, bt('phieu'), 'Xem phiếu'))));
  }
  function dongPhieu(x) {
    var laCong = x.loai === 'CONG';
    var cho_ = x.trang_thai === 'CHO_XAC_NHAN';
    var diem = x.diem !== null && x.diem !== undefined ? x.diem : (laCong ? x.muc : -x.muc * x.so_lan * (x.tu_khai ? 0.5 : 1));
    var nguon = laCong && x.nguon === 'HS' ? 'Đề nghị trong phiếu' : x.ten_nguon;
    var phu = [nguon + (x.nguon !== 'HS' && x.nguoi_ghi ? ': ' + x.nguoi_ghi : ''), x.so_lan > 1 ? x.so_lan + ' lần' : '', x.tu_khai ? 'trừ một nửa' : '',
      cho_ ? 'chờ xác nhận' : '', x.trang_thai === 'TU_CHOI' ? 'không được xác nhận' : '', x.ghi_chu].filter(Boolean).join(' · ');
    return h('div', { lop: 'dong-phieu' + (x.trung ? ' trung' : '') }, h('span', { lop: 'ma-muc', chu: x.ma_muc }),
      h('div', { lop: 'giua' }, h('span', { chu: x.noi_dung }), h('small', { chu: phu }), x.trung ? h('small', { chu: 'Cùng mục, khác người ghi: xem có trùng lần không.' }) : null),
      h('span', { lop: 'd ' + (cho_ ? 'cho' : laCong ? 'cong' : 'tru'), chu: (diem > 0 ? '+' : '') + vs(diem) }));
  }
  function veXemPhieuEm(main, d) {
    var tt = d.tom_tat;
    main.appendChild(h('section', { lop: 'the the-diem' }, h('div', { lop: 'nhan', chu: (tt.chinh_thuc ? 'Điểm tuần ' : 'Điểm tạm tính tuần ') + d.tuan.so }),
      h('div', { lop: 'so-diem', chu: tt.mien ? 'Miễn' : vs(tt.diem_tuan) }), h('div', { kieu: { 'margin-top': '8px', display: 'flex', gap: '8px', 'justify-content': 'center', 'flex-wrap': 'wrap' } }, vienTrangThai(d.phieu.trang_thai), vienXepLoai(tt.xep_loai))));
    var thongTin = [];
    if (d.phieu.gui_luc) thongTin.push('Gửi lúc ' + ngayVN(d.phieu.gui_luc) + (d.phieu.dung_han ? ', đúng hạn' : ', trễ hạn'));
    if (d.phieu.nhap_ho) thongTin.push('Tổ trưởng ' + d.phieu.nhap_ho + ' nhập hộ');
    if (d.phieu.nguoi_duyet) thongTin.push('Người duyệt: ' + d.phieu.nguoi_duyet);
    else thongTin.push('Người duyệt: ' + d.ten_nguoi_duyet);
    if (d.tuan.trang_thai === 'CHUA_MO') thongTin.push('Phiếu chưa mở. Hạn gửi: ' + ngayVN(d.tuan.han_hs));
    else if (['CHUA_CO', 'NHAP'].indexOf(d.phieu.trang_thai) >= 0) thongTin.push('Đã hết hạn gửi phiếu. Em không gửi kịp thì báo tổ trưởng hoặc cô.');
    main.appendChild(the('Phiếu của em', 'phieu', [h('ul', { lop: 'ds' }, thongTin.map(function (t) { return h('li', { lop: 'dong-ds', kieu: { 'min-height': '44px' } }, bt('tich'), h('span', { chu: t })); }))]));
    var dong = d.dong;
    main.appendChild(the('Các dòng', 'sach', dong.length ? dong.map(dongPhieu) : h('p', { lop: 'chu-phu', chu: 'Không có dòng nào.' })));
    main.appendChild(h('div', { lop: 'hang-nut' }, h('button', { lop: 'nut', onclick: function () { diDen('lichsu'); } }, bt('cot'), 'Điểm các tuần trước')));
    var coNguoiKhac = dong.some(function (x) { return x.nguon !== 'HS' && x.nguon !== 'TU_DONG'; });
    if (d.phieu.khong_dong_y) main.appendChild(h('div', { lop: 'khung-vang' }, bt('tin_nhan'), h('span', { chu: 'Em đã ghi không đồng ý: ' + d.phieu.khong_dong_y })));
    else if (coNguoiKhac && d.tuan.trang_thai !== 'DA_CHOT') main.appendChild(h('div', { lop: 'hang-nut' }, h('button', { lop: 'nut nut-tra', onclick: function () { khongDongY(d); } }, bt('tin_nhan'), 'Em không đồng ý một dòng')));
  }
  function khongDongY(d) {
    var o = h('textarea', { lop: 'o-nhap', maxlength: 300, placeholder: 'Ví dụ: HT4 thứ Tư em có mang đủ sách' });
    var t = moTam('Em không đồng ý', [h('p', { lop: 'chu-phu', kieu: { 'margin-bottom': '8px' }, chu: 'Ghi dòng nào và vì sao. Cô xem trước khi chốt tuần.' }), o], [
      h('button', { lop: 'nut', chu: 'Thôi', onclick: function () { t.dong(); } }),
      h('button', { lop: 'nut nut-chinh', chu: 'Gửi cô', onclick: mot(function () {
        return goi('khongDongY', { tuan: d.tuan.so, ly_do: o.value }).then(function () { t.dong(); baoNho('Đã gửi cô.'); diDen('phieu'); });
      }) })]);
  }

  // ================================================================ duyệt phiếu (tổ trưởng, lớp trưởng)
  MAN.duyet = function () {
    taiMan('Duyệt phiếu', 'dsDuyet', {}, function (main, d) { veDuyet(main, d); }, 3, { dem: 'duyet', tuoi: 120 });
  };
  function veDuyet(main, d) {
    datTieuDe('Duyệt phiếu tuần ' + d.tuan.so, d.tuan.nhan);
    var dau = h('div'), ds = h('div');
    main.appendChild(the(null, null, dau));
    main.appendChild(the('Tổ viên', 'nhom', ds));
    function veLai() {
      xoaHet(dau); xoaHet(ds);
      var gui = d.ds.filter(function (x) { return ['DA_GUI', 'DA_DUYET', 'DA_CHOT'].indexOf(x.trang_thai) >= 0; }).length;
      var duyet = d.ds.filter(function (x) { return x.trang_thai === 'DA_DUYET'; }).length;
      var tiLe = d.ds.length ? gui / d.ds.length : 0;
      dau.appendChild(h('div', { lop: 'viec-chinh' }, h('b', { lop: 'so', kieu: { 'font-size': '18px' }, chu: gui + '/' + d.ds.length + ' đã gửi · ' + duyet + ' đã duyệt' }),
        h('span', { lop: 'han' }, bt('dong_ho'), d.ghi_duoc ? 'Hạn duyệt ' + d.tuan.con_lai : 'Đã hết hạn duyệt')));
      dau.appendChild(h('div', { lop: 'ray', kieu: { 'margin-top': '12px' }, role: 'img', 'aria-label': Math.round(tiLe * 100) + '% đã gửi' }, h('span', { kieu: { transform: 'scaleX(' + tiLe + ')', background: 'var(--chinh)' } })));
      if (d.ds.length) d.ds.forEach(function (x) { ds.appendChild(dongThanhVien(x, d, capNhat)); });
      else ds.appendChild(trangRong('phieu', 'Chưa có ai trong danh sách duyệt của em.'));
    }
    function capNhat(p) { capNhatTuPhieu(d, p); veLai(); }
    d._veLai = veLai;
    veLai();
  }
  /** Cập nhật dòng của một em trong danh sách (duyệt, bảng tuần) từ phiếu máy chủ trả về, không tải lại cả danh sách. */
  function capNhatTuPhieu(d, p) {
    var ma = p.hoc_sinh.ma;
    if (d.chi_tiet) d.chi_tiet[ma] = p;
    (d.ds || d.hang || []).forEach(function (x) {
      if (x.ma !== ma) return;
      x.trang_thai = p.phieu.trang_thai; x.diem_tuan = p.tom_tat.diem_tuan; x.xep_loai = p.tom_tat.xep_loai;
      x.diem_tru = p.tom_tat.diem_tru; x.diem_cong = p.tom_tat.diem_cong; x.mien = p.phieu.mien; x.co_nt = p.phieu.co_nt;
      x.co_loi_nhan = !!p.phieu.loi_nhan; x.khong_dong_y = !!p.phieu.khong_dong_y; x.nhap_ho = !!p.phieu.nhap_ho; x.gia_han_den = p.phieu.gia_han_den;
      x.cong_cho = p.dong.filter(function (y) { return y.trang_thai === 'CHO_XAC_NHAN'; }).length; x.dang_luu = false;
    });
  }
  function dongThanhVien(x, d, capNhat) {
    return h('button', { lop: 'dong-bam' + (x.dang_luu ? ' dang-luu' : ''), onclick: function () { moPhieuDuyet(x, d, capNhat); } }, tronTen(x.ten_goi, x.to),
      h('div', { lop: 'dong-giua' }, h('div', { lop: 'dong-ten cat-dong', chu: x.ten_goi }),
        h('div', { kieu: { display: 'flex', gap: '6px', 'flex-wrap': 'wrap', 'margin-top': '4px' } }, vienTrangThai(x.trang_thai),
          x.dang_luu ? h('span', { lop: 'vien-thuoc vt-cg', chu: 'Đang lưu…' }) : null,
          x.co_loi_nhan ? h('span', { lop: 'vien-thuoc vt-cg' }, bt('tin_nhan'), 'Lời nhắn') : null,
          x.khong_dong_y ? h('span', { lop: 'vien-thuoc vt-tl' }, bt('canh_bao'), 'Không đồng ý') : null,
          x.nhap_ho ? h('span', { lop: 'vien-thuoc vt-cg' }, bt('them_nguoi'), 'Nhập hộ') : null)),
      h('span', { lop: 'diem-nho', chu: x.mien ? 'Miễn' : vs(x.diem_tuan) }), bt('phai'));
  }
  function moPhieuDuyet(x, d, capNhat) {
    var noiDung = h('div');
    var tam = moTam(x.ten_goi + ' · tuần ' + d.tuan.so, noiDung, null);
    var sanCo = d.chi_tiet && d.chi_tiet[x.ma];
    if (sanCo) { veNoiDungDuyet(noiDung, sanCo, d, tam, capNhat, x); return; }
    khungCho(noiDung, 2);
    goi('xemPhieu', { tuan: d.tuan.so, ma: x.ma }).then(function (p) {
      xoaHet(noiDung);
      veNoiDungDuyet(noiDung, p, d, tam, capNhat, x);
    }).catch(function (e) { tam.dong(); xuLyLoi(e); });
  }
  function veNoiDungDuyet(noiDung, p, d, tam, capNhat, x0) {
    var tt = p.tom_tat;
    var qt = S.nd.la_qt;
    function veLaiTam(p2) { capNhat(p2); var th = tam.tam.querySelector('.tam-than'); xoaHet(th); veNoiDungDuyet(th, p2, d, tam, capNhat, x0); }
    noiDung.appendChild(h('div', { kieu: { display: 'flex', 'align-items': 'center', gap: '12px', 'flex-wrap': 'wrap', 'margin-bottom': '12px' } },
      h('b', { lop: 'so', kieu: { 'font-size': '32px', color: 'var(--chinh-dam)' }, chu: tt.mien ? 'Miễn' : vs(tt.diem_tuan) }), vienXepLoai(tt.xep_loai), vienTrangThai(p.phieu.trang_thai)));
    var tin = [];
    if (p.phieu.gui_luc) tin.push('Gửi ' + ngayVN(p.phieu.gui_luc) + (p.phieu.dung_han ? ' · đúng hạn' : ' · trễ hạn'));
    if (p.phieu.nhap_ho) tin.push('Nhập hộ: ' + p.phieu.nhap_ho);
    if (p.phieu.so_lan_tra) tin.push('Đã trả lại ' + p.phieu.so_lan_tra + ' lần');
    if (p.phieu.viec_tot_so !== null) tin.push('Việc tốt: ' + p.phieu.viec_tot_so + '/7');
    if (p.phieu.gia_han_den) tin.push('Gia hạn đến ' + ngayVN(p.phieu.gia_han_den));
    if (tin.length) noiDung.appendChild(h('p', { lop: 'chu-phu', chu: tin.join(' · ') }));
    if (p.phieu.loi_nhan) noiDung.appendChild(h('div', { lop: 'khung-xanh' }, bt('tin_nhan'), h('span', { kieu: { 'white-space': 'pre-wrap', 'overflow-wrap': 'anywhere' }, chu: 'Lời nhắn: ' + p.phieu.loi_nhan })));
    if (p.phieu.khong_dong_y) noiDung.appendChild(h('div', { lop: 'khung-vang' }, bt('canh_bao'), h('span', { kieu: { 'overflow-wrap': 'anywhere' }, chu: 'Không đồng ý: ' + p.phieu.khong_dong_y })));
    if (p.phieu.ly_do_tra && p.phieu.trang_thai === 'TRA_LAI') noiDung.appendChild(h('div', { lop: 'khung-vang' }, bt('tra_lai'), h('span', { chu: 'Lý do trả lại: ' + p.phieu.ly_do_tra })));
    var dsDong = h('div', { kieu: { 'margin-top': '12px' } });
    p.dong.forEach(function (x) {
      var hang = dongPhieu(x);
      if (x.xoa_duoc && d.ghi_duoc) hang.appendChild(h('button', { lop: 'nut nut-chu nut-tron', 'aria-label': 'Huỷ dòng ' + x.ma_muc, onclick: function () {
        hoi('Huỷ dòng ' + x.ma_muc + '?', 'Dòng này không còn được tính điểm.', 'Huỷ dòng', 'nut-tra').then(function (ok) {
          if (!ok) return;
          hang.classList.add('dang-luu');
          goi('huyDong', { id: x.id }).then(function (p2) { veLaiTam(p2); baoNho('Đã huỷ dòng.'); }).catch(function (e) { hang.classList.remove('dang-luu'); xuLyLoi(e); });
        });
      } }, bt('nhan')));
      if (qt && x.trang_thai === 'CHO_XAC_NHAN' && d.ghi_duoc) {
        hang.appendChild(h('button', { lop: 'nut nut-nho', onclick: mot(function () { return goi('xacNhanCong', { id: x.id, dong_y: true }).then(function (r) { baoNho('Đã xác nhận.'); veLaiTam(r.phieu); }); }) }, bt('tich'), 'Xác nhận'));
      }
      dsDong.appendChild(hang);
    });
    if (!p.dong.length) dsDong.appendChild(h('p', { lop: 'chu-phu', chu: 'Phiếu không có dòng nào.' }));
    noiDung.appendChild(dsDong);
    var day = tam.tam.querySelector('.tam-day'); if (day) day.remove();
    var nut = [];
    var ttp = p.phieu.trang_thai;
    if (d.ghi_duoc) {
      nut.push(h('button', { lop: 'nut nut-nho', onclick: function () { ghiThemLoi(p, d, veLaiTam); } }, bt('cong'), 'Ghi thêm lỗi'));
      if (ttp === 'CHUA_CO' || ttp === 'NHAP') nut.push(h('button', { lop: 'nut nut-nho', onclick: function () { tam.dong(); batDauNhapHo(p.hoc_sinh.ma, d.tuan.so, p); } }, bt('them_nguoi'), 'Nhập hộ'));
      if (qt) nut.push(h('button', { lop: 'nut nut-nho', onclick: function () { suaPhieuQt(p, d, veLaiTam); } }, bt('but'), 'Miễn, nhóm 8, gia hạn'));
    }
    if (nut.length) noiDung.appendChild(h('div', { lop: 'hang-nut' }, nut));
    if (d.ghi_duoc && (ttp === 'DA_GUI' || ttp === 'DA_DUYET')) {
      var nutTra = h('button', { lop: 'nut nut-tra', onclick: function () { traLai(p, d, tam, capNhat); } }, bt('tra_lai'), 'Trả lại');
      var nutDuyet = ttp === 'DA_GUI' ? h('button', { lop: 'nut nut-chinh', onclick: function () {
        // Cập nhật lạc quan: đóng tấm, đổi nhãn ngay; máy chủ trả về thì đồng bộ, lỗi thì trả lại như cũ.
        var x = (d.ds || d.hang || []).filter(function (y) { return y.ma === p.hoc_sinh.ma; })[0];
        var cu = x ? x.trang_thai : null;
        if (x) { x.trang_thai = 'DA_DUYET'; x.dang_luu = true; }
        tam.dong(); capNhatGiaoDien(d);
        goi('duyetPhieu', { tuan: d.tuan.so, ma: p.hoc_sinh.ma }).then(function (p2) { capNhat(p2); baoNho('Đã duyệt phiếu của ' + p.hoc_sinh.ten_goi + '.'); })
          .catch(function (e) { if (x) { x.trang_thai = cu; x.dang_luu = false; } capNhatGiaoDien(d); xuLyLoi(e); });
      } }, bt('tich'), qt ? 'Duyệt thay' : 'Duyệt') : null;
      tam.tam.appendChild(h('div', { lop: 'tam-day' }, nutTra, nutDuyet));
    }
  }
  /** Vẽ lại phần danh sách đang mở từ dữ liệu trong máy (không gọi máy chủ). */
  function capNhatGiaoDien(d) { if (d._veLai) d._veLai(); }
  function traLai(p, d, tam, capNhat) {
    var LY_DO = ['Thiếu lỗi có trong sổ của tổ', 'Sai số lần', 'Ghi tự khai nhưng đã có trong sổ', 'Khác'];
    var o = h('textarea', { lop: 'o-nhap', maxlength: 300, placeholder: 'Ghi rõ mục nào, ngày nào' });
    var chip = LY_DO.map(function (l) { return h('button', { lop: 'nut nut-nho', type: 'button', chu: l, onclick: function () { o.value = l === 'Khác' ? '' : l + ': '; o.focus(); } }); });
    var t2 = moTam('Trả lại phiếu của ' + p.hoc_sinh.ten_goi, [h('p', { lop: 'chu-phu', kieu: { 'margin-bottom': '8px' }, chu: 'Chọn nhanh rồi ghi thêm cho rõ. Bắt buộc có lý do.' }), h('div', { lop: 'cac-chip', kieu: { 'margin-bottom': '12px' } }, chip), o], [
      h('button', { lop: 'nut', chu: 'Thôi', onclick: function () { t2.dong(); } }),
      h('button', { lop: 'nut nut-tra', onclick: mot(function () {
        if (!o.value.trim()) { baoNho('Ghi lý do trả lại.', true); return; }
        return goi('traLaiPhieu', { tuan: d.tuan.so, ma: p.hoc_sinh.ma, ly_do: o.value }).then(function (p2) { t2.dong(); tam.dong(); capNhat(p2); baoNho('Đã trả lại phiếu.'); });
      }) }, bt('tra_lai'), 'Trả lại')]);
  }
  function ghiThemLoi(p, d, xong) {
    var nhom = d.nhom_duoc_ghi || ['1', '2', '3', '4', '5', '6'];
    var ds = d.quy_che.filter(function (m) { return nhom.indexOf(String(m.nhom)) >= 0 && (m.loai === 'TRU' || (S.nd.la_qt && m.loai === 'CONG')); });
    var chon = h('select', { lop: 'o-nhap', id: 'chon-muc' }, ds.map(function (m) { return h('option', { value: m.ma, chu: m.ma + ' · ' + m.noi_dung.slice(0, 60) + ' (' + (m.loai === 'CONG' ? '+' : '−') + vs(m.muc) + ')' }); }));
    var soLan = h('input', { lop: 'o-nhap', type: 'number', min: 1, max: 20, id: 'so-lan' }); soLan.value = 1;
    var ghiChu = h('input', { lop: 'o-nhap', maxlength: 200, id: 'ghi-chu', placeholder: 'Ví dụ: sổ của tổ, thứ Tư' });
    var t = moTam('Ghi thêm cho ' + p.hoc_sinh.ten_goi, [
      h('div', { lop: 'truong' }, h('label', { lop: 'nhan-o', 'for': 'chon-muc', chu: 'Mục' }), chon),
      h('div', { lop: 'truong' }, h('label', { lop: 'nhan-o', 'for': 'so-lan', chu: 'Số lần' }), soLan),
      h('div', { lop: 'truong' }, h('label', { lop: 'nhan-o', 'for': 'ghi-chu', chu: 'Ghi chú' }), ghiChu),
      h('p', { lop: 'chu-phu', kieu: { 'margin-top': '12px' }, chu: 'Bạn thấy dòng này kèm tên người ghi. Nhắc bạn trước, ghi sau.' })], [
      h('button', { lop: 'nut', chu: 'Thôi', onclick: function () { t.dong(); } }),
      h('button', { lop: 'nut nut-chinh', onclick: mot(function () {
        return goi('ghiThem', { tuan: d.tuan.so, ma: p.hoc_sinh.ma, ma_muc: chon.value, so_lan: Number(soLan.value), ghi_chu: ghiChu.value }).then(function (p2) { t.dong(); baoNho('Đã ghi thêm.'); xong(p2); });
      }) }, bt('cong'), 'Ghi')]);
  }
  function batDauNhapHo(ma, tuan, pSan) {
    var qc = layDem('quyche');
    function bat(main, p) {
      S.phieu = taoTrangThaiPhieu(p, 'NHAP_HO', ma);
      datTieuDe('Nhập hộ · ' + p.hoc_sinh.ten_goi, p.tuan.nhan);
      vePhieu(main);
    }
    if (pSan && qc) {
      var p = JSON.parse(JSON.stringify(pSan));
      p.quy_che = qc.v.ds.filter(function (m) { return m.hs_tu_chon; }); p.he_so_tu_khai = 0.5;
      ++S.luot; veMan('Nhập hộ', function (main) { bat(main, p); });
      return;
    }
    taiMan('Nhập hộ', 'xemPhieu', { tuan: tuan, ma: ma, kem_quy_che: true }, bat);
  }
  function xacNhanCong(id, dongY, xong) {
    return goi('xacNhanCong', { id: id, dong_y: dongY }).then(function (r) { baoNho(dongY ? 'Đã xác nhận.' : 'Đã ghi không xác nhận.'); xong(r); }).catch(xuLyLoi);
  }
  function suaPhieuQt(p, d, xong) {
    var mien = h('input', { type: 'checkbox' }); mien.checked = p.phieu.mien;
    var nt = h('input', { type: 'checkbox' }); nt.checked = p.phieu.co_nt;
    var gh = h('input', { lop: 'o-nhap', id: 'gia-han', placeholder: 'Ví dụ: 2026-11-30 10:00', maxlength: 16 }); gh.value = p.phieu.gia_han_den || '';
    var t = moTam('Phiếu của ' + p.hoc_sinh.ten_goi, [
      h('label', { lop: 'cong-tac' }, mien, h('span', { lop: 'ray-ct' }), 'Miễn tuần này (nghỉ ốm cả tuần)'),
      h('label', { lop: 'cong-tac' }, nt, h('span', { lop: 'ray-ct' }), 'Vi phạm nhóm 8 (tuần này Chưa đạt)'),
      h('div', { lop: 'truong', kieu: { 'margin-top': '12px' } }, h('label', { lop: 'nhan-o', 'for': 'gia-han', chu: 'Gia hạn gửi phiếu đến (để trống nếu không gia hạn)' }), gh)], [
      h('button', { lop: 'nut', chu: 'Thôi', onclick: function () { t.dong(); } }),
      h('button', { lop: 'nut nut-chinh', chu: 'Lưu', onclick: mot(function () {
        return goi('capNhatPhieu', { tuan: d.tuan.so, ma: p.hoc_sinh.ma, mien: mien.checked, co_nt: nt.checked, gia_han_den: gh.value.trim() }).then(function (p2) { t.dong(); baoNho('Đã lưu.'); xong(p2); });
      }) })]);
  }

  // ================================================================ bảng tuần (quản trị)
  MAN.bangtuan = function (ts) {
    taiMan('Bảng tuần', 'bangTuan', ts && ts.tuan ? { tuan: ts.tuan } : {}, function (main, d) { veBangTuan(main, d); }, 4, ts && ts.tuan ? {} : { dem: 'bangtuan', tuoi: 120 });
  };
  function veBangTuan(main, d) {
    datTieuDe('Bảng tuần ' + d.tuan.so, d.tuan.nhan);
    var tuan = d.tuan.so;
    var dd = Object.assign({}, d, { ghi_duoc: !d.da_chot, nhom_duoc_ghi: ['1', '2', '3', '4', '5', '6', '7', 'DC'] });
    var capNhat = function (p) { capNhatTuPhieu(d, p); veDs(); };
    var chonTuan = h('select', { lop: 'o-nhap', 'aria-label': 'Chọn tuần', kieu: { width: 'auto', 'min-width': '200px' } }, d.cac_tuan.slice().reverse().map(function (t) {
      var o = h('option', { value: t.so, chu: t.nhan + (t.da_chot ? ' (đã chốt)' : '') }); if (t.so === tuan) o.selected = true; return o;
    }));
    chonTuan.addEventListener('change', function () { MAN.bangtuan({ tuan: Number(chonTuan.value) }); });
    main.appendChild(h('div', { lop: 'tieu-de-man' }, h('h2', { chu: d.da_chot ? 'Tuần ' + tuan + ' đã chốt' : 'Tuần ' + tuan + ' đang mở' }), chonTuan));
    main.appendChild(h('div', { lop: 'o-dem' }, [['Đã gửi', d.dem.da_gui], ['Đã duyệt', d.dem.da_duyet], ['Trả lại', d.dem.tra_lai], ['Chưa gửi', d.dem.chua_gui]].map(function (x) { return h('div', {}, h('b', { chu: String(x[1]) }), h('span', { chu: x[0] })); })));
    if (d.da_chot && d.ket_qua) {
      var toXs = d.ket_qua.vinh_danh.filter(function (v) { return v.danh_hieu === 'TO_XS'; }).map(function (v) { return v.ten; }).join(', ');
      var phong = d.ket_qua.vinh_danh.filter(function (v) { return v.danh_hieu === 'PHONG_KM'; }).map(function (v) { return v.ten; }).join(', ');
      var hs = d.ket_qua.vinh_danh.filter(function (v) { return v.danh_hieu === 'HS_XS'; }).map(function (v) { return v.ten + ' (hạng ' + v.hang + ')'; }).join(', ');
      main.appendChild(the('Kết quả đã chốt', 'cup', [h('p', { chu: 'Học sinh xuất sắc: ' + (hs || 'chưa có') }), h('p', { chu: 'Tổ xuất sắc: ' + (toXs || 'chưa có tổ đủ điều kiện') }), h('p', { chu: 'Phòng kiểu mẫu: ' + (phong || 'chưa có') }),
        h('p', { lop: 'chu-phu', kieu: { 'margin-top': '6px' }, chu: 'Chốt lúc ' + ngayVN(d.tuan.chot_luc) + '.' }),
        h('div', { lop: 'hang-nut' }, h('button', { lop: 'nut', onclick: function () { diDen('chieu'); } }, bt('man_hinh'), 'Mở bảng chiếu'),
          h('button', { lop: 'nut nut-tra', onclick: function () { moLaiTuan(tuan); } }, bt('tai_lai'), 'Mở lại tuần'))], 'the-vinh-danh'));
    }
    // lọc
    var locTo = 'tat_ca', locTt = 'tat_ca';
    var vungDs = h('div');
    var nutLoc = [];
    function nutL(nhom, gt, chu) {
      var b = h('button', { 'aria-pressed': (nhom === 'to' ? locTo : locTt) === gt ? 'true' : 'false', chu: chu, onclick: function () {
        if (nhom === 'to') locTo = gt; else locTt = gt;
        nutLoc.forEach(function (x) { x.b.setAttribute('aria-pressed', (x.n === 'to' ? locTo : locTt) === x.g ? 'true' : 'false'); });
        veDs();
      } });
      nutLoc.push({ b: b, n: nhom, g: gt });
      return b;
    }
    main.appendChild(h('div', { lop: 'loc', role: 'group', 'aria-label': 'Lọc' }, nutL('to', 'tat_ca', 'Cả lớp'), ['1', '2', '3', '4'].map(function (t) { return nutL('to', t, 'Tổ ' + t); }),
      nutL('tt', 'chua_gui', 'Chưa gửi'), nutL('tt', 'DA_GUI', 'Chờ duyệt'), nutL('tt', 'tat_ca', 'Mọi trạng thái')));
    main.appendChild(vungDs);
    function veDs() {
      xoaHet(vungDs);
      var ds = d.hang.filter(function (x) {
        if (locTo !== 'tat_ca' && String(x.to) !== locTo) return false;
        if (locTt === 'chua_gui') return ['NHAP', 'CHUA_CO', 'TRA_LAI'].indexOf(x.trang_thai) >= 0;
        if (locTt !== 'tat_ca') return x.trang_thai === locTt;
        return true;
      });
      var bang = h('table', { lop: 'bang' }, h('thead', {}, h('tr', {}, ['Tên', 'Tổ', 'Phòng', 'Trạng thái', 'Trừ', 'Cộng', 'Điểm', 'Xếp loại', 'Ghi chú'].map(function (c, i) { return h('th', { lop: i >= 4 && i <= 6 ? 'so' : null, chu: c }); }))),
        h('tbody', {}, ds.map(function (x) {
          var co = [];
          if (x.khong_dong_y) co.push(h('span', { lop: 'vien-thuoc vt-tl', title: x.ly_do_khong_dong_y }, bt('canh_bao'), 'Không đồng ý'));
          if (x.trung) co.push(h('span', { lop: 'vien-thuoc vt-dat' }, 'Trùng mục'));
          if (x.cong_cho) co.push(h('span', { lop: 'vien-thuoc vt-dat' }, x.cong_cho + ' cộng chờ'));
          if (x.mien) co.push(h('span', { lop: 'vien-thuoc vt-cg' }, 'Miễn'));
          if (x.co_nt) co.push(h('span', { lop: 'vien-thuoc vt-cd' }, 'Nhóm 8'));
          if (x.gia_han_den) co.push(h('span', { lop: 'vien-thuoc vt-kha' }, 'Gia hạn'));
          if (x.nhap_ho) co.push(h('span', { lop: 'vien-thuoc vt-cg' }, 'Nhập hộ'));
          return h('tr', { lop: 'bam' + (x.dang_luu ? ' dang-luu' : ''), tabindex: '0', onclick: function () { moPhieuDuyet(x, dd, capNhat); }, onkeydown: function (e) { if (e.key === 'Enter') moPhieuDuyet(x, dd, capNhat); } },
            h('td', {}, h('span', { kieu: { display: 'inline-flex', 'align-items': 'center', gap: '8px' } }, tronTen(x.ten_goi, x.to), h('b', { chu: x.ten_goi }))),
            h('td', { chu: x.to }), h('td', { chu: x.phong }), h('td', {}, vienTrangThai(x.trang_thai)),
            h('td', { lop: 'so', chu: x.mien ? '' : (x.diem_tru ? '−' + vs(x.diem_tru) : '0') }), h('td', { lop: 'so', chu: x.mien ? '' : '+' + vs(x.diem_cong) }),
            h('td', { lop: 'so' }, h('b', { chu: x.mien ? 'Miễn' : vs(x.diem_tuan) })), h('td', {}, vienXepLoai(x.mien ? null : x.xep_loai)), h('td', {}, h('span', { lop: 'co-canh' }, co)));
        })));
      vungDs.appendChild(h('div', { lop: 'chi-may-tinh' }, h('div', { lop: 'bang-cuon' }, bang)));
      vungDs.appendChild(h('div', { lop: 'chi-dien-thoai' }, the(null, null, ds.length ? ds.map(function (x) { return dongThanhVien(x, dd, capNhat); }) : trangRong('phieu', 'Không có em nào khớp bộ lọc.'))));
    }
    d._veLai = veDs; dd._veLai = veDs;
    veDs();
    if (!d.da_chot) {
      var cot1 = h('div', { lop: 'cot' }), cot2 = h('div', { lop: 'cot' });
      // điểm cộng chờ
      cot1.appendChild(the('Điểm cộng chờ xác nhận', 'sao', d.cong_cho.length ? d.cong_cho.map(function (c) {
        return h('div', { lop: 'dong-phieu' }, h('span', { lop: 'ma-muc', chu: c.ma_muc }), h('div', { lop: 'giua' }, h('b', { chu: c.ten_goi }), h('small', { chu: c.ghi_chu || c.noi_dung })),
          h('button', { lop: 'nut nut-nho', 'aria-label': 'Không xác nhận', onclick: mot(function (e) { var hang = e.currentTarget.parentNode; return xacNhanCong(c.id, false, function (r) { daXuLyCong(hang, false); capNhat(r.phieu); }); }) }, bt('nhan')),
          h('button', { lop: 'nut nut-nho nut-chinh', 'aria-label': 'Xác nhận', onclick: mot(function (e) { var hang = e.currentTarget.parentNode; return xacNhanCong(c.id, true, function (r) { daXuLyCong(hang, true); capNhat(r.phieu); }); }) }, bt('tich')));
      }) : h('p', { lop: 'chu-phu', chu: 'Không có đề nghị nào đang chờ.' })));
      // số lần nhắc
      cot2.appendChild(the('Số lần quản lý nội trú nhắc', 'giuong', [h('p', { lop: 'chu-phu', kieu: { 'margin-bottom': '8px' }, chu: 'Ô trống: chưa có số, phòng đó không được xét tuần này. Số 0: phòng không bị nhắc.' }),
        d.phong.map(function (p) {
          var o = h('input', { lop: 'o-nhap', type: 'number', min: 0, max: 50, inputmode: 'numeric', 'aria-label': 'Số lần nhắc phòng ' + p.phong });
          o.value = p.so_lan_qlnt_nhac === '' ? '' : p.so_lan_qlnt_nhac;
          o.addEventListener('change', function () { goi('nhapNhac', { tuan: tuan, phong: p.phong, so: o.value }).then(function () { baoNho('Đã lưu phòng ' + p.phong + '.'); }).catch(xuLyLoi); });
          return h('div', { lop: 'dong-phong' }, h('div', {}, h('b', { chu: p.phong }), h('div', { lop: 'chu-phu', chu: p.si_so + ' em' })), o,
            h('button', { lop: 'nut nut-nho', title: 'Cộng DC3 cho cả phòng', onclick: function () {
              goi('congDc3Phong', { tuan: tuan, phong: p.phong }).then(function (r) { baoNho(r.so_em ? 'Đã cộng DC3 cho ' + r.so_em + ' em.' : 'Cả phòng đã có DC3.'); }).catch(xuLyLoi);
            } }, '+DC3'));
        })]));
      main.appendChild(h('div', { lop: 'luoi-2', kieu: { 'margin-top': '16px' } }, cot1, cot2));
      var choDuyet = d.hang.filter(function (x) { return x.trang_thai === 'DA_GUI'; }).length;
      main.appendChild(h('div', { lop: 'hang-nut' }, h('button', { lop: 'nut nut-chinh', onclick: function () { chotTuan(tuan, choDuyet, d); } }, bt('khoa'), 'Chốt tuần ' + tuan)));
    }
  }
  /** Đề nghị điểm cộng vừa xử lý: thay hai nút bằng nhãn, không tải lại bảng. */
  function daXuLyCong(hang, dongY) {
    hang.querySelectorAll('button').forEach(function (b) { b.remove(); });
    hang.appendChild(dongY ? h('span', { lop: 'vien-thuoc vt-tot' }, bt('tich'), 'Đã cộng') : h('span', { lop: 'vien-thuoc vt-cg', chu: 'Không xác nhận' }));
  }
  function chotTuan(tuan, choDuyet, d) {
    var trong = d.phong.filter(function (p) { return p.so_lan_qlnt_nhac === ''; }).length;
    var nhac = [
      'Đã đối chiếu sổ đầu bài và báo cáo của Tổ quản lý học sinh.',
      trong ? trong + ' phòng chưa có số lần nhắc: các phòng này không được xét phòng kiểu mẫu tuần này.' : 'Đã nhập số lần nhắc của cả 6 phòng.',
      choDuyet ? choDuyet + ' phiếu đã gửi chưa duyệt: khi chốt, cô duyệt thay các phiếu này.' : 'Không còn phiếu chờ duyệt.'
    ];
    var noi = h('div', {}, h('p', { lop: 'chu-phu', kieu: { 'margin-bottom': '8px' }, chu: 'Ba dòng dưới đây chỉ để nhắc, không bắt buộc. Chốt xong vẫn mở lại được.' }),
      nhac.map(function (c) { var x = h('input', { type: 'checkbox' }); return h('label', { lop: 'cong-tac', kieu: { 'align-items': 'flex-start', 'font-weight': '400', 'font-size': '15px' } }, x, h('span', { lop: 'ray-ct' }), c); }));
    hoi('Chốt tuần ' + tuan + '?', noi, 'Chốt tuần').then(function (ok) {
      if (!ok) return;
      baoNho('Đang chốt…');
      goi('chotTuan', { tuan: tuan }).then(function (r) { baoNho('Đã chốt tuần ' + tuan + '.'); var main = document.getElementById('noi-dung'); xoaHet(main); veBangTuan(main, r); }).catch(xuLyLoi);
    });
  }
  function moLaiTuan(tuan) {
    hoi('Mở lại tuần ' + tuan + '?', 'Phiếu về trạng thái trước khi chốt. Sửa xong thì chốt lại; vinh danh của tuần, tháng, đợt được tính lại.', 'Mở lại', 'nut-tra').then(function (ok) {
      if (!ok) return;
      goi('moLaiTuan', { tuan: tuan }).then(function (r) { baoNho('Đã mở lại tuần ' + tuan + '.'); var main = document.getElementById('noi-dung'); xoaHet(main); veBangTuan(main, r); }).catch(xuLyLoi);
    });
  }

  // ================================================================ lịch sử điểm (biểu đồ cột SVG)
  MAN.lichsu = function () {
    taiMan('Điểm các tuần', 'lichSu', {}, function (main, d) {
      var ds = d.tuan.filter(function (t) { return t.diem_tuan !== null || t.mien; });
      if (!ds.length) { main.appendChild(the('Điểm các tuần', 'cot', trangRong('phieu', 'Chưa có tuần nào được chốt.'))); return; }
      var W = Math.max(320, ds.length * 56 + 48), H = 240, trai = 36, duoi = 28, tren = 16;
      var y = function (v) { return tren + (H - tren - duoi) * (1 - Math.min(110, Math.max(0, v)) / 110); };
      var con = [];
      [70, 80, 90].forEach(function (m) {
        con.push(s('line', { x1: trai, x2: W - 8, y1: y(m), y2: y(m), stroke: 'var(--vien)', 'stroke-dasharray': '4 4' }));
        var t = s('text', { x: trai - 6, y: y(m) + 4, 'text-anchor': 'end', 'font-size': 11, fill: 'var(--phu)' }); t.textContent = String(m); con.push(t);
      });
      var mauXl = { TOT: 'var(--tot-c)', KHA: 'var(--kha-c)', DAT: 'var(--dat-c)', CHUA_DAT: 'var(--cd-c)' };
      ds.forEach(function (t, i) {
        var x = trai + 16 + i * 56;
        if (t.mien) { var tm = s('text', { x: x + 16, y: y(10), 'text-anchor': 'middle', 'font-size': 11, fill: 'var(--phu)' }); tm.textContent = 'Miễn'; con.push(tm); }
        else {
          con.push(s('rect', { x: x, y: y(t.diem_tuan), width: 32, height: Math.max(2, y(0) - y(t.diem_tuan)), rx: 6, fill: mauXl[t.xep_loai] || 'var(--chinh)' }));
          var tv = s('text', { x: x + 16, y: y(t.diem_tuan) - 6, 'text-anchor': 'middle', 'font-size': 12, 'font-weight': 700, fill: 'var(--muc)' }); tv.textContent = vs(t.diem_tuan); con.push(tv);
        }
        var tn = s('text', { x: x + 16, y: H - 8, 'text-anchor': 'middle', 'font-size': 12, fill: 'var(--phu)' }); tn.textContent = 'T' + t.so; con.push(tn);
      });
      con.push(s('line', { x1: trai, x2: W - 8, y1: y(0), y2: y(0), stroke: 'var(--phu)' }));
      var bieuDo = s('svg', { viewBox: '0 0 ' + W + ' ' + H, width: W, height: H, role: 'img', 'aria-label': 'Điểm các tuần: ' + ds.map(function (t) { return 'tuần ' + t.so + ' ' + (t.mien ? 'miễn' : vs(t.diem_tuan)); }).join(', ') }, con);
      main.appendChild(the('Điểm thi đua của em', 'cot', [h('p', { lop: 'chu-phu', kieu: { 'margin-bottom': '8px' }, chu: 'Đường gạch ở 70, 80, 90 là mốc Đạt, Khá, Tốt.' }), h('div', { kieu: { 'overflow-x': 'auto' } }, bieuDo)]));
      main.appendChild(the('Từng tuần', 'lich', d.tuan.slice().reverse().map(function (t) {
        return h('button', { lop: 'dong-bam', onclick: function () { diDen('phieu', { tuan: t.so }); } }, h('span', { lop: 'o-bieu-tuong' }, bt('lich')),
          h('div', { lop: 'dong-giua' }, h('div', { lop: 'dong-ten', chu: t.nhan }), h('div', { kieu: { 'margin-top': '4px' } }, t.mien ? h('span', { lop: 'vien-thuoc vt-cg', chu: 'Miễn' }) : vienXepLoai(t.xep_loai))),
          h('span', { lop: 'diem-nho', chu: t.mien ? '' : vs(t.diem_tuan) }), bt('phai'));
      })));
    });
  };

  // ================================================================ sổ tay: trang TƯƠNG LAI
  var CAU_TL = [
    ['sao', 'Mười năm nữa em muốn làm gì, ở đâu?', [['uoc_mo', 'area', '']]],
    ['lap_lanh', 'Nghề em muốn làm và vì sao', [['nghe', 'text', 'Nghề'], ['ly_do', 'area', 'Vì sao em chọn nghề này']]],
    ['sach', 'Nguyện vọng 1', [['nv1_nganh', 'text', 'Ngành'], ['nv1_truong', 'text', 'Trường'], ['nv1_bac', 'bac', 'Bậc học']]],
    ['sach', 'Nguyện vọng 2', [['nv2_nganh', 'text', 'Ngành'], ['nv2_truong', 'text', 'Trường'], ['nv2_bac', 'bac', 'Bậc học']]],
    ['khien', 'Phương án dự phòng', [['du_phong', 'area', '']]],
    ['phieu', 'Môn thi tốt nghiệp và điểm em đặt ra cho từng môn', [['mon_thi_va_diem_muc_tieu', 'area', 'Ví dụ: Toán 7; Văn 6,5; Sinh 7; Địa 7,5']]],
    ['nhom', 'Điều em cần cô hoặc lớp giúp', [['can_giup', 'area', '']]]
  ];
  MAN.sotay = function () {
    taiMan('Sổ tay', 'tuongLai', {}, function (main, d) { veTuongLai(main, d); }, 3, { dem: 'sotay', tuoi: 600 });
  };
  function veTuongLai(main, d) {
    datTieuDe('Sổ tay · TƯƠNG LAI');
    document.body.classList.add('nen-kem');
    var b = d.ban_ghi, o = {};
    main.appendChild(h('div', { lop: 'khung-xanh', kieu: { 'margin-top': '0', 'margin-bottom': '16px' } }, bt('khien'), h('span', { chu: 'Cô chủ nhiệm và người quản trị ứng dụng đọc được phần này. Bạn trong lớp không đọc được.' })));
    main.appendChild(h('div', { lop: 'tieu-de-man' }, h('h2', { chu: 'TƯƠNG LAI của em' }),
      h('span', { lop: 'chu-phu', chu: b.luu_luc ? 'Lần cập nhật gần nhất: đợt ' + b.dot + ', ' + ngayVN(b.luu_luc) : 'Em chưa ghi lần nào' })));
    var luoi = h('div', { lop: 'luoi-2' });
    CAU_TL.forEach(function (c, i) {
      var truong = c[2].map(function (f) {
        var id = 'tl-' + f[0], el;
        if (f[1] === 'area') el = h('textarea', { lop: 'o-nhap', id: id, maxlength: 500, 'aria-label': c[1] });
        else if (f[1] === 'bac') el = h('select', { lop: 'o-nhap', id: id }, [h('option', { value: '', chu: 'Chọn bậc học' })].concat(d.bac.map(function (x) { return h('option', { value: x, chu: x }); })));
        else el = h('input', { lop: 'o-nhap', id: id, maxlength: 500 });
        el.value = b[f[0]] || '';
        o[f[0]] = el;
        return h('div', { lop: 'truong' }, f[2] ? h('label', { lop: 'nhan-o', 'for': id, chu: f[2] }) : null, el);
      });
      luoi.appendChild(h('section', { lop: 'the' }, h('div', { lop: 'the-dau' }, h('span', { lop: 'o-bieu-tuong' }, bt(c[0])), h('h2', { chu: c[1] })), truong));
    });
    main.appendChild(luoi);
    var nut = h('button', { lop: 'nut nut-chinh', onclick: function () {
      var g = {}; Object.keys(o).forEach(function (k) { g[k] = o[k].value; });
      nutCho(nut, true);
      goi('luuTuongLai', g).then(function (d2) { baoNho('Đã lưu sổ tay.'); datDem('sotay', d2); xoaHet(main); veTuongLai(main, d2); }).catch(function (e) { nutCho(nut, false); xuLyLoi(e); });
    } }, bt('tich'), 'Lưu');
    main.appendChild(thanhDay([h('div', { lop: 'tam' }, h('div', { lop: 'nhan', chu: 'Bản cũ vẫn được giữ lại.' })), nut]));
  }
  MAN.tuonglai = function () {
    taiMan('Sổ tay cả lớp', 'tuongLaiCaLop', {}, function (main, d) {
      datTieuDe('Sổ tay cả lớp');
      var coGhi = d.ds.filter(function (x) { return x.luu_luc; }).length;
      main.appendChild(h('div', { lop: 'khung-xanh', kieu: { 'margin-top': '0', 'margin-bottom': '16px' } }, bt('khien'), h('span', { chu: coGhi + '/' + d.ds.length + ' em đã ghi trang TƯƠNG LAI. Phần này chỉ cô chủ nhiệm và người quản trị đọc được.' })));
      var cot = [['ten_goi', 'Tên'], ['to', 'Tổ'], ['uoc_mo', 'Ước mơ'], ['nghe', 'Nghề'], ['nv1', 'Nguyện vọng 1'], ['nv2', 'Nguyện vọng 2'], ['du_phong', 'Dự phòng'], ['mon_thi_va_diem_muc_tieu', 'Môn thi, điểm'], ['can_giup', 'Cần giúp'], ['luu_luc', 'Cập nhật']];
      var gt = function (x, k) {
        if (k === 'nv1' || k === 'nv2') return [x[k + '_nganh'], x[k + '_truong'], x[k + '_bac']].filter(Boolean).join(' · ');
        if (k === 'luu_luc') return x.luu_luc ? ngayVN(x.luu_luc.slice(0, 10)) : '';
        return x[k];
      };
      main.appendChild(h('div', { lop: 'chi-may-tinh' }, h('div', { lop: 'bang-cuon' }, h('table', { lop: 'bang bang-chu' }, h('thead', {}, h('tr', {}, cot.map(function (c) { return h('th', { chu: c[1] }); }))),
        h('tbody', {}, d.ds.map(function (x) { return h('tr', {}, cot.map(function (c) { return h('td', { chu: gt(x, c[0]) || '' }); })); }))))));
      main.appendChild(h('div', { lop: 'chi-dien-thoai' }, d.ds.map(function (x) {
        return h('section', { lop: 'the' }, h('div', { lop: 'the-dau' }, tronTen(x.ten_goi, x.to), h('h2', { chu: x.ten_goi }), h('span', { lop: 'chu-phu', chu: x.luu_luc ? ngayVN(x.luu_luc.slice(0, 10)) : 'chưa ghi' })),
          cot.slice(2, 9).filter(function (c) { return gt(x, c[0]); }).map(function (c) { return h('p', { kieu: { 'font-size': '15px', 'margin-top': '4px' } }, h('b', { chu: c[1] + ': ' }), gt(x, c[0])); }));
      })));
    });
  };

  // ================================================================ phiếu phòng (trưởng phòng)
  MAN.phong = function (ts) {
    taiMan('Phiếu phòng', 'phieuPhong', ts || {}, function (main, d) { vePhieuPhong(main, d); });
  };
  function vePhieuPhong(main, d) {
    datTieuDe('Phiếu phòng ' + d.phong, d.tuan.nhan);
    var taiLai = function () { MAN.phong({ tuan: d.tuan.so, phong: d.phong }); };
    main.appendChild(the(null, null, [h('div', { lop: 'viec-chinh' }, h('b', { kieu: { 'font-size': '18px' }, chu: 'Phòng ' + d.phong + ' · tuần ' + d.tuan.so }),
      d.da_nop ? h('span', { lop: 'vien-thuoc vt-tot' }, bt('tich'), 'Đã gửi ' + ngayVN(d.nop_luc)) : h('span', { lop: 'vien-thuoc vt-cg' }, bt('dong_ho'), 'Chưa gửi'),
      d.ghi_duoc ? h('span', { lop: 'han' }, bt('dong_ho'), 'Hạn ' + d.tuan.con_lai) : h('span', { lop: 'han', chu: 'Đã hết hạn' })),
      h('p', { lop: 'chu-phu', kieu: { 'margin-top': '8px' }, chu: 'Mỗi bạn có các dòng nhóm 7 bạn đã tự khai. Xem trước khi ghi thêm, để không ghi trùng một lần vi phạm.' })]));
    var dd = { tuan: d.tuan, quy_che: d.quy_che, nhom_duoc_ghi: ['7'] };
    var luoi = h('div', { lop: 'luoi-2' });
    d.em.forEach(function (e) {
      var con = [];
      if (e.mien) con.push(h('p', { lop: 'chu-phu', chu: 'Miễn tuần này.' }));
      else if (e.dong.length) e.dong.forEach(function (x) {
        var hang = dongPhieu(x);
        if (x.xoa_duoc && d.ghi_duoc) hang.appendChild(h('button', { lop: 'nut nut-chu nut-tron', 'aria-label': 'Huỷ dòng ' + x.ma_muc, onclick: function () {
          hoi('Huỷ dòng ' + x.ma_muc + '?', 'Dòng này không còn được tính điểm.', 'Huỷ dòng', 'nut-tra').then(function (ok) { if (ok) goi('huyDong', { id: x.id }).then(function () { baoNho('Đã huỷ dòng.'); taiLai(); }).catch(xuLyLoi); });
        } }, bt('nhan')));
        con.push(hang);
      });
      else con.push(h('p', { lop: 'chu-phu', chu: 'Chưa có dòng nhóm 7 nào.' }));
      if (d.ghi_duoc && !e.la_minh && !e.mien) con.push(h('button', { lop: 'nut nut-nho', kieu: { 'margin-top': '8px' }, onclick: function () { ghiThemLoi({ hoc_sinh: { ma: e.ma, ten_goi: e.ten_goi } }, dd, taiLai); } }, bt('cong'), 'Ghi lỗi'));
      luoi.appendChild(h('section', { lop: 'the' }, h('div', { lop: 'the-dau' }, tronTen(e.ten_goi, e.to), h('h2', { chu: e.ten_goi + (e.la_minh ? ' (em)' : '') })), con));
    });
    main.appendChild(h('h2', { kieu: { 'font-size': '18px', margin: '20px 0 12px' }, chu: 'Các bạn trong phòng' }));
    main.appendChild(luoi);
    var hop = h('input', { type: 'checkbox' }); hop.checked = d.khong_bi_nhac_tp === true;
    var oBao = h('textarea', { lop: 'o-nhap', id: 'viec-bao', maxlength: 300, placeholder: 'Ví dụ: vòi nước nhà tắm rỉ, bạn A ốm từ tối thứ Năm' }); oBao.value = d.viec_can_bao || '';
    var nutGui = h('button', { lop: 'nut nut-chinh', disabled: !d.ghi_duoc, onclick: function () {
      nutCho(nutGui, true);
      goi('guiPhieuPhong', { tuan: d.tuan.so, phong: d.phong, khong_bi_nhac: hop.checked, viec_can_bao: oBao.value }).then(function (d2) {
        baoNho('Đã gửi phiếu phòng.'); xoaHet(main); vePhieuPhong(main, d2);
      }).catch(function (e) { nutCho(nutGui, false); xuLyLoi(e); });
    } }, bt('gui'), d.da_nop ? 'Gửi lại phiếu phòng' : 'Gửi phiếu phòng');
    main.appendChild(the('Gửi cô', 'giuong', [
      h('label', { lop: 'cong-tac', kieu: { 'font-size': '16px' } }, hop, h('span', { lop: 'ray-ct' }), 'Cả tuần phòng không bị quản lý nội trú nhắc'),
      h('p', { lop: 'chu-phu', kieu: { margin: '4px 0 12px' }, chu: 'Bật thì mỗi bạn trong phòng được đề nghị cộng DC3 (2 điểm). Cô đối chiếu báo cáo của quản lý nội trú trước khi chốt.' }),
      h('div', { lop: 'truong' }, h('label', { lop: 'nhan-o', 'for': 'viec-bao', chu: 'Việc phòng cần báo cô' }), oBao),
      h('div', { lop: 'hang-nut' }, nutGui)]));
  }

  // ================================================================ xác nhận điểm cộng (cán bộ)
  MAN.diemcong = function (ts) {
    taiMan('Xác nhận điểm cộng', 'dsDiemCong', ts || {}, function (main, d) { veDiemCong(main, d); });
  };
  function veDiemCong(main, d) {
    datTieuDe('Xác nhận điểm cộng', d.tuan.nhan);
    var taiLai = function () { MAN.diemcong({ tuan: d.tuan.so }); };
    var cho_ = d.dong.filter(function (x) { return x.trang_thai === 'CHO_XAC_NHAN'; });
    main.appendChild(the(null, null, [h('div', { lop: 'viec-chinh' }, h('b', { kieu: { 'font-size': '18px' }, chu: cho_.length + ' đề nghị đang chờ' }),
      h('span', { lop: 'han' }, bt('dong_ho'), d.ghi_duoc ? 'Hạn ' + d.tuan.con_lai : 'Đã hết hạn')),
      h('p', { lop: 'chu-phu', kieu: { 'margin-top': '6px' }, chu: 'Em xác nhận các mục: ' + d.muc.map(function (m) { return m.ma; }).join(', ') + '. Không xác nhận cho chính mình.' }),
      d.ghi_duoc ? h('div', { lop: 'hang-nut' }, h('button', { lop: 'nut', onclick: function () { ghiCongBanKhac(d, taiLai); } }, bt('them_nguoi'), 'Ghi cho bạn khác')) : null]));
    main.appendChild(the('Đề nghị tuần ' + d.tuan.so, 'sao', d.dong.length ? d.dong.map(function (x) {
      var hang = h('div', { lop: 'dong-phieu' }, tronTen(x.ten_goi, x.to), h('div', { lop: 'giua' }, h('b', { chu: x.ten_goi }), h('span', { chu: ' · ' + x.ma_muc }),
        h('small', { chu: (x.ghi_chu || x.noi_dung) + ' · ' + (x.nguon === 'HS' ? 'đề nghị trong phiếu' : x.ten_nguon) })));
      if (x.trang_thai === 'CHO_XAC_NHAN' && d.ghi_duoc) {
        hang.appendChild(h('button', { lop: 'nut nut-nho', 'aria-label': 'Không xác nhận', onclick: mot(function (e) { var hg = e.currentTarget.parentNode; return xacNhanCong(x.id, false, function () { daXuLyCong(hg, false); }); }) }, bt('nhan')));
        hang.appendChild(h('button', { lop: 'nut nut-nho nut-chinh', 'aria-label': 'Xác nhận', onclick: mot(function (e) { var hg = e.currentTarget.parentNode; return xacNhanCong(x.id, true, function () { daXuLyCong(hg, true); }); }) }, bt('tich')));
      } else hang.appendChild(x.trang_thai === 'HIEU_LUC' ? h('span', { lop: 'vien-thuoc vt-tot' }, bt('tich'), 'Đã cộng') : h('span', { lop: 'vien-thuoc vt-cg', chu: 'Không xác nhận' }));
      return hang;
    }) : trangRong('cup', 'Tuần này chưa có đề nghị nào.')));
  }
  function ghiCongBanKhac(d, xong) {
    var ban = h('select', { lop: 'o-nhap', id: 'gc-ban' }, d.ban.map(function (b) { return h('option', { value: b.ma, chu: b.ten_goi + ' · tổ ' + b.to + ' · ' + b.phong }); }));
    var muc = h('select', { lop: 'o-nhap', id: 'gc-muc' }, d.muc.map(function (m) { return h('option', { value: m.ma, chu: m.ma + ' · ' + m.noi_dung.slice(0, 60) + ' (+' + vs(m.muc) + ')' }); }));
    var ghiChu = h('input', { lop: 'o-nhap', id: 'gc-ghi-chu', maxlength: 200, placeholder: 'Việc bạn đã làm' });
    var t = moTam('Ghi điểm cộng cho bạn', [h('div', { lop: 'truong' }, h('label', { lop: 'nhan-o', 'for': 'gc-ban', chu: 'Bạn' }), ban),
      h('div', { lop: 'truong' }, h('label', { lop: 'nhan-o', 'for': 'gc-muc', chu: 'Mục' }), muc),
      h('div', { lop: 'truong' }, h('label', { lop: 'nhan-o', 'for': 'gc-ghi-chu', chu: 'Ghi chú' }), ghiChu)], [
      h('button', { lop: 'nut', chu: 'Thôi', onclick: function () { t.dong(); } }),
      h('button', { lop: 'nut nut-chinh', chu: 'Ghi', onclick: mot(function () {
        return goi('ghiCong', { tuan: d.tuan.so, ma: ban.value, ma_muc: muc.value, ghi_chu: ghiChu.value }).then(function () { t.dong(); baoNho('Đã ghi.'); xong(); });
      }) })]);
  }

  // ================================================================ thông báo
  MAN.thongbao = function () {
    taiMan('Thông báo', 'dsThongBao', {}, function (main, d) { veThongBao(main, d); }, 3, { dem: 'thongbao', lamMoi: true, tuoi: 120 });
  };
  function veThongBao(main, d) {
    datTieuDe('Thông báo');
    if (d.la_qt) main.appendChild(h('div', { lop: 'hang-nut', kieu: { 'margin-top': '0', 'margin-bottom': '16px' } }, h('button', { lop: 'nut nut-chinh', onclick: function () { soanThongBao(null, d.loai); } }, bt('cong'), 'Đăng thông báo')));
    if (!d.ds.length) { main.appendChild(the(null, null, trangRong('loa', 'Chưa có thông báo nào.'))); return; }
    var ds = d.ds.slice().sort(function (a, b) { return (b.ghim ? 1 : 0) - (a.ghim ? 1 : 0); });
    var vungTb = h('div');
    var locLoai = 'tat_ca', nutLoai = [];
    var coLoai = d.loai.filter(function (l) { return ds.some(function (t) { return t.loai === l; }); });
    if (coLoai.length > 1) main.appendChild(h('div', { lop: 'loc', role: 'group', 'aria-label': 'Lọc theo loại' }, ['tat_ca'].concat(coLoai).map(function (l) {
      var b = h('button', { 'aria-pressed': l === locLoai ? 'true' : 'false', chu: l === 'tat_ca' ? 'Tất cả' : l, onclick: function () {
        locLoai = l; nutLoai.forEach(function (x) { x.setAttribute('aria-pressed', x === b ? 'true' : 'false'); }); veTb();
      } }); nutLoai.push(b); return b;
    })));
    main.appendChild(vungTb);
    function veTb() { xoaHet(vungTb); ds.filter(function (t) { return locLoai === 'tat_ca' || t.loai === locLoai; }).forEach(veMotTb); }
    function veMotTb(t) {
      var the_ = h('article', { lop: 'the the-tb', 'data-mo': '0', tabindex: '0', role: 'button', 'aria-expanded': 'false' },
        t.ghim ? h('span', { lop: 'ghim', title: 'Đã ghim' }, bt('ghim')) : null,
        h('div', { kieu: { display: 'flex', gap: '8px', 'align-items': 'center', 'flex-wrap': 'wrap' } }, h('span', { lop: 'vien-thuoc vt-chot', chu: t.loai }), h('span', { lop: 'chu-phu', chu: ngayVN(t.ngay) }), t.an ? h('span', { lop: 'vien-thuoc vt-cg' }, bt('mat_an'), 'Đang ẩn') : null),
        h('h3', { chu: t.tieu_de }), t.noi_dung ? h('p', { lop: 'noi-dung', chu: t.noi_dung }) : null,
        t.link_tep ? h('a', { lop: 'lien-ket-tep', href: t.link_tep, target: '_blank', rel: 'noopener noreferrer', onclick: function (e) { e.stopPropagation(); } }, bt('tep'), t.ten_tep || 'Mở tệp đính kèm') : null,
        d.la_qt ? h('div', { lop: 'hang-nut' }, h('button', { lop: 'nut nut-nho', onclick: function (e) { e.stopPropagation(); soanThongBao(t, d.loai); } }, bt('but'), 'Sửa'),
          h('button', { lop: 'nut nut-nho', onclick: function (e) { e.stopPropagation(); goi('anThongBao', { id: t.id, an: !t.an }).then(function (d2) { var m = document.getElementById('noi-dung'); xoaHet(m); veThongBao(m, d2); }).catch(xuLyLoi); } }, bt(t.an ? 'mat' : 'mat_an'), t.an ? 'Hiện lại' : 'Ẩn')) : null);
      function doi() { var mo = the_.getAttribute('data-mo') === '1'; the_.setAttribute('data-mo', mo ? '0' : '1'); the_.setAttribute('aria-expanded', mo ? 'false' : 'true'); }
      the_.addEventListener('click', doi);
      the_.addEventListener('keydown', function (e) { if (e.key === 'Enter' && e.target === the_) doi(); });
      vungTb.appendChild(the_);
    }
    veTb();
  }
  /** Nút "Chọn tệp từ máy": chỉ hiện khi cấu hình cho_tai_tep = TRUE. Đọc tệp thành base64, máy chủ kiểm kiểu, dung lượng rồi ghi vào thư mục tệp. */
  function oChonTep(khiXong) {
    if (!(S.nd && S.nd.cong_cu && S.nd.cong_cu.tai_tep)) return null;
    var tt = h('span', { lop: 'chu-phu', 'aria-live': 'polite' });
    var o = h('input', { type: 'file', accept: '.pdf,.doc,.docx,.jpg,.jpeg,.png', lop: 'an' });
    var nut = h('button', { lop: 'nut nut-nho', type: 'button', onclick: function () { o.click(); } }, bt('tep'), 'Chọn tệp từ máy');
    o.addEventListener('change', function () {
      var f = o.files && o.files[0]; if (!f) return;
      if (f.size > 5 * 1024 * 1024) { tt.textContent = 'Tệp lớn hơn 5 MB.'; return; }
      tt.textContent = 'Đang tải lên…'; nutCho(nut, true);
      var doc = new FileReader();
      doc.onload = function () {
        var b64 = String(doc.result).replace(/^data:[^,]*,/, '');
        goi('taiTep', { ten: f.name, kieu: f.type, du_lieu: b64 }).then(function (r) {
          nutCho(nut, false); tt.textContent = r.mo_quyen ? 'Đã tải lên.' : 'Đã tải lên, nhưng chưa mở được quyền xem: mở tệp trên Drive, chia sẻ "ai có liên kết".';
          khiXong(r.link, r.ten_tep);
        }).catch(function (e) { nutCho(nut, false); tt.textContent = ''; xuLyLoi(e); });
      };
      doc.readAsDataURL(f);
    });
    return h('div', { kieu: { display: 'flex', gap: '12px', 'align-items': 'center', 'flex-wrap': 'wrap', 'margin-top': '8px' } }, nut, o, tt);
  }
  function soanThongBao(t, dsLoai) {
    var loai = h('select', { lop: 'o-nhap', id: 'tb-loai' }, dsLoai.map(function (l) { var o = h('option', { value: l, chu: l }); if (t && t.loai === l) o.selected = true; return o; }));
    var tieuDe = h('input', { lop: 'o-nhap', id: 'tb-tieu-de', maxlength: 150 }); tieuDe.value = t ? t.tieu_de : '';
    var noiDung = h('textarea', { lop: 'o-nhap', id: 'tb-noi-dung', maxlength: 1000 }); noiDung.value = t ? t.noi_dung : '';
    var link = h('input', { lop: 'o-nhap', id: 'tb-link', maxlength: 500, placeholder: 'https://drive.google.com/…' }); link.value = t ? t.link_tep : '';
    var tenTep = h('input', { lop: 'o-nhap', id: 'tb-ten-tep', maxlength: 120 }); tenTep.value = t ? t.ten_tep : '';
    var ghim = h('input', { type: 'checkbox' }); ghim.checked = !!(t && t.ghim);
    var tam = moTam(t ? 'Sửa thông báo' : 'Đăng thông báo', [
      h('div', { lop: 'truong' }, h('label', { lop: 'nhan-o', 'for': 'tb-loai', chu: 'Loại' }), loai),
      h('div', { lop: 'truong' }, h('label', { lop: 'nhan-o', 'for': 'tb-tieu-de', chu: 'Tiêu đề' }), tieuDe),
      h('div', { lop: 'truong' }, h('label', { lop: 'nhan-o', 'for': 'tb-noi-dung', chu: 'Nội dung' }), noiDung),
      h('div', { lop: 'truong' }, h('label', { lop: 'nhan-o', 'for': 'tb-link', chu: 'Đường liên kết tệp (tải tệp vào thư mục Drive rồi dán liên kết)' }), link,
        oChonTep(function (lk, ten) { link.value = lk; if (!tenTep.value) tenTep.value = ten; })),
      h('div', { lop: 'truong' }, h('label', { lop: 'nhan-o', 'for': 'tb-ten-tep', chu: 'Tên tệp hiện cho học sinh' }), tenTep),
      h('label', { lop: 'cong-tac', kieu: { 'margin-top': '12px' } }, ghim, h('span', { lop: 'ray-ct' }), 'Ghim lên đầu và lên bảng chiếu')], [
      h('button', { lop: 'nut', chu: 'Thôi', onclick: function () { tam.dong(); } }),
      h('button', { lop: 'nut nut-chinh', onclick: mot(function () {
        return goi('luuThongBao', { id: t ? t.id : '', loai: loai.value, tieu_de: tieuDe.value, noi_dung: noiDung.value, link_tep: link.value.trim(), ten_tep: tenTep.value, ghim: ghim.checked })
          .then(function (d2) { tam.dong(); baoNho('Đã lưu thông báo.'); datDem('thongbao', d2); var m = document.getElementById('noi-dung'); xoaHet(m); veThongBao(m, d2); });
      }) }, bt('gui'), t ? 'Lưu' : 'Đăng')]);
  }

  // ================================================================ lớp mình
  MAN.lop = function () {
    taiMan('Lớp mình', 'lopMinh', {}, function (main, d) { veLop(main, d); }, 3, { dem: 'lop', lamMoi: true, tuoi: 300 });
  };
  function veLop(main, d) {
    datTieuDe('Lớp mình');
    var anhLop = d.tep.ANH_LOP[0];
    if (anhLop && anhLop.id_anh) main.appendChild(anhTep(anhLop, 'Ảnh lớp'));
    main.appendChild(h('div', { lop: 'ba-o-so', kieu: { 'margin-bottom': '16px' } }, h('div', {}, h('b', { chu: String(d.si_so) }), h('span', { chu: 'Sĩ số' })),
      h('div', {}, h('b', { chu: String(d.nu) }), h('span', { chu: 'Nữ' })), h('div', {}, h('b', { chu: String(d.nam) }), h('span', { chu: 'Nam' }))));
    main.appendChild(h('h2', { kieu: { 'font-size': '18px', margin: '8px 0 12px' }, chu: 'Bốn tổ' }));
    main.appendChild(h('div', { lop: 'luoi-2' }, d.to.map(function (t) {
      return h('section', { lop: 'the the-to vien-' + t.to }, h('div', { lop: 'the-dau' }, h('span', { lop: 'tron-ten to-' + t.to, chu: t.to }), h('h2', { chu: 'Tổ ' + t.to }), h('span', { lop: 'chu-phu', chu: t.ds.length + ' em' })),
        h('div', { lop: 'cac-chip' }, t.ds.map(function (x) { return h('span', { lop: 'chip' }, x.ten, x.la_tt ? h('span', { lop: 'nhan-cb', chu: 'Tổ trưởng' }) : null); })));
    })));
    main.appendChild(h('h2', { kieu: { 'font-size': '18px', margin: '24px 0 12px' }, chu: 'Sáu phòng ở ký túc xá' }));
    main.appendChild(h('div', { lop: 'luoi-2' }, d.phong.map(function (p) {
      return h('section', { lop: 'the' }, h('div', { lop: 'the-dau' }, h('span', { lop: 'o-bieu-tuong' }, bt('giuong')), h('h2', { chu: 'Phòng ' + p.phong }), h('span', { lop: 'chu-phu', chu: p.ds.length + ' em' })),
        h('div', { lop: 'cac-chip' }, p.ds.map(function (x) { return h('span', { lop: 'chip' }, h('span', { lop: 'cham-to to-' + x.to }), x.ten, x.la_tp ? h('span', { lop: 'nhan-cb', chu: 'Trưởng phòng' }) : null); })));
    })));
    main.appendChild(h('h2', { kieu: { 'font-size': '18px', margin: '24px 0 12px' }, chu: 'Ban cán bộ' }));
    main.appendChild(h('div', { lop: 'luoi-2' }, d.can_bo.map(function (c) {
      return h('section', { lop: 'the' }, h('div', { lop: 'the-dau' }, tronTen(c.ten, c.to), h('div', { lop: 'dong-giua' }, h('div', { lop: 'nhan', chu: c.ten_chuc_vu }), h('h2', { chu: c.ten || 'Chưa có' }))),
        c.viec_tuan ? h('p', { kieu: { 'font-size': '15px' }, chu: c.viec_tuan }) : null,
        c.hoat_dong_rieng ? h('p', { lop: 'chu-phu', kieu: { 'margin-top': '6px' } }, h('b', { chu: 'Hoạt động riêng: ' }), c.hoat_dong_rieng) : null);
    })));
    main.appendChild(h('h2', { kieu: { 'font-size': '18px', margin: '24px 0 12px' }, chu: 'Thời khoá biểu và sơ đồ lớp' }));
    var cot = h('div', { lop: 'luoi-2' });
    [['TKB', 'Thời khoá biểu', 'lich'], ['SO_DO_LOP', 'Sơ đồ lớp', 'nhom'], ['NOI_QUY_KTX', 'Nội quy ký túc xá', 'giuong']].forEach(function (k) {
      var ds = d.tep[k[0]];
      var con = [];
      if (ds.length) {
        if (ds[0].id_anh) con.push(anhTep(ds[0], k[1]));
        con.push(h('a', { lop: 'lien-ket-tep', href: ds[0].link, target: '_blank', rel: 'noopener noreferrer' }, bt('tep'), 'Mở ' + k[1].toLowerCase()));
        if (ds[0].ap_dung_tu) con.push(h('p', { lop: 'chu-phu', chu: 'Áp dụng từ ' + ngayVN(ds[0].ap_dung_tu) + (ds[0].ghi_chu ? ' · ' + ds[0].ghi_chu : '') }));
        if (ds[1]) con.push(h('a', { lop: 'lien-ket-tep', href: ds[1].link, target: '_blank', rel: 'noopener noreferrer' }, bt('tai_lai'), 'Bản trước (từ ' + ngayVN(ds[1].ap_dung_tu) + ')'));
      } else con.push(h('p', { lop: 'chu-phu', chu: 'Cô chưa đăng.' }));
      if (d.la_qt) con.push(h('button', { lop: 'nut nut-nho', kieu: { 'margin-top': '8px' }, onclick: function () { capNhatTep(k[0], k[1]); } }, bt('lien_ket'), 'Dán liên kết mới'));
      if (ds.length || d.la_qt) cot.appendChild(the(k[1], k[2], con));
    });
    main.appendChild(cot);
  }
  function anhTep(t, ten) {
    var src = 'https://drive.google.com/thumbnail?id=' + encodeURIComponent(t.id_anh) + '&sz=w1600';
    var img = h('img', { lop: 'anh-lop', alt: ten, loading: 'lazy', src: src });
    var hop = h('a', { href: t.link, target: '_blank', rel: 'noopener noreferrer', 'aria-label': 'Phóng to ' + ten, kieu: { display: 'block', 'margin-bottom': '8px' } }, img);
    img.addEventListener('error', function () { hop.remove(); });
    return hop;
  }
  function capNhatTep(khoa, ten) {
    var link = h('input', { lop: 'o-nhap', id: 'tep-link', maxlength: 500, placeholder: 'https://drive.google.com/file/d/…/view' });
    var ngay = h('input', { lop: 'o-nhap', id: 'tep-ngay', type: 'date' });
    var ghiChu = h('input', { lop: 'o-nhap', id: 'tep-ghi-chu', maxlength: 200 });
    var t = moTam('Cập nhật ' + ten.toLowerCase(), [
      h('p', { lop: 'chu-phu', kieu: { 'margin-bottom': '12px' }, chu: 'Tải tệp vào thư mục "Ngôi nhà 12.7 – tệp" trên Drive, mở chia sẻ "ai có đường liên kết đều xem được", rồi dán liên kết vào đây. Bản cũ vẫn giữ để xem lại.' }),
      h('div', { lop: 'truong' }, h('label', { lop: 'nhan-o', 'for': 'tep-link', chu: 'Đường liên kết' }), link, oChonTep(function (lk) { link.value = lk; })),
      h('div', { lop: 'truong' }, h('label', { lop: 'nhan-o', 'for': 'tep-ngay', chu: 'Áp dụng từ ngày' }), ngay),
      h('div', { lop: 'truong' }, h('label', { lop: 'nhan-o', 'for': 'tep-ghi-chu', chu: 'Ghi chú' }), ghiChu)], [
      h('button', { lop: 'nut', chu: 'Thôi', onclick: function () { t.dong(); } }),
      h('button', { lop: 'nut nut-chinh', chu: 'Lưu', onclick: mot(function () {
        return goi('capNhatTepLop', { khoa: khoa, link_tep: link.value.trim(), ap_dung_tu: ngay.value, ghi_chu: ghiChu.value }).then(function (d2) { t.dong(); baoNho('Đã cập nhật.'); datDem('lop', d2); var m = document.getElementById('noi-dung'); xoaHet(m); veLop(m, d2); });
      }) })]);
  }

  // ================================================================ quy chế
  var BT_NHOM = { '1': 'dong_ho', '2': 'sach', '3': 'so', '4': 'nhom', '5': 'khien', '6': 'nha', '7': 'giuong', '8': 'canh_bao', 'DC': 'sao' };
  MAN.quyche = function () {
    taiMan('Quy chế', 'quyChe', {}, function (main, d) {
      var oTim = h('input', { lop: 'o-nhap', type: 'search', placeholder: 'Tìm theo mã hoặc nội dung, ví dụ: điện thoại', 'aria-label': 'Tìm trong quy chế' });
      main.appendChild(h('div', { lop: 'tim' }, h('div', { lop: 'tim-o' }, bt('tim'), oTim)));
      var vung = h('div');
      main.appendChild(vung);
      var nhom = {};
      d.ds.forEach(function (m) { (nhom[m.nhom] = nhom[m.nhom] || []).push(m); });
      var thuTu = Object.keys(nhom).sort(function (a, b) { return (a === 'DC' ? 99 : Number(a)) - (b === 'DC' ? 99 : Number(b)); });
      function ve() {
        xoaHet(vung);
        var tu = boDauKhach(oTim.value.trim());
        var co = 0;
        thuTu.forEach(function (k) {
          var ds = nhom[k].filter(function (m) { return !tu || boDauKhach(m.ma + ' ' + m.noi_dung).indexOf(tu) >= 0; });
          if (!ds.length) return;
          co += ds.length;
          var mo = !!tu;
          var than = h('div', { lop: 'nhom-than' + (mo ? '' : ' an') });
          var khoi = h('div', { lop: 'nhom', 'data-mo': mo ? '1' : '0' });
          var dau = h('button', { lop: 'nhom-dau', 'aria-expanded': mo ? 'true' : 'false', onclick: function () {
            var m2 = khoi.getAttribute('data-mo') !== '1'; khoi.setAttribute('data-mo', m2 ? '1' : '0'); than.classList.toggle('an', !m2); dau.setAttribute('aria-expanded', m2 ? 'true' : 'false');
          } }, h('span', { lop: 'o-bieu-tuong', kieu: { width: '36px', height: '36px' } }, bt(BT_NHOM[k] || 'sach')), h('span', { lop: 'dong-giua', chu: (k === 'DC' ? '' : 'Nhóm ' + k + '. ') + (ds[0].ten_nhom || d.ten_nhom[k]) }), h('span', { lop: 'chu-phu', chu: String(ds.length) }), bt('xuong', 'mui'));
          ds.forEach(function (m) {
            var muc = m.loai === 'NT' ? 'Tuần đó Chưa đạt' : (m.loai === 'CONG' ? '+' : '−') + vs(m.muc) + (m.don_vi ? '/' + m.don_vi : '');
            than.appendChild(h('div', { lop: 'dong-qc' }, h('span', { lop: 'ma-muc', chu: m.ma }), h('span', { lop: 'nd', chu: m.noi_dung }), h('span', { lop: 'muc ' + (m.loai === 'CONG' ? 'cong' : m.loai === 'NT' ? 'nt' : 'tru'), chu: muc })));
          });
          khoi.appendChild(dau); khoi.appendChild(than);
          vung.appendChild(khoi);
        });
        if (!co) vung.appendChild(trangRong('phieu', 'Không có mục nào khớp.'));
      }
      oTim.addEventListener('input', ve);
      ve();
    }, 3, { dem: 'quyche', lamMoi: true, tuoi: 600 });
  };
  function boDauKhach(t) { return String(t).normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/đ/g, 'd').replace(/Đ/g, 'D').toLowerCase(); }

  // ================================================================ thêm
  MAN.them = function () {
    veMan('Thêm', function (main) {
      var ds = dsThem().map(function (m) {
        return h('button', { lop: 'muc-them', onclick: function () { diDen(m[0]); } }, h('span', { lop: 'o-bieu-tuong' }, bt(m[3])),
          h('span', { lop: 'giua' }, h('b', { chu: m[1] }), m[2] ? h('span', { chu: m[2] }) : null), bt('phai', 'mui'));
      });
      ds.push(h('button', { lop: 'muc-them', onclick: dangXuat }, h('span', { lop: 'o-bieu-tuong' }, bt('ra')), h('span', { lop: 'giua' }, h('b', { chu: 'Đăng xuất' }))));
      var nd = S.nd;
      main.appendChild(h('section', { lop: 'the', kieu: { display: 'flex', 'align-items': 'center', gap: '12px', 'margin-bottom': '16px' } },
        nd.la_qt ? h('span', { lop: 'o-bieu-tuong' }, bt('khien')) : tronTen(nd.ten_hien, nd.to),
        h('div', { lop: 'dong-giua' }, h('b', { lop: 'cat-dong', kieu: { display: 'block' }, chu: nd.ten_hien }),
          h('span', { lop: 'chu-phu', chu: nd.la_qt ? 'Quản trị · ' + nd.ma : nd.ma + ' · Tổ ' + nd.to + ' · Phòng ' + nd.phong }))));
      if (nd.vai_tro && nd.vai_tro.length) main.appendChild(h('div', { lop: 'cac-chip', kieu: { 'margin-bottom': '16px' } }, nd.vai_tro.map(function (v) { return h('span', { lop: 'chip' }, bt('sao'), v.ten_chuc_vu); })));
      main.appendChild(the(null, null, ds));
    });
  };

  // ================================================================ tài khoản và PIN
  MAN.taikhoan = function () {
    taiMan('Tài khoản và PIN', 'dsTaiKhoan', {}, function (main, d) {
      main.appendChild(h('div', { lop: 'khung-xanh', kieu: { 'margin-top': '0', 'margin-bottom': '16px' } }, bt('khien'), h('span', { chu: 'Ứng dụng đang chạy bằng tài khoản: ' + (d.tai_khoan_chay || 'chưa rõ') })));
      var hs = d.ds.filter(function (x) { return x.loai === 'HS'; });
      var chuaPin = hs.filter(function (x) { return !x.co_pin; }).length;
      main.appendChild(the('Cấp PIN', 'chia_khoa', [
        h('p', { chu: chuaPin ? chuaPin + ' em chưa có PIN.' : 'Cả lớp đã có PIN.' }),
        h('p', { lop: 'chu-phu', kieu: { 'margin-top': '4px' }, chu: 'PIN hiện một lần ở trang in. Cấp lại thì PIN cũ hết hiệu lực và em phải đổi PIN khi vào.' }),
        h('div', { lop: 'hang-nut' }, h('button', { lop: 'nut nut-chinh', onclick: function () {
          hoi('Cấp PIN cả lớp?', 'PIN cũ của cả lớp hết hiệu lực. Sau đó in phiếu PIN, cắt rời, phát tận tay từng em.', 'Cấp PIN').then(function (ok) { if (ok) capPin({ tat_ca: true }); });
        } }, bt('chia_khoa'), 'Cấp PIN cả lớp'))]));
      main.appendChild(the('Tài khoản', 'nhom', d.ds.map(function (x) {
        var nhan = [];
        if (!x.co_pin) nhan.push(h('span', { lop: 'vien-thuoc vt-cg', chu: 'Chưa có PIN' }));
        else if (x.phai_doi_pin) nhan.push(h('span', { lop: 'vien-thuoc vt-kha', chu: 'Chưa đổi PIN' }));
        if (x.dang_khoa) nhan.push(h('span', { lop: 'vien-thuoc vt-cd' }, bt('khoa'), 'Đang khoá'));
        if (x.so_lan_bi_khoa) nhan.push(h('span', { lop: 'vien-thuoc vt-dat', chu: 'Bị khoá ' + x.so_lan_bi_khoa + ' lần' }));
        return h('div', { lop: 'dong-ds' }, x.loai === 'HS' ? tronTen(x.ten, x.to) : h('span', { lop: 'o-bieu-tuong' }, bt('khien')),
          h('div', { lop: 'dong-giua' }, h('div', { lop: 'dong-ten cat-dong', chu: x.ten + ' · ' + x.ma }), h('div', { kieu: { display: 'flex', gap: '6px', 'flex-wrap': 'wrap', 'margin-top': '2px' } }, nhan.length ? nhan : h('span', { lop: 'chu-phu', chu: x.dang_nhap_cuoi ? 'Vào lần cuối ' + ngayVN(x.dang_nhap_cuoi) : 'Chưa vào lần nào' }))),
          x.dang_khoa ? h('button', { lop: 'nut nut-nho', onclick: function () { goi('moKhoa', { ma: x.ma }).then(function () { baoNho('Đã mở khoá.'); MAN.taikhoan(); }).catch(xuLyLoi); } }, 'Mở khoá') : null,
          x.loai === 'HS' ? h('button', { lop: 'nut nut-nho', onclick: function () {
            hoi('Cấp lại PIN cho ' + x.ten + '?', 'PIN cũ của em hết hiệu lực.', 'Cấp lại').then(function (ok) { if (ok) capPin({ ma: [x.ma] }); });
          } }, 'Cấp lại') : null);
      })));
    });
  };
  function capPin(thamSo) {
    goi('capPin', thamSo).then(function (d) { S.pinVuaCap = d; MAN.inpin(); }).catch(xuLyLoi);
  }
  MAN.inpin = function () {
    var d = S.pinVuaCap;
    if (!d) { diDen('taikhoan'); return; }
    veMan('Phiếu PIN', function (main) {
      main.appendChild(h('div', { lop: 'khong-in' }, h('div', { lop: 'khung-vang', kieu: { 'margin-top': '0' } }, bt('canh_bao'), h('span', { chu: 'PIN chỉ hiện một lần. In ngay, cắt rời, phát tận tay. Bấm "Xong" thì trang này xoá PIN khỏi máy.' })),
        h('div', { lop: 'hang-nut', kieu: { 'margin-bottom': '16px' } }, h('button', { lop: 'nut nut-chinh', onclick: function () { window.print(); } }, bt('may_in'), 'In ' + d.ds.length + ' phiếu'),
          h('button', { lop: 'nut', onclick: function () { S.pinVuaCap = null; diDen('taikhoan'); } }, bt('tich'), 'Xong'))));
      main.appendChild(h('div', { lop: 'trang-in' }, d.ds.map(function (x) {
        return h('div', { lop: 'o-pin-in' }, h('div', { lop: 'dau' }, bieuTrung(), h('div', {}, h('b', { chu: d.ten_ung_dung || 'Ngôi nhà 12.7' }), h('div', { lop: 'chu-phu', chu: 'Lớp 12.7 · Tổ ' + x.to }))),
          h('div', { lop: 'ten-in', chu: x.ten_goi }), h('div', { chu: 'Mã số: ' + x.ma }), h('div', { lop: 'nhan', chu: 'PIN' }), h('div', { lop: 'so-pin', chu: x.pin }),
          d.link_ung_dung ? h('div', { lop: 'link', chu: d.link_ung_dung }) : null, h('b', { kieu: { 'font-size': '13px' }, chu: 'Đổi PIN ngay lần đầu vào. Không đưa PIN cho ai.' }));
      })));
    });
  };

  // ================================================================ bảng chiếu
  MAN.chieu = function () {
    var khung = h('div', { lop: 'chieu', role: 'region', 'aria-label': 'Bảng chiếu' });
    document.body.appendChild(khung);
    khung.appendChild(h('div', { lop: 'rong' }, 'Đang tải…'));
    goi('bangChieu').then(function (d) { veChieu(khung, d); }).catch(function (e) { khung.remove(); xuLyLoi(e); });
  };
  function veChieu(khung, d) {
    xoaHet(khung);
    var toi = false;
    try { toi = sessionStorage.getItem('nn127_chieu_toi') === '1'; } catch (e) { toi = false; }
    if (window.__DEMO__ && window.__DEMO__.toi) toi = true;
    khung.classList.toggle('toi', toi);
    var vd = d.vinh_danh || {};
    var t = vd.tuan;
    khung.appendChild(h('div', { lop: 'chieu-dau' }, bieuTrung(null, true), h('span', { lop: 'ten', chu: 'NGÔI NHÀ 12.7' }), h('span', { lop: 'tuan', chu: t ? t.nhan + '/' + (new Date().getFullYear()) : 'Chưa có tuần nào chốt' })));
    khung.appendChild(daiHoaVan('chieu-dai'));
    var than = h('div', { lop: 'chieu-than' });
    khung.appendChild(than);
    var trang = [];
    // trang 1: học sinh xuất sắc
    var t1 = h('section', { lop: 'trang-chieu' }, h('h2', {}, bt('huy'), 'Học sinh xuất sắc tuần'));
    var xs = t ? t.ds.filter(function (x) { return x.danh_hieu === 'HS_XS'; }) : [];
    if (xs.length) {
      var bac = { 1: [], 2: [], 3: [] };
      xs.forEach(function (x) { var hg = x.hang <= 1 ? 1 : x.hang === 2 ? 2 : 3; bac[hg].push(x); });
      var veBac = function (n) {
        return h('div', { lop: 'bac b' + n }, h('div', { lop: 'nguoi' }, bac[n].map(function (x) {
          return h('div', { lop: 'mot' }, tronTen(x.ten, x.to), h('div', { lop: 'ten', chu: x.ten }), h('div', { lop: 'phu', chu: 'Tổ ' + x.to }));
        })), bac[n].length ? huyChuong(n) : null, h('div', { lop: 'khoi', chu: String(n) }));
      };
      t1.appendChild(h('div', { lop: 'buc' }, veBac(2), veBac(1), veBac(3)));
      t1.querySelectorAll('.huy-chuong').forEach(function (x) { x.setAttribute('class', 'huy'); });
    } else t1.appendChild(h('div', { lop: 'rong', chu: 'Tuần này chưa có em đủ điều kiện.' }));
    trang.push(t1);
    // trang 2: tổ xuất sắc
    var t2 = h('section', { lop: 'trang-chieu' }, h('h2', {}, bt('cup'), 'Tổ xuất sắc tuần'));
    var toXs = t ? t.ds.filter(function (x) { return x.danh_hieu === 'TO_XS'; }) : [];
    var toTb = vd.to_tb || [];
    if (toTb.length) {
      var maxTb = 110, minTb = 60;
      t2.appendChild(h('div', { lop: 'chieu-to' },
        h('div', { lop: 'cup-lon' }, bt('cup'), h('div', { lop: 'ten', chu: toXs.length ? toXs.map(function (x) { return x.ten; }).join(' và ') : 'Chưa có tổ đủ điều kiện' }),
          toXs.length ? h('div', { lop: 'phu', chu: 'Điểm trung bình ' + vs(toXs[0].chi_so) }) : null),
        h('div', {}, h('div', { lop: 'cot-to' }, toTb.map(function (x) {
          var cao = x.diem_tb === null ? 4 : Math.max(6, (x.diem_tb - minTb) / (maxTb - minTb) * 100);
          var la = toXs.some(function (y) { return String(y.to) === String(x.to); });
          return h('div', { lop: 'c' }, h('div', { lop: 'gia-tri', chu: vs(x.diem_tb) }), h('div', { lop: 'than-cot' + (la ? ' xs' : ''), kieu: { height: cao + '%', background: 'var(--to' + x.to + ')' } }));
        })), h('div', { lop: 'cot-to-ten' }, toTb.map(function (x) { return h('div', {}, 'Tổ ' + x.to, x.du_dieu_kien ? null : h('small', { chu: 'chưa đủ điều kiện' })); })))));
    } else t2.appendChild(h('div', { lop: 'rong', chu: 'Chưa có điểm tổ.' }));
    trang.push(t2);
    // trang 3: phòng kiểu mẫu và bạn tiến bộ
    var phongKm = t ? t.ds.filter(function (x) { return x.danh_hieu === 'PHONG_KM'; }) : [];
    var tienBo = t ? t.ds.filter(function (x) { return x.danh_hieu === 'TIEN_BO'; }) : [];
    trang.push(h('section', { lop: 'trang-chieu' }, h('h2', {}, bt('giuong'), 'Phòng kiểu mẫu và bạn tiến bộ'),
      h('div', { lop: 'chieu-hai' },
        h('div', { lop: 'the-chieu' }, bt('giuong', 'lon-bt'), h('div', { lop: 'nhan-chieu', chu: 'Phòng kiểu mẫu' }),
          h('div', { lop: 'ten-chieu', chu: phongKm.length ? phongKm.map(function (x) { return x.ten; }).join(' và ') : 'Chưa có phòng đủ điều kiện' }),
          phongKm.length ? h('div', { lop: 'phu-chieu', chu: 'Điểm phòng ' + vs(phongKm[0].chi_so) + ' · không bị quản lý nội trú nhắc' }) : null),
        h('div', { lop: 'the-chieu' }, bt('lap_lanh', 'lon-bt'), h('div', { lop: 'nhan-chieu', chu: 'Bạn tiến bộ (tăng từ 10 điểm)' }),
          tienBo.length ? h('div', { lop: 'chip-chieu' }, tienBo.map(function (x) { return h('span', {}, h('i', { lop: 'cham-to to-' + x.to }), x.ten); })) : h('div', { lop: 'phu-chieu', chu: 'Tuần này chưa có.' })))));
    // trang 4: tháng và đợt
    var hangKy = [['Học sinh xuất sắc', 'HS_XS'], ['Tổ xuất sắc', 'TO_XS'], ['Phòng kiểu mẫu', 'PHONG_KM']];
    var oKy = function (ky, dh) {
      if (!ky) return h('td', { chu: 'Chưa đủ tuần' });
      var ds = ky.ds.filter(function (x) { return x.danh_hieu === dh; });
      if (!ds.length) return h('td', { chu: 'Chưa có' });
      return h('td', {}, ds.map(function (x, i) { return h('span', { kieu: { 'white-space': 'nowrap', 'margin-right': '1.4vw', display: 'inline-block' }, chu: (dh === 'HS_XS' ? x.hang + '. ' : '') + x.ten }); }));
    };
    var ghiChuKy = [vd.thang, vd.dot].filter(Boolean).filter(function (k) { return !k.chinh_thuc; }).length ? 'Tạm tính đến tuần ' + ((vd.thang || vd.dot).tinh_den_tuan) : '';
    trang.push(h('section', { lop: 'trang-chieu' }, h('h2', {}, bt('cup'), 'Tháng và đợt thi đua'),
      ghiChuKy ? h('div', { lop: 'phu-de', chu: ghiChuKy }) : null,
      h('table', { lop: 'bang-chieu' }, h('thead', {}, h('tr', {}, h('th', {}), h('th', { chu: vd.thang ? tenKy('thang', vd.thang.ky) : 'Tháng' }), h('th', { chu: vd.dot ? tenKy('dot', vd.dot.ky) : 'Đợt' }))),
        h('tbody', {}, hangKy.map(function (r) { return h('tr', {}, h('th', { chu: r[0] }), oKy(vd.thang, r[1]), oKy(vd.dot, r[1])); })))));
    // trang 5: sinh nhật và thông báo ghim
    trang.push(h('section', { lop: 'trang-chieu' }, h('h2', {}, bt('banh'), 'Sinh nhật và việc tuần tới'),
      h('div', { lop: 'chieu-hai' },
        h('div', { lop: 'the-chieu' }, h('div', { lop: 'nhan-chieu', chu: 'Sinh nhật tháng ' + (new Date().getMonth() + 1) }),
          d.sinh_nhat.length ? h('div', { lop: 'chip-chieu chip-nho' }, d.sinh_nhat.slice(0, 12).map(function (x) { return h('span', {}, h('i', { lop: 'cham-to to-' + x.to }), x.ten + ' · ' + x.ngay); }),
            d.sinh_nhat.length > 12 ? h('span', { chu: 'và ' + (d.sinh_nhat.length - 12) + ' bạn khác' }) : null) : h('div', { lop: 'phu-chieu', chu: 'Tháng này chưa có sinh nhật.' })),
        h('div', { lop: 'the-chieu' }, h('div', { lop: 'nhan-chieu', chu: 'Thông báo ghim' }),
          d.thong_bao.length ? d.thong_bao.map(function (x) { return h('div', { lop: 'tb-chieu' }, bt('ghim'), h('span', { chu: x.tieu_de })); }) : h('div', { lop: 'phu-chieu', chu: 'Chưa có thông báo ghim.' })))));
    trang.forEach(function (x) { than.appendChild(x); });
    var cham = h('div', { lop: 'chieu-cham', 'aria-hidden': 'true' }, trang.map(function () { return h('span'); }));
    than.appendChild(cham);
    var dang = 0, dung = false, henGio = null;
    function hien(n) {
      dang = (n + trang.length) % trang.length;
      trang.forEach(function (x, i) { x.classList.toggle('dang', i === dang); });
      cham.querySelectorAll('span').forEach(function (x, i) { x.classList.toggle('dang', i === dang); });
      if (dang === 0 && xs.length) giayMau(than);
      clearTimeout(henGio);
      if (!dung) henGio = setTimeout(function () { hien(dang + 1); }, 12000);
    }
    var nutDung = h('button', { 'aria-label': 'Dừng tự chuyển', onclick: function () { dung = !dung; xoaHet(nutDung); nutDung.appendChild(bt(dung ? 'chay' : 'dung')); if (!dung) hien(dang); else clearTimeout(henGio); } }, bt('dung'));
    var nutToi = h('button', { 'aria-label': 'Đổi nền sáng, tối', onclick: function () {
      toi = !toi; khung.classList.toggle('toi', toi); try { sessionStorage.setItem('nn127_chieu_toi', toi ? '1' : '0'); } catch (e) { /* bỏ qua */ }
      xoaHet(nutToi); nutToi.appendChild(bt(toi ? 'mat_troi' : 'trang_khuyet'));
    } }, bt(toi ? 'mat_troi' : 'trang_khuyet'));
    function thoat() { clearTimeout(henGio); document.removeEventListener('keydown', phim); if (document.fullscreenElement) document.exitFullscreen().catch(function () {}); khung.remove(); }
    function phim(e) {
      if (e.key === 'ArrowRight') hien(dang + 1); else if (e.key === 'ArrowLeft') hien(dang - 1);
      else if (e.key === ' ') { e.preventDefault(); nutDung.click(); } else if (e.key === 'Escape') thoat();
    }
    document.addEventListener('keydown', phim);
    than.appendChild(h('div', { lop: 'chieu-dk' },
      h('button', { 'aria-label': 'Trang trước', onclick: function () { hien(dang - 1); } }, bt('trai')), nutDung,
      h('button', { 'aria-label': 'Trang sau', onclick: function () { hien(dang + 1); } }, bt('phai')), nutToi,
      h('button', { 'aria-label': 'Toàn màn hình', onclick: function () { if (khung.requestFullscreen) Promise.resolve().then(function () { return khung.requestFullscreen(); }).catch(function () { baoNho('Bấm F11 để toàn màn hình.'); }); else baoNho('Bấm F11 để toàn màn hình.'); } }, bt('phong_to')),
      h('button', { 'aria-label': 'Thoát bảng chiếu', onclick: thoat }, bt('nhan'))));
    var dau = window.__DEMO__ && window.__DEMO__.trang ? Number(window.__DEMO__.trang) - 1 : 0;
    if (window.__DEMO__) dung = true;
    hien(dau);
  }
  function giayMau(cha) {
    var mau = ['var(--vang)', 'var(--vang-2)', 'var(--chinh)', 'var(--to1)', 'var(--to2)', 'var(--to3)'];
    for (var i = 0; i < 24; i++) {
      var m = h('span', { lop: 'giay-mau', kieu: { left: (4 + (i * 37) % 92) + '%', background: mau[i % mau.length], 'animation-delay': ((i % 6) * 0.12) + 's' } });
      cha.appendChild(m);
      setTimeout((function (x) { return function () { x.remove(); }; })(m), 3800);
    }
  }

  // ================================================================ tự đăng xuất sau 15 phút không thao tác
  var lanCuoi = Date.now();
  ['click', 'keydown', 'touchstart'].forEach(function (ev) { document.addEventListener(ev, function () { lanCuoi = Date.now(); }, { passive: true }); });
  // Bảng chiếu trên tivi không ai chạm vào: không tự đăng xuất khi đang chiếu (tờ hướng dẫn dặn đăng xuất sau buổi chiếu).
  setInterval(function () { if (S.phien && !document.querySelector('.chieu') && Date.now() - lanCuoi > 15 * 60 * 1000) { dangXuat(); } }, 30000);

  // ================================================================ khởi động
  function khoiDong() {
    var demo = window.__DEMO__;
    if (demo && demo.ma) {
      goiMot('dangNhap', { ma: demo.ma, pin: demo.pin, kem: KEM_MAC_DINH }).then(function (kq) {
        if (!kq.ok) { manDangNhap(kq.loi); return; }
        S.phien = kq.du_lieu.phien; S.nd = kq.du_lieu.nguoi_dung;
        if (kq.du_lieu.trang_chu) { nhanKem(kq.du_lieu.trang_chu.kem); datDem('nha', kq.du_lieu.trang_chu); }
        if (kq.du_lieu.phai_doi_pin) { manDoiPin(true); return; }
        dungKhung(demo.man || 'nha');
        if (demo.sau) setTimeout(function () { demo.sau({ diDen: diDen, S: S, sangBuoc: sangBuoc }); }, 400);
      });
      return;
    }
    if (demo && demo.dangNhap) { manDangNhap(demo.loi); return; }
    S.phien = docPhien();
    if (!S.phien) { manDangNhap(); return; }
    goiMot('hoSo', {}).then(function (kq) {
      if (kq.ok) { S.nd = kq.du_lieu; if (kq.du_lieu.phai_doi_pin) manDoiPin(true); else dungKhung('nha'); }
      else if (kq.ma_loi === 'PHAI_DOI_PIN') manDoiPin(true);
      else manDangNhap();
    }).catch(function () { manDangNhap('Không kết nối được. Đợi 1 phút rồi thử lại.'); });
  }
  khoiDong();
})();

// Vỏ ứng dụng lưu đệm để mở nhanh (không lưu phản hồi của máy chủ dữ liệu).
if ('serviceWorker' in navigator) { window.addEventListener('load', function () { navigator.serviceWorker.register('sw.js').catch(function () {}); }); }
