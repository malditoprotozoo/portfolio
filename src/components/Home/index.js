import React, { Component } from 'react';
import Avatar from './../../assets/img/avatar-tori.png';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div id="Home" className="section">
        <header>
          <h3>Welcome to my digital lair, I'm Tori</h3>
          <h2>Front-End Developer</h2>
        </header>
        <img src={Avatar} alt="Avatar" className="d-sm-none d-lg-block d-md-block d-xl-block d-none"/>
      </div>
    );
  }
}

export default Home;