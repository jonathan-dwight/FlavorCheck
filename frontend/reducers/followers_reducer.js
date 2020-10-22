import { RECEIVE_ALL_USERS } from "../actions/user_actions"
import { RECEIVE_FOLLOW, DELETE_FOLLOW } from "../actions/follower_action"
import { RECEIVE_CURRENT_USER } from "../actions/session_actions"

export default (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            if (!action.payload.followers) {
                return state
            }
            nextState = action.payload.followers
            return nextState;
        case RECEIVE_FOLLOW:
            nextState[action.payload.id] = action.payload
            return nextState
        case DELETE_FOLLOW:
            delete nextState[action.followId]
            return nextState
        case RECEIVE_ALL_USERS:
            nextState = action.payload.followers
            return nextState
        default:
            return state
    }
}