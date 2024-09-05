import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { MovieActions } from "../redux/reducers/movieSlice";
import Banner from "../components/Banner";
import api from "../api";
import MovieSlide from "../components/MovieSlide";

const Home = () => {
  const dispatch = useDispatch();
  const {popularMovies,topRatedMovies,upcomingMovies} = useSelector(state =>state.movie)
  
  const getMovieData = async (key) => {
    const API_URL = `/movie/${key}?language=ko-KR&page=1`;
    const res = await api.get(API_URL);
    return res.data;
  };

  const getGenreData= async() =>{
    const GENRE_URL = '/genre/movie/list?language=ko'
    const res = await api.get(GENRE_URL);
    return res.data
  }

  useEffect(() => {
    const fetchData = async () => {
      const popular = await getMovieData("popular");
      const topRated = await getMovieData("top_rated");
      const upcoming = await getMovieData("upcoming");
      const genre = await getGenreData();

      dispatch(
        MovieActions.initData({
          popular,
          topRated,
          upcoming,
          genre
        })
      );
    };
    fetchData();
  }, [dispatch]);
  

  
  return (
    <div style={{backgroundColor:'black'}}>
      {popularMovies && popularMovies.results && popularMovies.results.length > 0 ? (
        <>
          <Banner movie={popularMovies.results[0]} />
          <MovieSlide popular={popularMovies.results} top={topRatedMovies.results} upcoming={upcomingMovies.results} />
        </>
      ) : (
        <div>영화 데이터가 없습니다.</div> // 데이터가 없을 때 보여줄 메시지
      )}
    </div>
  );
};

export default Home;
