import React, { Component } from 'react';
import './App.css';

// Import Child Components
import Header from './modules/Header.js';
import Spellbook from './spellbook/Spellbook.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'panel': 'home'
    };
    this.changePanel = this.changePanel.bind(this);
  }
  changePanel(p) {
    this.setState({ 'panel': p });
  }
  render() {
    if (this.state.panel === 'home'){
      return (
        <div id="wrap">
          <Header changePanel={this.changePanel} />
          <section>
            <h1>Home</h1>
          </section>
        </div>
      );
    } else if (this.state.panel === 'spellbook'){
      return (
        <div id="wrap">
          <Header changePanel={this.changePanel} />
          <Spellbook spellData={this.props.spellData} />
        </div>
      );
    } else if (this.state.panel === 'character-sheet'){
     return (
       <div id="wrap">
         <Header changePanel={this.changePanel} />
         <section>
           <h1>Char Sheet</h1>
         </section>
       </div>
     );
   } else if (this.state.panel === 'store-front'){
    return (
      <div id="wrap">
        <Header changePanel={this.changePanel} />
        <section>
          <h1>Store Front</h1>
        </section>
      </div>
    );
  }

  }
}

export default App;
