const express = require('express');
const router = express.Router();
const Job = require('../models/Job');

router.get('/', async (req, res) => {
  try {
    const jobs = await Job.find().sort({ datePosted: -1 });
    res.json(jobs);
  } catch (error) {
    console.error('Failed to fetch jobs:', error);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;
