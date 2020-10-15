import { RECEIVE_BURGER, RECEIVE_BURGER_ERRORS, CLEAR_BURGER_ERRORS} from "../actions/burger_actions"

export default (state = [], action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_BURGER:
            return []
        case RECEIVE_BURGER_ERRORS:
            return action.errors
        case CLEAR_BURGER_ERRORS:
            return []
        default:
            return state;
    }
}