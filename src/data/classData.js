export default [
    {
        name: 'Barbarian',
        phbPage: 46,
        suggestions: {
            stats: [
                'str',
                'con'
            ],
            background: "Outlander",
            equipment: [
                "(a) a greataxe or (b) any martial melee weapon",
                "(a) two handaxes or (b) any simple weapon",
                "An explorer's pack and four javelins"
            ]
        },
        hp: {
            dice: "1d12",
            level1Base: 12,
            level1Mod: "con",
            levelup: "1d 12 (or 7) + your Constitution modifier per barbarian level after 1st "
        },
        proficiencies: {
            armor: [
                "Light",
                "Medium",
                "Shields"
            ],
            weapons: [
                "Simple",
                "Martial"
            ],
            tools: [],
            saving: [
                "str",
                "con"
            ],
            skills: {
                quantity: 2,
                skills: [
                    "Animal Handling",
                    "Athletics",
                    "Intimidation",
                    "Nature",
                    "Perception",
                    "Survival"
                ]
            }
        },
        features: [
            'Rage',
            'Unarmored Defense',
            'Reckless Attack',
            'Danger Sense',
            'Extra Attack',
            'Fast Movement',
            'Feral Instinct',
            'Brutal Critical',
            'Relentless Rage',
            'Persistent Rage',
            'Indomitable Might',
            'Primal Champion'
        ],
        specializations: [
            {
                name: "Path of the Totem Warrior",
                features: [
                    "Spirit Seeker",
                    "Totem Spirit",
                    "Aspect of the Beast",
                    "Spirit Walker",
                    "Totemic Attunement"
                ]
            }
        ]
    }
]
