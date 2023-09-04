// const router = require("express").Router();
// const { createNewBlog, getAllBlogs,deleteBlog } = require("../controllers/blogController");

// const authMiddleware = require("../middleware/authMiddleware");


// //create Blog
// router.post("/create", authMiddleware, createNewBlog);
// router.get("/", getAllBlogs);

// module.exports = router;

const router = require("express").Router();
const { createNewBlog, getAllBlogs, deleteBlog, updateBlog} = require("../controllers/blogController");

const authMiddleware = require("../middleware/authMiddleware");

// Create Blog (requires authentication)
router.post("/create", authMiddleware, createNewBlog);

// Delete Blog (requires authentication)
router.delete("/:id", authMiddleware, deleteBlog);

// Delete Blog (requires authentication)
router.put("/update/:id", authMiddleware, updateBlog);

// Get all Blogs (no authentication required)
router.get("/", getAllBlogs);

module.exports = router;
