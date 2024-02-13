const Router = require("express");
const router = new Router();
const cartController = require("../controllers/cartController");
const authMiddleware = require("../middleware/authMiddleware");

// router.post("/", cartController.create);
router.get("/", authMiddleware, cartController.getAll);

module.exports = router;
