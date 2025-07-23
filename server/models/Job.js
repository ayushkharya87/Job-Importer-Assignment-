const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
  jobId: { type: String, unique: true },
  title: String,
  company: String,
  description: String,
  link: String,
  location: String,
  datePosted: Date,
}, { timestamps: true });

module.exports = mongoose.model('Job', JobSchema);
