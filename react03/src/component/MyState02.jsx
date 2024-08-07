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
    //1,2,3 버튼 기능
    function chNum(e){
        //e(이벤트 객체) : 이벤트 정볼르 가지고 있다
        //(어떤 이벤트가 발생했는지, 누가 발생시켰는지
        //e.target : 이벤트를 발생시킨 태그
        //------> document.getElementById().innerText

        setNum(e.target.innerText)
        setRandom(Math.floor(Math.random()*3+1))
    }


  return (
    <div>
        <div>
            <button onClick={chNum}>1</button>
            <button onClick={chNum}>2</button>
            <button onClick={chNum}>3</button>
        </div>

        <div>
            내가 입력한 숫자 : {num}
            <br />
            랜덤한 숫자 : {random}
            <br />

            결과 :{num ==random?"정답!":"땡!"}
        </div>
    </div>
  )
}

export default MyState02