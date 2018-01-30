import { Component } from 'react';
import './CharacterSheet.css';
import Character from './classes/Character.class'

import Template from './views/CharacterSheet.template'

const sampleCharacterConfig = {
    stats: {
        strength: {
            stat: 15,
            saveProficient: false
        },
        dexterity: {
            stat: 14,
            saveProficient: true
        },
        constitution: {
            stat: 10,
            saveProficient: false
        },
        intelligence: {
            stat: 11,
            saveProficient: false
        },
        wisdom: {
            stat: 12,
            saveProficient: false
        },
        charisma: {
            stat: 14,
            saveProficient: true
        }
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
    ],
    spells: [
        {
            "name": "Abi-Dalzim's Horrid Wilting",
            "desc": "<p>You draw the moisture from every creature in a 30-foot cube centered on a point you choose within range. Each creature in that area must make a Constitution saving throw. Constructs and undead aren't affected, and plants and water elementals make this saving throw with disadvantage. A creature takes 10d8 necrotic damage on a failed save, or half as much damage on a successful one.You hurl a bubble of acid. Choose one creature within range, or choose two creatures within range that are within 5 feet of each other. A target must succeed on a Dexterity saving throw or take 1d6 acid damage.</p><p>This spells damage increases by 1d6 when you reach 5th Level (2d6), 11th level (3d6) and 17th level (4d6).</p>",
            "page": "ee pc 15",
            "range": "150 feet",
            "components": "V, S, M",
            "material": "A bit of sponge.",
            "ritual": "no",
            "duration": "Instantaneous",
            "concentration": "no",
            "casting_time": "1 action",
            "level": "8th-level",
            "school": "Necromancy",
            "class": "Sorcerer, Wizard"
        },
        {
            "name": "Absorb Elements",
            "desc": "<p>The spell captures some of the incoming energy, lessening its effect on you and storing it for your next melee attack. You have resistance to the triggering damage type until the start of your next turn. Also, the first time you hit with a melee attack on your next turn, the target takes an extra 1d6 damage of the triggering type, and the spell ends.</p>",
            "higher_level": "<p>When you cast this spell using a spell slot of 2nd level or higher, the extra damage increases by 1d6 for each slot level above 1st.</p>",
            "page": "ee pc 15",
            "range": "Self",
            "components": "S",
            "ritual": "no",
            "duration": "1 round",
            "concentration": "no",
            "casting_time": "1 action",
            "level": "1st-level",
            "school": "Abjuration",
            "class": "Druid, Ranger, Wizard"
        },
        {
            "name": "Acid Splash",
            "desc": "<p>You hurl a bubble of acid. Choose one creature within range, or choose two creatures within range that are within 5 feet of each other. A target must succeed on a dexterity saving throw or take 1d6 acid damage.</p> <p>This spell’s damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6).</p>",
            "page": "phb 211",
            "range": "60 feet",
            "components": "V, S",
            "ritual": "no",
            "duration": "Instantaneous",
            "concentration": "no",
            "casting_time": "1 action",
            "level": "Cantrip",
            "school": "Conjuration",
            "class": "Sorcerer, Wizard"
        },
        {
            "name": "Aganazzar's Scorcher",
            "desc": "<p>A line of roaring flame 30 feet long and 5 feet wide emanates from you in a direction you choose. Each creature in the line must make a Dexterity saving throw. A creature takes 3d8 fire damage on a failed save, or half as much damage on a successful one.</p>",
            "higher_level": "<p>When you cast this spell using a spell slot of 3nd level or higher, the damage increases by 1d8 for each slot level above 2st.</p>",
            "page": "ee pc 15",
            "range": "30 feet",
            "components": "V, S, M",
            "material": "A red dragon's scale.",
            "ritual": "no",
            "duration": "Instantaneous",
            "concentration": "no",
            "casting_time": "1 action",
            "level": "2nd-level",
            "school": "Evocation",
            "class": "Sorcerer, Wizard"
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

