require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const importRoutes = require('./routes/importRoutes');
const jobRoutes = require('./routes/jobRoutes');
require('./workers/jobWorker');
require('./cron');

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/import', importRoutes);
app.use('/api/jobs', jobRoutes); 

const PORT = process.env.PORT || 5000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
