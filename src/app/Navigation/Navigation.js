import React, { Component } from 'react';
import './Navigation.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <nav className="navigation">
        <ul className="navigation__list">
          <li className="navigation__item">
            <button className="navigation__button" onClick={() => { this.props.changePanel('home') }}>
              Home
            </button>
          </li>
          <li className="navigation__item">
            <button className="navigation__button" onClick={() => { this.props.changePanel('spellbook') }}>
              Spellbook
            </button>
          </li>
          <li className="navigation__item">
            <button className="navigation__button" onClick={() => { this.props.changePanel('character') }}>
              Character
            </button>
          </li>
          <li className="navigation__item">
            <button className="navigation__button" onClick={() => { this.props.changePanel('equipment') }}>
              Equipment
            </button>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Header;
