import React from 'react';

export default function() {
    return (
        <div className="character">
            <div className="character__inner">
                <div className="character__main">
                    <h1>Summary Page
                        <small>Review your character</small>
                    </h1>
                    <pre>
                        {JSON.stringify(this.props.character, null, 2)}
                    </pre>
                </div>
            </div>
        </div>
    );
}
