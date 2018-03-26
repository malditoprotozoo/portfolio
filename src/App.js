import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Nav from './components/Navbar';
import Home from './components/Home/';
import About from './components/About/';
import Projects from './components/Projects/';
import Skills from './components/Skills/';
import Contact from './components/Contact/';
import Foot from './components/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/about' component={About}/>
          <Route exact path='/projects' component={Projects}/>
          <Route exact path='/skills' component={Skills}/>
          <Route exact path='/contact' component={Contact}/>
        </Switch>
        <Foot/>
      </div>
    );
  }
}

export default App;
