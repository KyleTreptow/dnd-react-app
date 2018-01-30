import React from 'react';

export default function() {
    return (
        <div className="character">
            <h1>Features Component
                <small>List the character&apos;s features here</small>
            </h1>
            <div class="features">
                <h2>Class Features</h2>
                <ul className="classFeatures">
                {this.classFeaturesObject.map((feature, index) =>
                    <li key={index}>
                        Name: {feature.name}<br />
                        Class: {feature.class}<br />
                        Description: {feature.description}
                    </li>
                )}
                </ul>
            </div>
            <div class="features">
                <h2>Racial Features</h2>
                <ul className="racialFeatures">
                    {this.racialFeaturesObject.map((feature, index) =>
                        <li key={index}>
                            Name: {feature.name}<br />
                            Description: {feature.description}
                        </li>
                    )}
                </ul>
            </div>
            <button onClick={this.props.updateCharacter}>Click me</button>
            <p>Lorem ipsum dolor sit amet, periculis inciderint vix ne. Omnis debet vis ex, te choro salukillus disputando quo, no usu deserunt pericula argumentum. Vis solet philosophia an. Cu nec ipsum utinam, pri dico corrumpit disputando an. Minimum blandit sadipscing id pri. Ea propriae oportere pro.</p>
        </div>
    );
}
