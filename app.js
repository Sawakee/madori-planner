"use strict";

// ===== 家具プリセット (サイズはmm: 幅 x 奥行) =====
const PRESETS = [
  { cat: "寝室", items: [
    { name: "シングルベッド", w: 1000, d: 1950, color: "#a3c9e0" },
    { name: "セミダブルベッド", w: 1200, d: 1950, color: "#a3c9e0" },
    { name: "ダブルベッド", w: 1400, d: 1950, color: "#a3c9e0" },
    { name: "クイーンベッド", w: 1600, d: 2000, color: "#a3c9e0" },
    { name: "タンス", w: 900, d: 500, color: "#c9a98a" },
    { name: "クローゼット", w: 1200, d: 600, color: "#c9a98a" },
  ]},
  { cat: "リビング", items: [
    { name: "ソファ(2人)", w: 1500, d: 850, color: "#9ed0a8" },
    { name: "ソファ(3人)", w: 2000, d: 900, color: "#9ed0a8" },
    { name: "ローテーブル", w: 900, d: 500, color: "#d9c08a" },
    { name: "TV台", w: 1500, d: 400, color: "#b0a8a0" },
    { name: "本棚", w: 900, d: 300, color: "#c9a98a" },
  ]},
  { cat: "ダイニング/書斎", items: [
    { name: "ダイニングテーブル", w: 1200, d: 800, color: "#d9c08a" },
    { name: "椅子", w: 450, d: 450, color: "#c7b89a" },
    { name: "デスク", w: 1200, d: 600, color: "#d9c08a" },
    { name: "オフィスチェア", w: 600, d: 600, color: "#c7b89a" },
  ]},
  { cat: "水回り/家電", items: [
    { name: "冷蔵庫", w: 700, d: 700, color: "#cfd6df" },
    { name: "洗濯機", w: 600, d: 600, color: "#cfd6df" },
    { name: "食器棚", w: 900, d: 450, color: "#c9a98a" },
    { name: "キッチン", w: 2550, d: 650, color: "#cfd6df" },
    { name: "洗面台", w: 750, d: 500, color: "#cfd6df" },
    { name: "トイレ", w: 450, d: 700, color: "#cfd6df" },
  ]},
  { cat: "カウンター", items: [
    { name: "カウンター", w: 1800, d: 400, color: "#caa978" },
    { name: "カウンターキッチン", w: 2550, d: 900, color: "#cfd6df" },
    { name: "アイランドカウンター", w: 1600, d: 800, color: "#cfd6df" },
    { name: "カウンター椅子", w: 400, d: 400, color: "#c7b89a" },
  ]},
  { cat: "電気", items: [
    { name: "コンセント", w: 150, d: 150, color: "#f0d878", type: "outlet" },
    { name: "エアコン", w: 800, d: 250, color: "#eef1f4", type: "aircon" },
    { name: "室外機", w: 800, d: 300, color: "#c8ccd0" },
  ]},
  { cat: "AV/映像", items: [
    { name: "スクリーン", w: 2000, d: 120, color: "#ffffff", type: "screen" },
    { name: "プロジェクター", w: 300, d: 300, color: "#b8bcc2" },
  ]},
  { cat: "屋外", items: [
    { name: "軽自動車", w: 1480, d: 3400, color: "#cdd8e6", type: "car" },
    { name: "コンパクトカー", w: 1695, d: 3990, color: "#cdd8e6", type: "car" },
    { name: "ミニバン", w: 1730, d: 4840, color: "#cdd8e6", type: "car" },
    { name: "SUV", w: 1900, d: 4700, color: "#cdd8e6", type: "car" },
    { name: "水栓", w: 200, d: 200, color: "#dbe7ee", type: "faucet" },
  ]},
  { cat: "その他", items: [
    { name: "箱", w: 600, d: 600, color: "#dcdcdc" },
  ]},
  { cat: "建具", items: [
    { name: "ドア", w: 800, d: 120, color: "#e0b0b0", type: "door" },
    { name: "両開きドア", w: 1600, d: 120, color: "#e0b0b0", type: "ddoor" },
    { name: "引き戸", w: 1650, d: 120, color: "#cfe0e8", type: "sliding" },
    { name: "窓", w: 1650, d: 120, color: "#bfe3ef", type: "window" },
  ]},
];

// ===== サンプル間取り (「例」ボタン / example.json と同内容) =====
const EXAMPLE = {
  rooms: [
    { id: 1, type: "room", name: "LDK", rects: [{ x: 910, y: 4450, w: 5460, d: 3660 }, { x: 910, y: 1720, w: 1820, d: 2730 }, { x: 2730, y: 810, w: 910, d: 3640 }] },
    { id: 3, type: "bath", name: "浴室", bathDir: 0, rects: [{ x: 910, y: -2830, w: 1820, d: 1820 }] },
    { id: 5, type: "room", name: "玄関", rects: [{ x: 2730, y: -2830, w: 910, d: 910 }] },
    { id: 6, type: "room", name: "洋室", rects: [{ x: 3640, y: -2830, w: 2730, d: 3640 }] },
    { id: 11, type: "balcony", name: "バルコニー", rects: [{ x: 910, y: 8110, w: 5460, d: 910 }] },
    { id: 38, type: "room", name: "廊下", rects: [{ x: 2730, y: -1920, w: 910, d: 2730 }] },
    { id: 41, type: "room", name: "脱衣室", rects: [{ x: 910, y: -1010, w: 1820, d: 1820 }] },
    { id: 43, type: "room", name: "トイレ", rects: [{ x: 910, y: 810, w: 1820, d: 910 }] },
    { id: 47, type: "room", name: "洋室", rects: [{ x: 3640, y: 1720, w: 2730, d: 2730 }] },
  ],
  items: [
    { id: 34, name: "窓", x: 5315, y: -2820, w: 1650, d: 120, rot: 0, color: "#bfe3ef", type: "window" },
    { id: 35, name: "窓", x: 2305, y: 8100, w: 1650, d: 120, rot: 0, color: "#bfe3ef", type: "window" },
    { id: 37, name: "ドア", x: 2550, y: 320, w: 800, d: 120, rot: 90, color: "#e0b0b0", type: "door" },
    { id: 39, name: "クローゼット", x: 4320, y: 1255, w: 1365, d: 910, rot: 0, color: "#c9a98a", type: "furniture" },
    { id: 40, name: "クローゼット", x: 5705, y: 1290, w: 1365, d: 910, rot: 180, color: "#c9a98a", type: "furniture" },
    { id: 42, name: "トイレ", x: 1430, y: 1295, w: 450, d: 700, rot: 90, color: "#cfd6df", type: "furniture" },
    { id: 44, name: "洗面台", x: 1265, y: 270, w: 750, d: 500, rot: 90, color: "#cfd6df", type: "furniture" },
    { id: 45, name: "洗濯機", x: 1265, y: -580, w: 600, d: 600, rot: 90, color: "#cfd6df", type: "furniture" },
    { id: 46, name: "引き戸", x: 2085, y: -1010, w: 910, d: 120, rot: 0, color: "#cfe0e8", type: "sliding" },
    { id: 48, name: "引き戸", x: 5680, y: 1695, w: 1365, d: 120, rot: 0, color: "#cfe0e8", type: "sliding" },
    { id: 49, name: "引き戸", x: 4285, y: 820, w: 1365, d: 120, rot: 0, color: "#cfe0e8", type: "sliding" },
    { id: 50, name: "窓", x: 4900, y: 8115, w: 1650, d: 120, rot: 0, color: "#bfe3ef", type: "window" },
    { id: 53, name: "キッチン", x: 1770, y: 4065, w: 1600, d: 800, rot: 0, color: "#cfd6df", type: "furniture" },
    { id: 54, name: "キッチン", x: 2180, y: 2175, w: 800, d: 800, rot: 180, color: "#cfd6df", type: "furniture" },
    { id: 55, name: "ダイニングテーブル", x: 2060, y: 6495, w: 1200, d: 800, rot: 90, color: "#d9c08a", type: "furniture" },
    { id: 56, name: "ソファ(2人)", x: 4050, y: 6435, w: 1500, d: 850, rot: 90, color: "#9ed0a8", type: "furniture" },
    { id: 57, name: "TV台", x: 6090, y: 6445, w: 1500, d: 400, rot: 90, color: "#b0a8a0", type: "furniture" },
    { id: 58, name: "椅子", x: 2810, y: 6185, w: 450, d: 450, rot: 0, color: "#c7b89a", type: "furniture" },
    { id: 59, name: "椅子", x: 1310, y: 6205, w: 450, d: 450, rot: 0, color: "#c7b89a", type: "furniture" },
    { id: 60, name: "冷蔵庫", x: 1310, y: 2195, w: 700, d: 700, rot: 180, color: "#cfd6df", type: "furniture" },
    { id: 61, name: "食器棚", x: 1250, y: 5065, w: 900, d: 450, rot: 90, color: "#c9a98a", type: "furniture" },
    { id: 62, name: "椅子", x: 1325, y: 6810, w: 450, d: 450, rot: 0, color: "#c7b89a", type: "furniture" },
    { id: 63, name: "椅子", x: 2840, y: 6825, w: 450, d: 450, rot: 0, color: "#c7b89a", type: "furniture" },
    { id: 64, name: "室外機", x: 5770, y: 8415, w: 800, d: 300, rot: 180, color: "#c8ccd0", type: "furniture" },
    { id: 36, name: "ドア", x: 3820, y: 320, w: 800, d: 120, rot: 270, color: "#e0b0b0", type: "door" },
    { id: 65, name: "ドア", x: 3825, y: 2245, w: 800, d: 120, rot: 270, color: "#e0b0b0", type: "door" },
    { id: 66, name: "シングルベッド", x: 5710, y: 3285, w: 1000, d: 1950, rot: 0, color: "#a3c9e0", type: "furniture" },
    { id: 67, name: "シングルベッド", x: 5770, y: -1555, w: 1000, d: 1950, rot: 0, color: "#a3c9e0", type: "furniture" },
    { id: 68, name: "デスク", x: 4000, y: -2135, w: 1200, d: 600, rot: 90, color: "#d9c08a", type: "furniture" },
    { id: 69, name: "椅子", x: 4660, y: -2085, w: 450, d: 450, rot: 270, color: "#c7b89a", type: "furniture" },
    { id: 70, name: "デスク", x: 4345, y: 3990, w: 1200, d: 600, rot: 0, color: "#d9c08a", type: "furniture" },
    { id: 71, name: "椅子", x: 4315, y: 3360, w: 450, d: 450, rot: 180, color: "#c7b89a", type: "furniture" },
    { id: 72, name: "本棚", x: 5810, y: 4655, w: 900, d: 300, rot: 180, color: "#c9a98a", type: "furniture" },
    { id: 73, name: "本棚", x: 4815, y: 4660, w: 900, d: 300, rot: 180, color: "#c9a98a", type: "furniture" },
    { id: 74, name: "ローテーブル", x: 5220, y: 6465, w: 900, d: 500, rot: 90, color: "#d9c08a", type: "furniture" },
    { id: 75, name: "ドア", x: 2865, y: 1275, w: 800, d: 120, rot: 270, color: "#e0b0b0", type: "door" },
  ],
};

