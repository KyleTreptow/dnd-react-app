import React from 'react';

import DandD from '../classes/DandD.class'

export default function() {
    return (
        <div className="character">
            <h1>Skills Component
                <small>List the character&apos;s skills here</small>
            </h1>
            <ul className="skills">
                {Object.keys(this.skillsObject).map((skill, index) =>
                    <li key={index}>
                        {DandD.titleCase(skill)} ({DandD.titleCase(DandD.abbreviate(this.skillsObject[skill].modifierStat))}):<br />
                        Modstat: {JSON.stringify(this.skillsObject[skill].modifierStat)}<br />
                        Proficient: {JSON.stringify(this.skillsObject[skill].proficient)}<br />
                        CustomMods: <ul>
                            {this.skillsObject[skill].customModifiers.map((modifier, index) =>
                                <li key={index}>
                                    Modifier: {modifier.modifierValue}<br />
                                    Title: {modifier.title}<br />
                                    Description: {modifier.description}<br />
                                </li>
                            )}
                        </ul>
                        ConditionalMods: <ul>
                            {this.skillsObject[skill].conditionalModifiers.map((modifier, index) =>
                                <li key={index}>
                                    Modifier: {modifier.modifierValue}<br />
                                    Title: {modifier.title}<br />
                                    Description: {modifier.description}<br />
                                </li>
                            )}
                        </ul>
                    </li>
                )}
            </ul>
            <button onClick={this.props.updateCharacter}>Click me</button>
            <p>Lorem ipsum dolor sit amet, periculis inciderint vix ne. Omnis debet vis ex, te choro salukillus disputando quo, no usu deserunt pericula argumentum. Vis solet philosophia an. Cu nec ipsum utinam, pri dico corrumpit disputando an. Minimum blandit sadipscing id pri. Ea propriae oportere pro.</p>
        </div>
    );
}
