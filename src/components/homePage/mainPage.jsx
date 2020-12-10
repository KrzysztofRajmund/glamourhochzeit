import React, {useEffect} from 'react';

//components
import SlideMain from './slideMain';

const MainPage = (props,match) => {

  
  useEffect(() => {
    window.scrollTo(0,0)
    console.log(match,"match mainPage")
  },[match]);

  return (
      <>
      <SlideMain />
      </>
    
  );
}

export default MainPage;
