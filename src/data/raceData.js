export default [
    {
        name: 'Dwarf',
        phbPage: 18,
        traits: {
            abilityScoreIncrease: {
                con: 2
            },
            age: 100,
            alignment: {
                morality: "good",
                ethics: "lawful"
            },
            size: "medium",
            speed: "25"
        },
        features: [
            'Darkvision',
            'Dwarven Resilience',
            'Dwarven Combat Training',
            'Stonecunning'
        ],
        proficiencies: {
            tools: [
                [
                    "Smith's Tools",
                    "Brewer's Supplies",
                    "Mason's Tools"
                ]
            ]
        },
        languages: [
            "Common",
            "Dwarvish"
        ],
        subraces: [
            {
                name: "Hill Dwarf",
                traits: {
                    abilityScoreIncrease: {
                        wis: 1
                    }
                },
                features: [
                    "Dwarven Toughness"
                ],
                description: `As a hill dwarf, you have keen senses, deep intuition,
                    and remarkable resilience. The gold dwarves of Faerun in their mighty southern kingdom are hill dwarves, as
                    are the exiled Neidar and the debased Klar of Krynn in
                    the Dragonlance setting.`
            },
            {
                name: "Mountain Dwarf",
                traits: {
                    abilityScoreIncrease: {
                        str: 2
                    }
                },
                features: [
                    "Dwarven Armor Training"
                ],
                description: `As a mountain dwarf, you're strong and hardy,
                    accustomed to a difficult life in rugged terrain. You're
                    probably on the tall side (for a dwarf), and tend toward
                    lighter coloration. The shield dwarves of northern
                    Faerun, as well as the ruling Hylar clan and the noble
                    Daewar clan of Dragonlance, are mountain dwarves.`
            }
        ]
    }
]
