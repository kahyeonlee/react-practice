import React from 'react'
import { useState } from 'react';
//React Hook : 함수형 컴포넌트에서 사용되어지는 기능
//useState : state변수를 생성 할 수 있는 기능

//리액트에서는 일반 변수와 화면에 출력한 변수(state변수)를 구분했다
function MyState01() {
    // let num=0;

    //useState를 이요해서 state변수를 생성구조
    //num : state 변수
    //setNum : state변수를 바꿀 수 있는 함수
    //useState(0) : state변수값을 초기값으로 설정
    const[num,setNum]=useState(0);

    function plus(){
        setNum(num+1)
        console.log(num) //변경후 값이 아닌 이전 값
        //setState의 특징: 클로저 함수다(제일 마지막에 실행)
    }

    function minus(){
        setNum(num-1)
        console.log(num)
    }
  return (
    <div>
        <h1>{num}</h1>
        <button onClick={plus}>+1</button>
        <button onClick={minus}>-1</button>
    </div>
  )
}

export default MyState01