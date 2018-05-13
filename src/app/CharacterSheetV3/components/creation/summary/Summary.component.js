import { Component } from 'react';

import Template from './Summary.template'

export default class Summary extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return Template.bind(this)();
    }
}
