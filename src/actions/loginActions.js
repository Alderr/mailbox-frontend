import * as ApiCalls from './apiCalls';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

export const loginSuccess = (userId) => ({
    type: LOGIN_SUCCESS,
    userId
});

export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const loginFailure = (message) => ({
    type: LOGIN_FAILURE,
    message
});

export const RESET_MESSAGE = 'RESET_MESSAGE';

export const resetMessage = () => ({
    type: RESET_MESSAGE
});

export const LOGIN = 'LOGIN';

export const login = (user) => dispatch => {
    dispatch({type: LOGIN});
    return ApiCalls.findUser(dispatch, user, loginSuccess, loginFailure);

};

export const REGISTER = 'REGISTER';

export const register = (user) => dispatch => {
    dispatch({type: REGISTER});
    return ApiCalls.registerUser(dispatch, user, loginSuccess, loginFailure);
};

export const LOGOUT = 'LOGOUT';

export const logout = () => ({
    type: LOGOUT
});
