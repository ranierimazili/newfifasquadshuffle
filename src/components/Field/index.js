import React from 'react'
import './Field.css'

function Field(props) {
    let players = [];
    let substitutes = [];

    for (var i=0;i<props.children.length;i++) {
        if (i<11) {
            players.push(props.children[i]);
        } else {
            substitutes.push(props.children[i]);
        }
    }


    return (
        <>
        <div className="layout">
            <div className="field">
                <div className="card-body">
                    <div className="formation">
                        <div className="center-circle"></div>
                        <div className="field left">
                            <div className="penalty-area"></div>
                        </div>
                        <div className="field right">
                            <div className="penalty-area"></div>
                        </div>
                        {players}
                    </div>
                </div>
            </div>


            <div className="field-substitutes">
                <div className="card-body">
                    <div className="formation-substitutes">
                       {substitutes}
                    </div>
                </div>
            </div>
        </div>
        </>      
        
    )
}

export default Field