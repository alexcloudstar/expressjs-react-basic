const fs = require('fs');
const path = require('path');

const { validationResult } = require('express-validator');

const Post = require('../models/post');

exports.getPosts = (req, res, next) => {
  // TODO: Add pagination

  Post.find()
    // TODO: Add pagination
    .then(posts => {
      res.status(200).json({
        message: 'Fetched posts successfully.',
        posts: posts,
      });
    })
    .catch(err => {
      if (!err.statusCode) {
        err.statusCode = 500;

        next(err);
      }
    });
};

exports.createPost = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const error = new Error('Validation failed, entered data is incorrect.');
    error.statusCode = 422;
    throw error;
  }

  // TODO: Create feature to upload images
  // if (!req.img) {
  //   const error = new Error('No image provided');
  //   error.statusCode = 422;
  //   throw error;
  // }

  const imageUrl = 'images/boat.jpg';
  const title = req.body.title;
  const content = req.body.content;
  let creator;
  const post = new Post({
    title,
    content,
    imageUrl,
    creator: 'Alexandru', // TODO: add user ID
  });

  // TODO: add user as creator for post

  post
    .save()
    .then(result => {
      res.status(201).json({
        message: 'Post created successfully!',
        post: post,
        creator: {
          name: creator,
        },
      });
    })
    .catch(err => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }

      next(err);
    });
};

exports.getPost = (req, res, next) => {
  const postId = req.params.postId;

  Post.findById(postId)
    .then(post => {
      if (!post) {
        const error = new Error('Could not find post.');
        console.log('Error:!!', error);
        error.statusCode = 404;
        throw error;
      }

      res.status(200).json({ message: 'Post Fetched.', post: post });
    })
    .catch(err => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }

      next(err);
    });
};

exports.updatePost = (req, res, next) => {
  // TODO: Develope feature
};

exports.deletePost = (req, res, next) => {
  // TODO: Develope feature
};
