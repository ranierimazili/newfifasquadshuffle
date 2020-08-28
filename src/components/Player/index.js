import React from 'react'
import './Player.css'

function Player(props) {
    return (
        <div className="player" style={{left:props.position.left,bottom:props.position.bottom}}>
            <img src={props.image ?? "/assets/images/players/notfound.webp"} title="Player"/>
            <div className="name">
                <a href="/" title="Player" className="link-player">{props.name}</a>
            </div>
        </div>
    )
}

export default Player