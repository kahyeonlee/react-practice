import React from 'react'
import {Link} from 'react-router-dom'

const Main = () => {
  return (
    <div>
        <h1>React-Node 연동 실습</h1>
        <Link to={'/join'}>회원가입</Link>
        <Link to={'/login'}>로그인</Link>
    </div>
  )
}

export default Main