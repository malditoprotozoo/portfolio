import React, { Component } from 'react';
import './Contact.css';

class Contact extends Component {
  render() {
    return (
      <div id="Contact" className="page">
        <header>
          <h3>I couldn't think of a funny introduction for this section :v</h3>
          <h2 className="animated bounce">Contact</h2>
        </header>
        <section>
          <div className="mock-window-container">
            <div className="mock-window">
              <div>
                <a target="_blank" href="mailto:virodriguez.fe@gmailcom" rel="noopener noreferrer" className="hvr-float-shadow">
                  <i className="fas fa-envelope"></i>
                </a>
                <a target="_blank" href="https://www.linkedin.com/in/virodriguezfe" rel="noopener noreferrer" className="hvr-float-shadow">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a target="_blank" href="https://github.com/malditoprotozoo" rel="noopener noreferrer" className="hvr-float-shadow">
                  <i className="fab fa-github-square"></i>
                </a>
                <a target="_blank" href="https://www.facebook.com/VToriRodriguez" rel="noopener noreferrer" className="hvr-float-shadow">
                  <i className="fab fa-facebook-square"></i>
                </a>
                <a target="_blank" href="https://twitter.com/malditoprotozoo" rel="noopener noreferrer" className="hvr-float-shadow">
                  <i className="fab fa-twitter-square"></i>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Contact;