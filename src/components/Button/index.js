import React from 'react'
import './Button.css'

function Button(props) {
    return (
        
        <div className="Button">
            <a onClick={props.onClick} className={props.selected ? "selected" : ""}>{props.children}</a>
        </div>
    )
}

export default Button