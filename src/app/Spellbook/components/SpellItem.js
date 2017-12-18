import React, { Component } from 'react';

class SpellItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    var itemSchool = this.props.itemData.school.toLowerCase();
    var liClass = this.props.index % 2 === 0 ? 'spellitem spellitem--'+itemSchool : 'spellitem spellitem--alt spellitem--'+itemSchool;
    return (
      <li className={liClass} data-index={this.props.index} data-school={itemSchool}>
          <b>{this.props.itemData.name + ' '}</b>
          ({this.props.itemData.level})
          <ul className="spellitem__list">
            <li className="spellitem__info">
              <small>{this.props.itemData.school}</small>
            </li>
            <li className="spellitem__info">
              <small>{this.props.itemData.class}</small>
            </li>
            <li className="spellitem__info">
              <small>{this.props.itemData.page}</small>
            </li>
          </ul>
          <button className="button" onClick={() => { this.props.spellActivate(this.props.itemData) }} >View Spell</button>
      </li>
    );
  }
}

export default SpellItem;
