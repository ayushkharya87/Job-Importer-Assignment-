const axios = require('axios');
const parseXML = require('../utils/xmlParser');

const urls = [
  'https://jobicy.com/?feed=job_feed',
  'https://jobicy.com/?feed=job_feed&job_categories=data-science',
  'https://www.higheredjobs.com/rss/articleFeed.cfm',
];

const fetchJobsFromFeeds = async () => {
  let allJobs = [];

  for (const url of urls) {
    try {
      const { data } = await axios.get(url);
      const parsed = parseXML(data);
      const jobs = parsed.rss?.channel?.item || [];
      allJobs.push(...jobs);
    } catch (err) {
      console.error('Fetch failed:', err.message);
    }
  }

  return allJobs;
};

module.exports = fetchJobsFromFeeds;
