import React  from 'react';
import './Competitors.css'

import { connect } from 'react-redux'
import { addCompetitorAction } from '../../store/actions/actions'

function Competitors(props) {
    
    const listCompetitors = props.competitors.map((competitor) =>
        <li key={competitor}>{competitor}</li>
    );

    function handleAddCompetitor(competitorName) {
        console.log("teste")
        if (competitorName && competitorName.length > 0) {
            props.addCompetitor(competitorName);
            document.getElementById("competitorName").value = "";
        }
    }

    return (
        <div className="Competitors">
            <div className="Header">
                <label>Nome do Competidor</label>
                <input id="competitorName" type="text"></input>
                <input type="button" value="Adicionar" onClick={() => handleAddCompetitor(document.getElementById("competitorName").value)}></input>
            </div>
            <div className="Body">
                <ul>{listCompetitors}</ul>
            </div>

        </div>
    )
}

function mapStateToProps(state) {
    return {
        competitors : state.competitors
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addCompetitor(competitorName) {
            const action = addCompetitorAction(competitorName)
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Competitors)