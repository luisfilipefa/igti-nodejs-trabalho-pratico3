const {
  create,
  find,
  findOne,
  update,
  destroy,
} = require("../controllers/service.controller");
const router = require("express").Router();

router.post("/", create);
router.get("/:id", findOne);
router.get("/", find);
router.put("/:id", update);
router.delete("/", destroy);

module.exports = router;
