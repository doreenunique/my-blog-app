import BlogForm from "./components/BlogForm"
import BlogList from "./components/BlogList";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<BlogForm/>} />
        <Route path="/blogs" element={<BlogList/>} />       
        <Route path="/signup" element={<Signup/>} />       
        <Route path="/login" element={<Login/>} />       
      </Routes>     
    </div>
  );
}

export default App;
