/* ============================================
 * UTILS — Hàm dùng chung
 * ============================================ */

/** Format số có dấu phẩy: 1234567 → 1,234,567 */
export function formatNumber(n) {
  if (n === null || n === undefined) return '—';
  return n.toLocaleString('vi-VN');
}

/** Format tiền VN: 20000 → 20,000đ */
export function formatMoney(n, unit = 'đ') {
  return formatNumber(n) + unit;
}

/** Format số ngắn: 83500000 → 83.5M */
export function formatShort(n) {
  if (Math.abs(n) >= 1_000_000_000) return (n / 1_000_000_000).toFixed(1) + 'B';
  if (Math.abs(n) >= 1_000_000) return (n / 1_000_000).toFixed(1) + 'M';
  if (Math.abs(n) >= 1_000) return (n / 1_000).toFixed(0) + 'k';
  return n.toString();
}

/** Format %: 0.32 → 32% */
export function formatPercent(n) {
  return (n * 100).toFixed(1) + '%';
}

/** Random số trong khoảng */
export function randomBetween(min, max) {
  return Math.random() * (max - min) + min;
}

/** Debounce */
export function debounce(fn, ms = 300) {
  let t;
  return (...args) => {
    clearTimeout(t);
    t = setTimeout(() => fn(...args), ms);
  };
}

/** Lấy query param từ URL */
export function getQuery(key) {
  return new URLSearchParams(window.location.search).get(key);
}