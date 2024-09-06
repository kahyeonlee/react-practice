import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MovieCard from './MovieCard'

const MovieList = ({list}) => {

  console.log(list);
  

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };


  return (
    <Carousel responsive={responsive}>
      {list.map((item)=>(
        <MovieCard key={item.id} data={item}/>
      ))}
    </Carousel>
  );
};

export default MovieList;
