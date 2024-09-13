import React, { useRef} from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";

const JoinForm = () => {
  const id_Ref = useRef();
  const pw_Ref = useRef();
  const nick_Ref = useRef();

  const navigate = useNavigate();

  const handleJoin = async (e) => {
    e.preventDefault();

    let member ={
      id :id_Ref.current.value,
      pw:pw_Ref.current.value,
      nickName: nick_Ref.current.value
    }

    let res = await api.post("/join", {member:member});
    console.log(res.data);

    if(res.data.result==='success'){
      alert("회원가입 성공!")
      navigate('/login')
    }else{
      alert("회원가입 실패!")
      navigate('/join')
    }
  };

  return (
    <div>
      <form onSubmit={handleJoin}>
        <p>
          <label>아이디 : </label>
          <input type="text" ref={id_Ref} />
        </p>
        <p>
          <label>패스워드 : </label>
          <input type="password" ref={pw_Ref} />
        </p>
        <p>
          <label>닉네임 : </label>
          <input type="text" ref={nick_Ref} />
        </p>
        <p>
          <input type="submit" value="회원가입" />
        </p>
      </form>
    </div>
  );
};

export default JoinForm;
