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





module.exports = {createNewBlog, getAllBlogs};