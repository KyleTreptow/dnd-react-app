import { Component } from 'react';

import Template from './Class.template'

export default class Class extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return Template.bind(this)();
    }
}
