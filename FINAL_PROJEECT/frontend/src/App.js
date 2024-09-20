import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Routes,Route} from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './pages/Login'
import Join from './pages/Join'
import Content from './components/Content';
import { useState } from 'react';

function App() {

  const [nick, setNick] = useState(null);

  return (
    <div>
      <Header nick={nick} setNick={setNick}/>
      <Routes>
        <Route path='/' element={<Content/>}></Route>
        <Route path='/login'element={<Login setNick={setNick}/>}></Route>
        <Route path='/join' element={<Join/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
