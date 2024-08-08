import React from 'react'
import { useState, useRef} from 'react'
//useRef : 컴포넌트에서 특정 태그를 선택할 수 있는 기능

const MyRef01 = () => {
    const[inputText,setInputText]=useState('');
    const[inputText2,setInputText2]=useState('');

    //useref
    const inputRef=useRef();
    //태그를 지정할 수 있는 inputRef라는 변수 생성

    function chInput(e){
        //e.target.value
        //e.target :이벤트를 발생시킨 주체(태그)
        //방식1. document.getElemnetById('myText).value --> 권장하는 방식이 아님
        //방식2. setInputText(inputText2)
        //       setInputText(e.target.value)
        
        //inputRef.current : 현재 가르키는 태그 객체, 태그를 객체로 변환
        setInputText(inputRef.current.value)

    }

    function chInput2(e){
        setInputText2(e.target.value) 

    }
 
  return (
    <div>
        {/* 방식1 - <input id='myText'></input> */}
         {/* 방식2 - <input onChange={chInput}></input> */}
         {/* 
         ref={inputRef} --> 해당 태그와 inputRef라는 변수를 대응
         */}
        <input ref={inputRef}></input>
        <button onClick={chInput}>출력</button>
        <h1>{inputText}</h1>
    </div>
  )
}

export default MyRef01