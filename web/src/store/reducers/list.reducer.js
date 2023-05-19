import { LIST_FAILURE_ACTION, LIST_SUCCESS_ACTION, RESET_LIST_ACTION } from "../actions/user.action"

const initialState = {
    list: [],
    isSuccess: false, 
    isError: false,
    errors: null
}

const listReducer = (state=initialState, action) => {
    switch(action.type) {
        case LIST_SUCCESS_ACTION:
            return Object.assign({}, state, {list: action.payload.data, isSuccess: true})
        case LIST_FAILURE_ACTION:
            return Object.assign({}, state, {isError: true, errors: action.payload.response.data.errors})
        case RESET_LIST_ACTION:
            return Object.assign({}, state, initialState)
        default:
            return state
    }
}

export default listReducer;