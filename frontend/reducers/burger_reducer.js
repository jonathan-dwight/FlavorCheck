import { RECEIVE_BURGERS, RECEIVE_BURGER, REMOVE_BURGER } from "../actions/burger_actions"
import { RECEIVE_CURRENT_USER } from "../actions/session_actions";


export default (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state)

    switch (action.type) {
        case RECEIVE_BURGERS:
            nextState = action.payload.burgers
            return nextState;
        case RECEIVE_BURGER:
            nextState[action.burger.id] = action.burger
            return nextState;
        case RECEIVE_CURRENT_USER:
            if (!action.payload.burgers) return nextState
            nextState = action.payload.burgers
            return nextState
        case REMOVE_BURGER:
            delete nextState[action.burger]
            return nextState;
        default:
            return state;
    }
} 