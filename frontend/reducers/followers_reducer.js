import { RECEIVE_ALL_USERS } from "../actions/user_actions"
import { RECEIVE_CURRENT_USER } from "../actions/session_actions"

export default (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            nextState = action.payload.followers
            return nextState;
        case RECEIVE_ALL_USERS:
            nextState = action.payload.followers
            return nextState
        default:
            return state
    }
}