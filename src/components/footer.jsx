import React from "react";
import {
  Container,
  Navbar,
  Nav,
  Col,
  Row
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
          <Nav.Link href="https://www.facebook.com/glamourhochzeit/"> <img
                  src={facebook}
                  alt="img"
                  height="30px"
                  width="30px"
                ></img></Nav.Link>
          <Nav.Link href="https://www.instagram.com/glamourhochzeit/"><img
                  src={instagramTwo}
                  alt="img"
                  height="25px"
                  width="25px"
                ></img></Nav.Link>
        </Nav>
      </Navbar>
        {/* FOOTER BOTTOM */}
        <Container className="footerBottom row-12 ">
          <Col>
        <Row className="textCentre row-12"><img
                  src={logo}
                  className="mt-2"
                  alt="home"
                  height="45px"
                  width="auto"
                ></img>
                </Row>
               
       <Row className="row-12 textCentre mt-1"> Edisonstraße 63/2 12459 Berlin</Row>
       </Col>
      </Container>
    </footer>
  );
};

export default Footer;
