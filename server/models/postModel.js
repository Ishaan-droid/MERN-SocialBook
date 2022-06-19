const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'A title is required for the post.'],
  },
  message: {
    type: String,
    required: [true, 'A message is required for the post.'],
  },
  creator: {
    type: String,
    required: [true, 'A user is required to create a post.'],
  },
  tags: [String],
  selectedFile: String,
  likeCount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const Post = mongoose.model('post', PostSchema);

module.exports = Post;
