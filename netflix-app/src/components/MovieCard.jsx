import React, { useState } from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useSelector } from 'react-redux';
import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';
// import { useNavigate } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  const [hoveredMovie, setHoveredMovie] = useState(null);
  const genreList = useSelector(state => state.movie.genreList)
  
  // const navi = useNavigate();

  console.log(genreList);

  const responsive = {
    superLargeDesktop: {
      // 이름은 자유롭게 지정할 수 있습니다. 
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 5
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 5
    }
  };

  return (
    <Carousel responsive={responsive} infinite={true}>
      {movie.map((movie) => (
        <div key={movie.id} style={{ backgroundColor: 'black', padding: '10px', margin: '0 10px' }} onMouseEnter={() => setHoveredMovie(movie)} onMouseLeave={() => setHoveredMovie(null)}>
          <img
            src={`https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${movie.poster_path}`}
            style={{ width: '100%', height: '100px' }}
            alt={movie.title}
          />

          {hoveredMovie === movie && (
            <div style={{
              position: 'absolute',
              bottom: '10px',
              left: '10px',
              color: 'white',
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
              padding: '10px',
              borderRadius: '5px'
            }}>
            <h5>{movie.title}</h5>
              <Stack direction="horizontal" gap={2}>
                {movie.genre_ids.map((id) => 
                    <Badge key={id} bg="danger">
                      {id}
                    </Badge>
                )}
              </Stack>
              <p>평점 : {movie.vote_average.toFixed(1)}점 | {movie.adult ? "성인" : "청소년"}</p>
            </div>
          )}
        </div>
      ))}
    </Carousel>
  );
}

export default MovieCard