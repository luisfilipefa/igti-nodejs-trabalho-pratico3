const { create, find } = require("../controllers/post.controller");
const { create: createComment } = require("../controllers/comment.controller");
const router = require("express").Router();

router.post("/", create);
router.get("/", find);
router.post("/:id", createComment);

module.exports = router;
