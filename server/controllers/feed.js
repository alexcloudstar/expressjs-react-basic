const fs = require('fs');
const path = require('path');

const { validationResult } = require('express-validator');

const Post = require('../models/post');

exports.getPosts = (req, res, next) => {
  const currentPage = req.query.page || 1;
  const perPage = 2;
  let totalItems;

  Post.find()
    .countDocuments()
    .then(count => {
      totalItems = count;

      return Post.find()
        .skip((currentPage - 1) * perPage)
        .limit(perPage);
    })
    .then(posts => {
      res.status(200).json({
        message: 'Fetched posts successfully.',
        posts: posts,
        totalItems,
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

  // TODO Fix that
  if (!req.file) {
    const error = new Error('No image provided');
    error.statusCode = 422;
    throw error;
  }

  const imageUrl = req.file.path.replace(/\\/g, '/');
  const title = req.body.title;
  const content = req.body.content;
  let creator;
  const post = new Post({
    title,
    content,
    imageUrl,
    creator: 'Alexandru', // TODO add user ID
  });

  // TODO add user as creator for post

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
  const postId = req.params.postId;

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = new Error('Validation failed, entered data is incorrect.');
    error.statusCode = 422;
    throw error;
  }

  const title = req.body.title;
  const content = req.body.content;
  // TODO fix to get image from req.body.img
  let imageUrl = req.body.img;

  if (req.file) {
    imageUrl = req.file.path.replace(/\\/g, '/');
  }

  // TODO fix
  // if (!imageUrl) {
  //   const error = new Error('No file picked');
  //   error.statusCode = 422;
  //   throw error;
  // }

  Post.findById(postId)
    .then(post => {
      if (!post) {
        const error = new Error('Could not find post.');
        error.statusCode = 404;
        throw error;
      }

      // TODO Add verification if user has permision to update post

      // TODO check if imageUrl !== post.image
      // TODO and delete the image

      post.title = title;
      post.imageUrl = imageUrl;
      post.content = content;

      return post.save();
    })
    .then(result => {
      res.status(200).json({
        message: 'Post updated!',
        post: result,
      });
    })
    .catch(err => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }

      next(err);
    });
};

exports.deletePost = (req, res, next) => {
  const postId = req.params.postId;

  Post.findById(postId)
    .then(post => {
      if (!post) {
        const error = new Error('Could not find post');
        error.statusCode = 404;
        throw error;
      }

      // TODO Check if user is logged in

      // TODO remove the image from storage

      return Post.findByIdAndRemove(postId);
    })
    .then(result => {
      res.status(200).json({ message: 'Deleted post.' });
    })
    .catch(err => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }

      next(err);
    });
};
