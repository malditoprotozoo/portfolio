import React, { Component } from 'react';
import SkillList from './skillList';
import './Skills.css';

class Skills extends Component {
  render() {
    return (
      <div id="Skills" className="page">
        <header>
          <h3>Ah, I See You're a Man of Culture As Well...</h3>
          <h2 className="animated bounce">Skills</h2>
        </header>
        <section>
          <SkillList />
        </section>
      </div>
    );
  }
}

export default Skills;