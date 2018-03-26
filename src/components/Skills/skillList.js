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
      <p>no null</p>
      :
      <p>null</p>
    );
  }
}