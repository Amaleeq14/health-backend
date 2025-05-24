const express = require('express');
const router = express.Router();
const { chatReply } = require('../controllers/chatController');

router.post('/', chatReply);

module.exports = router;
