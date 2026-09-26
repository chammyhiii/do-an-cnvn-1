/* ============================================
 * CHART CONFIG — Cấu hình Chart.js dùng chung
 * ============================================ */

const FONT_TICKS = { family: 'Inter', weight: 600 };
const GRID_COLOR = '#F0E4F0';
const TICK_COLOR = '#8B8BA8';

/** Config chung cho line chart */
export const LINE_OPTIONS = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: false },
    tooltip: {
      backgroundColor: '#3A3A5C',
      padding: 12,
      cornerRadius: 12,
      displayColors: false,
      titleFont: { family: 'Nunito', weight: 800 },
      bodyFont: { family: 'Inter', weight: 600 }
    }
  },
  scales: {
    y: {
      grid: { color: GRID_COLOR },
      ticks: {
        color: TICK_COLOR,
        font: FONT_TICKS,
        callback: (v) => {
          if (Math.abs(v) >= 1_000_000) return (v / 1_000_000).toFixed(0) + 'M';
          if (Math.abs(v) >= 1_000) return (v / 1_000).toFixed(0) + 'k';
          return v;
        }
      }
    },
    x: {
      grid: { display: false },
      ticks: { color: TICK_COLOR, font: FONT_TICKS }
    }
  },
  animation: { duration: 600, easing: 'easeOutQuart' }
};

/** Tạo dataset cho line chart */
export function makeLineDataset(data, color) {
  return {
    data,
    borderColor: color,
    backgroundColor: color + '22',
    tension: 0.4,
    fill: true,
    borderWidth: 4,
    pointRadius: 5,
    pointBackgroundColor: color,
    pointBorderColor: '#FFF',
    pointBorderWidth: 2,
    pointHoverRadius: 9
  };
}

/** Labels mặc định */
export const DEFAULT_LABELS = ['T1','T2','T3','T4','T5','T6','T7','T8'];