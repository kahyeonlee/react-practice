import React from 'react'
import TodoInput from '../components/TodoInput'
import TodoList from '../components/TodoList'



const TodoHome = () => {
  return (
    <div className='todo-container'>
      <h1 className='todo-tit'>To Do List</h1>

      <TodoInput/>

      {/* 해야 할 일 */}
      <TodoList title={"해야할 일"} checked={false}/>

      {/* 완료된 일 */}
      <TodoList title={"완료된 일"} checked={true}/>
    </div>
  )
}

export default TodoHome;