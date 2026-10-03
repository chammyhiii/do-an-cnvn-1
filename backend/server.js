const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: '*' },
});

app.use(express.json());

// Lưu trữ trạng thái mô phỏng và cấu hình hệ thống
const game = {
  isRunning: false,
  day: 1,
  session: 'Sáng',
  buyers: 10,
  speed: 1,
};

let settingsData = {
  agentCount: 4,      
  speed: 1.0,         
  autoTrade: true,    
  updateInterval: 1000 
};

// ================= API SETTINGS (Task 6) =================

// 1. GET /settings - Lấy cấu hình hiện tại
app.get('/settings', (req, res) => {
  return res.status(200).json({
    success: true,
    data: settingsData
  });
});

// 2. PUT /settings - Cập nhật cấu hình
app.put('/settings', (req, res) => {
  const { agentCount, speed, autoTrade, updateInterval } = req.body;

  // Validate agentCount
  if (agentCount !== undefined) {
    const count = parseInt(agentCount, 10);
    if (isNaN(count) || count < 1 || count > 10) {
      return res.status(400).json({
        success: false,
        message: 'Số lượng agent (agentCount) phải là số nguyên từ 1 đến 10.'
      });
    }
    settingsData.agentCount = count;
  }

  // Validate speed
  if (speed !== undefined) {
    const spd = parseFloat(speed);
    if (isNaN(spd) || spd < 0.1 || spd > 5.0) {
      return res.status(400).json({
        success: false,
        message: 'Tốc độ (speed) phải nằm trong khoảng từ 0.1 đến 5.0.'
      });
    }
    settingsData.speed = spd;
  }

  if (autoTrade !== undefined) {
    settingsData.autoTrade = Boolean(autoTrade);
  }

  if (updateInterval !== undefined) {
    const interval = parseInt(updateInterval, 10);
    if (!isNaN(interval) && interval >= 100) {
      settingsData.updateInterval = interval;
    }
  }

  return res.status(200).json({
    success: true,
    message: 'Cập nhật cấu hình thành công',
    data: settingsData
  });
});

// ================= KHỞI CHẠY SERVER =================
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Chợ Số simulation server is running on port ${PORT}`);
});