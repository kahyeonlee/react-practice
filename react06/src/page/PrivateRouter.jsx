import React from 'react'
import MyPage from './MyPage'
import { Navigate } from 'react-router-dom'

// 로그인이 안되면 접속 막음
// Navigate 컴포넌트
// - 지정되 Url로 이동하는 컴포넌트

// PrivateRouter역할
// - 틀정 조건이나 상태에 따라 페이지를 접근할 수 있게 하는 컴포넌트
// ex) 로그인상태판단 -> true -> 마이페이지 접근
//                   -> false -> 로그인페이지로 전환
const PrivateRouter = ({state}) => {
  return state?<MyPage/>:<Navigate to='/login'/>
}

export default PrivateRouter