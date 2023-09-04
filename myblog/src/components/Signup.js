


import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function signup(e) {
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
      let response = await axios.post("http://localhost:2222/user/signup", user);
      if (response) {
        localStorage.setItem("token", response.data.token);
        navigate("/blogs");
      }
    } catch (error) {
      alert(error.response.data.msg);
    }
  }

  return (
   //  <div className="blogs">
    <div className="form">
      <h1>Sign up Form</h1>
      <form onSubmit={signup}>
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
          Signup!
        </button>
      </form>
    </div>
    //</div>
  );
}

export default Signup;


























// import { useState } from "react";
// import axios from "axios";
// import {useNavigate} from "react-router-dom"


// function Signup() {
//   const navigate = useNavigate();
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   async function signup(e) {
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
//       let response = await axios.post("http://localhost:2222/user/signup", user)
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
//       <h1>Sign up Form</h1>
//       <form onSubmit={signup}>
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
//          <button type='submit'>Signup!</button><br/><br/>
//       </form>

//     </div>
//    );
// }

// export default Signup;