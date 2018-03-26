import React, { Component } from 'react';
import { Container, Footer } from 'mdbreact';
import './Footer.css';

class Foot extends Component {
  render() {
    return (
      <Footer color="black" className="font-small">
        <div className="footer-copyright text-center">
          <Container fluid>
            &copy; {(new Date().getFullYear())} Copyright: <a href="https://github.com/malditoprotozoo/"> Malditoprotozoo </a>
          </Container>
        </div>
      </Footer>
    );
  }
}

export default Foot;