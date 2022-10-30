import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

function NavigationBar() {
  return (
    <>
      {['md'].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} className="mb-3" fixed="top" >
          <Container fluid>
            <Navbar.Brand href="#">DipStrategy</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Menu
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#home" className='navs'>Home</Nav.Link>
                  <Nav.Link href="#service" className='navs'>Service</Nav.Link>
                  <Nav.Link href="#workflow" className='navs'>Work Flow</Nav.Link>
                  <Nav.Link href="#portfolio" className='navs'>Portfolio</Nav.Link>
                  <Nav.Link href="#about" className='navs'>About Us</Nav.Link>
                  <Nav.Link href="#value" className='navs'>our Value</Nav.Link>
                  <Nav.Link href="" className='navs'>+ 62 21 858 3944</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default NavigationBar;