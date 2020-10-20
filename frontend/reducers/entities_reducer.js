import { combineReducers } from 'redux';
import usersReducer from "./users_reducer"
import burgersReducer from "./burger_reducer"
import restaurantsReducer from "./restaurant_reducer"
import followersReducer from "./followers_reducer"


const entitiesReducer = combineReducers({
    users: usersReducer,
    burgers: burgersReducer,
    restaurants: restaurantsReducer,
    followers: followersReducer
});

export default entitiesReducer;