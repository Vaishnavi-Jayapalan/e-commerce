import { RESET_UPLOAD_FILE_ACTION, UPLOAD_FILE_FAILURE_ACTION, UPLOAD_FILE_SUCCESS_ACTION } from "../actions/user.action"

const initialState = {
    file: '',
    fileType: '',
    isSuccess: false,
    isError: false,
    errors: null
}

const fileUploadReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPLOAD_FILE_SUCCESS_ACTION:
            return Object.assign({}, state, {isSuccess: true})
        case UPLOAD_FILE_FAILURE_ACTION:
            return Object.assign({}, state, {isError: true, errors: action.payload.response.data.errors})
        case RESET_UPLOAD_FILE_ACTION:
            return Object.assign({}, state, initialState)
        default:
            return state
    }
}

export default fileUploadReducer;