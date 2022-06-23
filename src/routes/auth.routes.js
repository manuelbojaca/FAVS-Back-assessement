const router = require("express").Router();
const authController = require("../controllers/auth.controller");
const { auth } = require("../utils/auth");

router.route("/users").get(authController.list);
router.route("/user").get(auth, authController.show);
router.route("/local/logup").post(authController.create);
router.route("/local/login").post(authController.login);

module.exports = router;
