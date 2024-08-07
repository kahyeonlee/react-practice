function App2(){
    let namePrompt =prompt("이름을 입력하세요");
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth()+1; //0~11
    let day = date.getDate();
    let season="";

    //let myStyle={
    //  color='red'
    //}
    //<h1 style={myStyle}>오늘은 월요일</h1>

    if (month>=3 && month<=5){
        season="봄";
    }else if(month>=6 && month<=8){
        season="여름";
    }else if(month>=9 && month<=11){
        season="가을";
    }else{
        season="겨울";
    }


    return(
        <div>
            <h1>{year}.{month}.{day} 날짜</h1>
            <hr></hr>
            <p>{namePrompt}님 지금은 {season}입니다.
                좋은하루 보내세요!
            </p>
            {/*
            JSX 문법에서 자주 사용되어지는 방법
            1.style적용
            inline(태그안에) 적용시 객체 형식({{}})으로 적용해야한다.
            2.삼항 연산자
            조건을 통해서 다른 내용을 사용자에게 보여줌
             */}
            
            {namePrompt=='승환'?
            <div>   
                <h1>칼퇴</h1>
                <h1 style={{color:'red'}}>오늘은 월요일</h1>
            </div>
            :
            <h1>야근</h1>}
        </div>
    )
}

export default App2;