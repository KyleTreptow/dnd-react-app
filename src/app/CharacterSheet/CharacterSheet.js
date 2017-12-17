import React, { Component } from 'react';
import './CharacterSheet.css';
import Character from './classes/Character.class'

import Template from './views/CharacterSheet.template'

export default class CharacterSheet extends Component {
    constructor(props) {
        super(props);

        let character = new Character();
        this.state = {
            character: character,
            characterObject: character.immutify()
        };
    }

    updateCharacter() {
        this.setState({
            characterObject: this.state.character.immutify()
        })
    }

    render() {
        return Template.bind(this)();
    }
}

