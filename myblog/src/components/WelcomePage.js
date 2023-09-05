import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
//import "./WelcomePage.css"; // Add custom styles if needed

function WelcomePage() {
  const [currentSlide, setCurrentSlide] = useState(0); // Track the current slide

  useEffect(() => {
    // Automatically switch to the next slide every 3 seconds
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % 3); // Change '3' to the number of slides you have
    }, 5000); // 3000 milliseconds = 3 seconds

    // Clear the interval when the component unmounts to avoid memory leaks
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="welcome-page">
      <Carousel showThumbs={false} showStatus={false} selectedItem={currentSlide}>
        <div>
        <img src="https://images.pexels.com/photos/998591/pexels-photo-998591.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Slide 1" className="carousel-img"  />
          <h1 className="legend"> Obo'kian! Welcome to   <b>Ponder page!</b></h1>
        </div>
        <div>
          <img src="https://images.pexels.com/photos/5717409/pexels-photo-5717409.jpeg?auto=compress&cs=tinysrgb&w=600 " alt="Slide 2" className="carousel-img" />
          <p className="legend">A safe space to Share Your Stories with the World</p>
        </div>
        <div>
          <img src="https://images.pexels.com/photos/6970697/pexels-photo-6970697.jpeg?auto=compress&cs=tinysrgb&w=600 " alt="Slide 2" className="carousel-img" />
          <p className="legend">Dive right in!!</p>
        </div>
        {/* Add more slides as needed */}
      </Carousel>
      <div className="buttons">
        <p className="form-label">DONT HAVE AN ACCOUNT? SIGN UP!</p>
        <Link to="/signup" className="btn btn-primary">
          Signup
        </Link>
        <p className="form-label">ALREDAY HAVE AN ACCOUNT?</p>
        <Link to="/login" className="btn btn-secondary">
          Login
        </Link>
      </div>
    </div>
  );
}

export default WelcomePage;















// import React,  { useState, useEffect } from "react";

// import { Link } from "react-router-dom";
// import { Carousel } from "react-responsive-carousel"; // Import the carousel component
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
// //import "./WelcomePage.css"; // Add custom styles if needed

// function WelcomePage() {
//   const [activeSlide, setActiveSlide] = useState(0); // Initial active slide index
//   const totalSlides = 2; // Replace with the total number of slides in your Carousel
//   const slideInterval = 5000; // Interval in milliseconds (5 seconds in this example)

//   // Function to change the active slide
//   const changeSlide = () => {
//     setActiveSlide((prevSlide) => (prevSlide + 1) % totalSlides);
//   };

//   // Effect to set up the automatic slide transition
//   useEffect(() => {
//     const intervalId = setInterval(changeSlide, slideInterval);

//     // Clean up the interval when the component unmounts
//     return () => clearInterval(intervalId);
//   }, []);
//   return (
//     <div className="welcome-page">
//       <Carousel >
//         <div>
//           <img src="https://images.pexels.com/photos/8820928/pexels-photo-8820928.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Slide 1" className="slide" />
//           <p className="legend">Welcome to My Blog App</p>
//         </div>
//         <div>
//           <img src="https://images.pexels.com/photos/6590699/pexels-photo-6590699.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Slide 2" className="slide" />
//           <p className="legend">Share Your Stories with the World</p>
//         </div>
//         <div>
//           <img src="https://images.pexels.com/photos/17038848/pexels-photo-17038848/free-photo-of-river-flowing-in-green-valley.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Slide 2" />
//           <p className="slide">Share Your Stories with the World</p>
//         </div>
//         {/* Add more slides as needed */}
//       </Carousel>
//       <div className="buttons">
//         <Link to="/signup" className="btn btn-primary">
//           Signup
//         </Link>
//         <Link to="/login" className="btn btn-secondary">
//           Login
//         </Link>
//       </div>
//     </div>
//   );
// }

// export default WelcomePage;
