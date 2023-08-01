const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
  title: String,
  author: String,
  content: String,
  category: String,
  imageUrl: String, 
});

const Blog = mongoose.model('Blog', BlogSchema);

module.exports = Blog;