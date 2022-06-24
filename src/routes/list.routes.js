const router = require("express").Router();
const listController = require("../controllers/list.controller");
const { auth } = require("../utils/auth");

router.route("/list").get(auth, listController.lists);
router.route("/show/:id").get(auth, listController.show);
router.route("/create").post(auth, listController.create);
router.route("/delete/:id").delete(auth, listController.destroy);

module.exports = router;
