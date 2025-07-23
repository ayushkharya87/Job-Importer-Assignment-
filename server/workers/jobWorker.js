const { Worker } = require('bullmq');
const Job = require('../models/Job');
const Redis = require('../config/redis');

const jobWorker = new Worker(
  'job-import-queue',
  async (job) => {
    const data = job.data;

    const existing = await Job.findOne({ jobId: data.jobId });

    if (existing) {
      await Job.updateOne({ jobId: data.jobId }, data);
      return { status: 'updated' }; 
    } else {
      await Job.create(data);
      return { status: 'new' }; 
    }
  },
  { connection: Redis }
);

jobWorker.on('failed', (job, err) => {
  console.error(`Worker error: ${err.message}`);
});
