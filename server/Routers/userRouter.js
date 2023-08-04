// const router = require("express").Router();
// const { signUp, login } = require("../controllers/userController");


// router.post("/signup", signUp);
// router.post("/login", login );

// module.exports = router






const router = require("express").Router();
const { signUp, login } = require("../controllers/userController");

const authMiddleware = require("../middleware/authMiddleware");

// Signup (no authentication required)
router.post("/signup", signUp);

// Login (no authentication required)
router.post("/login", login);

// User Profile (requires authentication)
router.get("/profile", authMiddleware, (req, res) => {
  // You can implement the logic to fetch and return the user profile here
  // Example: res.json(req.user);
});

// Update User Profile (requires authentication)
router.put("/profile", authMiddleware, (req, res) => {
  // You can implement the logic to update the user profile here
});

module.exports = router;























// const router = require("express").Router();
// const { signUp, login, getUserProfile, updateUserProfile } = require("../controllers/userController");
// const authMiddleware = require("../middleware/authMiddleware");

// router.post("/signup", signUp);
// router.post("/login", login);
// router.get("/profile", authMiddleware, getUserProfile);
// router.put("/profile", authMiddleware, updateUserProfile);

// module.exports = router;























