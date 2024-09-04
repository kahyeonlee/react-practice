import React from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <Navbar expand="lg" className="header-box">
        <Container fluid>
          <Navbar.Brand href="/"><img width='70px' src="https://github.com/user-attachments/assets/fe2df402-c23b-4607-aedd-272ac1f34471
" alt='로고이미지'/></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav><Link className="nav-itme " to={'/'}>Home</Link></Nav>
              <Nav><Link className="nav-itme " to={'/movies'}>Movies</Link></Nav>

            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-danger">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
