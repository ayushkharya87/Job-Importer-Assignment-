const express = require('express');
const router = express.Router();
const { runImport, getImportHistory } = require('../controllers/importController');

router.get('/run', runImport); // Trigger manual import
router.get('/history', getImportHistory); // View history

module.exports = router;