// ===== 状態 =====
// 座標はすべて mm の絶対座標 (ワールド座標)。
const state = {
  rooms: [],        // {id,name,x,y(左上mm),w,d}
  items: [],        // {id,name,x,y(中心mm),w,d,rot(0/90/180/270),color}
  sel: [],          // 選択中のオブジェクト(部屋/家具)の配列
  rectIdx: 0,       // 単一部屋選択時に編集中の長方形index
  zoom: 1,
  offset: { x: 0, y: 0 },
  baseScale: 0.1,   // mm -> px
  grid: 910,
};
let nextId = 1;

const cv = document.getElementById("cv");
const ctx = cv.getContext("2d");
const $ = id => document.getElementById(id);

// ===== 座標変換 =====
const sc = () => state.baseScale * state.zoom;
function worldToScreen(wx, wy) {
  return { x: wx * sc() + state.offset.x, y: wy * sc() + state.offset.y };
}
function screenToWorld(sx, sy) {
  return { x: (sx - state.offset.x) / sc(), y: (sy - state.offset.y) / sc() };
}

// ===== Canvasサイズ =====
function resize() {
  const wrap = cv.parentElement;
  const dpr = window.devicePixelRatio || 1;
  cv.width = wrap.clientWidth * dpr;
  cv.height = wrap.clientHeight * dpr;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  draw();
}
window.addEventListener("resize", resize);
function viewSize() {
  return { w: cv.parentElement.clientWidth, h: cv.parentElement.clientHeight };
}

// ===== 部屋ジオメトリ (部屋 = 長方形パーツの集合) =====
function roomBBox(r) {
  let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
  for (const t of r.rects) {
    minX = Math.min(minX, t.x); minY = Math.min(minY, t.y);
    maxX = Math.max(maxX, t.x + t.w); maxY = Math.max(maxY, t.y + t.d);
  }
  return { x: minX, y: minY, w: maxX - minX, d: maxY - minY };
}
function roomArea(r) { return r.rects.reduce((s, t) => s + t.w * t.d, 0); }
function pointInRect(t, x, y) { return x >= t.x && x <= t.x + t.w && y >= t.y && y <= t.y + t.d; }
function rectIndexAt(r, x, y) { for (let i = r.rects.length - 1; i >= 0; i--) if (pointInRect(r.rects[i], x, y)) return i; return -1; }
function pointInRoom(r, x, y) { return rectIndexAt(r, x, y) >= 0; }

function roomsBBox() {
  if (state.rooms.length === 0) return { x: 0, y: 0, w: 3640, d: 2730 };
  let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
  for (const r of state.rooms) {
    const b = roomBBox(r);
    minX = Math.min(minX, b.x); minY = Math.min(minY, b.y);
    maxX = Math.max(maxX, b.x + b.w); maxY = Math.max(maxY, b.y + b.d);
  }
  return { x: minX, y: minY, w: maxX - minX, d: maxY - minY };
}

// 区間[a,b]から穴(holes)を引いて残った区間の配列を返す
function subtractIntervals(a, b, holes) {
  let segs = [[a, b]];
  for (const [hs, he] of holes) {
    if (he <= hs) continue;
    const next = [];
    for (const [s, e] of segs) {
      if (he <= s || hs >= e) { next.push([s, e]); continue; }
      if (hs > s) next.push([s, hs]);
      if (he < e) next.push([he, e]);
    }
    segs = next;
  }
  return segs.filter(([s, e]) => e - s > 1);
}

// 部屋の外周壁セグメント(同じ部屋どうしが接する内壁は除外)
function wallSegments(r) {
  const eps = 1, out = [], rects = r.rects;
  for (const t of rects) {
    const L = t.x, R = t.x + t.w, T = t.y, B = t.y + t.d;
    const collect = (siblingTest) => rects.filter(s => s !== t).reduce((h, s) => { const iv = siblingTest(s); if (iv) h.push(iv); return h; }, []);
    // 上辺 (y=T): 兄弟の下辺がTに一致する範囲を穴に
    for (const [a, b] of subtractIntervals(L, R, collect(s => Math.abs((s.y + s.d) - T) < eps ? [Math.max(L, s.x), Math.min(R, s.x + s.w)] : null))) out.push([a, T, b, T]);
    // 下辺 (y=B)
    for (const [a, b] of subtractIntervals(L, R, collect(s => Math.abs(s.y - B) < eps ? [Math.max(L, s.x), Math.min(R, s.x + s.w)] : null))) out.push([a, B, b, B]);
    // 左辺 (x=L)
    for (const [a, b] of subtractIntervals(T, B, collect(s => Math.abs((s.x + s.w) - L) < eps ? [Math.max(T, s.y), Math.min(B, s.y + s.d)] : null))) out.push([L, a, L, b]);
    // 右辺 (x=R)
    for (const [a, b] of subtractIntervals(T, B, collect(s => Math.abs(s.x - R) < eps ? [Math.max(T, s.y), Math.min(B, s.y + s.d)] : null))) out.push([R, a, R, b]);
  }
  return out;
}

// 全体が収まるように表示
function fitView() {
  const v = viewSize();
  const bb = roomsBBox();
  const margin = 70;
  const scaleX = (v.w - margin * 2) / bb.w;
  const scaleY = (v.h - margin * 2) / bb.d;
  state.baseScale = Math.min(scaleX, scaleY);
  state.zoom = 1;
  state.offset.x = (v.w - bb.w * state.baseScale) / 2 - bb.x * state.baseScale;
  state.offset.y = (v.h - bb.d * state.baseScale) / 2 - bb.y * state.baseScale;
  updateZoomLabel();
  draw();
}

// ===== 描画 =====
function draw() {
  const v = viewSize();
  ctx.clearRect(0, 0, v.w, v.h);
  const showGrid = $("showGrid").checked;
  for (const r of state.rooms) drawRoom(r, showGrid, isSelected(r));
  for (const it of state.items) drawItem(it, isSelected(it));
  // 凡例 (左下)
  if (showGrid) {
    ctx.fillStyle = "#5a6470";
    ctx.font = "12px sans-serif";
    ctx.textAlign = "left"; ctx.textBaseline = "alphabetic";
    ctx.fillText("グリッド1マス = 910mm (半間)", 10, v.h - 10);
  }
  drawMeasure();
}

// 計測ライン (始点→現在地) と長さ表示
function drawMeasure() {
  if (!measure) return;
  const a = worldToScreen(measure.a.x, measure.a.y), b = worldToScreen(measure.b.x, measure.b.y);
  ctx.save();
  ctx.strokeStyle = "#c0392b"; ctx.fillStyle = "#c0392b"; ctx.lineWidth = 1.5;
  ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
  for (const p of [a, b]) { ctx.beginPath(); ctx.arc(p.x, p.y, 3, 0, Math.PI * 2); ctx.fill(); }
  const dmm = Math.hypot(measure.b.x - measure.a.x, measure.b.y - measure.a.y);
  const label = `${Math.round(dmm)} mm (${(dmm / 1000).toFixed(2)} m)`;
  const mx = (a.x + b.x) / 2, my = (a.y + b.y) / 2;
  ctx.font = "12px sans-serif"; ctx.textAlign = "center"; ctx.textBaseline = "bottom";
  const tw = ctx.measureText(label).width;
  ctx.fillStyle = "rgba(255,255,255,.85)";
  ctx.fillRect(mx - tw / 2 - 4, my - 21, tw + 8, 17);
  ctx.fillStyle = "#c0392b";
  ctx.fillText(label, mx, my - 6);
  ctx.restore();
}

