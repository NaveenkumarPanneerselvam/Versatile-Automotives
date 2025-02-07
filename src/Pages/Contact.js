// import React from "react";
// import { useState, useEffect } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import "./Contact.css";

// const Contact=()=>{

//     const [showLoader, setShowLoader] = useState(true);
    
//       useEffect(() => {
//         const timer = setTimeout(() => {
//           setShowLoader(false);
//         }, 1000);
    
//         return () => clearTimeout(timer); // Cleanup timer on unmount
//       }, []);





//     return(
//     <div>

//         {/* Show the loader if `showLoader` is true */}
//       {showLoader ? (
//         <div className="loading-screen">
//           <img src="./Images/loader.png" />
//         </div>
//       ) : (
//         // Render the About Us content after the loader hides
//         <div>
//          <h1>Contact Us</h1>
//         </div>
//       )}


    


//     </div>
// )
// }
// export default Contact;