import React from 'react'
import { useNavigate } from 'react-router-dom';

const Login = ({setLoginState}) => {

  const navigate=useNavigate();

  const goToHome=()=>{
    // 1. 로그인 상태 -> true
    // 2. '/'으로 이동
    setLoginState(true);
    navigate('/');
  }

  return (
    <div>
        <h1>Login</h1>
        <button onClick={goToHome}> 로그인 </button>
    </div>
  )
}

export default Login