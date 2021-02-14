import { Nav, Navbar, NavDropdown, Button } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function Navmenu() {

    return (
    <Navbar bg="white" expand="lg">
    {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
        <Nav.Link href="/" className="text-danger">Home</Nav.Link>
        <Nav.Link href="/about" className="text-danger">About</Nav.Link>
        <NavDropdown title="Services" id="basic-nav-dropdown">
            <NavDropdown.Item href="/service" className="text-danger">Product 1</NavDropdown.Item>
            <NavDropdown.Item href="/service" className="text-danger">Product 2</NavDropdown.Item>
            <NavDropdown.Item href="/service" className="text-danger">Product 3</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="/contact" className="text-danger">Contact</Nav.Link>
        </Nav>
    </Navbar.Collapse>
    </Navbar>
  );
}

export default Navmenu;