const express = require('express');
const { body } = require('express-validator');

const feedController = require('../controllers/feed');

const router = express.Router();

// @ GET /feed/posts
router.get('/posts', feedController.getFeed);

module.exports = router;
