import {
    getListFailureAction,
    getListSuccessAction,
    loginUserFailureAction,
    loginUserSuccessAction,
    regUserFailureAction,
    regUserSuccessAction,
    uploadFileFailureAction,
    uploadFileSuccessAction 
} from "../actions/user.action";

export const registerUserThunk = (action) => (dispatch, getState, {api}) => {
    return api.userResource.register(action.payload).then((res) => {
        dispatch(regUserSuccessAction(res))
    }).catch((error) => {
        dispatch(regUserFailureAction(error))
    });
}

export const loginUserThunk = (action) => (dispatch, getState, {api}) => {
    return api.userResource.login(action.payload).then((res) => {
        dispatch(loginUserSuccessAction(res))
    }).catch((err) => {
        dispatch(loginUserFailureAction(err))
    })
}

export const uploadFileThunk = (action) => (dispatch, getState, {api}) => {
    return api.userResource.uploadFile(action.payload).then((res) => {
        dispatch(uploadFileSuccessAction(res))
    }).catch((err) => {
        dispatch(uploadFileFailureAction(err))
    })
}

export const getListThunk = (action) => (dispatch, getState, {api}) => {
    return api.userResource.getList().then((res) => {
        dispatch(getListSuccessAction(res))
    }).catch((err) => {
        dispatch(getListFailureAction(err))
    })
}