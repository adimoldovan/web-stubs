import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import { FaGithub } from 'react-icons/fa';

export default class SideNav extends React.Component {
  render() {
    return (
      <div className="sidebar">
        <Navbar.Brand href="https://github.com/adimoldovan/web-stubs" target="_blank"><FaGithub /></Navbar.Brand>
        <Nav.Link href="#/login">Login</Nav.Link>
        <Nav.Link href="#/registration">Registration</Nav.Link>
        <Nav.Link href="#/alert">Alerts</Nav.Link>
        <Nav.Link href="#/cookie">Cookie</Nav.Link>
        <Nav.Link href="#/hover">Hover</Nav.Link>
        <Nav.Link href="#/wait">The answer (Wait)</Nav.Link>
        <Nav.Link href="#/order">Order (Drag)</Nav.Link>
        <Nav.Link href="#/swipe">Swipe (Drag)</Nav.Link>
        <Nav.Link href="#/slider">Slider (Drag)</Nav.Link>
        <Nav.Link href="#/stale">Stale element</Nav.Link>
        <Nav.Link href="#/interceptor">Click intercepted</Nav.Link>
        <Nav.Link href="#/modal">Modal</Nav.Link>
      </div>
    )
  }
}
