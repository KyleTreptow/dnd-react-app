import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <header id="header">
        <ul className="list-inline">
          <li><button onClick={() => { this.props.changePanel('home') }}>Home</button></li>
          <li><button onClick={() => { this.props.changePanel('spellbook') }}>Spellbook</button></li>
          <li><button onClick={() => { this.props.changePanel('character-sheet') }}>Character Sheet</button></li>
          <li><button onClick={() => { this.props.changePanel('store-front') }}>Store Front</button></li>
        </ul>
      </header>
    );
  }
}

export default Header;
