import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";

const Header = ({nick, setNick}) => {
  const navi = useNavigate()

  const logout = ()=>{
    sessionStorage.removeItem('nick');
    setNick(null)
    navi('/')
  }

  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand>
            <Link to="/" className="nav-logo">
              로고
            </Link>
          </Navbar.Brand>
          <Nav className="me-auto ">
            <Link
              to="https://github.com/kahyeonlee/kahyeonlee"
              className="nav-item"
            >
              포트폴리오
            </Link>
            <Link to="https://nooopy.tistory.com/" className="nav-item">
              블로그
            </Link>
            <Link to="https://github.com/kahyeonlee" className="nav-item">
              github
            </Link>
          </Nav>

          <Nav>
            {nick === null ? (
              <div>
                <Link to="/login" className="nav-item">
                  로그인
                </Link>
                <Link to="/join" className="nav-item">
                  회원가입
                </Link>
              </div>
              ) : (
               <span className="nav-item" onClick={logout}>로그아웃</span>
             )}
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
