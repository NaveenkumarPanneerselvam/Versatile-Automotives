import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./About.css";

const About = () => {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 1000);

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

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


        <img src="./Images/About/carosal.jpg"  class="bg-image" />
        <div class="about-box">
            <h1>ABOUT US</h1>
        </div>

        <div id="c-after">
          <p>
            Born of the spirit of racing, Versatile Automotives epitomises the power of a lifelong<br/> 
            passion and the beauty of limitless human achievement, creating<br/> 
            timeless icons for a changing world
          </p>
        </div>

        <br/><br/><br/><br/><br/><br/>
        <h1><center><b>OUR VALUES</b></center></h1>
  <div id="values">

  <div className="about-img-box">

    <div className="about-row">

      <div className="about-col">
        <img src="./Images/About/col 1.avif" alt="Value 1" />
        <h1>INDIVIDUAL <br /> AND TEAM</h1>
        <p>
          Our talented individuals are our greatest resource. However, they can only pursue
          the extraordinary by working together as a team. By fostering integrity, excellence,
          and generosity, we give each of our people the possibility to express their full potential 
          – and be part of something greater.
        </p>
      </div>

      <div className="about-col">
        <img src="./Images/About/col 2.avif" alt="Value 2" />
        <h1>TRADITION AND<br/> INNOVATION</h1>
        <p>
        Tradition and innovation drive each other. 
        The ongoing quest for lasting firsts is what fuels the Versatile automotives legend. 
        Our ability to combine revolutionary technological solutions with 
        exceptional artisanal craftsmanship is what enables us to create icons 
        that stay timeless in a fast-changing world.
        </p>
      </div>

      <div className="about-col">
        <img src="./Images/About/col 3.avif" alt="Value 3" />
        <h1>PASSION AND<br/>  ACHIEVEMENT</h1>
        <p>
        Versatile Automotive’s racing spirit lives on in emotions that transcend the 
        road and the track, ultimately becoming an authentic attitude 
        towards life. Nothing excites us more than setting ambitious 
        targets and expectations – and then exceeding them, to push every 
        boundary. It is how the power of passion becomes the beauty of achievement.
        </p>
      </div>

    </div>

  </div>

</div>


<div className="ferrari-container">
      <div className="text-content">
        <h1>THE FOUNDATION <br /> OF THE VERSATILE AUTOMOTIVES BRAND</h1>
        <p>
          Our story officially begins in 1947 when the first car built under the  
          marque, the 125 S, drove through the historic factory gates on Via Abetone 
          Inferiore in Maranello.
        </p>
        <a href="#" className="discover-more">
          DISCOVER MORE <span>→</span>
        </a>
      </div>
      <div className="image-container">
        <img src="./Images/About/history.avif" alt="Ferrari History" />
      </div>
    </div>
  

    <div className="business-container">
      <h1>AREAS OF BUSINESS</h1>
      <p>
        The Logo symbolizes exclusivity, performance, and quality all over the world.
        Our prestige is built upon decades of sporting success and the inimitable style of our 
        cars, which are unique in their innovation, technology, and driving pleasure.
        We craft exclusive, authentic, and memorable experiences for our clients in everything we do.
      </p>
      <a href="#" className="discover-more">
        DISCOVER MORE <span>→</span>
      </a>
    </div>





        

        













    </div>
  );
};

export default About;
