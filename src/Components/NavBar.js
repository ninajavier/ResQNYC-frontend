import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import logo from "../assets/ltngbolt.png";


const NavBar = () => {
  return (
   <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
      <LinkContainer to="/">
      <Navbar.Brand style={{ display: "flex", alignItems: "center", marginLeft: "40px" }}>
        <img
          src={logo}
          width="100"
          height="100"
          className="d-inline-block align-top"
          alt="ResQ NYC logo"
          style={{ marginRight: "10px" }} // Add margin-right to create space between the logo and navbar links
        />
        <span><h1>ResQ NYC</h1></span>
      </Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
            <LinkContainer to="/home">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
              <Nav.Link>About</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/community-hub">
              <Nav.Link>Community Hub</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/services">
              <Nav.Link>Services</Nav.Link>
            </LinkContainer>
          </Nav>
      </Navbar.Collapse>
    </Container>
   </Navbar>
  )
}

export default NavBar
