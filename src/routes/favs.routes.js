const router = require("express").Router();
const favsController = require("../controllers/favs.controller");
const { auth } = require("../utils/auth");

router.route("/favs").get(auth, favsController.lists);
router.route("/favs/:id").get(auth, favsController.show);
router.route("/favs").post(auth, favsController.create);

module.exports = router;
