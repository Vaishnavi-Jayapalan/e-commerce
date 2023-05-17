import { combineReducers } from "redux";
import loginReducer from "./login.reducer";
import registerReducer from "./register.reducer";

export const rootReducer = combineReducers({
    loginReducer, 
    registerReducer
})