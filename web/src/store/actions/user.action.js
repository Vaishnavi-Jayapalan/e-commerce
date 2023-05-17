import { registerUserThunk } from "../middleware/user.thunk"

export const USER_REGISTER_ACTION = 'USER_REGISTER_ACTION'
export const USER_REGISTER_SUCCESS = 'USER_REGISTER_SUCCESS'
export const USER_REGISTER_FAILURE = 'USER_REGISTER_FAILURE'
export const RESET_USER_REG_ACTION = 'RESET_USER_REG_ACTION'

export const LOGIN_USER_ACTION = 'LOGIN_USER_ACTION'
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS'
export const LOGIN_USER_FAILURE = 'LOGIN_USER_FAILURE'
export const RESET_LOGIN_USER_ACTION = 'RESET_LOGIN_USER_ACTION'

export const registerUserAction = (data) => {
    return registerUserThunk({type: USER_REGISTER_ACTION, payload: data})
}

export const regUserSuccessAction = (data) => {
    return {type: USER_REGISTER_SUCCESS, payload: data}
}

export const regUserFailureAction = (data) => {
    return {type: USER_REGISTER_FAILURE, payload: data}
}

export const loginUserAction = (data) => {
    return { type: LOGIN_USER_ACTION, payload: data}
}

export const loginUserSuccessAction = (data) => {
    return { type: LOGIN_USER_SUCCESS, payload: data}
}

export const loginUserFailureAction = (data) => {
    return { type: LOGIN_USER_FAILURE, payload: data}
}

export const resetRegUserAction = () => {
    return { type: RESET_USER_REG_ACTION }
}

export const resetLoginUserAction = () => {
    return { type: RESET_LOGIN_USER_ACTION }
}