import React from 'react';

import StatsComponent from '../components/StatsComponent'

export default function() {
    return (
        <div className="character">
            <h1>Stats Component
                <small>List the character's stats here</small>
            </h1>
            CharacterObject:{JSON.stringify(this.props.characterObject)}<br />
            <button onClick={this.props.updateCharacter}>Click me</button>
            <p>Lorem ipsum dolor sit amet, periculis inciderint vix ne. Omnis debet vis ex, te choro salutatus disputando quo, no usu deserunt pericula argumentum. Vis solet philosophia an. Cu nec ipsum utinam, pri dico corrumpit disputando an. Minimum blandit sadipscing id pri. Ea propriae oportere pro.</p>
        </div>
    );
}
