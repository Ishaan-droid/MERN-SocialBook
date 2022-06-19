const Post = require('../models/postModel');

exports.getPosts = async (req, res) => {
  try {
    const posts = await Post.find();

    res.status(200).json({
      status: 'success',
      data: posts,
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.createPost = async (req, res) => {
  try {
    const post = await Post.create(req.body);

    res.status(201).json({
      status: 'success',
      data: post,
    });
  } catch (err) {
    res.status(409).json({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.updatePost = async (req, res) => {
  try {
    const { id: _id } = req.params;

    const post = await Post.findByIdAndUpdate(_id, { ...req.body, _id }, { new: true });

    return res.status(201).json({
      status: 'success',
      data: post,
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err.message,
    });
  }
};
