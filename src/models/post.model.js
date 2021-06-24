const { Schema, model } = require("mongoose");

const PostSchema = new Schema({
  title: String,
  content: String,
  comments: [
    {
      name: String,
      content: String,
    },
  ],
});

const Post = model("Post", PostSchema);

module.exports = Post;
