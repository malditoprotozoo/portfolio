import React, { Component } from 'react';
import Screenshots from './screenshot';

class Projects extends Component {
  render() {
    return (
      <div id="Projects" className="section">
        <header>
          <h3>Powered by Coffee</h3>
          <h2 className="animated bounce">Projects</h2>
        </header>
        <div>
          <Screenshots />
        </div>
      </div>
    );
  }
}

export default Projects;