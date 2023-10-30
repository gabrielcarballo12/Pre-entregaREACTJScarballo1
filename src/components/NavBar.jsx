import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { CartWidget } from "./CartWidget"


export const NavBar = () => {



    return (<header>
              <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Digital Center</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">INICIO</Nav.Link>
            <Nav.Link href="#features">JUEGOS</Nav.Link>
            <Nav.Link href="#pricing">CONSOLAS</Nav.Link>
          </Nav>
          <CartWidget />
        </Container>
      </Navbar>
        
        
        
        </header>)
}