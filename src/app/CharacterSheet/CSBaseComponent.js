import React, { Component } from 'react';

export default class CSBaseComponent extends Component {
    constructor(props) {
        super(props);
    }

    /*
     * Check for the required properties here. We'll need:
     * @param {Character} character - The Character object that is being
     *                                manipulated
     * @param {Map} characterObject - the immutable representation of the
     *                                character object. We'll use this to
     *                                display the properties instead of the
     *                                actual object.
     * @param {function} updateCharacter - the function (passed down from the
     *                                     root CharacterSheet component) that
     *                                     updates the state of the root
     *                                     component, which then trickles down
     */
    componentWillMount() {
        // Check for a character reference
        if (typeof this.props.character !== "object" || this.props.character.constructor.name !== "Character") {
            throw new Error("'character' prop is not of 'Character' class");
        }

        if (typeof this.props.characterObject !== "object" || this.props.characterObject.constructor.name !== "Map") {
            throw new Error("'characterObject' prop is not of 'Map' class");
        }

        if (typeof this.props.updateCharacter !== "function") {
            throw new Error("'updateCharacter' is not a function");
        }
    }

    /*
     * Default to calling the props updateCharacter (which actually updates the character).
     * We'll only display props.characterObject properties, and nothing in state.
     *
     * This function is in case there's some pre-processing to be done before the update
     */
    updateCharacter() {
        this.props.updateCharacter();
    }

    /*
     * Throw an error, this should never be reached
     */
    render() {
        throw new Error("Implement the 'render' function");
        return null;
    }
}

