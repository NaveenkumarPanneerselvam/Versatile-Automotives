import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Form, Button, Row, Col, Dropdown  } from "react-bootstrap";
import './Favourites.css';


const Favourites=()=>{



  const [showLoader, setShowLoader] = useState(true);
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setShowLoader(false);
      }, 1000);
  
      return () => clearTimeout(timer); // Cleanup timer on unmount
    }, []);






    const [email, setEmail] = useState("");
    const [theme, setTheme] = useState("light"); // State to manage theme
    const [imageSrc, setImageSrc] = useState("./Images/logo_black.png"); // State to manage image source

    // Toggle theme function
  const handleThemeChange = (selectedTheme) => {
    setTheme(selectedTheme);

    // Change image based on selected theme
    if (selectedTheme === "dark") {
      setImageSrc("./Images/Logo_White.png"); // Dark mode image
  } else {
      setImageSrc("./Images/logo_black.png"); // Light mode image
  }
};



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





        <div className={`login-page ${theme}`}>
        <Container className="login-container">
          <Row className="login-box">
            {/* Left Side - Login Form */}
            <Col md={6} className="login-form">
              <h2 className="login-title"> {/*<img src="./Images/logo black.png" style={{height:"100px"}}/>*/}VA ID LOGIN</h2>
              <p className="login-text">
                Don’t have a VA ID?{" "}
                <a href="#" className="login-link">
                  Register here.
                </a>
              </p>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label className="login-label">VA ID (email address)</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    className="login-input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>
                <Button className="login-button" disabled={!email}>
                  Continue
                </Button>
              </Form>
              <p className="login-note">
                This page uses hCaptcha. For more details, please check either{" "}
                <a href="#" className="login-link">Data Privacy</a> or{" "}
                <a href="#" className="login-link">Legal Notice</a>.
              </p>
              <div className="login-links">
                <a href="#" className="login-link">Legal Notice</a>
                <a href="#" className="login-link">Data Privacy</a>


                {/* Display Mode Dropdown */}
              <Dropdown>
                <Dropdown.Toggle variant="secondary" className="display-mode-dropdown">
                  Display Mode
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => handleThemeChange("light")}>Light</Dropdown.Item>
                  <Dropdown.Item onClick={() => handleThemeChange("dark")}>Dark</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
                




              </div>
            </Col>
  
            {/* Right Side - Image Section */}
            <Col md={6} className="login-image-container">
            <img src={imageSrc} alt="VA ID" className="login-image" />

            </Col>
          </Row>
        </Container>
      </div>
      </div>
    )
}
export default Favourites;