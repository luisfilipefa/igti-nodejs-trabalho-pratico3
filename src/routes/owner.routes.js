const {
  create,
  findOne,
  find,
  update,
  destroy,
} = require("../controllers/owner.controller");
const router = require("express").Router();

router.post("/", create);
router.get("/:id", findOne);
router.get("/", find);
router.put("/:id", update);
router.delete("/:id", destroy);

module.exports = router;
