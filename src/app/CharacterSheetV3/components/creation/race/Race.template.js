import React from 'react';

import RaceData from '../../../../../data/raceData';

export default function() {
    return (
        <div className="character">
            <div className="character__inner">
                <div className="character__main">
                    <h2>Choose your race</h2>
                    <p>Your race will determine the basis of your character.</p>
                    {RaceData.map((race, index) =>
                        <div key={index}>
                            <h3>{race.name}</h3>
                            <div>
                                <h4>Overview</h4>
                                <p>PHB Page: {race.phbPage}</p>
                                <p>Size: {race.traits.size}</p>
                                <p>Speed: {race.traits.speed}</p>
                                <p>Alignment: {race.traits.alignment.ethics} {race.traits.alignment.morality}</p>
                                <ul>
                                    {race.languages.map((language, index) =>
                                        <li key={index}>{language}</li>
                                    )}
                                </ul>
                            </div>
                            <div>
                                <h4>Features</h4>
                                <ul>
                                    {race.features.map((feature, index) =>
                                        <li key={index}>{feature}</li>
                                    )}
                                </ul>
                            </div>
                            <button onClick={this.props.setData.bind(this, "race", race)}>Set race as {race.name}</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
