const cron = require('node-cron');
const fetchJobsFromFeeds = require('./services/fetchService');
const { processJobs } = require('./services/jobService');

// Runs every 2 minutes
cron.schedule('*/2 * * * *', async () => {
  console.log('⏰ Running job import (every 2 minutes)...');
  const jobs = await fetchJobsFromFeeds();
  await processJobs(jobs);
  console.log('✅ Import complete');
});