// 階段を指定方向(0=右,1=下,2=左,3=上 が上り方向)に描く
function drawStairsRoom(ox, oy, tw, td, wmm, dmm, dir, selected) {
  const horiz = (dir === 0 || dir === 2);
  const lenMM = horiz ? wmm : dmm;
  const n = Math.min(20, Math.max(4, Math.round(lenMM / 250)));
  // 段板
  ctx.lineWidth = 1; ctx.strokeStyle = "#9aa1aa"; ctx.beginPath();
  for (let k = 1; k < n; k++) {
    if (horiz) { const x = ox + (tw * k) / n; ctx.moveTo(x, oy); ctx.lineTo(x, oy + td); }
    else { const y = oy + (td * k) / n; ctx.moveTo(ox, y); ctx.lineTo(ox + tw, y); }
  }
  ctx.stroke();
  // 上り矢印
  ctx.strokeStyle = selected ? "#2c3e50" : "#5a6470"; ctx.lineWidth = 1.5; ctx.beginPath();
  const cx = ox + tw / 2, cy = oy + td / 2;
  if (dir === 0) {
    ctx.moveTo(ox + 6, cy); ctx.lineTo(ox + tw - 6, cy);
    ctx.moveTo(ox + tw - 6, cy); ctx.lineTo(ox + tw - 14, cy - 5);
    ctx.moveTo(ox + tw - 6, cy); ctx.lineTo(ox + tw - 14, cy + 5);
  } else if (dir === 2) {
    ctx.moveTo(ox + tw - 6, cy); ctx.lineTo(ox + 6, cy);
    ctx.moveTo(ox + 6, cy); ctx.lineTo(ox + 14, cy - 5);
    ctx.moveTo(ox + 6, cy); ctx.lineTo(ox + 14, cy + 5);
  } else if (dir === 1) {
    ctx.moveTo(cx, oy + 6); ctx.lineTo(cx, oy + td - 6);
    ctx.moveTo(cx, oy + td - 6); ctx.lineTo(cx - 5, oy + td - 14);
    ctx.moveTo(cx, oy + td - 6); ctx.lineTo(cx + 5, oy + td - 14);
  } else {
    ctx.moveTo(cx, oy + td - 6); ctx.lineTo(cx, oy + 6);
    ctx.moveTo(cx, oy + 6); ctx.lineTo(cx - 5, oy + 14);
    ctx.moveTo(cx, oy + 6); ctx.lineTo(cx + 5, oy + 14);
  }
  ctx.stroke();
}

// 浴槽を指定方向(0=上,1=右,2=下,3=左)に描く
function drawBathTub(ox, oy, tw, td, dir, selected) {
  const pad = Math.min(tw, td) * 0.07;
  const innerW = tw - pad * 2, innerH = td - pad * 2, frac = 0.55;
  let x, y, w, h;
  if (dir === 0) { w = innerW; h = innerH * frac; x = ox + pad; y = oy + pad; }
  else if (dir === 2) { w = innerW; h = innerH * frac; x = ox + pad; y = oy + td - pad - h; }
  else if (dir === 1) { w = innerW * frac; h = innerH; x = ox + tw - pad - w; y = oy + pad; }
  else { w = innerW * frac; h = innerH; x = ox + pad; y = oy + pad; }
  ctx.fillStyle = selected ? "#cfe6ef" : "#dcecf2";
  ctx.strokeStyle = "#7fa6b5"; ctx.lineWidth = 1.5;
  roundRectPath(x, y, w, h, Math.min(12, Math.min(w, h) * 0.3));
  ctx.fill(); ctx.stroke();
  // 排水口 (長辺側の端寄り)
  ctx.beginPath(); ctx.fillStyle = "#7fa6b5";
  const dx = w >= h ? x + w - Math.min(w * 0.18, 16) : x + w / 2;
  const dy = w >= h ? y + h / 2 : y + h - Math.min(h * 0.18, 16);
  ctx.arc(dx, dy, 3, 0, Math.PI * 2); ctx.fill();
}

function roundRectPath(x, y, w, h, r) {
  r = Math.max(0, Math.min(r, w / 2, h / 2));
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

function drawRoom(r, showGrid, selected) {
  const s = sc();
  const type = r.type || "room";
  const isBalcony = type === "balcony", isVoid = type === "void", isWic = type === "wic";
  const isStairs = type === "stairs", isStorage = type === "storage", isBath = type === "bath";
  const isLawn = type === "lawn", isPorch = type === "porch", isParking = type === "parking", isBicycle = type === "bicycle";
  const thinWall = isBalcony || isVoid || isLawn || isPorch || isParking || isBicycle;
  const showTatami = type === "room" || type === "wic" || type === "storage";

  // 各長方形の床・ハッチ・グリッド
  for (const t of r.rects) {
    const o = worldToScreen(t.x, t.y);
    const tw = t.w * s, td = t.d * s;
    // 吹き抜けは床を塗らない (下階が透ける表現)
    if (!isVoid) {
      ctx.fillStyle = isBalcony ? (selected ? "#e7edf0" : "#eef1f3")
        : isWic ? (selected ? "#efe6d4" : "#f3ecdd")
        : isStairs ? (selected ? "#e8e3d6" : "#efece4")
        : isStorage ? (selected ? "#e6e1d4" : "#ecebe2")
        : isBath ? (selected ? "#dce9ef" : "#e6eff3")
        : isLawn ? (selected ? "#d2e5c0" : "#dcebcf")
        : isPorch ? (selected ? "#ded9cc" : "#e6e2d8")
        : (isParking || isBicycle) ? (selected ? "#dadce0" : "#e4e6e8")
        : (selected ? "#fbf6e8" : "#fdfcf8");
      ctx.fillRect(o.x, o.y, tw, td);
    }

    if (isBalcony) {
      ctx.save();
      ctx.beginPath(); ctx.rect(o.x, o.y, tw, td); ctx.clip();
      ctx.strokeStyle = "#cfd8dd"; ctx.lineWidth = 1; ctx.beginPath();
      for (let d = -td; d < tw; d += 18) { ctx.moveTo(o.x + d, o.y); ctx.lineTo(o.x + d + td, o.y + td); }
      ctx.stroke(); ctx.restore();
    } else if (isVoid) {
      // 対角線(×)で吹き抜けを表現
      ctx.strokeStyle = selected ? "#2f579b" : "#9aa1aa"; ctx.lineWidth = 1.2;
      ctx.beginPath();
      ctx.moveTo(o.x, o.y); ctx.lineTo(o.x + tw, o.y + td);
      ctx.moveTo(o.x + tw, o.y); ctx.lineTo(o.x, o.y + td);
      ctx.stroke();
    } else if (isStairs) {
      const dir = r.stairDir != null ? r.stairDir : (t.w >= t.d ? 0 : 3);
      drawStairsRoom(o.x, o.y, tw, td, t.w, t.d, dir, selected);
    } else if (isBath) {
      drawBathTub(o.x, o.y, tw, td, r.bathDir || 0, selected);
    } else if (showGrid && (type === "room" || type === "wic" || type === "storage")) {
      ctx.save();
      ctx.beginPath(); ctx.rect(o.x, o.y, tw, td); ctx.clip();
      ctx.lineWidth = 1; ctx.strokeStyle = "#e6e2d6"; ctx.beginPath();
      for (let x = Math.ceil(t.x / state.grid) * state.grid; x <= t.x + t.w; x += state.grid) {
        const p = worldToScreen(x, t.y); ctx.moveTo(p.x, o.y); ctx.lineTo(p.x, o.y + td);
      }
      for (let y = Math.ceil(t.y / state.grid) * state.grid; y <= t.y + t.d; y += state.grid) {
        const p = worldToScreen(t.x, y); ctx.moveTo(o.x, p.y); ctx.lineTo(o.x + tw, p.y);
      }
      ctx.stroke(); ctx.restore();
    }
  }

  // 外周の壁 (内壁は除外)。吹き抜けは点線、屋外/ベランダは細線、室内は実線。
  ctx.strokeStyle = selected ? "#2f579b" : (isVoid ? "#9aa1aa" : thinWall ? "#8a939c" : "#5a6470");
  ctx.lineWidth = thinWall ? (selected ? 2.5 : 2) : (selected ? 5 : 4);
  if (isVoid) ctx.setLineDash([6, 4]);
  ctx.beginPath();
  for (const [x1, y1, x2, y2] of wallSegments(r)) {
    const a = worldToScreen(x1, y1), b = worldToScreen(x2, y2);
    ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y);
  }
  ctx.stroke();
  ctx.setLineDash([]);
  // ベランダ単体は手すり内側の線も
  if (isBalcony && r.rects.length === 1) {
    const t = r.rects[0], o = worldToScreen(t.x, t.y), inset = 4;
    ctx.lineWidth = 1;
    ctx.strokeRect(o.x + inset, o.y + inset, t.w * s - inset * 2, t.d * s - inset * 2);
  }

  // 名前 (+帖数)
  const bb = roomBBox(r);
  const c = worldToScreen(bb.x + bb.w / 2, bb.y + bb.d / 2);
  ctx.fillStyle = "#8a93a0"; ctx.textAlign = "center"; ctx.textBaseline = "middle"; ctx.font = "13px sans-serif";
  ctx.fillText(showTatami ? `${r.name}  (${tatami(r).toFixed(1)}帖)` : r.name, c.x, c.y);

  // 単一長方形なら外側に寸法ラベル
  if (r.rects.length === 1 && !isBalcony && !isVoid) {
    const t = r.rects[0], o = worldToScreen(t.x, t.y), tw = t.w * s, td = t.d * s;
    ctx.fillStyle = "#5a6470"; ctx.font = "12px sans-serif"; ctx.textAlign = "center"; ctx.textBaseline = "alphabetic";
    ctx.fillText(`${t.w} mm`, o.x + tw / 2, o.y - 8);
    ctx.save(); ctx.translate(o.x - 10, o.y + td / 2); ctx.rotate(-Math.PI / 2); ctx.textBaseline = "middle";
    ctx.fillText(`${t.d} mm`, 0, 0); ctx.restore();
  }

  // 選択中の長方形を強調 (単一部屋選択時のみ)
  if (selected && state.sel.length === 1 && state.sel[0] === r && r.rects[state.rectIdx]) {
    const t = r.rects[state.rectIdx], o = worldToScreen(t.x, t.y), tw = t.w * s, td = t.d * s;
    ctx.strokeStyle = "rgba(47,87,155,.7)"; ctx.setLineDash([6, 4]); ctx.lineWidth = 1.5;
    ctx.strokeRect(o.x + 1, o.y + 1, tw - 2, td - 2); ctx.setLineDash([]);
    if (r.rects.length > 1) {
      ctx.fillStyle = "#33404d"; ctx.font = "11px sans-serif"; ctx.textAlign = "center"; ctx.textBaseline = "middle";
      ctx.fillText(`${t.w}×${t.d}`, o.x + tw / 2, o.y + td / 2 + 16);
    }
  }
}

