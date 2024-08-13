import React,{useState,useRef,useEffect} from 'react'

function MyToDo() {
    const toDoRef=useRef('');
    const [toDoArr,setToDoArr]=useState([]);


    //todo 리스트 추가
    function addToDo(){
        // 기존에 있던 배열에 input태그에서 입력한 내용을 추가
        // push 사용해서 state 배열 변환x
        // ->push자체가 기존 state배열을 바꾸는 기능이기 때문에
        // (state 값을 바꿀 수 있는 거는 setState만 가능)
        
        // concat:기존 배열에 데이터를 추가한 모습으로 새로운 배열을 생성하는 기능
        setToDoArr(toDoArr.concat(toDoRef.current.value));

    }


    // state 변수에 의해서 실행되어지는 함수
    // state 변수에 지정되는 함수를 만들겠다

    // useEffect : 함수 컴포넌트에서 LifeCycle을 기준으로 실행시키는 함수
    // useEffect = componentDidMount + componentDidUpdate
    useEffect(()=>{
        console.log("useEffect")
            
        // 최대 목표 개수에 도달했습니다!!
        if(toDoArr.length==5){
            alert("최대 목표 개수에 도달했습니다!!")
        }
    })


    // todo 리스트 삭제
    function removeToDo(removeIndex){
        // 배열에 있는 요소중 사용자가 선택한 요소를 삭제
        // 1.어떻게 삭제 - filter를 사용하여 선택요소 외의 배열 리턴
        // 2.사용자가 어떤 요소를 선택했는지 - 배열 비교(인덱스)
        // 넘겨 받은 인덱스 값을 제외한 다른 요소만으로 배열을 바꾸고 싶어요!
        // setToDoArr(toDoArr.filter((data,index)=>index!==removeIndex));

        // data는 사용한 매개변수가 아니기 때문에 _로 사용 가능
        setToDoArr(toDoArr.filter((_,index)=>index!==removeIndex));

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
            <li key={index}>
                {data}
                <button onClick={()=>removeToDo(index)}>삭제</button>
            </li>)}

        </ul>
    </div>
  )
}

export default MyToDo