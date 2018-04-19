import { findUser } from './apiCalls';

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

export const LOGIN = 'LOGIN';

export const login = (user) => dispatch => {
    dispatch({type: LOGIN});
    return findUser(dispatch, user, loginSuccess, loginFailure);

};

export const LOGOUT = 'LOGOUT';

export const logout = () => ({
    type: LOGOUT
});
