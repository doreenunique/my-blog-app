
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function login(e) {
    e.preventDefault();
    // Check if username and password are not empty
    if (!username || !password) {
      alert("Please enter both username and password.");
      return;
    }
    try {
      let user = {
        username,
        password,
      };
      let response = await axios.post("http://localhost:2222/user/login", user);
      if (response) {
        console.log(response)
        localStorage.setItem("token", response.data);
       navigate("/blogs");
      }
    } catch (error) {
      alert(error.response.data.msg);
    }
  }

  return (
    //<div className="blogs">
    <div className="form">
      <h1 className="text-center mb-4">Login Form</h1>
      <form onSubmit={login}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username:
          </label>
          <input
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password:
          </label>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="form-control"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
    //</div>
  );
}

export default Login;























// import { useState } from "react";
// import axios from "axios";
// import {useNavigate} from "react-router-dom"

// function Login() {
//   const navigate = useNavigate();
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
  
 
//   async function login(e) {
//     //alert("logged in")
//     e.preventDefault();
//     // Check if username and password are not empty
//   if (!username || !password) {
//     alert("Please enter both username and password.");
//     return;
//   }
//     try {
//       let user = {
//         username,
//         password
//       }
//       console.log(user)
//       let response = await axios.post("http://localhost:2222/user/login", user)
//      console.log(response)
//       if (response){
//         localStorage.setItem('token', response.data)
//         navigate("/blogs")
//       }    
//     } catch (error) {
//       alert(error.response.data.msg)
//     }
//   }

//   return ( 
//     <div>
//       <h1 className="text-center mb-4">Login Form</h1>
//       <form onSubmit={login}>
//         <label htmlFor="username">
//           Username:
//         </label>
//         <input type="text"
//         value={username}
//          onChange={(event)=>setUsername(event.target.value)}
//          />
         
//          <br /><br />

//          <label htmlFor="password">
//           Password:
//          </label>
//          <input
//          type="password"
//          value={password}
//          onChange={(event)=>(setPassword(event.target.value))}
//          />
//          <br /><br />
//          <button>Login</button> <br /><br />
//       </form>
      
//     </div>
//    );
// }

// export default Login;