function itemDims(it) {
  const swap = it.rot === 90 || it.rot === 270;
  return { w: swap ? it.d : it.w, d: swap ? it.w : it.d };
}

function drawItem(it, selected) {
  const s = sc();
  const p = worldToScreen(it.x, it.y);
  const type = it.type || "furniture";
  // ローカル座標: w = 横(開口幅), d = 縦(壁厚) ; rotで実際の向きへ回転
  const w = it.w * s, h = it.d * s;
  ctx.save();
  ctx.translate(p.x, p.y);
  ctx.rotate((it.rot || 0) * Math.PI / 180);

  if (type === "door" || type === "ddoor") drawDoor(w, h, selected, type === "ddoor");
  else if (type === "sliding") drawSliding(w, h, selected);
  else if (type === "window") drawWindow(w, h, selected);
  else if (type === "stairs") drawStairs(w, h, selected);
  else if (type === "void") drawVoid(w, h, selected);
  else if (type === "outlet") drawOutlet(w, h, selected);
  else if (type === "aircon") drawAircon(w, h, selected);
  else if (type === "screen") drawScreen(w, h, selected);
  else if (type === "car") drawCar(w, h, selected);
  else if (type === "faucet") drawFaucet(w, h, selected);
  else {
    // 通常家具
    ctx.fillStyle = it.color;
    ctx.strokeStyle = selected ? "#2c3e50" : "#7a8694";
    ctx.lineWidth = selected ? 2.5 : 1.5;
    ctx.beginPath();
    ctx.rect(-w / 2, -h / 2, w, h);
    ctx.fill();
    ctx.stroke();
    // 正面マーカー
    ctx.fillStyle = "rgba(0,0,0,.18)";
    ctx.fillRect(-w / 2, -h / 2, w, Math.min(h * 0.18, 8));
  }
  ctx.restore();

  // ラベルは常に水平で読めるように回転外で描画
  const dim = itemDims(it);
  const fh = dim.d * s;
  if ((type === "furniture" || type === "void") && w > 30 && h > 18) {
    ctx.fillStyle = "#33404d";
    ctx.font = "11px sans-serif";
    ctx.textAlign = "center"; ctx.textBaseline = "middle";
    ctx.fillText(it.name, p.x, p.y);
  }
  if (selected) {
    ctx.fillStyle = "#33404d";
    ctx.font = "10px sans-serif";
    ctx.textAlign = "center"; ctx.textBaseline = "alphabetic";
    ctx.fillText(`${it.name} ${it.w}×${it.d}`, p.x, p.y - fh / 2 - 5);
  }
}

// ドア: 壁を開口として消し、開き戸の弧を描く (ローカル座標, w=開口幅, h=壁厚)
function drawDoor(w, h, selected, isDouble) {
  // 壁を消す(開口)
  ctx.fillStyle = "#fdfcf8";
  ctx.fillRect(-w / 2, -h / 2 - 6, w, h + 12);
  // 開口の枠(両端の縦線)
  ctx.strokeStyle = selected ? "#2f579b" : "#8a939c";
  ctx.lineWidth = selected ? 3 : 2;
  ctx.beginPath();
  ctx.moveTo(-w / 2, -h / 2 - 5); ctx.lineTo(-w / 2, h / 2 + 5);
  ctx.moveTo(w / 2, -h / 2 - 5); ctx.lineTo(w / 2, h / 2 + 5);
  ctx.stroke();
  // 扉と弧
  ctx.strokeStyle = selected ? "#2f579b" : "#b06a5a";
  ctx.lineWidth = 1.5;
  if (isDouble) {
    const r = w / 2;
    // 左扉
    ctx.beginPath(); ctx.moveTo(-w / 2, 0); ctx.lineTo(-w / 2, r);
    ctx.arc(-w / 2, 0, r, Math.PI / 2, 0, true); ctx.stroke();
    // 右扉
    ctx.beginPath(); ctx.moveTo(w / 2, 0); ctx.lineTo(w / 2, r);
    ctx.arc(w / 2, 0, r, Math.PI / 2, Math.PI); ctx.stroke();
  } else {
    const r = w;
    ctx.beginPath();
    ctx.moveTo(-w / 2, 0); ctx.lineTo(-w / 2, r);   // 扉の板
    ctx.arc(-w / 2, 0, r, Math.PI / 2, 0, true);    // 開閉の弧
    ctx.stroke();
  }
}

// 引き戸 (引き違い): 壁を開口にし、2枚の戸を上下の溝にずらして描く
function drawSliding(w, h, selected) {
  ctx.fillStyle = "#fdfcf8";
  ctx.fillRect(-w / 2, -h / 2 - 5, w, h + 10);
  // 開口の枠 (両端)
  ctx.strokeStyle = selected ? "#2f579b" : "#8a939c";
  ctx.lineWidth = selected ? 3 : 2;
  ctx.beginPath();
  ctx.moveTo(-w / 2, -h / 2 - 5); ctx.lineTo(-w / 2, h / 2 + 5);
  ctx.moveTo(w / 2, -h / 2 - 5); ctx.lineTo(w / 2, h / 2 + 5);
  ctx.stroke();
  // 2枚の戸 (左は上溝、右は下溝にずらして引き違いを表現)
  const len = w * 0.55, thk = Math.max(3, h * 0.32);
  ctx.fillStyle = "#d8e8ef";
  ctx.strokeStyle = selected ? "#2f579b" : "#5a7e8c";
  ctx.lineWidth = 1.2;
  ctx.fillRect(-w / 2, -h * 0.18 - thk / 2, len, thk);
  ctx.strokeRect(-w / 2, -h * 0.18 - thk / 2, len, thk);
  ctx.fillRect(w / 2 - len, h * 0.18 - thk / 2, len, thk);
  ctx.strokeRect(w / 2 - len, h * 0.18 - thk / 2, len, thk);
}

// 窓: 壁を開口にして二重線(ガラス)を描く
function drawWindow(w, h, selected) {
  ctx.fillStyle = "#fdfcf8";
  ctx.fillRect(-w / 2, -h / 2 - 4, w, h + 8);
  // 枠
  ctx.strokeStyle = selected ? "#2f579b" : "#5aa9c8";
  ctx.lineWidth = selected ? 2.5 : 1.5;
  ctx.strokeRect(-w / 2, -h / 2, w, h);
  // 中央のガラス線
  ctx.beginPath();
  ctx.moveTo(-w / 2, 0); ctx.lineTo(w / 2, 0);
  ctx.stroke();
}

