import logo from './logo.svg';
import './App.css';
import Left01 from './component/Left01';
import Right01 from './component/Right01';
import SubItem01 from './component/SubItem01';
import { createContext, useState } from 'react';

// 공유공간(context) 생성
export const AppContext = createContext();
export const TextContext =createContext();

function App() {
  const[num,setNum]=useState(0);
  const[text,setText]=useState('');

  // num, setNum 을 Left01과 Right01 넘겨서 (전달)
  // Right01 에 있는 버튼 클릭했을때
  // Lefr01 에 있는 숫자를 바꾸고 싶다


  return (
    <div id='container'>
      <h1>Root</h1>
      <div id='grid'>
        {/* 
          provider : 공유공간 허용하겠습니다 
          --> 허용된 컴포넌트의 자식 컴포넌트까지 전부 허용 가능함
          value : 공유공간에서 공유하며 사용할 공유값 지정
        */}
        {/* <AppContext.Provider value={{state: num,setState:setNum}}>
          <Left01></Left01>
          <Right01></Right01>
        </AppContext.Provider> */}

        <TextContext.Provider value={{state:text,setState:setText}}>
          <h1>Context 실습</h1>
          <h1>다른 컴포넌트에서 입력한 내용:{text}</h1>
          <SubItem01></SubItem01>
        </TextContext.Provider>
      </div>
    </div>
  );
}

export default App;
