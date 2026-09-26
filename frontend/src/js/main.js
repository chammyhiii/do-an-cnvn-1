/* ============================================
 * MAIN — Helper dùng chung cho mọi trang
 * ============================================ */

/** Hiện toast message */
export function showToast(msg, duration = 3500) {
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = msg;
  document.body.appendChild(toast);

  setTimeout(() => toast.remove(), duration);
}

/** Đánh dấu nav-item active dựa trên URL hiện tại */
export function markActiveNav() {
  const current = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-item').forEach(item => {
    const href = item.getAttribute('href');
    if (href === current) item.classList.add('active');
    else item.classList.remove('active');
  });
}

/** Tạo bong bóng bay lên (dùng trong events) */
export function spawnBubble() {
  const b = document.createElement('div');
  b.className = 'bubble-float';
  b.textContent = '🫧';
  b.style.left = Math.random() * 80 + 10 + '%';
  b.style.bottom = '10%';
  b.style.fontSize = (30 + Math.random() * 30) + 'px';
  document.body.appendChild(b);
  setTimeout(() => b.remove(), 3000);
}

/** Rung màn hình */
export function shakeScreen() {
  document.body.classList.add('shake');
  setTimeout(() => document.body.classList.remove('shake'), 500);
}

/** Toggle switch */
export function bindToggle(el) {
  el.addEventListener('click', () => el.classList.toggle('on'));
}

/** Chip selector */
export function bindChipGroup(selector) {
  document.querySelectorAll(selector + ' .chip').forEach(chip => {
    chip.addEventListener('click', () => {
      chip.parentElement.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
    });
  });
}

/* Auto chạy khi load */
window.addEventListener('DOMContentLoaded', () => {
  markActiveNav();
});