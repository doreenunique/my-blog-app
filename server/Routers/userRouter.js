const router = require("express").Router();
const { signUp, login } = require("../controllers/userController");

router.post("/signup", signUp);
router.post("/login", login );

module.exports = router