import {Routes,Route} from 'react-router-dom'
import './App.css';
import HomePage from './page/HomePage';
import AboutPage from './page/AboutPage';
import ProductPage from './page/ProductPage';
import ProductDetailPage from './page/ProductDetailPage';
import ProductDetailPage2 from './page/ProductDetailPage2';
import Login from './page/Login';
import PrivateRouter from './page/PrivateRouter';
import { useEffect, useState } from 'react';

function App() {
  // 로그인 상태를 보관하는 state 생성
  const[loginState, setLoginState] = useState(false);
  
  useEffect(()=>{
    console.log("현재 로그인 상태 : ",loginState);
  },[loginState]);

  // Routes
  return (
    <div>
      <Routes>
        <Route  path='/' element={<HomePage/>}/>
        <Route  path='/about' element={<AboutPage/>}/>
        <Route  path='/product' element={<ProductPage/>}/>
        <Route path='/product/:prd_no' element={<ProductDetailPage/>}/>
        <Route path='/productQuery' element={<ProductDetailPage2/>}/>
        <Route path='/login' element={<Login setLoginState={setLoginState} />}/>
        <Route path='/mypage' element={<PrivateRouter state={loginState}/>}/>
      </Routes>
    </div>
  );
}

export default App;
