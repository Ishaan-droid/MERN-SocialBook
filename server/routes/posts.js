const express = require('express');
const postController = require('../controllers/posts');
const { auth } = require('../middleware/auth');

const router = express.Router();

router.route('/').get(postController.getPosts).post(auth, postController.createPost);
router.route('/:id').patch(auth, postController.updatePost).delete(auth, postController.deletePost);
router.route('/:id/likePost').patch(auth, postController.likePost);

module.exports = router;