// 階段: 枠 + 段板の線 + 上り方向の矢印 (ローカル座標, w×h はpx)
function drawStairs(w, h, selected) {
  ctx.fillStyle = "#efece4";
  ctx.strokeStyle = selected ? "#2c3e50" : "#7a8694";
  ctx.lineWidth = selected ? 2.5 : 1.5;
  ctx.beginPath(); ctx.rect(-w / 2, -h / 2, w, h); ctx.fill(); ctx.stroke();
  const along = Math.abs(w) >= Math.abs(h); // 長辺方向に上り、段板は短辺に平行
  const n = 10;
  ctx.lineWidth = 1; ctx.strokeStyle = "#9aa1aa"; ctx.beginPath();
  for (let k = 1; k < n; k++) {
    if (along) { const x = -w / 2 + (w * k) / n; ctx.moveTo(x, -h / 2); ctx.lineTo(x, h / 2); }
    else { const y = -h / 2 + (h * k) / n; ctx.moveTo(-w / 2, y); ctx.lineTo(w / 2, y); }
  }
  ctx.stroke();
  // 上り矢印
  ctx.strokeStyle = selected ? "#2c3e50" : "#5a6470"; ctx.lineWidth = 1.5; ctx.beginPath();
  if (along) {
    ctx.moveTo(-w / 2 + 5, 0); ctx.lineTo(w / 2 - 5, 0);
    ctx.moveTo(w / 2 - 5, 0); ctx.lineTo(w / 2 - 12, -5);
    ctx.moveTo(w / 2 - 5, 0); ctx.lineTo(w / 2 - 12, 5);
  } else {
    ctx.moveTo(0, h / 2 - 5); ctx.lineTo(0, -h / 2 + 5);
    ctx.moveTo(0, -h / 2 + 5); ctx.lineTo(-5, -h / 2 + 12);
    ctx.moveTo(0, -h / 2 + 5); ctx.lineTo(5, -h / 2 + 12);
  }
  ctx.stroke();
}

// エアコン: 角丸の細長い室内機 + ルーバー線
function drawAircon(w, h, selected) {
  roundRectPath(-w / 2, -h / 2, w, h, Math.min(8, h * 0.35));
  ctx.fillStyle = "#eef1f4";
  ctx.strokeStyle = selected ? "#2c3e50" : "#8a939c";
  ctx.lineWidth = selected ? 2 : 1.3;
  ctx.fill(); ctx.stroke();
  ctx.strokeStyle = "#aeb8c0"; ctx.lineWidth = 1; ctx.beginPath();
  for (let i = 1; i <= 2; i++) { const y = -h / 2 + (h * i) / 3; ctx.moveTo(-w / 2 + 3, y); ctx.lineTo(w / 2 - 3, y); }
  ctx.stroke();
}

// 車 (上面図): タイヤ + 角丸ボディ + ルーフ + フロントガラス線
function drawCar(w, h, selected) {
  const stroke = selected ? "#2c3e50" : "#7a8694";
  const bodyW = w * 0.86;
  // タイヤ (四隅、車体の外側に少し出る)
  ctx.fillStyle = "#4f5862";
  const tw = w * 0.1, tl = h * 0.18, tr = Math.min(tw, tl) * 0.3;
  for (const sx of [-1, 1]) for (const sy of [-1, 1]) {
    const cx = sx * (w / 2 - tw / 2), cy = sy * (h * 0.3);
    roundRectPath(cx - tw / 2, cy - tl / 2, tw, tl, tr); ctx.fill();
  }
  // ボディ
  roundRectPath(-bodyW / 2, -h / 2, bodyW, h, Math.min(bodyW, h) * 0.22);
  ctx.fillStyle = "#dbe2ea"; ctx.strokeStyle = stroke; ctx.lineWidth = selected ? 2 : 1.3;
  ctx.fill(); ctx.stroke();
  // ルーフ (キャビン)
  const cw = bodyW * 0.74, cl = h * 0.42, cy = h * 0.04;
  roundRectPath(-cw / 2, -cl / 2 + cy, cw, cl, Math.min(cw, cl) * 0.18);
  ctx.fillStyle = "#aebccd"; ctx.fill(); ctx.stroke();
  // フロントガラス線 (前方)
  ctx.beginPath();
  ctx.moveTo(-cw / 2, -cl / 2 + cy); ctx.lineTo(cw / 2, -cl / 2 + cy);
  ctx.stroke();
}

