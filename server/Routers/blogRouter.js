const router = require("express").Router();
const { createNewBlog, getAllBlogs } = require("../controllers/blogController")


//create Blog
router.post("/create",  createNewBlog);
router.get("/", getAllBlogs);

module.exports = router