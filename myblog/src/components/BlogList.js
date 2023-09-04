

import React, { useEffect, useState } from "react";
import axios from "axios";
//import myImage from "../images/default.jpg";
import { useNavigate } from "react-router-dom";

function BlogList() {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();

  async function getAllBlogs() {
    try {
      let response = await axios.get("http://localhost:2222/blog", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setBlogs(response.data);
      console.log(blogs);
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteBlog(blogId) {
    const confirmDelete = window.confirm("Are you sure you want to delete this blog?")
    if (confirmDelete) {
      try {
        await axios.delete(`http://localhost:2222/blog/${blogId}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        getAllBlogs(); // Refresh the blogs after successful deletion
      } catch (error) {
        console.log(error);
      }     
    } 
  }

  async function updateBlog(blogId) {
      navigate(`/update/${blogId._id}`)
  }

  useEffect(() => {
    getAllBlogs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="blogs">
    <div className="container">
      <div className="row">
        <h1 className="form-label">All Blogs</h1>
        {blogs.map((blog) => (
          <div key={blog._id} className="col-md-4">
            <div className="card mb-4">
              <img
                src={blog.imageUrl}
                alt="Blog"
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">Title: {blog.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  Author: {blog.author ? blog.author : "Anonymous"}
                </h6>
                <div dangerouslySetInnerHTML={{__html: blog.content}}></div>
                <p className="card-text">Category: {blog.category}</p>
                <div className="d-flex justify-content-between"></div>
                <button
                  onClick={() => deleteBlog(blog._id)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
                <button
                  onClick={() => updateBlog(blog._id)}
                  className="btn btn-success"
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default BlogList;















































// import { useEffect, useState } from "react";
// import axios from "axios";
// import myImage from "../images/default.jpg"

// function BlogList() {
//   const [blogs, setBlogs] = useState([])

//   async function getAllBlogs() {
//     try {
//       let response = await axios.get("http://localhost:2222/blog",
//       {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem("token")}`,
//         }, 
//       });
//       setBlogs(response.data)
//       console.log(blogs);
//     } catch (error) {
//       console.log(error);
//     }
//   }
    
    
  

//   async function deleteBlog(blogId) {
//     try {
//       await axios.delete(`http://localhost:2222/blog/${blogId}`,
//       {
//         headers: 
//         {"Authorization": `Bearer ${localStorage.getItem('token')}`}
//       });
//       getAllBlogs(); // Refresh the blogs after successful deletion
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   useEffect(() =>{
//     getAllBlogs();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   },[])


//   return ( 
//     <div>
//        <div>
//         {blogs.map((blog) => {
//           return(
//           <div key={blog._id}>
//             <div>
//               {blog.imageUrl ? 
//               (<img src={blog.imageUrl} alt="imageUrl" />) : 
//               (<img src={myImage} alt="myImage" />)}
//             </div>

//             <div className="text">
//               <h3>Title:{blog.title}</h3>
//               <h4>Author: {blog.author ? blog.author : "Anonymous"}</h4>
//               <p>Content: {blog.content} </p>
//               <p>Category: {blog.category} </p>   
             
//               <button onClick={() => deleteBlog(blog._id)}>Delete</button>
//             </div>
//           </div>
//           )     
//         })}
//       </div>
//     </div>
//    );
// }

// export default BlogList;