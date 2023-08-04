import { useEffect, useState } from "react";
import axios from "axios";
import myImage from "../images/default.jpg"

function BlogList() {
  const [blogs, setBlogs] = useState([])

  async function getAllBlogs() {
    try {
      let response = await axios.get("http://localhost:2222/blog",
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        }, 
      });
      setBlogs(response.data)
      console.log(blogs);
    } catch (error) {
      console.log(error);
    }
  }
    
    
  

  async function deleteBlog(blogId) {
    try {
      await axios.delete(`http://localhost:2222/blog/${blogId}`,
      {
        headers: 
        {"Authorization": `Bearer ${localStorage.getItem('token')}`}
      });
      getAllBlogs(); // Refresh the blogs after successful deletion
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() =>{
    getAllBlogs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])


  return ( 
    <div>
       <div>
        {blogs.map((blog) => {
          return(
          <div key={blog._id}>
            <div>
              {blog.imageUrl ? 
              (<img src={blog.imageUrl} alt="imageUrl" />) : 
              (<img src={myImage} alt="myImage" />)}
            </div>

            <div className="text">
              <h3>Title:{blog.title}</h3>
              <h4>Author: {blog.author ? blog.author : "Anonymous"}</h4>
              <p>Content: {blog.content} </p>
              <p>Category: {blog.category} </p>   
             
              <button onClick={() => deleteBlog(blog._id)}>Delete</button>
            </div>
          </div>
          )     
        })}
      </div>
    </div>
   );
}

export default BlogList;