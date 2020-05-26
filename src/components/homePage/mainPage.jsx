import React, {useEffect} from 'react';

//components
import SlideMain from './slideMain';
import Portfolio from './portfolio';

const MainPage = (props,match) => {

  
  useEffect(() => {
    window.scrollTo(0,0)
    console.log(match,"match mainPage")
  },[match]);

  return (
      <>
      <SlideMain />
      <Portfolio/>
      </>
    
  );
}

export default MainPage;
