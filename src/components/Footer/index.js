import React, { Component } from 'react';
import './styles.sass';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <p className="has-link">
          Made by <a target="blank" href="http://www.telkomuniversity.ac.id">Telkom University</a>
        </p>
      </footer>
    );
  }
}

export default Footer;
