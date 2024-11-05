const Router = require("express");
const router = new Router();
const deviceController = require("../controllers/deviceController");

router.post("/", deviceController.create);
router.get("/", deviceController.getAll);
router.get("/devices", deviceController.getByIds);
router.get("/:id", deviceController.getOne);
router.delete("/:id", deviceController.deleteOne);

module.exports = router;
