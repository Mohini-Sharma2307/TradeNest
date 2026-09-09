# 🚀 TradeNest — Full Stack Stock Trading & Portfolio Management Platform

TradeNest is a full-stack stock trading and portfolio management web application inspired by modern online trading platforms.

It allows users to securely create an account, manage a virtual wallet, search stocks, maintain a personalized watchlist, place buy/sell orders, track holdings and positions, and monitor portfolio performance through an interactive dashboard.

---

## 🌐 Live Demo

- **Frontend:** https://tradenest-frontend-b84l.onrender.com
- **Trading Dashboard:** https://tradenest-dashboard-f19e.onrender.com
- **Backend API:** https://tradenest-backend-s2bu.onrender.com
- **GitHub Repository:** https://github.com/Mohini-Sharma2307/TradeNest

---

## ✨ Features

### 🔐 Authentication

- User Signup and Login
- JWT-based authentication
- Protected API routes
- Password hashing using bcrypt
- Persistent authentication sessions

### 📊 Trading Dashboard

- Personalized user dashboard
- Virtual wallet balance
- Total investment tracking
- Current portfolio value
- Profit/Loss tracking
- Portfolio visualization
- Recent orders

### 👀 Watchlist

- Search stocks
- Add stocks to personalized watchlist
- Remove stocks from watchlist
- Display stock price and percentage movement
- Buy/Sell actions directly from watchlist

### 💰 Virtual Trading

- Buy stocks using virtual wallet balance
- Sell owned stocks
- Automatic wallet balance updates
- Insufficient wallet balance validation
- Automatic investment calculations

### 📦 Holdings

- Track currently owned stocks
- Quantity tracking
- Average buying price
- Current stock price
- Investment value
- Profit/Loss information

### 📑 Orders

- Complete order history
- Buy/Sell order tracking
- Order status
- Recent orders

### 📍 Positions

- Track current stock positions
- Quantity and average price
- Current market value
- Profit/Loss information

### 📈 Portfolio Analytics

- Portfolio performance visualization
- Investment distribution
- Interactive charts using Chart.js

### 🌙 Dark / Light Mode

- Dark mode
- Light mode
- Theme persistence
- Theme synchronization between frontend and dashboard

### 📱 Responsive UI

- Responsive trading dashboard
- Clean and modern interface
- Reusable React components

---

## 🛠️ Tech Stack

### Frontend

- React.js
- React Router
- Axios
- Material UI
- React Hot Toast
- CSS3

### Dashboard

- React.js
- React Router
- Chart.js
- React Chart.js 2
- Material UI
- Axios

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcryptjs
- CORS
- dotenv

### Deployment

- Render
- MongoDB Atlas
- GitHub

---

## 🏗️ Project Architecture

```text
TradeNest/
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── dashboard/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── controllers/
│   ├── middleware/
│   ├── model/
│   ├── routes/
│   ├── index.js
│   └── package.json
│
├── .gitignore
└── README.md
```

---

## 🔄 Application Flow

```text
User
  │
  ▼
Frontend
  │
  │ HTTP Requests
  ▼
Express Backend
  │
  ├── Authentication
  ├── Watchlist
  ├── Orders
  ├── Holdings
  ├── Positions
  └── Dashboard
  │
  ▼
MongoDB
```

---

## 🔐 Authentication Flow

TradeNest uses JWT-based authentication.

```text
Signup / Login
      ↓
Backend validates credentials
      ↓
JWT token generated
      ↓
Token stored on client
      ↓
Protected API request
      ↓
JWT verification middleware
      ↓
User-specific data returned
```

---

## 💹 Trading Flow

### Buy Stock

```text
Select Stock
     ↓
Enter Quantity
     ↓
Calculate Total Amount
     ↓
Check Wallet Balance
     ↓
Deduct Amount
     ↓
Create Order
     ↓
Update Holdings
```

### Sell Stock

```text
Select Owned Stock
     ↓
Enter Quantity
     ↓
Validate Holdings
     ↓
Calculate Sell Amount
     ↓
Update Holdings
     ↓
Credit Wallet
     ↓
Create Sell Order
```

---

## 🔌 Main API Routes

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/signup` | Create user account |
| POST | `/api/auth/login` | Login user |
| GET | `/api/user/profile` | Get user profile |
| GET | `/api/user/wallet` | Get wallet information |
| GET | `/api/watchlist` | Get user watchlist |
| POST | `/api/watchlist/add` | Add stock |
| DELETE | `/api/watchlist/remove/:name` | Remove stock |
| POST | `/api/order/buy` | Buy stock |
| POST | `/api/order/sell` | Sell stock |
| GET | `/api/order/orders` | Get order history |
| GET | `/api/order/recent` | Get recent orders |
| GET | `/api/holding` | Get holdings |
| GET | `/api/position` | Get positions |
| GET | `/api/dashboard` | Get dashboard data |
| GET | `/api/dashboard/portfolio` | Get portfolio data |
| GET | `/api/search` | Search stocks |

---

## ⚙️ Installation & Setup

### 1. Clone Repository

```bash
git clone https://github.com/Mohini-Sharma2307/TradeNest.git
cd TradeNest
```

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file:

```env
MONGO_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

Start the backend:

```bash
node index.js
```

Backend:

```text
http://localhost:3002
```

### 3. Frontend Setup

Open another terminal:

```bash
cd frontend
npm install
npm start
```

Frontend:

```text
http://localhost:3000
```

### 4. Dashboard Setup

Open another terminal:

```bash
cd dashboard
npm install
npm start
```

Dashboard:

```text
http://localhost:3001
```

---

## 🗄️ Database

TradeNest uses MongoDB for storing application data.

Main collections include:

- Users
- Watchlists
- Orders
- Holdings
- Positions

User-specific data is associated with authenticated users through their user ID.

---

## 🔒 Security

The application implements:

- JWT authentication
- Protected API routes
- Password hashing using bcrypt
- Environment variables for sensitive configuration
- User-specific database queries
- Wallet balance validation
- Authentication middleware

---

## 📊 Dashboard Highlights

The dashboard provides:

- Wallet balance
- Total investment
- Current portfolio value
- Profit/Loss
- Holdings
- Positions
- Orders
- Watchlist
- Portfolio visualization

---

## 🎯 Project Goals

TradeNest demonstrates practical full-stack development skills including:

- REST API development
- JWT authentication
- MongoDB database design
- CRUD operations
- API integration
- Trading transaction logic
- React component architecture
- Responsive UI development
- Data visualization
- Full-stack deployment

---

## 🚀 Future Improvements

- Real-time stock market data
- Advanced technical charts
- Stock price alerts
- Email notifications
- Advanced portfolio analytics
- Transaction statements
- Improved search and filtering
- Admin dashboard
- Advanced order types

---

## 👩‍💻 Author

**Mohini Sharma**

BE — Artificial Intelligence & Machine Learning

Interested in:

- MERN Stack Development
- Full Stack Web Development
- Software Engineering
- AI/ML

---

## ⭐ Support

If you find this project useful, consider giving the repository a ⭐ on GitHub.

---

## 📌 Disclaimer

TradeNest is an educational stock trading simulation project.

It does not execute real stock market transactions or provide financial advice.