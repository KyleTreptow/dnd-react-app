const { Map, List } = require('immutable');

export default class Character {
    constructor(character = {}) {
        // This "private" variable will hold the immutable representation
        // of the character data
        this._data = Map({});

        /*
         * This property should be structured as such:
         * {
         *      (stat name) : (Number),
         *      ...
         * }
         */
        let stats = Map({});
        if (typeof character.stats === "object") {
            for(const stat in character.stats) {
                stats = stats.set(
                    stat,
                    isNaN(Number(character.stats[stat])) ?
                        0 : Number(character.stats[stat])
                );
            }
        }
        this._data = this._data.set("stats", stats);

        /*
         * This property should be structured as such:
         * {
         *      (skill name) : {
         *          modifierStat : (Name of stat, case sensitive),
         *          proficient : (Boolean),
         *          customModifiers : [
         *              {
         *                  modifierValue : (Number),
         *                  title : (String),
         *                  description: (String)
         *              },
         *              ...
         *          ],
         *          conditionalModifiers : [
         *              {
         *                  modifierValue : (Number),
         *                  title : (String),
         *                  description: (String)
         *              },
         *              ...
         *          ]
         *      },
         *      ...
         * }
         */
        let skills = Map({});
        if (typeof character.skills === "object") {
            for (const skill in character.skills) {
                if(typeof character.skills[skill] !== "object") {
                    // Does not match our structure, insert blank to show something went wrong
                    skills = skills.set(skill, {
                        modifierStat: "",
                        proficient: false,
                        customModifiers: [],
                        conditionalModifiers: []
                    })
                } else {
                    // Check properties
                    let modifierStat = typeof character.skills[skill].modifierStat === "string" ?
                        character.skills[skill].modifierStat : "";
                    let proficient = !!character.skills[skill].proficient;
                    let customModifiers = List([]);
                    if (Array.isArray(character.skills[skill].customModifiers)) {
                        for (const customModifier of character.skills[skill].customModifiers) {
                            // var to expose to outside of for loop
                            let modifierValue = isNaN(customModifier.modifierValue) ? 0 : Number(customModifier.modifierValue);
                            let title = typeof customModifier.title === "string" ? customModifier.title : "";
                            let description = typeof customModifier.description === "string" ? customModifier.description : "";

                            customModifiers = customModifiers.push(Map({
                                modifierValue: modifierValue,
                                title: title,
                                description: description
                            }));
                        }
                    }
                    let conditionalModifiers = List([]);
                    if (Array.isArray(character.skills[skill].conditionalModifiers)) {
                        for (const conditionalModifier of character.skills[skill].conditionalModifiers) {
                            // var to expose to outside of for loop
                            let modifierValue = isNaN(conditionalModifier.modifierValue) ? 0 : Number(conditionalModifier.modifierValue);
                            let title = typeof conditionalModifier.title === "string" ? conditionalModifier.title : "";
                            let description = typeof conditionalModifier.description === "string" ? conditionalModifier.description : "";

                            conditionalModifiers = conditionalModifiers.push(Map({
                                modifierValue: modifierValue,
                                title: title,
                                description: description
                            }));
                        }
                    }

                    skills = skills.set(skill, Map({
                        modifierStat: modifierStat,
                        proficient: proficient,
                        customModifiers: customModifiers,
                        conditionalModifiers: conditionalModifiers
                    }));
                }
            }
        }
        this._data = this._data.set("skills", skills);

        /*
         * This property should be structured as such:
         * [
         *      {
         *          name : (String),
         *          class : (String),
         *          description : [(String), ...]
         *      }
         *      ...
         * ]
         */
        let classFeatures = List([]);
        if (Array.isArray(character.classFeatures)) {
            for (const feature of character.classFeatures) {
                if (typeof feature.name === "string" && typeof feature.class === "string" && Array.isArray(feature.description)) {
                    // Verified, create and add the feature
                    let description = List([]);

                    for (const desc of feature.description) {
                        // Only add strings
                        if (typeof desc === "string") {
                            description = description.push(desc);
                        }
                    }

                    let newFeature = Map({
                        name: feature.name,
                        class: feature.class,
                        description: description
                    });

                    classFeatures = classFeatures.push(newFeature);
                }
            }
        }

        this._data = this._data.set("classFeatures", classFeatures);

        /*
         * This property should be structured as such:
         * [
         *      {
         *          name : (String),
         *          description : (String)
         *      }
         *      ...
         * ]
         */
        let racialFeatures = List([]);
        if (Array.isArray(character.racialFeatures)) {
            for (const feature of character.racialFeatures) {
                if (typeof feature.name === "string" && typeof feature.description === "string") {
                    // Verified, create and add the feature
                    let newFeature = Map({
                        name: feature.name,
                        description: feature.description
                    });

                    racialFeatures = racialFeatures.push(newFeature);
                }
            }
        }
        this._data = this._data.set("racialFeatures", racialFeatures);
    }

    immutify() {
        return this._data;
        //return Map({foo: Math.random()});
    }
}
