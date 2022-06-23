const router = require("express").Router();
const favsController = require("../controllers/favs.controller");

router.route("/favs").get(favsController.lists);

module.exports = router;
