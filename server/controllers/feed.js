const fs = require('fs');
const path = require('path');

const { validationResult } = require('express-validator');

const Post = require('../models/post');

exports.getPosts = (req, res, next) => {
  res.status(200).json({
    posts: [
      {
        title: 'First Post',
        creator: 'Alexandru',
        content: 'This is the first post!',
      },
    ],
  });
};

exports.createPost = (req, res, next) => {
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
    creator: 'Alexandru',
  });

  post
    .save()
    .then(result => {
      res.status(201).json({
        message: 'Post created successfully!',
        post: post,
        creator: {
          id: '1',
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
