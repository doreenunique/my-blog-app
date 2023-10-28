import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function BlogForm() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  async function createBlog(event) {
    const token = localStorage.getItem("token");
    console.log("form submitted");
    event.preventDefault();
    let newBlog = {
      title: title,
      author: author,
      content: content,
      category: category,
      imageUrl: imageUrl,
    };
    try {
      if (token) {
        let response = await axios.post(
          "http://localhost:2222/blog/create",
          newBlog,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (response) {
          alert(response.data.msg);
          navigate("/blogs");
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  // Quill modules and formats
  const quillModules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      ["clean"],
    ],
  };

  const quillFormats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "list",
    "bullet",
    "link",
    "image",
  ];

  return (
    <div className="blogs">
    <div className="container">
      <h1 className="form-h1">Add A New Blog</h1>
      <form onSubmit={createBlog} className="form">
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title:
          </label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>
        

        <div className="mb-3">
          <label htmlFor="author" className="form-label">
            Author:
          </label>
          <input
            type="text"
            className="form-control"
            value={author}
            onChange={(event) => setAuthor(event.target.value)}
          />
        </div>
        <br></br>

      
           <div className="mb-3">
          <label htmlFor="content" className="form-label">
            Content:
          </label>
          <div className="quill-wrapper"></div>
          <ReactQuill
            value={content}
            onChange={setContent}
            modules={quillModules}
            formats={quillFormats}
            className="form-control"
          />
          {/* If you still want to have a regular textarea, you can comment out the ReactQuill component above
          <textarea
            name="content"
            id="content"
            cols="30"
            rows="10"
            value={content}
            onChange={(event) => setContent(event.target.value)}
            className="form-control"
          />
          */}
        </div>
        <br></br>
        



        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            Category:
          </label>
          <input
            type="text"
            className="form-control"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          />
        </div>


        <div className="mb-3">
          <label htmlFor="imageUrl" className="form-label">
            Image URL:
          </label>
          <input
            type="text"
            className="form-control"
            value={imageUrl}
            onChange={(event) => setImageUrl(event.target.value)}
          />
        </div>
        {imageUrl ? (
  <img src={imageUrl} alt="blog" className="img-fluid" />
) : null}




        <button type="submit" className="btn btn-primary">
          Create a Blog
        </button>
      </form>
    </div>
 </div>
  );
}

export default BlogForm;
