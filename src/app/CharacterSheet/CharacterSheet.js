import { Component } from 'react';
import './CharacterSheet.css';
import Character from './classes/Character.class'

import Template from './views/CharacterSheet.template'

const sampleCharacterConfig = {
    stats: {
        strength: 15,
        dexterity: 14,
        constitution: 10,
        intelligence: 11,
        wisdom: 12,
        charisma: 14
    },
    skills: {
        acrobatics: {
            modifierStat: "dexterity",
            proficient: false,
            customModifiers: [
                {
                    modifierValue: 2,
                    title: "Divine blessing from DM",
                    description: "Kyle is having a good day today"
                }
            ],
            conditionalModifiers: []
        }
    },
    classFeatures: [
        {
            name: "Unarmored Defense",
            class: "barbarian",
            description: [
                "While you are not wearing any armor, your Armor Class equals 10 + your Dexterity modifier + your Constitution modifier. You can use a shield and still gain this benefit."
            ]
        },
        {
            name: "Reckless Attack",
            class: "barbarian",
            description: [
                "Starting at 2nd level, you can throw aside all concern for defense to attack with fierce desperation. When you make your first attack on your turn, you can decide to attack recklessly. Doing so gives you advantage on melee weapon attack rolls using Strength during this turn, but attack rolls against you have advantage until your next turn."
            ]
        }
    ],
    racialFeatures: [
        {
            name: "Darkvision",
            description: "Accustomed to twilit forests and the night sky, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
        },
        {
            name: "Keen Senses",
            description: "You have proficiency in the Perception skill."
        }
    ]
};

export default class CharacterSheet extends Component {
    constructor(props) {
        super(props);

        let character = new Character(sampleCharacterConfig);
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

