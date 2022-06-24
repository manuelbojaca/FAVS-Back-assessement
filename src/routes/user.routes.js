const router = require("express").Router();
const userController = require("../controllers/user.controller");

router.route("/user").post(userController.login);
router.route("/users").get(userController.list);

module.exports = router;
