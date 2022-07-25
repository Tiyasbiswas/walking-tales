import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form';
import {Link, Route, Routes} from 'react-router-dom';
import { Container, Button } from 'react-bootstrap'
import Register from './Register';

export default function Header() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClick=()=>{
    window.location.href="/register"
  }
    return (
        <section>
        <Navbar className="main-header" style={{ paddingLeft: "80px", paddingRight: "90px" }} expand="lg">
            <Container fluid>
            <Navbar.Brand href=""><img src="./images/bigfont-logo.png"/></Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0 justify-content-end" style={{ maxHeight: '100px', gap: '40px'}} navbarScroll>
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">About</Nav.Link>
              <Nav.Link href="#">Blog</Nav.Link>
              <Nav.Link href="#">Contact</Nav.Link>
            </Nav>
            <Button className="login-button" style={{ color: "white", background: "#073648" }}  onClick={handleShow}>Login</Button>
            </Navbar.Collapse>
  </Container>
</Navbar>
<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          
        </Modal.Header>
        <Modal.Body>
       



    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Enter email" />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
       
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      
      <Button variant="default" style={{ color: "white", background: "#073648" }} type="submit">
       Login
      </Button>
    </Form>
 <br />
 <p>Not a member? <Link to='/register'>Register!</Link></p>
        </Modal.Body>
        
          
        
      </Modal>
</section>
  )
}