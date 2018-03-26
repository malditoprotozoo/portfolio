import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Nav from './components/Navbar';
import Home from './components/Home/';
import About from './components/About/';
import Projects from './components/Projects/';
import Skills from './components/Skills/';
import Contact from './components/Contact/';
import Foot from './components/Footer';
import NotFound from './components/NotFound';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav/>
          <Route exact path='/' component={Home}/>
          <Route exact path='/about' component={About}/>
          <Route exact path='/projects' component={Projects}/>
          <Route exact path='/skills' component={Skills}/>
          <Route exact path='/contact' component={Contact}/>
          <Redirect from="*" to="/" />
        <Foot/>
      </div>
    );
  }
}

export default App;
