import React,  { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel"; // Import the carousel component
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
//import "./WelcomePage.css"; // Add custom styles if needed

function WelcomePage() {
  const [activeSlide, setActiveSlide] = useState(0); // Initial active slide index
  const totalSlides = 2; // Replace with the total number of slides in your Carousel
  const slideInterval = 5000; // Interval in milliseconds (5 seconds in this example)

  // Function to change the active slide
  const changeSlide = () => {
    setActiveSlide((prevSlide) => (prevSlide + 1) % totalSlides);
  };

  // Effect to set up the automatic slide transition
  useEffect(() => {
    const intervalId = setInterval(changeSlide, slideInterval);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className="welcome-page">
      <Carousel >
        <div>
          <img src="https://images.pexels.com/photos/998592/pexels-photo-998592.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Slide 1" className="slide" />
          <p className="legend">Welcome to My Blog App</p>
        </div>
        <div>
          <img src="https://images.pexels.com/photos/2414442/pexels-photo-2414442.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Slide 2" className="slide1" />
          <p className="legend">Share Your Stories with the World</p>
        </div>
        <div>
          <img src="https://images.pexels.com/photos/2414442/pexels-photo-2414442.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Slide 2" />
          <p className="legend">Share Your Stories with the World</p>
        </div>
        {/* Add more slides as needed */}
      </Carousel>
      <div className="buttons">
        <Link to="/signup" className="btn btn-primary">
          Signup
        </Link>
        <Link to="/login" className="btn btn-secondary">
          Login
        </Link>
      </div>
    </div>
  );
}

export default WelcomePage;
