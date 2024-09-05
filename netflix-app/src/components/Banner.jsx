import React from "react";

const Banner = ({ movie }) => {
  console.log(movie);
  return (
    <div
      style={{
        backgroundImage: `url(https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${movie.poster_path})`,
        height: "100vh",
        width: "100vw",
        color: "white",
        backgroundSize: "cover",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column", // 세로 방향으로 배치
      }}
    >
      <div style={{textAlign:'left' ,padding:'20px', borderRadius: '10px'}}>
        <h1>{movie.title}</h1>

        <br />

        <h4>{movie.overview}</h4>
      </div>
    </div>
  );
};

export default Banner;
