import { combineReducers } from "redux";
import sessionErrorsReducer from "./session_errors_reducer"
import burgerErrorsReducer from "./burger_errors_reducer"

const errorsReducer = combineReducers({
    session: sessionErrorsReducer,
    burgers: burgerErrorsReducer
})

export default errorsReducer