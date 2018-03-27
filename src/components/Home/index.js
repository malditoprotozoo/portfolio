import React, { Component } from 'react';
import Avatar from './../../assets/img/avatar-speech.png';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div id="Home" className="page">
        <header>
          <h3>Welcome to my digital lair, I'm Tori</h3>
          <h2 className="animated bounce">Front-End Developer</h2>
        </header>
        <div id="main-avatar">
          <a target="_blank" href="https://github.com/malditoprotozoo">
            <img src={Avatar} alt="Avatar" className="dealWithIt"/>
          </a>
        </div>
      </div>
    );
  }
}

export default Home;