import { getUser } from './apiCalls';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

export const loginSuccess = () => ({
    type: LOGIN_SUCCESS
});

export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const loginFailure = () => ({
    type: LOGIN_FAILURE
});

export const LOGIN = 'LOGIN';

export const login = (user) => dispatch => {

    return getUser(dispatch, user, loginSuccess, loginFailure);

};

export const LOGOUT = 'LOGOUT';

export const logout = (credentials) => ({
    type: LOGOUT
});
