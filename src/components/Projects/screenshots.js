import React, { Component } from 'react';
import dataProject from './../../constants/dataProject';
import MockWindow from './../../assets/img/window.png';
import './screenshots.css';

class Screenshots extends Component {
  constructor() {
    super();
    this.state = {
      data: null
    }
  }
  componentDidMount() {
    this.setState({
      data: dataProject
    })
  }
  render() {
    return (
      <div id="Screenshots">
        {
          this.state.data !== null ?
          this.state.data.map(obj => {
            return (
              <div className="mock-window-container" key={obj.title}>
                <img src={MockWindow} alt="Window" className="mock-window"/>
                <p>
                  <span className="mini-title">{'<'}{obj.title}{'>'}</span>
                  <span className="separator" />
                  <span className="preview-container">
                    <img src={obj.preview} alt={obj.title + ' Screenshot'} className="preview"/>
                  </span>
                  <span className="project-description">{obj.description}</span>
                  <span className="separator" />
                  <a target="_blank" href={obj.demo} rel="noopener noreferrer" className="btn">Demo</a>
                  <a target="_blank" href={obj.repository} rel="noopener noreferrer" className="btn">Code</a>
                </p>
              </div>
            );
          })
          :
          <p>Loading...</p>
        }
      </div>
    );
  }
}

export default Screenshots;