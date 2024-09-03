import React, { useRef } from 'react'
import {useDispatch} from 'react-redux'
import { addTodo } from '../redux/reducers/TodoSlice';
import { v4 as uuidv4 } from 'uuid'

const TodoInput = () => {

    const inputRef = useRef();

    const dispatch = useDispatch();
    
    const handleSubmit=()=>{
      dispatch(addTodo({
        id : uuidv4(),
        text : inputRef.current.value,
        complete: false
      }))
    }


  return (
    <div className='todo-inputbox'>
      <input type='text' ref={inputRef} className='todo-inputbox-input' placeholder='할 일을 입력하세요~!'/>
      <input type='button' onClick={handleSubmit} className='todo-inputbox-add-btn' value='등록'/>
    </div>
  )
}

export default TodoInput