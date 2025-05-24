const express = require('express');
const router = express.Router();
const { getReports, createReport } = require('../controllers/reportsController');

router.get('/', getReports);
router.post('/', createReport);

module.exports = router;
