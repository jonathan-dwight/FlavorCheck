import { RECEIVE_CURRENT_USER } from "../actions/session_actions"
import { RECEIVE_BURGERS } from "../actions/burger_actions"
import { RECEIVE_ALL_USERS } from "../actions/user_actions";

export default (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state)
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            nextState[action.user.id] = action.user
            return nextState
        // return Object.assign({}, state, {[action.user.id]: action.user})
        case RECEIVE_ALL_USERS:
            nextState = action.payload.users
            return nextState;
        case RECEIVE_BURGERS:
            return Object.assign(action.payload.users, nextState)
            // return nextState     
        default:
            return state;
    }
}