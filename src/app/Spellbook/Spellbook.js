import React, { Component } from 'react';
import './Spellbook.css';

// Import Child Components
import SpellItem from './components/SpellItem.js';
import SpellDetails from './components/SpellDetails.js';
import SpellFilters from './components/SpellFilters.js';

class Spellbook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterLevelTerm: '',
      filterClassTerm: '',
      filterSchoolTerm: '',
      filterBookTerm: '',
      searchTerm: '',
      activeSpell: null
    };
    this.spellActivate = this.spellActivate.bind(this);
    this.searchByName = this.searchByName.bind(this);
    this.filterByLevel = this.filterByLevel.bind(this);
    this.filterByClass = this.filterByClass.bind(this);
    this.filterBySchool = this.filterBySchool.bind(this);
    this.filterByBook = this.filterByBook.bind(this);
    this.randomSpell = this.randomSpell.bind(this);
    this.clearSearch = this.clearSearch.bind(this);
  }
  spellActivate(info){
    this.setState({ activeSpell: info });
  }
  // 0.0 NAME SEARCH
  searchByName(e){
    const target = e.target;
    const value = target.value;
    this.setState({
      searchTerm: value
    });
  }
  // 1.0 LEVEL
  filterByLevel(e){
    console.log('Filter by Level: '+e);
    this.setState({
      filterLevelTerm: e
    });
  }
  // 2.0 CLASS
  filterByClass(e){
    console.log('Filter by Class: '+e);
    this.setState({
      filterClassTerm: e
    });
  }
  // 3.0 SCHOOL
  filterBySchool(e){
    console.log('Filter by School: '+e);
    this.setState({
      filterSchoolTerm: e
    });
  }
  // 4.0 BOOK
  filterByBook(e){
    console.log('Filter by Book: '+e);
    this.setState({
      filterBookTerm: e
    });
  }
  clearSearch(){
    this.setState({
      searchTerm: '',
      filterLevelTerm: '',
      filterClassTerm: '',
      filterSchoolTerm: '',
      filterBookTerm: ''
    });
  }
  randomSpell(e){
    var num = this.props.spellData.length;
    var rando = Math.floor(Math.random() * num) + 1;
    this.setState({ activeSpell: this.props.spellData[rando] });
  }
  renderNoSpells(spells){
    if(!spells.length){
      return(
        <li className="spell-item">
          <b>No Spells Found</b>
          <ul className="list-inline">
            <li>No Details</li>
          </ul>
        </li>
      );
    }
  }
  renderOverlay(){
    if(this.state.activeSpell){
      return (
        <button
          className="spellbook__overlay"
          onClick={() => { this.spellActivate(null) }} >
          </button>
      );
    }
  }
  render() {
    var spellbookClass = 'spellbook';
    if(this.state.activeSpell){
      spellbookClass += ' spellbook--active';
    }
    // spell filtering...
    var runFilter = function(arr, term, property){
      // enter array of data, filter term, & property to filter by... iterate
      return arr.filter(function(item){
        return item[property].toLowerCase().indexOf(term.toLowerCase()) !== -1;
      });
    }
    // all filters - in component
    var spells = this.props.spellData;
    spells = runFilter(spells, this.state.filterLevelTerm, 'level'); // level filter
    spells = runFilter(spells, this.state.filterClassTerm, 'class'); // class filter
    spells = runFilter(spells, this.state.filterSchoolTerm, 'school'); // shool filter
    spells = runFilter(spells, this.state.filterBookTerm, 'page'); // page filter
    spells = runFilter(spells, this.state.searchTerm, 'name'); // name filter

    console.log('# rendering: '+spells.length);

    return (
      <div className={spellbookClass}>
        <div className="spellbook__inner">
            <div className="spellbook__main">
              <SpellFilters
                searchTerm={this.state.searchTerm}
                searchByName={this.searchByName}
                filterByLevel={this.filterByLevel}
                filterByClass={this.filterByClass}
                filterBySchool={this.filterBySchool}
                filterByBook={this.filterByBook}
                clearSearch={this.clearSearch} />
              <ul className="spellbook__roll">
                { spells.map((item, i) =>
                  <SpellItem
                    key={i}
                    itemData={item}
                    index={i+1}
                    spellActivate={this.spellActivate}>
                  {item.name}
                  </SpellItem>
                )}
                {this.renderNoSpells(spells)}
              </ul>
            </div>
            <div className="spellbook__aside">
              <SpellDetails
                spellDetailData={this.state.activeSpell}
                spellActivate={this.spellActivate}
                randomSpell={this.randomSpell} />
            </div>
            {this.renderOverlay()}
        </div>
      </div>
    );
  }
}

export default Spellbook;
