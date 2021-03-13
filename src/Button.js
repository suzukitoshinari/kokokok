import React from 'react';
import './Button.css';

function Button(props) {
    return (
        <button className="ui_button">
            {props.title}
        </button>
    )
}

export default Button;
