import React from 'react';

import StatsComponent from '../components/StatsComponent'
import SkillsComponent from '../components/SkillsComponent'
import FeaturesComponent from '../components/FeaturesComponent'
import SpellsComponent from '../components/SpellsComponent'

export default function() {
    return (
        <div className="character">
            <div className="character__inner">
                <div className="character__main">
                    <h1>Character Sheet
                        <small>Put the character sheet component here!</small>
                    </h1>
                    CharacterObject:{JSON.stringify(this.state.characterObject)}<br />
                    <StatsComponent character={this.state.character} characterObject={this.state.characterObject} updateCharacter={this.updateCharacter.bind(this)} />
                    <SkillsComponent character={this.state.character} characterObject={this.state.characterObject} updateCharacter={this.updateCharacter.bind(this)} />
                    <FeaturesComponent character={this.state.character} characterObject={this.state.characterObject} updateCharacter={this.updateCharacter.bind(this)} />
                    <SpellsComponent character={this.state.character} characterObject={this.state.characterObject} updateCharacter={this.updateCharacter.bind(this)} />
                    <p>Lorem ipsum dolor sit amet, periculis inciderint vix ne. Omnis debet vis ex, te choro salutatus disputando quo, no usu deserunt pericula argumentum. Vis solet philosophia an. Cu nec ipsum utinam, pri dico corrumpit disputando an. Minimum blandit sadipscing id pri. Ea propriae oportere pro.</p>
                </div>
            </div>
        </div>
    );
}
