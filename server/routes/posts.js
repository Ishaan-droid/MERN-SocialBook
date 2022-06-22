const express = require('express');
const postController = require('../controllers/posts');

const router = express.Router();

router.route('/').get(postController.getPosts).post(postController.createPost);
router.route('/:id').patch(postController.updatePost).delete(postController.deletePost);
router.route('/:id/likePost').patch(postController.likePost);

module.exports = router;
