import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

class Header extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/products">
            Products
          </Nav.Link>
          <Nav.Link className="text-warning" href="https://codesandbox.io/s/github/MehrdadKiani/React-Router-Example">
            Sandbox 
          </Nav.Link>         
        </Nav>
      </Navbar>
    );
  }
}

export default Header;
