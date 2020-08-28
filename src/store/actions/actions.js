export function addCompetitorAction(competitor) {
    return {
        type: 'ADD_COMPETITOR',
        payload: competitor
    }
}

export function changeFormationAction(formation) {
    return {
        type: 'CHG_FORMATION',
        payload: formation
    }
}