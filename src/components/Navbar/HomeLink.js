import React, { Component } from 'react';
import { NavItem, NavLink } from 'mdbreact';

class HomeLink extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: true
    }
  }
  onChange() {
    this.setState({
      active: false
    })
  }
  render() {
    return (
      <NavItem>
        <NavLink className="nav-link" to="home">Home</NavLink>
      </NavItem>
    );
  }
}

export default HomeLink;