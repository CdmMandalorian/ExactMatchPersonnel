import React, { useState } from 'react';
import { Button } from '../Button/Button.js';
import { Link } from 'react-router-dom';
import './style.css';
import logo from '../../Assets/navbarlogo/EMPlogo2.png'
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <>
      <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container className='nav'>
      <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
      <Navbar.Collapse id="responsive-navbar-nav"> 
          <Nav className="ml-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                HOME
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
              >
                ABOUT
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/mission"
                onClick={() => updateExpanded(false)}
              >
                MISSION
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/services"
                onClick={() => updateExpanded(false)}
              >
                SERVICES
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/Contact"
                onClick={() => updateExpanded(false)}
              >
                CONTACT
              </Nav.Link>
            </Nav.Item>
          </Nav>
          </Navbar.Collapse>
          <Navbar.Brand href="/">
          <img src={logo} className="img-fluid logo" alt="brand"/>
        </Navbar.Brand>
      </Container>
    </Navbar>
    </>
  );
}

export default NavBar;