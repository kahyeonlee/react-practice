import React from 'react'
import { useContext } from 'react'
import { ColorContext } from '../App2'

const Result = () => {
  const data = useContext(ColorContext);

  let myStyle={
    height:'100px',
    width:'100px',
    display:'inline-block',
    // background:black
  }

  return (
    <div style={{...myStyle, background:data.state}}></div>
  )
}

export default Result