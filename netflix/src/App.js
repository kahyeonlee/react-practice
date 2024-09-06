import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import MovieDetail from './pages/MovieDetail'
import NavigationBar from './components/NavigationBar'


function App() {
  return (
    <div>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/movies/:id" element={<MovieDetail/>}/>
      </Routes>
    </div>
  );
}

export default App;
