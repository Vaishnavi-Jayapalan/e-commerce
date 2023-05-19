import { getListThunk, loginUserThunk, registerUserThunk, uploadFileThunk } from "../middleware/user.thunk"

export const USER_REGISTER_ACTION = 'USER_REGISTER_ACTION'
export const USER_REGISTER_SUCCESS = 'USER_REGISTER_SUCCESS'
export const USER_REGISTER_FAILURE = 'USER_REGISTER_FAILURE'
export const RESET_USER_REG_ACTION = 'RESET_USER_REG_ACTION'

export const LOGIN_USER_ACTION = 'LOGIN_USER_ACTION'
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS'
export const LOGIN_USER_FAILURE = 'LOGIN_USER_FAILURE'
export const RESET_LOGIN_USER_ACTION = 'RESET_LOGIN_USER_ACTION'

export const UPLOAD_FILE_ACTION = 'UPLOAD_FILE_ACTION'
export const UPLOAD_FILE_SUCCESS_ACTION = 'UPLOAD_FILE_SUCCESS_ACTION'
export const UPLOAD_FILE_FAILURE_ACTION = 'UPLOAD_FILE_FAILURE_ACTION'
export const RESET_UPLOAD_FILE_ACTION = 'RESET_UPLOAD_FILE_ACTION'

export const GET_LIST_ACTION = 'GET_LIST_ACTION'
export const LIST_SUCCESS_ACTION = 'LIST_SUCCESS_ACTION'
export const LIST_FAILURE_ACTION = 'LIST_FAILURE_ACTION'
export const RESET_LIST_ACTION = 'RESET_LIST_ACTION'

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
    return loginUserThunk({ type: LOGIN_USER_ACTION, payload: data})
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

export const uploadFileAction = (data) => {
    return uploadFileThunk({ type: UPLOAD_FILE_ACTION, payload: data })
}

export const uploadFileSuccessAction = (data) => {
    return { type: UPLOAD_FILE_SUCCESS_ACTION, payload: data}
}

export const uploadFileFailureAction = (data) => {
    return { type: UPLOAD_FILE_FAILURE_ACTION, payload: data }
}

export const resetUploadFileAction = () => {
    return { type: RESET_UPLOAD_FILE_ACTION }
}

export const getListAction = () => {
    return getListThunk({ type: GET_LIST_ACTION })
}

export const getListSuccessAction = (data) => {
    return { type: LIST_SUCCESS_ACTION, payload: data}
}

export const getListFailureAction = (data) => {
    return { type: LIST_FAILURE_ACTION, payload: data}
}

export const resetListAction = () => {
    return { type: RESET_LIST_ACTION }
}