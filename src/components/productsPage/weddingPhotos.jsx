import React, { useState, useEffect } from "react";
//react-boottrap
import {
  Container,
  Carousel,
  Card,
  CardGroup,
  Row,
  Modal,
} from "react-bootstrap";
//redux
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getItems, getProductDetails } from "../../actions/fetchActions";
//assets
import xButton from "../../assets/xButton.png";

const WeddingPhotos = ({
  getItems,
  getProductDetails,
  fetchReducer,
  selectedProduct,
}) => {
  useEffect(() => {
    getItems();
  }, []);

  //carousel
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  //modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (id) => {
    setShow(true);
    getProductDetails(id);
  };

  const firstSlide = fetchReducer.slice(0, 8).map((item) => (
    <Row className="col-12 col-md-6" key={item.id}>
      <Card className="chosenForYouRow" onClick={() => handleShow(item.id)}>
        <a>
          <Card.Img variant="top" src={item.url} />
        </a>
      </Card>
    </Row>
  ));
  const secondSlide = fetchReducer.slice(9, 17).map((item) => (
    <Row className="col-12 col-md-6" key={item.id}>
      <Card className="chosenForYouRow" onClick={() => handleShow(item.id)}>
        <a>
          <Card.Img variant="top" src={item.url} />
        </a>
      </Card>
    </Row>
  ));
  return (
    <Container className="col-12">
      {/* modal */}
      <Modal
        show={show}
        onHide={handleClose}
        size="xl"
        backdropClassName="backdropModal"
      >
        <div onClick={handleClose} className="modalX">
          <img src={xButton} width="20px" height="20px" alt="xButton" />
        </div>
        <Card.Img
          className="d-block w-100"
          src={selectedProduct.url}
          height="auto"
        />
      </Modal>
      {/* carousel */}
      <Carousel
        className="chosenForYouCarousel"
        indicators={true}
        controls={false}
        interval={null}
        slide={true}
        activeIndex={index}
        onSelect={handleSelect}
      >
        <Carousel.Item>
          <CardGroup>{firstSlide}</CardGroup>
        </Carousel.Item>
        {/* <Carousel.Item>
            <CardGroup>
          {secondSlide}
          </CardGroup>
          </Carousel.Item> */}
      </Carousel>
    </Container>
  );
};

WeddingPhotos.propTypes = {
  getItems: PropTypes.func.isRequired,
  fetchReducer: PropTypes.array.isRequired,
  getProductDetails: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  fetchReducer: state.fetchReducer.items,
  selectedProduct: state.fetchReducer.productDetails,
});

export default connect(mapStateToProps, { getItems, getProductDetails })(
  WeddingPhotos
);
