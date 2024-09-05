import React from "react";

const Banner = ({ movie }) => {
  return (
    <div
      style={{
        backgroundImage: `url(https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${movie.poster_path})`,
        height: "50vh",
        width: "100vw",
        color: "white",
        backgroundSize: "cover",
        backgroundPosition: "center", // 배경 이미지 중앙 정렬
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        margin: 0, // 마진 제거
        padding: 0, // 패딩 제거
      }}
    >
      <div style={{ textAlign: 'left', padding: '20px', borderRadius: '10px', backgroundColor: 'rgba(0, 0, 0, 0.1)' }}>
        <h3>{movie.title}</h3>
        <br />
        <h6>{movie.overview}</h6>
      </div>
    </div>
  );
};

export default Banner;