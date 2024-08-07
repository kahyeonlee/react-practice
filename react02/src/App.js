import logo from './logo.svg';
import './App.css';

//Jsx --> 사용자 정의태그(컴포넌트)를 만드는 방법
//규칙1. 출력하고자 하는 태그들은 부모요소로 묶여 있어야 한다.
//규칙2. 표현식 사용 사능하다(Javascript변수를 html에서 출력할 수 있다.)
//규칙3. 모든 태그는 반드시 여는태그와 닫는 태그가 존재한다.
//규칙4. 선택자 중 class는 className으로 사용 
function App() {
  let name="승환";
  console.log(`${name}님 환영합니다`)

  return (
    <div>
    <h1>MyReact01</h1>
    <h1>MyReact02</h1>
    <p>{name}님 환영합니다</p>
    </div>
    
  );
}

export default App;
