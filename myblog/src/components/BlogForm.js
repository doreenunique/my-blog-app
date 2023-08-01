import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function BlogForm() {
  const navigate = useNavigate()
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  async function createBlog(event) {
    console.log("form submitted")
    event.preventDefault();
    let newBlog = {
      title: title,
      author: author,
      content: content,
      category: category,
      imageUrl: imageUrl,
      
    };
   try {
    let response = await axios.post("http://localhost:2222/blog/create", newBlog)
    if (response) {
      alert(response.data.msg);
      navigate("/blogs")
    }
   } catch (error) {
    console.log(error)
   }    
  }

  

  return ( 
    <form onSubmit={createBlog} className="form" >
      <label htmlFor="title">Title:</label>
      <input
      type="text"
      value={title}
      onChange={(event) => setTitle(event.target.value)} 
      />

      <br />

      <label htmlFor="author">Author:</label>
      <input
      type="text"
      value={author}
      onChange={(event) => setAuthor(event.target.value)} 
      />

      <br />

      <label htmlFor="content">Content:</label>
      <textarea name="content"
      id="content"
      cols="30"
      rows="10"
      value={content}
      onChange={(event) => setContent(event.target.value)}
      >  
      </textarea>      

      <br />

      <label htmlFor="category">Category:</label>
      <input
      type="text"
      value={category}
      onChange={(event) => setCategory(event.target.value)} 
      />

      <br />

      <label htmlFor="imageUrl">imageUrl:</label>
      <input
      type="text"
      value={imageUrl}
      onChange={(event) => setImageUrl(event.target.value)} 
      />

      <br />
      
      <button type="submit" >Create a blog</button>
    </form>
   );
}

export default BlogForm;