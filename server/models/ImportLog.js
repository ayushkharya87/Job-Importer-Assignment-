const mongoose = require('mongoose');

const ImportLogSchema = new mongoose.Schema({
  timestamp: { type: Date, default: Date.now },
  totalFetched: Number,
  totalImported: Number,
  newJobs: Number,
  updatedJobs: Number,
  failedJobs: Number,
  errors: [String],
});

module.exports = mongoose.model('ImportLog', ImportLogSchema);
