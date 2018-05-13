import React from 'react';

import Race from './race/Race.component'
import Subrace from './subrace/Subrace.component'
import Class from './class/Class.component'
import Stats from './stats/Stats.component'
import Summary from './summary/Summary.component'

export default function() {
    return (
        <div className="character">
            <div className="character__inner">
                <div className="character__main">
                    <h1>Character Creation</h1>
                    <p>We'll walk through creating your character in some simple steps:</p>

                    {{
                        race: (
                            <Race
                                /* Functions */
                                setData={this.setData.bind(this)}
                                /* Props */
                                character={this.state.character}
                            />
                        ),
                        subrace: (
                            <Subrace
                                /* Functions */
                                setData={this.setData.bind(this)}
                                /* Props */
                                character={this.state.character}
                            />
                        ),
                        class: (
                            <Class
                                /* Functions */
                                setData={this.setData.bind(this)}
                                /* Props */
                                character={this.state.character}
                            />
                        ),
                        stats: (
                            <Stats
                                /* Functions */
                                setData={this.setData.bind(this)}
                                /* Props */
                                character={this.state.character}
                            />
                        ),
                        summary: (
                            <Summary
                                /* Functions */
                                setData={this.setData.bind(this)}
                                /* Props */
                                character={this.state.character}
                            />
                        )
                    }[this.currentStep]}

                </div>
            </div>
        </div>
    );
}
