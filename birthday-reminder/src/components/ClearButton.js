import React from 'react';
import './ClearButton.css';

function ClearButton(props) {
    return (
        <div className="button-container">
            <a href="#" onClick={props.handleClear}><p>Clear All</p></a>
        </div>
    );
}

export default ClearButton;
