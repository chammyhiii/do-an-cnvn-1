/* ============================================
 * MOCK DATA — Dùng khi backend chưa xong
 * ============================================ */

export const MOCK_MARKETS = [
  {
    id: 'rau', name: 'Chợ Rau', icon: '🥬', unit: 'đ/kg',
    currentPrice: 20000, previousPrice: 24000, changePct: -16.7,
    cung: 500, cau: 620,
    priceHistory: [15000,16000,18000,22000,19000,21000,24000,20000],
    topChanges: [
      { name: 'Rau muống', pct: 32 },
      { name: 'Cà chua', pct: 18 },
      { name: 'Cải ngọt', pct: -5 }
    ]
  },
  {
    id: 'thit', name: 'Chợ Thịt', icon: '🍖', unit: 'đ/kg',
    currentPrice: 142000, previousPrice: 138000, changePct: 2.9,
    cung: 200, cau: 210,
    priceHistory: [120000,122000,121000,128000,135000,130000,138000,142000],
    topChanges: [
      { name: 'Thịt heo', pct: 12 },
      { name: 'Thịt gà', pct: 8 },
      { name: 'Thịt bò', pct: -2 }
    ]
  },
  {
    id: 'gao', name: 'Chợ Gạo', icon: '🍚', unit: 'đ/kg',
    currentPrice: 19800, previousPrice: 19200, changePct: 3.1,
    cung: 1000, cau: 1000,
    priceHistory: [18000,18000,18500,18200,19000,19500,19200,19800],
    topChanges: [
      { name: 'Gạo ST25', pct: 5 },
      { name: 'Gạo thường', pct: 2 },
      { name: 'Nếp', pct: -1 }
    ]
  },
  {
    id: 'xang', name: 'Cây Xăng', icon: '⛽', unit: 'đ/lít',
    currentPrice: 25500, previousPrice: 24800, changePct: 2.8,
    cung: 300, cau: 350,
    priceHistory: [22000,22500,23000,24000,24500,25000,24800,25500],
    topChanges: [
      { name: 'Xăng RON95', pct: 6 },
      { name: 'Dầu diesel', pct: 4 },
      { name: 'Gas', pct: 3 }
    ]
  },
  {
    id: 'tro', name: 'Nhà trọ', icon: '🏠', unit: 'đ/tháng',
    currentPrice: 3200000, previousPrice: 3100000, changePct: 3.2,
    cung: 100, cau: 180,
    priceHistory: [2500000,2500000,2600000,2700000,2800000,3000000,3100000,3200000],
    topChanges: [
      { name: 'Trọ gần ĐH', pct: 15 },
      { name: 'Trọ xa', pct: 5 },
      { name: 'Chung cư mini', pct: 8 }
    ]
  },
  {
    id: 'vang', name: 'Giá Vàng', icon: '🏆', unit: 'đ/lượng',
    currentPrice: 83500000, previousPrice: 82000000, changePct: 1.8,
    cung: 50, cau: 120,
    priceHistory: [75000000,76000000,76500000,78000000,79000000,81000000,82000000,83500000],
    note: '💡 Vàng là "nơi trú ẩn an toàn" — khi kinh tế bất ổn, ai cũng mua vàng → giá tăng vọt.',
    topChanges: [
      { name: 'Vàng SJC', pct: 11 },
      { name: 'Vàng 9999', pct: 9 },
      { name: 'Vàng nhẫn', pct: 7 }
    ]
  },
  {
    id: 'kimcuong', name: 'Kim cương', icon: '💎', unit: 'triệu/karat',
    currentPrice: 160, previousPrice: 157, changePct: 1.9,
    cung: 30, cau: 35,
    priceHistory: [150,152,153,155,156,158,157,160],
    note: '💡 Kim cương tăng giá chậm nhưng ổn định — thanh khoản thấp, khó bán!',
    topChanges: [
      { name: 'Kim cương 1ct', pct: 3 },
      { name: 'Kim cương 2ct', pct: 5 },
      { name: 'Đá quý khác', pct: -1 }
    ]
  }
];

export const MOCK_EVENTS = [
  { id: 'bubble', name: 'Bong bóng', icon: '🫧', description: 'Giá vượt giá trị thật rồi vỡ' },
  { id: 'crisis', name: 'Khủng hoảng', icon: '💥', description: 'Giá sập, dân bán tháo' },
  { id: 'policy', name: 'Chính sách', icon: '🏛️', description: 'Kéo lãi suất, dân phản ứng' }
];

export const MOCK_ANALYSIS = {
  stats: { totalProfit: 2500000, volatility: 32, hasBubble: true },
  leaderboard: [
    { rank: 1, name: 'Anh Tám', avatar: '🎰', role: 'Đầu cơ', profit: 2500000 },
    { rank: 2, name: 'Cô Hoa', avatar: '👩‍🌾', role: 'Tiểu thương', profit: 1200000 },
    { rank: 3, name: 'Ông Xã', avatar: '🏛️', role: 'Nhà nước', profit: 500000 },
    { rank: 4, name: 'Bà Tư', avatar: '🧑‍🍳', role: 'Người mua', profit: -800000 },
    { rank: 5, name: 'Bác Nông', avatar: '👨‍🌾', role: 'Nông dân', profit: -300000 }
  ],
  lesson: 'Khi ai cũng găm hàng, giá sẽ ảo → người mua cuối cùng chịu thiệt!'
};