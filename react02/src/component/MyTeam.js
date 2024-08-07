import React from 'react'

function MyTeam(props) {
    //JSX에서 inline style을 적용할때는 객체형태로 적용{{}}

    // let mySytle={
    //     border:"1px solid",
    //     textAlign:"center"
    // }

  return (

    <div style={{border:"1px solid", textAlign:"center"}}>
        <p>{props.department}</p>
        <p>{props.name}</p>
    </div>
  )
}
//defaultProps : 데이터를 전달받지 않을때 기본적으로 적용되는 데이터
MyTeam.defaulfProps={
    name:"직원 선별중"
}
export default MyTeam