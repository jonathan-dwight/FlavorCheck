import { RECEIVE_CURRENT_USER } from "../actions/user_actions"

export default (state = [], action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            debugger
            nextState[action.payload.followers] = action.payload.followers
            return nextState;
        default:
            return state
    }
}