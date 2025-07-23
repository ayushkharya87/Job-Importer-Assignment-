const { Queue } = require('bullmq');
const Redis = require('../config/redis');

const jobQueue = new Queue('job-import-queue', {
  connection: Redis,
});

module.exports = jobQueue;
