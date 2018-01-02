const { Map, List } = require('immutable');
import Character from "../classes/Character.class"

it("creates correct character immutable", () => {
    let characterConfig = {
        stats: {
            strength: {
                stat: 15,
                saveProficient: false
            },
            dexterity: {
                stat:  14,
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
        ]
    }

    let character = new Character(characterConfig);
    expect(character._data).toEqual(Map({
        stats: Map({
            strength: Map({
                stat: 15,
                saveProficient: false
            }),
            dexterity: Map({
                stat: 14,
                saveProficient: true
            }),
            constitution: Map({
                stat: 10,
                saveProficient: false
            }),
            intelligence: Map({
                stat: 11,
                saveProficient: false
            }),
            wisdom: Map({
                stat: 12,
                saveProficient: false
            }),
            charisma: Map({
                stat: 14,
                saveProficient: true
            })
        }),
        skills: Map({
            acrobatics: Map({
                modifierStat: "dexterity",
                proficient: false,
                customModifiers: List([
                    Map({
                        modifierValue: 2,
                        title: "Divine blessing from DM",
                        description: "Kyle is having a good day today"
                    })
                ]),
                conditionalModifiers: List([])
            })
        }),
        classFeatures: List([
            Map({
                name: "Unarmored Defense",
                class: "barbarian",
                description: List([
                    "While you are not wearing any armor, your Armor Class equals 10 + your Dexterity modifier + your Constitution modifier. You can use a shield and still gain this benefit."
                ])
            }),
            Map({
                name: "Reckless Attack",
                class: "barbarian",
                description: List([
                    "Starting at 2nd level, you can throw aside all concern for defense to attack with fierce desperation. When you make your first attack on your turn, you can decide to attack recklessly. Doing so gives you advantage on melee weapon attack rolls using Strength during this turn, but attack rolls against you have advantage until your next turn."
                ])
            })
        ]),
        racialFeatures: List([
            Map({
                name: "Darkvision",
                description: "Accustomed to twilit forests and the night sky, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
            }),
            Map({
                name: "Keen Senses",
                description: "You have proficiency in the Perception skill."
            })
        ])
    }))
})
