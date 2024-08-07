import React from 'react'
import {useState} from 'react'

function MyState03() {
    const[num,setNum]=useState(0)

    function plus(){
        setNum(num+1)
    }

    function minus(){
        //0이하시 초기값으로 세팅
        if (num>0){
            setNum(num-1)
        }
        
}
    function reset(){
        setNum(0)
    }

  return (
    <div>
        <div style={{border:"1px solid ", textAlign:'center'}}>
        <p>Like!  ♥ {num}</p>
        <button onClick={plus}>+1증가</button>
        <button onClick={minus}>-1감소</button>
        <button onClick={reset}>초기화</button>
        </div>

    </div>
  )
}

export default MyState03