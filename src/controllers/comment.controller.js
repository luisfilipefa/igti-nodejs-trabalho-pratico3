const Post = require("../models/post.model");

const create = async (req, res, next) => {
  try {
    const { id } = req.params;

    const { name, content } = req.body;

    const post = await Post.findByIdAndUpdate(
      id,
      {
        $push: { comments: { name, content } },
      },
      { new: true }
    );

    return res.json(post);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  create,
};
