import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useEffect} from 'react'
import api from './api'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import Movies from './pages/Movies';
import MovieDetail from './pages/MovieDetail';
import Header from './components/Header';

function App() {
  const getMovieData =async() =>{
    const API_URL ='/movie/popular?language=ko-KR&page=1';
    const res = await api.get(API_URL)
    console.log(res.data);
    
  }


  useEffect(()=>{
    getMovieData();
  },[])

  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/movies' element={<Movies/>}/>
        <Route path='/movies/:id' element={<MovieDetail/>}/>
      </Routes>
    </div>
  );
}

export default App;
