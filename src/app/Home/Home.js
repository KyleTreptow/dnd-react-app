import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="home">
        <h1>Home Page
          <small>Start the app here...</small>
        </h1>
        <p>Home Page Stuff Here!</p>
        <p>Lorem ipsum dolor sit amet, periculis inciderint vix ne. Omnis debet vis ex, te choro salutatus disputando quo, no usu deserunt pericula argumentum. Vis solet philosophia an. Cu nec ipsum utinam, pri dico corrumpit disputando an. Minimum blandit sadipscing id pri. Ea propriae oportere pro.</p>
        <h2>Healine 2</h2>
        <h3>Healine 3</h3>
        <h4>Healine 4</h4>
        <h5>Healine 5</h5>
        <p>Lorem ipsum dolor sit amet, periculis inciderint vix ne. Omnis debet vis ex, te choro salutatus disputando quo, no usu deserunt pericula argumentum. Vis solet philosophia an. Cu nec ipsum utinam, pri dico corrumpit disputando an. Minimum blandit sadipscing id pri. Ea propriae oportere pro.</p>
        <h2>Healine 2</h2>
        <h3>Healine 3</h3>
        <h4>Healine 4</h4>
        <h5>Healine 5</h5>
      </div>
    );
  }
}

export default Home;
