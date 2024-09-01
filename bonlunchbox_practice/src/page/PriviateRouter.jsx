import React from 'react'
import GoodDetail from './GoodDetail';
import { Navigate } from 'react-router-dom';

const PriviateRouter = ({auth}) => {

  console.log('로그인 상태 : ',auth);
  return (
    auth?<GoodDetail/>:<Navigate to={'/login'}/>      
  )
}

export default PriviateRouter