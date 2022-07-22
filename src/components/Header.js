import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Container, Button } from 'react-bootstrap'

export default function Header() {
    return (
        <section>
        <Navbar className="main-header" expand="lg">
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
            <Button className="mr-5" variant="outline-success" >Login</Button>
            </Navbar.Collapse>
  </Container>
</Navbar>
</section>
  )
}