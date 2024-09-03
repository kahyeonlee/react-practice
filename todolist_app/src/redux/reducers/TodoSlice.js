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
    checkChangeTodo:()=>{

    },
    textChangeTodo:(state,action)=>{
      state.todoList =state.todoList.map((item)=>({
        ...item,
        text: item.id === action.payload.id ? action.payload.text : item.text
      }))
    },
    deleteTodo:()=>{

    }
  }
})

export const {addTodo,checkChangeTodo,textChangeTodo,deleteTodo} = TodoSlice.actions

export default TodoSlice.reducer