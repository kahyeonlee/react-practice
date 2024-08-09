import React,{useState,useRef} from 'react'

function MyMap02() {
    const colorArray=['red','orange','yellow','green','blue']
    const colorRef =useRef('');
    const [color,setColor]=useState('black');

    //...(스프레드) : 객체 or 배열이 가지고 있는 내용을 펼치겠습니다
    //style={...myStyle}
    //style={
    //    height:'100px',
    //    width:'100px',
    //    display:'inline-block'
    //}


    let myStyle={
        height:'100px',
        width:'100px',
        display:'inline-block'
    }

    // function choiceColor(data){
    //     //두번째 줄에 있는 div 태그 색상 변경
    //     //e.target사용도 가능
    //     //setColor(colorRef.current.style.backgroundColor)
    //     setColor(data)
    // }

  return (
    <div>
        {colorArray.map((data,index)=>
        <div onClick={()=>setColor(data)} key={index} ref={colorRef} style={{...myStyle,backgroundColor:data}}></div>)}
        
        <hr></hr>
        <div style={{...myStyle,backgroundColor:color}}></div>
    </div>
  )
}

export default MyMap02