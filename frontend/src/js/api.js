/* ============================================
 * API WRAPPER — Cầu nối frontend ↔ backend
 * ============================================
 * Khi backend chưa xong: giữ USE_MOCK = true
 * Khi backend xong:     đổi USE_MOCK = false
 * ============================================ */

import { MOCK_MARKETS, MOCK_EVENTS, MOCK_ANALYSIS } from './mock-data.js';

const API_CONFIG = {
  BASE_URL: 'http://localhost:3000/api',
  USE_MOCK: true,  // 👈 ĐỔI THÀNH false KHI BACKEND XONG
};

async function call(endpoint, options = {}) {
  const res = await fetch(API_CONFIG.BASE_URL + endpoint, {
    headers: { 'Content-Type': 'application/json' },
    ...options
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}

/* ===== MARKETS ===== */
export async function getMarkets() {
  if (API_CONFIG.USE_MOCK) return { success: true, data: MOCK_MARKETS };
  return call('/markets');
}

export async function getMarketById(id) {
  if (API_CONFIG.USE_MOCK) {
    return { success: true, data: MOCK_MARKETS.find(m => m.id === id) };
  }
  return call(`/markets/${id}`);
}

/* ===== EVENTS ===== */
export async function getEvents() {
  if (API_CONFIG.USE_MOCK) return { success: true, data: MOCK_EVENTS };
  return call('/events');
}

export async function triggerEvent(eventId, marketId) {
  if (API_CONFIG.USE_MOCK) {
    await new Promise(r => setTimeout(r, 300));
    return { success: true, message: `Đã kích hoạt ${eventId}!` };
  }
  return call('/events/trigger', {
    method: 'POST',
    body: JSON.stringify({ eventId, marketId })
  });
}

/* ===== ANALYSIS ===== */
export async function getAnalysis() {
  if (API_CONFIG.USE_MOCK) return { success: true, data: MOCK_ANALYSIS };
  return call('/analysis');
}

/* ===== HISTORY ===== */
export async function saveHistory(payload) {
  if (API_CONFIG.USE_MOCK) {
    console.log('💾 [MOCK] Save:', payload);
    return { success: true, data: { historyId: 'mock_' + Date.now() } };
  }
  return call('/history', { method: 'POST', body: JSON.stringify(payload) });
}

/* ===== SETTINGS ===== */
export async function getSettings() {
  if (API_CONFIG.USE_MOCK) {
    return {
      success: true,
      data: {
        agents: { tieuThuong: 30, nguoiMua: 50, dauCo: 10 },
        aiLevel: 'basic'
      }
    };
  }
  return call('/settings');
}

export async function updateSettings(payload) {
  if (API_CONFIG.USE_MOCK) {
    console.log('⚙️ [MOCK] Update:', payload);
    return { success: true };
  }
  return call('/settings', { method: 'PUT', body: JSON.stringify(payload) });
}