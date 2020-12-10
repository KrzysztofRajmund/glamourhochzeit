import React from "react";
//react-bootstrap
import {
  Navbar,
  Nav
} from "react-bootstrap";
//assets
import home from "./assets/home.png"
import logo from "../../assets/logo.png"
//router
import { Link } from 'react-router-dom';

const NavMain = () => {

  return (
    <>
      {/* navbar */}
      <Navbar className="navbarMain" expand="lg" sticky="top">
        <Navbar.Brand>  
        <Link to={"/"}>
            {" "}
            <img src={logo} alt="home" height="45px" width="auto"></img>
          </Link>
                </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
          <Nav.Link>
            <Link to={"/weddings/packages"}>
            Packages
            </Link>
            </Nav.Link>
          <Nav.Link> 
          <Link to={"/weddings"}>
            Weddings
            </Link>
            </Nav.Link>
          </Nav>
         
          <Nav className="mr-5">
          <Nav.Link>
            <Link to={"/about"}>
            About
            </Link>
            </Nav.Link>
            <Nav.Link>
            <Link to={"/contact"}>
            Contact
            </Link>
            </Nav.Link>
            <Nav.Link>
            <Link to={"/"}>
            <img
                  src={home}
                  alt="home"
                  height="25px"
                  width="25px"
                ></img>
            </Link>
            </Nav.Link>   
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavMain;
