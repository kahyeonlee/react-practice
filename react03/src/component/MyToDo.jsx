import React,{useState,useRef} from 'react'

function MyToDo() {
    const toDoRef=useRef('');
    const [toDoArr,setToDoArr]=useState([]);

    //todo 리스트 추가
    function addToDo(){
        //기존에 있던 배열에 input태그에서 입력한 내용을 추가
        //push 사용해서 state 배열 변환x
        //->push자체가 기존 state배열을 바꾸는 기능이기 때문에
        //(state 값을 바꿀 수 있는 거는 setState만 가능)
        
        //concat:기존 배열에 데이터를 추가한 모습으로 새로운 배열을 생성하는 기능
        setToDoArr(toDoArr.concat(toDoRef.current.value));
    }

    //todo 리스트 삭제
    function removeToDo(removeIndex){
        //배열 인덱스 번호에 맞게 삭제
        //배열에 있는 요소중 사용자가 선택한 요소를 삭제하겠습니다.
        //1.어떻게 삭제
        //2.사용자가 어떤 요소를 선택했는지 
        //넘겨 받은 인덱스 값을 제외한 다른 요소만으로 배열을 바꾸고 싶어요!
        setToDoArr(toDoArr.filter((data,index)=>index!==removeIndex));
    
    }

  return (
    <div>
        <h1>2024 올해는 꼭 해봅시다!!</h1>
        <input ref={toDoRef}></input>
        <button onClick={addToDo}>계획추가</button>

        <hr></hr>
        <h1>TodoList</h1>
        <ul>
            {/* 목록출력 */}
            {/* todo배열이 가지고 있는 각각의 항목(요소)를 가져오겠습니다 */}
            {toDoArr.map((data,index)=>
            <li key={index}>{data}<button onClick={()=>removeToDo(index)}>삭제</button></li>)}

        </ul>
    </div>
  )
}

export default MyToDo