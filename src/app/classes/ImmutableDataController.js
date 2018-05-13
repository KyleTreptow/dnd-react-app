import { fromJS } from 'immutable';

export default class ImmutableDataController {
    constructor(data) {
        // This is the JS representation of the object
        this._data = data || {};
        // This is the immutable representation of the data
        this._immutable = fromJS(this._data);
    }


    /*
     * This function takes the current data, turns it into an immutable,
     * and then compares it against the current representation.
     *
     * If the data changed, it'll return a new immutable, which should
     * then be set inside the component. If not, it'll return the same
     * and the component will not rerender.
     *
     */
    immutify() {
        let newImmutable = fromJS(this._data);
        if(newImmutable.equals(this._immutable)) {
            return this._immutable;
        } else {
            return this._immutable = newImmutable;
        }
        //throw new Error("immutify is not defined");
    }

    // Gets the data associated with a certain property name
    get(key) {
        return this._data[key];
    }

    // Sets the new data, immediately immutify's it and return it
    set(key, value) {
        this._data[key] = value;
        return this.immutify();
    }

    /*
     * =========================
     *   Global Helpers
     * =========================
     */
    _findAndUpdate(propertyName, newObject) {
        let index = this[propertyName].findIndex(function (obj) {
            return obj.get("name") === newObject.get("name");
        });

        if (index === -1) {
            // Not found, push it
            this[propertyName] = this[propertyName].push(newObject);
            return true;
        } else {
            let newImmutable = this._stats.setIn([index], newObject);

            // Force a re-render if things actually changed
            if (newImmutable.equals(this[propertyName])) {
                return false;
            } else {
                this[propertyName] = newImmutable;
                return true;
            }
        }
    }

    _findAndDelete(propertyName, name) {
        let oldProperty = this[propertyName];
        let newProperty = this[propertyName].filterNot(obj => obj.get("name") === name);

        if (oldProperty.equals(newProperty)) {
            return false;
        } else {
            this[propertyName] = newProperty;
            return true;
        }
    }
}