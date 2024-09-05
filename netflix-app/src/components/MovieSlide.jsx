import React from "react";
import MovieCard from './MovieCard'

const MovieSlide = ({ popular,top,upcoming }) => {

  return (
    <div>
      <h4 className="card-title">Popular Movie</h4>
      <MovieCard movie={popular} />
      <h4 className="card-title">Top rated Movie</h4>
      <MovieCard movie={top} />
      <h4 className="card-title">Upcoming Movie</h4>
      <MovieCard movie={upcoming} />
    </div>
  );
};

export default MovieSlide;
