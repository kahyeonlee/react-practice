import {createSlice} from '@reduxjs/toolkit'

const TodoSlice = createSlice({
  name:'todo',
  initialState:{
    todoList:[]
  },
  reducers:{
    addTodo:(state, action)=>{
      state.todoList = state.todoList.concat(action.payload)
    },
    checkChangeTodo:(state,action)=>{
      state.todoList =state.todoList.map((item)=>({
        ...item,
        complete : item.id === action.payload.id ? !item.complete : item.complete
      }))
    },
    textChangeTodo:(state,action)=>{
      state.todoList =state.todoList.map((item)=>({
        ...item,
        text: item.id === action.payload.id ? action.payload.text : item.text
      }))
    },
    deleteTodo:(state,action)=>{
      // 실습 ) todoList 내 삭제할 id를 비교하여 삭제기능 구현하기(filter())
      state.todoList = state.todoList.filter((item)=>item.id != action.payload.id)
    }
  }
})

export const {addTodo,checkChangeTodo,textChangeTodo,deleteTodo} = TodoSlice.actions

export default TodoSlice.reducer