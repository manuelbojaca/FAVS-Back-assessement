const router = require("express").Router();
const authController = require("../controllers/auth.controller");

router.route("/local/logup").post(authController.create);
router.route("/local/login").post(authController.login);

module.exports = router;
