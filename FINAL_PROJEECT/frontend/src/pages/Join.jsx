import React, { useRef } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from 'react-bootstrap/Button';
import api from '../api'
import { useNavigate } from "react-router-dom";


const Join = () => {

  const idRef = useRef();
  const pwRef = useRef();
  const nickRef = useRef();
  const navi = useNavigate();


  const handleJoin = async(e)=>{
    e.preventDefault();

    let member={
      id : idRef.current.value,
      nickName : nickRef.current.value,
      password: pwRef.current.value
    }

    console.log("member =",member);
    
    let res = await api.post("/user/join", member);
    console.log(res.data);

    if(res.data.result==='success'){
      alert("회원가입 성공!")
      navi('/')
    }else{
      alert("회원가입 실패!")
    }
  }

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <Form>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="4">
            ID
          </Form.Label>
          <Col sm="8"  >
            <Form.Control ref={idRef}/>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="4">
            NickName
          </Form.Label>
          <Col sm="8" >
            <Form.Control ref={nickRef}/>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
          <Form.Label column sm="4" >
            Password
          </Form.Label>
          <Col sm="8" >
            <Form.Control type="password" ref={pwRef} />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
        <Col sm="8" offset={{ sm: 4 }}>
          <Button variant="outline-warning" onClick={handleJoin}  style={{ width: '100%' }}>회원가입</Button>
        </Col>
        </Form.Group>
      </Form>
    </div>
  );
};

export default Join;
