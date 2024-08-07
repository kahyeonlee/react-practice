import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import App2 from './App2';
import {Menu} from './component/Menu';
import MyTeam from './component/MyTeam';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
        {/*
        props 컴포넌트로 데이터를 전달 방법
        - 속성값으로 데이터를 전달
        */}

        {/* <Menu menu="아메리카노" price="4100"></Menu> */}
        


        <MyTeam department="교육운영부" name="선영표"></MyTeam>
        <MyTeam department="전략기획팀" name="강예진"></MyTeam>
        <MyTeam department="홍보팀" name="임보미"></MyTeam>
        <MyTeam department="기획팀" name="최영화"></MyTeam>

        {/* 
        신생부서
        부서명: 연구개발
        직원: x
        ---> 데이터가 없으면 defaultProps: 데이터를 전달받지 않을때 기본적으로 적용되는 데이터
         */}
          <MyTeam department="연구개발"></MyTeam>
    </div>
    
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
