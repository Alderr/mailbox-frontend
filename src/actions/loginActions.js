export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

export const loginSuccess = () => ({
    type: LOGIN_SUCCESS
});

export const LOGIN_FAILURE = 'LOGIN_SUCCESS';

export const loginFailure = () => ({
    type: LOGIN_FAILURE
});

export const LOGIN = 'LOGIN';

export const login = (credentials) => ({
    type: LOGIN,
    credentials
});

export const LOGOUT = 'LOGOUT';

export const logout = (credentials) => ({
    type: LOGOUT,
    credentials
});