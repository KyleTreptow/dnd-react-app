import React, { Component } from 'react';
// import logo from '../img/logo.svg';
import './App.css';

// Containers (Child Components)
import Navigation from './Navigation/Navigation.js';
import Home from './Home/Home.js';
import Spellbook from './Spellbook/Spellbook.js';
import Character from './Character/Character.js';
import Equipment from './Equipment/Equipment.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navOpen : false,
      panel : 'home'
    };
    this.changePanel = this.changePanel.bind(this);
  }
  openNavi() {
    this.setState({ navOpen : !this.state.navOpen });
  }
  changePanel(p) {
    this.setState({ 'panel': p });
    this.setState({ 'navOpen': false });
  }
  renderHome(){
    return (
      <Home />
    );
  }
  renderSpellbook(){
    return (
      <Spellbook spellData={this.props.spellData} />
    );
  }
  renderCharacter(){
    return (
      <Character />
    );
  }
  renderEquipment(){
    return (
      <Equipment />
    );
  }
  render() {
    let appClass = this.state.navOpen ? 'app app--navopen' : 'app';
    let activePanel = this.renderHome();
    if(this.state.panel === 'spellbook'){
      activePanel = this.renderSpellbook();
    } else if (this.state.panel === 'character') {
      activePanel = this.renderCharacter();
    } else if (this.state.panel === 'equipment') {
      activePanel = this.renderEquipment();
    }
    return (
      <div className={appClass} id="app">
        <div className="app__inner" id="app">
          <header className="app__header">
            <a href="/" className="app__branding">
            LOGO
              {/* <img src={logo} className="app__logo" alt="app logo" /> */}
            </a>
            <button
              className="app__navtoggle"
              name="button"
              onClick={() => { this.openNavi() }} >
              Menu
            </button>
            <div className="app__nav">
              <Navigation changePanel={this.changePanel} ></Navigation>
            </div>
          </header>
          <main className="app__main">

            { activePanel }

          </main>
          <footer className="app__footer">
            <ul className="pipelist">
              <li className="pipelist__item">D&D React Project</li>
              <li className="pipelist__item">Kyle, Bryan & Liz</li>
              <li className="pipelist__item">
                <a href="https://github.com/KyleTreptow/dnd-react-app" target="_blank">Github</a>
              </li>
            </ul>
          </footer>
        </div>
        <div className="app__modal">{/* modal component here */}</div>
      </div>
    );
  }
}

export default App;
