import {
  Button,
  Container,
  Form,
  Nav,
  Navbar,
  NavDropdown,
  Offcanvas,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { navBarLinksFetch } from '../thunks/thunks';

export const NavBar = () => {
  return (
    <Navbar key="lg" bg="dark" expand="lg">
      <Container fluid>
        <Nav className="justify-content-between flex-grow-1 pe-3 text--primary">
          <Link to="/about" className="pe-2">
            &#123; ABOUT &#125;
          </Link>
          <Link to="/skills" className="pe-2">
            &#123; SKILLS &#125;
          </Link>
          <Link to="/contact" className="pe-2">
            &#123; CONTACT &#125;
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
