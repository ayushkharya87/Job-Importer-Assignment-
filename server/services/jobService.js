const { QueueEvents } = require('bullmq');
const jobQueue = require('../queues/jobQueue');
const ImportLog = require('../models/ImportLog');
const Redis = require('../config/redis'); 

const processJobs = async (jobList) => {
  let newJobs = 0;
  let updatedJobs = 0;
  let failedJobs = 0;
  const errors = [];

  const results = await Promise.allSettled(
    jobList.map(async (job) => {
      try {
        const queueJob = await jobQueue.add('import', {
          jobId: (typeof job.guid === 'object' ? job.guid['#text'] : job.guid) || job.link || job.title,
          title: job.title,
          company: job['dc:creator'] || job.author || 'Unknown',
          description: job.description,
          link: job.link,
          location: job.location || 'Remote',
          datePosted: new Date(job.pubDate || Date.now()),
        });

        const result = await queueJob.waitUntilFinished(queueEvents); 

        if (result.status === 'new') newJobs++;
        else if (result.status === 'updated') updatedJobs++;
        else {
          failedJobs++;
          errors.push(result.error || 'Unknown failure');
        }
      } catch (err) {
        failedJobs++;
        errors.push(err.message);
      }
    })
  );

  await ImportLog.create({
    timestamp: new Date(),
    totalFetched: jobList.length,
    totalImported: newJobs + updatedJobs,
    newJobs,
    updatedJobs,
    failedJobs,
    errors,
  });

  return { newJobs, updatedJobs, failedJobs };
};

module.exports = { processJobs };

