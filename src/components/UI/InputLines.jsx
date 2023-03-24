import React from "react";
import dollar from '../images/icon-dollar.svg';

const InputLines = (props) => {
    return(
        <div className="input-section">
            <div className={`input-text-container ${props.error ? 'error' : ''}`}>
                <label className="section-title" htmlFor={ props.id }>{ props.label }</label>
                <span className="error">Can't be zero</span>
                <div className="input-with-icon">
                    <i className={`icon ${props.icon}`}></i>
                </div>
            </div>

        </div>
    )
}

export default InputLines;