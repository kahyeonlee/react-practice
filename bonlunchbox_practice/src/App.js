import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./page/Main";
import Login from "./page/Login";
import GoodList from "./page/GoodList";
import GoodDetail from "./page/GoodDetail";
import Header from "./component/Header"
import Footer from "./component/Footer"

/**
 *  실습1) page폴더 내 4개의 페이지를 생성하시오
 *  - 메인페이지(MainPage),로그인페이지(Login), 상품전체목록(GoodList), 상품상세페이지(GoodDetail)
 *
 *  실습2) component폴더 내 4개의 컴포넌트를 생성하시오
 *  - 헤더(Header), 컨텐츠(Content), 푸터(Footer), 상품정보(GoodItem)
 *
 *  실습3) 페이지를 이동할 수 있도록 URL과 페이지를 연결하시오
 *  - index.js : BrowserRouter
 *  - App.js : Routes, Route
 *
 *  [페이지별 경로]
 *  - 메인 : '/'
 *  - 로그인 : '/login'
 *  - 상품전체목록 : /menulist'
 *  - 상품상세페이지 : 'menulist/:id'
 */

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/menulist" element={<GoodList />} />
        <Route path="/menulist/:id" element={<GoodDetail />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
