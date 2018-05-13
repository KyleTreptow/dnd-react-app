import { fromJS, List } from 'immutable';
import ImmutableStateController from '../../classes/ImmutableStateController';

export default class Character extends ImmutableStateController {
    constructor() {
        super();

        this.level = 1;
        this.hp = 10;
        this._stats = new List([]);
        this._skills = new List([]);
        this._inventory = new List([]);
        this._classFeatures = new List([]);
        this._racialFeatures = new List([]);
    }

    immutify() {
        return fromJS({
            "stats": this._stats,
            "skills": this._skills,
            "inventory": this._inventory
        })
    }

    updateStat(name, value, proficient, modifiers) {
        if(typeof name !== "string" || isNaN(value) ||
            !(List.isList(modifiers) || Array.isArray(modifiers))) {
                throw "Parameters to updateStat are invalid.";
                return false;
            }

        let statObject = fromJS({
            name: name,
            value: value,
            proficient: !!proficient,
            proficiencyBonus: this.proficiencyBonus,
            modifiers: modifiers
        });

        return this._updateStat(statObject);
    }
    deleteStat(name) {
        return this._findAndDelete("_stats", name);
    }

    /*
     * =========================
     *   Stats Helpers
     * =========================
     */
    _updateStat(statObject) {
        let index = this._stats.findIndex(function (stat) {
            return stat.get("name") === statObject.get("name");
        });

        if (index === -1) {
            // Not found, push it
            this._stats = this._stats.push(statObject);
            return true;
        } else {
            let newStats = this._stats.setIn([index], statObject);

            // Force a re-render if things actually changed
            if(newStats.equals(this._stats)) {
                return false;
            } else {
                this._stats = newStats;
                return true;
            }
        }
    }
}