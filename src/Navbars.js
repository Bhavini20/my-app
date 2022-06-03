import 'bootstrap/dist/css/bootstrap.css';
import Navbar from 'react-bootstrap/Navbar';
import { Container, Nav, NavDropdown, NavLink } from 'react-bootstrap';


function Navbars (){
  const sty = {color:'white', fontSize:'1rem'}
  return(
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed='top'>
  <Container>
  <Navbar.Brand href="#home">Sahyog</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      
    </Nav>
    <Nav>
      <Nav.Link href="/home" style={sty}>Home</Nav.Link>
      <Nav.Link eventKey={2} to="/home" style={sty}>
        Contact
      </Nav.Link>
      <NavDropdown style={sty} title="Sections" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
      <NavLink href="#deets" style={sty}>Login</NavLink>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
  );
}

export default  Navbars