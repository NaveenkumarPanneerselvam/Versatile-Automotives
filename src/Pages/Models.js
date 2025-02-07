import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Models.css';
import { useState, useEffect } from "react";
// import { MdPadding } from "react-icons/md";

const Models = () => {


  const [showLoader, setShowLoader] = useState(true);
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setShowLoader(false);
      }, 1000);
  
      return () => clearTimeout(timer); // Cleanup timer on unmount
    }, []);




    return(
      
      <div className="container">

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






      {/* Sidebar */}
      <div className="sidebar">
        <h2>All Models</h2>
        <button className="sidebar-button">
          <a href="#Audi">Audi</a>
        </button>
        <button className="sidebar-button">
          <a href="#BMW">BMW</a>
        </button>
        <button className="sidebar-button">
          <a href="#Ferrari">Ferrari</a>
        </button>
        <button className="sidebar-button">
          <a href="#Jaguar">Jaguar</a>
        </button>
        <button className="sidebar-button">
          <a href="#Koenigsegg">Koenigsegg</a>
        </button>
        <button className="sidebar-button">
          <a href="#Lamborghini">Lamborghini</a>
        </button>
        <button className="sidebar-button">
          <a href="#LandRover">Land Rover</a>
        </button>
        <button className="sidebar-button">
          <a href="#McLaren">McLaren</a>
        </button>
        <button className="sidebar-button">
          <a href="#Mercedes-Benz">Mercedes-Benz</a>
        </button>
        <button className="sidebar-button">
          <a href="#Tata-Motors">Tata Motors</a>
        </button>
        </div>
      

      {/* Main Content */}
      <div className="main-content">
      <h2>All Models</h2>

        
         {/* Audi Section */}
        <section id="Audi"></section>
        <h3>Audi</h3>
        <div className="card-container">
        <div className="card">
          <img
            src="./Images/Audi/Audi E-Tron GT.png"
            alt="Car Model"
            className="card-image"
            title="Audi E-Tron GT"
          />
          <h3 className="card-title">E-Tron GT</h3>
          <button className="btn discover">Discover</button>
          <button className="btn configure">Configure</button>
        </div>
       
        <div className="card">
          <img
            src="./Images/Audi/Audi Q7.png"
            alt="Car Model"
            className="card-image"
            title="Audi Q7"
          />
          <h3 className="card-title">Q7</h3>
          <button className="btn discover">Discover</button>
          <button className="btn configure">Configure</button>
        </div>
      
        <div className="card">
          <img
            src="./Images/Audi/Audi A5.png"
            alt="Car Model"
            className="card-image"
            title="Audi A5"
          />
          <h3 className="card-title">A5</h3>
          <button className="btn discover">Discover</button>
          <button className="btn configure">Configure</button>
        </div>
        </div>



        {/* BMW Section */}
        <section id="BMW"></section>
        <h3>BMW</h3>
        <div className="card-container">
        <div className="card">
          <img
            src="./Images/Audi/Audi E-Tron GT.png"
            alt="Car Model"
            className="card-image"
            title="BMW I4"
          />
          <h3 className="card-title">I4</h3>
          <button className="btn discover">Discover</button>
          <button className="btn configure">Configure</button>
        </div>
       
        <div className="card">
          <img
            src="./Images/Audi/Audi Q7.png"
            alt="Car Model"
            className="card-image"
          />
          <h3 className="card-title">Q8</h3>
          <button className="btn discover">Discover</button>
          <button className="btn configure">Configure</button>
        </div>
      
        <div className="card">
          <img
            src="./Images/Audi/Audi A5.png"
            alt="Car Model"
            className="card-image"
          />
          <h3 className="card-title">Q8</h3>
          <button className="btn discover">Discover</button>
          <button className="btn configure">Configure</button>
        </div>
        </div>


        {/* Ferrari Section */}
        <section id="Ferrari"></section>
        <h3>Ferrari</h3>
        <div className="card-container">
        <div className="card">
          <img
            src="./Images/Audi/Audi E-Tron GT.png"
            alt="Car Model"
            className="card-image"
          />
          <h3 className="card-title">Q8</h3>
          <button className="btn discover">Discover</button>
          <button className="btn configure">Configure</button>
        </div>
       
        <div className="card">
          <img
            src="./Images/Audi/Audi Q7.png"
            alt="Car Model"
            className="card-image"
          />
          <h3 className="card-title">Q8</h3>
          <button className="btn discover">Discover</button>
          <button className="btn configure">Configure</button>
        </div>
      
        <div className="card">
          <img
            src="./Images/Audi/Audi A5.png"
            alt="Car Model"
            className="card-image"
          />
          <h3 className="card-title">Q8</h3>
          <button className="btn discover">Discover</button>
          <button className="btn configure">Configure</button>
        </div>
      </div>


        {/* Jaguar Section */}
        <section id="Jaguar"></section>
        <h3>Jaguar</h3>
        <div className="card-container">
        <div className="card">
          <img
            src="./Images/Audi/Audi E-Tron GT.png"
            alt="Car Model"
            className="card-image"
          />
          <h3 className="card-title">Q8</h3>
          <button className="btn discover">Discover</button>
          <button className="btn configure">Configure</button>
        </div>
       
        <div className="card">
          <img
            src="./Images/Audi/Audi Q7.png"
            alt="Car Model"
            className="card-image"
          />
          <h3 className="card-title">Q8</h3>
          <button className="btn discover">Discover</button>
          <button className="btn configure">Configure</button>
        </div>
      
        <div className="card">
          <img
            src="./Images/Audi/Audi A5.png"
            alt="Car Model"
            className="card-image"
          />
          <h3 className="card-title">Q8</h3>
          <button className="btn discover">Discover</button>
          <button className="btn configure">Configure</button>
        </div>
      </div>


        {/* Koenigsegg Section */}
        <section id="Koenigsegg"></section>
        <h3>Koenigsegg</h3>
        <div className="card-container">
        <div className="card">
          <img
            src="./Images/Audi/Audi E-Tron GT.png"
            alt="Car Model"
            className="card-image"
          />
          <h3 className="card-title">Q8</h3>
          <button className="btn discover">Discover</button>
          <button className="btn configure">Configure</button>
        </div>
       
        <div className="card">
          <img
            src="./Images/Audi/Audi Q7.png"
            alt="Car Model"
            className="card-image"
          />
          <h3 className="card-title">Q8</h3>
          <button className="btn discover">Discover</button>
          <button className="btn configure">Configure</button>
        </div>
      
        <div className="card">
          <img
            src="./Images/Audi/Audi A5.png"
            alt="Car Model"
            className="card-image"
          />
          <h3 className="card-title">Q8</h3>
          <button className="btn discover">Discover</button>
          <button className="btn configure">Configure</button>
        </div>
        </div>


        {/* Lamborghini Section */}
        <section id="Lamborghini"></section>
        <h3>Lamborghini</h3>
        <div className="card-container">
        <div className="card">
          <img
            src="./Images/Audi/Audi E-Tron GT.png"
            alt="Car Model"
            className="card-image"
          />
          <h3 className="card-title">Q8</h3>
          <button className="btn discover">Discover</button>
          <button className="btn configure">Configure</button>
        </div>
       
        <div className="card">
          <img
            src="./Images/Audi/Audi Q7.png"
            alt="Car Model"
            className="card-image"
          />
          <h3 className="card-title">Q8</h3>
          <button className="btn discover">Discover</button>
          <button className="btn configure">Configure</button>
        </div>
      
        <div className="card">
          <img
            src="./Images/Audi/Audi A5.png"
            alt="Car Model"
            className="card-image"
          />
          <h3 className="card-title">Q8</h3>
          <button className="btn discover">Discover</button>
          <button className="btn configure">Configure</button>
        </div>
        </div>


        {/* Land Rover Section */}
        <section id="LandRover"></section>
        <h3>Land Rover</h3>
        <div className="card-container">
        <div className="card">
          <img
            src="./Images/Audi/Audi E-Tron GT.png"
            alt="Car Model"
            className="card-image"
          />
          <h3 className="card-title">Q8</h3>
          <button className="btn discover">Discover</button>
          <button className="btn configure">Configure</button>
        </div>
       
        <div className="card">
          <img
            src="./Images/Audi/Audi Q7.png"
            alt="Car Model"
            className="card-image"
          />
          <h3 className="card-title">Q8</h3>
          <button className="btn discover">Discover</button>
          <button className="btn configure">Configure</button>
        </div>
      
        <div className="card">
          <img
            src="./Images/Audi/Audi A5.png"
            alt="Car Model"
            className="card-image"
          />
          <h3 className="card-title">Q8</h3>
          <button className="btn discover">Discover</button>
          <button className="btn configure">Configure</button>
        </div>
        </div>


        {/* McLaren Section */}
        <section id="McLaren"></section>
        <h3>McLaren</h3>
        <div className="card-container">
        <div className="card">
          <img
            src="./Images/Audi/Audi E-Tron GT.png"
            alt="Car Model"
            className="card-image"
          />
          <h3 className="card-title">Q8</h3>
          <button className="btn discover">Discover</button>
          <button className="btn configure">Configure</button>
        </div>
       
        <div className="card">
          <img
            src="./Images/Audi/Audi Q7.png"
            alt="Car Model"
            className="card-image"
          />
          <h3 className="card-title">Q8</h3>
          <button className="btn discover">Discover</button>
          <button className="btn configure">Configure</button>
        </div>
      
        <div className="card">
          <img
            src="./Images/Audi/Audi A5.png"
            alt="Car Model"
            className="card-image"
          />
          <h3 className="card-title">Q8</h3>
          <button className="btn discover">Discover</button>
          <button className="btn configure">Configure</button>
        </div>
        </div>


        {/* Mercedes-Benz Section */}
        <section id="Mercedes-Benz"></section>
        <h3>Mercedes-Benz</h3>
        <div className="card-container">
        <div className="card">
          <img
            src="./Images/Audi/Audi E-Tron GT.png"
            alt="Car Model"
            className="card-image"
          />
          <h3 className="card-title">Q8</h3>
          <button className="btn discover">Discover</button>
          <button className="btn configure">Configure</button>
        </div>
       
        <div className="card">
          <img
            src="./Images/Audi/Audi Q7.png"
            alt="Car Model"
            className="card-image"
          />
          <h3 className="card-title">Q8</h3>
          <button className="btn discover">Discover</button>
          <button className="btn configure">Configure</button>
        </div>
      
        <div className="card">
          <img
            src="./Images/Audi/Audi A5.png"
            alt="Car Model"
            className="card-image"
          />
          <h3 className="card-title">Q8</h3>
          <button className="btn discover">Discover</button>
          <button className="btn configure">Configure</button>
        </div>
        </div>


        {/* Tata-Motors Section */}
        <section id="Tata-Motors"></section>
        <h3>Tata Motors</h3>
        <div className="card-container">
        <div className="card">
          <img
            src="./Images/Audi/Audi E-Tron GT.png"
            alt="Car Model"
            className="card-image"
          />
          <h3 className="card-title">Q8</h3>
          <button className="btn discover">Discover</button>
          <button className="btn configure">Configure</button>
        </div>
       
        <div className="card">
          <img
            src="./Images/Audi/Audi Q7.png"
            alt="Car Model"
            className="card-image"
          />
          <h3 className="card-title">Q8</h3>
          <button className="btn discover">Discover</button>
          <button className="btn configure">Configure</button>
        </div>
      
        <div className="card">
          <img
            src="./Images/Audi/Audi A5.png"
            alt="Car Model"
            className="card-image"
          />
          <h3 className="card-title">Q8</h3>
          <button className="btn discover">Discover</button>
          <button className="btn configure">Configure</button>
        </div>
        </div>


        



        



      

       

        
      </div>
</div>
    )
}
export default Models;