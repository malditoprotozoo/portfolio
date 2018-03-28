import React, { Component } from 'react';
// import MockWindow from './../../assets/img/window.png';

class About extends Component {
  render() {
    return (
      <div id="About" className="page">
        <header>
          <h3>This is the programmer you're looking for!</h3>
          <h2 className="animated bounce">ABOUT ME</h2>
        </header>
        <section>
          <div className="mock-window-container">
            <div className="mock-window">
              <p>
                <span className="mini-title">{'<'}me{'>'}</span>
                Hi again! My name is Victoria 'Tori' Rodríguez and as you may know, I'm a front-end developer.
                I'm 28 years old and I live in Santiago de Chile. Learning is my biggest passion and programming
                is a close second.
                <span className="separator" />
                <span className="mini-title">{'<'}coder{'>'}</span>
                I've been in love with techology since I got my first Atari, but only recently I decided to pursue it as a career.
                The last 6 months I've been part of Laboratoria's bootcamp for women and I swear the all-nighters have been worth it.
                <span className="separator" />
                <span className="mini-title">{'<'}freeTime{'>'}</span>
                On my free time I enjoy binge watching Netflix (oops), reading fiction, writing and reading fanfics
                and spending time with my beautiful family.
              </p>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default About;