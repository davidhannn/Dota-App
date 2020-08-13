import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Form, Button, FormControl } from "react-bootstrap";

const NavSection = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="#home">Dota2</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/heroes">
            Heroes
          </Nav.Link>
          <Nav.Link as={Link} to="/items">
            Items
          </Nav.Link>
          {/* <Nav.Link as={Link} to="/matches">
            Matches
          </Nav.Link>
          <Nav.Link as={Link} to="/players">
            Players
          </Nav.Link> */}
        </Nav>
      </Navbar.Collapse>
      {/* <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form> */}
    </Navbar>
  );
};

export default NavSection;
