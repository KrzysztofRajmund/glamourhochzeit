import React, {Component,useState, useEffect} from 'react';
//bootstrap
import {Carousel,CarouselItem} from 'react-bootstrap'
//redux
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getItems} from '../../actions/fetchActions';


const SlideMain = ({getItems,fetchReducer}) => {

    useEffect (()=>{
        getItems();
    },[])

    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
    const suggestedItems = fetchReducer.slice(0, 8).map((item) => (
      <Carousel.Item key={item.id}>
          <img
            className="d-block w-100"
            src={item.jumbotronUrl}
            alt="First slide"
            height="auto"
            width="100%"
          />
      </Carousel.Item>
    ));
    return (
      <>
        <Carousel activeIndex={index} onSelect={handleSelect}>
            {suggestedItems}
        </Carousel>
        </>
      );
}


SlideMain.propTypes = {
    getItems: PropTypes.func.isRequired,
    fetchReducer: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
fetchReducer: state.fetchReducer.items
});

export default connect (mapStateToProps, {getItems})(SlideMain);
