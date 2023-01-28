import { useContext } from 'react';
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
import { LanguageContext } from '../context';
import { LanguageWidget } from './LanguageWidget';

export const NavBar = () => {
  const { datos } = useContext(LanguageContext);

  return (
    <>
      <Navbar key="lg" bg="dark" expand="lg" className="d-flex felx-column">
        <Container fluid>
          <Nav className="d-flex felx-row justify-content-between flex-grow-1 pe-1 text--primary">
            <Link
              to="/portfolio"
              className="pe-1 text-uppercase blend--difference">
              &#123; {datos.nav.portfolio} &#125;
            </Link>
            <Link
              to="/skills"
              className="pe-1 text-uppercase blend--difference">
              &#123; {datos.nav.skills} &#125;
            </Link>
            <Link
              to="/contact"
              className="pe-1 text-uppercase blend--difference">
              &#123; {datos.nav.contact} &#125;
            </Link>
          </Nav>
        </Container>
        <LanguageWidget />
      </Navbar>
    </>
  );
};
