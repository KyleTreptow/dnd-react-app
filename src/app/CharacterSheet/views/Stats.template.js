import React from 'react';

import DandD from '../classes/DandD.class'

export default function() {
    return (
        <div className="character">
            <h1>Stats Component
                <small>List the character&apos;s stats here</small>
            </h1>
            <ul className="stats">
                {Object.keys(this.statsObject).map((stat, index) =>
                    <li key={index}>{stat}: {this.statsObject[stat]} ({DandD.statToBonus(this.statsObject[stat])})</li>
                )}
            </ul>
            <button onClick={this.props.updateCharacter}>Click me</button>
            <p>Lorem ipsum dolor sit amet, periculis inciderint vix ne. Omnis debet vis ex, te choro salutatus disputando quo, no usu deserunt pericula argumentum. Vis solet philosophia an. Cu nec ipsum utinam, pri dico corrumpit disputando an. Minimum blandit sadipscing id pri. Ea propriae oportere pro.</p>
        </div>
    );
}
