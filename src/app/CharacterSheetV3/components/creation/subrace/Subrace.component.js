import { Component } from 'react';

import Template from './Subrace.template'

export default class Subrace extends Component {
    constructor(props) {
        super(props);

        this.subraces = this.props.character.get('race').get('subraces').toJS();
        if(!this.subraces || this.subraces.length === 0) {
            this.props.setData("subrace", null);
        }
    }

    render() {
        return Template.bind(this)();
    }
}
