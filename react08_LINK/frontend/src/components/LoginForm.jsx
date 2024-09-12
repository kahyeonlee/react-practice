import React,{useRef} from 'react'
import api from  '../api'
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {

    const id_Ref = useRef();
    const pw_Ref = useRef();

    const navigate = useNavigate();

    const handleLogin=async(e) =>{
        e.preventDefault();

        let member ={
          id :id_Ref.current.value,
          pw:pw_Ref.current.value,
        }

        let res = await api.post('/login',{member:member});
        console.log(res.data);

        if(res.data.result==='success'){
          navigate('/main')
        }else{
          alert("로그인 실패...")
          navigate('/login')
        }
        
    }
  return (
    <div>
        <form onSubmit={handleLogin}>
        <p>
          <label>아이디 : </label>
          <input type="text" ref={id_Ref} />
        </p>
        <p>
          <label>패스워드 : </label>
          <input type="password" ref={pw_Ref} />
        </p>
        <p>
            <input type='submit' value='로그인'/>
        </p>
        </form>
    </div>
  )
}

export default LoginForm