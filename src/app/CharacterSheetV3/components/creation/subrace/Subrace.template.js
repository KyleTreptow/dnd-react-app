import React from 'react';

export default function() {
    return (
        <div className="character">
            <div className="character__inner">
                <div className="character__main">
                    <h2>Choose your subrace</h2>
                    <p>Your race will determine the basis of your character.</p>
                    {this.subraces.map((race, index) =>
                        <div key={index}>
                            <h3>{race.name}</h3>
                            <div>
                                <h4>Overview</h4>
                                <p>{race.description}</p>
                            </div>
                            <div>
                                <h4>Features</h4>
                                <ul>
                                    {race.features.map((feature, index) =>
                                        <li key={index}>{feature}</li>
                                    )}
                                </ul>
                            </div>
                            <button onClick={this.props.setData.bind(this, "subrace", race)}>Set subrace as {race.name}</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
