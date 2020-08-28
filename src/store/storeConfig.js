import {createStore, combineReducers} from 'redux'

const reducers = combineReducers({
    competitors: function(state, action) {
        switch(action.type) {
            case 'ADD_COMPETITOR':
                return [...state, action.payload]
            default:
                return state != null ? state : ["Player 1", "Player 2", "Player 3", "Player 4","Player 5", "Player 6", "Player 7", "Player 8", "Player 9", "Player 10"];
        }
    },
    formation: function(state, action) {
        console.log(state, ' ', action)
        switch(action.type) {
            case 'CHG_FORMATION':
                return action.payload
            default:
                return state != null ? state : "352";
        }
    }
})

function storeConfig() {
    return createStore(reducers)
}

export default storeConfig