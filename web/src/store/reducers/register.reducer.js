import { RESET_USER_REG_ACTION, USER_REGISTER_ACTION, USER_REGISTER_FAILURE, USER_REGISTER_SUCCESS } from "../actions/user.action"

export const initialState = {
    isSuccess: false, 
    isError: false, 
    errors: null, 
    name: '',
    email: '',
    password: ''
}

const registerReducer = (state=initialState, action) => {
    switch (action.type) {
        case USER_REGISTER_ACTION:
            return Object.assign({}, state, action.payload)
        case USER_REGISTER_SUCCESS:
            return Object.assign({}, state, {isSuccess: true});
        case USER_REGISTER_FAILURE:
            return Object.assign({}, state, {isError: true, errors: action.payload.response.data.errors});
        case RESET_USER_REG_ACTION:
            return Object.assign({}, state, initialState);
        default:
            return state
    }
}

export default registerReducer