import React from 'react'
import { useState } from 'react';

function MyState02() {
    //1.버튼 클릭시 어떤 버튼을 클릭했는지 숫자를 출력해주세요!
    //2.버튼 클릭시 1~3랜덤 수 생성 -> 랜덤 숫자 부분 출력
    const[num,setNum]=useState(0);
    const[random,setRandom]=useState(0);

    function one(){
        setNum(1)
        setRandom(Math.floor(Math.random()*3+1))
    }
    function two(){
        setNum(2)
        setRandom(Math.floor(Math.random()*3+1))
    }
    function three(){
        setNum(3)
        setRandom(Math.floor(Math.random()*3+1))
    }


  return (
    <div>
        <div>
            <button onClick={one}>1</button>
            <button onClick={two}>2</button>
            <button onClick={three}>3</button>
        </div>

        <div>
            내가 입력한 숫자 : {num}
            <br />
            랜덤한 숫자 : {random}
            <br />
        </div>
    </div>
  )
}

export default MyState02