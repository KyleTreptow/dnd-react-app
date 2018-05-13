import { Component } from 'react';

import Template from './Stats.template'

export default class Stats extends Component {
    constructor(props) {
        super(props);

        this.state = {
            stats: {
                str: 0,
                dex: 0,
                con: 0,
                int: 0,
                wis: 0,
                cha: 0
            },
            mode: "default",
            unallocated: []
        }
    }

    rollStandard() {
        let unallocated = [];
        for(let i = 0; i < 6; i++) {
            // Collect the rolls
            let rolls = [];
            for(let j = 0; j < 4; j++) {
                rolls.push(Math.floor(Math.random() * 6) + 1)
            }
            // Sort the rolls and take out the smallest number
            rolls.sort();
            rolls.shift();

            // Push the total number onto the stack
            unallocated.push(rolls.reduce((a, b) => a + b));
        }

        unallocated.sort();
        unallocated.reverse();

        this.setState({
            unallocated: unallocated
        })
    }

    setUnallocatedStat(stat, index) {
        let state = this.state;

        if(index === null) {
            // Cleared out a stat, reset it to 0 and put it back in array
            state.unallocated.push(state.stats[stat]);
            state.stats[stat] = 0;
        } else {
            if(index >= 0 && index < state.unallocated.length) {
                // Check if this stat has a number. If so, put that in the array
                if(state.stats[stat] !== 0) {
                    state.unallocated.push(state.stats[stat]);
                }
                state.stats[stat] = state.unallocated[index];
                state.unallocated.splice(index, 1);
            }
        }
        state.unallocated.sort();
        state.unallocated.reverse();

        this.setState(state);
    }

    rollFixed() {
        this.setState({
            unallocated: [ 15, 14, 13, 12, 10, 8 ]
        })
    }

    rollCost() {
        this.setState({
            stats: {
                str: 8,
                dex: 8,
                con: 8,
                int: 8,
                wis: 8,
                cha: 8
            },
            points: 27
        })
    }

    setCostStat(stat, modifier) {
        let state = this.state;
        let stats = state.stats;
        let currentValue = stats[stat];

        if(currentValue <= 8 && modifier === -1) {
            // Trying to decrement when at 8 (min)
            state.stats[stat] = 8;
        } else if (currentValue >= 15 && modifier === 1) {
            // Trying to increment when at 15 (max)
            state.stats[stat] = 15;
        } else if (modifier === 1 || modifier === -1) {
            // All good, increment or decrement the number
            state.stats[stat] += modifier;
        }

        // Get the total cost
        let totalCost = 0;
        for(let stat in stats) {
            let statValue = stats[stat];

            if(statValue >= 8 && statValue <= 13) {
                totalCost += statValue - 8;
            } else if(statValue === 14) {
                totalCost += 7;
            } else if(statValue === 15) {
                totalCost += 9;
            } else {
                throw new Error("Invalid stat value");
            }
        }
        state.points = 27 - totalCost;

        if (state.points >= 0) {
            this.setState(state);
        }
    }

    setStats() {
        this.props.setData("stats", this.state.stats)
    }

    switchModes(mode) {
        // Reset stats
        let stats = this.state.stats;
        for(let s in this.stats) {
             stats[s] = 0;
        }
        this.setState({
            stats: stats,
            mode: mode
        })

        switch(mode) {
            case "standard":
                this.rollStandard();
                break;
            case "fixed":
                this.rollFixed();
                break;
            case "cost":
                this.rollCost();
                break;
            default:
                // This should never happen
                throw new Error("Mode " + mode + " is not defined.");
        }
    }

    saveStats() {
        this.props.setData("stats", this.state.stats);
    }

    render() {
        return Template.bind(this)();
    }
}
