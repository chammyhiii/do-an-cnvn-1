const API_BASE_URL = 'http://localhost:3000';

// Lấy các element trên DOM
const settingsForm = document.getElementById('settingsForm');
const agentCountInput = document.getElementById('agentCountInput');
const speedInput = document.getElementById('speedInput');
const autoTradeInput = document.getElementById('autoTradeInput');
const saveSettingsBtn = document.getElementById('saveSettingsBtn');

// 1. Hàm gọi API lấy dữ liệu cài đặt từ Backend
async function fetchSettings() {
  try {
    const response = await fetch(`${API_BASE_URL}/settings`);
    if (!response.ok) throw new Error('Không thể tải cài đặt từ máy chủ');
    
    const result = await response.json();
    if (result.success && result.data) {
      // Điền dữ liệu từ Server vào Form
      agentCountInput.value = result.data.agentCount;
      speedInput.value = result.data.speed;
      autoTradeInput.checked = result.data.autoTrade;
    }
  } catch (error) {
    console.error('Lỗi khi nạp cài đặt:', error);
    alert('Lỗi: Không thể kết nối tới Backend Server!');
  }
}

// 2. Bắt sự kiện khi bấm nút Lưu (Submit Form)
settingsForm.addEventListener('submit', async (e) => {
  e.preventDefault(); // Chặn hành vi load lại trang mặc định của form

  // Thu thập dữ liệu từ Form
  const payload = {
    agentCount: parseInt(agentCountInput.value, 10),
    speed: parseFloat(speedInput.value),
    autoTrade: autoTradeInput.checked
  };

  try {
    // Trạng thái chờ
    saveSettingsBtn.disabled = true;
    saveSettingsBtn.innerText = 'Đang lưu...';

    // Gọi API PUT gửi dữ liệu lên Server
    const response = await fetch(`${API_BASE_URL}/settings`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || 'Cập nhật thất bại');
    }

    alert('✅ ' + result.message);
  } catch (error) {
    alert('❌ ' + error.message);
  } finally {
    // Khôi phục trạng thái nút bấm
    saveSettingsBtn.disabled = false;
    saveSettingsBtn.innerText = 'Lưu cấu hình';
  }
});

// Tự động tải dữ liệu ngay khi mở trang
document.addEventListener('DOMContentLoaded', fetchSettings);