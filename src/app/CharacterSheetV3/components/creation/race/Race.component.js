import { Component } from 'react';

import Template from './Race.template'

export default class Race extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return Template.bind(this)();
    }
}
