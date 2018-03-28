import React, { Component } from 'react';
import dataSkills from './../../constants/dataSkills';

class SkillList extends Component {
  constructor() {
    super();
    this.state = {
      data: null
    }
  }
  componentWillMount() {
    this.setState({
      data: dataSkills
    })
  }
  render() {
    return (
      this.state.data !== null ?
      <div className="mock-window-container">
        <div className="mock-window">
          <ul className='false-ul'>
            {'<ul>'}
              {this.state.data.map(obj => {
                return (
                  <li className="false-li" key={obj.skill}>{'<li>'} <span className="text-inside">{obj.skill}</span> {'</li>'}</li>
                );
              })}
            {'</ul>'}
          </ul>
        </div>
      </div>
      :
      <p>null</p>
    );
  }
}

export default SkillList;