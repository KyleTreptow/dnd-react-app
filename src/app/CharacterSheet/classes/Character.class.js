const { Map } = require('immutable');

export default class Character {
    constructor() {

    }

    immutify() {
        return Map({foo: Math.random()});
    }
}
