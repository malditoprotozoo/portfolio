import React, { Component } from 'react';
import { Navbar, NavbarToggler, Collapse, NavItem, NavLink, NavbarNav } from 'mdbreact';
import { Link } from 'react-router-dom';
// import HomeLink from './HomeLink';
import Logo from './../../assets/img/logo.svg';
import './navbar.css';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false
    };
    this.onClick = this.onClick.bind(this);
  }
  onClick() {
    this.setState({
      collapse: !this.state.collapse
    });
  }
  render() {
    return (
      <Navbar dark color="black" expand="md">
        <Link to="/">
          <img src={Logo} alt="Logo" height="30" />
        </Link>
        { !this.state.isWideEnough && <NavbarToggler onClick = { this.onClick } />}
        <Collapse isOpen = { this.state.collapse } navbar>
          <NavbarNav right className="ml-auto">
            <NavItem>
              <NavLink className="nav-link" to="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="about">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="projects">Projects</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="skills">Skills</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="contact">Contact</NavLink>
            </NavItem>
          </NavbarNav>
        </Collapse>
      </Navbar>
    );
  }
}

export default Nav;