import React, { useEffect, useState } from 'react'
import CommnetItem from './CommnetItem'
import {useSelector} from 'react-redux'

const CommentList = () => {

    // [store의 state 접근방법]
    // 1. store내 있는 reducer의 key -> state.comment
    // 2. slice내 정의된 state 접근 -> state.comment.commentList

    // 접근해야 하는 state가 많을 경우, 아래와 같이 구조분해할당 문법으로 저장
    // 주의점 : 객체에 정의된 key이름과 동일한 변수명으로 정의
    const {commentList,keyword} = useSelector(state=>state.comment);
    console.log(commentList,keyword)

    // 검색 키워드 결과를 보관하는 state
    const [filter,setFilter] =useState([]);

    useEffect(()=>{
      if(keyword===''){
        setFilter(commentList);
      }else{
        let list = commentList.filter((item)=>item.content.includes(keyword))
        setFilter(list);
      }
    },[commentList,keyword])

    return (
    <div>
        <div> 댓글수 : 0 </div>
        <hr/>
        {filter.map((item)=>(
          <CommnetItem key={item?.id} content={item?.content} writer={item?.writer}/>
          ))}
        
    </div>
  )
}

export default CommentList