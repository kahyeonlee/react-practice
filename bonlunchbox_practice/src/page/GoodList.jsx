import React, { useEffect, useState } from 'react'
import axios from 'axios';
import GoodItem from '../component/GoodItem';

/**
 * 실습 1) axios를 활용해서 도시락정보를 가진 url로 데이터를 호출하시오.
 * 실습 2) 받아온 데이터를 보관할 state를 생성하시오.
 *        (콘솔창으로 데이터 출력해보기)
 * 실습 3) state에 저장된 도시락정보를 출력하시오
 *          - 도시락정보는 GoodItem 컴포넌트에 props로 전달
 */

const GoodList = () => {

  const [menu, setMenu] = useState(null);

  const getGoodList= async() =>{
    let goods_url = 'http://localhost:3004/goods_list'
    const res = await axios.get(goods_url);
    const data = res.data;
    
    console.log(data);
    
    setMenu(data);
    console.log(menu);
    
  }

  useEffect(()=>{
    getGoodList();
  },[])

  return (
    <div className='goods-list'>
      {menu?.map((item)=>(
        <GoodItem item={item}/>
      ))}
    </div>
  )
}

export default GoodList