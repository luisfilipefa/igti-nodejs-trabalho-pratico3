const Post = require("../models/post.model");

const create = async (req, res, next) => {
  try {
    const { title, content } = req.body;

    const post = await Post.create({ title, content });

    return res.json(post);
  } catch (error) {
    next(error);
  }
};

const find = async (req, res, next) => {
  try {
    const posts = await Post.find();

    return res.json(posts);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  create,
  find,
};
