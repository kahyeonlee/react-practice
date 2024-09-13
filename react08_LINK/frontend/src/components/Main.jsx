import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Main = () => {
  // 로그인 상태를 저장하는 state
  const [useInfo, setUSerInfo] = useState(null);

  console.log("객체", JSON.parse(sessionStorage.getItem("userInfo")));

  const logout = ()=>{
    alert("다음에 다시 방문 ㄱ")
    sessionStorage.removeItem("userInfo")
    setUSerInfo(null)
  }


  useEffect(() => {
    setUSerInfo(JSON.parse(sessionStorage.getItem("userInfo")));
  }, []);

  return (
    <div>
      <h1>React-Node 연동 실습</h1>

      {useInfo === null ? (
        <div>
          <Link to={"/join"}>회원가입</Link>
          <Link to={"/login"}>로그인</Link>
        </div>
      ) : (
        <div>
          <Link to={"/mypage"}>마이페이지</Link>
          <button onClick={logout}>로그아웃</button>
        </div>
      )}
    </div>
  );
};

export default Main;
