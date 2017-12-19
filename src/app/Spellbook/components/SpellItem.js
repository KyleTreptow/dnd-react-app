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
        <button className="spellitem__button" onClick={() => { this.props.spellActivate(this.props.itemData) }} >
          <h2 className="spellitem__title">
            {this.props.itemData.name + ' '}
            <span className="spellitem__level">({this.props.itemData.level})</span>
          </h2>
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
        </button>
      </li>
    );
  }
}

export default SpellItem;
