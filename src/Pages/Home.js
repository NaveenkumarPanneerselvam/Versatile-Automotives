import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css'; 
import video1 from './Videos/Video 1.mp4';
import React, { useState, useEffect } from 'react';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import TestDrive from './Images/testdrive.avif';
import Easyaccess from './Images/Easy access.avif';



const Home = () => {

const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 1000);

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);




   // Carousel slides
   const slides = [
    { id: 1, image: './Images/car1.webp', title: 'Audi E-Tron GT' },
    { id: 2, image: './Images/car2.webp', title: 'Audi Q7' },
    { id: 3, image: './Images/car3.webp', title: 'Audi Q8 E-Tron' },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  

 


return (
    <div>

       {/* Show the loader if `showLoader` is true */}
       {showLoader ? (
        <div className="loading-screen">
          <img src="./Images/loader.png" />
        </div>
      ) : (
        // Render the About Us content after the loader hides
        <div>
         
        </div>
      )}







     <video className='intro'
      src={video1}
      autoPlay
      muted
      loop/>

<div className="text-overlay">
      <h1>Unleash the <br></br><span className='Btext'>Beast</span>,<br></br> Enjoy the <br></br><span className='Btext'>Ride</span>.</h1><br></br>
      <p style={{ fontSize: 'large' }}>Price Starting at ₹1,90,00,000</p>
      <button className="CB">Book Now</button>
    </div>

    
  {/* Carousel Section */}
    <div className="carousel-container">
        {/* Fixed Background */}
        <div className="carousel-background"></div>

        {/* Foreground Carousel */}
        <div className="carousel-content">
        <h2 className="carousel-top">Our Prototypes</h2>
          <img
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            className="carousel-image"
          />
          <h2 className="carousel-title">{slides[currentSlide].title}</h2>

          {/* Navigation Buttons */}
          <button className="carousel-btn prev-btn" onClick={handlePrev}>
            <FaArrowLeft />
          </button>
          <button className="carousel-btn next-btn" onClick={handleNext}>
            <FaArrowRight />
          </button>
        </div>
      </div>

      <div className="container">
      <div class="row row-cols-2">
        <div className="col">
          <img src={TestDrive} 
          height='400px'
          width='600px'/>
          <h2><br></br>Book a Test Drive</h2>
          <h5>Click here →</h5>
        </div>
        <div className="col">
        <img src={Easyaccess}
         height='400px'
         width='600px'/>
        <h2><br></br>Easy Customization</h2>
        <h5>Learn more →</h5>
        </div>
      </div>
    </div>


    <div className="subscribe-section">
      <div className="sub-container">
        <h1>Stay updated</h1>
        <p>by subscribing now</p>
      </div>
      <div className="subform-container">
        <input type="email" placeholder="Type your email here" title='Please fill out this field' />
        <input type="text" placeholder="Type your mobile number here" title='Please fill out this field' />
        <button className='otp'>GET OTP</button>
      </div>
    </div>


   

    


</div>
);
}

export default Home;
