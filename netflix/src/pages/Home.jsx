import React, { useEffect } from "react";
import api from "../api";
import { useDispatch, useSelector } from "react-redux";
import { initData } from "../redux/reducers/movieSlice";
import Banner from "../components/Banner";
import MovieList from "../components/MovieList";

const Home = () => {
  const dispatch = useDispatch();
  const { popularMovies, topRatedMovies, upcomingMovies } = useSelector(
    (state) => state.movie
  );
  const getMovieInfoList = async () => {
    const popularApi = api.get("/movie/popular?language=ko-KR&page=1");
    const topRatedApi = api.get("/movie/top_rated?language=ko-KR&page=1");
    const upcomingApi = api.get("/movie/upcoming?language=ko-KR&page=1");

    // Promise.all([]) : 동시에 여러개의 API호출을 해야 할 경우 사용
    // 하나라도 통신과정에서 오류가 발생하면 모든 요청이 reject(거절) 되는 방식
    const [popular, topRate, upcoming] = await Promise.all([
      popularApi,
      topRatedApi,
      upcomingApi,
    ]);

    dispatch(
      initData({
        p: popular.data.results,
        t: topRate.data.results,
        u: upcoming.data.results,
      })
    );
  };

  useEffect(() => {
    getMovieInfoList();
  }, []);

  return (
    <div>
      {popularMovies.length > 0 ? (
        <div>
          <Banner data={popularMovies[0]} />

          <h3>인기 있는 영화</h3>
          <MovieList  list={popularMovies}/>

          <h3>평점이 높은 영화</h3>
          <MovieList  list={topRatedMovies}/>

          <h3>개봉예정 영화</h3>
          <MovieList  list={upcomingMovies}/>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Home;
