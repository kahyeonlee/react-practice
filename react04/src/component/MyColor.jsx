import React from 'react'
import { useContext } from 'react'
import { ColorContext } from '../App2';

function MyColor() {
  const colorArray=['red','orange','yellow','green','blue']
  const shareDate = useContext(ColorContext);

    let myStyle={
        height:'100px',
        width:'100px',
        display:'inline-block'
    }


  return (
    <div>
      {colorArray.map((data)=>
      <div 
      style={{...myStyle,background:data}} 
      onClick={()=>shareDate.setState(data)}>

      </div>)}
    </div>
  )
}

export default MyColor