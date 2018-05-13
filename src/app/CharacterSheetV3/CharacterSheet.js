import { Component } from 'react';
//import './CharacterSheet.css';
//import Character from './classes/Character.class'

//import ImmutableCharacter from './classes/ImmutableCharacter';

import Template from './CharacterSheet.template'

//import sampleCharacterConfig from './SampleCharacter';

export default class CharacterSheet extends Component {
    constructor(props) {
        super(props);
        // Define tabs here
        this.tabs = ["main", "details", "equipment", "combat", "spells"];

        /* let immutableCharacter = new ImmutableCharacter();
        immutableCharacter.updateStat("strength", 15, true, []);

        let character = new Character(sampleCharacterConfig);
        this.state = {
            character: character,
            characterObject: character.immutify(),
            // Immutable implementation
            immutableCharacter: immutableCharacter,
            immutableStateCharacter: immutableCharacter.immutify(),
            currentTab: "main"
        }; */
    }

    

    updateCharacter() {
        this.setState({
            characterObject: this.state.character.immutify()
        })
    }

    updateStr() {
        console.log('updating str');
        if(this.state.immutableCharacter.updateStat("strength", 16, true, [])) {
            // FOrcing update!
            this.setState({
                immutableStateCharacter: this.state.immutableCharacter.immutify()
            })
            //this.forceUpdate();
            console.log('forced update');
        } else {
            console.log('no change')
        }
    }

    deleteStr() {
        console.log('deleting str');
        if (this.state.immutableCharacter.deleteStat("strength")) {
            // FOrcing update!
            this.setState({
                immutableStateCharacter: this.state.immutableCharacter.immutify()
            })
            //this.forceUpdate();
            console.log('forced update');
        } else {
            console.log('no change')
        }
    }

    setTab(tab) {
        if(this.tabs.indexOf(tab) !== -1) {
            this.setState({ currentTab: tab })
        }
    }

    render() {
        return Template.bind(this)();
    }
}

