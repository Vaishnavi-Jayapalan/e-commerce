import { regUserFailureAction, regUserSuccessAction } from "../actions/user.action";

export const registerUserThunk = (action) => (dispatch, getState, {api}) => {
    return api.userResource.register(action.payload).then((res) => {
        dispatch(regUserSuccessAction(res))
    }).catch((error) => {
        dispatch(regUserFailureAction(error))
    });
}