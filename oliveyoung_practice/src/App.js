import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, Routes } from '../node_modules/react-router-dom/dist/index';
import MainPage from './page/MainPage';
import LoginPage from './page/LoginPage';
import ProductDetails from './page/ProductDetails';
import Header from './component/Header';

/*
  실습1) 각 페이지 컴포넌트를 Page 폴더 내 생성
   - 헤더영역 : Header.jsx (component 폴더)
   - 로그인페이지 : LoginPage.jsx
   - 메인페이지 : MainPage.jsx
   - 상품상세페이지 : ProductDetails.jsx
 
   실습2) 페이지 컴포넌트를 화면에 출력할 수있도록 라우터 설정
   - 로그인 : '/login'
   - 메인 : '/'
   - 상품상세페이지 : '/prdDetail'
 */

function App() {
  return (
    <div className='container'>
      <Header/>
      
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        {/* 
          url 파라미터로 데이터 전송시 path 속성에 :key를 설정해줘야한다 
          ex) /preDetail/:key
          * 쿼리스트링으로 전달할 경우 설정하지 않아도 됨
        */}
        <Route path='/prdDetail/:id' element={<ProductDetails/>}/>
      </Routes>
    </div>
  );
}

export default App;
