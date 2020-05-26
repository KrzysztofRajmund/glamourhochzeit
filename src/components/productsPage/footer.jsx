import React from "react";
import {
  Container,
  Navbar,
  Nav
} from "react-bootstrap";
//assets
import facebook from ".././assets/facebook.png";
import instagramTwo from ".././assets/instagramTwo.png";
import logo from "../assets/logo.png"

const Footer = () => {
  return (
    <footer>
        {/* FOOTER TOP */}
      <Navbar className="footerTop">
        <Nav className="footerTopElementOne ml-5 mr-auto">
          <Nav.Link  className="footerLink" href="/knvision/weddings/packages">FAQs</Nav.Link>
          <Nav.Link className="footerLink" href="/knvision/weddings/packages">Pricing</Nav.Link>
        </Nav>
        <Nav className="mr-5">
          <Nav.Link href="https://www.facebook.com/knvision.co.uk/"> <img
                  src={facebook}
                  alt="img"
                  height="30px"
                  width="30px"
                ></img></Nav.Link>
          <Nav.Link href="https://www.instagram.com/knvision_photography/"><img
                  src={instagramTwo}
                  alt="img"
                  height="25px"
                  width="25px"
                ></img></Nav.Link>
        </Nav>
      </Navbar>
        {/* FOOTER BOTTOM */}
        <Container className="footerBottom row-12">
        <div className="footerLogo"><img
                  src={logo}
                  alt="home"
                  height="25px"
                  width="auto"
                ></img></div>
       
      </Container>
    </footer>
  );
};

export default Footer;
