import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Form, Button, FormControl } from "react-bootstrap";

const NavSection = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Dota2</Navbar.Brand>
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
          <Nav.Link as={Link} to="/matches">
            Matches
          </Nav.Link>
          <Nav.Link as={Link} to="/players">
            Players
          </Nav.Link>
        </Nav>
        {/* <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form> */}
      </Navbar>
    </div>
  );
};

export default NavSection;
