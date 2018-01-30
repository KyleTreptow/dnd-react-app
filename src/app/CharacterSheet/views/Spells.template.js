import React from 'react';

export default function() {
    return (
        <div className="character">
            <h1>Spells Component
                <small>List the character&apos;s spells here</small>
            </h1>

            {this.spellsObject.map((spell, index) =>
                <li key={index}>
                    Name: {spell.name}<br />
                    Class: {spell.class}<br />
                    Description: <span dangerouslySetInnerHTML={{ __html: spell.description }} /><br />
                    Page Number: {spell.page}<br />
                    Range: {spell.range}<br />
                    Components: {spell.components}<br />
                    Ritual: {spell.ritual}<br />
                    Duration: {spell.duration}<br />
                    Concentration: {spell.concentration}<br />
                    Casting Time: {spell.casting_time}<br />
                    School: {spell.school}<br />
                    Level: {spell.level}
                </li>
            )}

            <button onClick={this.props.updateCharacter}>Click me</button>
            <p>Lorem ipsum dolor sit amet, periculis inciderint vix ne. Omnis debet vis ex, te choro salukillus disputando quo, no usu deserunt pericula argumentum. Vis solet philosophia an. Cu nec ipsum utinam, pri dico corrumpit disputando an. Minimum blandit sadipscing id pri. Ea propriae oportere pro.</p>
        </div>
    );
}
