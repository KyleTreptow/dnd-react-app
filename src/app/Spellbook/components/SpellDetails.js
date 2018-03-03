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
          <div className="spelldetails__inner">
            <ul className="spelldetails__optionlist">
              <li className="spelldetails__option">
                <button className="button" onClick={() => { this.props.randomSpell() }} >
                  <span>?</span>
                </button>
              </li>
            </ul>
            <h2>Select a Spell</h2>
            <p>Click a spell to view spell data, or grab a random spell from the spellbook.</p>
        </div>
        </div>
      );
    } else {
      function createMarkup(html) { return {__html: html}; };
      var descData = this.props.spellDetailData.desc;
      return (
        <div className="spelldetails">
          <div className="spelldetails__inner">
            <ul className="spelldetails__optionlist">
              <li className="spelldetails__option">
                <button className="button" onClick={() => { this.props.randomSpell() }} >
                  <span>?</span>
                </button>
              </li>
              <li className="spelldetails__option">
                <button className="button" onClick={() => { this.props.spellActivate(null) }} >
                  <span>X</span>
                </button>
              </li>
            </ul>
            <h2>
              {/* <span className="icon"><img src={logo} className="app-logo" alt="logo" /></span> */}
              {this.props.spellDetailData.name}
            </h2>
            <ul className="spelldetails__infolist">
              <li className="spelldetails__info"><b>Level:</b> {this.props.spellDetailData.level}</li>
              <li className="spelldetails__info"><b>Page:</b> {this.props.spellDetailData.page}</li>
              <li className="spelldetails__info"><b>School:</b> {this.props.spellDetailData.school}</li>
              <li className="spelldetails__info"><b>Range:</b> {this.props.spellDetailData.range}</li>
              <li className="spelldetails__info"><b>Duration:</b> {this.props.spellDetailData.duration}</li>
              <li className="spelldetails__info"><b>Components:</b> {this.props.spellDetailData.components}</li>
              <li className="spelldetails__info"><b>Casting Time:</b> {this.props.spellDetailData.casting_time}</li>
              <li className="spelldetails__info"><b>Material:</b> {this.props.spellDetailData.material ? this.props.spellDetailData.material : 'none'}</li>
              <li className="spelldetails__info"><b>Class:</b> {this.props.spellDetailData.class}</li>
              <li className="spelldetails__info"><b>Concentration:</b> {this.props.spellDetailData.concentration}</li>
              <li className="spelldetails__info"><b>Ritual:</b> {this.props.spellDetailData.ritual}</li>
            </ul>
            <p dangerouslySetInnerHTML={createMarkup(descData)} />
          </div>
        </div>
      );
    }
  }
}

export default SpellDetails;
