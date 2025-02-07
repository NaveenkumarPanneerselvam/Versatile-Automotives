import { Outlet, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import { FaUser, FaShoppingCart, FaHeart, FaMapMarkerAlt,FaPhone } from 'react-icons/fa';
import logo from './Images/Logo White.png';
import { useLocation } from 'react-router-dom';
import './Layout.css';
import React from 'react';



const Layout = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  return (
    <div>
      <Navbar bg="" expand="lg" fixed="top" className={`navbar ${isHomePage ? 'navbar-transparent' : 'navbar-dark'}`}>
        <Container fluid>
          <Navbar.Brand as={Link} to="/">
            <img src={logo} alt="Logo" width="70" height="70" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarNav" />
          <Navbar.Collapse id="navbarNav">
            <Nav className="me-auto mb-2 mb-lg-0">
              <Nav.Item>
                <Button className="nkp" variant="link">
                  <Nav.Link as={Link} to="/models" className="white-font">Models</Nav.Link>
                </Button>
              </Nav.Item>
              <Nav.Item>
                <Button className="nkp" variant="link">
                  <Nav.Link as={Link} to="/about" className="white-font">About Us</Nav.Link>
                </Button>
              </Nav.Item>
              <Nav.Item>
                <Button className="nkp" variant="link">
                  <Nav.Link as={Link} to="/services" className="white-font">Services</Nav.Link>
                </Button>
              </Nav.Item>
              {/* <Nav.Item>
                <Button className="nkp" variant="link">
                  <Nav.Link as={Link} to="/contact" className="white-font">Contact</Nav.Link>
                </Button>
              </Nav.Item> */}
            </Nav>

            <Nav className="d-flex">
              <Nav.Item id="nav-icons">
                <Button className="nkp" variant="link">
                  <Nav.Link as={Link} to="/profile" title="Profile">
                    <FaUser style={{ color: '#ffffff', marginLeft: '4px' }} size={25} />
                  </Nav.Link>
                </Button>
              </Nav.Item>
              {/* <Nav.Item id="nav-icons">
                <Button className="nkp" variant="link">
                  <Nav.Link href="#" title="Cart">
                    <FaShoppingCart style={{ color: '#ffffff', marginLeft: '4px' }} size={25} />
                  </Nav.Link>
                </Button>
              </Nav.Item> */}
              <Nav.Item id="nav-icons">
                <Button className="nkp" variant="link">
                  <Nav.Link as={Link} to="/favourites" href="#" title="Favourites">
                    <FaHeart style={{ color: '#ffffff', marginLeft: '4px' }} size={25} />
                  </Nav.Link>
                </Button>
              </Nav.Item>
              <Nav.Item id="nav-icons">
                <Button className="nkp" variant="link">
                  <Nav.Link as={Link} to="/location" href="#" title="Nearby Store">
                    <FaMapMarkerAlt style={{ color: '#ffffff', marginLeft: '4px' }} size={25} />
                  </Nav.Link>
                </Button>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>


    {/* Floating Contact Icon */}
    {isHomePage && (
        <div
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            backgroundColor: '#007bff',
            borderRadius: '50%',
            width: '60px',
            height: '60px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            zIndex: 1000,
            cursor: 'pointer',
          }}
          title="Contact Us"
        >
          <FaPhone style={{ color: '#ffffff' }} size={30} />
        </div>
      )}



      {/* The Outlet will render the child components here */}
      <Outlet />

      <footer className={`footer ${isHomePage ? 'footer-transparent' : 'footer-dark'}`}>
        <div className="footer-content">
          <p>&copy; 2025 Your Company. All Rights Reserved.</p>
        </div>
      </footer>

     
      
</div>
  );
};

export default Layout;
