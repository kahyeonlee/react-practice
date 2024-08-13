import React,{useState,useRef,useEffect} from 'react'

function MyFinal() {
    //1.start 버튼을 클릭했을때 ,
    // 컴퓨터 주사위, 사용자 주사위가 랜덤하게 다른 주사위로 바꾸기

    //2.주사위 눈의 크기를 비교해서
    // comScore 또는 UserScore 값을 1 증가 시켜주세요

    //3.comScore 또는 userScore 값이 먼저 10에 도달하게 되는 순간
    //결과를 출력해주세요(com WIN or User WIN)

    //useRef 변수는 재렌더링에 영향을 받지 않는다!
    const comImgRef=useRef();
    const userImgRef=useRef();

    const[comScore,setComScore]=useState(0);
    const[userScore,setUserScore]=useState(0);
    const[result,setResult]=useState(0);
    const[num,setNum]=useState(0);

    function randomNum(){
        return Math.floor(Math.random()*6+1);
    }

    function reset(){
        setComScore(0);
        setUserScore(0);
        setResult('');
        setNum(0);
    }
    
    function randomDice(){
      let comRandomNum=randomNum();
      let userRandomNum=randomNum();

        //주사위 랜덤 출력
       comImgRef.current.src = './img/dice'+comRandomNum+'.png';
       userImgRef.current.src = './img/dice'+userRandomNum+'.png';

       // comScore와 UserScore 결과(주사위 비교), 결과출력
       if(comRandomNum>userRandomNum){
        setComScore(comScore+1);
        setNum(num+1);
       } else if(comRandomNum<userRandomNum){
        setUserScore(userScore+1);
        setNum(num+1);
      }else{
        setNum(num+1);
      }
    }

    useEffect(()=>{
      console.log("useEffect");
      if(userScore==10){
        setResult("USER WIN")
      } else if(comScore == 10){
        setResult("COM WIN")
      }
    },[comScore,userScore])
  
    // []- dependency array (의존 배열)
    // [] 빈 배열일때는 componnentDIdMount처럼 사용
    // componnentDidUpdate 처럼은 사용 x  -> if 함수 로직으로 우회적으로만 가능

  return (
    <div>
      <h1>DICE GAME</h1>
      <p>클릭수 : {num}</p>
      <button onClick={randomDice}>Start</button>
      <button onClick={reset}>Reset</button>

      <div className="dice">
        <img src='./img/dice1.png' ref={comImgRef}></img>
        <h1>Com Score : {comScore}</h1>
      </div>
      <div className="dice">
        <img src='./img/dice1.png' ref={userImgRef}></img>
        <h1>User Score : {userScore}</h1>
      </div>

      <h1>결과 : {result}</h1>
    </div>
  )
}

export default MyFinal