const express = require('express');
const postController = require('../controllers/posts');

const router = express.Router();

router.route('/').get(postController.getPosts).post(postController.createPost);
router.patch('/:id', postController.updatePost);

module.exports = router;
