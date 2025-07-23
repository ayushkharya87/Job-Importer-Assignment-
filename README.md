# 📅 Job Importer Admin Panel

A full-stack job aggregator system using **MERN**, **Redis**, and **BullMQ**, designed to:

- 🧾 Fetch jobs from an XML feed
- 🎯 Queue & process them using Redis & BullMQ
- 💾 Store in MongoDB
- 📊 Display import logs & job listings on a sleek, animated React dashboard

---

## 📦 Tech Stack

**Frontend:**
- React + Vite
- Bootstrap 5 (dark theme)
- Bootstrap Icons
- Animations & modern UI

**Backend:**
- Node.js + Express

**Database:**
- MongoDB (via Mongoose)

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

### 1. 📁 Clone the Repository

```bash
git clone https://github.com/your-username/job-importer.git
cd job-importer




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





🔧 Redis Setup
cd C:\Redis
.\redis-server.exe



✨ Features
Trigger import manually or via cron

Redis + BullMQ background job queue

MongoDB persistence of jobs

Real-time import history logging

Modern UI with Bootstrap 5 dark mode

Hover effects, icons, and transitions
