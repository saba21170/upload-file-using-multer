const router = require("express").Router();
const { v4: uuidv4 } = require("uuid");

const upload = require("../middlewares/multer");
const users = require("../controllers/user.controllers");

router.route("/add").post(upload.single("photo"), users);

module.exports = router;
