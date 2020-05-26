import React, { useEffect } from "react";
//react-bootstrap
import {
  Container,
  Jumbotron,
  Col,
  Nav,
  Navbar,
} from "react-bootstrap";
//router
import { Link } from 'react-router-dom';
//assets
import facebook from "../../assets/facebook.png";
import instagramTwo from "../../assets/instagramTwo.png";
import weddingPortfolio from "../../assets/weddingPortfolio.jpg";
//components
import WeddingPhotos from './weddingPhotos';

const WeddingPortfolio = (match) => {

    useEffect(() => {
      window.scrollTo(0,0)
      console.log(match,"match")
    },[match]);
    
  return (
    <>
           <Jumbotron className="jumbotronSale" fluid>
        <img
          src={weddingPortfolio}
          alt="image"
          width="100%"
          height="auto"
        />
      </Jumbotron>

      <Container className="productTitle col-10">
        <Col className="col-xs-12 col-md-4">
      <div  className="subtitleLargest">  
      <hr/>   
      Wedding Portfolio
      </div> 
      </Col>
      <Col className="col-xs-12 col-md-4 col-xl-3">
          <Navbar>
            <Nav>  
            <Link to={"/weddings/packages"}>
            <small>Prices</small>
            </Link> 
            </Nav>
            <Nav className="mr-5">
              <Nav.Link href="https://www.facebook.com/knvision.co.uk/">
                <img src={facebook} alt="img" height="30px" width="30px"></img>
              </Nav.Link>
              <Nav.Link href="https://www.instagram.com/knvision_photography/">
                <img src={instagramTwo} alt="img" height="25px" width="25px"></img>
              </Nav.Link>
            </Nav>
          </Navbar>
          </Col>
      </Container>
      <WeddingPhotos/>
    </>
  );
};

export default WeddingPortfolio;
