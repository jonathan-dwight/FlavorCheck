import { RECEIVE_RESTAURANTS, RECEIVE_RESTAURANT } from "../actions/restaurant_actions"

export default (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_RESTAURANTS:
            nextState = action.restaurants
            return nextState;
        case RECEIVE_RESTAURANT:
            nextState[action.restaurant.id] = action.restaurant
            return nextState;
        default:
            return state;
    }
}