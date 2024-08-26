import React from 'react'
import { useParams } from 'react-router-dom'

const ProductDetailPage = () => {

    const {prd_no} = useParams();
    console.log(prd_no);
    
  return (
    <div>
        <h1>ProductDetailPage</h1>
        <p>{prd_no}번 상품</p>
    </div>
  )
}

export default ProductDetailPage