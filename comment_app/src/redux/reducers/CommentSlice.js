import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const CommentSlice = createSlice({
    name:'comment',
    initialState:{
        commentList:[],
        keyword:""
    },
    reducers:{
        addComment:(state,action)=>{
            console.log(action.payload)

            // React state값을 직접적으로 수정x
            // -> push, shift, unshift 등고 같은 함수는 state를 새롭게 변경하는 동작 x
            // -> concat, map, filter, slice 등과 같은 함수는 원본을 수정하지 않고 새로운 배열을 반환
            //      (권장하는 방식)
            state.commentList = state.commentList.concat(action.payload)
        },
        searchComment:(state,action)=>{
            // 여기서 filter를 사용하면 데이터를 삭제해버림 > list컴포넌트에서 작업
            state.keyword = action.payload.keyword
            
        }
    }
})


// export const CommentActions = CommentSlice.actions
export const {addComment, searchComment} = CommentSlice.actions

export default CommentSlice.reducer