// 水栓: 円 + 蛇口の突起
function drawFaucet(w, h, selected) {
  const r = Math.min(w, h) * 0.4;
  ctx.fillStyle = "#dbe7ee";
  ctx.strokeStyle = selected ? "#2c3e50" : "#5a7e8c";
  ctx.lineWidth = selected ? 2 : 1.3;
  ctx.beginPath(); ctx.arc(0, 0, r, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(0, -r * 1.7); ctx.stroke();
}

// プロジェクタースクリーン: 背面にローラー、前面(投影面)を太線で強調
function drawScreen(w, h, selected) {
  ctx.fillStyle = "#ffffff";
  ctx.strokeStyle = selected ? "#2c3e50" : "#8a939c";
  ctx.lineWidth = selected ? 2 : 1.2;
  ctx.fillRect(-w / 2, -h / 2, w, h);
  ctx.strokeRect(-w / 2, -h / 2, w, h);
  // ローラー (背面)
  ctx.fillStyle = "#9aa1aa";
  ctx.fillRect(-w / 2, -h / 2, w, Math.min(h * 0.35, 5));
  // 投影面 (前面) を太線で
  ctx.strokeStyle = selected ? "#2c3e50" : "#3d6cb9";
  ctx.lineWidth = 2.5;
  ctx.beginPath(); ctx.moveTo(-w / 2, h / 2); ctx.lineTo(w / 2, h / 2); ctx.stroke();
}

// コンセント: 円 + 上に伸びる2本線 (JIS風の記号)
function drawOutlet(w, h, selected) {
  const r = Math.min(w, h) * 0.42;
  ctx.fillStyle = "#fff";
  ctx.strokeStyle = selected ? "#2c3e50" : "#a07a00";
  ctx.lineWidth = selected ? 2 : 1.5;
  ctx.beginPath(); ctx.arc(0, 0, r, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(-r * 0.4, -r); ctx.lineTo(-r * 0.4, -r * 1.8);
  ctx.moveTo(r * 0.4, -r); ctx.lineTo(r * 0.4, -r * 1.8);
  ctx.stroke();
}

// 吹き抜け: 塗りつぶさず点線枠 + 対角線(×)で「下階に開放」を表現
function drawVoid(w, h, selected) {
  ctx.strokeStyle = selected ? "#2f579b" : "#9aa1aa";
  ctx.lineWidth = selected ? 2 : 1.2;
  ctx.setLineDash([6, 4]);
  ctx.strokeRect(-w / 2, -h / 2, w, h);
  ctx.setLineDash([]);
  ctx.beginPath();
  ctx.moveTo(-w / 2, -h / 2); ctx.lineTo(w / 2, h / 2);
  ctx.moveTo(w / 2, -h / 2); ctx.lineTo(-w / 2, h / 2);
  ctx.stroke();
}

// ===== ヒットテスト =====
function itemAt(wx, wy) {
  for (let i = state.items.length - 1; i >= 0; i--) {
    const it = state.items[i];
    const dim = itemDims(it);
    if (Math.abs(wx - it.x) <= dim.w / 2 && Math.abs(wy - it.y) <= dim.d / 2) return it;
  }
  return null;
}
// ドラッグ中の矩形(w×d, 左上x,y)を他のすべての長方形の辺へ吸着。
// excludeSet に入っている長方形は対象外 (自分自身や同じ部屋の仲間)。
function snapEdges(excludeSet, w, d, x, y) {
  const thr = 20 / sc(); // 画面20px相当をmmへ
  const left = x, right = x + w, top = y, bottom = y + d;
  let bestX = { d: thr, v: x }, bestY = { d: thr, v: y };
  const tryX = (cur, from, to) => { const dd = Math.abs(cur - from); if (dd < bestX.d) bestX = { d: dd, v: to }; };
  const tryY = (cur, from, to) => { const dd = Math.abs(cur - from); if (dd < bestY.d) bestY = { d: dd, v: to }; };
  for (const room of state.rooms) {
    for (const t of room.rects) {
      if (excludeSet.has(t)) continue;
      const oL = t.x, oR = t.x + t.w, oT = t.y, oB = t.y + t.d;
      tryX(right, oL, oL - w); tryX(left, oR, oR); tryX(left, oL, oL); tryX(right, oR, oR - w);
      tryY(bottom, oT, oT - d); tryY(top, oB, oB); tryY(top, oT, oT); tryY(bottom, oB, oB - d);
    }
  }
  return { x: bestX.v, y: bestY.v };
}

function roomAt(wx, wy) {
  for (let i = state.rooms.length - 1; i >= 0; i--) {
    if (pointInRoom(state.rooms[i], wx, wy)) return state.rooms[i];
  }
  return null;
}

// ===== 選択 (複数選択対応) =====
function isRoomObj(o) { return state.rooms.includes(o); }
function isSelected(o) { return state.sel.includes(o); }
// 単一選択のときだけ部屋/家具を返す (プロパティ編集用)
function selRoom() { return state.sel.length === 1 && isRoomObj(state.sel[0]) ? state.sel[0] : null; }
function selItem() { return state.sel.length === 1 && state.items.includes(state.sel[0]) ? state.sel[0] : null; }
function selRect() { const r = selRoom(); return r ? (r.rects[state.rectIdx] || null) : null; }
function roomHintText(r) { return `全体 約 ${tatami(r).toFixed(1)} 帖 / 長方形 ${r.rects.length}個`; }

function setSelection(objs, rectIdx = 0) {
  state.sel = objs.slice();
  state.rectIdx = rectIdx;
  refreshPanel();
  draw();
}
function clearSelection() { setSelection([]); }
function toggleInSelection(o) {
  const i = state.sel.indexOf(o);
  if (i >= 0) state.sel.splice(i, 1); else state.sel.push(o);
  state.rectIdx = 0;
  refreshPanel(); draw();
}

function refreshPanel() {
  const room = selRoom(), item = selItem(), n = state.sel.length;
  $("roomPanel").hidden = !room;
  $("selPanel").hidden = !item;
  if (room) {
    if (!room.rects[state.rectIdx]) state.rectIdx = 0;
    const t = room.rects[state.rectIdx];
    $("rName").value = room.name; $("rType").value = room.type || "room";
    $("rW").value = t.w; $("rD").value = t.d; $("rX").value = t.x; $("rY").value = t.y;
    $("roomHint").textContent = roomHintText(room);
    $("rDelRect").disabled = room.rects.length <= 1;
    $("rBathDir").hidden = !(room.type === "bath" || room.type === "stairs");
  }
  if (item) {
    $("pName").value = item.name; $("pW").value = item.w; $("pD").value = item.d;
    $("pColor").value = item.color;
  }
  if (n === 0) { $("noSel").hidden = false; $("noSel").textContent = "家具または部屋を選んでください"; }
  else if (n > 1) { $("noSel").hidden = false; $("noSel").textContent = `${n}個を選択中（ドラッグで一緒に移動 / Delで削除）`; }
  else { $("noSel").hidden = true; }
  $("propsTitle").textContent = n > 1 ? `${n}個を選択中` : room ? "選択中の部屋" : item ? "選択中の家具" : "プロパティ";
}

function tatami(r) { return roomArea(r) / 1e6 / 1.62; }

// ===== 部屋: 追加/複製/削除 =====
function addRoom(opt = {}) {
  const bb = roomsBBox();
  const type = opt.type || "room";
  const sameCount = state.rooms.filter(r => (r.type || "room") === type).length + 1;
  const defW = { balcony: 3640, void: 2730, wic: 1800, stairs: 900, storage: 1800, bath: 1600, lawn: 3640, porch: 1820, parking: 2500, bicycle: 2000 }[type] || 2730;
  const defD = { balcony: 1000, void: 2730, wic: 1800, stairs: 1800, storage: 1800, bath: 1600, lawn: 2730, porch: 1365, parking: 5000, bicycle: 1500 }[type] || 2730;
  const baseName = { balcony: "ベランダ", void: "吹き抜け", wic: "WIC", stairs: "階段", storage: "物置", bath: "お風呂", lawn: "芝生", porch: "ポーチ", parking: "駐車場", bicycle: "駐輪場" }[type] || "部屋";
  const w = opt.w || defW;
  const d = opt.d || defD;
  const x = opt.x != null ? opt.x : (state.rooms.length ? bb.x + bb.w + state.grid : 0);
  const y = opt.y != null ? opt.y : (state.rooms.length ? bb.y : 0);
  const r = {
    id: nextId++, type,
    name: opt.name || `${baseName}${sameCount}`,
    rects: [{ x, y, w, d }],
  };
  state.rooms.push(r);
  setSelection([r], 0);
  fitView(); save();
}
$("addSpace").onclick = () => addRoom({ type: $("addType").value });
$("rBathDir").onclick = rotateRoomDir;

// 選択中の部屋に長方形を追加 (bboxの右隣に接して配置 → L字/凸型に)
$("rAddRect").onclick = () => {
  const r = selRoom(); if (!r) return;
  const bb = roomBBox(r);
  r.rects.push({ x: bb.x + bb.w, y: bb.y, w: 1820, d: 1820 });
  setSelection([r], r.rects.length - 1);
  save(); draw();
};
$("rDelRect").onclick = () => {
  const r = selRoom(); if (!r || r.rects.length <= 1) return;
  r.rects.splice(state.rectIdx, 1);
  setSelection([r], 0);
  save(); draw();
};

$("rDupe").onclick = () => {
  const r = selRoom(); if (!r) return;
  const copy = { ...r, id: nextId++, name: r.name + "(複製)", rects: r.rects.map(t => ({ x: t.x + state.grid, y: t.y + state.grid, w: t.w, d: t.d })) };
  state.rooms.push(copy); setSelection([copy], 0); save(); draw();
};
$("rDel").onclick = () => {
  const r = selRoom(); if (!r) return;
  if (!confirm(`「${r.name}」を削除しますか？(中の家具は残ります)`)) return;
  state.rooms = state.rooms.filter(x => x.id !== r.id);
  clearSelection(); save(); draw();
};
$("rName").oninput = e => { const r = selRoom(); if (r) { r.name = e.target.value; save(); draw(); } };
$("rType").onchange = e => { const r = selRoom(); if (r) { r.type = e.target.value; save(); draw(); } };
$("rW").oninput = e => { const r = selRoom(), t = selRect(); if (t) { t.w = Math.max(300, +e.target.value || t.w); $("roomHint").textContent = roomHintText(r); save(); draw(); } };
$("rD").oninput = e => { const r = selRoom(), t = selRect(); if (t) { t.d = Math.max(300, +e.target.value || t.d); $("roomHint").textContent = roomHintText(r); save(); draw(); } };
$("rX").oninput = e => { const t = selRect(); if (t) { t.x = +e.target.value || 0; save(); draw(); } };
$("rY").oninput = e => { const t = selRect(); if (t) { t.y = +e.target.value || 0; save(); draw(); } };

// ===== 家具: 追加 =====
function addItem(preset) {
  const bb = roomsBBox();
  const it = {
    id: nextId++, name: preset.name,
    x: bb.x + bb.w / 2, y: bb.y + bb.d / 2,
    w: preset.w, d: preset.d, rot: 0, color: preset.color, type: preset.type || "furniture",
  };
  state.items.push(it);
  setSelection([it]);
  save();
}

// ===== マウス操作 =====
// 操作モデル: ドラッグでは即移動しない。
//  ・オブジェクト上をクリック → 単一選択 (Shiftで追加/解除)
//  ・選択済みオブジェクトをドラッグ → 選択中をまとめて移動
//  ・空き領域をドラッグ → 範囲選択(ラバーバンド)
//  ・右/中ドラッグ → 画面移動
let groupDrag = null; // まとめて移動
let band = null;      // 範囲選択
let pan = null;
let measureMode = false, measuring = false, measure = null; // 計測(ものさし)

$("measure").onclick = () => {
  measureMode = !measureMode;
  $("measure").classList.toggle("on", measureMode);
  cv.style.cursor = measureMode ? "crosshair" : "";
  if (!measureMode) measure = null;
  draw();
};

cv.addEventListener("contextmenu", e => e.preventDefault());

// 選択中オブジェクトのまとめ移動を開始
function startGroupDrag(w) {
  // 明示的に選択したものだけを動かす (上に乗っているだけの物は動かさない)
  const items = [], rects = [];
  for (const o of state.sel) {
    if (state.items.includes(o)) items.push({ ref: o, ox: o.x, oy: o.y });
    else if (isRoomObj(o)) for (const t of o.rects) rects.push({ ref: t, ox: t.x, oy: t.y });
  }
  // 移動中の長方形のbbox (辺吸着の基準) と、吸着対象から外す集合
  let bb = null;
  if (rects.length) {
    let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
    for (const m of rects) { const t = m.ref; minX = Math.min(minX, t.x); minY = Math.min(minY, t.y); maxX = Math.max(maxX, t.x + t.w); maxY = Math.max(maxY, t.y + t.d); }
    bb = { x: minX, y: minY, w: maxX - minX, d: maxY - minY };
  }
  groupDrag = { startX: w.x, startY: w.y, items, rects, bb, exclude: new Set(rects.map(m => m.ref)) };
}

// 単一部屋の中の1つの長方形だけを動かす (形の調整用、Alt+ドラッグ)
function startRectDrag(room, ri, w) {
  const t = room.rects[ri];
  groupDrag = {
    startX: w.x, startY: w.y,
    items: [], rects: [{ ref: t, ox: t.x, oy: t.y }],
    bb: { x: t.x, y: t.y, w: t.w, d: t.d }, exclude: new Set([t]),
  };
  state.rectIdx = ri; refreshPanel();
}

cv.addEventListener("mousedown", e => {
  const rect = cv.getBoundingClientRect();
  const sx = e.clientX - rect.left, sy = e.clientY - rect.top;
  if (e.button === 2 || e.button === 1) {
    pan = { sx, sy, ox: state.offset.x, oy: state.offset.y };
    return;
  }
  if (measureMode) {
    const m = screenToWorld(sx, sy);
    measure = { a: { x: m.x, y: m.y }, b: { x: m.x, y: m.y } };
    measuring = true; draw(); return;
  }
  const w = screenToWorld(sx, sy);
  const obj = itemAt(w.x, w.y) || roomAt(w.x, w.y);
  if (obj) {
    if (e.shiftKey) { toggleInSelection(obj); return; }
    if (isSelected(obj)) {
      // Alt+ドラッグ: 単一部屋の1長方形だけ移動 (形の調整)
      if (e.altKey && isRoomObj(obj) && state.sel.length === 1) {
        const ri = rectIndexAt(obj, w.x, w.y);
        if (ri >= 0) { startRectDrag(obj, ri, w); return; }
      }
      startGroupDrag(w);          // 選択済み → まとめて移動
    } else {
      const idx = isRoomObj(obj) ? Math.max(0, rectIndexAt(obj, w.x, w.y)) : 0;
      setSelection([obj], idx);   // 未選択 → 選択のみ (移動はしない)
    }
    return;
  }
  // 空き領域 → 範囲選択
  band = { x0: w.x, y0: w.y, x1: w.x, y1: w.y, add: e.shiftKey, base: state.sel.slice() };
});

window.addEventListener("mousemove", e => {
  const rect = cv.getBoundingClientRect();
  const sx = e.clientX - rect.left, sy = e.clientY - rect.top;
  if (pan) {
    state.offset.x = pan.ox + (sx - pan.sx);
    state.offset.y = pan.oy + (sy - pan.sy);
    draw(); return;
  }
  if (measuring) {
    const m = screenToWorld(sx, sy);
    measure.b = { x: m.x, y: m.y };
    draw(); return;
  }
  const snapOn = $("snap").checked;
  const g = 10; // 1cm刻み
  if (groupDrag) {
    const w = screenToWorld(sx, sy);
    let dx = w.x - groupDrag.startX, dy = w.y - groupDrag.startY;
    if (groupDrag.bb) {
      // 移動中の長方形を他の長方形の辺へ吸着 (グリッドより優先)
      let nbx = groupDrag.bb.x + dx, nby = groupDrag.bb.y + dy;
      const snapped = snapEdges(groupDrag.exclude, groupDrag.bb.w, groupDrag.bb.d, nbx, nby);
      if (snapped.x !== nbx) nbx = snapped.x; else if (snapOn) nbx = Math.round(nbx / g) * g;
      if (snapped.y !== nby) nby = snapped.y; else if (snapOn) nby = Math.round(nby / g) * g;
      dx = nbx - groupDrag.bb.x; dy = nby - groupDrag.bb.y;
    } else if (snapOn) {
      dx = Math.round(dx / g) * g; dy = Math.round(dy / g) * g;
    }
    for (const m of groupDrag.items) { m.ref.x = m.ox + dx; m.ref.y = m.oy + dy; }
    for (const m of groupDrag.rects) { m.ref.x = m.ox + dx; m.ref.y = m.oy + dy; }
    const t = selRect(); if (t) { $("rX").value = Math.round(t.x); $("rY").value = Math.round(t.y); }
    draw(); return;
  }
  if (band) {
    const w = screenToWorld(sx, sy);
    band.x1 = w.x; band.y1 = w.y;
    draw(); drawBand(); return;
  }
});

window.addEventListener("mouseup", () => {
  if (groupDrag) save();
  if (band) finishBand();
  groupDrag = null; band = null; pan = null; measuring = false;
});

function drawBand() {
  if (!band) return;
  const a = worldToScreen(band.x0, band.y0), b = worldToScreen(band.x1, band.y1);
  const x = Math.min(a.x, b.x), y = Math.min(a.y, b.y), w = Math.abs(a.x - b.x), h = Math.abs(a.y - b.y);
  ctx.save();
  ctx.strokeStyle = "#2f579b"; ctx.fillStyle = "rgba(47,87,155,.08)"; ctx.lineWidth = 1; ctx.setLineDash([5, 3]);
  ctx.fillRect(x, y, w, h); ctx.strokeRect(x, y, w, h);
  ctx.restore();
}

function finishBand() {
  const minx = Math.min(band.x0, band.x1), maxx = Math.max(band.x0, band.x1);
  const miny = Math.min(band.y0, band.y1), maxy = Math.max(band.y0, band.y1);
  const moved = Math.hypot(band.x1 - band.x0, band.y1 - band.y0);
  if (moved < 4 / sc()) { // 実質クリック
    if (!band.add) clearSelection();
    return;
  }
  const hits = [];
  for (const it of state.items) if (it.x >= minx && it.x <= maxx && it.y >= miny && it.y <= maxy) hits.push(it);
  for (const r of state.rooms) {
    const b = roomBBox(r), cx = b.x + b.w / 2, cy = b.y + b.d / 2;
    if (cx >= minx && cx <= maxx && cy >= miny && cy <= maxy) hits.push(r);
  }
  const result = band.add ? Array.from(new Set([...band.base, ...hits])) : hits;
  setSelection(result);
}

// ホイールズーム (カーソル中心)
cv.addEventListener("wheel", e => {
  e.preventDefault();
  const rect = cv.getBoundingClientRect();
  const sx = e.clientX - rect.left, sy = e.clientY - rect.top;
  const before = screenToWorld(sx, sy);
  state.zoom = Math.min(8, Math.max(0.2, state.zoom * (e.deltaY < 0 ? 1.1 : 1 / 1.1)));
  const after = screenToWorld(sx, sy);
  state.offset.x += (after.x - before.x) * sc();
  state.offset.y += (after.y - before.y) * sc();
  updateZoomLabel(); draw();
}, { passive: false });

// ===== キーボード =====
window.addEventListener("keydown", e => {
  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "z") { e.preventDefault(); e.shiftKey ? redo() : undo(); return; }
  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "y") { e.preventDefault(); redo(); return; }
  if (e.key === "Escape" && measureMode) { $("measure").onclick(); return; }
  if (["INPUT", "TEXTAREA"].includes(document.activeElement.tagName)) return;
  if (e.key === "Delete" || e.key === "Backspace") {
    if (state.sel.length) { e.preventDefault(); deleteSelection(); }
  }
  if (e.key.toLowerCase() === "r") {
    if (selItem()) rotateSel();
    else rotateRoomDir();
  }
});

