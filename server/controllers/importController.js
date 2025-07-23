const fetchJobsFromFeeds = require('../services/fetchService');
const { processJobs } = require('../services/jobService');
const ImportLog = require('../models/ImportLog');

const runImport = async (req, res) => {
  try {
    const jobs = await fetchJobsFromFeeds();
    const result = await processJobs(jobs);
    res.json({ success: true, ...result });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

const getImportHistory = async (req, res) => {
  try {
    const logs = await ImportLog.find().sort({ timestamp: -1 }).limit(10);
    res.json(logs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { runImport, getImportHistory };
