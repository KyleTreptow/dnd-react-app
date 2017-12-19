import React, { Component } from 'react';

class SpellDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    if(this.props.spellDetailData === null) {
      return (
        <div className="spelldetails">
          <ul className="spelldetails__options">
            <li>
              <button className="button" onClick={() => { this.props.randomSpell() }} >
                <span>?</span>
              </button>
            </li>
          </ul>
          <h2>Select a Spell</h2>
          <p>Click a spell to view spell data, or grab a random spell from the spellbook.</p>
        </div>
      );
    } else {
      function createMarkup(html) { return {__html: html}; };
      var descData = this.props.spellDetailData.desc;
      return (
        <div className="spelldetails">
          <ul className="spelldetails__options">
            <li>
              <button className="button" onClick={() => { this.props.randomSpell() }} >
                <span>?</span>
              </button>
            </li>
            <li>
              <button className="button" onClick={() => { this.props.spellActivate(null) }} >
                <span>X</span>
              </button>
            </li>
          </ul>
          <h2>
            {/* <span className="icon"><img src={logo} className="app-logo" alt="logo" /></span> */}
            {this.props.spellDetailData.name}
          </h2>
          <ul className="########">
            <li><b>Level:</b> {this.props.spellDetailData.level}</li>
            <li><b>Page:</b> {this.props.spellDetailData.page}</li>
            <li><b>School:</b> {this.props.spellDetailData.school}</li>
          </ul>
          <ul className="########">
            <li><b>Range:</b> {this.props.spellDetailData.range}</li>
            <li><b>Duration:</b> {this.props.spellDetailData.duration}</li>
          </ul>
          <ul className="########">
            <li><b>Components:</b> {this.props.spellDetailData.components}</li>
            <li><b>Casting Time:</b> {this.props.spellDetailData.casting_time}</li>
          </ul>
          <ul className="########">
            <li><b>Material:</b> {this.props.spellDetailData.material ? this.props.spellDetailData.material : 'none'}</li>
          </ul>
          <ul className="########">
            <li><b>Class:</b> {this.props.spellDetailData.class}</li>
          </ul>
          <ul className="########">
            <li><b>Concentration:</b> {this.props.spellDetailData.concentration}</li>
            <li><b>Ritual:</b> {this.props.spellDetailData.ritual}</li>
          </ul>
          <p dangerouslySetInnerHTML={createMarkup(descData)} />
        </div>
      );
    }
  }
}

export default SpellDetails;
