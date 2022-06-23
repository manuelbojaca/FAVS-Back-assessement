const router = require("express").Router();
const favController = require("../controllers/fav.controller");
const { auth } = require("../utils/auth");

router.route("/create/:id").post(auth, favController.create);

module.exports = router;
