import { Link } from "react-router-dom";
import {useNavigate} from "react-router-dom"

function Navbar() {
  const navigate = useNavigate();
  let token = localStorage.getItem("token");
  console.log(token)

  function logout() {

    localStorage.removeItem('token');
    navigate("/blogs")
  }

  return ( 
    <div className="navbar">
      <div className="left-nav">
        <h2>My First Blog</h2>
        
      </div>

      <div className="right-nav">
        {token ? (
          <div>
            <Link to="/blogs" className="links">View Blogs</Link> 
            <Link to="/" className="links">Add a Blog</Link> 
            <Link onClick={logout} to="/login" className="links">Logout</Link> 
          </div>           
        ): (
          <div>    
            <Link to="/blogs" className="links">View Blogs</Link>         
            <Link to="/signup" className="links">Sign Up</Link>         
            <Link to="/login" className="links">Login</Link>  
          </div>
        )}
                        

      </div>
    </div>
   );
}

export default Navbar;