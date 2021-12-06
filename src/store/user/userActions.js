
import {types} from "../types";

export const loginSuccess = (user) => ({
    type: types.LOGIN_SUCCESS,
    payload: user
});


export const loginFailed = (user) => ({
    type: types.LOGIN_FAILED  
});


export const loginSuccess = (user) => ({
    type: types.LOGOUT
});
