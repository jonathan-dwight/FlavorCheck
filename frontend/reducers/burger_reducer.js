import { RECEIVE_BURGERS, RECEIVE_BURGER, REMOVE_BURGER } from "../actions/burger_actions"

export default (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state)

    switch (action.type) {
        case RECEIVE_BURGERS:
            nextState = action.burgers
            return nextState;
        case RECEIVE_BURGER:
            nextState[action.burger.id] = action.burger
            return nextState;
        case REMOVE_BURGER:
            delete nextState[action.burger]
            return nextState;
        default:
            return state;
    }
} 