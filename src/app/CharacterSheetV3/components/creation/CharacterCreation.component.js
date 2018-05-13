import {
    Component
} from 'react';
//import './CharacterSheet.css';
//import Character from './classes/Character.class'

//import ImmutableCharacter from './classes/ImmutableCharacter';

import Template from './CharacterCreation.template'
import ImmutableDataController from '../../../classes/ImmutableDataController'

//import sampleCharacterConfig from './SampleCharacter';

export default class CharacterCreation extends Component {
    constructor(props) {
        super(props);
        this.state = {};

        // Define steps here
        this.steps = ["race", "subrace", "class", "stats", /* "background", "equipment", */ "summary"];
        this.currentStep = this.steps[0];

        this.character = new ImmutableDataController();
        this.state.character = {};
    }

    setData(key, value) {
        this.setState({
            character: this.character.set(key, value)
        })

        let nextStep = this.steps.indexOf(key) + 1;
        this.currentStep = this.steps[nextStep]

    }

    render() {
        return Template.bind(this)();
    }
}
