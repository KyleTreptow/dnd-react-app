import React from 'react';

import ClassData from '../../../../../data/classData';

export default function() {
    return (
        <div className="character">
            <div className="character__inner">
                <div className="character__main">
                    <h2>Choose your class</h2>
                    <p>Your race will determine the the role of your character.</p>
                    {ClassData.map((classObj, index) =>
                        <div key={index}>
                            <h3>{classObj.name}</h3>
                            <div>
                                <h4>Overview</h4>
                                <p>PHB Page: {classObj.phbPage}</p>
                                <p>Suggested Prioritized Stats:
                                    <ul>
                                        {classObj.suggestions.stats.map((stat, i) =>
                                            <li key={index}>{stat}</li>
                                        )}
                                    </ul>
                                </p>
                                <p>Suggested Background: {classObj.suggestions.background}</p>
                                <p>Suggested Starting Inventory:
                                    <ul>
                                        {classObj.suggestions.equipment.map((equipment, i) =>
                                            <li key={index}>{equipment}</li>
                                        )}
                                    </ul>
                                </p>
                            </div>
                            <div>
                                <h4>HP</h4>
                                <p>Hit dice: {classObj.hp.dice}</p>
                                <p>HP at level 1: {classObj.hp.level1Base} + {classObj.hp.level1Mod} modifier</p>
                                <p>HP upon level up: {classObj.hp.levelup}</p>
                            </div>
                            <div>
                                <h4>Proficiencies</h4>
                                <p>Armor:
                                    <ul>
                                        {classObj.proficiencies.armor.map((proficiency, i) =>
                                            <li key={index}>{proficiency}</li>
                                        )}
                                    </ul>
                                </p>
                                <p>Weapons:
                                    <ul>
                                        {classObj.proficiencies.weapons.map((proficiency, i) =>
                                            <li key={index}>{proficiency}</li>
                                        )}
                                    </ul>
                                </p>
                                <p>Tools:
                                    <ul>
                                        {classObj.proficiencies.tools.map((proficiency, i) =>
                                            <li key={index}>{proficiency}</li>
                                        )}
                                    </ul>
                                </p>
                                <p>Saving Throws:
                                    <ul>
                                        {classObj.proficiencies.saving.map((proficiency, i) =>
                                            <li key={index}>{proficiency}</li>
                                        )}
                                    </ul>
                                </p>
                                <p>Skills:
                                    Choose {classObj.proficiencies.skills.quantity} of the following:
                                    <ul>
                                        {classObj.proficiencies.skills.skills.map((proficiency, i) =>
                                            <li key={index}>{proficiency}</li>
                                        )}
                                    </ul>
                                </p>
                            </div>
                            <div>
                                <h4>Features</h4>
                                <ul>
                                    {classObj.features.map((feature, i) =>
                                        <li key={index}>{feature}</li>
                                    )}
                                </ul>
                            </div>
                            <div>
                                <h4>Specializations</h4>
                                {classObj.specializations.map((specialization, i) =>
                                    <p key={index}>{specialization.name}
                                        <ul>
                                            {specialization.features.map((feature, i) =>
                                                <li key={index}>{feature}</li>
                                            )}
                                        </ul>
                                    </p>
                                )}
                            </div>
                            <button onClick={this.props.setData.bind(this, "class", classObj)}>Set race as {classObj.name}</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
