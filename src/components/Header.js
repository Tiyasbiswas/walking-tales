import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Container, Button } from 'react-bootstrap'

export default function Header() {
    return (
        <section>
        <Navbar bg="light" expand="lg">
            <Container fluid>
            <Navbar.Brand href="public/images/WalkingTales.png">
           </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
            <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="#action1">Home</Nav.Link>
        <Nav.Link href="#action2">About</Nav.Link>
        <Nav.Link href="#" disabled>
          Blog
        </Nav.Link>
        <Nav.Link href="#" disabled>
          Contact
        </Nav.Link>
      </Nav>
        <Button variant="outline-success">Sign Up</Button>
        <Button variant="outline-success">Login</Button>

    </Navbar.Collapse>
  </Container>
</Navbar>
</section>
  )
}