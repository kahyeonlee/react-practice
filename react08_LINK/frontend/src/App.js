import {Routes,Route} from 'react-router-dom'
import './App.css';
import Form from '../src/components/Form'
import JoinForm from './components/JoinForm';
import LoginForm from './components/LoginForm';
import Main from './components/Main';

// 리액트 프로젝트 수정 후 터미널 창에 'npm run build' 실행하기! ⭐⭐⭐
function App() {
  return (
    <div>
        {/* <h1>React-Node 연동실습</h1> */}
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/join' element={<JoinForm/>}/>
          <Route path='/login' element={<LoginForm/>}/>
        </Routes>

        {/* <Form/> */}

        {/* <h1>회원가입폼</h1>
        <JoinForm/>

        <h1>로그인폼</h1>
        <LoginForm/> */}

    </div>
  );
}

export default App;
