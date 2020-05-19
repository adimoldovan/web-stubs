import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaGithub } from 'react-icons/fa';

export default class AppHeader extends React.Component {
  render() {
    return (
      <Container>
        <Navbar collapseOnSelect expand="sm" bg="light" variant="light" sticky="top" className="justify-content-between">
          <Navbar.Brand href="https://github.com/adimoldovan/web-stubs" target="_blank"><FaGithub /></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <Nav.Link href="#/alert">Alert</Nav.Link>
              <Nav.Link href="#/cookie">Cookie</Nav.Link>
              <Nav.Link href="#/hover">Hover</Nav.Link>
              <Nav.Link href="#/lists">Lists</Nav.Link>
              <Nav.Link href="#/select">Select</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    )
  }
}
