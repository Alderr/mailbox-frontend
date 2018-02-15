import { getUserInfo } from './apiCalls';

export const getUser = (userId) => dispatch => {
    dispatch(loading());
    return getUserInfo(dispatch, userId);

};

export const LOADING = 'LOADING';

export const loading = () => ({
    type: LOADING
});

export const GETUSER_FAIL = 'GETUSER_FAIL';

export const getUserFail = (error) => ({
    type: GETUSER_FAIL,
    error
});
