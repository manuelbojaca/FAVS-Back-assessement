const router = require("express").Router();
const userController = require("../controllers/auth.controller");
const { auth } = require("../utils/auth");

router.route("/local/login").post(userController.login);
router.route("/local/logup").post(userController.create);

module.exports = router;
