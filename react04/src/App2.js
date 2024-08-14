import { createContext, useState } from 'react';
import React from 'react'
import MyColor from './component/MyColor';
import Result from './component/Result';

// 공유공간(context) 생성
export const ColorContext = createContext();

function App2() {
    const[color,setColor]=useState('black');

  return (
    <div>
        <div>
        <ColorContext.Provider value={{state:color,setState:setColor}} >
            <MyColor></MyColor>
            <hr></hr>
            <Result></Result>
        </ColorContext.Provider>
        </div>
    </div>
  )
}

export default App2