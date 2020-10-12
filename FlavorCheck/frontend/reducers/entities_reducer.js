import { combineReducers } from 'redux';
import usersReducer from "./users_reducer"
//going to have a burger one 


const entitiesReducer = combineReducers({
    users: usersReducer,
});

export default entitiesReducer;