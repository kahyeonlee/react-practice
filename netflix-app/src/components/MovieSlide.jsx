import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const MovieSlide = ({movie}) => {
  const  responsive  =  { 
    superLargeDesktop : { 
      // 이름은 자유롭게 지정할 수 있습니다. 
      breakpoint : {  max : 4000 ,  min : 3000  } , 
      items : 5 
    } , 
    desktop : { 
      breakpoint : {  max : 3000 ,  min : 1024  } , 
      items : 3 
    } , 
    tablet : { 
      breakpoint : {  max : 1024 ,  min : 464  } , 
      items : 2 
    } , 
    mobile : { 
      breakpoint : {  max : 464 ,  min : 0  } , 
      items : 1 
    } 
  } ; 

  return (
    <div>
      <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={3000}>
        <div>
          Item 1
        </div>

      </Carousel>
    </div>
  );
};

export default MovieSlide;
