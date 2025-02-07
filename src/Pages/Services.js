import React from "react";
import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Services.css';

const Services=()=>{

     const [showLoader, setShowLoader] = useState(true);
    
      useEffect(() => {
        const timer = setTimeout(() => {
          setShowLoader(false);
        }, 1000);
    
        return () => clearTimeout(timer); // Cleanup timer on unmount
      }, []);

    return(
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




            <img src="./Images/Services/carosal.webp"  class="background-image" />
        <div class="text-box">
            <h1>BETTER SERVICE<br />BETTER SAFETY</h1>
            <a href="#" class="service-link">Book a service →</a>
        </div>


        <div>
            <div className="text1">
                <center><h1>Our Promise</h1>
                <p>For all your vehicle maintenance and repair needs, we have a network of Tata Motors<br/> authorized workshops spread across India. A Tata Authorized workshop gives you best-in-class<br/> service for your Tata vehicle.</p></center>
            </div>
            <center><video className="sr-video" src="./Videos/service-video.mp4" autoPlay controls loop muted/></center>
        </div>

        
        <div className="text1">
        <center><h1>Our Products</h1>
        <p>Tata Motors is known for delivering best quality products that give value for years to come.<br/> Our service products are also designed on the same philosophy. Under this promise.</p></center>
        </div>

        <div class="container text-center">


            <div class="row row-cols-2">


            <div class="col">
                <img src="./Images/Services/side1.webp"/>
            </div>

            <div class="col">
                <div className="text2">
                    <h1>Extended warranty</h1>
                    <p>Extend the benefits that you enjoy under warranty, by one or two more years, to protect your car for a longer duration/distance (Upto 1,50,000 kms). The extended warranty will cover mechanical and electrical breakdowns in your car, and it starts immediately after expiry of the original warranty. We strongly recommend the purchase of an Extended Warranty as early as possible.</p>
                    <a href="">Learn more→</a>
                </div>
            </div>
            

            <div class="col">
            <div className="text2">
                <br/><br/><br/>
                    <h1>Value care (AMC)</h1>
                    <p>Value Care (AMC) is a maintenance plan that guarantees protection against unexpected repairs & provides substantial savings through protection against inflation and price volatility of consumables. It covers all services and repairs including labour, parts & consumables.</p>
                    <a href="">Learn more→</a>
                </div>
            </div>

            <div class="col">
                <br/>
            <img src="./Images/Services/side2.webp"/>
            </div>

            <div class="col">
            <br/>
            <img src="./Images/Services/side3.webp"/>
            </div>

            <div class="col">
            <div className="text2">
                <br/>
                    <h1>24 x 7 Roadside <br/>assistance</h1>
                    <p>We have tied up with TVS Auto Assist (India) Limited to ensure that you get immediate and hassle free service in the event of any car breakdown. Our network for road-side assistance is spread across the length and breadth of the country and covers cities, highways and hilly terrains across India.</p>
                    <a href="">Learn more→</a>
                </div>
            </div>
            </div>
        </div>
        <br/>




    
    
    
    </div>
        

        
)
}
export default Services;