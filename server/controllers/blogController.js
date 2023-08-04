const mongoose = require('mongoose');
const Blog = require("../Models/blog")

const createNewBlog = async (req, res) => {
  try {
    let newBlog = await Blog.create(req.body);
    res.status(201).json({msg: "Blog created successfully", newBlog});
    // res.send({ msg: "Blog created successfully", newBlog });
  } catch (error) {
    res.send({ msg: "Unable to create blog", error });
    // res.send({ error: "Unable to create blog" });
  }
}

const getAllBlogs = async (req, res) => {
  try {
    let blogs = await Blog.find();
    res.send(blogs);
  } catch (error) {
    res.send({ error: "Unable to retrieve blogs" });
  }
}


const deleteBlog = async (req, res) => {
  try {
    const blogId = req.params.id;
    const deletedBlog = await Blog.findByIdAndDelete(blogId);
    if (!deletedBlog) {
      return res.status(404).json({ msg: "Blog not found" });
    }
    res.status(200).json({ msg: "Blog deleted successfully" });
  } catch (error) {
    res.status(500).json({ msg: "Error deleting the blog", error });
  }
};

module.exports = { createNewBlog, getAllBlogs, deleteBlog };





//module.exports = {createNewBlog, getAllBlogs};