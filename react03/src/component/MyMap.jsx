import React from 'react'

function MyMap() {
    const menu=['짬뽕','짜장면','냉면','탕수육']

    //map, filter 
    //map : 배열 안에 있는 요소들에 규칙을 부여해서 새로운 배열을 만든다.
    //const menu2 = [<li>짬뽕</li>,......]
    //filter : 배열에 조건을 줘서 새로운 배열을 생성한다.
  return (
    <div>
        <ul>
            {/*
             map사용 - 데이터의 크기를 모를때 사용
             data : 배열이 가지고 있는 요소가 순차적으로 들어옴
             index : 배열 인덱스 값이 순차적으로 들어옴

            */}
            {menu.map((data,index)=><li key={index}>{data}</li>)}

            {/* 
            태그 구조
            <li>{menu[0]}</li>
            <li>{menu[1]}</li>
            <li>{menu[2]}</li>
            <li>{menu[3]}</li> 
            */}


            <hr></hr>
            {/* menu 배열중 탕수육을 제외한 나머지만 출력 */}
            {menu.filter((data)=>data!="탕수육").map((data,index)=><li key={index}>{data}</li>)}

        </ul>

    </div>
  )
}

export default MyMap