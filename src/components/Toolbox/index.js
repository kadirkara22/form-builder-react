
import React from 'react'
import "./toolbox.css"
const Toolbox = () => {
    return (
        <div className="toolbox">
            <div className="toolbox-header">

                <h4>Toolbox</h4>
            </div>
            <ul>
                <li><i className="fas fa-font"></i>Text Input</li>
                <li><i className="fas fa-text-height"></i>Textarea</li>
                <li><i className="far fa-caret-square-down"></i>Dropdown</li>
            </ul>
        </div>
    )
}

export default Toolbox
