import React from 'react'
import Field from '../Field'
import Player from '../Player'
import Button from '../Button'
import './Formation.css'

import { getFormation } from '../../assets/utils/utils'

import { connect } from 'react-redux'
import { changeFormationAction } from '../../store/actions/actions'

function Formation(props) {
    
    function handleChangeFormation(formation) {
        props.changeFormation(formation);
    }

    let playersPositions = getFormation(props.formation);

    
    const players = playersPositions.map((player) =>
        <Player 
            position={player}
            image="/assets/images/players/notfound.webp"
            name={player.pos}
        />
    );

    /*let players = [];
    for (let i=0;i<11;i++) {
        players.push(
            <Player 
                position={playersPositions[i]}
                image="/assets/images/players/notfound.webp"
                name={playersPositions[i].pos}
            />
        )
    }

    let substitutes = [];
    for (let i=11;i<18;i++) {
        substitutes.push(
            <Player 
                position={playersPositions[i]}
                image="/assets/images/players/notfound.webp"
                name={playersPositions[i].pos}
            />
        )
    }*/



    /*let teams = [];
    for (let key in results) {
        let players = [];
        for (let i=0;i<formation.length;i++) {
            players.push(
                <Player 
                    position={formation[i]}
                    image={"/assets/images/players/"+results[key].players[i].picture}
                    name={results[key].players[i].name}
                />
            );
        }
        teams.push(
            <div>
                <h1>{results[key].name}</h1>
                <Field>{players}</Field>
            </div>
        );
    }*/

    return (
        <>
            <Button selected={props.formation==="352"} onClick={() => handleChangeFormation('352')}>3-5-2</Button>
            <Button selected={props.formation==="442"} onClick={() => handleChangeFormation('442')}>4-4-2</Button>
            <Button selected={props.formation==="4231"} onClick={() => handleChangeFormation('4231')}>4-2-3-1</Button>
            <Field>
                {players}
            </Field>
        </>
    )
}
function mapStateToProps(state) {
    return {
        formation : state.formation
    }
}

function mapDispatchToProps(dispatch) {
    return {
        changeFormation(formation) {
            const action = changeFormationAction(formation)
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Formation)