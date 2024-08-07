import React,{useState,useRef} from 'react'

function MyRef02() {
    //배열 사용해서 이미지 데이터 다루기
    //useState, useRef
    const imgRef=useRef();
    let index=0; //현재 이미지 위치

    let imgArr=['/jammanbo.jpg','/meta.jpg','/pufin.png']

    function beforeImg(){         
        index--
        if(index<0){
            index= imgArr.length-1
        }
        imgRef.current.src='./img'+imgArr[index]
    }

    function nextImg(){
        index++;
        if(index>2){
            index= 0
        }
        imgRef.current.src='./img'+imgArr[index]
    }

  return (
    <div>
        <img src='./img/jammanbo.jpg' width='200px' height='200px' ref={imgRef} ></img>
        <br></br>

        <button onClick={beforeImg}>Before</button>
        <button onClick={nextImg}>Next</button>
    </div>
  )
}

export default MyRef02