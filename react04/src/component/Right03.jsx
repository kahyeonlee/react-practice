import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../App';

function Right03() {

  //공유공간에 접근해서 state을 값을 바꾸고 싶어요
  const data = useContext(AppContext);

  function chNum(){
    data.setState(data.state+1);
  }

  return (
    <div>
        <h1>Right03</h1>
        <button onClick={chNum}>+1</button>
    </div>
  )
}

export default Right03