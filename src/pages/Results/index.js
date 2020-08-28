import React from 'react'
import Field from '../../components/Field'
import Player from '../../components/Player'
import './Results.css'

import { getFormation, shuffle } from '../../assets/utils/utils'

import { connect } from 'react-redux'

const players = require('../../assets/datasets/fifaindex.json')


function Results(props) {
    
    
    const formation = getFormation(props.formation)

    let results = [];
    for (let i=0;i<props.competitors.length;i++) {
        results[props.competitors[i]] = {};
        results[props.competitors[i]].name = props.competitors[i];
        results[props.competitors[i]].players = [];
    }


    for (let i=0;i<formation.length;i++) {
        let suffleredCompetitors = shuffle(props.competitors);
        for (let j=0;j<suffleredCompetitors.length;j++) {
            results[suffleredCompetitors[j]].players.push(players[formation[i].dsPosition].shift());
        }
    }

    console.log(results.length)
    
    let teams = [];
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
            <div className="newpage">
                <h1>{results[key].name}</h1>
                <Field>{players}</Field>
            </div>
        );
    }


    return (
        <div className="results">
            {teams}
        </div>
    )
}

function mapStateToProps(state) {
    return {
        formation : state.formation,
        competitors: state.competitors
    }
}

export default connect(mapStateToProps)(Results)
 