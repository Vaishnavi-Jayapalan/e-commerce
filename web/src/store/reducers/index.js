import { combineReducers } from "redux";
import loginReducer from "./login.reducer";
import registerReducer from "./register.reducer";
import fileUploadReducer from './file.reducer';
import listReducer from './list.reducer';

export const rootReducer = combineReducers({
    loginReducer, 
    registerReducer, 
    fileUploadReducer,
    listReducer
})