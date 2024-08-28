import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductPage = () => {
  const navigate =useNavigate();

  const goToProduct=()=>{
    // 쿼리 스트링(Querystring) 방식
    // - 다음 페이지로 이동할때 데이터를 전달하는 방식(?keyㄴ=value)
    navigate('/productQuery?prd_no=15&cate=shirt')
  }

  return (

    <div>
      <h1>ProductPage</h1>
      <button onClick={goToProduct}>productDetail2로 이동</button>
    </div>
  )
}

export default ProductPage