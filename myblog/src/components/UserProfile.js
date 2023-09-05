



import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function UserProfile() {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    getUserProfile();
  }, []);

  async function getUserProfile() {
    try {
      let response = await axios.get("http://localhost:2222/user/profile", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setUser(response.data);
    } catch (error) {
      // Handle error
    }
  }

  async function updateUserProfile() {
    try {
      await axios.put("http://localhost:2222/user/profile", user, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setEditMode(false);
      getUserProfile();
    } catch (error) {
      // Handle error
    }
  }

  return (
    <div className="blogs">
    <div className="user-profile">
      <h2>User Profile</h2>
      {!editMode ? (
        <>
          <p>
            <strong>Username:</strong> {user.username}
          </p>
          <p>
            <strong>Password:</strong> ********
          </p>
          <button className="btn btn-primary" onClick={() => setEditMode(true)}>
            Edit Profile
          </button>
        </>
      ) : (
        <>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Username:
            </label>
            <input
              type="text"
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password:
            </label>
            <input
              type="password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              className="form-control"
            />
          </div>
          <button className="btn btn-success" onClick={updateUserProfile}>
            Save Profile
          </button>
        </>
      )}
    </div>
    </div>
  );
}

export default UserProfile;













































// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// function UserProfile() {
//   const navigate = useNavigate();
//   const [user, setUser] = useState({});
//   const [editMode, setEditMode] = useState(false);

//   useEffect(() => {
//     getUserProfile();
//   }, []);

//   async function getUserProfile() {
//     try {
//       let response = await axios.get("http://localhost:2222/user/profile", {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem("token")}`,
//         },
//       });
//       setUser(response.data);
//     } catch (error) {
//       // Handle error
//     }
//   }

//   async function updateUserProfile() {
//     try {
//       await axios.put(
//         "http://localhost:2222/user/profile",
//         user,
//         {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("token")}`,
//           },
//         }
//       );
//       setEditMode(false);
//       getUserProfile(); 
//     } catch (error) {
//       // Handle error
//     }
//   }

//   return (
//     <div className="user-profile">
//       <h2>User Profile</h2>
//       {!editMode ? (
//         <>
//           <p>
//             <strong>Username:</strong> {user.username}
//           </p>
//           <p>
//             <strong>Password:</strong> ********
//           </p>
//           <button onClick={() => setEditMode(true)}>Edit Profile</button>
//         </>
//       ) : (
//         <>
//           <label>
//             Username:
//             <input
//               type="text"
//               value={user.username}
//               onChange={(e) => setUser({ ...user, username: e.target.value })}
//             />
//           </label>
//           <label>
//             Password:
//             <input
//               type="password"
//               value={user.password}
//               onChange={(e) => setUser({ ...user, password: e.target.value })}
//             />
//           </label>
//           <button onClick={updateUserProfile}>Save Profile</button>
//         </>
//       )}
//     </div>
//   );
// }

// export default UserProfile;







































