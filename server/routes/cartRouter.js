const Router = require("express");
const router = new Router();
const cartController = require("../controllers/cartController");
const authMiddleware = require("../middleware/authMiddleware");

router.get("/", authMiddleware, cartController.getAll);
router.post("/", authMiddleware, cartController.create);
router.patch("/device/:id", authMiddleware, cartController.update);
router.delete("/device/:id", authMiddleware, cartController.delete);

module.exports = router;