function rotateRoomDir() {
  const r = selRoom();
  if (!r) return;
  if (r.type === "bath") { r.bathDir = ((r.bathDir || 0) + 1) % 4; save(); draw(); }
  else if (r.type === "stairs") {
    const cur = r.stairDir != null ? r.stairDir : (r.rects[0].w >= r.rects[0].d ? 0 : 3);
    r.stairDir = (cur + 1) % 4; save(); draw();
  }
}

// ===== 家具プロパティ操作 =====
function rotateSel() { const it = selItem(); if (!it) return; it.rot = (it.rot + 90) % 360; save(); draw(); }
// 選択中をすべて削除 (家具・部屋)
function deleteSelection() {
  if (!state.sel.length) return;
  state.items = state.items.filter(o => !state.sel.includes(o));
  state.rooms = state.rooms.filter(o => !state.sel.includes(o));
  clearSelection(); save();
}
// 重なり順 (家具・部屋どちらにも対応)
function bringToFront() {
  const it = selItem();
  if (it) { state.items = state.items.filter(x => x !== it); state.items.push(it); save(); draw(); return; }
  const r = selRoom();
  if (r) { state.rooms = state.rooms.filter(x => x !== r); state.rooms.push(r); save(); draw(); }
}
function sendToBack() {
  const it = selItem();
  if (it) { state.items = state.items.filter(x => x !== it); state.items.unshift(it); save(); draw(); return; }
  const r = selRoom();
  if (r) { state.rooms = state.rooms.filter(x => x !== r); state.rooms.unshift(r); save(); draw(); }
}
$("toFront").onclick = bringToFront;
$("toBack").onclick = sendToBack;
$("rToFront").onclick = bringToFront;
$("rToBack").onclick = sendToBack;

$("rotate").onclick = rotateSel;
$("del").onclick = deleteSelection;
$("dupe").onclick = () => {
  const it = selItem(); if (!it) return;
  const copy = { ...it, id: nextId++, x: it.x + state.grid / 2, y: it.y + state.grid / 2 };
  state.items.push(copy); setSelection([copy]); save();
};
$("pName").oninput = e => { const it = selItem(); if (it) { it.name = e.target.value; save(); draw(); } };
$("pW").oninput = e => { const it = selItem(); if (it) { it.w = +e.target.value || it.w; save(); draw(); } };
$("pD").oninput = e => { const it = selItem(); if (it) { it.d = +e.target.value || it.d; save(); draw(); } };
$("pColor").oninput = e => { const it = selItem(); if (it) { it.color = e.target.value; save(); draw(); } };

// ===== ツールバー =====
$("undo").onclick = undo;
$("redo").onclick = redo;
$("fit").onclick = fitView;
$("showGrid").onchange = draw;
$("zoomIn").onclick = () => { state.zoom = Math.min(8, state.zoom * 1.2); updateZoomLabel(); draw(); };
$("zoomOut").onclick = () => { state.zoom = Math.max(0.2, state.zoom / 1.2); updateZoomLabel(); draw(); };
$("clear").onclick = () => {
  if (confirm("配置した家具をすべて消去しますか？(部屋は残ります)")) { state.items = []; clearSelection(); save(); draw(); }
};
function updateZoomLabel() { $("zoomLabel").textContent = Math.round(state.zoom * 100) + "%"; }

