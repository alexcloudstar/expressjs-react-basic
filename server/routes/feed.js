const express = require('express');
const { body } = require('express-validator');

const feedController = require('../controllers/feed');

const router = express.Router();

// @ GET /feed/posts
router.get('/posts', feedController.getPosts);

// @ GET /feed/post/:postId
router.get('/post/:postId', feedController.getPost);

// @ POST /feed/post
router.post('/post', feedController.createPost);

// @ PATCH /feed/post
router.patch('/post/:postId', feedController.updatePost);

// @ DELETE /feed/post
router.delete('/post/:postId', feedController.deletePost);

module.exports = router;
