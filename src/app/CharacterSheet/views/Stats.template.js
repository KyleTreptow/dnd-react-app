import React from 'react';

import DandD from '../classes/DandD.class'

export default function() {
    return (
        <div>
            <h1>Stats Component
                <small>List the character&apos;s stats here</small>
            </h1>

            <h2>View to the specs</h2>
            <div className="character-stats">
            {Object.keys(this.statsObject).map((stat, index) =>
                <div key={index} className="character-stats__container">
                    <div><small>{DandD.titleAbbr(stat)}</small></div>
                    <sup>{this.statsObject[stat].stat}</sup>/<sub>{DandD.statToBonus(this.statsObject[stat].stat)}</sub>
                </div>
            )}
            </div>
            <hr />
            <h2>Alternate view for iPhone SE</h2>
            <div className="character-stats">
                {Object.keys(this.statsObject).map((stat, index) =>
                    <div key={index} className="character-stats__container">
                        <div><small>{DandD.titleAbbr(stat)}</small></div>
                        Base: {this.statsObject[stat].stat}<br />
                        Mod: {DandD.statToBonus(this.statsObject[stat].stat)}<br />
                        Save: {JSON.stringify(this.statsObject[stat].saveProficient)}
                    </div>
                )}
            </div>
        </div>
    );
}
