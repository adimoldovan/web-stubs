import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import { FaGithub } from 'react-icons/fa';

export default class SideNav extends React.Component {
  render() {
    return (
      <div className="sidebar">
        <Navbar.Brand href="https://github.com/adimoldovan/web-stubs" target="_blank"><FaGithub /></Navbar.Brand>
        <Nav.Link href="#/alert">Alerts</Nav.Link>
        <Nav.Link href="#/cookie">Cookie</Nav.Link>
        <Nav.Link href="#/hover">Hover</Nav.Link>
        <Nav.Link href="#/wait">Wait</Nav.Link>
        <Nav.Link href="#/lists">Lists</Nav.Link>
        <Nav.Link href="#/select">Select</Nav.Link>
        <Nav.Link href="#/select">Slider</Nav.Link>
        <Nav.Link href="#/select">Sortable</Nav.Link>
        <Nav.Link href="#/select">Stale element</Nav.Link>
        <Nav.Link href="#/select">Click intercepted</Nav.Link>
      </div>
    )
  }
}