// ===== 保存/読込 + 取り消し履歴 =====
const LS_KEY = "madori-plan-v2";
const undoStack = [], redoStack = [];
function snapshot() { return JSON.stringify({ rooms: state.rooms, items: state.items, nextId }); }
function persist() { localStorage.setItem(LS_KEY, snapshot()); }

// 変更を確定: 履歴に積んでlocalStorageへ
function save() {
  undoStack.push(snapshot());
  if (undoStack.length > 100) undoStack.shift();
  redoStack.length = 0;
  persist();
}

function applySnapshot(str) {
  const d = JSON.parse(str);
  state.rooms = d.rooms; state.items = d.items; nextId = d.nextId;
}
function fixSelection() {
  // applySnapshotでオブジェクトが作り直されるため、idで選択を貼り直す
  const ids = state.sel.map(o => o.id);
  const byId = o => ids.includes(o.id);
  state.sel = [...state.items.filter(byId), ...state.rooms.filter(byId)];
  refreshPanel();
}
function undo() {
  if (undoStack.length < 2) return;       // 先頭は初期状態
  redoStack.push(undoStack.pop());        // 現在の状態をredoへ
  applySnapshot(undoStack[undoStack.length - 1]);
  fixSelection(); persist(); draw();
}
function redo() {
  if (!redoStack.length) return;
  const s = redoStack.pop();
  undoStack.push(s); applySnapshot(s);
  fixSelection(); persist(); draw();
}
function normalizeRoom(r) {
  // 旧形式 (x,y,w,d) を rects 配列へ変換
  if (!Array.isArray(r.rects)) {
    r.rects = [{ x: r.x || 0, y: r.y || 0, w: r.w || 2730, d: r.d || 2730 }];
    delete r.x; delete r.y; delete r.w; delete r.d;
  }
  if (!r.type) r.type = "room";
  return r;
}
function adopt(d) {
  if (Array.isArray(d.rooms)) {
    state.rooms = d.rooms.map(normalizeRoom);
  } else if (d.room) {
    state.rooms = [{ id: nextId++, name: "部屋1", type: "room", rects: [{ x: 0, y: 0, w: d.room.w, d: d.room.d }] }];
  }
  state.items = Array.isArray(d.items) ? d.items : [];
  // 旧バージョンで家具だった 吹き抜け / 階段 / WIC を部屋タイプへ移行 (中心座標→左上)
  const NAME = { void: "吹き抜け", stairs: "階段", wic: "WIC" };
  const migrated = [];
  state.items = state.items.filter(it => {
    const toType = it.type === "void" ? "void" : it.type === "stairs" ? "stairs" : (it.name === "WIC" ? "wic" : null);
    if (!toType) return true;
    migrated.push({
      id: it.id, type: toType, name: NAME[toType],
      rects: [{ x: it.x - it.w / 2, y: it.y - it.d / 2, w: it.w, d: it.d }],
    });
    return false;
  });
  state.rooms.push(...migrated);
  const ids = [...state.rooms, ...state.items].map(o => o.id || 0);
  nextId = Math.max(d.nextId || 0, 0, ...ids) + 1;
}
function load() {
  let raw = localStorage.getItem(LS_KEY) || localStorage.getItem("madori-plan-v1");
  if (!raw) return false;
  try { adopt(JSON.parse(raw)); return true; } catch (e) { console.warn(e); return false; }
}

$("exportJson").onclick = () => {
  const blob = new Blob([JSON.stringify({ rooms: state.rooms, items: state.items }, null, 2)], { type: "application/json" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob); a.download = "madori.json"; a.click();
};
$("loadExample").onclick = () => {
  if (!confirm("現在の内容を例の間取りで置き換えます。よろしいですか？")) return;
  adopt(JSON.parse(JSON.stringify(EXAMPLE))); // 複製して読み込み
  clearSelection(); fitView(); save();
};
$("importJson").onclick = () => $("fileInput").click();
$("fileInput").onchange = e => {
  const file = e.target.files[0]; if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try { adopt(JSON.parse(reader.result)); clearSelection(); fitView(); save(); }
    catch (err) { alert("読み込めませんでした: " + err.message); }
  };
  reader.readAsText(file); e.target.value = "";
};
$("exportPng").onclick = () => {
  clearSelection(); draw();
  const a = document.createElement("a");
  a.href = cv.toDataURL("image/png"); a.download = "madori.png"; a.click();
};

// ===== パレット生成 =====
function buildPalette() {
  const root = $("palette");
  for (const group of PRESETS) {
    const title = document.createElement("div");
    title.className = "cat-title"; title.textContent = group.cat;
    root.appendChild(title);
    for (const p of group.items) {
      const btn = document.createElement("button");
      btn.className = "item";
      btn.innerHTML = `<span class="swatch" style="background:${p.color}"></span>${p.name}<br><span class="sz">${p.w}×${p.d}mm</span>`;
      btn.onclick = () => addItem(p);
      root.appendChild(btn);
    }
  }
}

// ===== 電卓 (長さ計算) =====
// + - * / ( ) のみを扱う簡易パーサ (evalは使わない)
function evalExpr(str) {
  const s = str.replace(/×/g, "*").replace(/÷/g, "/").replace(/[^0-9.+\-*/() ]/g, "");
  let i = 0;
  const skip = () => { while (s[i] === " ") i++; };
  function expr() { let v = term(); skip(); while (s[i] === "+" || s[i] === "-") { const op = s[i++]; const r = term(); v = op === "+" ? v + r : v - r; skip(); } return v; }
  function term() { let v = factor(); skip(); while (s[i] === "*" || s[i] === "/") { const op = s[i++]; const r = factor(); v = op === "*" ? v * r : v / r; skip(); } return v; }
  function factor() {
    skip();
    if (s[i] === "(") { i++; const v = expr(); skip(); if (s[i] === ")") i++; return v; }
    if (s[i] === "-") { i++; return -factor(); }
    if (s[i] === "+") { i++; return factor(); }
    let num = "";
    while (i < s.length && /[0-9.]/.test(s[i])) num += s[i++];
    if (num === "") throw new Error("式が不正です");
    return parseFloat(num);
  }
  const result = expr(); skip();
  if (i < s.length) throw new Error("式が不正です");
  if (!isFinite(result)) throw new Error("計算できません");
  return result;
}

let calcResult = null;
function runCalc() {
  const inp = $("calcInput").value.trim();
  const out = $("calcResult");
  if (!inp) { calcResult = null; out.textContent = "＝"; out.classList.remove("err"); return; }
  try {
    const v = evalExpr(inp);
    calcResult = v;
    out.classList.remove("err");
    out.textContent = "= " + (Number.isInteger(v) ? v : +v.toFixed(2)) + " mm";
  } catch (e) {
    calcResult = null;
    out.classList.add("err");
    out.textContent = e.message;
  }
}
$("calcInput").addEventListener("input", runCalc);
$("calcInput").addEventListener("keydown", e => { if (e.key === "Enter") { e.preventDefault(); runCalc(); } });

function buildCalcKeys() {
  const keys = [
    ["7", ""], ["8", ""], ["9", ""], ["÷", "op"],
    ["4", ""], ["5", ""], ["6", ""], ["×", "op"],
    ["1", ""], ["2", ""], ["3", ""], ["−", "op"],
    ["0", ""], [".", ""], [")", ""], ["+", "op"],
    ["(", ""], ["C", "clr"], ["⌫", "clr"], ["=", "eq"],
  ];
  const root = $("calcKeys");
  for (const [label, cls] of keys) {
    const b = document.createElement("button");
    b.textContent = label; if (cls) b.className = cls;
    b.onclick = () => {
      const inp = $("calcInput");
      if (label === "C") inp.value = "";
      else if (label === "⌫") inp.value = inp.value.slice(0, -1);
      else if (label === "=") { runCalc(); return; }
      else inp.value += ({ "×": "*", "÷": "/", "−": "-" }[label] || label);
      runCalc(); inp.focus();
    };
    root.appendChild(b);
  }
}

function applyCalc(dim) {
  if (calcResult == null) { alert("先に計算してください"); return; }
  const val = Math.max(10, Math.round(calcResult));
  if (selItem()) { const el = dim === "w" ? $("pW") : $("pD"); el.value = val; el.oninput({ target: el }); }
  else if (selRect()) { const el = dim === "w" ? $("rW") : $("rD"); el.value = val; el.oninput({ target: el }); }
  else alert("先に家具か部屋(長方形)を選んでください");
}
$("calcToW").onclick = () => applyCalc("w");
$("calcToD").onclick = () => applyCalc("d");

// ===== 初期化 =====
buildPalette();
buildCalcKeys();
if (!load()) {
  adopt(JSON.parse(JSON.stringify(EXAMPLE))); // 初回はサンプル間取りを表示
}
persist(); // 移行結果などを保存し直す
undoStack.push(snapshot()); // 初期状態を履歴の先頭に
refreshPanel();
resize();
fitView();
