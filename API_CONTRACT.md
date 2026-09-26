# 🔌 API CONTRACT — Chợ Số

Base URL: `http://localhost:3000/api`

## 📋 1. MARKETS

### GET /api/markets
Lấy danh sách tất cả các chợ.

**Response 200:**
```json
{
  "success": true,
  "data": [
    {
      "id": "rau",
      "name": "Chợ Rau",
      "icon": "🥬",
      "unit": "đ/kg",
      "currentPrice": 20000,
      "previousPrice": 24000,
      "changePct": -16.7,
      "cung": 500,
      "cau": 620,
      "priceHistory": [15000, 16000, 18000, 22000, 19000, 21000, 24000, 20000],
      "topChanges": [
        { "name": "Rau muống", "pct": 32 },
        { "name": "Cà chua", "pct": 18 },
        { "name": "Cải ngọt", "pct": -5 }
      ]
    }
  ]
}