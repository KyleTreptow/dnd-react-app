import React from 'react';

export default function() {
    return (
        <div className="character">
            <div className="character__inner">
                <div className="character__main">
                    <h2>Set your stats</h2>
                    <p>Your stats will determine what things your character is good at.</p>
                    <ul>
                        {Object.keys(this.state.stats).map((stat, index) =>
                            <li key={index}>{stat}: {this.state.stats[stat]}</li>
                        )}
                    </ul>
                    {{
                        standard: (
                            <div>
                                <h4>Standard method</h4>
                                <p>
                                    We've done the heavy lifting for you, and your rolls are as follows:<br />
                                    {this.state.unallocated.map(num => num + ", ")}
                                </p>
                                <ul>
                                    {Object.keys(this.state.stats).map((stat, index) =>
                                        <li key={index}>
                                            {stat}: {this.state.stats[stat]}<br />
                                            {this.state.unallocated.map((num, i) =>
                                                <button key={i} onClick={this.setUnallocatedStat.bind(this, stat, i)}>{num}</button>
                                            )}
                                            {this.state.stats[stat] !== 0 &&
                                                <button onClick={this.setUnallocatedStat.bind(this, stat, null)}>Clear</button>
                                            }

                                        </li>
                                    )}
                                </ul>
                                <button onClick={this.saveStats.bind(this)}>Save</button>
                            </div>
                        ),
                        fixed: (
                            <div>
                                <h4>Fixed method</h4>
                                <p>
                                    We've done the heavy lifting for you, and your rolls are as follows:<br />
                                    {this.state.unallocated.map(num => num + ", ")}
                                </p>
                                <ul>
                                    {Object.keys(this.state.stats).map((stat, index) =>
                                        <li key={index}>
                                            {stat}: {this.state.stats[stat]}<br />
                                            {this.state.unallocated.map((num, i) =>
                                                <button key={i} onClick={this.setUnallocatedStat.bind(this, stat, i)}>{num}</button>
                                            )}
                                            {this.state.stats[stat] !== 0 &&
                                                <button onClick={this.setUnallocatedStat.bind(this, stat, null)}>Clear</button>
                                            }

                                        </li>
                                    )}
                                </ul>
                                <button onClick={this.saveStats.bind(this)}>Save</button>
                            </div>
                        ),
                        cost: (
                            <div>
                                <h4>Cost method</h4>
                                <p>
                                   You have {this.state.points} points, use them wisely:<br />
                                </p>
                                <ul>
                                    {Object.keys(this.state.stats).map((stat, index) =>
                                        <li key={index}>
                                            {stat}:
                                            <button onClick={this.setCostStat.bind(this, stat, -1)}>-</button>
                                            {this.state.stats[stat]}<br />
                                            <button onClick={this.setCostStat.bind(this, stat, 1)}>+</button>
                                        </li>
                                    )}
                                </ul>
                                <button onClick={this.saveStats.bind(this)}>Save</button>
                            </div>
                        ),
                        default: (
                            <div>
                                <div>Please choose a mode below</div>
                                <h4>Standard</h4>
                                <p>Roll 4 times, drop the lowest score. Repeat 6 times.</p>
                                <button onClick={this.switchModes.bind(this, "standard")}>Standard</button>
                                <h4>Fixed</h4>
                                <p>Fixed scores. (15, 14, 13, 12, 10, 8)</p>
                                <button onClick={this.switchModes.bind(this, "fixed")}>Fixed</button>
                                <h4>Cost Allocation</h4>
                                <p>You have 27 points to spend on your stats</p>
                                <button onClick={this.switchModes.bind(this, "cost")}>Cost</button>
                            </div>
                        )
                    }[this.state.mode]}
                </div>
            </div>
        </div>
    );
}
