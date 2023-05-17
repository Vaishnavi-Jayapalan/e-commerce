import { LOGIN_USER_FAILURE, LOGIN_USER_SUCCESS, RESET_LOGIN_USER_ACTION } from "../actions/user.action"

export const initialState = {
    isSuccess: false, 
    isError: false, 
    errors: null, 
    email: '',
    password: ''
}

const loginReducer = (state=initialState, action) => {
    switch (action.type) {
        case LOGIN_USER_SUCCESS:
            return Object.assign({}, state, action.payload);
        case LOGIN_USER_FAILURE:
            return Object.assign({}, state, action.payload);
        case RESET_LOGIN_USER_ACTION:
            return Object.assign({}, state, initialState)
        default:
            return state
    }
}

export default loginReducer