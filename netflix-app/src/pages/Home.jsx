import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { MovieActions } from "../redux/reducers/movieSlice";
import Banner from "../components/Banner";
import api from "../api";
import MovieSlide from "../components/MovieSlide";

const Home = () => {
  const dispatch = useDispatch();
  const popularMovies = useSelector(state =>state.movie.popularMovies)
  
  const getMovieData = async (key) => {
    const API_URL = `/movie/${key}?language=ko-KR&page=1`;
    const res = await api.get(API_URL);
    return res.data;
  };

  useEffect(() => {
    const fetchData = async () => {
      const popular = await getMovieData("popular");
      const topRated = await getMovieData("top_rated");
      const upcoming = await getMovieData("upcoming");

      dispatch(
        MovieActions.initData({
          popular,
          topRated,
          upcoming,
        })
      );
    };
    fetchData();
  }, [dispatch]);
  

  
  return (
    <div>
      <Banner movie={popularMovies!=""?popularMovies.results[0]:""}/>
      <MovieSlide movie={popularMovies}/>
    </div>
  );
};

export default Home;
