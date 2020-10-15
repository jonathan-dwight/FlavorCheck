import { combineReducers } from 'redux';
import usersReducer from "./users_reducer"
import burgersReducer from "./burger_reducer"
//going to have a burger one 


const entitiesReducer = combineReducers({
    users: usersReducer,
    burgers: burgersReducer
});

export default entitiesReducer;