import React, { useRef } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import api from "../api";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'

const Login = ({setNick}) => {
  const idRef = useRef();
  const pwRef = useRef();
  const navi = useNavigate();

  const handleLogin = async (e) => {

    // 전송후, 새로고침 방지
    e.preventDefault();

    let member = {
      id: idRef.current.value,
      pw: pwRef.current.value
    };

    console.log("member=", member);

    let res = await api.post("/user/login", member);
    console.log(res.data);

    if (res.data.result === "success") {
      alert("로그인 성공!");
      sessionStorage.setItem("nick",res.data.nick);
      setNick(res.data.nick)
      navi('/');
    } else {
      // alert("로그인 실패!");
      Swal.fire({
        title: 'Error!',
        text: 'Do you want to continue',
        icon: 'error',
        confirmButtonText: 'Cool'
      })
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <Form>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="4">
            ID
          </Form.Label>
          <Col sm="10">
            <Form.Control ref={idRef} />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
          <Form.Label column sm="4">
            Password
          </Form.Label>
          <Col sm="10">
            <Form.Control type="password" ref={pwRef} />
          </Col>
        </Form.Group>
        <Button variant="outline-warning" onClick={handleLogin}>
          로그인
        </Button>{" "}
      </Form>
    </div>
  );
};

export default Login;
