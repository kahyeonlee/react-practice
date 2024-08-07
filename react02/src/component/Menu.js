//컴포넌트: 사용자 정의 태그
//컴포넌트의 이름의 시작은 반드시 대문자로 작성해야한다!
//--> 일반 태그와 구분하기 위함
//만드는방법 -> JsX문법을 사용해서 생성 가능
//클래스 컴포넌트, 함수 컴포넌트(주로 사용)
//rfce : 함수형 컴포넌트 생성 단축키

import React from 'react'

export const Menu = (props) => {
  //전달된 데이터는 객체 형태이다(key-value)
   console.log(props)
  return (
    <div>
        <p>메뉴명 : {props.menu}</p>
        <p>금액 : {props.price}</p>
    </div>
  )
}

