


import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function Navbar() {
  const navigate = useNavigate();
  let token = localStorage.getItem("token");
  console.log(token);

  function logout() {
    localStorage.removeItem("token");
    navigate("/blogs");
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <h2 className="blog-name">PONDER PAGE</h2>
        </Link>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {token ? (
              <>
                <li className="nav-item">
                  <Link to="/blogs" className="nav-link">
                    View Blogs
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/form" className="nav-link">
                    Add a Blog
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/profile" className="nav-link">
                    Profile
                  </Link>
                </li>
                <li className="nav-item">
                  <Link onClick={logout} to="/login" className="nav-link">
                    Logout
                  </Link>
                </li>
              </>
            ) : (
              <>
              

                <li className="nav-item">
                <Link to="/form" className="nav-link">
                  Add a Blog
                  </Link>
                  <Link to="/blogs" className="nav-link">
                    View Blogs
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/signup" className="nav-link">
                    Sign Up
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/login" className="nav-link">
                    Login
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;































// import { Link } from "react-router-dom";
// import {useNavigate} from "react-router-dom"

// function Navbar() {
//   const navigate = useNavigate();
//   let token = localStorage.getItem("token");
//   console.log(token)

//   function logout() {

//     localStorage.removeItem('token');
//     navigate("/blogs")
//   }

//   return ( 
//     <div className="navbar">
//       <div className="left-nav">
//         <h2>My First Blog</h2>
        
//       </div>

//       <div className="right-nav">
//         {token ? (
//           <div>
//             <Link to="/blogs" className="links">View Blogs</Link> 
//             <Link to="/" className="links">Add a Blog</Link> 
//             <Link to="/profile" className="links">Profile</Link>
//             <Link onClick={logout} to="/login" className="links">Logout</Link> 
//           </div>           
//         ): (
//           <div>    
//             <Link to="/blogs" className="links">View Blogs</Link>         
//             <Link to="/signup" className="links">Sign Up</Link>         
//             <Link to="/login" className="links">Login</Link>  
//           </div>
//         )}
                        

//       </div>
//     </div>
//    );
// }

// export default Navbar;