# 📅 Job Importer 

A full-stack job aggregator system using **MERN**, **Redis**, and **BullMQ**, designed to:

- 🧾 Fetch jobs from an XML feed  
- 🎯 Queue & process them using Redis & BullMQ  
- 💾 Store them in MongoDB  
- 📊 Display import logs & job listings on a sleek, animated React dashboard  

---

## 📦 Tech Stack

**Frontend:**
- React + Vite  
- Bootstrap 5 (Dark Mode)  
- Bootstrap Icons  
- Animations & modern UI  

**Backend:**
- Node.js + Express  

**Database:**
- MongoDB (Mongoose)  

**Queue System:**
- BullMQ (Redis-based)  

**Worker:**
- BullMQ Worker  

**Cron Jobs:**
- node-cron  

**Utilities:**
- xml2js  
- ioredis  
- dotenv  
- cors  
- axios  

---

## 🛠️ Setup Instructions

```bash
# 1. Clone the Repository
git clone https://github.com/your-username/job-importer.git
cd job-importer

# 2. Backend Setup
cd server
npm install

# Create a .env file inside /server
echo "PORT=5000
MONGO_URI=mongodb://localhost:27017/job_importer
REDIS_HOST=127.0.0.1
REDIS_PORT=6379
IMPORT_SOURCE_URL=https://example.com/feed.xml" > .env

# Start the Express server
npm run dev

# In a new terminal, start the BullMQ worker
node workers/jobWorker.js

# 3. Frontend Setup
cd ../client
npm install
npm run dev

# 4. Redis Setup (on Windows)
cd C:\Redis
.\redis-server.exe

# Check if Redis is running
redis-cli ping
# Output should be: PONG


📂 Folder Structure

server/
├── config/           # MongoDB & Redis config
│   ├── db.js
│   └── redis.js
├── controllers/      # Import controller logic
├── models/           # Job & ImportLog schemas
├── queues/           # BullMQ queue config
├── routes/           # Express routes
├── services/         # Fetch & job logic
├── utils/            # XML parsing & logger
├── workers/          # BullMQ worker handler
├── index.js          # Express entry point
├── cron.js           # Scheduled fetcher
└── .env

client/
├── public/
├── src/
│   ├── api/          # Axios functions
│   ├── components/   # Reusable components (Header, Tables)
│   ├── pages/        # Dashboard view
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
└── vite.config.js





✨ Features

🔘 Manual or automatic job import (via cron or dashboard)
⚙️ Redis + BullMQ for background queue processing
🧠 Smart MongoDB job upsertion (insert/update)
📈 Real-time import logging with reasons for failure
🖥️ Dashboard with animated, modern UI (Bootstrap 5)
🕶️ Dark mode styling, hover effects, and Bootstrap icons

