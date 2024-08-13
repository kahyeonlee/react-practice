import React, { useContext,useRef } from 'react'
import { TextContext } from '../App';

function SubItem03() {
    const set = useContext(TextContext);
    const inputRef = useRef();

    function submitText(){
        set.setState(inputRef.current.value);
    }

  return (
    <div>
        <h1>SubItem03</h1>
        <input type='text' ref={inputRef}></input>
        <button onClick={submitText}>전송</button>
    </div>
  )
}

export default SubItem03