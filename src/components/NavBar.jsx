import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { CartWidget } from "./CartWidget"
import { products } from '../../data/products';

const categories = products.map ((item) => item.category);
const uniqueCategories = new Set(categories);
console.log(categories);

export const NavBar = () => {



    return (
    <header>
              <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <NavLink to="/"><Navbar.Brand>Digital Center</Navbar.Brand></NavLink>
          <Nav className="me-auto">
            {[...uniqueCategories].map((item) => (
            
            // eslint-disable-next-line react/jsx-key
            <Nav.Link as={NavLink} key={item} to ={`/category/${item}`}>{item}</Nav.Link>
            
            ))}
            
          </Nav>
          <CartWidget />
        </Container>
      </Navbar>
        </header>);
        }
        