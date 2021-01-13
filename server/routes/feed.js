const express = require('express');
const { body } = require('express-validator');

const router = express.Router();

// @ GET /feed/posts
router.get('/posts', (req, res, next) => {
  console.log('Im on /');
});

module.exports = router;
