import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import logo from "../assets/ltngbolt.png";


const NavBar = () => {
  return (
   <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
      <LinkContainer to="/">
      <Navbar.Brand>
          <img
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="ResQ NYC logo"
          />{' '}
          ResQ NYC
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
