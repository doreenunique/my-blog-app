import React from "react";
import BlogForm from "./components/BlogForm"
import BlogList from "./components/BlogList";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import Login from "./components/Login";
import UserProfile from "./components/UserProfile"; // Import the UserProfile component
import { Routes, Route } from "react-router-dom";
import UpdateForm from "./components/UpdateForm";
import "bootstrap/dist/css/bootstrap.min.css";
import WelcomePage from "./components/WelcomePage";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<WelcomePage/>} />
        <Route path="/form" element={<BlogForm/>} />
        <Route path="/update/:userid" element={<UpdateForm/>} />
        <Route path="/blogs" element={<BlogList/>} />       
        <Route path="/signup" element={<Signup/>} />       
        <Route path="/login" element={<Login/>} /> 
        <Route path="/profile" element={<UserProfile />} /> {/* Add the UserProfile route */}
     
       

      </Routes>     
    </div>
  );
}

export default App;

















































// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import BlogForm from "./components/BlogForm";
// import BlogList from "./components/BlogList";
// import Navbar from "./components/Navbar";
// import Signup from "./components/Signup";
// import Login from "./components/Login";
// import UserProfile from "./components/UserProfile"; // Import the UserProfile component

// function App() {
//   return (
//     <div className="App">
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<BlogForm />} />
//         <Route path="/blogs" element={<BlogList />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/profile" element={<UserProfile />} /> // Add the UserProfile route
//       </Routes>
//     </div>
//   );
// }

// export default App;

















































