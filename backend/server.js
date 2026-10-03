const express = require('express');
<<<<<<< HEAD
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
=======
const cors = require('cors');
const server = express();
const PORT = 3000;

server.use(cors()); 
server.use(express.json()); 

//API MARKET?
const markets = [
    { id: 1, name: "Chợ Hôm Nay", status: "Bình thường", priceIndex: 12500, buyers: 50 },
    { id: 2, name: "Chợ Bến Thành", status: "Đang chạy", priceIndex: 14000, buyers: 120 },
    { id: 3, name: "Chợ Đà Lạt", status: "Bình thường", priceIndex: 11000, buyers: 80 },
    { id: 4, name: "Chợ Hà Nội", status: "Đang chạy", priceIndex: 15000, buyers: 200 },
    { id: 5, name: "Chợ Sài Gòn", status: "Bình thường", priceIndex: 13000, buyers: 150 },
    { id: 6, name: "Chợ Miền Tây", status: "Bình thường", priceIndex: 9000, buyers: 60 },
    { id: 7, name: "Chợ Miền Trung", status: "Đang chạy", priceIndex: 12000, buyers: 90 },
];

server.get('/markets', (req, res) => {
    res.json(markets);
});


server.get('/markets/:id', (req, res) => {
    const marketId = parseInt(req.params.id);
    const market = markets.find(m => m.id === marketId);
    if (!market) return res.status(404).json({ message: "Không tìm thấy chợ này!" });
    res.json(market);
});
// 

//API EVENTS??
let events = [
    { id: 1, title: "Mưa lớn miền Trung", impact: "Rau tăng 30%", active: false },
    { id: 2, title: "KOL review trà sữa", impact: "Trend tăng vọt", active: false },
    { id: 3, title: "Sự kiện bí ẩn", impact: "Chưa rõ", active: false }
];

server.get('/events', (req, res) => {
    res.json(events);
});

server.post('/events/trigger', (req, res) => {
    const { eventId } = req.body;
    const event = events.find(e => e.id === eventId);
    if (!event) return res.status(404).json({ message: "Sự kiện không tồn tại!" });
    event.active = true;
    res.json({ message: `Đã kích hoạt sự kiện: ${event.title}`, event: event });
});
//

//API ANALYSIS???
server.get('/analysis', (req, res) => {
    const chartData = [
        { day: "Ngày 1", price: 12500 }, { day: "Ngày 2", price: 12800 },
        { day: "Ngày 3", price: 12300 }, { day: "Ngày 4", price: 13200 },
        { day: "Ngày 5", price: 13000 }, { day: "Ngày 6", price: 13500 },
        { day: "Ngày 7", price: 13100 }, { day: "Ngày 8", price: 13800 },
        { day: "Ngày 9", price: 13300 }, { day: "Ngày 10", price: 14200 },
    ];
    const ranking = [
        { market: "Chợ Hôm Nay", score: 95 },
        { market: "Chợ Bến Thành", score: 88 },
        { market: "Chợ Hà Nội", score: 82 }
    ];
    res.json({ chartData, ranking, averagePrice: 12500 });
});

//API LICH SU????
let historyLogs = [];

server.post('/history', (req, res) => {
    const newSession = {
        id: Date.now(),
        timestamp: new Date().toISOString(),
        data: req.body,
    };
    historyLogs.push(newSession);
    res.status(201).json({ message: "Đã lưu lịch sử thành công", session: newSession });
});

server.get('/history', (req, res) => {
    res.json(historyLogs);
});
//

server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
>>>>>>> 74c6d2de769fd3fe88fde9f091a3ae21efb75034
});